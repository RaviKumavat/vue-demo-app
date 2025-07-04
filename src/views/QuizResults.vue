<template>
  <div class="quiz-results">
    <h1>Quiz Results</h1>
    <div v-if="score !== null">
      <p>Your Score: {{ score }} / {{ totalQuestions }}</p>
      <p v-if="feedback">{{ feedback }}</p>
      <button @click="restartQuiz">Restart Quiz</button>
    </div>
    <div v-else>
      <p>Loading results...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuizStore } from '../store/quiz';

export default defineComponent({
  name: 'QuizResults',
  setup() {
    const quizStore = useQuizStore();
    const score = quizStore.score;
    const totalQuestions = quizStore.totalQuestions;
    const feedback = quizStore.getFeedback();

    const restartQuiz = () => {
      quizStore.restartQuiz();
    };

    return {
      score,
      totalQuestions,
      feedback,
      restartQuiz,
    };
  },
});
</script>

<style scoped>
.quiz-results {
  text-align: center;
  margin-top: 20px;
}
</style>