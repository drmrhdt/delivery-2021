<template>
  <div>
    <Header></Header>
    <div class="columns is-desktop isMinHeight">
      <div class="column is-one-third is-offset-one-third">
        <form>
          <section class="modal-card-body">
            <p class="title center has-text-centered mt-5">Войти</p>
            <b-field label="Логин">
              <b-input
                type="text"
                v-model="login"
                placeholder="Введите логин"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Пароль">
              <b-input
                type="password"
                v-model="password"
                password-reveal
                placeholder="Введите пароль"
                required
              >
              </b-input>
            </b-field>

            <b-button type="is-primary" @click="auth" expanded class="mt-3"
              >Войти</b-button
            >
            <p class="is-size-6 has-text-centered mt-2">
              Нет аккаунта?
              <router-link :to="{ path: '/registration' }">
                Зарегистрируйтесь!</router-link
              >
            </p>
          </section>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Auth",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      password: "",
      login: ""
    };
  },
  methods: {
    auth() {
      if (this.password != "" && this.login != "") {
        if (this.login == "courier") {
          localStorage.setItem("courier", true);
          this.password = "";
          this.login = "";
          this.$router.push({ name: "Courier" });
        } else {
          if (this.login == "admin") {
            localStorage.setItem("admin", true);
            this.password = "";
            this.login = "";
            this.$router.push({ name: "Admin" });
          } else {
            localStorage.setItem("user", true);
            this.password = "";
            this.login = "";
            this.$router.push({ name: "Home" });
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
