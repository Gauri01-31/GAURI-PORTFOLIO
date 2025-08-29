// src/components/ui/badge.jsx
import React from "react";

export const Badge = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
