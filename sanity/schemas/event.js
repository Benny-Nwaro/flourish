export default {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      description: "e.g. Dec 15 - 18, 2026",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      description: "e.g. 5:00 PM WAT",
    },
    {
      name: "location",
      title: "Location / Venue",
      type: "string",
    },
    {
      name: "flier",
      title: "Event Flier",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "flier",
    },
  },
};
