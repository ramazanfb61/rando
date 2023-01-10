
<template>
  <div class="">
    <AppHeader />
    <main class="md:mt-5 mt-2 text-center  w-11/12 md:w-3/4 mx-auto  rounded-3xl">
      <div>
        <Nuxt />
      </div>
    </main>
    <footer class="py-5 text-center relative top-72 md:top-80">
      2023 Copyrights are preserved
    </footer>
  </div>
</template>

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