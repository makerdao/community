// @flow

import type { ElementRef } from 'react';
import { useEffect } from 'react';

//Hook mostly to detect if there's a click outside of the results element.
//If a click is detected we hide the results.
export default function useClickOutside(
  ref: ElementRef<any>,
  handler: () => void,
  events?: Array<string> = [`mousedown`, `touchstart`]
) {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const detectClickOutside = (event: any) => {
      if (!ref.current) {
        return;
      }

      !ref.current.contains(event.target) && handler();
    };

    for (const event of events) {
      document.addEventListener(event, detectClickOutside);
    }

    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  });
}
