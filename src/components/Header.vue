<template>
  <b-navbar class="navbar docs-navbar is-spaced has-shadow">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>ДостаДок</strong>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div" v-if="!isLogIn && !courier && !admin">
        <div class="buttons">
          <router-link class="button is-primary" :to="{ path: '/auth' }">
            <strong>Войти</strong>
          </router-link>
        </div>
      </b-navbar-item>
      <b-navbar-item tag="div" v-if="isLogIn">
        <div class="buttons">
          <router-link class="button is-primary" :to="{ path: '/calc' }">
            <strong>Заказать доставку</strong>
          </router-link>
        </div>
      </b-navbar-item>
      <b-navbar-dropdown v-if="isLogIn" label="Иванов Иван">
        <b-navbar-item tag="router-link" :to="{ path: '/account' }">
          Профиль
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/orders' }">
          Заказы
        </b-navbar-item>
        <b-navbar-item @click="logOut"> Выйти </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown v-if="courier" label="Курьер: Иванов Иван">
        <b-navbar-item tag="router-link" :to="{ path: '/personal-information' }">
          Профиль
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/courier' }">
          Заказы
        </b-navbar-item>
        <b-navbar-item @click="logOut"> Выйти </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown v-if="admin" label="Администратор: Иванов Иван">
        <b-navbar-item tag="router-link" :to="{ path: '/personal-information' }">
          Профиль
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/admin' }">
          Административная панель
        </b-navbar-item>
        <b-navbar-item @click="logOut"> Выйти </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLogIn: false,
      courier: false,
      admin: false
    };
  },
  mounted() {
    if (localStorage.getItem("user")) this.isLogIn = true;
    else this.isLogIn = false;

    if (localStorage.getItem("courier")) this.courier = true;
    else this.courier = false;

    if (localStorage.getItem("admin")) this.admin = true;
    else this.admin = false;
  },
  methods: {
    logOut() {
      localStorage.removeItem("user");
      localStorage.removeItem("courier");
      localStorage.removeItem("admin");
      console.log(this.$router.currentRoute);
      if (this.$router.currentRoute.name != "Home") {
        this.$router.push({ name: "Home" });
      } else {
        if (localStorage.getItem("user")) this.isLogIn = true;
        else this.isLogIn = false;

        if (localStorage.getItem("courier")) this.courier = true;
        else this.courier = false;

        if (localStorage.getItem("admin")) this.admin = true;
        else this.admin = false;
      }
    }
  }
};
</script>

<style lang="scss"></style>
