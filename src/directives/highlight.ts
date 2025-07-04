import { DirectiveBinding } from 'vue';

const highlightDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.style.transition = 'background-color 0.3s';
    el.style.backgroundColor = binding.value ? 'yellow' : '';
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    el.style.backgroundColor = binding.value ? 'yellow' : '';
  }
};

export default highlightDirective;