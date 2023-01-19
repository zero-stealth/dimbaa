import { ref } from "vue";
import { defineStore } from "pinia";


export const useRouteStore = defineStore("route", () => {
const userID = ref(null)
const playerID = ref(null)
const showPage = ref(false)

const setUserId = (Id) => {
    userID.value =  Id;
}

const setPlayerId = (Id) => {
    playerID.value =  Id;
}

const togglePage = () => {
  showPage.value = !showPage.value;
}

  return { playerID, userID, setUserId , setPlayerId, showPage, togglePage};
});
