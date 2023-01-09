<script>
import AppHome from "../components/Tutorial.vue"
import AppHeader from "../components/AppHeader.vue";

export default{
  components : {
    AppHome,
    AppHeader,
  }
}

</script>

<template>
  <div class="">
    <AppHeader />
    <div class="pt-2 pl-2 h-screen bg-main">
      <Nuxt />
    </div>
  </div>
</template>