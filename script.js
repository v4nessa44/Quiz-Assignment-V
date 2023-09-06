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
let time; 
document.querySelector('#score').style='display:none'
function nextQuestion(){
    index++
    if(index>=questions.length){
        var initials= prompt('enter your initials')
        clearInterval(time)
        document.querySelector('#quiz').style='display:none'
        document.querySelector('#score').style='display:block'
        document.querySelector('#userScore').textContent=initials+': '+timeLeft
        localStorage.setItem('Highscore',initials+': '+timeLeft)
    }
    else{
        questionEl.textContent=questions[index].question
        option1.textContent=questions[index].option1
        option2.textContent=questions[index].option2
        option3.textContent=questions[index].option3
        option4.textContent=questions[index].option4
    }
  
}
function checkAnswer(){

}
option1.addEventListener('click',nextQuestion)
option2.addEventListener('click',nextQuestion)
option3.addEventListener('click',nextQuestion)
option4.addEventListener('click',nextQuestion)
var startButton= document.getElementById ('startButton')
var highScore =document.getElementById('highScore')
startButton.addEventListener('click',function(){
     time= setInterval(timer,1000)
    nextQuestion()
})
highScore.addEventListener('click', function(){
    var score =localStorage.getItem('Highscore')
    var scoreList =document.getElementById('scoreList')
    scoreList.textContent= score
})



function timer(){
   let timerEl=document.querySelector('#time') 
   timerEl.textContent=timeLeft
   timeLeft--
}
