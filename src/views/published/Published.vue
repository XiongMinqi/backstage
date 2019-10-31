<template>
  <div class="back">
    <div v-if="list.length > 0">
      <div class="publish">
        <el-table
          :data="
            arr.slice((currentPage - 1) * pagesize, currentPage * pagesize)
          "
          border
          style="width: 100%"
        >
          <el-table-column prop="number" type="index" width="30" align="center">
          </el-table-column>
          <el-table-column prop="title" label="标题" width="460" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="author" label="作者" width="80" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="category"
            label="类目"
            width="145"
            align="center"
          >
            <template slot-scope="scope">
              <span
                style="margin-left: 10px"
                v-if="scope.row.category === 'Vue'"
                ><el-tag type="success">{{ scope.row.category }}</el-tag></span
              >
              <span
                style="margin-left: 10px"
                v-if="scope.row.category === 'React'"
                ><el-tag type="info">{{ scope.row.category }}</el-tag></span
              >
              <span
                style="margin-left: 10px"
                v-if="scope.row.category === 'Node.js'"
                ><el-tag type="warning">{{ scope.row.category }}</el-tag></span
              >
              <span
                style="margin-left: 10px"
                v-if="scope.row.category === '性能优化'"
                ><el-tag type="danger">{{ scope.row.category }}</el-tag></span
              >
              <span
                style="margin-left: 10px"
                v-if="scope.row.category === 'Javasscript'"
                ><el-tag>{{ scope.row.category }}</el-tag></span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="source"
            label="来源"
            width="100"
            align="center"
          >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.source }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="star"
            label="重要性"
            width="161"
            align="center"
          >
            <template slot-scope="scope">
              <el-rate
                v-model="scope.row.star"
                disabled
                text-color="#ff9900"
                score-template="{scope.row.star}"
              >
              </el-rate>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="发布时间"
            width="280"
            align="center"
          >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="360" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini "
                @click="handleEdit(scope.row)"
              >
                编辑
              </el-button>

              <el-button
                size="mini "
                type="danger"
                @click="handleDelete(scope.row)"
              >
                删除</el-button
              >
              <el-button
                size="mini "
                type="success"
                @click="handlecheck(scope.row)"
              >
                查看</el-button
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
    </div>

    <div v-else>暂时没有发表的文章</div>
  </div>
</template>

<script>
export default {
  name: "Published",
  components: {},
  props: {},
  data() {
    return {
      arr: [],
      list: [],
      title: "",
      abstract: "",
      author: "",
      category: "",
      source: "",
      star: "",
      text: "",
      date: "",
      currentPage: 1, //初始页
      pagesize: 10 //    每页的数据
    };
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    getlist() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.list = res.data;
          this.arr = res.data;
          this.list.map(item => {
            if (item.date.indexOf("年") === -1) {
              item.date = new Date();
              item.date = this.$dayjs(item.date).format(
                "YYYY年MM月DD日 hh时mm分ss秒"
              );
            }
            // console.log(item.date, 5555);
            item.star = Number(item.star);
          });
          console.log(res);
        })
        .catch(arr => {
          console.log(arr);
        });
    },
    //编辑
    handleEdit(row) {
      this.$router.push({ name: "articles", query: { id: row._id } });
    },
    //查看
    handlecheck(row) {
      this.$router.push({ name: "check", query: { id: row._id } });
    },
    //删除
    handleDelete(row) {
      this.$confirm("确认是否删除这一篇文章？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$axios
          .req("/api/article/delete", { _id: row._id })
          .then(res => {
            if (res.code === 200) {
              console.log(res);
              this.getlist();
            }
          })
          .catch(err => {
            console.log(err);
          });
        this.$message({
          type: "success",
          message: "删除成功"
        })
      });
    }
  },
  mounted() {
    this.getlist();
    // this.panduan();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.check {
  width: 98%;
  margin: 0 auto;
  background: white;
  margin-top: 15px;
}
.back {
  width: 100%;
  height: 834px;
  background: #f0f2f5;
}
.publish {
  width: 98%;
  margin: 0 auto;
  background: white;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
