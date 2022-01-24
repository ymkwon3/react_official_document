import Toggle from "./study/Toggle"

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
