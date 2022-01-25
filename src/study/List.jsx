import { render } from "@testing-library/react";

function App() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);
    return (
        <ul>{listItems}</ul>
    );
}

export default App;