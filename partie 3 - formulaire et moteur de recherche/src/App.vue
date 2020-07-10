<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Magasin de livres pour codeurs web</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <h1>Magasin de livres pour codeurs curieux</h1>

        <h2>Rechercher</h2>
        <v-row>
          <v-col cols="12" sm="5">
            <v-text-field v-model="searchText" label="Mot clef" @keydown="search"></v-text-field>
          </v-col>

          <v-col cols="12" sm="5">
            <v-select :items="itemsLangue" v-model="searchLangue" label="langue" @change="search"></v-select>
          </v-col>

          <v-btn color="primary" @click="reinit">Réinitialiser</v-btn>
        </v-row>
        <div v-if="searchText || searchLangue ">
          <h2>Résultats de la recherche</h2>
          <h3 v-if="booksSearchResults.length===0">Aucun livre trouvé</h3>
          <v-row>
            <v-col cols="6" sm="4" v-for="book in booksSearchResults" :key="book.id">
              <BookItem :book="book" />
            </v-col>
          </v-row>
        </div>

        <div v-if="!searchText || searchText==='' && !searchLangue">
          <h2>Top livres</h2>
          <v-row>
            <v-col cols="6" sm="4" v-for="book in topBooks" :key="book.id">
              <BookItem :book="book" />
            </v-col>
          </v-row>

          <h2>Tous les livres</h2>
          <v-row>
            <v-col cols="6" sm="4" v-for="book in classicBooks" :key="book.id">
              <BookItem :book="book" />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import BookItem from "./components/BookItem.vue";
import booksdb from "@/data/booksdb";

export default {
  name: "App",

  components: { BookItem },

  data: () => ({
    books: booksdb,
    searchText: null,
    searchLangue: null,
    booksSearchResults: [],
    itemsLangue: [
      { text: "Tout", value: null },
      { text: "Français", value: "fr" },
      { text: "English", value: "en" }
    ]
  }),
  computed: {
    topBooks() {
      // Version longue
      // const topBooksFiltered = this.books.filter(function(book) {
      //   if (book.top === true) {
      //     return book;
      //   }
      // });

      // return topBooksFiltered;

      //version courte
      return this.books.filter(book => book.top);
    },
    classicBooks() {
      return this.books.filter(book => !book.top);
    }
  },
  methods: {
    search() {
      this.booksSearchResults = this.books;

      if (this.searchLangue)
        this.booksSearchResults = this.booksSearchResults.filter(
          book => book.lang === this.searchLangue
        );

      if (this.searchText) {
        this.booksSearchResults = this.booksSearchResults.filter(
          book =>
            book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
            book.content.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    },
    reinit() {
      // Autre écriture possible :
      // this.booksSearchResults = [];
      // this.searchText = null;
      // this.searchLangue = null;

      [this.booksSearchResults, this.searchLangue, this.searchText] = [
        [],
        null,
        null
      ];
    }
  }
};
</script>

