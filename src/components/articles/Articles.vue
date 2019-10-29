<template>
  <div class="publish">
    <div class="top">
      <el-row>
        <el-col :span="24"
          ><div class="grid-content">
            <el-button class="btn1" type="danger" @click="jump1"
              >返回</el-button
            >
            <el-button class="btn2" type="primary" @click="jump2"
              >发布</el-button
            >
          </div></el-col
        >
      </el-row>
    </div>
    <div class="input">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="list.title"></el-input>
        </el-form-item>

        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="list.abstract"></el-input>
        </el-form-item>

        <div class="xinxi">
          <div class="shuru">
            <el-form-item label="作者" prop="author">
              <el-input v-model="list.author"></el-input>
            </el-form-item>
          </div>
          <div class="shuru">
            <el-form-item label="类目" prop="category">
              <el-select v-model="list.category" placeholder="请选择">
                <el-option label="Vue" value="Vue"></el-option>
                <el-option label="React" value="React"></el-option>
                <el-option label="Node.js" value="Node.js"></el-option>
                <el-option label="性能优化" value="性能优化"></el-option>
                <el-option label="Javasscript" value="Javasscript"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="shuru">
            <el-form-item label="来源" prop="source">
              <el-select v-model="list.source" placeholder="请选择">
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                <el-option label="分享" value="分享"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="shuru">
            <el-form-item label="重要性" prop="star">
              <el-select v-model="list.star" placeholder="请选择">
                <el-option label="1星" value="1"></el-option>
                <el-option label="2星" value="2"></el-option>
                <el-option label="3星" value="3"></el-option>
                <el-option label="4星" value="4"></el-option>
                <el-option label="5星" value="5"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="shuru">
            <el-form-item label="发布时间:">
              <el-date-picker
                v-model="list.date"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>

    <div class="main">
      <mavon-editor v-model="list.text" />
    </div>
    <div class="btm">
      <el-button type="primary" @click="jump2">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  components: {},
  props: {},
  data() {
    return {
      list: [],
      input5: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        date: ""
      },
      id: "",
      rules: {
      }
    };
  },
  methods: {
    jump1() {
      this.$router.push("/published");
    },
    jump2() {
      this.$axios
        .req("/api/article/update", {
          id: this.id,
          title: this.list.title,
          abstract: this.list.abstract,
          author: this.list.author,
          category: this.list.category,
          source: this.list.source,
          star: this.list.star,
          text: this.list.text,
          date: Date.now()
        })
        .then(res => {
          this.ruleForm = res.data;
          this.$router.push("/published");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getlist() {
      this.$axios
        .req("/api/article/article", { _id: this.id })
        .then(res => {
          this.list = res.data;
          console.log(res);
        })
        .catch(arr => {
          console.log(arr);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getlist();
    console.log(this.id);
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.btm {
  margin-top: 30px;
  text-align: center;
  /* position: relative;*/
  /* left:200px;*/
}
.xinxi {
  margin-left: 23px;
  margin-bottom: 0;
  /*width: 100%;*/
  display: flex;
  justify-content: space-between;
  div {
    /*margin-right: 15px;*/
  }
}
.shuru {
  display: flex;
  line-height: 40px;
}
.name {
  width: 80px;
}
.name4 {
  width: 110px;
}
.name5 {
  width: 120px;
}
.ondex {
  width: 60%;
}
.title {
  width: 94%;
  position: relative;
}
.publish {
  margin: 20px;
  height: 800px;
  div {
    margin-bottom: 15px;
  }
}
.btn1 {
  margin: 5px 5px;
  position: relative;
  left: 20%;
}
.btn2 {
  margin: 5px 5px;
  position: relative;
  left: 60%;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
