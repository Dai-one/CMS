<!-- 新增商品 -->
<template>
<div class=''>
  <el-input v-model="goods_name" placeholder="商品名称"></el-input>
  <el-input v-model="goods_cate" placeholder="商品种类"></el-input>
  <el-button type="primary">添加商品</el-button>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
  goods_name:'',
  goods_cate:'',
};
},
computed: {},
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style  scoped>

</style>