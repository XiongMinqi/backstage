<template>
  <div class="two">
    <ve-line :data="chartData" :setting="chartSettings"></ve-line>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
export default {
  name: "Second",
  components: { VeLine },
  props: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      list: []
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

<style scoped lang="scss">
.two {
  margin: 20px 20px 20px 25px;
  background: white;
}
</style>
