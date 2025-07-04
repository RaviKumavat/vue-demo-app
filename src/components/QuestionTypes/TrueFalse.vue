<template>
  <div class="true-false-question">
    <h2>{{ question.text }}</h2>
    <div class="options">
      <button @click="selectAnswer(true)" :class="{ selected: selectedAnswer === true }">True</button>
      <button @click="selectAnswer(false)" :class="{ selected: selectedAnswer === false }">False</button>
    </div>
    <div v-if="feedback" class="feedback">{{ feedback }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'TrueFalse',
  props: {
    question: {
      type: Object,
      required: true
    },
    emitAnswer: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const selectedAnswer = ref<boolean | null>(null);
    const feedback = ref<string | null>(null);

    const selectAnswer = (answer: boolean) => {
      selectedAnswer.value = answer;
      feedback.value = answer === props.question.correctAnswer ? 'Correct!' : 'Incorrect!';
      props.emitAnswer(answer);
    };

    watch(selectedAnswer, (newValue) => {
      if (newValue !== null) {
        feedback.value = newValue === props.question.correctAnswer ? 'Correct!' : 'Incorrect!';
      }
    });

    return {
      selectedAnswer,
      feedback,
      selectAnswer
    };
  }
});
</script>

<style scoped>
.true-false-question {
  margin: 20px;
}

.options {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.selected {
  background-color: #007bff;
  color: white;
}

.feedback {
  margin-top: 10px;
  font-weight: bold;
}
</style>