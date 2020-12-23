<template>
    <img :src="result && result.imgUrl"  />
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    async setup() {
        // promise 语法糖  返回之后也是promise对象
        const rawData = await axios.get('https://apiblog.jspang.com/default/getGir');
        return { result: rawData.data };
    },
});
</script>
