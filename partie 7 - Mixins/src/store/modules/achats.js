export default {
    state: {
        achats: []
    },
    getters: {
        achats: state => {
            return state.achats;
        }
    },
    mutations: {
        updateAchats(state, payload) {
            state.achats = payload;
        }
    },
    actions: {
        updateAchats({commit}, payload) {
            commit('updateAchats', payload);
        }
    }
};