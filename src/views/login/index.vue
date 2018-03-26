<template>
  <div class="v-login">
    <div class="v-login-setup">
      <h1 class="v-login-title">
        {{ $t('login.logIn') }}
        <!-- <img src="@/assets/logo.png"> -->
      </h1>
      <h3 class="v-login-msg">
        {{ $t('login.title') }}
      </h3>
      <el-form
        class="v-login-form"
        :model="form"
        :rules="rules"
        ref="form">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            :placeholder="$t('login.username')">
            <i slot="prefix" class="el-input__icon el-icon-message"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            :placeholder="$t('login.password')"
            @keyup.enter.native="submit('form')">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item style="padding-top: 20px">
          <el-button
            type="primary"
            :disabled="loading"
            @click.native="submit('form')">
            {{ loading ? ($t('login.loading') + '...') : $t('login.logIn') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <p class="v-login-feedback">
      沪ICP备15022950号-1    @ 2018 Powered by vvimo
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'login',
  data () {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名', trigger: 'blur' },
          { min: 1, message: '用户名至少6位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码', trigger: 'blur' },
          { min: 1, message: '密码至少1位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Login', this.form).then((res) => {
            this.$router.push({ path: '/' })
          }).catch((err) => {
            console.log(err)
          })
        } else {
          this.$message.error('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
