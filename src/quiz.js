

class Quiz {
    
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining= timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

     getQuestion(){
        return this.questions[this.currentQuestionIndex];
     }
    
     moveToNextQuestion(){
        this.currentQuestionIndex ++;
     }

    shuffleQuestions(){
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
          }
    }

    checkAnswer(answer){
        if(answer === this.questions[this.currentQuestionIndex].answer){
            this.correctAnswers ++;
        }
    }

    hasEnded(){
        if(this.currentQuestionIndex < this.questions.length){
            return false;
        }
        else if (this.currentQuestionIndex === this.questions.length){
            return true;
        }
    }
    filterQuestionsByDifficulty(difficultyNum){
        if(difficultyNum === 1 || difficultyNum === 2 || difficultyNum === 3 ){
            this.questions = this.questions.filter((currentQuestion) => currentQuestion.difficulty === difficultyNum)
        }
    }

    averageDifficulty(){
        let average = this.questions.reduce((accumulator, currentQuestion) => accumulator + currentQuestion.difficulty,0);
        return average / this.questions.length ;
    }
}

