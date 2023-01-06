import axios from "axios"
import { useState } from "react"
const getresult=(num1,num2,operator)=>{
    num1=Number(num1)
    num2=Number(num2)

    switch(operator){
        case "+": return (axios.post("http://localhost:3030/add",{
            num1,num2,operator
        }))
        
        case "-": return (axios.post("http://localhost:3030/subtract",{
            num1,num2,operator
        }))
        case "/": return (axios.post("http://localhost:3030/multiply",{
            num1,num2,operator
        }))
        case "*": return (axios.post("http://localhost:3030/divide",{
            num1,num2,operator
        }))
       
        default:return ("error")
    }

}

export default getresult;