<template>
  <div class="quiz-page">
    <QuizTimer :timeLeft="timeLeft" />
    <div v-if="currentQuestion">
      <QuizQuestion 
        :question="currentQuestion" 
        @answerSelected="handleAnswerSelected" 
      />
      <button v-if="!isLastQuestion" @click="nextQuestion">Next Question</button>
      <button v-if="isLastQuestion" @click="finishQuiz">Finish Quiz</button>
    </div>
    <QuizResult v-if="quizFinished" :score="score" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'pinia';
import { useTimer } from '../composables/useTimer';
import QuizQuestion from '../components/QuizQuestion.vue';
import QuizResult from '../components/QuizResult.vue';
import QuizTimer from '../components/QuizTimer.vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const questions = ref(store.questions);
const currentQuestionIndex = ref(0);
const quizFinished = ref(false);
const timeLeft = useTimer(60); // 60 seconds timer

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);

const isLastQuestion = computed(() => currentQuestionIndex.value === questions.value.length - 1);

const score = computed(() => store.calculateScore());

function handleAnswerSelected(answer: string) {
  store.recordAnswer(currentQuestion.value.id, answer);
}

function nextQuestion() {
  if (!isLastQuestion.value) {
    currentQuestionIndex.value++;
  }
}

function finishQuiz() {
  quizFinished.value = true;
  store.finalizeQuiz();
}

onMounted(() => {
  store.startQuiz();
});
</script>

<style scoped>
.quiz-page {
  padding: 20px;
}
</style>