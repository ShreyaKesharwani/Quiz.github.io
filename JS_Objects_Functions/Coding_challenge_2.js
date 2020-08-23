// CODING CHALLENGE 1

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

// CODING CHALLENGE 2
/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
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
Question.prototype.checkAns = function(ans, callback) {
    var sc;
    
    //var ans=parseInt(prompt(this.ques)); //parseInt coverts the answer entered here to INT (it will be starig by default)
    if(ans === this.correctAnswer){
        console.log("Correct Answer !!");
        sc = callback(true);
     
    }
    else {
        console.log("Wrong Answer. Try again !!!");
        sc = callback(false); 
     }
    this.displayScore(sc);  
}

Question.prototype.displayScore=function(score){
    console.log("Your current score is : "+score);
    console.log('--------------------------------------------------');
}
    
    
//Questions for the quiz
var Question1=new Question('National Animal of India ?',['Tiger','Lion'],0);
var Question2=new Question('National Language of India ?',['Hindi','English'],0);
var Question3=new Question('Number of states in India ?',['36','28','42'],1);
var Question4=new Question('National Bird of India ?',['Duck','Swan','Peafowl','Sparrow'],2);

    
//Questions stored in array
var listOfQuestion=[Question1,Question2,Question3,Question4];

     //Calculate score
function score(){
    var sc=0;
    return function(correct){
        if(correct){
        sc++;
    }
        return sc;
  }
}
    var keepsScore=score();
    
function nextQues(){
    //Generating random question no (0,1,2,3)
var quesno = Math.floor(Math.random() * listOfQuestion.length);
//console.log(quesno);

//Displaying random question
listOfQuestion[quesno].displayQues();
    
var ans=prompt("Please select the correct answer or type exit to quit"); 
    
    if (ans !== 'exit'){
        
        listOfQuestion[quesno].checkAns(parseInt(ans),keepsScore);
        nextQues();
    }
}
   nextQues();
    
   
})();
