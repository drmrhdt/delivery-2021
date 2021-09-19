<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">
            Отмена заказа
          </p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">
            Вы уверены, что хотите отменить заказ?
          </p>
        </section>
        <footer class="modal-card-foot">
             <b-button type="is-danger" @click="removeItem">Отменить</b-button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalToCancel",
  props: ["orderId"],
  methods: {
    removeItem() {
      console.log(this.orderId + "njkdfsbjkdf");
      this.$emit("remove", {id: this.orderId});
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped></style>
