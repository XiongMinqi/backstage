<template>
  <div>
    <el-progress :percentage=this.list.progress></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
export default {
  name: "Three",
  components: {},
  props: {},
  data() {
    return {
      list:[]
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
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
    },
    mounted() {
      this.getlist();
    }
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
