import Toggle from "./study/Toggle"
import List from "./study/List"
import Key from "./study/Key"
import Form from "./study/Form"

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
