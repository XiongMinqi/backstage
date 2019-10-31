<template>
  <div class="cover">
    <div class="zhuce">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即注册</el-button
          >
          <el-button @click="resetForm">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registered",
  components: {},
  props: {},
  data() {
    let checkusername = (rule, value, callback) => {
      if (!value) {
        return callback();
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback();
      }else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        username: ""
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 5, max: 12, message: "长度在5~12个字符", trigger: "blur" }
        ],
        username: [{ validator: checkusername, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.$axios
            .req("/api/user/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.pass
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  showClose: true,
                  message: res.message,
                  type: "success"
                });
                this.$router.push("/login")
              }else {
                this.$message({
                  showClose: true,
                  message: res.message,
                  type: "danger"
                });
              }
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          localStorage.setItem(
            "user",
            JSON.stringify({ name: this.ruleForm.username })
          );
          this.$store.state.user = this.ruleForm.username;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$router.push("/login");
    },
    postmsg() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/register", {
              username: this.ruleForm.username,
              pass: this.ruleForm.pass
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
    }
  },
  mounted() {
    this.postmsg();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f0f2f5;
  background-position: right bottom;
  display: flex;
  align-items: center;
}
.zhuce {
  width: 30%;
  margin: 0 auto;
  height: 320px;
  background: #c0dfff;
  padding: 100px 60px 30px 16px;
  /*margin-top: 180px;*/
}
</style>
