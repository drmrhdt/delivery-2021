<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">
            Заполните форму, чтобы сделать клиента курьером
          </p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="ФИО:">
            <b-input
              type="text"
              v-model="fio"
              placeholder="Введите ФИО"
              required
            >
            </b-input>
          </b-field>
          <b-field expanded label="Пол:" v-model="sex">
            <b-select placeholder="Выберите пол">
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </b-select>
          </b-field>

          <label class="label">Дата рождения:</label>
          <input
            class="input"
            type="date"
            placeholder="Выберите дату рождения"
            v-model="datebirth"
            required
          />

          <b-field label="Номер карты для начисления зарплаты:">
            <b-input
              type="text"
              v-model="cardnumber"
              placeholder="Введите номер карты"
              required
            >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button type="is-success" @click="removeItem"
            >Сделать курьером</b-button
          >
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalFormMakeCourier",
  props: ["clientId"],

  data() {
    return {
      fio: this.clientId.surname + " " + this.clientId.name,
      sex: null,
      datebirth: "",
      cardnumber: ""
    };
  },
  methods: {
    removeItem() {
      this.$emit("remove", { id: this.clientId.id });
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped></style>
