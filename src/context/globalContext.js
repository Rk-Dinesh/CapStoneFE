import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "https://capstonebe-zz5v.onrender.com";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

const [incomes,setIncomes] = useState([])
const [expenses, setExpenses] = useState([])
const [error,setError] = useState(null)

const addIncome = async(income) => {
    const response = await axios.post(`${BASE_URL}/api/v1/add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncomes()
}

const getIncomes = async () =>{
    const response = await axios.get(`${BASE_URL}/api/v1/get-incomes`)
    setIncomes(response.data)
    console.log(response.data)
}

const deleteIncome =async(id) => {
    const res = await axios.delete(`${BASE_URL}/api/v1/delete-income/${id}`)
    getIncomes()
}

const totalIncome =() => {
    let totalIncome = 0;
    incomes.forEach((income) =>{
        totalIncome = totalIncome + income.amount
    })
    return totalIncome;
}

const addExpenses = async(expense) => {
    const response = await axios.post(`${BASE_URL}/api/v1/add-expense`, expense)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getExpenses()
}

const getExpenses = async () =>{
    const response = await axios.get(`${BASE_URL}/api/v1/get-expenses`)
    setExpenses(response.data)
    console.log(response.data)
}

const deleteExpenses =async(id) => {
    const res = await axios.delete(`${BASE_URL}/api/v1/delete-expense/${id}`)
    getExpenses()
}

const totalExpenses =() => {
    let totalExpenses = 0;
    expenses.forEach((expense) =>{
        totalExpenses = totalExpenses + expense.amount
    })
    return totalExpenses;

}

const totalBalance =() => {
    return totalIncome()- totalExpenses()
}

const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a,b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    return history.slice(0,4)
}

    return(
        <GlobalContext.Provider value = {{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpenses,
            getExpenses,
            expenses,
            deleteExpenses,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}