import React, {useState, useRef} from 'react'
import classes from './QtyForm.module.css'
import Input from '../UI/Input'

const QtyForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountRef = useRef()
   
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = amountRef.current.value
        const enteredAmountNum = +enteredAmount

        if (enteredAmount.trim().length === 0 || 
        enteredAmountNum < 1 || 
        enteredAmountNum > 5) {
            setAmountIsValid(false) 
        return
    }
    props.onAddToCart(enteredAmountNum)}
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountRef}
        label="Amount" 
        input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1'
        }}/>
        <button className={classes.button}> + ADD </button>
        {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  )
}

export default QtyForm