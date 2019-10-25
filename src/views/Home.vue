<template>
  <div>
    <div class="top"><Top /></div>
    <div class="center">
      <div class="left"><Left /></div>
      <div class="right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import Top from "../components/top/Top";
import Left from "../components/left/Left";
export default {
  name: "Home",
  components: {
    Top,
    Left
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
.center {
  position: relative;
  top: 55px;
  display: flex;
}
.left {
  width: 13%;
  position: fixed;
  z-index: 9;
  height: 100%;
}
.right {
  position: absolute;
  right: 0;
  width: 87%;
  background: #f0f2f5;
}
.top {
  position: fixed;
  width: 100%;
  z-index: 9;
}
</style>
