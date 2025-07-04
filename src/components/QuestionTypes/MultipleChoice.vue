<template>
  <div class="multiple-choice-question">
    <h2>{{ question.text }}</h2>
    <ul>
      <li v-for="(option, index) in question.options" :key="index">
        <label>
          <input
            type="radio"
            :value="option"
            v-model="selectedAnswer"
            @change="handleAnswer(option)"
          />
          {{ option }}
        </label>
      </li>
    </ul>
    <div v-if="feedback" class="feedback">{{ feedback }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps<{
  question: {
    text: string;
    options: string[];
    correctAnswer: string;
  };
  emit: (event: 'answer', answer: string) => void;
}>();

const selectedAnswer = ref('');
const feedback = ref('');

const handleAnswer = (answer: string) => {
  feedback.value = answer === props.question.correctAnswer ? 'Correct!' : 'Incorrect!';
  props.emit('answer', answer);
};

watch(selectedAnswer, (newValue) => {
  if (newValue) {
    feedback.value = '';
  }
});
</script>

<style scoped>
.multiple-choice-question {
  margin: 20px 0;
}

.feedback {
  margin-top: 10px;
  font-weight: bold;
}
</style>