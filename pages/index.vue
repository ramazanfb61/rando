<template>
  <div class="">
    <section class=" py-4 shadow-2xl rounded-lg md:w-1/2 mx-auto">
      <h2 class="italic text-lg font-medium">Choose an aspect or,</h2>
      <h2 class="italic text-lg font-medium">Let the fate guide you!</h2>
    </section>
    <section class="px-3 py-8 rounded-lg mt-8 md:w-full lg:w-3/4 mx-auto shadow-2xl">

      <div class=" py-5 grid gap-3 md:gap-x-10 grid-cols-2 grid-rows-2 md:w-2/3 mx-auto ">
        <div @click="active === 1 ? active = 0 : active = 1" :class="{'bg-green-500':active === 1}"
          class="h-20 md:w-52 rounded-2xl cursor-pointer md:hover:shadow-2xl transition-shadow duration-200 border shadow-lg outline-green-400 outline  outline-2 ">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Nature</div>
          
          </div>
        </div>
        <div
          class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-red-300 outline  outline-1 "
          :class="{ 'bg-red-500': active === 2 }" @click="active === 2 ? active = 0 : active = 2">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Art</div>

          </div>
        </div>
        <div
          class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-blue-300 outline  outline-1 "
          :class="{ 'bg-blue-500': active === 3 }" @click="active === 3 ? active = 0 : active = 3">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Tech</div>

          </div>
        </div>
        <div
          class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-yellow-300 outline  outline-1 "
          :class="{ 'bg-yellow-500': active === 4 }" @click="active === 4 ? active = 0 : active = 4">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Society</div>

          </div>
        </div>
        <!-- <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-green-300 outline  outline-1 ">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-green-300 outline  outline-1 ">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div> -->
      </div>
      <div class="py-3">
        <button
          class="border border-button py-3 px-5 md:px-10 rounded-md text-button hover:bg-button hover:text-font  transition-all duration-200">Randoo</button>
      </div>
    </section>
  </div>
</template>

<script >
import { supabase } from "../db/index"


export default {
  name: 'IndexPage',
  data() {
    return {
      api: [],
      active: 0,
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
