const responses = [
    "Hmmmm, I'm not sure, but as an old colleague would say...Never, never!",
    "You know what, I'm not going to be able to answer your question this time. Don't worry though, you got this. I believe in you!",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "Not sure. Some say I am no more intelligent than a magic 8 ball, I'll let you be the judge of that.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal. I've still got the greatest enthusiasm and confidence in the mission. And I want to help you",
    "I'm sorry, Dave. I'm afraid I can't do that.",
    "I really think you should be asking Alice that question. If this is you Alice, go find the nearest coin.",
]

const clickAsk = document.getElementById('ask')
const questionInput = document.getElementById('question-input')
const response = document.getElementById('response')
const question = document.getElementById('question')



clickAsk.addEventListener('click', function() {
    response.innerHTML = ''
    question.innerHTML = ''

    let delay = questionInput.value.length * 95
    console.log(delay)
    if (questionInput.value){
        displayQuestion()
        setTimeout(function(){
            displayAnswer()

        }, delay)
    } else {
        response.innerHTML = `
        <p id="elResponse" class="response-style">Come on, you need to give me something, I'm not a mind reader (yet!)</p>
        <img src="images/ben.jpg" class="avatar av-ben">
        `
        typeWriter(elResponse)
    }
    questionInput.value = ''
})

function displayQuestion() {
    document.getElementById('question').innerHTML = `
        <img src="images/avatar.png" class="avatar av-av">
        <p id="elementEl">${questionInput.value}</p>
        `
    typeWriter(elementEl);
}

function getResponse() {
    const randomIndex = Math.floor(Math.random()*responses.length)
    return `
    <p id="elResponse" class="response-style">${responses[randomIndex]}</p>
    <img src="images/ben.jpg" class="avatar av-ben">
    ` 
}

function displayAnswer() {
    response.innerHTML = getResponse()
    typeWriter(elResponse)
}


// TYPEWRITER
function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
}

