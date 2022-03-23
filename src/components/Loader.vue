<template>
  <div class="text-center">
    <v-dialog v-model="loading" persistent width="300">
      <v-card color="blue darken-4 darken-2" dark>
        <v-card-text>
          <span>Por favor espera</span>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0 mt-3"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Loader",

  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>