<template>
  <div>
    <div class="form">
      <template>
        <div class="choose">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          ></el-checkbox>
        </div>

        <div style="margin: 15px 0;"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="(item,index) in list"
            :label="item.name"
            :key="index"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </template>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Two",
  components: {},
  props: {},
  data() {
    return {
      list: [],
      checkAll: false,
      checkedCities: [],
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.list : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  },

  getlist() {
    this.$axios
      .req("api/todoList")
      .then(res => {
        this.list = res.data;
        console.log(res);
      })
      .catch(arr => {
        console.log(arr);
      });
  },
  mounted() {
    this.getlist();
  },
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.choose {
  border-bottom: 1px solid #f0f2f5;
  height: 40px;
  line-height: 40px;
}
.form {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
