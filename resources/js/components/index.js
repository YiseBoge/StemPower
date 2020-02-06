import Vue from 'vue'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import { AlertError, AlertSuccess, HasError } from 'vform'

// Components that are registered globaly.
[
  Child,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
