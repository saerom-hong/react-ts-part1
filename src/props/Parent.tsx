import { Child } from "./Child";


const Parent = () => {
  return <Child color='black' onClick={() => console.log('hey')} />;
}

export default Parent;