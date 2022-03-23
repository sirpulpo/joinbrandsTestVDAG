<template>
  <v-list nav dense>
    <v-list-item-title class="text-h5"> JOINBRANDS </v-list-item-title>

    <v-divider class="ma-4" />

    <v-list-item-group v-model="menuGroup" active-class="text--accent-4" class="mt-6">
      <template v-for="item in menuItems">
        <router-link :key="item.title" :to="item.route">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <!-- <v-btn> -->
                <p class="text-wrap subtitle">
                  {{item.title}}
                </p>
                <!-- </v-btn> -->
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'MenuBar',

  data() {
    return {
      menuGroup: null,
      menuItems: [
        {
          title: 'PROFILE',
          icon: 'mdi-account',
          route: '/profile',
        },
        {
          title: 'CHANGE PASSWORD',
          icon: 'mdi-lock-alert-outline',
          route: '/change-password',
        },
      ],
    }
  },

  computed: {
    usrName() {
      return this.$store.state.operador.info.name
        ? this.$store.state.operador.info.name
        : this.$store.state.auth.usr && this.$store.state.auth.usr.name
        ? this.$store.state.auth.usr.name
        : '';
    },
  },

  methods: {
    fHistorico() {
      this.$store.commit("viaje/showhistDialog");
    },
  }
};
</script>
