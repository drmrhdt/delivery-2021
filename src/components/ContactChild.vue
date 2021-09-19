<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="b-table">
          <div class="table-wrapper has-mobile-cards">
            <table class="table">
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Телефон</th>
                  <th>Адрес</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="contacts.length == 0">
                <tr class="is-empty">
                  <td colspan="7">
                    <section class="section">
                      <div class="content has-text-grey has-text-centered">
                        <p>
                          <span class="icon is-large"
                            ><i class="mdi mdi-emoticon-sad mdi-48px"></i
                          ></span>
                        </p>
                        <p>У вас пока не было заказов&hellip;</p>
                      </div>
                    </section>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="contacts.length != 0">
                <tr v-for="contact in contacts" :key="contact.id">
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.phone }}</td>
                  <td>{{ contact.address }}</td>
                  <td>
                    <b-button
                      v-if="chosenId!=contact.id"
                      type="is-success"
                      @click="choose(contact)"
                      >Выбрать</b-button
                    >
                    <b-button
                      v-if="chosenId==contact.id"
                      type="is-danger"
                      @click="unChoose()"
                      >Отменить</b-button
                    >
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactsChild",
  data() {
    return {
    chosenId: 0,
      contacts: [
        {
          id: 1,
          name: "Ваня",
          address: "Большая Дмитровка, 8",
          phone: "+7 999 999 99 99"
        },
        {
          id: 2,
          name: "Антон",
          address: "Большая Дмитровка, 8",
          phone: "+7 999 999 99 99"
        },
        {
          id: 3,
          name: "Саша",
          address: "Большая Дмитровка, 8",
          phone: "+7 999 999 99 99"
        },
        {
          id: 4,
          name: "Ваня",
          address: "Большая Дмитровка, 8",
          phone: "+7 999 999 99 99"
        }
      ]
    };
  },
  methods: {
      choose(contact){
        this.chosenId = contact.id;
        this.$emit("remove", { contact: contact });
      },
      unChoose(){
        this.chosenId = 0;
        this.$emit("remove", { contact: null });}
  },
};
</script>

<style lang="scss" scoped></style>
