<template>
  <div>
    <h2>Admin => '/admin'</h2>
    <NuxtLink to="/">Go To Root</NuxtLink>
    <p>surname => {{ api }}</p>
  </div>
</template>

<script>
import { supabase } from "../db/index"

export default {
  name: 'IndexPage',
  data() {
    return {
      api: []
    }
  },
  async created() {
    console.log(supabase);
    await this.fetchData();

  },
  methods: {
    async fetchData() {


      let { data, error } = await supabase
        .from('person')
        .select('surname')

      console.log(data)
      console.log("data", data[0].name)

      data.forEach(element => {
        this.api.push(element.surname)
      });
      console.log(this.api)
    },

  }
}

</script>