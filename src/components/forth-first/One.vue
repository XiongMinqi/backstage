<template>
  <div>
    <div class="border">
      <div class="order1">
        <div class="first">Order_No</div>
        <div class="second">Price</div>
        <div class="third">Status</div>
      </div>
      <div v-for="(item, index) in tableData" :key="index">
        <div class="order">
          <div class="one">{{ item.num }}</div>
          <div class="two">￥{{ item.price }}</div>
          <div class="three">
            <div v-if="item.status === 0">
              <el-tag type="danger">pending</el-tag>
            </div>
            <div v-if="item.status === 1">
              <el-tag type="success">success</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  components: {},
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/orderData")
        .then(res => {
          this.tableData = res.data;
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
.order {
  display: flex;
  border-bottom: 1px solid #f0f2f5;
  height: 50px;
  line-height: 50px;
  &:hover {
    background: #f0f2f5;
  }
  /*padding: 10px;*/
}
.order1 {
  display: flex;
  border-bottom: 1px solid #f0f2f5;
  height: 50px;
  line-height: 50px;
}

.one {
  width: 50%;
  padding-left: 20px;
}
.two {
  width: 25%;
}
.three {
  width: 25%;
}
.first {
  padding-left: 25px;
  width: 50%;
  text-align: center;
}
.second {
  width: 25%;
  margin-left: 40px;
}
.third {
  width: 25%;
  /*padding-left: 40px;*/
}
</style>
