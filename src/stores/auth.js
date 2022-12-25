import { ref } from "vue";
import { defineStore } from "pinia";

// export const useAuthStore = defineStore({
//   id: "auth",
//   state: () => ({
//     isLoggedIn: false,
//   }),

//   actions: {
//     logIn() {
//       this.isLoggedIn = true;
//     },
//   },
// });

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);

  function logIn() {
    isLoggedIn.value = true;
  }

  return { isLoggedIn, logIn };
});
