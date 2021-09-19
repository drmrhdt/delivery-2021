<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">Оформление доставки прошло успешно</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">
            Доставка была успешно оформлена, перейдите к списку своих заказов для
            получения подробной информации и возможности отследить статусы
            заказа
          </p>
        </section>
        <footer class="modal-card-foot">
          <router-link
            class="button is-primary"
            
            :to="{ path: '/orders' }"
          >
            <strong>Перейти к списку заказов</strong>
          </router-link>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalToPay"
};
</script>

<style lang="scss" scoped></style>
