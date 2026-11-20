export default {
  name: "post",
  title: "Blog Posts",
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
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Flourish Generation Church",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "mainImage",
    },
  },
};
