<template>
  <div class="publish">
    <div class="top">
      <el-row>
        <el-col :span="24"
          ><div class="grid-content" style="background:#59a586 ">
            <el-button class="btn" type="warning" @click="jump1"
              >查看</el-button
            >
            <el-button class="btn" type="primary" @click="jump2"
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
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>

        <div class="xinxi">
          <div class="shuru">
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
          </div>
          <div class="shuru">
            <el-form-item label="类目" prop="category">
              <el-select v-model="ruleForm.category" placeholder="请选择">
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
              <el-select v-model="ruleForm.source" placeholder="请选择">
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                <el-option label="分享" value="分享"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="shuru">
            <el-form-item label="重要性" prop="star">
              <el-select v-model="ruleForm.star" placeholder="请选择">
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
                      v-model="ruleForm.date"
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
      <mavon-editor v-model="ruleForm.text" />
    </div>
    <div class="btm">
      <el-button type="primary" @click="jump2">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishedArticles",
  components: {},
  props: {},
  data() {
    return {
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
      rules: {
        title: [{ required: true, trigger: "blur" }],
        abstract: [{ required: true, trigger: "blur" }],
        author: [{ required: true, trigger: "blur" }],
        category: [{ required: true, message: "请选择", trigger: "change" }],
        source: [{ required: true, message: "请选择", trigger: "change" }],
        star: [{ required: true, message: "请选择", trigger: "change" }]
      }
    };
  },
  methods: {
    jump1() {
      this.$router.push("/");
    },
    jump2() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$axios
            .req("api/article/create", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text,
              date: this.ruleForm.date
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  showClose: true,
                  message: "数据传送成功",
                  type: "success"
                });
              }
            });
        }
      });

      this.$router.push("/published");
    }
  },
  mounted() {},
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
.btn {
  margin: 5px 5px;
  position: relative;
  left: 88%;
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
