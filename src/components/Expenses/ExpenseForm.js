import React, { useState } from "react";
import { styled } from "styled-components";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/button";
import { plus } from "../../utils/icon";
 
function ExpenseForm() {
    const {addExpenses, getExpenses,error,setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',
    })

    const {title, amount, date, category, description } = inputState;

    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpenses(inputState)
        getExpenses()
        setInputState({
            title:'',
            amount:'',
            date:'',
            category:'',
            description:'',
        })
        
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className="error">{error} </p>}
            <div className="input-control">
                <input 
                type="text"
                value ={title}
                name={'title'}
                placeholder="Amount Paid To"
                onChange={handleInput('title')}
                 />
            </div>
            <div className="input-control">
                <input 
                type="text"
                value ={amount}
                name={'amount'}
                id ={'amount'}
                placeholder="Paid Amount"
                onChange={handleInput('amount')}
                 />
            </div>
            <div className="input-control">
                <DatePicker 
                id='date'
                placeholderText="Enter A Date"
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                    setInputState({...inputState, date: date})
                }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Mode of Payment</option>
                    <option value='cash'>CASH</option>
                    <option value='debit card'>DEBIT CARD</option>
                    <option value='credit card'>CREDIT CARD</option>
                    <option value='bank'>BANK TRANSFER</option>
                    <option value='upi'>UPI PAYMENTS</option>   
                </select>
            </div>
            <div className="input-control">
                <textarea name='description' value={description} placeholder="Approved By & Referance" cols='30' rows='4' onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button
                    name={'Add Expenses'}
                    icon={plus}
                    bPad={".8rem 1.6rem"}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}

export default ExpenseForm

const FormStyled = styled.form`
display: flex;
flex-direction:column;
gap: 2rem;
input,textarea,select{
    font-family: inherit;
    font-size:inherit;
    outline: none;
    border:none;
    padding: .5rem 1rem;
    border-radius: 5px
    border: 2px solid black;
    background:transparent;
    resize:none;
    box-shadow:0px 1px 15px rgba(0, 0, 0, 0.06);
    color:rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width:100%
    }
}
.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color: rgba(34, 34, 96, 0.4);
        &:focus, &;active{
            color: rgba(34, 34, 96, 1);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 15px color: rgba(0, 0, 0, 0.06);
        &:hover {
            background:var(--color-green) !important;
        }
    }
}
`;