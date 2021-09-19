<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">Войдите или зарегистрируйтесь</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">
            Чтобы оформить заказ, необходимо зарегистрироваться или войти в
            аккаунт.
          </p>
        </section>
        <footer class="modal-card-foot">
            <router-link class="button is-primary" :to="{ path: '/auth' }">
            <strong>Войти</strong>
          </router-link>
          <router-link class="button is-primary" :to="{ path: '/registration' }">
            <strong>Зарегистрироваться</strong>
          </router-link>
          <!-- <b-button label="Close" @click="$emit('close')" /> -->
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalToLogIn"
};
</script>

<style lang="scss" scoped></style>
