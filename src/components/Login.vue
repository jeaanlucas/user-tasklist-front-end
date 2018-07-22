<template lang='pug'>
main.login
    .login__background
    .login__card
      .login__logo
        //- img(src="/static/logo-flow-invest-branco.png")
        v-card.elevation-3.white
          v-toolbar.elevation
            v-layout(
              row justify-center
            )
              v-toolbar-title Login
          v-alert.ma-0(error :value="errors != null")
            span(v-for="(error, key) in errors" :key="key") {{ error }}
          v-divider
          form#form-login(@submit.prevent="login()")
            v-card-text
              v-text-field(
                required
                name="email"
                label="E-mail"
                v-model="email"
                )
              v-text-field(
                required
                label="Password"
                ref="password"
                name="password"
                type="password"
                v-model="password"
                )
              v-layout(align-center justify-end)
                v-btn.login-button#login-button(
                  fab
                  dark
                  right
                  bottom
                  absolute
                  type="submit"
                  )
                  v-icon chevron_right
</template>

<script>
import LoginService from '@/services/LoginService'

export default {
  data () {
    return {
      errors: null,
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      const credentials = {
        email: this.email,
        password: this.password
      }
      LoginService.authenticate(credentials)
        .then(({data}) => {
          LoginService.login(data)
          this.$router.push('/home')
          console.log(data)
        })
        .catch((error) => {
          console.log(error.response.data.mensagem)
        })
    }
  }
}
</script>

<style lang='stylus'>
.login
  position absolute
  top 0
  right 0
  bottom 0
  left 0

  .login-button
    background-color #A7A198 !important

  .login__background
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background linear-gradient(to bottom, rgba(69,72,77,1) 0%,rgba(211,211,211,1) 59%)

    .version
      font-size 11px
      position absolute
      right 10px
      bottom 10px
      z-index 3
      color rgba(0, 0, 0, 1)

  .login__background--top
    position absolute
    top 0
    right 0
    bottom 50%
    left 0
    background #f7f7f7

  .login__card
    position absolute
    left 50%
    top 50%
    width 400px
    margin-top -200px
    margin-left -200px

  .login__logo
    position relative
    padding 20px 0
    text-align center

    img
      display inline-block
      height 50px
</style>
