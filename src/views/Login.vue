<template>
  <div class="login-view">
    <vk-grid>
      <div class="uk-width-1-2@m branded-area uk-visible@m">
        <img alt="medical-doctors" src="../assets/doctors.png" class="uk-position-center-left" />
      </div>
      <div class="uk-width-1-2@m uk-width-auto@s login-area">
        <vk-card class="uk-width-auto@m login-form">
          <vk-card-title class="form-header">Welcome Back</vk-card-title>

          <!-- <div class="uk-alert-danger" v-if="error" uk-alert>
            <a class="uk-alert-close" uk-close></a>
            <p>{{error}}</p>
          </div> -->
          <el-alert title="error alert" v-if="error" type="error" description= "Sorry we couldn't find an account with those credentials." show-icon></el-alert>
          <form class="uk-form-stacked" @submit.prevent="submitHandler">
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Email</label>
              <div class="uk-form-controls">
                <input class="uk-input" v-model="login.email" id="form-stacked-text" type="text" />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Password</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  v-model="login.password"
                  id="form-stacked-text"
                  type="password"
                />
              </div>
            </div>
            <!-- <div class="uk-margin">
              <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</el-tag>
            </div> -->
            <div class="uk-margin">
              <div class="uk-form-controls">
                <!-- <vk-button type="secondary" class="uk-width-1-1">Register</vk-button> -->
                <button class="uk-button uk-button-secondary uk-width-1-1">Log In</button>
              </div>
            </div>

            <div class="uk-margin">
              <vk-grid class="uk-child-width-expand@s uk-text-center">
                <div>
                  Don't have an account?
                  <router-link to="/register" class="register-link">Register</router-link>
                </div>
              </vk-grid>
            </div>
          </form>
        </vk-card>
      </div>
    </vk-grid>
  </div>
</template>

<script>
import { Alert } from "element-ui";
import firebase from "firebase";
import { Grid } from "vuikit/lib/grid";
import { Card } from "vuikit/lib/card";
export default {
  name: "Login",
  components: {
    "vk-grid": Grid,
    "vk-card": Card,
    "el-alert": Alert
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      error: null,
    };
  },
  methods: {
    submitHandler() {
      console.log(this.login);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login.email, this.login.password)
        .then(data => {
          console.log(data);
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          console.log(err);
          this.error =
            "Sorry we couldn't find an account with those credentials.";
        });

      // Resets the form after submission
      this.login = {
        email: "",
        password: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/variables";
.login-view {
  .branded-area {
    background: $primaryBGColor;
    height: 100vh;
  }
  .login-area {
    margin: auto;
    //   padding: auto;
    .uk-card-default {
      box-shadow: none;
      .form-header {
        font-family: $fontFamily;
        font-weight: 600;
      }
    }
  }
}
</style>
