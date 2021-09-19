<template>
  <div>
    <Header></Header>
    <div class="columns is-desktop isMinHeight">
      <div class="column is-one-third is-offset-one-third">
        <form>
          <section class="modal-card-body">
            <p class="title center has-text-centered mt-5">
              Зарегистрироваться
            </p>
            <b-field label="Имя">
              <b-input
                type="text"
                :value="name"
                placeholder="Введите имя"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Фамилия">
              <b-input
                type="text"
                :value="surname"
                placeholder="Введите фамилию"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Логин">
              <b-input
                type="text"
                :value="login"
                placeholder="Введите логин"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Пароль">
              <b-input
                type="password"
                :value="password"
                password-reveal
                placeholder="Введите пароль"
                required
              >
              </b-input>
            </b-field>

            <b-button @click="auth" type="is-primary" expanded class="mt-3"
              >Зарегистрироваться</b-button
            >
            <p class="is-size-6 has-text-centered mt-2">
              Есть аккаунт?
              <router-link :to="{ path: '/auth' }">
                Авторизируйтесь!</router-link
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
  name: "Registration",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      name: "",
      surname: "",
      password: "",
      login: ""
    };
  },
   methods: {
    auth() {
      localStorage.setItem("user", true);
      this.password = ""
      this.login = ""
      this.name = ""
      this.surname = ""
      this.$router.push({ name: "Home" });
      }
    
  }
};
</script>

<style lang="scss" scoped></style>
