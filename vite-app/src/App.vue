<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <input v-model.lazy.number="searchQuery" placeholder="输入用户id" />
    <Options :userid="searchQuery" />
    <!-- <Mixins :userid="searchQuery" /> -->
    <!-- <Composition :userid="searchQuery" /> -->
  </div>
</template>

<script>
import Options from './components/options.vue'
import Mixins from './components/mixins.vue'
import Composition from './components/composition.vue'

export default {
  name: 'App',
  components: {
    Options,
    Mixins,
    Composition
  },
  data() {
    return {
      searchQuery: 1
    }
  }
}
</script>
