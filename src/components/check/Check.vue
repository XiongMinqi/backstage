<template>
  <div>
    <div class="check">
      <el-button type="primary" @click="jump">返回</el-button>
      <div>
        <div>
          <h3>{{ list.title }}</h3>
          <p class="center">摘要:{{ list.abstract }}</p>
          <p class="center">发布于：{{ list.date }}</p>
          <p class="text">{{ list.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Check",
  components: {},
  props: {},
  data() {
    return {
      list: {},
      id: ""
    };
  },
  methods: {
    jump() {
      this.$router.push("/published");
    },
    getlist() {
      this.$axios
        .req("/api/article/article", { _id: this.id })
        .then(res => {
          this.list = res.data;
          console.log(res);

          this.list.date = this.$dayjs(this.list.date).format(
            "YYYY年MM月DD日 hh时mm分ss秒"
          );
        })
        .catch(arr => {
          console.log(arr);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getlist();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
}
.center {
  text-align: center;
}
.text {
  width: 98%;
  margin: 0 auto;
  background: white;
  margin-bottom: 15px;
    padding: 15px;
    display: block;
    height: 620px;
}
</style>
