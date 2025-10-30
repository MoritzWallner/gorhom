import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface FooterContextType {
  footer: ReactNode;
  setFooter: (footer: ReactNode) => void;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [footer, setFooter] = useState<ReactNode>(null);

  const setFooterCallback = useCallback((newFooter: ReactNode) => {
    setFooter(newFooter);
  }, []);

  return (
    <FooterContext.Provider value={{ footer, setFooter: setFooterCallback }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooter must be used within a FooterProvider');
  }
  return context;
};
