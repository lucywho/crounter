// CounterContext.js
import React, { createContext, useContext, useRef, useCallback } from 'react';

const CounterContext = createContext();

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

export const CounterProvider = ({ children }) => {
  const countersRef = useRef(new Map());

  const registerCounter = useCallback((id, resetFunction) => {
    countersRef.current.set(id, resetFunction);
  }, []);

  const unregisterCounter = useCallback((id) => {
    countersRef.current.delete(id);
  }, []);

  const resetAllCounters = useCallback(() => {
    countersRef.current.forEach((resetFunction) => resetFunction());
  }, []);

  return (
    <CounterContext.Provider
      value={{
        registerCounter,
        unregisterCounter,
        resetAllCounters,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
