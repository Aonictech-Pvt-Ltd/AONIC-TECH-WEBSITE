"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";

interface ProtectedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
  subject?: string;
}

export default function ProtectedEmail({
  user = "contactus",
  domain = "aonictech.com",
  className = "",
  showIcon = false,
  iconClassName = "w-4 h-4",
  subject,
}: ProtectedEmailProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isReady) {
      e.preventDefault();
      const mailto = `mailto:${user}@${domain}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
      window.location.href = mailto;
    }
  };

  return (
    <a
      href={isReady ? `mailto:${user}@${domain}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}` : "#"}
      onClick={handleClick}
      className={className}
      aria-label="Send email to AONIC TECH"
    >
      {showIcon && <Mail className={iconClassName} />}
      <span className="inline-flex items-center truncate">
        <span>{user}</span>
        <span>&#64;</span>
        <span>{domain}</span>
      </span>
    </a>
  );
}
