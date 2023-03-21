import { useRef } from 'react'

const UseRefTest = () => {

    const inputRef = useRef(null);

    const handleButtonOnClick = () => {
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleButtonOnClick}>Get Value</button>
        </div>
    )
}

export default UseRefTest;