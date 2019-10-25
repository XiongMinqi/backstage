<template>
  <div class="right">
    <div><First /></div>
    <div><Second /></div>
    <div><Third /></div>
    <div><Forth /></div>
  </div>
</template>

<script>
import First from "../../components/index-first/First";
import Second from "../../components/index-second/Second";
import Third from "../../components/index-third/Third";
import Forth from "../../components/index-forth/Forth";
export default {
  name: "Index",
  components: {
    First,
    Second,
    Third,
    Forth
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
.right {
  width: 100%;
}
</style>
