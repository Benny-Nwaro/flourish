import PropTypes from "prop-types";

function SocialCard({ title, description, ctaText, image, imageAlt }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start pt-14 pl-14 mx-auto w-full text-base tracking-normal text-black bg-white rounded-2xl max-md:mt-8">
        <h2 className="text-3xl tracking-tight leading-7">{title}</h2>
        <p className="mt-6 leading-6">{description}</p>
        <div className="flex gap-4 pr-10 mt-6 text-blue-600 leading-[143%] max-md:pr-5">
          <div className="my-auto">{ctaText}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96bd85029765cd888c05633dd5526ac7e09887b38d22ea62d41cba9fb2dc6d37?apiKey=873e47fe7796454e93671642132d9742&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </div>
        <img
          src={image}
          alt={imageAlt}
          className="self-end mt-5 max-w-full aspect-[0.73] w-[223px]"
        />
      </div>
    </div>
  );
}

SocialCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default function Stream() {
  const socialData = [
    {
      title: "Join us on Youtube",
      description: "Who we are Who we areWho we areWho we areWho we are",
      ctaText: "Watch now",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/423b62941b7e49c6b3dabc897366c95339d4b6aec77b40a291538411c2cf7e56?apiKey=873e47fe7796454e93671642132d9742&",
      imageAlt: "Youtube social card image",
      url: "https://www.youtube.com/channel/UCoIDa4wRZLEHZhCk0t8iv5Q",
    },
    {
      title: "Join us on Mixlr",
      description: "Who we are Who we areWho we areWho we areWho we are",
      ctaText: "Join us now",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/227424a92863363e9df6b903893496e228a7aab26f9f60eee76656220b93556a?apiKey=873e47fe7796454e93671642132d9742&",
      imageAlt: "Mixlr social card image",
    },
    {
      title: "Join us on Facebook",
      description: "Who we are Who we areWho we areWho we areWho we are",
      ctaText: "Join us now",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1c0d4cbada0dc78c2add89bb4f0e25c71a3d4cefee753159232a76d3d228efe?apiKey=873e47fe7796454e93671642132d9742&",
      imageAlt: "Facebook social card image",
      url: "https://web.facebook.com/flourishnationglobal",
    },
  ];

  return (
    <section className="flex justify-center items-center mb-5 pb-10 px-32 max-md:px-5 bg-slate-200">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {socialData.map((card, index) => (
          <SocialCard
            key={index}
            title={card.title}
            description={card.description}
            ctaText={card.ctaText}
            image={card.image}
            imageAlt={card.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
