<template>
  <div class="one">
    <div class="first">
      <div><img src="../../assets/image/visits.png" alt="" /></div>
      <div>
        <div>New Visits</div>
        <div style="font-size: 25px">
          <countTo
            :startVal="0"
            :endVal="list.visits"
            :duration="1000"
          ></countTo>
        </div>
      </div>
    </div>

    <div class="first">
      <div><img src="../../assets/image/message.png" alt="" /></div>
      <div>
        <div>Messages</div>
        <div style="font-size: 25px">
          <countTo
            :startVal="0"
            :endVal="list.messages"
            :duration="1000"
          ></countTo>
        </div>
      </div>
    </div>

    <div class="first">
      <div><img src="../../assets/image/purchases.png" alt="" /></div>
      <div>
        <div>Purchases</div>
        <div style="font-size: 25px">
          <countTo
            :startVal="0"
            :endVal="list.purchases"
            :duration="1000"
          ></countTo>
        </div>
      </div>
    </div>

    <div class="first">
      <div><img src="../../assets/image/shopping.png" alt="" /></div>
      <div>
        <div>Shopping</div>
        <div style="font-size: 25px">
          <countTo
            :startVal="0"
            :endVal="list.shopping"
            :duration="1000"
          ></countTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "First",
  components: { countTo },
  props: {},
  data() {
    return { list: {} };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/homeData")
        .then(res => {
          console.log(res);
          this.list = res.data;
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
.one {
  img {
    width: 95px;
    height: 95px;
  }
  margin: 20px 20px 20px 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.first {
  border-radius: 28px;
  padding-top: 20px;
  padding-bottom: 10px;
  width: 23%;
  background: white;
  display: flex;
  justify-content: space-around;
  line-height: 35px;
}
</style>
