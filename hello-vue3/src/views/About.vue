<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="container">
            <input v-model.lazy="searchQuery" placeholder="输入用户id" />
            <ul>
                <li class="user" v-for="item in userList" :key="item.id">
                    <p>姓名：{{item.name}}</p>
                    <p>年龄：{{item.age}}</p>
                    <p>性别：{{item.gender}}</p>
                </li>
            </ul>
            <Suspense>
                <template #default>
                    <girl-show />
                </template>
                <template #fallback>
                    <h1>Loading...</h1>
                </template>
            </Suspense>
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
    defineComponent,
    toRefs,
    onErrorCaptured,
    watchEffect,
    ref,
    watch,
    onMounted,
} from 'vue';
import useUserRepositories from '../composables/useUserRepositories';
import useRepositoryNameSearch from '../composables/useRepositoryNameSearch';
import GirlShow from '../components/AsyncShow.vue';

export default defineComponent({
    components: { GirlShow },
    props: {
        id: { type: Number, default: 1 },
    },
    setup(props: any, context) {
        const { id } = toRefs(props);

        const { userList, getUserList } = useUserRepositories(id);
        const { searchQuery, userListMatchSearchQuery } = useRepositoryNameSearch(userList);

        onErrorCaptured((err) => {
            console.error('err', err);
            return false;
        });

        const count = ref(0);
        const str = '123';
        const stop = watchEffect(() => {
            console.error('响应式追踪', str, count.value);
        });

        const stopWatch = watch(count, (val, old) => {
            console.error('监听变化', val, old);
        });

        setInterval(() => {
            count.value += 1;
            // -> 打印出 1
            if (count.value >= 5) {
                stop();
                stopWatch();
            }
        }, 1000);

        onMounted(() => {
            console.error('onMounted', count.value);
        });

        return {
            userList: userListMatchSearchQuery,
            getUserList,
            searchQuery,
        };
    },
});
</script>

<style lang="less">
.user {
    border: 1px solid #ccc;
}
</style>
