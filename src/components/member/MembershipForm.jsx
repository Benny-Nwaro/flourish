import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { expressions } from "../../constants/data";
import { TextInput, SelectInput, PhoneInput, ChoiceGroup } from "./fields";

const ageGroups = ["Under 18", "18 - 24", "25 - 34", "35 - 44", "45 and above"];
const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
const employmentStatuses = ["Employed 9-5", "Self-employed", "Student", "Unemployed", "Retired"];
const interestOptions = ["STEM", "Creative", "Professionals", "Business"];

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneCode: "+234",
  phone: "",
  city: "",
  state: "",
  dateOfBirth: "",
  ageGroup: ageGroups[0],
  maritalStatus: maritalStatuses[0],
  employmentStatus: employmentStatuses[0],
  gender: "",
  membershipClass: "",
  profession: "",
  interests: [],
  hobbies: "",
  expression: expressions[0].name,
  emergencyFirstName: "",
  emergencyLastName: "",
  emergencyEmail: "",
  emergencyPhoneCode: "+234",
  emergencyPhone: "",
};

// EmailJS IDs come from .env.local (see README); the form reports clearly when they are missing.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_MEMBERSHIP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function MembershipForm() {
  const [form, setForm] = useState(initialState);
  const [sending, setSending] = useState(false);

  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));
  const bind = (key) => ({ name: key, value: form[key], onChange: (e) => set(key)(e.target.value) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("The membership form isn't connected yet. Please try again later.");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...form,
          phone: `${form.phoneCode} ${form.phone}`,
          emergencyPhone: `${form.emergencyPhoneCode} ${form.emergencyPhone}`,
          interests: form.interests.join(", "),
        },
        PUBLIC_KEY
      );
      toast.success("Thank you! Your membership form has been sent.");
      setForm(initialState);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const row = "flex flex-col md:flex-row gap-[32px] md:gap-[52px]";

  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col gap-[52px] px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-[24px] text-black">
          <span className="bg-brandBlue/10 text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
            Be part of us
          </span>
          <h2 className="text-h3 text-trim">Membership form</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[52px]">
          <div className={row}>
            <TextInput label="First Name" placeholder="Enter first name" required autoComplete="given-name" {...bind("firstName")} />
            <TextInput label="Last Name" placeholder="Enter last name" required autoComplete="family-name" {...bind("lastName")} />
          </div>
          <div className={row}>
            <TextInput label="Email" type="email" placeholder="Enter email address" required autoComplete="email" {...bind("email")} />
            <PhoneInput
              label="Phone number"
              placeholder="567 8900 000"
              required
              autoComplete="tel-national"
              dialCode={form.phoneCode}
              onDialCodeChange={set("phoneCode")}
              {...bind("phone")}
            />
          </div>
          <div className={row}>
            <div className="flex flex-col gap-[12px] flex-1 min-w-0">
              <span className="text-trim font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-black">Location</span>
              <div className="flex gap-[12px]">
                <TextInput label="City" hideLabel placeholder="City" autoComplete="address-level2" {...bind("city")} />
                <TextInput label="State, Region" hideLabel placeholder="State, Region" autoComplete="address-level1" {...bind("state")} />
              </div>
            </div>
            <TextInput label="Date of Birth" type="date" placeholder="DDMMYYYY" {...bind("dateOfBirth")} />
          </div>
          <div className={row}>
            <SelectInput label="Age Demography" options={ageGroups} {...bind("ageGroup")} />
            <SelectInput label="Marital Status" options={maritalStatuses} {...bind("maritalStatus")} />
          </div>
          <div className={row}>
            <SelectInput label="Employment Status" options={employmentStatuses} {...bind("employmentStatus")} />
            <ChoiceGroup label="Gender" name="gender" options={["Male", "Female"]} value={form.gender} onChange={set("gender")} />
          </div>
          <div className={row}>
            <ChoiceGroup
              label="Have You Completed Membership Class?"
              name="membershipClass"
              options={["No", "Yes"]}
              value={form.membershipClass}
              onChange={set("membershipClass")}
            />
            <TextInput label="Profession" placeholder="Enter profession here" {...bind("profession")} />
          </div>
          <div className={row}>
            <ChoiceGroup
              label="Which of these Interests You?"
              name="interests"
              options={interestOptions}
              value={form.interests}
              onChange={set("interests")}
              multiple
              inline
            />
            <TextInput label="What are your interests/hobbies?" placeholder="Enter interests here" {...bind("hobbies")} />
          </div>
          <SelectInput label="Expression Attended" options={expressions.map((x) => x.name)} {...bind("expression")} />

          <h3 className="text-trim font-redhat font-bold text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-black">
            Emergency Contact
          </h3>
          <div className={`${row} -mt-[1px]`}>
            <TextInput label="Emergency Contact First Name" placeholder="Enter first name" {...bind("emergencyFirstName")} />
            <TextInput label="Emergency Contact Last Name" placeholder="Enter last name" {...bind("emergencyLastName")} />
          </div>
          <div className={row}>
            <TextInput label="Emergency Contact Email" type="email" placeholder="Enter email address" {...bind("emergencyEmail")} />
            <PhoneInput
              label="Emergency Contact Phone number"
              placeholder="567 8900 000"
              dialCode={form.emergencyPhoneCode}
              onDialCodeChange={set("emergencyPhoneCode")}
              {...bind("emergencyPhone")}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="self-start rounded-[29.329px] bg-brandBlue px-[36px] py-[21px] font-stemBold text-base leading-[0.93] tracking-[0.01em] text-white hover:bg-lightBlue hover:text-brandBlue disabled:opacity-60 transition-colors duration-200"
          >
            {sending ? "Sending…" : "Submit"}
          </button>
        </form>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
}
