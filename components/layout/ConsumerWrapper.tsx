"use client"

import ConsumerLayout from "@/components/layout/ConsumerLayout"

export default function ConsumerWrapper({ children }: { children: React.ReactNode }) {
  return <ConsumerLayout>{children}</ConsumerLayout>
}
