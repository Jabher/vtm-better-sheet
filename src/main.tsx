import { ViteReactSSG } from "vite-react-ssg/single-page";
import Roll20App from "./imported/Roll20App.tsx";
import { V20 } from "./V20.tsx";
import { V20Container } from "./V20-container.tsx";
import { sheets } from "./sheets";
import { WorkerApi } from "./imported/useWorker.ts";

export const createRoot = ViteReactSSG(
  <Roll20App
    worker={(api: WorkerApi) => {
      // api.on('change:sheet_type', console.log)

      api.on(
        ["sheet:opened", "change:Dexterity", "change:DexterityBoost", "change:CeleritySpeed", "change:MiscSpeed"],
        async () => {
          const attrs = await api.getAttrs("Dexterity", "DexterityBoost", "CeleritySpeed", "MiscSpeed");
          console.log(attrs);
          void api.setAttrs({
            JogSpeed:
              12 +
              Number(attrs.Dexterity) +
              Number(attrs.DexterityBoost) +
              Number(attrs.CeleritySpeed) +
              Number(attrs.MiscSpeed),
            RunSpeed:
              20 +
              (3 * Number(attrs.Dexterity) +
                Number(attrs.DexterityBoost) +
                Number(attrs.CeleritySpeed) +
                Number(attrs.MiscSpeed)),
          });
        }
      );
    }}
  >
    <V20Container>
      <V20 sheets={sheets} />
    </V20Container>
  </Roll20App>
);
