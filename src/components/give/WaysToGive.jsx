import PropTypes from "prop-types";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { nairaBankAccounts, domBankAccounts } from "../../constants/data";
import fidelityLogo from "../../assets/figma/bank-fidelity.png";
import copyIcon from "../../assets/figma/icon-copy.svg";

function BankCard({ name, accountNumber, bank, bankAlt, bankName, accountName }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      toast.success("Copied");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="flex flex-col justify-between gap-[40px] bg-white rounded-[15px] px-[30px] md:px-[53px] py-[40px] min-h-[350px] overflow-hidden">
      <img src={bank} alt={bankAlt} width={75} height={75} className="w-[75px] h-[75px] object-contain" />
      <div className="flex flex-col items-start gap-[13px] text-black">
        <p className="text-trim font-redhat text-[20px] leading-[1.51] tracking-[-0.01em] uppercase">{name}</p>
        <div className="flex flex-wrap items-center gap-[22px]">
          <p className="text-trim font-redhat font-black text-[26px] md:text-[30px] leading-[1.12] tracking-[-0.04em]">{accountNumber}</p>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${name} account number`}
            className="flex items-center gap-[7.171px] bg-[#ededed] hover:bg-lightBlue rounded-[7px] px-[15px] py-[7px] transition-colors duration-200"
          >
            <span className="text-trim font-jakarta font-extrabold text-[8.61px] leading-[1.08] tracking-[-0.035em]">
              {copied ? "Copied" : "Copy"}
            </span>
            <img src={copyIcon} alt="" width={17.21} height={17.21} className="w-[17.21px] h-[17.21px]" />
          </button>
        </div>
        <div className="flex flex-col gap-[16px] font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em]">
          {bankName && <p className="text-trim">Bank Name: {bankName}</p>}
          {accountName && <p className="text-trim">Account Name: {accountName}</p>}
        </div>
      </div>
    </div>
  );
}

BankCard.propTypes = {
  name: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  bank: PropTypes.string.isRequired,
  bankAlt: PropTypes.string.isRequired,
  bankName: PropTypes.string,
  accountName: PropTypes.string,
};

const tabs = [
  { id: "naira", label: "Naira Account" },
  { id: "dom", label: "Domiciliary Account" },
];

export default function WaysToGive() {
  const [tab, setTab] = useState("naira");
  const accounts =
    tab === "naira"
      ? nairaBankAccounts
      : domBankAccounts.map((a) => ({ ...a, bank: fidelityLogo, bankAlt: "Fidelity", bankName: "Fidelity Bank" }));

  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col gap-[40px] md:gap-[52px] px-[20px] lg:px-[40px] xl:px-[150px] py-[64px] md:py-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-[7px] text-black">
          <span className="bg-brandBlue/10 text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
            Give to the Flourish Generation Church
          </span>
          <h2 className="text-h2">Ways to give</h2>
        </div>

        <div className="flex flex-col items-center gap-[14px]">
          <div role="tablist" className="flex items-center gap-[10px] bg-white rounded-[63px] p-[10px] max-w-full overflow-x-auto">
            {tabs.map(({ id, label }) => {
              const active = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(id)}
                  className={`flex items-center justify-center px-[20px] md:px-[28.196px] rounded-[58.101px] transition-colors duration-200 ${
                    active ? "bg-brandBlue text-white border-[1.709px] border-white h-[63px]" : "text-black h-[54.684px] hover:text-brandBlue"
                  }`}
                >
                  <span className="text-trim font-redhat font-extrabold text-[16px] md:text-[20px] leading-[1.51] tracking-[-0.02em] whitespace-nowrap">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[13px] w-full">
            {accounts.map((account) => (
              <BankCard key={`${tab}-${account.accountNumber}`} {...account} />
            ))}
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
}
