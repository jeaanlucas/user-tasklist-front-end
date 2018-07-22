<template lang='pug'>
main.login
    .login__background
    .login__card
      span Tela de tasks
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
</style>
