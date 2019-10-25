<template>
  <div>
    <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
  </div>
</template>

<script>
export default {
  name: "wujiaoxing",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      dimension: ["name"],
      metrics: ["sales", "ministration", "techology", "delelopmer", "marketing"]
      // dataType: { 下单率: "percent" }
    };
    return {
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: [],
        list: []
      }
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/radarChat ")
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
