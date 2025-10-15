import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PaystackButton } from "react-paystack";

export default function Paystack() {
  const publicKey = import.meta.env.VITE_API_KEY;
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("₦");

  const componentProps = {
    amount: amount * 100,
    metadata: {},
    publicKey,
    text: "Proceed",
    onSuccess: () => toast.success("God bless you for your kind support"),
    onClose: () => toast("Wait! Don't leave :("),
  };

  return (
    <>
      <section className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px] py-[60px]">
        <div className="flex justify-center flex-col gap-[140px] items-center w-full py-[50px] md:py-[80px] px-[20px] md:px-[50px] bg-white rounded-[25px] z-[100]">
          <form className="w-[70%] flex flex-col justify-center items-center gap-[40px] pt-[30px] pb-[37.9px] px-[30px] bg-[#F8FAFF] rounded-[20px]">
            <p className="flex justify-center items-center py-[19px] px-[20px] text-center md:px-[37px] text-[20px] leading-[143%] tracking-[-1%] rounded-[11px] font-stemRegular text-brandBlue bg-[#E2ECFF]">
              How much would you like to give
            </p>

            <div className="flex items-center justify-center gap-2 py-4 md:w-[551px]">
              {/* Currency Dropdown */}
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-white px-4 rounded-[20px] text-5xl md:text-[78.95px] leading-[89%] -tracking-[2.5%] font-stemBold outline-none"
              >
                <option value="₦">₦</option>
                {/* <option value="$">$</option>
              <option value="£">£</option>
              <option value="€">€</option> */}
              </select>

              {/* Amount Input */}
              <input
                type="number"
                step="100"
                className="bg-transparent text-5xl md:text-[78.95px] leading-[89%] -tracking-[2.5%] w-full font-stemBold placeholder:text-black text-center outline-none"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton
            {...componentProps}
            className="bg-brandBlue hover:bg-lightBlue text-white flex justify-center items-center hover:text-brandBlue font-bold px-[42px] py-[16px] rounded-[58.97px] max-md:w-2/5  "
          />
        </div>
      </section>
      <Toaster />
    </>
  );
}
