import { Person } from './tstest'

declare module './tstest' {
  interface Person {
    greet: () => void
  }
}

Person.prototype.greet = () => {
  console.log(1);
}
