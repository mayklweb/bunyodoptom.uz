import React from 'react'
import { PlusIcon, MinusIcon } from '../assets/icons'

function Counter({ count, onIncrement, onDecrement }) {
    return (
        <div className='counter'>
            <button className="counter-button" onClick={onDecrement}>
                <MinusIcon />
            </button>
            <span className="counter-text">{count}</span>
            <button className="counter-button" onClick={onIncrement}>
                <PlusIcon />
            </button>
        </div>
    )
}

export default Counter