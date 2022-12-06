<template>
  <div class="home">
    <h2 style="text-align:center;">首页</h2>
    <single-upload v-model="dataForm.url"></single-upload>

    {{dataForm.url}}
  </div>
</template>

<script>
import '@/assets/styles/home.css'
import singleUpload from "./Upload.vue"

export default {
  name: "Home",
  data () {
    return {
      dataForm: {
        url: ""
      }
    }
  },
  components: {
    singleUpload
  }
}
</script>
