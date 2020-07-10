export default {
	methods: {
		buy(book) {
			const achatsInStore = this.$store.state.achats.achats;
			achatsInStore.push(book);
			this.$store.dispatch('updateAchats', achatsInStore);
		},
		testEnv() {
			console.log('var_env', process.env.VUE_APP_API_SERVER);
		}
	}
};
