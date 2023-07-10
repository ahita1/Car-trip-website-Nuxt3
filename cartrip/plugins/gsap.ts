// plugins/gsap.ts
import { gsap } from 'gsap'

export default ({ app }, inject) => {
  inject('gsap', gsap)
}