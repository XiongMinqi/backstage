<template>
  <div>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "Bing",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      dimension: "name",
      metrics: "data"
    };
    return {
      chartData: {
        columns: ["name", "data"],
        rows: []
      },
      list: []
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/ringChat  ")
        .then(res => {
          this.list = res.data;
          this.chartData.rows = this.list;
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

<style scoped lang="scss"></style>
