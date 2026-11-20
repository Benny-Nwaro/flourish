export default {
  name: "testimony",
  title: "Testimonies",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Member Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "testimony",
      title: "Testimony Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo / Avatar",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
  },
};
