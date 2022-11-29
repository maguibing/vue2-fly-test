<template>
  <div class="wrapper">
    <div class="container">
      <!-- Light version -->
      <div id="light" class="row text-center">
        <div class="info">
          <img src="../assets/images/404/404-light.gif" alt="404 error" />
          <p>The page you are looking for was moved, removed,<br />
            renamed or might never existed.</p>
          <router-link to="/" class="btn">Go Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/404.css"
export default {
  name: "NotFound",
  data () {
    return {

    }
  }
}
</script>
