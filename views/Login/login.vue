<template>
  <el-form
    :model="Form"
    status-icon
    :rules="rules"
    ref="Form"
    label-width="60px"
    class="formcont"
  >
    <h2 class="login_title">系统登录</h2>
    <el-form-item label="用户名">
      <el-input
        type="input"
        v-model="Form.username"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        type="password"
        v-model="Form.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item class="lg_button">
      <el-button
        style="margin-left:78px"
        type="primary"
        @click="submitForm()"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// 引入登录请求
import { loginget } from '../../api/data'
export default {
  name: 'login',
  data () {
    return {
      Form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名不能小于3位',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },

        ]
      }
    }
  },
  methods: {
    submitForm () {
      const name = this.Form.username
      const password = this.Form.password
      loginget(name, password).then(res => {
        console.log(res);
        if (res.data.status == 0) {
          const token = res.data.token
          this.$store.commit('setToken', token)
          this.$router.push({ name: 'main' })

        } else {
          this.$message.warning('登录失败')
        }

      })

    },

  }

}
</script>

<style scoped>
.formcont {
  margin: 180px auto;
  width: 350px;
  padding: 25px 35px 15px 35px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 15px;
  background-clip: padding-box;
}
.login_title {
  text-align: center;
  margin: 0px auto 10px auto;
}
.lg_button {
  margin: 10px auto 0 auto;
}
</style>