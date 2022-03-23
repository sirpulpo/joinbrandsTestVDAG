<template>
  <div class="text-center">
    <v-expand-x-transition>
      <v-snackbar
        :color="snackbar_obj.color"
        dark
        outlined
        shaped
        centered
        multi-line
        elevation="12"
        v-model="snackbar_obj.snackbar"
        :timeout="snackbar_obj.timeout"
      >
        <v-row class="my-auto">
          <v-col cols="2" class="my-auto">
            <v-icon large :color="snackbar_obj.color">
							{{snackbar_obj.icon}}
						</v-icon>
          </v-col>

          <v-col cols="10" class="my-auto">
            <p class="title">
              {{ snackbar_obj.text }}
            </p>
          </v-col>
        </v-row>

        <template v-slot:action="{ attrs }">
          <v-btn
						small
            :color="snackbar_obj.color"
            top
            class="mt-n5"
            text
            outlined
            rounded
            elevation="12"
            v-bind="attrs"
            @click="snackbar_obj.snackbar = false"
            ><v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-expand-x-transition>
  </div>
</template>

<script>
export default {
  name: "Snackbar",

  computed: {
    snackbar_obj() {
      return this.$store.state.snackbarMessage;
    },
  },
};
</script>
