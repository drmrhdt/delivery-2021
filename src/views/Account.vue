<template>
  <div>
    <Header></Header>
    <section class="container isMinHeight">
      <form>
        <p class="title mt-5">Профиль</p>
        <b-field label="Имя">
          <b-input
            class="tile is-6"
            type="text"
            :value="name"
            placeholder="Введите имя"
            required
          >
          </b-input>
        </b-field>
        <b-field label="Фамилия">
          <b-input
            class="tile is-6"
            type="text"
            :value="surname"
            placeholder="Введите фамилию"
            required
          >
          </b-input>
        </b-field>
        <b-field label="Логин">
          <b-input
            class="tile is-6"
            type="text"
            :value="login"
            placeholder="Введите логин"
            required
          >
          </b-input>
        </b-field>
        <b-field label="Пароль">
          <b-input
            class="tile is-6"
            type="password"
            :value="password"
            password-reveal
            placeholder="Введите пароль"
            required
          >
          </b-input>
        </b-field>
        <b-button type="is-primary" class="mb-5" @click="success"
          >Сохранить</b-button
        >
      </form>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Account",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      name: "Иван",
      surname: "Иванов",
      password: "password",
      login: "login"
    };
  },
  methods: {
    success() {
      this.$buefy.notification.open({
        duration: 5000,
        message: `Изменения были успешно сохранены!`,
        position: "is-bottom-right",
        type: "is-success"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
