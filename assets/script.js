var startElement = document.querySelector('#start')
var quizElement = document.querySelector('#quiz')
var endElement = document.querySelector('#end')
var titleElement = document.querySelector('#title')
var questionsElement = document.querySelector('#questions')
var startButton = document.querySelector("#startButton")
var submitButton = document.querySelector("#endButton")
var questions = [
    {
        text: 'When was the Magna Carta signed?',
        choices: ['1520', '1215', '1812', '1776'],
        correct: '1215',
    },
    {
        text: 'What British king was publicly beheaded?',
        choices: ['King John', 'King Charles', 'King James', 'King George'],
        correct: 'King Charles',
    },
    {
        text: 'What battle was Napoleon defeated at?',
        choices: ['Waterloo', 'Trafalgar', 'Lubeck', 'Borodino'],
        correct: 'Waterloo',
    },
    {
        text: 'Who is considered to be "The Renaissance Man"?',
        choices: ['Vincent Van Gough', 'Michealangelo', 'Raphael', 'Leonardo da Vinci'],
        correct: 'Leonardo da Vinci'
    }
]
var questionOrder = 0
state = 'start';
// state changes the view to the start, quiz questions or the end
function currentSection() {
    if (state === 'start') {
        startElement.style.display = 'block';
        quizElement.style.display = 'none';
        endElement.style.display = 'none';
    }
    if (state === 'quiz') {
        startElement.style.display = 'none';
        quizElement.style.display = 'block';
        endElement.style.display = 'none';
        displayQuestion()
    }
    if (state === 'end') {
        startElement.style.display = 'none';
        quizElement.style.display = 'none';
        endElement.style.display = 'block';

    }
};
currentSection()
// makes the state continue to end if the are no more questions
// calls checkAnswer to alert if you are right or wrong before moving to next question
function nextQues(event){
    checkAnswer(event.target.textContent)
    questionOrder++
    questionsElement.innerHTML = null
    if(questionOrder < questions.length){
        displayQuestion()
        
    }
    else{
        state = 'end'
        currentSection()
    }
};
//appends text and choices objects to the quiz state
function displayQuestion(){
    state='quiz'
    var questionH2 = document.createElement('h2');
    questionH2.textContent = questions[questionOrder].text
    questionsElement.append(questionH2)
    for(i=0; i < questions[questionOrder].choices.length ; i++){
        var buttonElement = document.createElement('button')
        buttonElement.textContent = questions[questionOrder].choices[i]
        buttonElement.addEventListener('click', nextQues)
        questionsElement.append(buttonElement)
    }
};
startButton.addEventListener('click',function(){
    state='quiz'
    currentSection();
}
);
submitButton.addEventListener('click',function(){
    
});
//checks if the answer is correct and alerts a corresponding alert i.e correct or wrong
function checkAnswer(answer){
    if(answer == questions[questionOrder].correct){
        alert('Correct!')
    }
    else{
        alert('Wrong!')
    }
};
