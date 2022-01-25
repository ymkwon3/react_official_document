function ListItem(props) {
    const value = props.value;
    return (
        // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
        <li key={value.toString()}>
            {value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 틀렸습니다! 여기에 key를 지정해야 합니다.
        <ListItem value={number} key={number.toString()} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList;