import { ViewOptions } from '@/components/Navigation';
import { createContext, ReactNode, useState } from 'react';

interface ViewContext {
  selectedView: ViewOptions;
  setSelectedView: (view: ViewOptions) => void;
}

export const ViewContext = createContext<ViewContext | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [selectedView, setSelectedView] = useState<ViewOptions>("Projects");

  return (
    <ViewContext.Provider value={{ selectedView, setSelectedView }}>
      {children}
    </ViewContext.Provider>
  );
}