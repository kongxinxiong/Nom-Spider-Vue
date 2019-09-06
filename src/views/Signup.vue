<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-80 md-small-size-100 mx-auto text-center"
          >
            <div class="md-card">
              <div class="md-card-content">
                <h2 class="card-title text-center margin_bottom">
                  Register
                </h2>
                <form novalidate @submit.prevent="validateUser">
                  <div class="md-layout margin_bottom">
                    <div
                      class="md-layout-item md-size-45 md-small-size-100 mx-auto"
                    >
                      <md-field
                        :class="getValidationClass('name')"
                        class="md-form-group md-green"
                      >
                        <md-icon>person_outline</md-icon>
                        <label for="name">Name</label>
                        <md-input
                          name="name"
                          id="name"
                          autocomplete="given-name"
                          v-model="form.name"
                          :disabled="sending"
                        />
                        <p class="md-error" v-if="!$v.form.name.required">
                          The name is required
                        </p>
                        <p
                          class="md-error"
                          v-else-if="!$v.form.name.minlength"
                        >
                          Invalid name
                        </p>
                      </md-field>
                      <md-field
                              :class="getValidationClass('email')"
                              class="md-form-group md-green"
                      >
                        <md-icon>email</md-icon>
                        <label for="email">Email</label>
                        <md-input
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="email"
                                v-model="form.email"
                                :disabled="sending"
                        />
                        <p class="md-error" v-if="!$v.form.email.required">
                          The email is required
                        </p>
                        <p class="md-error" v-else-if="!$v.form.email.email">
                          Invalid email
                        </p>
                      </md-field>
                      <md-field
                        :class="getValidationClass('username')"
                        class="md-form-group md-green"
                      >
                        <md-icon>person</md-icon>
                        <label for="username">Username</label>
                        <md-input
                          name="username"
                          id="username"
                          autocomplete="username"
                          v-model="form.username"
                          :disabled="sending"
                        />
                        <p class="md-error" v-if="!$v.form.username.required">
                          The username is required
                        </p>
                        <p
                          class="md-error"
                          v-else-if="!$v.form.username.minlength"
                        >
                          Invalid username
                        </p>
                      </md-field>
                      <md-field
                        :class="getValidationClass('password')"
                        class="md-form-group md-green"
                      >
                        <md-icon>lock_outline</md-icon>
                        <label for="password">Password</label>
                        <md-input
                          name="password"
                          id="password"
                          v-model="form.password"
                          :disabled="sending"
                          type="password"
                        />
                        <p class="md-error">The password is required</p>
                      </md-field>
                      <md-field
                        :class="getValidationClass('confirm_password')"
                        class="md-form-group md-green"
                      >
                        <md-icon>lock</md-icon>
                        <label for="confirm_password"
                          >Confirm your password</label
                        >
                        <md-input
                          name="confirm_password"
                          id="confirm_password"
                          v-model="form.confirm_password"
                          :disabled="sending"
                          type="password"
                        />
                        <p class="md-error">The confirm password is required</p>
                      </md-field>
                    </div>
                    <div
                      class="md-layout-item md-size-45 md-small-size-100 mx-auto"
                    >
                      <md-field
                        :class="getValidationClass('location')"
                        class="md-form-group md-green"
                      >
                        <md-icon>my_location</md-icon>
                        <label>Location</label>
                        <md-select
                          name="location"
                          id="location"
                          v-model="form.location"
                          md-dense
                          :disabled="sending"
                        >
                          <md-option value="Shang Hai"
                            >&nbsp;&nbsp; &nbsp;&nbsp; Shang Hai</md-option
                          >
                          <md-option value="Bei Jing">
                            &nbsp;&nbsp; &nbsp;&nbsp; Bei Jing</md-option
                          >
                          <md-option value="Tokyo">
                            &nbsp;&nbsp; &nbsp;&nbsp; Tokyo</md-option
                          >
                          <md-option value="Hong Kong">
                            &nbsp;&nbsp; &nbsp;&nbsp; Hong Kong</md-option
                          >
                          <md-option value="New York">
                            &nbsp;&nbsp; &nbsp;&nbsp; New York</md-option
                          >
                          <md-option value="London">
                            &nbsp;&nbsp; &nbsp;&nbsp; London</md-option
                          >
                          <md-option value="Singapore"
                            >&nbsp;&nbsp; &nbsp;&nbsp; Singapore</md-option
                          >
                          <md-option value="Mumbai">
                            &nbsp;&nbsp; &nbsp;&nbsp; Mumbai</md-option
                          >
                        </md-select>
                      </md-field>
                      <md-datepicker v-model="form.birthday">
                        <label>Birthday</label>
                      </md-datepicker>
                      <h6 class="description">Select your preference</h6>
                      <div class="flex-column text-left">
                        <md-checkbox v-model="form.preferences" value=1>Party</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=2>Reading</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=3>Skiing</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=4>Badminton</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=5>Hiking</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=6>Climbing</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=7>Video Game</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=8>Basket Ball</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=9>Family Event</md-checkbox>
                        <md-checkbox v-model="form.preferences" value=10>Pet</md-checkbox>
                      </div>
                    </div>
                  </div>
                  <div class="md-layout">
                    <div class="md-layout-item">
                      <md-button
                        type="submit"
                        class="md-success md-round margin_bottom"
                        :disabled="sending"
                        >Create user</md-button
                      >
                      <md-progress-bar
                        md-mode="indeterminate"
                        class="md-success"
                        v-if="sending"
                      />
                      <md-snackbar class="md-green" :md-active.sync="userSaved"
                        >The user {{ lastUser }} was saved with
                        success!</md-snackbar
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import requestAPI from "../plugins/request";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "Signup",
  components: {
    requestAPI
  },
  bodyClass: "login-page",
  mixins: [validationMixin],
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  data: () => ({
    form: {
      name: null,
      username: null,
      birthday: null,
      email: null,
      preferences: []
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      username: {
        required,
        minLength: minLength(3)
      },
      birthday: {
        required,
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.name = null;
      this.form.username = null;
      this.form.birthday = null;
      this.form.email = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.name} ${this.form.username}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
      console.log(JSON.stringify(this.form));
      requestAPI({
        url: "http://localhost:8080/api/user",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: this.form
      })
        .then(res => {
          // alert(JSON.stringify(res));
          this.$router.push("/login");
          console.log(res);
        })
        .catch(err => {
          // alert(" error " + JSON.stringify(err));
          console.log(err);
        });
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style scoped>
.margin_bottom {
  margin-bottom: 50px;
}
.md-progress-bar {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
h6 {
  font-size: 0.8rem;
  text-align: left;
}
.md-checkbox {
  margin: 8px 8px 8px 0;
}
</style>
