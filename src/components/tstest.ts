class C1 {
  name = '1'
  private id = '1'
  protected age = 30
}
class C2 {
  name = '2'
  private id = '1'
  protected age = 30
}
let c1: C1
let c2: C2
c1 = c2 // ts(2322)
c2 = c1 // ts(2322)

class D {
  private id = '1'
  protected age = 30
}

class D1 extends D {
  name = '1'
  static gender = 'd1'
}
class D2 extends D {
  name = '2'
  static gender = 'd2'
}

let d1: D1
let d2: D2

d1 = d2
d2 = d1


interface I1<T> {
  id: number
}

let ii1: I1<string>
let ii2: I1<number>

ii1 = ii2

type isChild<Child, Par> = Child extends Par ? true : false

interface Animal {
  name: string
}
interface Dog extends Animal {
  woof: () => void
}

type Covariance<T> = T
type isCovariant = isChild<Covariance<Dog>, Covariance<Animal>>

type isPropAssignmentCovariant = isChild<{ type: Dog }, { type: Animal }>; // true

type isArrayElementCovariant = isChild<Dog[], Animal[]>; // true

type isReturnTypeCovariant = isChild<() => Dog, () => Animal>; // true

type Contravariance<T> = (param: T) => void;

type isNotContravariance = isChild<Contravariance<Dog>, Contravariance<Animal>>; // false;

type isContravariance = isChild<Contravariance<Animal>, Contravariance<Dog>>; // true;

// interface Obj {
//   identity(val: any): any;
// }

// interface Obj {
//   identity(val: number): number;
// }

// interface Obj {
//   identity(val: boolean): boolean;
// }

// 相当于

interface Obj {
  identity(val: boolean): boolean;
  identity(val: number): number;
  identity(val: any): any;
}

const obj: Obj = {
  identity(val) {
    return val;
  }
};

const t1 = obj.identity(1); // => number

const t2 = obj.identity(true); // => boolean

const t3 = obj.identity("t3"); // => any

class Person { }

type T = Exclude<'a' | 'b' | 'c', 'a'>


type User = {
  name: string
  age: number
  sexy: string
  address: string
}

type newUser = Omit<User, 'sexy' | 'address'>
// type ExcludeKeys = Exclude<keyof User, 'sexy' | 'address'>


type T2 = Extract<'a' | 'b' | 'c', 'a' | 'd'>

type Intersect<T, U> = {
  [K in Extract<keyof T, keyof U>]: T[K]
}

interface Person1 {
  name: string
  age: string
  weight: string
}
interface Person2 {
  name: string
  age: string
  sexy: string
}
type T3 = Intersect<Person1, Person2>
type T4 = NonNullable<string | number | null | undefined>

type MenuKey = 'a' | 'b' | 'c'
interface Menu {
  name: string
  label?: string
}
const menus: Record<MenuKey, Menu> = {
  a: { name: 'a' },
  b: { name: 'b', label: 'b' },
  c: { name: 'c' }
}

type T5 = keyof any

type isXX = 1 extends number ? true : false
type isYY = 'string' extends string ? true : false

type ElementTypeOfArray<T> = T extends (infer E)[] ? E : never
type isNumber = ElementTypeOfArray<number[]> // number

type ElementTypeOfObject<T> = T extends { name: infer E, id: infer I } ? [E, I] : never
type isArray = ElementTypeOfObject<{ name: 'name', id: string, age: string }>


interface MixedObject {
  animal: {
    type: 'animal' | 'dog' | 'cat'
    age: number
  }
  [name: number]: {
    type: string
    age: number
    nickname: string
  }
  [name: string]: {
    type: string
    age: number
  }
}

type animal = MixedObject['animal']
type animalType = MixedObject['animal']['type']
type numberIndex = MixedObject[number]
type numberIndex0 = MixedObject[0]
type stringIndex = MixedObject[string]
type stringIndex0 = MixedObject['string']

export { Person }