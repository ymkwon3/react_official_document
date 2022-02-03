import Toggle from "./study/Toggle"
import List from "./study/List"
import Key from "./study/Key"
import Form from "./study/Form"
import Calculator from "./study/Calculator"
import FancyBorder from "./study/FancyBorder"
import RefTest from "./study/RefTest"

import {useSelector, useDispatch} from 'react-redux'


function App() {
  const 꺼내온거 = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>나는야 {꺼내온거}</h1>
      <button onClick={()=>{dispatch({type: '증가'})}}>더하기</button>
      <button onClick={()=>{dispatch({type: '감소'})}}>빼기</button>
    </div>
  );
}

export default App;
