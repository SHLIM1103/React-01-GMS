import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'

const EqualButton = () => {
    const { handleEqualValue } = useContext( NumberContext )
    return (<button type="button" className="white-button" onClick = {
        () => handleEqualValue()
    }>
        =
    </button>)
}

export default EqualButton