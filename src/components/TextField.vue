<template lang="html">
  <div class="input">
    <div :class="{'u_ui_blockLabel': true, 'u_ui_input__label_right': labelRight, 'u_ui_input__label_center': labelCenter}">
      <label class="u_ui_input__label">{{label}}</label>
    </div>
    <div class="u_ui_blockInput">
      <textarea
        v-bind:class="{
          'u_ui_textarea__field': true,
          'u_ui_textarea__field_disabled': inputDisabled,
        }"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :name="name"
        maxlength="256"
        wrap="soft"
        v-on:input="updateValue($event.target.value)"
        v-if="type === 'textarea'"
      ></textarea>
      <input
        :type="type"
        v-bind:class="{
          'u_ui_input__field': true,
          'u_ui_input__field_error': inputError,
          'u_ui_input__field_success': inputSuccess,
          'u_ui_input__field_disabled': inputDisabled,
        }"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :name="name"
        v-on:input="updateValue($event.target.value)"
        v-else
      >
      <i :class="{'fa': true, 'fa-eye': icon.eye, 'fa-check': icon.check, 'u_ui_inputIcon': true}" v-bind:title="type" aria-hidden="true" @click='changePassType' v-if="showIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textField',
  props: {
    name: {
      default: 'defaultName'
    },
    label: {
      default: ''
    },
    type: {
      default: 'text'
    },
    placeholder: {
      default: 'Введите текст'
    },
    value: {
      default: ''
    },
    lp: {
      default: false
    },
    lc: {
      default: false
    },
    error: {
      default: false
    },
    success: {
      default: false
    },
    disabled: {
      default: false
    },
  },
  data(){
    return{
      labelRight: false,
      labelCenter: false,
      inputError: false,
      inputDisabled: false,
      inputSuccess: false,
      showIcon: false,
      icon: {
        eye: false,
        check: false
      }
    }
  },
  computed: {},
  watch:{},
  created(){
    this.showIcon = false;
    if(this.error !== false){ this.inputError = true }
    if(this.success !== false){ this.inputSuccess = true }
    if(this.disabled !== false){ this.inputDisabled = true; }
    if(this.lp !== false){ this.labelRight = true; }
    if(this.lc !== false){ this.labelCenter = true; }
    if(this.type === 'password' && this.success === false){ this.showIcon = true; this.icon.eye = true }
    if(this.success !== false && this.type !== 'password'){ this.showIcon = true; this.icon.check = true }
    if(this.type === 'textarea' && this.success !== false || this.type === 'textarea' && this.error !== false){ this.showIcon = false; }
  },
  mounted(){
  },
  methods:{
    changePassType(){
      if(event.target.title === 'password'){
        event.target.parentElement.children[0].type = 'text';
        event.target.title = 'text';
        event.target.classList.remove('fa-eye')
        event.target.classList.add('fa-eye-slash')
      }else if(event.target.title === 'text'){
        event.target.parentElement.children[0].type = 'password';
        event.target.title = 'password';
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye')
      }
    },
    updateValue(value){
      if(value.length > 0){
        document.getElementsByName(this.name)[0].classList.add('input__field_focus')
      }else{
        document.getElementsByName(this.name)[0].classList.remove('input__field_focus')
      }
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="css" scoped>
.input{
  display: flex;
  flex-grow: 1;
  width: 980px;
  margin: 0 auto;
  padding: 10px 0;
  font-family: 'Roboto'
}
.u_ui_blockInput, .u_ui_blockLabel {
  flex-grow: 1;
  width: 100%;
}
.u_ui_blockLabel{
  padding: 7px 0;
}
.u_ui_blockInput{
  position: relative;
}
.u_ui_input__label{
  margin-right: 20px;
}
.u_ui_input__label_right{
  text-align: right;
}
.u_ui_input__label_center{
  text-align: center;
}
.u_ui_inputIcon{
  position: absolute;
  top: 7px;
  right: -10px;
}
.fa-eye:hover, .fa-eye-slash:hover{
  cursor: pointer;
}
.u_ui_textarea__field{
  width: 100%;
  height: 70px;
  border: 1px solid #ECF0F3;
  border-radius: 3px;
  padding: 10px 10px;
  outline: none;
  resize: none;
  font-family: 'Roboto', sans-serif;
}
.u_ui_textarea__field:focus{
  border-color: #263238;
}
.u_ui_textarea__field_error{
  border: 1px solid #FF5521;
  color: #FF5521;
}
.u_ui_textarea__field_disabled{
  border-style: dotted;
  border-width: 2px;
  background-color: transparent;
}
.u_ui_textarea__field_disabled:hover{
  cursor: no-drop;
}
.u_ui_input__field{
  width: 100%;
  border: 1px solid #ECF0F3;
  border-radius: 3px;
  padding: 7px 10px;
  outline: none;
  font-size: 13px;
  letter-spacing: 0.4px;
}
.u_ui_input__field:focus{
  border-color: #263238;
}
.u_ui_input__field_focus{
  border-color: #263238;
}
.u_ui_input__field_error{
  border: 1px solid #FF5521;
  color: #FF5521;
}
.u_ui_input__field_disabled{
  border-style: dotted;
  border-width: 2px;
  background-color: transparent;
}
.u_ui_input__field_disabled:hover{
  cursor: no-drop;
}
.u_ui_input__field_success{
  border: 1px solid #263238;
}
</style>
