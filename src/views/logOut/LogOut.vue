<template>
  <div>
    <div class="out">
      <div class="word">期待您的下次光临</div>
      <div class="btn">
        <el-button type="primary" @click="jump">确定退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.out {
  div {
    text-align: center;
    margin-bottom: 40px;
  }
  width: 100%;
  height: 560px;
  background: #f0f2f5;
}
.btn {
}
.word {
  margin-top: 280px;
  font-size: 28px;
  font-weight: bold;
}
</style>
