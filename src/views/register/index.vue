<template>
  <div class="main">
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
      layout="vertical"
      class="form">
      <a-form-model-item prop="account" :wrapperCol="{span:8,offset:8}" >
        <span class="gray">您的账号</span>
        <a-input
          v-model="form.account"
          size="large"
          clearable
          autocomplete="false"
          tabindex="1"
          placeholder="请输入用户名"
        >
          <a-icon slot="prefix" type="user" class="gray"/>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password" :wrapperCol="{span:8,offset: 8}">
        <span class="gray">您的密码</span>
        <a-input
          v-model="form.password"
          clearable
          size="large"
          type="password"
          autocomplete="false"
          tabindex="2"
          password
          placeholder="请输入密码"
          @keyup.enter.native="handleLogin"
        >
          <a-icon slot="prefix" type="lock" class="gray"/>
        </a-input>
      </a-form-model-item>
      <a-form-item :wrapperCol="{span:8,offset:8}">
        <div class="btn-wrapper">
          <a-button @click="handleLogin">登录</a-button>

        </div>
      </a-form-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      redirect: undefined,
      loading: false,
      form: {
        account: '',
        password: '',
        keepLogin: false
      },
      rules: {
        account: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    }
    },
  methods: {
    storeUserInfo (data) {
  this.$store.dispatch('SetInfo', data)
    },
    handleLogin () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.form).then(() => {
            // 储存用户信息
            this.storeUserInfo(this.form)
            this.$router.push({ path: this.redirect || '/' })
          }).finally(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.main{
  font-size: 24px;
  /*text-align: center;*/
}
.btn-wrapper{
  text-align: center;
}
</style>
