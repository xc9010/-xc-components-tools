import Vue from 'vue';
import MyButton from './Button.js';


export const withText = () => '<my-button>with text</my-button>';

export const withEmoji = () => '<my-button>😀 😎 👍 💯</my-button>';

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button :rounded="true">rounded</my-button>'
});

export default { title: 'xwsx/基础组件/Button' };
