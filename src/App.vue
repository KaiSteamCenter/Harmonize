<template>
  <v-app id="inspire">
    <v-app-bar flat class="custom-nav">
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="#CAF5A2" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" variant="text">
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field density="compact" hide-details variant="solo"></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="custom-main">
      <v-container>
        <v-row>
          <v-col cols="2" >
            <v-sheet rounded="lg" class="custom-sheet">
              <v-list rounded="lg" bg-color="#3A375C" base-color="#D0F69A">
                <v-list-item to="/" link>
                  <v-list-item-title @click="asyncFuntion()" >Home</v-list-item-title>
                </v-list-item>

                <v-list-item to="/abt" link>
                  <v-list-item-title>Discover</v-list-item-title>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-title>Library</v-list-item-title>
                </v-list-item>

                <!--Divides Main Sections from bottom Section-->
                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>
                    Refresh
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-card>
                <v-card-title>
                  <h1 class="display-1">Welcome to Harmonize, the Future of Music</h1>
                </v-card-title>
                <v-card-text>
                  <p class="subtitle-1">
                    We are excited to introduce a new era in music streaming.
                    Discover, explore, and enjoy an unrivaled collection of music at your fingertips.
                  </p>
                </v-card-text>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

<script setup>
async function asyncFuntion() {
  const result = await fetch("https://api.soundcloud.com/track,3&genres=Pop,House&access=playable&limit=3&linked_partitioning=trues?q=hello&ids=1,2")
  console.log(result);
}
</script>

<style>
.custom-main {
  background-color: #17162C;
}


.custom-main v-card {
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
}
.custom-sheet {
  background-color: #3A375C;
}
</style>
