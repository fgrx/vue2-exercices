<template>
  <div>

    <h1>Administration</h1>

    <Loading v-if="loading" />

    <div v-for="commande in commandes" :key="commande.id" class='commande'>
        <p><strong>Numéro : {{ commande.id }}</strong></p>
        <p>Total : {{ commande.total }}€</p>
        <p>Produits : <ul><li v-for="book in commande.items" :key="book.id">{{ book.title }}</li></ul></p>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
    components: {
        Loading,
    },

    data() {
    return {
        commandes: [],
        loading:false
    };
    },

    async created() {
        this.loading=true;
        const commandesFromDB = await this.axios.get(
            `${process.env.VUE_APP_API_SERVER}/commandes`
        );

        this.commandes = commandesFromDB.data;
        this.loading=false;
    }
};
</script>

<style lang="scss" scoped>
.commande{
    border-bottom:1px solid grey;
    margin-top:1em;

}
</style>