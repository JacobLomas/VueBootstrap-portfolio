<template>
  <div class="contacto">
    <transition name="bounce" appear>
      <h1 class="text-center">{{contacto.section}}</h1>
    </transition>
    
    <b-form @submit="onSubmit" @reset="onReset" validated class="p-5">
      <b-form-group
        id="input-group-1"
        :label="contacto.mailText"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder="Enter email"
          pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="contacto.nameText" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" :label="contacto.telText" label-for="input-3" description="Ej.: 123456789">
        <b-form-input
          id="input-3"
          type="tel"
          pattern="[0-9]{9}"
          v-model="form.tel"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
          required
        >
          <b-form-checkbox value="datosYes" required>{{contacto.checkText}}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" class="ml-2" variant="primary">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data () {
    return {
      form: {
          email: '',
          name: '',
          tel: '',
          checked: []
        },
    }
  },
  methods: {
      onSubmit(event) {
        event.preventDefault();
        alert("Enviado!");
        location.reload()
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.tel = null
        this.form.checked = []
      }
    },
    props:['contacto']
}
</script>

<style scoped></style>
