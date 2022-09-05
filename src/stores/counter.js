import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
        msg: "Hello WOrld",
        count: 0,
    }),
    getters: {
        oddOrEven: (state) => {
            if (state.count % 2 === 0) return "Even";
            return "Odd";
        },
    },
    actions: {
        addCount(val) {
            this.count += val;
        },
    },
});