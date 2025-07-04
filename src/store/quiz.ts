import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    score: 0,
    timer: null,
    timeLeft: 0,
  }),
  getters: {
    currentQuestion(state) {
      return state.questions[state.currentQuestionIndex];
    },
    isQuizCompleted(state) {
      return state.currentQuestionIndex >= state.questions.length;
    },
    totalScore(state) {
      return state.userAnswers.reduce((total, answer, index) => {
        return total + (answer === state.questions[index].correctAnswer ? 1 : 0);
      }, 0);
    },
  },
  actions: {
    setQuestions(questions) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.userAnswers = [];
      this.score = 0;
    },
    answerQuestion(answer) {
      this.userAnswers[this.currentQuestionIndex] = answer;
      this.currentQuestionIndex++;
    },
    resetQuiz() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.userAnswers = [];
      this.score = 0;
      this.timeLeft = 0;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    startTimer(duration) {
      this.timeLeft = duration;
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
});