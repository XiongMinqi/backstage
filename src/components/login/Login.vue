<template>
  <div class="cover">
    <div class="denglu">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div>
          <el-form-item label="用户名" prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div class="verification">
          <div>
            <el-form-item label="验证码" prop="verification">
              <el-input
                type="text"
                v-model="ruleForm.verification"
                autocomplete="off"
              >
              </el-input>
            </el-form-item>
          </div>
          <div
            v-html="picture"
            @click="getpicture"
            style="background: white"
          ></div>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-button @click="resetForm">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    let checkusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    let validatever = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        verification: "",
        username: ""
      },
      time: "",
      picture: "",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: checkusername, trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 12, message: "长度在5~12个字符", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        verification: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { validator: validatever, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$axios
            .req("/api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.pass,
              code: this.ruleForm.verification
            })
            .then(res => {
              console.log(res);
              if (res.code === 200) {
                this.$message({
                  showClose: true,
                  message: res.message,
                  type: "success"
                });
                this.$router.push("/");
              } else {
                this.$message({
                  showClose: true,
                  message: res.message,
                  type: "danger"
                });
                this.getpicture();
              }
              this.time = Date.now();
              this.time = this.$dayjs(this.time).format(
                "YYYY年MM月DD日 hh时mm分ss秒"
              );
              localStorage.setItem(
                "user",
                JSON.stringify({
                  name: this.ruleForm.username,
                  time: this.time,
                  pass: this.ruleForm.pass
                })
              );
              this.$store.state.user = this.ruleForm.username;
            })
            .catch(err => {
              this.getpicture();
              console.log(err);
            });
        }
      });
    },
    resetForm() {
      this.$router.push("/registered");
    },
    getpicture() {
      this.$axios
        .req("/api/captcha")
        .then(res => {
          this.picture = res;
          // console.log(this.picture);
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // this.postmsg();
    this.getpicture();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.verification {
  div {
    margin-right: 25px;
  }
  display: flex;
}
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
.denglu {
  width: 30%;
  margin: 0 auto;
  height: 320px;
  background: #c0dfff;
  padding: 100px 60px 30px 16px;
  /*margin-top: 180px;*/
}
</style>
