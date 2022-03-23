<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="10" md="4" class="mx-auto">
        <v-card
          color="rgb(50, 50, 50, 0.96)"
          elevation="6"
          :loading="loading"
          :disabled="loading"
        >
          <!-- progress -->
          <template slot="progress">
            <v-progress-linear
              height="3"
              indeterminate
              buffer-value="0"
              stream
              color="blue"
            ></v-progress-linear>
          </template>

          <!-- system-bar -->
          <v-system-bar color="indigo">
            <v-spacer />
            <v-icon left color="black">mdi-shield-check</v-icon>
            <span class="mt-1 mr-2">{{ timer }}</span>
          </v-system-bar>

          <!-- title -->
          <v-card-title class="mt-4">
            <v-container>
              <v-row>
                <v-avatar color="red" class="mx-auto elevation-3" size="52">
                  <v-icon large color="black">mdi-weight-lifter</v-icon>
                </v-avatar>
              </v-row>
              <v-row>
                <p class="mt-3 mx-auto headline">PROFILE</p>
              </v-row>
            </v-container>
          </v-card-title>

          <!-- form -->
          <v-card-text class="mt-2">
            <v-form
              ref="login_form"
              lazy-validation
              :disabled="loading"
              class="font-weight-bold"
            >
              <v-row no-gutters class="mx-4">
                <!-- username -->
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="usuario.username"
                    label="Username"
                    placeholder="Username"
                    hint="Username for your account"
                    outlined
                    clearable
                    color="indigo"
                    disabled
                  />
                </v-col>

                <!-- correo -->
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="usuario.correo"
                    label="Email"
                    placeholder="Email"
                    hint="Your personal email"
                    outlined
                    clearable
                    color="indigo"
                    disabled
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <!-- Sign In -->
          <v-card-text class="mt-6">
            <v-row>
              <p class="mx-auto subtitle-1 text-decoration-underline" @click="chngPsw()">
                Change Password
              </p>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ProfileView',

  data() {
    return {
      timer: '',
    }
  },

  computed: {
    usuario() {
      return this.$store.state.auth.usr;
    },
    loading() {
      return this.$store.state.loading;
    },
  },

  methods: {
    chngPsw() {
      this.$router.push('/change-password');
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
}
</script>
