<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">Оценить заказ</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">
            На сколько звезд Вы оцениваете доставку?
            <b-rate v-model="rate" class="mt-3" custom-text=""></b-rate>
          </p>
        </section>
        <footer class="modal-card-foot">
          <b-button type="is-success" @click="$emit('close'); success()">Оценить</b-button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalToEvaluate",
  data() {
    return {
      rate: 0,
    }
  },
  methods: {
    success() {
      this.$buefy.toast.open({
        message: "Спасибо за вашу оценку!",
        type: "is-success"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
