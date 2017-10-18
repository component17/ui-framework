<template lang="html">
  <div class="u_ui_spinner">
    <div class="u_ui_bounce1"></div>
    <div class="u_ui_bounce2"></div>
    <div class="u_ui_bounce3"></div>
    <div class="u_ui_bounce4"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.u_ui_spinner {
  margin: 0 auto;
  padding-top: 1px;
  height: auto;
  text-align: center;
}
.u_ui_spinner > div {
  width: 10px;
  height: 10px;
  background-color: #FF5521;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.u_ui_spinner .u_ui_bounce1 {
  -webkit-animation-delay: -0.48s;
  animation-delay: -0.48s;
}

.u_ui_spinner .u_ui_bounce2 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.u_ui_spinner .u_ui_bounce3 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
