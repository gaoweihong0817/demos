<template>
  <div class="gwh_login">
    <section>
      <h3>Element</h3>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="活动密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
      <p>
        <el-button type="success" @click="Login">立即登陆</el-button>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入活动用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    Login() {
      if (
        this.ruleForm.username !== "admin" ||
        this.ruleForm.password !== "admin"
      ) {
        this.$message.error("登录失败");
        return;
      }
      var obj = {
        username: this.ruleForm.username,
        password: this.ruleForm.password
      };
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", obj)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem("token", res.data.data.token);
            this.$message.success("登录成功");
            this.$router.push("/index");
          } else {
            this.$message.error("登录失败");
          }
        });
    }
  }
};
</script>

<style scoped lang='scss'>
.gwh_login {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(240, 240, 240);
  section {
    position: absolute;
    width: 400px;
    height: 260px;
    background: #fff;
    box-shadow: 0px 0px 6px 4px #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
  }
  .el-button {
    width: 100%;
  }
  h3 {
    text-align: center;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
}
</style>
