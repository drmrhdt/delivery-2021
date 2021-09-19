<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">
            Подтвердите передачу документов курьером получателю
          </p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <div class="flexxx">
            <canvas style="width: 100%" id="canvas3"></canvas>
            <canvas style="width: 100%" id="canvas4"></canvas>
          </div>
          <div class="flexxx">
            <p class="subtitle is-5">Подпись получателя</p>

            <p class="subtitle is-5">Подпись курьера</p>
          </div>
          <div class="flexxx">
            <b-button type="is-danger" @click="clear(1)">Очистить</b-button>
            <b-button type="is-danger" @click="clear(2)">Очистить</b-button>
          </div>
        </section>
        <footer class="modal-card-foot">
          <b-button type="is-primary" @click="confirm">Подтвердить</b-button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
var signaturePad, signaturePad2;
function resizeCanvas(canvas1, canvas2) {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas1.width = canvas1.offsetWidth * ratio;
  canvas1.height = canvas1.offsetHeight * ratio;
  canvas1.getContext("2d").scale(ratio, ratio);
  signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  resizeCanvas2(canvas2);
}

function resizeCanvas2(canvas2) {
  var ratio2 = Math.max(window.devicePixelRatio || 1, 1);
  canvas2.width = canvas2.offsetWidth * ratio2;
  canvas2.height = canvas2.offsetHeight * ratio2;
  canvas2.getContext("2d").scale(ratio2, ratio2);
  signaturePad2.clear(); // otherwise isEmpty() might return incorrect value
}

export default {
  name: "ModalFormSignatureEnd",

  methods: {
    danger() {
      this.$buefy.toast.open({
        message: `Проверьте, поставлены ли обе подписи для подтверждения`,
        position: "is-bottom",
        type: "is-danger"
      });
    },
    confirm() {
      if (!signaturePad.isEmpty() && !signaturePad2.isEmpty()) {
        let code1 = signaturePad.toDataURL();
        code1 = code1.split("image/png;base64,")[1];

        let code2 = signaturePad2.toDataURL();

        code2 = code2.split("image/png;base64,")[1];
        console.log(`Подпись получателя:`, code1);
        console.log(`Подпись курьера:`, code2);
        signaturePad.clear();
        signaturePad2.clear();
        this.$emit("close");
      } else this.danger();
    },

    clear(id) {
      if (id == 1) signaturePad.clear();
      if (id == 2) signaturePad2.clear();
    }
  },
  mounted() {
    let interval = setInterval(() => {
      var canvas1 = document.querySelector("#canvas3");
      var canvas2 = document.querySelector("#canvas4");
      if (canvas1 != null && canvas2 != null) {
        clearInterval(interval);
        canvas1.style.border = "1px solid black ";
        canvas1.style.width = "300px";
        canvas1.style.height = "300px";

        canvas2.style.border = "1px solid black ";
        canvas2.style.width = "300px";
        canvas2.style.height = "300px";

        signaturePad = new SignaturePad(canvas1);
        signaturePad2 = new SignaturePad(canvas2);

        window.addEventListener("resize", resizeCanvas(canvas1, canvas2));
        resizeCanvas(canvas1, canvas2);
      }
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
.flexxx {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
