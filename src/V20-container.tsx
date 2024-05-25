import { PropsWithChildren } from "react";
import "./V20-container.css";
import { blurry } from "./components/utility/blurry.tsx";
import { RollButton } from "./components/Buttons.tsx";

export const V20Container = ({ children }: PropsWithChildren) => (
  <div
    className="sheet"
    style={{
      // @ts-expect-error types
      "--v20-blurry-10-50": blurry(10, 50),
      "--v20-blurry-5-20": blurry(5, 20),
    }}
  >
    <div className="sheet-header">
      <div className="sheet-header-banner" />
      <RollButton name="custom" />
    </div>
    {children}
  </div>
);
