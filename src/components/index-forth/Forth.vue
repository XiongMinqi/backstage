<template>
  <div class="four">
    <div class="first"><One /></div>
    <div class="second">
      <Two />
    </div>
    <div class="third"><Three /></div>
  </div>
</template>

<script>
import One from "../forth-first/One";
import Two from "../forth-second/Two";
import Three from "../forth-third/Three";
export default {
  name: "Forth",
  components: {
    One,
    Two,
    Three
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
.four {
  margin: 20px 20px 20px 25px;
  display: flex;
  /*justify-content: space-between;*/
  margin-bottom: 30px;
}
.first {
  padding-top: 10px;
  width: 45%;
  /*height: 50px;*/
  margin-right: 10px;
  background: white;
}
.second {
  padding-top: 10px;
  width: 28%;
  /*height: 50px;*/
  margin-right: 10px;
  background: white;
}
.third {
  padding-top: 10px;
  width: 27%;
  /*height: 50px;*/
  /*margin-right: 15px;*/
  background: white;
}
</style>
