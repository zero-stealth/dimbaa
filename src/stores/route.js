import { ref } from "vue";
import { defineStore } from "pinia";


export const useRouteStore = defineStore("route", () => {
const userID = ref(null)
const playerID = ref(null)

const setUserId = (Id) => {
    userID.value =  Id;
}

const setPlayerId = (Id) => {
    playerID.value =  Id;
}

  return { playerID, userID, setUserId , setPlayerId};
});
