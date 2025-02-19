import { useContext } from "react";
import { ViewOptions } from "@/components/Navigation";
import { ViewContext } from "@/context/ViewContext";

export function useViewcontext() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }

  const currentView = context?.selectedView

  const changeViewContext = (view: ViewOptions) => {
    context?.setSelectedView(view)
  }

  return { changeViewContext, currentView };
}
