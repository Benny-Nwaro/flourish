export default {
  name: "sermon",
  title: "Sermons",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "preacher",
      title: "Preacher",
      type: "string",
      initialValue: "Pastor Ebenezer Ama",
    },
    {
      name: "series",
      title: "Series / Theme",
      type: "string",
    },
    {
      name: "date",
      title: "Date Preached",
      type: "date",
    },
    {
      name: "flier",
      title: "Sermon Flier / Thumbnail",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "audioLink",
      title: "Telegram Audio Stream URL",
      type: "url",
      description: "Direct Telegram or stream link (e.g. https://t.me/FlourishNation/...)",
    },
    {
      name: "downloadLink",
      title: "Direct Download Link",
      type: "url",
      description: "Optional direct MP3 download URL",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "preacher",
      media: "flier",
    },
  },
};
