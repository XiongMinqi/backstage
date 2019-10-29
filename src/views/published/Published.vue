<template>
  <div class="back">
    <div v-if="list.length > 0 && num === 1">
      <div class="publish">
        <el-table :data="list" border style="width: 100%">
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
                @click="handleDelete(scope.$index, scope.row)"
              >
                删除</el-button
              >
              <el-button
                size="mini "
                type="success"
                @click="handlecheck(scope.$index, scope.row)"
              >
                查看</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="check" v-else-if="num === 2">
      <el-button type="primary">返回</el-button>
      <div v-for="(item, index) in list" :key="index">
        <div>
          <h3>{{ item.title }}</h3>
        </div>
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
      num: 1,
      list: [],
      title: "",
      abstract: "",
      author: "",
      category: "",
      source: "",
      star: "",
      text: "",
      date: ""
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.list = res.data;
          this.list.map(item => {
            item.date = this.$dayjs(item.date).format(
              "YYYY年MM月DD日 hh时mm分ss秒"
            );
            item.star = Number(item.star);
          });
          console.log(res);
        })
        .catch(arr => {
          console.log(arr);
        });
    },
    handleEdit(row) {
      // console.log(row)
      this.$router.push({ name: "articles", query: { id: row._id } });
    },
    handlecheck(row) {
      this.num = 2;
      this.$axios
        .req("/api/article/article", { _id: row._id })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //删除
    handleDelete(item, row) {
      console.log(item, row);
      this.$confirm("确认是否删除这一篇文章？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "确定",
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
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
