import React from "react";
import styled from "styled-components";
import Panels from "./Panels";
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const panels = [
  { body: "#e02c7e", border: "#e5439a" },
  { body: "#12144e", border: "#3d439b" },
  { body: "#0083e5", border: "00aeef" }
];

export default function Wrapper({ setTheme }) {
  React.useEffect(() => {
    const hoverSubscribe = fromEvent(
      document.querySelectorAll(".panels"),
      "mouseenter"
    )
      .pipe(
        map(e => {
          return e.target.getAttribute("color");
        })
      )
      .subscribe(color => console.log(color));

    return () => hoverSubscribe.unsubscribe();
  }, []);
  return (
    <Div>
      {panels.map(item => {
        return <Panels key={item.body}>{item}</Panels>;
      })}
    </Div>
  );
}
