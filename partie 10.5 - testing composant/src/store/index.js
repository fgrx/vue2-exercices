import Vue from 'vue';
import Vuex from 'vuex';
import achats from '@/store/modules/achats';
import users from '@/store/modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		achats,
		users
	}
});
