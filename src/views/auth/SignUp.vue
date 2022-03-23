<template>
  <v-container fluid style="height: 100vh" fill-height class="imgBackground">
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
                <p class="mt-3 mx-auto headline">JOINBRANDS TEST</p>
              </v-row>
            </v-container>
          </v-card-title>

          <!-- form -->
          <v-card-text class="mt-2">
            <v-form
              ref="login_form"
              v-model="login_valid"
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
                    :rules="[rules.required]"
                    :loading="loading"
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
                    :rules="[rules.required, rules.email]"
                    :loading="loading"
                  />
                </v-col>

                <!-- psw -->
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="usuario.psw"
                    label="Password"
                    :type="show_psw ? 'text' : 'password'"
                    placeholder="Password"
                    hint="Private password for your account"
                    outlined
                    clearable
                    counter
                    color="indigo"
                    :rules="[rules.required, rules.min_psw_lenght]"
                    :loading="loading"
                  >
                    <v-icon slot="append" color="indigo" @click="show_psw = !show_psw">
                      {{ show_psw ? 'mdi-eye' : 'mdi-eye-off' }}
                    </v-icon>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <!-- boton -->
          <v-card-actions>
            <v-row class="mx-12">
              <v-btn
                block
                color="indigo"
                elevation="9"
                @click="handleLogin()"
                :loading="loading"
                :disabled="!login_valid"
              >
                Sign Up
              </v-btn>
            </v-row>
          </v-card-actions>

          <!-- Sign In -->
          <v-card-text class="mt-6">
            <v-row>
              <p class="mx-auto subtitle-1 text-decoration-underline" @click="signIn()">
                Sign In
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
import UserLogin from '../../models/UserLogin.model';

export default {
  name: 'SignUp',

  data() {
    return {
      usuario: new UserLogin(),
      login_valid: true,
      show_psw: false,
      timer: '',
      rules: {
        required: (value) => !!value || 'Required field',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid email format';
        },
        min_psw_lenght: (v) =>
          (v && v.length >= 8) || 'Must contain at least 8 characters',
      },
    };
  },

  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },

  methods: {
    async handleLogin() {
      this.$store.commit('showLoading');

      if (this.$refs.login_form.validate()) {
        await this.$store
          .dispatch('auth/signUp', this.usuario)
          .then(
            (res) => {
              console.log(res);
              this.$store.commit('message', {
                text: `Welcome ${res.username}`,
                color: 'cyan',
                icon: 'mdi-login',
                timeout: 2000,
              });

              this.$router.push('/profile');
            },
            (err) => {
              this.usuario.psw = '';

              if (err) {
                console.log({err});
                if (err.response.data.msg) {
                  this.$store.commit('message', {
                    text: `${err.response.data.msg}`,
                    color: 'red',
                    icon: 'mdi-message-alert',
                    timeout: 4000,
                  });
                }
              }
            }
          )
          .catch((err) => {
            console.log({ err });
          });
      } else {
        this.login_valid = false;
      }

      this.$store.commit('hideLoading');
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
  background-image: url('../../assets/landing.jpg');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
