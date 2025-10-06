import PropTypes from "prop-types";

const countries = [
  { name: "All" },
  {
    name: "Nigeria",
    flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e7bab948f99caa217454b8e9171b462b255e443d3481bf3aa8585c7c15437d1?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "UK",
    flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/318ae4d41824b7df13314f90b86d2568aa2bfbe5892b199ae7216f643a9beaa3?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Russia",
    flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b780cca1d139a6c78425a2dcebf427537af4f76592f87aac24f5f6414c81b13?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Kenya",
    flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/e57e5416be995bc9709b2bbc435d77278157f03c8f00317ef40ef28730f2ce11?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "USA",
    flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/1446367e07ff775a98456a8e436afb12085a9891e2c2196be04f63fa26f10578?apiKey=873e47fe7796454e93671642132d9742&",
  },
];
const churches = [
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1bd85b5066a46c020786ecbc67286539f9ba08ccfb8b31a79fc9fd8af64ac44?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1bd85b5066a46c020786ecbc67286539f9ba08ccfb8b31a79fc9fd8af64ac44?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  },
  {
    name: "Flourish Church Enugu",
    address:
      "Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market Days Supermarket, China Town, Enugu, Enugu State",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c791e4d672544ceb89ef236b706c1a12489093b4a7ed9875923a31d7084cb4f?apiKey=873e47fe7796454e93671642132d9742&",
  },
];
const CountryButton = ({ name, flag, isActive }) => (
  <div
    className={`flex gap-2.5 justify-between px-7 py-4 ${
      isActive ? "text-blue-600 bg-white" : "border-2 border-white border-solid"
    } rounded-[58.101px] max-md:px-5`}
  >
    {" "}
    <div className="my-auto">{name}</div>{" "}
    {flag && (
      <img
        loading="lazy"
        src={flag}
        alt={`${name} flag`}
        className="shrink-0 w-6 aspect-square"
      />
    )}{" "}
  </div>
);

CountryButton.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

const ChurchCard = ({ name, address, icon }) => (
  <div className="flex flex-col grow px-12 py-10 w-full text-white bg-blue-700 rounded-2xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
    {" "}
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="w-8 aspect-square fill-blue-600"
    />{" "}
    <h3 className="mt-5 text-2xl tracking-tight leading-6">{name}</h3>{" "}
    <p className="mt-5 text-base tracking-normal leading-6">{address}</p>{" "}
  </div>
);

ChurchCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default function Countries() {
  return (
    <section className="flex justify-center items-center  px-32 mb-10   bg-slate-200 max-md:px-5 ">
      <div className="flex flex-col items-center w-full  p-10 mt-20 bg-blue-600 rounded-3xl max-md:px-5 ">
        <div className="flex flex-wrap gap-2 gap-y-5 justify-between content-start mt-5 text-lg tracking-tight leading-4 text-white whitespace-nowrap">
          {countries.map((country, index) => (
            <CountryButton
              key={index}
              name={country.name}
              flag={country.flag}
              isActive={country.name === "Nigeria"}
            />
          ))}
        </div>
        <div className="mt-12 w-full max-w-[937px] max-md:mt-10 max-md:max-w-full ">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="mt-5 w-full max-w-[937px] max-md:max-w-full"
            >
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {churches.slice(index * 2, index * 2 + 2).map((church, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      i === 0 ? "w-6/12 max-md:ml-0" : "ml-5 w-6/12 max-md:ml-0"
                    } max-md:w-full`}
                  >
                    <ChurchCard
                      name={church.name}
                      address={church.address}
                      icon={church.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
