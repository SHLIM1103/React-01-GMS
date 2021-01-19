import React, {useContext} from 'react'
import { NumberContext } from './NumberProvider'

const BackButton = () => {
    const {} = useContext( NumberContext )
    return (
        <button type="button" className="white-button" onClick = {
            () => handleBackButton()
        }>
            &#8592;
        </button>
    )
}

export default BackButton