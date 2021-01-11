<template>
    <div class="demo">
        <h1>This is a demo page</h1>
        <div class="container">
            <input v-model.lazy="searchQuery" placeholder="输入商品名称" />
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
import api from '../api'
import OrderListMixin from '../mixins/orderList'
import OrderProductSearchMixin from '../mixins/orderProductSearch'

export default {
  mixins: [OrderListMixin, OrderProductSearchMixin],
  props: {
    userid: { type: Number, default: 1 },
  },
};

</script>

<style>
.user {
    border: 1px solid #ccc;
}
</style>
