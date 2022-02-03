import {useRef} from 'react'

function RefTest() {
    const refOne = useRef();
    const refTwo = useRef();
    const refThree = useRef();
    
    function clickHandler(e){
        console.log(e.target.ref);
    }

    return (
        <div>
            <input ref={refOne} onFocus={clickHandler} autoFocus/>
            <input ref={refTwo} onFocus={clickHandler}/>
            <input ref={refThree} onFocus={clickHandler}/>
        </div>
    );
}

export default RefTest;