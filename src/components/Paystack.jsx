import React, { useEffect, useState } from 'react'
import { PaystackButton } from "react-paystack"


export default function Paystack() {
    const publicKey = "pk_test_385cf61e72cf12a464e715aa4c6058105adcff51"
  const [amount, setAmount] = useState(0)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("God bless you for your kind support"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <>
    
    
    

      <form className='pt-20 bg-slate-200 border-4'>
        <p className='flex justify-center pb-20 font-extrabold font-serif text-4xl text-blue-700'>
          Pay
        </p>
    <div className="grid gap-6 mb-6 px-64 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-serif font-bold text-gray-900  dark:text-white">Name</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required
              id="name"
              onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-bold font-serif text-gray-900 dark:text-white">Email address</label>
        <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="you.you@mail.com" required  
              id="email"
              onChange={(e) => setEmail(e.target.value)} />
    </div> 

        <div>
            <label for="phone" className="block mb-2 text-sm font-bold font-serif text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required  
              id="phone"
              onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div>
            <label for="amount" className="block mb-2 text-sm font-bold font-serif text-gray-900 dark:text-white">Amount</label>
            <input type="curr"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000,000,000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required  
              id="amount"
              onChange={(e) => setAmount(e.target.value)*100}/>
        </div>
 
    </div>


<div className='px-64 pb-20'>
<PaystackButton {...componentProps} className="bg-blue-500 hover:bg-blue-700 text-white font-bold pb-3 pt-3 px-4 rounded" />
</div>


   
    </form>


   
      
    </>
    
   
  )
}
