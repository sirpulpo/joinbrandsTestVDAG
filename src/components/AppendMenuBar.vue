<template>
  <div>
    <div class="pa-2 text-center mt-n2">
      <v-btn color="green darken-2" block class="mx-auto" :href="chatWA()" target="_blank">
        <v-icon left size="24px"> mdi-whatsapp </v-icon>
        Ayuda
      </v-btn>
    </div>

    <div class="pa-2 text-center mt-n2 mb-4">
      <v-btn color="indigo" block dark class="mx-auto" elevation="3" @click="logOut()">
        <v-icon left size="24px"> mdi-logout-variant </v-icon>
        Cerrar sesión
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppendMenuBar",

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$store.commit("viaje/clearViajes");
      this.$store.commit("operador/clearInfo");
      this.$router.push("/login");
    },

    chatWA() {
      const telefono = "5539993879";
      if (telefono) {
        const num = telefono.replace(/ /g, "");
        return `https://wa.me/+52${num}`;
      }
      return "";
    },
  },
};
</script>