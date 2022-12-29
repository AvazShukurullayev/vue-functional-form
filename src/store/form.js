const form = {
  state: {
    dataArray: [],
  },
  getters: {
    getDataArray(state) {
      return state.dataArray;
    },
  },
  mutations: {
    setDataArray(state, data) {
      state.dataArray.push(data);
    },
  },
  actions: {
    actionDataArray({ commit }, payload) {
      console.log("payload => ", payload);
      commit("setDataArray", payload);
    },
  },
};

export default form;
