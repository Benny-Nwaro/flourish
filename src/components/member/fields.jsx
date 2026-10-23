import PropTypes from "prop-types";
import chevronDown from "../../assets/figma/chevron-down.svg";
import radioRing from "../../assets/figma/radio-ring.svg";
import flagNigeria from "../../assets/figma/flag-nigeria.svg";
import flagUk from "../../assets/figma/flag-uk.svg";

const labelClass = "text-trim font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-black";
const boxClass =
  "h-[80px] w-full bg-white font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-black placeholder:text-[#aeaeae] outline-none focus:ring-2 focus:ring-brandBlue";

export function TextInput({ label, hideLabel = false, ...props }) {
  if (hideLabel) {
    return <input {...props} aria-label={label} className={`${boxClass} flex-1 min-w-0 pl-[30px] pr-[24px]`} />;
  }
  return (
    <label className="flex flex-col gap-[12px] flex-1 min-w-0">
      <span className={labelClass}>{label}</span>
      <input {...props} className={`${boxClass} pl-[30px] pr-[24px]`} />
    </label>
  );
}

TextInput.propTypes = { label: PropTypes.node.isRequired, hideLabel: PropTypes.bool };

export function SelectInput({ label, options, ...props }) {
  return (
    <label className="flex flex-col gap-[12px] flex-1 min-w-0">
      <span className={labelClass}>{label}</span>
      <span className="relative block">
        <select {...props} className={`${boxClass} appearance-none pl-[30px] pr-[60px] cursor-pointer`}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <Chevron className="pointer-events-none absolute right-[24px] top-1/2 -translate-y-1/2" />
      </span>
    </label>
  );
}

SelectInput.propTypes = { label: PropTypes.node.isRequired, options: PropTypes.arrayOf(PropTypes.string).isRequired };

function Chevron({ className = "relative" }) {
  return (
    <span className={`block w-[19.539px] h-[18px] ${className}`}>
      <img src={chevronDown} alt="" width={15.433} height={7.671} className="absolute left-[10.51%] top-[28.63%] w-[15.433px] h-[7.671px]" />
    </span>
  );
}

Chevron.propTypes = { className: PropTypes.string };

const dialCodes = [
  { code: "+234", flag: flagNigeria, w: 23.924, h: 23.924 },
  { code: "+44", flag: flagUk, w: 31.057, h: 15.528 },
];

export function PhoneInput({ label, dialCode, onDialCodeChange, ...props }) {
  const current = dialCodes.find((d) => d.code === dialCode) ?? dialCodes[0];
  return (
    <div className="flex flex-col gap-[12px] flex-1 min-w-0">
      <span className={labelClass}>{label}</span>
      <div className="flex items-center gap-[20px] md:gap-[32px] h-[80px] bg-white pr-[24px] focus-within:ring-2 focus-within:ring-brandBlue">
        <label className="relative flex items-center gap-[10px] h-full px-[20px] md:px-[31px] border-r border-[#bfbfbf] shrink-0 cursor-pointer">
          <span className="text-trim font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-[#aeaeae]">{current.code}</span>
          <img src={current.flag} alt="" width={current.w} height={current.h} style={{ width: current.w, height: current.h }} />
          <Chevron />
          <select
            aria-label={`${label} country code`}
            value={current.code}
            onChange={(e) => onDialCodeChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            {dialCodes.map((d) => (
              <option key={d.code} value={d.code}>
                {d.code}
              </option>
            ))}
          </select>
        </label>
        <input
          type="tel"
          {...props}
          aria-label={label}
          className="flex-1 min-w-0 bg-transparent outline-none font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-black placeholder:text-[#aeaeae]"
        />
      </div>
    </div>
  );
}

PhoneInput.propTypes = {
  label: PropTypes.string.isRequired,
  dialCode: PropTypes.string.isRequired,
  onDialCodeChange: PropTypes.func.isRequired,
};

export function ChoiceGroup({ label, name, options, value, onChange, multiple = false, inline = false }) {
  const isChecked = (o) => (multiple ? value.includes(o) : value === o);
  const toggle = (o) => {
    if (!multiple) return onChange(o);
    onChange(value.includes(o) ? value.filter((v) => v !== o) : [...value, o]);
  };
  const labelId = `${name}-label`;
  return (
    <div role="group" aria-labelledby={labelId} className="flex flex-col gap-[29px] flex-1 min-w-0">
      <span id={labelId} className={labelClass}>
        {label}
      </span>
      <div className={inline ? "flex flex-wrap gap-x-[48px] gap-y-[18px]" : "flex flex-col gap-[12px]"}>
        {options.map((o) => (
          <label key={o} className="flex items-center gap-[30px] cursor-pointer">
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={o}
              checked={isChecked(o)}
              onChange={() => toggle(o)}
              className="peer sr-only"
            />
            <span className="relative w-[22px] h-[22px] shrink-0 rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-brandBlue">
              <img src={radioRing} alt="" width={22} height={22} className="absolute inset-0 w-[22px] h-[22px]" />
              {isChecked(o) && <span className="absolute inset-[5px] rounded-full bg-brandBlue" />}
            </span>
            <span className="text-trim font-redhat text-[18px] md:text-[20px] leading-[1.51] tracking-[-0.01em] text-black whitespace-nowrap">{o}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

ChoiceGroup.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  inline: PropTypes.bool,
};
