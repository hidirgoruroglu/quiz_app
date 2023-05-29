function Question(questionText,answerOptions,correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
};


Question.prototype.checkTheAnswer = function(answer){
    return answer == this.correctAnswer;
};


let questions = [
    new Question("1-Which is a programming language?",{a:"Vue", b: "Django", c: "Java",d:"Css"},"c"),
    new Question("2-Which is a python framework?",{a:"Django", b: "React", c: "Angular"},"a"),
    new Question("3-Which is a programming language?",{a:"HTML", b: "C++", c: "Css"},"b"),
];
