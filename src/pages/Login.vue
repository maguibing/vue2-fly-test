<template>
  <div class="login">
    <div class="login-form">
      <h1>Welcome Music</h1>
      <div class="form">
        <input type="text" name="username" placeholder="Username" v-model="dataForm.phone" />
        <input type="password" name="password" placeholder="Password" v-model="dataForm.password" />
        <button class="btn btn-primary btn-block btn-large" @click="dataFormSubmit">Let me in</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/login.css'
import { login } from '@/apis/login'

export default {
  name: "Login",
  data () {
    return {
      dataForm: {
        phone: "15979973954",
        password: ""
      }
    }
  },
  methods: {
    async dataFormSubmit () {
      if (!this.dataForm.phone || !this.dataForm.password) return
      const res = await login(this.dataForm)
      this.$store.commit("login/setUserProfile", res.data)
      this.$router.push("/")
    }
  }
}
</script>
