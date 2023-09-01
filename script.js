var questions = [
    {
        question: 'what color is the sky?',
        option1: 'Yellow',
        option2: 'Purple',
        option3: 'Red',
        option4: 'Blue',
        correct: 'Blue',
    },
    {
        question: 'what color is the grass?',
        option1: 'Yellow',
        option2: 'Purple',
        option3: 'Green',
        option4: 'Blue',
        correct: 'Green',
    },
    {
        question: 'what color is the sun?',
        option1: 'Yellow',
        option2: 'Purple',
        option3: 'Red',
        option4: 'Blue',
        correct:'Yellow',
    },

]
var questionEl=document.querySelector('#Question')
var option1=document.querySelector('#option1')
var option2=document.querySelector('#option2')
var option3=document.querySelector('#option3')
var option4=document.querySelector('#option4')
var timeLeft= 60
var index= -1
document.querySelector('#score').style='display:none'
function nextQuestion(){
    index++
    if(index>=questions.length){
        var initials= prompt('enter your initials')
        clearInterval(time)
        document.querySelector('#quiz').style='display:none'
        document.querySelector('#score').style='display:block'
        document.querySelector('#userScore').textContent=initials+': '+timeLeft
    }
    questionEl.textContent=questions[index].question
    option1.textContent=questions[index].option1
    option2.textContent=questions[index].option2
    option3.textContent=questions[index].option3
    option4.textContent=questions[index].option4
}
option1.addEventListener('click',nextQuestion)
option2.addEventListener('click',nextQuestion)
option3.addEventListener('click',nextQuestion)
option4.addEventListener('click',nextQuestion)
nextQuestion()
let time= setInterval(timer,1000)
function timer(){
   let timerEl=document.querySelector('#time') 
   timerEl.textContent=timeLeft
   timeLeft--
}
