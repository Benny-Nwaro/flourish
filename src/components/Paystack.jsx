import { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function Paystack() {
  const publicKey = "pk_test_385cf61e72cf12a464e715aa4c6058105adcff51";
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("God bless you for your kind support"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <section className="flex justify-center items-center px-32 pb-10 max-md:px-5 bg-slate-200">
      <div className="flex justify-center flex-col items-center w-full self-center pt-10 pb-20 mt-16  bg-blue-600 rounded-3xl border-4 border-white border-solid max-w-[1148px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <form className="max-md:w-full max-md:px-16 max-sm:px-16">
          <p className="flex justify-center pb-20 font-bold font-kuano mx-20 text-7xl text-white  max-sm:mt-5 max-md:mt-5">
            Invest
          </p>

          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mb-5 dark:w-64 dark:mx-40 dark:mr-40  dark:text-white dark:focus:ring-blue-500 max-sm:w-full  dark:focus:border-blue-500 "
            placeholder="Enter your name"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 mb-5 focus:border-blue-500 block w-full p-2.5 ml-50 dark:w-64 dark:mx-40 dark:mr-40 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="you.you@mail.com"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 mb-5 focus:border-blue-500 block w-full p-2.5 ml-50 dark:w-64 dark:mx-40 dark:mr-40 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="phone number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="curr"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 mb-5 focus:border-blue-500 block w-full p-2.5 ml-50 dark:w-64 dark:mx-40 dark:mr-40 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-md:w-full"
            placeholder="Amount in numbers"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </form>
        <PaystackButton
          {...componentProps}
          className="bg-white hover:opacity-50 text-blue-700 font-bold pb-3 pt-3 px-5 mx-48 rounded-2xl max-md:w-2/5  "
        />
      </div>
    </section>
  );
}
