<template>
  <div class="signup-view">
    <vk-grid>
      <div class="uk-width-1-2@m branded-area uk-visible@m">
        <img alt="medical-doctors" src="../assets/doctors.png" class="uk-position-center-left" />
      </div>
      <div class="uk-width-1-2@m uk-width-auto@s signup-area">
        <vk-card class="uk-width-auto@m signup-form">
          <vk-card-title class="form-header">Sign Up</vk-card-title>
          <el-alert
            title="success alert"
            type="success"
            description="Registration Successful!"
            v-if="success"
            show-icon
          ></el-alert>
          <form class="uk-form-stacked" @submit.prevent="submitHandler">
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Fullname</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  v-model="register.fullname"
                  id="form-stacked-text"
                  type="text"
                />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Email</label>
              <div class="uk-form-controls">
                <input class="uk-input" v-model="register.email" id="form-stacked-text" type="text" />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Password</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  v-model="register.password"
                  id="form-stacked-text"
                  type="password"
                />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Confirm Password</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  v-model="register.confirmPassword"
                  id="form-stacked-text"
                  type="password"
                />
              </div>
            </div>

            <div class="uk-margin">
              <div class="uk-form-controls">
                <!-- <vk-button type="secondary" class="uk-width-1-1">Register</vk-button> -->
                <button class="uk-button uk-button-secondary uk-width-1-1">Register</button>
              </div>
            </div>

            <div class="uk-margin">
              <vk-grid class="uk-child-width-expand@s uk-text-center">
                <div>
                  Do you have an account?
                  <router-link to="/login" class="signin-link">Log In</router-link>
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
import firebase from "firebase";
import { Alert } from "element-ui";
import { Grid } from "vuikit/lib/grid";
import { Card } from "vuikit/lib/card";
export default {
  name: "Register",
  components: {
    "vk-grid": Grid,
    "vk-card": Card,
    "el-alert": Alert
  },
  data() {
    return {
      register: {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      success: null,
    };
  },
  methods: {
    submitHandler() {
      console.log(this.register);

      // Firebase Auth for sign in
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.register.email, this.register.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.register.fullname
            })
            .then(() => {
              this.success = "Registration successful!";
              this.$router.push({ path: "/login" })
              // setTimeout(function () {  } , 2000);
            });
        })
        .catch(err => {
          // For debugging purposes
          console.log(err);
        });

      // Resets the form after submission
      this.login = {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/variables";
.signup-view {
  .branded-area {
    background: $primaryBGColor;
    height: 100vh;
  }
  .signup-area {
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