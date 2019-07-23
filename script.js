window.alert("Content To Speak: \n 1. how are you \n 2. what's your age \n 3.say about me \n 4.whats about weather \n 5. thanks gokul \n 6. Music");
$(".talk").click(function() {
        $(".talk").toggleClass('talkActive');
});
console.log(window);
function adding(){
    document.querySelector('.talk').classList.add('talkActive');
    
}
window.addEventListener('keypress', adding);
const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = ["I'm great, i hope you'll be fantastic today", "my age is one day", "you are mad at tech and that sucks"];
const weather = ["It's rainy, today", "thank you have a great day"];
const harini = ["hi harini, your is gokul's angel", "love you minion", "stay with me forever"];
const gokul = ["shit, gokul is mad"];
const gesture = ['Hello sir! how can i help you? '];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("You can Speack");
}

recognition.onresult = function(event){
    console.log(event);
    const current = event.resultIndex;
    const SpeakIt = 'I cant get you ';
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    if(transcript === null){
        readOutLoud(SpeakIt);
    }
    readOutLoud(transcript);
}
btn.addEventListener("click", () => {
    recognition.start();
});

function readOutLoud(message){
    let audioNumber = Math.round(1 + Math.random() * 6);
    const audio = document.querySelector('.mymusic'+audioNumber);
    const speech = new SpeechSynthesisUtterance();
    if(message.includes('how are you')){
        const readIt = greetings[0];
        speech.text = readIt;
    }
    else if(message.includes("what's your age")){
        const readIt = greetings[1];
        speech.text = readIt;
    }
    else if(message.includes('say about me')){
        const readIt = greetings[2];
        speech.text = readIt;
    }
    else if(message.includes('whats about weather')){
        const readIt = weather[0];
        speech.text = readIt;
    }
    else if(message.includes('thanks gokul')){
        const readIt = weather[1];
        speech.text = readIt;
    }
    else if(message.includes('I am Harini')){
        const readIt = harini[0];
        speech.text = readIt;
    }
    else if(message.includes('love you')){
        const readIt = harini[1];
        speech.text = readIt;
    }
    else if(message.includes('what iniyan thinks')){
        const readIt = harini[2];
        speech.text = readIt;
    }
    else if(message.includes('query')){
        const readIt = gokul[0];
        speech.text = readIt;
    }
    else if(message.includes('hello')){
        const readIt = gesture[0];
        speech.text = readIt;
    }
    else if(message.includes('music')){
        // console.log(audio);
        audio.play();
    }
    else if(message.includes('stop')){
        // console.log(audio);
        location.reload();
    }
    else{
        speech.text = "I can't get you, please try once";
    }
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}