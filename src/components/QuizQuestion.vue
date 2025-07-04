<template>
  <div class="quiz-question">
    <h2>{{ question.text }}</h2>
    <component
      :is="currentQuestionType"
      :options="question.options"
      v-model="selectedAnswer"
      @answer-selected="handleAnswerSelected"
    />
    <div v-if="feedback" class="feedback">{{ feedback }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import MultipleChoice from './QuestionTypes/MultipleChoice.vue';
import TrueFalse from './QuestionTypes/TrueFalse.vue';

export default defineComponent({
  name: 'QuizQuestion',
  components: {
    MultipleChoice,
    TrueFalse,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    questionIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const selectedAnswer = ref(null);
    const feedback = ref('');

    const currentQuestionType = computed(() => {
      return props.question.type === 'multiple-choice' ? 'MultipleChoice' : 'TrueFalse';
    });

    const handleAnswerSelected = (answer: any) => {
      selectedAnswer.value = answer;
      feedback.value = answer === props.question.correctAnswer ? 'Correct!' : 'Incorrect!';
      // Emit an event to parent component to notify answer selection
      emit('answer-selected', { questionIndex: props.questionIndex, answer });
    };

    return {
      selectedAnswer,
      feedback,
      currentQuestionType,
      handleAnswerSelected,
    };
  },
});
</script>

<style scoped>
.quiz-question {
  margin: 20px;
}
.feedback {
  margin-top: 10px;
  font-weight: bold;
}
</style>