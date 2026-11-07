"use client";

import dynamic from "next/dynamic";

const QuoteModal = dynamic(() => import("@/components/ui/QuoteModal"), {
  ssr: false,
});

export default function DynamicQuoteModal() {
  return <QuoteModal />;
}
