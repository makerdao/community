// @flow

import { useContext } from "react";

import { NavigationContext } from "../NavigationProvider";

export default function useNavigation(): any {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be within a NavigationProvider");
  }

  return context;
}
