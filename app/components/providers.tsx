"use client"
import { trpc } from "@/trpc/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { useState } from "react"

export function Providers ({
  children
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())


  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: "include",
          })
        }
      }),
    ],
  }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}