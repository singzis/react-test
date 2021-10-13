
const convertToUpperCase = (strOrArray: string | string[]) => {
  if (typeof strOrArray === 'string') {
    return strOrArray.toUpperCase()
  } else if (Array.isArray(strOrArray)) {
    return strOrArray.map(s => s.toUpperCase())
  }
}

interface Dog {
  wang: string;
}
interface Cat {
  miao: string;
}

const isDog = function (animal: Dog | Cat): animal is Dog {
  return 'wang' in animal;
}

function isCat(animal: Dog | Cat): animal is Cat{
  return 'miao' in animal
}



interface Option<O = unknown> {
  name: O
}

interface Props<T> {
  list: T[]
}

const getName = <T extends Option>(p: Props<T>) => {
  return p.list
};

const Ts = () => {
  return (<div>1</div>)
}

export default Ts