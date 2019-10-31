<template>
  <div class="top">
    <div class="start">
      欢迎 <span class="user">{{ name }}</span
      >来到<span>星月</span>后台管理系统
    </div>
    <div class="last">
      <span v-if="num === 1">早上好</span>
      <span v-else-if="num === 2">中午好</span>
      <span v-else-if="num === 3">下午好</span>
      <span v-else-if="num === 4">晚上好</span>
      <span v-else-if="num === 5">你该睡觉了</span>，亲爱的<span class="user">{{
        name
      }}</span
      >上次登录时间：{{ shijian }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {
      name:"",
      shijian: "",
      hour: 0,
      num: 0
    };
  },
  methods: {
    time() {
      let now = new Date();
      let hour = now.getHours();
      if (hour < 12 || hour === 12) {
        this.num = 1;
      } else if (hour < 14 || hour === 14) {
        this.num = 2;
      } else if (hour < 18 || hour === 18) {
        this.num = 3;
      } else if (hour < 22 || hour === 22) {
        this.num = 4;
      } else if (hour < 24 || hour === 24) {
        this.num = 5;
      }
    }
  },
  mounted() {
    this.time();
    let user = JSON.parse(window.localStorage.getItem("user"));
    this.name = user.name;
    this.shijian = user.time;
  },
  created() {},
  filters: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
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
