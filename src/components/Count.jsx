import React, { useState, useRef, useEffect } from 'react'

export default function Count() {
    const [stateCount, setStateCount] = useState(0)
    const count = useRef(0)

    const renderCount = useRef(0)

    console.log(count)

    const incCount = () => {
        count.current += 1
        console.log(count)
    }
    const decCount = () => {
        setStateCount(prevCount => prevCount - 1)
        count.current -= 1
        console.log(count)
    }

    useEffect(() => {
        renderCount.current += 1
    })

    return (
        <>
            <button onClick={incCount}>+</button>{count.current}<button onClick={decCount}>-</button>
            <h1>This page re-rendered {renderCount.current} times</h1>
        </>
    )
}
