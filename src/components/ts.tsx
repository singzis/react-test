
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

const getName = <T extends Dog | Cat>(animal: T) => {
  if ('wang' in animal) {
    return animal.wang; // ts(2339)
  }
  return animal.miao; // ts(2339)
};


const Ts = () => {
  return (<div>1</div>)
}

export default Ts