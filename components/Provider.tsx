"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ApiTesting /> */}
        {children}
      </QueryClientProvider>
    </>
  );
}

export default Provider;
