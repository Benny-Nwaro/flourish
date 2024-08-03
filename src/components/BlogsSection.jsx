import React from 'react'

const ChurchCard = ({ imageSrc, title, socialLinks }) => (
  
    <div className="flex flex-col grow px-3 pt-3 pb-12 w-full bg-white rounded-3xl leading-[93%] max-md:mt-10">
      <img src={imageSrc} alt={title} className="w-full aspect-[0.83]" />
      <div className="flex flex-col px-5 mt-7">
        <h2 className="text-2xl tracking-wide text-black">{title}</h2>
        <div className="flex gap-1.5 justify-between pr-8 mt-5 text-sm tracking-normal whitespace-nowrap text-zinc-400 max-md:pr-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="justify-center p-3 rounded-3xl border border-solid border-zinc-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
  
  const ChurchCardRow = ({ churches }) => (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      {churches.map((church, index) => (
        <div
          key={index}
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <ChurchCard
            imageSrc={church.imageSrc}
            title={church.title}
            socialLinks={church.socialLinks}
          />
        </div>
      ))}
    </div>
  );

export default function BlogsSection() {
 const churches = [
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
          title: "The Ecclessia (The Church)",
          socialLinks: [
            { name: "Whatsapp", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "Twitter", url: "#" },
          ],
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
          title: "The Ecclessia (The Church)",
          socialLinks: [
            { name: "Whatsapp", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "Twitter", url: "#" },
          ],
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
          title: "The Ecclessia (The Church)",
          socialLinks: [
            { name: "Whatsapp", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "Twitter", url: "#" },
          ],
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
          title: "The Ecclessia (The Church)",
          socialLinks: [
            { name: "Whatsapp", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "Twitter", url: "#" },
          ],
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
          title: "The Ecclessia (The Church)",
          socialLinks: [
            { name: "Whatsapp", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "Twitter", url: "#" },
          ],
        },
        {
          imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
          title: "The Ecclessia (The Church)",
          socialLinks: [
            { name: "Whatsapp", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "Twitter", url: "#" },
          ],
        },
      ];
    
      return (
        <main className="flex flex-col pl-32 pr-40 max-md:px-5">
          <div className="w-full  max-md:max-w-full">
            <ChurchCardRow churches={churches.slice(0, 3)} />
          </div>
          <div className="mt-11 w-full  max-md:mt-10 max-md:max-w-full">
            <ChurchCardRow churches={churches.slice(3, 6)} />
          </div>
        </main>
  )
}
