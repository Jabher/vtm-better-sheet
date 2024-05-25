import { useMediaQuery } from "usehooks-ts";
import { PropsWithChildren } from "react";
import { useWorker, Worker } from "./useWorker.ts";
import "./base.css";

const Roll20App = ({ children, worker }: PropsWithChildren<{ worker: Worker }>) => {
  const isLightOS = useMediaQuery("(prefers-color-scheme: light)", {
    defaultValue: true
  });
  const formRef = useWorker(worker);

  if (process.env.NODE_ENV == "production") {
    return (
      <>
        <script
          type="text/worker"
          // @ts-expect-error types
          dangerouslySetInnerHTML={{ __html: import.meta.compileTime("./build-worker.ts").file }}
        />
        {children}
      </>
    );
  }

  return (
    <div className={isLightOS ? "" : "sheet-darkmode"} style={{ minHeight: "100vh", width: "100vw" }}>
      <div id="dialog-window" style={{ minHeight: "100%", width: "100%" }}>
        <div
          className="dialog largedialog characterviewer characterviewer-simulated"
          style={{ minHeight: "100%", width: "100%", display: "block" }}
        >
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#" data-tab="charsheet">
                Character Sheet
              </a>
            </li>
            <li style={{ display: "none" }}>
              <a href="#" data-tab="charmancer">
                Charactermancer
              </a>
            </li>

            <li>
              <a href="#" data-tab="bioinfo">
                Bio &amp; Info
              </a>
            </li>

            <li>
              <a href="#" data-tab="attributesabilities">
                Attributes &amp; Abilities
              </a>
            </li>
          </ul>
          <div className="tab-content" style={{ minHeight: "100%", width: "100%" }}>
            <form className="sheetform" autoComplete="off" ref={formRef}>
              <div className="charactersheet tab-pane charsheet lang-undefined" style={{ display: "block" }}>
                {children}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roll20App;
