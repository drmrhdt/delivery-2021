<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">Уволить сотрудника</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">
            Вы уверены, что хотите уволить курьера {{ clientId.name }}?
          </p>
        </section>
        <footer class="modal-card-foot">
          <b-button type="is-danger" @click="removeItem">Уволить</b-button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalFormDischarge",
  props: ["clientId"],

  methods: {
    removeItem() {
      this.$emit("remove", { id: this.clientId.id });
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped></style>
