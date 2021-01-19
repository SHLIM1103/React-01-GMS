import React, { useState } from 'react'

export const NumberContext = React.createContext()

const NumberProvider = props => {
    const [ number, setNumber ] = useState('')
    const [ storeNumber, setStoreNumber ] = useState('')
    const [ functionType, setFunctionType ] = useState('')
    
    const handleSetDisplayValue = num => {
        if((!number.includes('.') || num !== '.') && number.length < 8) {
            setNumber(`${(number + num).replace(/^0+/, '')}`)
        }
    }
    
    const handleBackButton = () => {
        if(number !== '') {
            const deleteNumber = number.slice(0, number.length - 1)
            setNumber(deleteNumber) 
        }
    }
    
    const handleClearValue = () => {
        setNumber('')
        setStoreNumber('')
        setFunctionType('')
    }

    const handleEqualValue = () => {

    }

    const handleNegativeValue = () => {
        const negativeNumber = number * -1
        setNumber(negativeNumber)
    }

    return (<NumberContext.Provider>
        value = {{ handleSetDisplayValue, handleBackButton, handleClearValue, 
                   handleEqualValue, handleNegativeValue }}
    </NumberContext.Provider>)
}

export default NumberProvider