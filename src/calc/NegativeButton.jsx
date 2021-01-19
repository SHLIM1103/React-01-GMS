import React from 'react'
import { NumberContext } from './NumberProvider'

const NegativeButton = () => {
    return (<button type="button" className="white-button" onClick = {
        () => handleNegativeValue()
    }>
        +/-
    </button>)
}

export default NegativeButton