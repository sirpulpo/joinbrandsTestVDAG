<template>
  <v-container fluid style="height: 100vh" fill-height class="imgBackground">
    <v-row>
      <v-col cols="12" sm="10" md="6" class="mx-auto">
        <v-card color="rgb(50, 50, 50, 0.96)" elevation="6" class="text-center">
          <!-- system-bar -->
          <v-system-bar color="indigo">
            <v-spacer />
            <span class="mt-1 mr-2">{{ timer }}</span>
          </v-system-bar>

          <v-card-title>
            <v-container>
              <v-row>
                <v-avatar color="red" class="mx-auto elevation-3" size="52">
                  <v-icon large color="black">mdi-weight-lifter</v-icon>
                </v-avatar>
              </v-row>
              <v-row>
                <p class="mt-3 mx-auto headline">JOINBRANDS TEST</p>
              </v-row>
            </v-container>
          </v-card-title>

          <v-card-text>
            <p class="title">Home Page</p>
          </v-card-text>

          <v-card-actions>
            <v-row class="mx-12 my-6">
            <v-btn text outlined color="indigo" class="mx-auto" @click="signIn()">
              Sign-In
            </v-btn>
            <v-btn color="indigo" class="mx-auto" @click="signUp()">
              Sign-Up
            </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HomePage',

  data() {
    return {
      timer: '',
    };
  },

  methods: {
    signUp() {
      this.$router.push('/sign-up');
    },
    signIn() {
      this.$router.push('/sign-in');
    },
    setTimer() {
      this.timer = `${moment().format('hh:mm A')}`;
    },
  },

  created() {
    this.setTimer();

    setInterval(() => {
      this.setTimer();
    }, 23000);
  },
};
</script>

<style scoped>
.imgBackground {
  /* The image used */
  background-image: url('../assets/landing.jpg');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
