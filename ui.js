function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.question_text = document.querySelector(".question_text"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.timeline = document.querySelector(".timeline")

}

UI.prototype.showQuestion = function (question) {
    let questionText = `<span>${question.questionText}</span>`;
    let options = "";

    for (let answer in question.answerOptions) {
        options += `
        <div class="option">
            <span><b>${answer}</b>: ${question.answerOptions[answer]}</span>
        </div>
        `;
    }

    this.question_text.innerHTML = questionText;
    this.option_list.innerHTML = options;

    const answer_options = this.option_list.querySelectorAll(".option");

    for (let option of answer_options) {
        option.setAttribute("onclick", "optionSelected(this)");
    };
}

UI.prototype.showQuestionsNumber = function (question_number,total_questions) {
    let tag = `<span class="badge bg-warning">${question_number} / ${total_questions}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.showTheScore = function(total_questions,correctAnswer) {
    let tag = `You answered ${correctAnswer} correct out of a total of ${total_questions} questions.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
};