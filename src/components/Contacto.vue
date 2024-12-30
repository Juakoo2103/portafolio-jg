<template>
  <div class="contacto mt-5" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1>Contacto</h1>
        </div>
        <div class="col-12 col-md-6">
          <form @submit.prevent="submitForm">
            <div class="form-group mb-3">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                v-model="form.nombre"
                :class="{
                  'is-invalid': errors.nombre,
                  'is-valid': !errors.nombre && form.nombre,
                }"
              />
              <small id="nombreHelp" class="form-text text-muted"
                >Ingresa tu nombre</small
              >
              <div class="invalid-feedback">
                Ingresa tu nombre correctamente.
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="apellido">Apellido</label>
              <input
                type="text"
                class="form-control"
                id="apellido"
                v-model="form.apellido"
                :class="{
                  'is-invalid': errors.apellido,
                  'is-valid': !errors.apellido && form.apellido,
                }"
              />
              <small id="apellidoHelp" class="form-text text-muted"
                >Ingresa tu apellido</small
              >
              <div class="invalid-feedback">
                Ingresa tu apellido correctamente.
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
                :class="{
                  'is-invalid': errors.email,
                  'is-valid': !errors.email && form.email,
                }"
              />
              <small id="emailHelp" class="form-text text-muted"
                >Ingresa tu email</small
              >
              <div class="invalid-feedback">
                Ingresa tu email correctamente.
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="mensaje">Mensaje</label>
              <textarea
                class="form-control"
                id="mensaje"
                rows="3"
                v-model="form.mensaje"
                :class="{
                  'is-invalid': errors.mensaje,
                  'is-valid': !errors.mensaje && form.mensaje,
                }"
              ></textarea>
              <small id="mensajeHelp" class="form-text text-muted"
                >Ingresa tu mensaje</small
              >
              <div class="invalid-feedback">
                Ingresa tu mensaje correctamente.
              </div>
            </div>
            <button type="submit" class="btn btn-secondary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto",
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
      },
      errors: {
        nombre: false,
        apellido: false,
        email: false,
        mensaje: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Validación básica
      this.errors.nombre = !this.form.nombre;
      this.errors.apellido = !this.form.apellido;
      this.errors.email = !this.validateEmail(this.form.email);
      this.errors.mensaje = !this.form.mensaje;

      // Si no hay errores, procesa el formulario
      if (
        !this.errors.nombre &&
        !this.errors.apellido &&
        !this.errors.email &&
        !this.errors.mensaje
      ) {
        alert("Formulario enviado correctamente");
        this.clearForm();
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    clearForm() {
      this.form.nombre = "";
      this.form.apellido = "";
      this.form.email = "";
      this.form.mensaje = "";
    },
  },
};
</script>

<style scoped>
.contacto {
  padding: 20px 0;
}
</style>
