import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { range } from "ramda";
import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./RepeatingSection.css";

const RepeatingItem = ({
  component,
  name,
  reprowid,
  children,
}: PropsWithChildren<{
  component: (i: number) => ReactNode;
  name: string;
  reprowid: number;
}>) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref) {
      return;
    }
    for (const el of ref.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input[name], select[name]")) {
      if (!el.name.startsWith("attr_")) {
        continue;
      }
      const attrName = el.name.replace("attr_", "");
      if (attrName.includes("_")) console.log("bad input name", attrName, el);
      el.name = `repeating_${name}_${reprowid}_${attrName}`;
    }
  }, [name, ref, reprowid]);

  return (
    <div className="repitem" data-reprowid={reprowid} style={{ position: "relative", top: 0, left: 0 }} ref={setRef}>
      {children}
      {component(reprowid)}
    </div>
  );
};

export const RepeatingSection = ({
  name,
  children,
  initialCount = 1,
  className,
  ...rest
}: Omit<DOMProps<"fieldset">, "children"> & {
  name: string;
  children: (i: number) => ReactNode;
  initialCount?: number;
}) => {
  const [counter, setCounter] = useState(initialCount);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <fieldset className={cn(`repeating_${name}`, className)} {...rest}>
      {range(0, counter).map((i) => (
        <RepeatingItem key={i} name={name} reprowid={i} component={children}>
          {isEdit ? (
            <div className="itemcontrol">
              <button className="btn btn-danger pictos repcontrol_del">#</button>
              <a className="btn repcontrol_move">≡</a>
            </div>
          ) : null}
        </RepeatingItem>
      ))}

      <div className="repcontrol" data-groupname="repeating_backs">
        <button
          className="btn repcontrol_edit"
          onClick={(e) => {
            setIsEdit((val) => !val);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          Modify
        </button>
        <button
          className="btn repcontrol_add"
          style={{ display: "inline-block" }}
          onClick={(e) => {
            setCounter((val) => val + 1);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          +Add
        </button>
      </div>
    </fieldset>
  );
};
