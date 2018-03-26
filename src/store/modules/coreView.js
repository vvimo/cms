const coreView = {
  state: {
    hrViews: {},
    timeViews: {}
  },
  mutations: {
    ADD_HR_VIEWS: (state, view) => {
      state.hrViews = view
    },
    ADD_TIME_VIEWS: (state, view) => {
      state.timeViews = view
    }
  },
  actions: {
    addHrViews ({ commit }, view) {
      commit('ADD_HR_VIEWS', view)
    },
    addTimeViews ({ commit }, view) {
      commit('ADD_TIME_VIEWS', view)
    }
  }
}

export default coreView
