<template>
  <div class="wd20p marginAuto login-div mt60 pt5 pb5">
    <div class="textcenter">
      <img src="../assets/logo.png" width="100">
    </div>

    <div class="mt60">
      <div slot="header">
        <div class="ft20 theme textleft wd95p marginAuto">Login In</div>
      </div>
      <!-- 登录表单 -->
      <div class="wd95p marginAuto border-all border-color-two mt20 br5">
        <div class="pt20 pb20 ft15 border-bottom border-color-three lh30 font-minor-color" style="height: 30px"
             @click="inputClick($event,'accountShow')" ref="accountDiv">
          <div class="wd95p marginAuto">
            <span>Email or Username</span>
            <transition name="el-zoom-in-top">
              <input v-show="false" class="mt10 wd95p ft10" ref="accountShow" autofocus="autofocus"
                     v-model="user.account"
                     @blur="inputBlur($event,'accountDiv')"/>
            </transition>
          </div>
        </div>
        <div class="pt20 pb20 ft15 lh30 font-minor-color" style="height: 30px"
             @click="inputClick($event,'passwordShow')" ref="passwordDiv">
          <div class="wd95p marginAuto">
            <span>Password</span>
            <transition name="el-zoom-in-top">
              <input type="password" v-show="false" class="mt10 wd95p ft10" ref="passwordShow" autofocus="autofocus"
                     v-model="user.password"
                     @blur="inputBlur($event,'passwordDiv')"/>
            </transition>
          </div>
        </div>
      </div>

      <div v-if="errorMsg" class="mt10">
        <el-alert
          :title="errorMsg"
          type="error"
          center
          show-icon>
        </el-alert>
      </div>

      <!-- 登录按钮 -->
      <div class="textcenter mt20">
        <el-button type="primary" size="small" @click="loginSubmit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        errorMsg: null,
        user: {
          account: 'admin',
          password: 'admin'
        }
      }
    },
    methods: {
      inputClick: function (el, ref) {
        this.$refs[ref].style.display = 'block'
        this.$refs[ref].focus()
        el.currentTarget.style.fontSize = '10px'
        el.currentTarget.style.lineHeight = 'normal'
        el.currentTarget.style.color = '#C0C4CC'
      },
      inputBlur: function (el, ref) {
        let v = el.target.value
        if (!v) {
          el.srcElement.style.display = 'none'
          this.$refs[ref].style.fontSize = '15px'
          this.$refs[ref].style.lineHeight = '30px'
          this.$refs[ref].style.color = '#909399'
        }
      },
      loginSubmit: function () {
        if (!this.user.account) {
          this.errorMsg = '用户名不能为空'
          return
        }

        if (!this.user.password) {
          this.errorMsg = '密码不能为空'
          return
        }
        if (this.user.account == 'admin' && this.user.password == 'admin') {
          let userInfo = {
            token: 'admin'
          }
          this.$store.commit('updateUserInfo', userInfo)
          this.$router.push({
            name: 'home'
          })
        } else {
          this.errorMsg = '用户名密码不匹配'
          return
        }
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 768px) {
    .login-div {
      width: 80%;
    }
  }

  input {
    border: none;
    outline: medium;
  }

  span {
    transition: font-size 1s;
  }

</style>
