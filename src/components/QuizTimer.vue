<template>
  <div class="quiz-timer">
    <span v-if="timeLeft > 0">{{ timeLeft }} seconds remaining</span>
    <span v-else>Time's up!</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import useTimer from '../composables/useTimer';

const { startTimer, stopTimer, resetTimer, timeLeft } = useTimer();

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  stopTimer();
});
</script>

<style scoped>
.quiz-timer {
  font-size: 1.5em;
  color: #333;
}
</style>