import { shallowRef } from "vue";
import { defineStore } from "pinia";


export const useNextStore = defineStore("nextRoute", () => {
    const nextRoute = shallowRef();

    const updateNext = (current) => {
        nextRoute.value = current;
    }


    // const goNext = (current) => {
    //     if (current.value == nextRoute) {

    //     }
    // }


    return { updateNext, nextRoute, };
});
