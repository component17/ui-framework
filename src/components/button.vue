<template lang="html">
  <div :class="{
    'u_ui_button': true,
    'u_ui_button__btn_inline': isInline
    }">

    <button
      type="button"
      :name="name"
      :size="size"
      :loader="loader"
      :color="color"
      :disabled="loader"
      :class="{
        'u_ui_button__btn': true,
        'u_ui_button__btn_block': isBlock,
        'u_ui_button__btn_flat': isFlat,
        'u_ui_button__btn_disabled': isDisabled,
        }"
      v-on:click="clickEvent($event.target)"
      >
        <div v-if="loader" style="position: relative;color: transparent;">
          <slot></slot>
          <u-loader style="position: absolute;top: 0;left:50%;margin-left:-22px;"></u-loader>
        </div>
        <div v-else>
          <i :class="['mdi', 'mdi-'+iname, 'u_ui_button__btn_icon']" v-show="isIcon" v-if="position !== 'right'"></i>
          <slot>Click me!</slot>
          <i :class="['mdi', 'mdi-'+iname, 'u_ui_button__btn_icon']" v-show="isIcon" v-if="position === 'right'"></i>
        </div>

      </button>
  </div>
</template>

<script>
export default {
  name: 'cBtn',
  props: {
    name: {
      default: 'defaultBtnName'
    },
    size: {
      default: 'md'
    },
    iname: {
      default: ''
    },
    color: {
      default: 'dark-blue'
    },
    block: {
      default: false
    },
    inline: {
      default: false
    },
    ir: {
      default: false
    },
    loader: {
      default: ''
    },
    flat: {
      default: false
    },
    disabled: {
      default: false
    },
  },
  data(){
    return{
      isBlock: false,
      isFlat: false,
      isDisabled: false,
      isIcon: false,
      iconName: null,
      isInline: false,
      position: '',
      isLoading: false
    }
  },
  computed: {},
  watch:{
    loader(){
      if(this.loader === true){
        this.isDisabled = true
      }else{
        this.isDisabled = false
      }
    }
  },
  created(){
    if(this.inline !== false){ this.isInline = true }
    if(this.disabled !== false){ this.isDisabled = true }
    if(this.iname !== ''){ this.isIcon = true; }
    if(this.flat !== false){ this.isFlat = true; }
    if(this.ir !== false){ this.position = 'right' }
    if(this.block !== false){ this.isBlock = true }
    if(this.loader === true){  this.isDisabled = true }
  },
  mounted(){},
  methods:{
    clickEvent(btn){
      if(!this.isDisabled){
        this.$emit('click', btn)
      }else{
        return;
      }
    }
  }
}
</script>

<style lang="css">
/* MAIN STYLE */
.u_ui_button{
  display: block;
}
.u_ui_button__btn{
  color: white;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: .4px;
  line-height: 1.2;
  margin: 17px 10px;
}
.mdi{
  font-size: 14px !important;
  padding: 0 3px;
}
.u_ui_button__btn:hover{
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(38, 50, 56, 0.17), top layer #ffffff 12%;
}
/* INLINE */
.u_ui_button__btn_inline{
  display: inline-block;
}
/* DISABLED */
.u_ui_button__btn_disabled{
  background: #ECF0F2 !important;
  color: #889CA6 !important;
}
.u_ui_button__btn_disabled:hover{
  cursor: no-drop;
}
/* FLAT STYLE */
.u_ui_button__btn_flat{
  background: transparent !important;
  position: relative;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.u_ui_button__btn_flat[color="orange"]{
  color: #FF5521;
  border: 1px solid #FF5521;
}
.u_ui_button__btn_flat[color="silver"]{
  color: #ECF0F2;
  border: 1px solid #ECF0F2;
}
.u_ui_button__btn_flat[color="blue-gray"]{
  color: #78909C;
  border: 1px solid #78909C;
}
.u_ui_button__btn_flat[color="dark-blue"]{
  color: #36474F;
  border: 1px solid #36474F;
}
.u_ui_button__btn_flat[color="space-gray"]{
  color: #273238;
  border: 1px solid #273238;
}
.u_ui_button__btn_flat:hover{
  color: white;
}
.u_ui_button__btn_flat[color="orange"]:hover{
  background: #FF5521 !important;
}
.u_ui_button__btn_flat[color="silver"]:hover{
  color: #ECF0F2;
  background: #ECF0F2 !important;
}
.u_ui_button__btn_flat[color="blue-gray"]:hover{
  background: #78909C !important;
}
.u_ui_button__btn_flat[color="dark-blue"]:hover{
  background: #36474F !important;
}
.u_ui_button__btn_flat[color="space-gray"]:hover{
  background: #273238 !important;
}
/* BLOCK STYLE */
.u_ui_button__btn_block{
  display: block;
  margin: 17px 0;
  width: 100%;
}
/* SIZE STYLE */
.u_ui_button__btn[size="sm"]{
  padding: 5px 15px;
}
.u_ui_button__btn[size="md"]{
  padding: 10px 20px;
}
.u_ui_button__btn[size="lg"]{
  padding: 15px 30px;
}
/* COLOR STYLE*/
.u_ui_button__btn[color="orange"]{
  background: #FF5521;
}
.u_ui_button__btn[color="silver"]{
  background: #ECF0F2;
  color: #889CA6;
}
.u_ui_button__btn[color="blue-gray"]{
  background: #78909C;
}
.u_ui_button__btn[color="dark-blue"]{
  background: #36474F;
}
.u_ui_button__btn[color="space-gray"]{
  background: #273238;
}
.u_ui_button__btn[color="orange"]:hover{
  background: #FC683A;
}
.u_ui_button__btn[color="silver"]:hover{
  background: #EDF0F2;
  color: #889CA6;
}
.u_ui_button__btn[color="blue-gray"]:hover{
  background: #869CA7;
}
.u_ui_button__btn[color="dark-blue"]:hover{
  background: #4E5D63;
}
.u_ui_button__btn[color="space-gray"]:hover{
  background: #3E494F;
}
</style>
