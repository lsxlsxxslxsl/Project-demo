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

export default {
  props: {
    userid: { type: Number, default: 1 },
  },
  data() {
    return {
      orderList: [],
      searchQuery: '',
    };
  },
  computed: {
    orderListMatchSearchQuery() {
      return this.orderList.filter((item: any) => item.product.includes(this.searchQuery))
    }
  },
  watch: {
    userid() {
      this.getOrderList()
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    async getOrderList() {
      this.orderList = await api.getOrderList(this.userid)
    }
  },
};

</script>

<style>
.user {
    border: 1px solid #ccc;
}
</style>
