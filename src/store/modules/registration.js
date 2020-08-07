function initialState () {
  return {
    user: {
      first_name: null,
      last_name: null,
      birth_date: null,
      email: null
    }
  }
}

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    set_user_field(state, resp) {
      state.user[resp.key] = resp.value
    },
    reset_state(state) {
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      });
    }
  },
  actions: {
    setUserField({ commit }, data) {
      commit('set_user_field', data)
    },
    resetState({ commit }) {
      commit('reset_state')
    }
  },
  getters: {
    user: state => state.user
  }
};
