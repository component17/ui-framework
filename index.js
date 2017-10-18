import textField from './src/components/TextField'
import cBtn from './src/components/button'
import progressLoader from './src/components/loaders'

let upoint = {}

upoint.install = function(Vue, options){

  Vue.component('u-input', textField)
  Vue.component('u-btn', cBtn)
  Vue.component('u-loader', progressLoader)
};

export default upoint;
