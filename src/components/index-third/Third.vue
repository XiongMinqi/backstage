<template>
  <div class="three">
    <div class="wujiaoxing"><wujiaoxing /></div>
    <div class="bingtu"><Bing /></div>
    <div class="tiaoxing"><Tiaoxing /></div>
  </div>
</template>

<script>
import wujiaoxing from "../wuxing/wujiaoxing";
import Bing from "../bing/Bing";
import Tiaoxing from "../tiaoxing/Tiaoxing";
export default {
  name: "Third",
  components: {
    wujiaoxing,
    Bing,
    Tiaoxing
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.three {
  margin: 20px 20px 20px 25px;
  display: flex;
  justify-content: space-between;
}
.wujiaoxing {
  width: 33%;
  padding-top: 10px;
  background: white;
}
.bingtu {
  padding-top: 10px;
  width: 33%;
  /*height: 50px;*/
  /*margin-right: 15px;*/
  background: white;
}
.tiaoxing {
  padding-top: 10px;
  width: 33%;
  /*height: 50px;*/
  /*margin-right: 15px;*/
  background: white;
}
</style>
