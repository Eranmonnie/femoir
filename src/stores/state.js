import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const isDark = ref(false)
  const theme = (value) => isDark.value = value 
  return { isDark, theme  }
})
