<template>
  <div class="top">
    <div>欢迎***来到<span>星月</span>后台管理系统</div>
    <div>早上好，亲爱的*** 上次登录时间：2019年1月1日</div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 55px;
  height: 55px;
  background: #2e5e85;
  padding: 0 15px;
  color: white;
}
span {
  font-weight: bold;
  padding: 0 5px;
}
</style>
