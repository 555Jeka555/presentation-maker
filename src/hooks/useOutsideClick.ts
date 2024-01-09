import React, { useEffect, useLayoutEffect, useRef } from "react";

export function useOutsideClick(
  elementRef: React.MutableRefObject<null | HTMLDivElement>,
  handler: () => void,
  attached = true
) {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    const handleClick = (event: MouseEvent) => {
      if (!elementRef) return;

      if (elementRef.current && elementRef.current?.parentElement?.firstChild !== event.target) {
        latestHandler.current();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, latestHandler, attached]);
}

function useLatest(value: () => void) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
