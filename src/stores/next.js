import { ref , shallowRef} from "vue";
import { defineStore } from "pinia";


export const useNextStore = defineStore("nextRoute", () => {
    const nextRoute = shallowRef();

    const updateNext = (current) => {
        nextRoute.value = current;
    }


    return { updateNext, nextRoute };
});
