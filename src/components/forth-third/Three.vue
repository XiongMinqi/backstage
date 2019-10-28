<template>
  <div class="right">
    <div><img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="" /></div>
    <div class="jindu" v-for="(item, index) in list" :key="index">
      <div>{{ item.name }}</div>
      <div>
        <div v-if="item.progress < 1">
          <el-progress :percentage="item.progress * 100"></el-progress>
        </div>
        <div v-else-if="(item.progress = 1)">
          <el-progress
            :percentage="item.progress * 100"
            color="green"
          ></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Three",
  components: {},
  props: {},
  data() {
    return {
      list: []
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/progress")
        .then(res => {
          this.list = res.data;
          console.log(res);
        })
        .catch(arr => {
          console.log(arr);
        });
    }
  },
  mounted() {
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
.right {
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  padding: 20px;
}
  .jindu{
    /*margin-top: 30px;*/
    div{
      margin-bottom: 5px;
    }
    /*line-height: 20px;*/
  }
</style>
