import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "2jxrugqw",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return "";
  return builder.image(source).auto("format").fit("max").url();
}

// GROQ Queries
export const sermonsQuery = `*[_type == "sermon"] | order(date desc, _createdAt desc) {
  _id,
  title,
  "img": coalesce(flier.asset->url, flier),
  audioLink,
  downloadLink,
  preacher,
  series,
  date
}`;

export const eventsQuery = `*[_type == "event"] | order(date asc, _createdAt desc) {
  _id,
  title,
  description,
  "src": coalesce(flier.asset->url, flier),
  date,
  time,
  location
}`;

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  "img": coalesce(mainImage.asset->url, mainImage),
  publishedAt,
  excerpt,
  body
}`;

export const expressionsQuery = `*[_type == "expression"] | order(name asc) {
  _id,
  name,
  members,
  "flag": coalesce(flag.asset->url, flag),
  address,
  mapUrl
}`;

export const testimoniesQuery = `*[_type == "testimony"] | order(_createdAt desc) {
  _id,
  name,
  testimony,
  "img": coalesce(photo.asset->url, photo)
}`;
