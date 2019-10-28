<template>
  <div class="top">
    <div class="start">
      欢迎 <span class="user">{{ user }}</span
      >来到<span>星月</span>后台管理系统
    </div>
    <div class="last">
      早上好，亲爱的<span class="user">{{ user }}</span
      >上次登录时间：2019年1月1日
    </div>
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
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.start {
  margin-left: 30px;
}
.last {
  margin-right: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  line-height: 55px;
  height: 55px;
  background: #2e5e85;
  /*margin-right: 30px;*/
  color: white;
}
span {
  font-weight: bold;
  padding: 0 5px;
}
.user {
  padding: 0 5px;
  color: #11ffb4;
}
</style>
