<template>
  <v-card class="overflow-hidden">
    <!-- app bar -->
    <v-app-bar app fixed outlined elevation="6">
      <v-app-bar-nav-icon @click.stop="$emit('showMenu', true)">
        <template v-slot:default>
          <v-icon>mdi-menu</v-icon>
        </template>
      </v-app-bar-nav-icon>

      <v-spacer />

      <v-app-bar-title>
        JOINBRANDS
      </v-app-bar-title>

      <v-spacer />

      <!-- theme -->
      <v-badge bottom left overlap color="indigo" :content="timer">
        <v-btn color="red" @click="logOut()">
          SIGN OUT
        </v-btn>
      </v-badge>
    </v-app-bar>
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  name: 'AppBar',

  data() {
    return {
      searchDialog: false,
      timer: '',
    };
  },

  methods: {
    setTimer() {
      const now = moment().locale('es');
      const timeOut = this.$store.state.auth.timeOut;
      const diff = timeOut ? timeOut.diff(moment()) : null;
      // console.log(now.format('hh:mm:ss A'), diff);

      this.timer = `${now.to(timeOut)}`;
      const currentPath = this.$router.currentRoute.path;

      if (diff < 0 || (diff === null && currentPath !== '/' && currentPath !== '/login'))
        this.logOut();
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$store.commit('viaje/clearViajes');
      this.$store.commit('infoGeneral/clearInfo');
      this.$router.push('/');
    },
  },

  created() {
    console.log(
      'created ->',
      moment()
        .locale('es')
        .format('hh:mm:ss A')
    );
    this.setTimer();

    setInterval(() => {
      this.setTimer();
    }, 17000);
  },
};
</script>
