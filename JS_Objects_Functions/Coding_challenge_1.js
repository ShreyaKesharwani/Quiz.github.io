// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){
   
    var Question = function(ques,Answers,correctAnswer){
    
    this.ques=ques;
    this.Answers=Answers;
    this.correctAnswer=correctAnswer;
    
}

//Displaying random question and it's options
Question.prototype.displayQues = function() {
    
    console.log(this.ques);
    for(var i=0;i<this.Answers.length;i++){
        console.log(i + ": " + this.Answers[i]);
    }
}

//Prompt the quetsion and check the answer
Question.prototype.promptQues = function() {
    
    var ans=parseInt(prompt(this.ques)); //parseInt coverts the answer entered here to INT (it will be starig by default)
    if(ans === this.correctAnswer){
        console.log("Correct Answer !!");
    }
    else 
        console.log("Try again !!!");
}


//Questions for the quiz
var Question1=new Question('National Animal of India ?',['Tiger','Lion'],0);
var Question2=new Question('National Language of India ?',['Hindi','English'],0);
var Question3=new Question('Number of states in India ?',['36','28','42'],1);
var Question4=new Question('National Bird of India ?',['Duck','Swan','Peafowl','Sparrow'],2);

//Questions stored in array
var listOfQuestion=[Question1,Question2,Question3,Question4];

//Generating random question no (0,1,2,3)
var quesno = Math.floor(Math.random() * listOfQuestion.length);
//console.log(quesno);

//Displaying random question
listOfQuestion[quesno].displayQues();
listOfQuestion[quesno].promptQues();

})();
