import { ViteReactSSG } from "vite-react-ssg/single-page";
import Roll20App from "./imported/Roll20App.tsx";
import { V20 } from "./V20.tsx";
import { V20Container } from "./V20-container.tsx";
import { sheets } from "./sheets";
// @ts-expect-error roll20
import { worker } from "./worker-logic.js";

export const createRoot = ViteReactSSG(
  <Roll20App worker={worker}>
    <V20Container>
      <V20 sheets={sheets} />
    </V20Container>
  </Roll20App>
);
