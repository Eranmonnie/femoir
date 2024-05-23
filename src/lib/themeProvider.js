import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

export const useTheme = () => {
  return { isDark, toggleDark };
};
