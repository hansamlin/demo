import React, { useEffect } from "react";
import styled from "styled-components";
import { fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

const Panels = styled.div`
  display: inline-block;
  height: 100%;
  width: calc(100% / 3);
  background: ${props => props.color};
  opacity: 0.9;
`;

export default function Context({ children }) {
  useEffect(() => {
    const hoverSubscribe = fromEvent(
      document.querySelectorAll(".panels"),
      "mouseenter"
    )
      .pipe(map(() => children.border))
      .subscribe(color => console.log(color));

    return () => hoverSubscribe.unsubscribe();
  }, []);

  return React.useMemo(() => {
    return <Panels className="panels" color={children.body} />;
  }, []);
}
