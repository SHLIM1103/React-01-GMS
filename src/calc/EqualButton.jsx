import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'

export default function EqualButton() {
    const { doMatch } = useContext( NumberContext )
    return (<button type="button" className="white-button" onClick = {
        () => doMatch()
    }>
        =
    </button>)
}