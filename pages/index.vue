<template>
  <div class="">
    <section v-if="show" class=" py-4 shadow-2xl rounded-lg md:w-1/2 mx-auto border">
      <h2 class="italic text-lg font-medium">Choose an aspect or,</h2>
      <h2 class="italic text-lg font-medium">Let the fate guide you!</h2>
    </section>
    <section class="px-3 py-8 rounded-lg mt-8 md:w-full lg:w-3/4 mx-auto shadow-2xl border">
      <div 
        v-if="!show "
        class="h-30"
      >
        <p class="mb-3">
          {{ randoo }}
        </p>
        <button
          @click="reload"
          class="border border-button py-2 px-4 md:px-10 rounded-md text-button hover:bg-header hover:text-font  transition-all duration-200 ">
          return
        </button>
      </div>
      <div v-if="show" class=" py-5 grid gap-3 md:gap-x-10 grid-cols-2 md:w-full lg:w-2/3 mx-auto">
        <div @click="active === 1 ? active = 0 : active = 1" :class="{'bg-green-500 text-white':active === 1}"
          class="h-20 md:w-52 rounded-2xl cursor-pointer md:hover:shadow-2xl transition-shadow duration-200 border shadow-lg outline-green-400 outline  outline-2 ">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Nature</div>

          </div>
        </div>
        <div
          class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-red-300 outline  outline-2 select-none"
          :class="{ 'bg-red-500 text-white ': active === 2 }" @click="active === 2 ? active = 0 : active = 2">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Art</div>

          </div>
        </div>
        <div
          class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-blue-300 outline  outline-2 select-none"
          :class="{ 'bg-blue-500 text-white': active === 3 }" @click="active === 3 ? active = 0 : active = 3">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Tech</div>

          </div>
        </div>
        <div
          class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-yellow-300 outline  outline-2 select-none"
          :class="{ 'bg-yellow-500 text-white': active === 4 }" @click="active === 4 ? active = 0 : active = 4">
          <div class="h-full flex justify-center items-center">

            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Society</div>

          </div>
        </div>
        <!-- <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-green-300 outline  outline-2 select-none">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div>
        <div class="h-20 md:w-52 rounded-2xl cursor-pointer hover:shadow-2xl transition-shadow duration-200 border shadow-lg  outline-green-300 outline  outline-2 select-none">
          <div class="h-full flex justify-center items-center">
            
            <div class=" basis-20">Icon</div>
            <div class="text-left basis-36">Doğa</div>

          </div>
        </div> -->
      </div>
      <div v-if="show" class="py-3">
        <button
          @click="randooData(active)"
          class="border border-button py-3 px-5 md:px-10 rounded-md text-button hover:bg-header hover:text-font  transition-all duration-200 ">
          Randoo
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { fetchData } from "../db/index"
import { ref, onBeforeMount } from "vue"


const randoo = ref();
const active = ref(0);
const show = ref(true);


async function randooData(val){
  show.value = false ;
  randoo.value = ""
  const api = await fetchData(val)
  
  let random = Math.floor(Math.random() * api.length)
  api[random]
  randoo.value = Object.values(api[random]).toString() 
}

function reload (){
  show.value = true;
  active.value = 0;
} 

</script>
