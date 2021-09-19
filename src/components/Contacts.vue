<template>
  <div>
    <b-modal
      v-model="isComponentModalToDeleteActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="propsDelete">
        <ModalFormDelete
          :contactId="contactId"
          @remove="removeFromList($event)"
          @close="propsDelete.close"
        ></ModalFormDelete>
      </template>
    </b-modal>
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
                        <p>У вас пока нет контактов&hellip;</p>
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
                      @click="openWindowCancel(contact.id)"
                      type="is-danger"
                      >Удалить</b-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <b-field label="Адрес">
          <b-input
            class="tile is-6"
            type="text"
            v-model="address"
            placeholder="Введите адрес"
            required
          >
          </b-input>
        </b-field>
        <div class="tile is-ancestor is-6">
          <div class="tile is-parent">
            <b-field label="Имя">
              <b-input
                class="tile is-child"
                type="text"
                v-model="name"
                placeholder="Введите имя"
                required
              >
              </b-input>
            </b-field>
          </div>
          <div class="tile is-parent">
            <b-field label="Телефон">
              <b-input
                class="tile is-child"
                type="text"
                v-model="phone"
                placeholder="Введите телефон"
                required
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <b-button type="is-primary" @click="add()">Добавить</b-button>
      </div>
    </section>
  </div>
</template>

<script>
import ModalFormDelete from "@/components/ModalToDelete.vue";
export default {
  name: "Contacts",
  components: {
    ModalFormDelete
  },
  data() {
    return {
      contactId: -1,
      isComponentModalToDeleteActive: false,
      address: "",
      name: "",
      phone: "",
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
    add() {
      if (this.address != "" && this.name != "" && this.phone != "") {
        console.log("cjidjkfvsj");
        let k = -1;
        this.contacts.forEach(contact => {
          if (contact.id > k) k = contact.id;
        });
        let obj = {
          id: k + 1,
          name: this.name,
          address: this.address,
          phone: this.phone
        };
        this.contacts.push(obj);
        this.address = "";
        this.name = "";
        this.phone = "";
      }
    },
    openWindowCancel(id) {
      this.contactId = id;
      this.isComponentModalToDeleteActive = true;
    },
    removeFromList(obj) {
      this.contacts = this.contacts.filter(contact => {
        let bool = contact.id != obj.id;
        return bool;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
