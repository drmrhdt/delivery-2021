<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">
            Удаление контакта
          </p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">
            Вы уверены, что хотите удалить контакт?
          </p>
        </section>
        <footer class="modal-card-foot">
             <b-button type="is-danger" @click="removeItem">Удалить</b-button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalToDelete",
  props: ["contactId"],
  methods: {
    removeItem() {
      this.$emit("remove", {id: this.contactId});
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped></style>
