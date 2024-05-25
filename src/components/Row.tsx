import "./Row.css";
import cn from "classnames";
import { Children } from "react";
import { DOMProps } from "../types.ts";

export const Row = ({ children, className, ...rest }: DOMProps<"section">) => {
  const childrenArray = Children.toArray(children);
  // @ts-expect-error roll20
  const description = childrenArray.find((child) => child?.type == RowDescription);
  const childrenWithoutDescription = childrenArray.filter((c) => c !== description);
  const newChildren = description ? (
    <>
      <div className="sheet-component--row-head">
        <input
          type="checkbox"
          name="attr_description_collapsed"
          className="sheet-component--row-description-toggler material-symbols-outlined"
        />
        {childrenWithoutDescription}
      </div>
      {description}
    </>
  ) : (
    <div className="sheet-component--row-head">{childrenWithoutDescription}</div>
  );
  return (
    <section className={cn("sheet-component sheet-component--row", className)} {...rest}>
      {newChildren}
    </section>
  );
};

export const RowDescription = ({ children, className, ...rest }: DOMProps<"div">) => (
  <div className={cn("sheet-component sheet-component--row-description", className)} {...rest}>
    {children}
  </div>
);
