import { Studio } from "sanity";
import sanityConfig from "../../sanity.config";

export default function StudioPage() {
  return (
    <div style={{ height: "100vh", maxHeight: "100dvh", overflow: "hidden" }}>
      <Studio config={sanityConfig} />
    </div>
  );
}
