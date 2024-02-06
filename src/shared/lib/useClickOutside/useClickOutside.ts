import { RefObject, useEffect } from "react";

export function useClickOutside(
    ref: RefObject<HTMLDivElement>,
    onClickOutside: () => void,
    excludeRef: RefObject<HTMLDivElement> | null = null) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node) && !excludeRef?.current?.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ ref, onClickOutside ]);
}