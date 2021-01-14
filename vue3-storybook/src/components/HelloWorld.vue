<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>窗口宽度: {{width}}px</div>
        <div>窗口高度: {{height}}px</div>
        <p>
            For a guide and recipes on how to configure / customize this project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useWindowSize from '../hooks/useWindowSize';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    setup(props: any, context) {
        const { width, height } = useWindowSize();

        return {
            width,
            height,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
