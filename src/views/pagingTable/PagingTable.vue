<template>
  <div class="border">
    <div class="input">
      <el-input
        v-model="input"
        placeholder="请输入您想搜索的商品名称"
      ></el-input>
    </div>
    <div class="form">
      <el-table
        :data="arr.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
        style="width: 100%"
      >
        <el-table-column label="名称" width="450" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品编号" width="350" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{
              scope.row.GOODS_SERIAL_NUMBER
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="原价" width="180" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
          </template>
        </el-table-column>
        <el-table-column label="现价" width="180" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="400" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="medium "
              @click="handleEdit(scope.$index, scope.row)"
            >
              <i class="el-icon-edit"></i>编辑
            </el-button>

            <el-button
              size="medium "
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              <i class="el-icon-delete"></i>删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arr.length"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="更该信息"
      :visible.sync="dialogFormVisible"
      width="40%"
      top="30vh"
    >
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.NAME"
            autocomplete="off"
            @change="
              (oldval, newval) =>
                countTotalArea(oldval, newval, 'roomAreaSelfuse')
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth">
          <el-input v-model="form.ORI_PRICE" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现价" :label-width="formLabelWidth">
          <el-input v-model="form.PRESENT_PRICE" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PagingTable",
  components: {},
  props: {},
  data() {
    return {
      arr: [],
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据

      gridData: [],
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "120px",
      input: "",
      list: []
    };
  },
  methods: {
    // countTotalArea(v1, v2, v3) {
    //   this.scope.row.NAME = v1;
    //   this.oldVal = v2;
    //   this.str = v3;
    // //   // 这样就可以拿到你的 roomAreaSelfuse
    // //   // val 是input框的值  str是你传进去的值
    // },

    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form = row;
      console.log(index, row);
    },
    handleDelete(index) {
      this.list.splice(index, 1);
    },
    getlist() {
      this.$axios
        .req("api/tableData")
        .then(res => {
          this.list = res.data;
          this.arr = res.data;
          console.log(res);
        })
        .catch(arr => {
          console.log(arr);
        });
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    }
  },
  mounted() {
    this.getlist();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {
    input(val) {
      //说明输入框有值
      if (val.trim() !== "") {
        this.arr = this.list.filter(item => {
          return JSON.stringify(item).includes(val);
        });
      } else {
        this.arr = this.list;
      }
    }
  },
  directives: {}
};
</script>

<style scoped lang="scss">
.border {
  width: 100%;
  /*height: 100%;*/
  background: #f0f2f5;
}
.form {
  /*padding: 20px;*/
  width: 96%;
  margin: 0 auto;
}
.input {
  width: 350px;
  margin: 1% 0 1% 2%;
}
i {
  margin-right: 5px;
}
</style>
