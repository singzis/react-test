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

let ii1: I1<string>5
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

type isReturnTypeCovariant  = isChild<() => Dog, () => Animal>; // true

type Contravariance<T> = (param: T) => void;

type isNotContravariance = isChild<Contravariance<Dog>, Contravariance<Animal>>; // false;

type isContravariance = isChild<Contravariance<Animal>, Contravariance<Dog>>; // true;



export { }