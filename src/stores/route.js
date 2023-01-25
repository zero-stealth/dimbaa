import { ref } from "vue";
import { defineStore } from "pinia";


export const useRouteStore = defineStore("route", () => {
const userID = ref(null)
const playerID = ref(null)
const stadiumName = ref('');
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

function setStadium(name) {
  stadiumName.value =  name;
}

  return { playerID, userID, setStadium, stadiumName, setUserId , setPlayerId, showPage, togglePage};
});
