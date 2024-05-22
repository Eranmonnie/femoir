<script setup>
import { useDark, useToggle } from "@vueuse/core";
import LightBulbOn from "vue-material-design-icons/LightbulbOn.vue";
import LightBulbOff from "vue-material-design-icons/LightbulbOff.vue";
import Menu from "vue-material-design-icons/Menu.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex items-center justify-between pr-[5%]">
    <div class="flex items-center">
      <img class="relative w-10 h-10" src="/icons8-letter-f-48.png" />
      <!-- <span class="-m-3 capitalize text-3xl font-bold absolute top-[44px] left-[67px]">ermoir</span> -->
    </div>

    <div class="ml-auto flex items-center gap-10">
      <span class="capitalize hidden md:inline-block"> blog </span>

      <span class="capitalize hidden md:inline-block"> resources </span>

      <span class="capitalize hidden md:inline-block"> contact </span>

      <div class="flex items-center justify-center gap-5">
        <Menu
          :class="isDark ? 'text-white' : 'text-black'"
          class="font-bold cursor-pointer md:hidden"
        />

        <button @click="toggleDark()">
          <div
            :class="isDark ? 'bg-white' : 'bg-black'"
            class="border-none p-1 rounded-full w-7 h-7 text-center flex items-center justify-center"
          >
            <LightBulbOff fillColor="#000000" v-if="isDark" height="4" />
            <LightBulbOn fillColor="#FFFFFF" v-else height="4" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
