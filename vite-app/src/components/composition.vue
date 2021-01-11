<template>
    <div class="demo">
        <h1>This is a demo page</h1>
        <div class="container">
            <input v-model.lazy="searchQuery" placeholder="输入用户id" />
            <ul>
                <li class="user" v-for="item in orderList" :key="item.id">
                    <p>商品名称：{{item.product}}</p>
                    <p>商品价格：{{item.price}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    toRefs,
    onErrorCaptured,
    watchEffect,
    ref,
    watch,
    onMounted,
} from 'vue';
import useOrderList from '../hooks/useOrderList';
import useOrderProductSearch from '../hooks/useOrderProductSearch';

export default defineComponent({
    props: {
        userid: { type: Number, default: 1 },
    },
    setup(props: any, context) {
        const { userid } = toRefs(props);

        const { orderList, getOrderList } = useOrderList(userid);
        const { searchQuery, orderListMatchSearchQuery } = useOrderProductSearch(orderList);

        return {
            orderList: orderListMatchSearchQuery,
            getOrderList,
            searchQuery,
        };
    },
});
</script>

<style>
.user {
    border: 1px solid #ccc;
}
</style>
