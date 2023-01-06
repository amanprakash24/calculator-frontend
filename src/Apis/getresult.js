import axios from "axios"
import { useState } from "react"
const getresult=(num1,num2,operator)=>{
    num1=Number(num1)
    num2=Number(num2)

    switch(operator){
        case "+": return (axios.post("https://calculatorapi.onrender.com/add",{
            num1,num2,operator
        }))
        
        case "-": return (axios.post("https://calculatorapi.onrender.com/subtract",{
            num1,num2,operator
        }))
        case "/": return (axios.post("https://calculatorapi.onrender.com/multiply",{
            num1,num2,operator
        }))
        case "*": return (axios.post("https://calculatorapi.onrender.com/divide",{
            num1,num2,operator
        }))
       
        default:return ("error")
    }

}

export default getresult;