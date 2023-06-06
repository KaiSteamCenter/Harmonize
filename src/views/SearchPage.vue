<script>
export default {
  data() {
    return {
      query: '',
      results: []
    };
  },
  methods: {
    search() {
      fetch(`https://freesound.org/apiv2/search/text/?query=${this.query}&token=mza7IVFXUJIu9hexCX0P0PgGiwrFZT6VO0oESxvM`)
        .then(response => response.json())
        .then(data => {
          this.results = data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
    asyncFuntion() {
      fetch("https://freesound.org/apiv2/search/text/?query=piano&token=mza7IVFXUJIu9hexCX0P0PgGiwrFZT6VO0oESxvM")
        .then(response => {
          console.log(response);
        });
    }
  }
}
</script>

<template>
<v-list-item>
    <v-list-item-title>
      <v-text-field v-model="searchText" label="Search" @keydown.enter="search" />
    </v-list-item-title>
</v-list-item>
</template>

<style scoped>
</style>
