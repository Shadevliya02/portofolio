"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { buttonClass, cn } from "@/lib/utils";

export function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(buttonClass("secondary"), className)}
      >
        {copied ? (
          <Check className="h-4 w-4 text-accent" aria-hidden="true" />
        ) : (
          <Mail className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Email copied" : "Email me"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </>
  );
}
