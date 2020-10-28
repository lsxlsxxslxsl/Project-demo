<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
        <input v-model="name"/>{{name}}
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
// import { reactive, defineComponent } from 'vue';

// @Options({
//   props: {
//     msg: String,
//   }
// })
// export default class HelloWorld extends Vue {
//   msg!: string

//   setup() {
//     const state = reactive({ value: '' });
//     return { state };
//   },
// }
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      name: 'test',
    });
    const count = ref<number>(10);

    console.log(count.value);
    return state;
  },
});
</script>
