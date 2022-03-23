<template>
  <v-app>
    <app-bar
      v-if="appBarShow()"
      @showMenu="drawer = $emit"
      class="mb-12 pb-3"
    />

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <MenuBar @offMenu="drawer = false" />

      <template v-slot:append>
        <AppendMenuBar />
      </template>
    </v-navigation-drawer>

    <!-- <router-view class="mb-12"/> -->
    <router-view/>

    <snack-bar />

    <Loader />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import MenuBar from '@/components/MenuBar.vue';
import AppendMenuBar from '@/components/AppendMenuBar.vue';
import SnackBar from '@/components/SnackBar.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    MenuBar,
    AppendMenuBar,
    SnackBar,
    Loader,
  },

  data() {
    return {
      drawer: false,
      deferredPrompt: null,
    };
  },

  methods: {
    appBarShow() {
      const accsstkn = localStorage.getItem('accsstkn') || null;

      return accsstkn ? true : false;
    },
  },
};
</script>

<style>
a:link {
  text-decoration: none;
}

tbody tr:nth-of-type(odd) {
  background-color: rgba(143, 163, 177, 0.144);
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #7987d3;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3f51b5;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3f51b5;
}
</style>
