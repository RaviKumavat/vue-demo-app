<template>
  <div class="quiz-start">
    <h1>Welcome to the Quiz!</h1>
    <p>Test your knowledge with our interactive quiz. Click the button below to get started!</p>
    <router-link to="/quiz" class="start-button">
      <button>Start Quiz</button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('Get ready to test your knowledge!');
</script>

<style scoped>
.quiz-start {
  text-align: center;
  margin-top: 50px;
}

.start-button {
  margin-top: 20px;
}

.start-button button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>