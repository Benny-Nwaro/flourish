export default {
  name: "expression",
  title: "Expressions (Branches)",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Branch / Cell Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g. Enugu, Abuja, Lagos, UK, Online",
    },
    {
      name: "members",
      title: "Members count / Note",
      type: "string",
    },
    {
      name: "flag",
      title: "Country / Regional Flag",
      type: "image",
    },
    {
      name: "address",
      title: "Physical Address",
      type: "text",
      rows: 2,
    },
    {
      name: "mapUrl",
      title: "Google Maps Link",
      type: "url",
    },
  ],
};
