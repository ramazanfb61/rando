<template>
  <div class="">
    <section class="py-4 border shadow-lg rounded-lg md:w-1/2 mx-auto">
      <h2 class="italic text-lg font-medium">Choose an aspect or,</h2>
      <h2 class="italic text-lg font-medium">Let the fate guide you!</h2>
    </section>
    <section class=" rounded-lg mt-8 md:w-2/4 mx-auto border shadow-lg">
      <div class="p-3 py-5 grid gap-3 md:gap-x-16 grid-cols-2 grid-rows-3 md:w-2/3 mx-auto">
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-200 border shadow-lg outline-green-300 outline  outline-1 ">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
      </div>
      <div class="py-3">
        <button class="border border-button py-3 px-5 md:px-10 rounded-md text-button hover:bg-button hover:text-font  transition-all duration-200">Randoo</button>
      </div>
    </section>
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
        .select('name')

      console.log(data)
      console.log("data", data[0].name)

      data.forEach(element => {
        this.api.push(element.name)
      });
    },

  }
}
</script>
