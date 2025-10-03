"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient()); // ✅ client faqat brauzerda yaratiladi

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
