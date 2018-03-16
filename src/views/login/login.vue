<template>
  <div class="login-container hooker">
    <el-card class="login">
      <h2 class="login-tittle">管理后台登录</h2>
      <el-form class="login-form">
        <div class="form-group">
          <i class="iconfont icon-yonghu2-copy"></i>
          <el-input type="text"
                        v-model.trim="form.username"
                        v-validate="'required'"
                        name="username"
                        :class="{'input': true, 'is-danger': errors.has('username') }"
                        placeholder="请输入用户名">
          </el-input>
          <p v-show="errors.has('username')" class="input-help is-danger">{{ errors.first('username') }}</p>
        </div>
        <div class="form-group">
          <i class="iconfont icon-mima"></i>
          <el-input type="password"
                        name="password"
                        v-model.trim="form.password"
                        v-validate="'required|min:6'"
                        :class="{'input': true, 'is-danger': errors.has('password') }"
                        placeholder="请输入密码">
          </el-input>
          <p v-show="errors.has('password')" class="input-help is-danger">{{ errors.first('password') }}</p>
        </div>
        <div class="form-group">
          <drag-verify :width="360"
                       :height="40"
                       text="请按住滑块，拖动到最右边"
                       success-text="验证成功"
                       handler-icon="iconfont icon-angledoubleright"
                       success-icon="iconfont icon-tipssuccess"
                       :circle="false"
                       text-size="14px"
                       @passcallback="onSuccess"
          ></drag-verify>
        </div>

        <el-button class="login-btn" type="success" @click="validateBeforeSubmit" :disabled="!form.isSuccess">登 录</el-button>
      </el-form>
      <p class="text-danger text-center mt-3" v-show="tips.length>0">{{tips.trim()}}</p>
    </el-card>
  </div>
</template>

<script>
  import dragVerify from 'vue-drag-verify'
  import axios from 'axios'

  export default {
    components: {
      dragVerify
    },
    name: 'login',
    data () {
      return {
        form: {
          username: 'java',
          password: '123456',
          rememberMe: false,
          isSuccess: false
        },
        tips: ''
      }
    },
    methods: {
      onSuccess () {
        this.form.isSuccess = true;
      },
      onSubmit (e) {
        console.log(this.$router)
        this.$router.push('assets')
      },
      validateBeforeSubmit (e) {
        var me = this;
        e.preventDefault();
        this.$validator.validateAll().then((result) => {
          if (result) {
            me.onSubmit();
          }
        });
      },
      getCookie () {
        return axios({
          method: 'post',
          url: 'http://10.0.10.62:2018/login'
        })
      }
    },
    created () {
    }
  }

</script>

<style lang="scss">
  .login-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    user-select: none;
    .login {
      width: 618px;
      height: 483px;
      padding-top: 50px;
      margin: 20vh auto;
      background: #ffffff;
      position: relative;
      .login-tittle {
        font-size: 22px;
        text-align: center;
      }
      .login-form {
        width: 360px;
        margin: 40px auto 0;
      }
      .form-group {
        margin: 0;
        padding-bottom: 1.4rem;
        position: relative;
        .iconfont {
          position: absolute;
          font-size: 1.125rem;
          left: 10px;
        }
        .icon-mima, .icon-yonghu2-copy {
          top: 6px;
        }
      ;
      }
      .form-control {
        padding-left: 2.25rem;
      }
      .login-btn {
        width: 100%;
        margin-top: .5rem;
        line-height: 2.25rem;
      }
      .login-foot {
        user-select: none;
        margin-top: 4px;
        font-size: 0.875rem;
        .custom-control-indicator {
          width: .875rem;
          height: .875rem;
        }
        a {
          float: right;
        }
      }
    }
    .login::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 64px;
      /*background: url("../../static/images/login_form_bg.png") no-repeat left bottom;*/
      bottom: 0;
      left: 0;
    }
  }

  .login-container::after {
    content: "";
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -960px;
    /*background: url("../../static/images/login_bg.png");*/
    z-index: -1;
  }

  .moveBefore {
    background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;

  }

  .dv_handler {
    box-sizing: content-box;
  }
</style>
