<template>
  <div class="quiz-result">
    <h1>Quiz Results</h1>
    <p>Your Score: {{ score }} out of {{ totalQuestions }}</p>
    <div v-if="feedback">
      <h2>Feedback</h2>
      <p>{{ feedback }}</p>
    </div>
    <button @click="restartQuiz">Restart Quiz</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuizStore } from '../store/quiz';

export default defineComponent({
  setup() {
    const quizStore = useQuizStore();
    const score = quizStore.score;
    const totalQuestions = quizStore.totalQuestions;
    const feedback = computeFeedback(score, totalQuestions);

    function computeFeedback(score: number, total: number): string {
      const percentage = (score / total) * 100;
      if (percentage === 100) return "Perfect score! You're a genius!";
      if (percentage >= 80) return "Great job! You have a solid understanding.";
      if (percentage >= 50) return "Not bad, but there's room for improvement.";
      return "Keep trying! Practice makes perfect.";
    }

    function restartQuiz() {
      quizStore.resetQuiz();
    }

    return {
      score,
      totalQuestions,
      feedback,
      restartQuiz
    };
  }
});
</script>

<style scoped>
.quiz-result {
  text-align: center;
  margin-top: 20px;
}
</style>