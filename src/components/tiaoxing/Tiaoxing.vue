<template>
  <div>
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
  </div>
</template>

<script>
export default {
  name: "Tiaoxing",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      dimension: ["date"],
      metrics: ["expected", "actual"]
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: [],
        list: []
      }
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/homeChat")
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
