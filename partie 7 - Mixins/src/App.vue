<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Magasin de livre pour codeurs web</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn :to="{name:'Home'}" class="mr-1" exact>Accueil</v-btn>
      <v-btn :to="{name:'About'}" class="mr-1">A propos</v-btn>
      <v-btn @click="openDialog" color="pink" fab large dark class="ml-4">
        <v-badge color="purple" :content="achats.length" v-if="achats.length">
          <v-icon dark>mdi-basket</v-icon>
        </v-badge>
        <v-icon v-else dark>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Panier d'achat</v-card-title>

        <v-card-text>
          <v-alert v-if="thankU" type="success">{{ thankU }}</v-alert>

          <div v-if="!thankU">
            <p v-if="!achats.length">Aucun produit dans le panier</p>

            <v-list v-if="achats.length">
              <v-list-item v-for="achat in achats" :key="achat.id">
                <v-list-item-icon>
                  <v-btn @click="deleteAchat(achat)" icon>
                    <v-icon color="pink">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{achat.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{achat.prix}}€</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <p>
              <strong>Total :</strong>
              {{ totalPanier }}
            </p>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn :disabled="!achats.length" color="primary" @click="buyAction()">Acheter</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import BuyBooks from "@/mixins/BuyBook";
export default {
  mixins: [BuyBooks],
  data() {
    return {
      dialog: false,
      thankU: null
    };
  },
  mounted() {
    this.testEnv();
  },
  computed: {
    achats() {
      return this.$store.state.achats.achats;
    },
    totalPanier() {
      return this.achats.reduce((reducer, achat) => reducer + achat.prix, 0);
    }
  },
  methods: {
    openDialog() {
      this.thankU = null;
      this.dialog = true;
    },
    deleteAchat(achat) {
      const achatsModif = this.achats.filter(
        achatItem => achatItem.id != achat.id
      );
      this.$store.dispatch("updateAchats", achatsModif);
    },
    async buyAction() {
      const commande = { total: this.totalPanier, items: this.achats };

      try {
        //Ajoute la commande en base de données
        await this.axios.post(
          `${process.env.VUE_APP_API_SERVER}/commandes`,
          commande
        );
        this.thankU = "Merci pour votre commande !";
        this.$store.dispatch("updateAchats", []);

        //Met à jour le stock de livre
        const updateStockInDB = book => {
          book.quantity--;
          this.axios.put(
            `${process.env.VUE_APP_API_SERVER}/books/${book.id}`,
            book
          );
        };

        // 3 versions possibles :
        //version longue
        // for(const book of commande.items){
        //   updateStockInDB(book)
        // }

        //version moins longue
        //commande.items.forEach(book => updateStockInDB(book))

        //version courte
        commande.items.forEach(updateStockInDB);
      } catch {
        alert(
          "Il y a eu une erreur dans votre commande. Veuillez nous contacter."
        );
      }
    }
  }
};
</script>

<style lang="scss">
</style>