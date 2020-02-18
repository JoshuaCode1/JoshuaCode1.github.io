<template>
  <div class="home">
    <div class="uk-position-top">
      <vk-navbar transparent class="uk-container">
        <vk-navbar-nav>
          <vk-navbar-logo class="brand">Logo</vk-navbar-logo>
        </vk-navbar-nav>
      </vk-navbar>
    </div>
    <div class="content uk-position-center">
      <p class="first-p">Welcome to Ibadan</p>
      <p class="second-p">Urban Planning & Health Analysis</p>
      <p v-vk-margin>
        <router-link to="/register">
          <vk-button>Get Started</vk-button>
        </router-link>
      </p>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { Navbar } from "vuikit/lib/navbar";
export default {
  name: "Home",
  components: {
    "vk-navbar": Navbar
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/variables";
.home {
  background: linear-gradient(rgba(56, 158, 48, 0.8), rgba(56, 158, 48, 0.8)),
    url("../assets/stethoscope.jpeg") center center;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  .brand {
    color: $primaryColor;
    font-family: $fontFamily;
    font-weight: 600;
  }
  .content {
    color: $primaryColor;
    text-align: center;
    .first-p {
      font-weight: bold;
      font-size: 25px;
      // line-height: 24px;
    }
    .second-p {
      font-weight: bold;
      font-size: 40px;
      // line-height: 90px;
    }
    .uk-button-default {
      margin: 10px;
      color: $primaryColor;
      font-weight: 600;
      &:hover {
        border: none;
        background-color: $primaryColor;
        color: $btnHoverColor;
        
      }
    }
  }
}
</style>
