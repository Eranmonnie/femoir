<script setup>
import LightBulbOn from "vue-material-design-icons/LightbulbOn.vue";
import LightBulbOff from "vue-material-design-icons/LightbulbOff.vue";
import Github from "vue-material-design-icons/Github.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import Menu from "vue-material-design-icons/Menu.vue";
import { useTheme } from "@/lib/themeProvider";
import { toRefs } from "vue";

const theme = useTheme();
const { isDark } = toRefs(theme);
const toggle = () => theme.toggleDark();
</script>

<template>
  <div
    class="flex items-center justify-between pl-7 py-2 pr-[5%] font-roboto-regular text-[15px] font-bold"
  >
    <div class="flex items-center">
      <img class="relative w-10 h-10" src="/icons8-letter-f-48.png" />
      <!-- <span class="-m-3 capitalize text-3xl font-bold absolute top-[44px] left-[67px]">ermoir</span> -->
    </div>

    <div class="ml-auto flex items-center gap-14">
      <div
        class="capitalize hidden md:flex md:items-center justify-center relative"
      >
        <span class=" ">blog</span>
        <ChevronDown
          :class="isDark ? 'text-white' : 'text-dark'"
          class="absolute bottom-0 -right-5"
          :size="20"
        />
      </div>
      <div
        class="capitalize hidden md:flex md:items-center justify-center relative"
      >
        <span class=" ">resources</span>
        <ChevronDown
          :class="isDark ? 'text-white' : 'text-dark'"
          class="absolute bottom-0 -right-5"
          :size="20"
        />
      </div>
      <div
        class="capitalize hidden md:flex md:items-center justify-center relative"
      >
        <span class=" ">contact</span>
        <ChevronDown
          :class="isDark ? 'text-white' : 'text-dark'"
          class="absolute bottom-0 -right-5"
          :size="20"
        />
      </div>

      <div class="flex items-center justify-center gap-5">
        <Menu
          class="font-bold cursor-pointer md:hidden text-black dark:text-white"
        />

        <button class="hidden md:inline-block">
          <div
            :class="isDark ? 'bg-white' : 'bg-black'"
            class="border-none p-1 rounded-full w-7 h-7 text-center flex items-center justify-center"
          >
            <Github fillColor="#000000" v-if="isDark" height="4" />
            <Github fillColor="#FFFFFF" v-else height="4" />
          </div>
        </button>

        <button @click="toggle()">
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
  <hr />
</template>
