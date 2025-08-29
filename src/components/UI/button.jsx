// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, className = "", asChild = false, variant = "primary", size = "md", ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-colors rounded";
  
  let variantStyle = "";
  switch (variant) {
    case "outline":
      variantStyle = "border border-gray-300 text-gray-700 hover:bg-gray-100";
      break;
    case "secondary":
      variantStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    default:
      variantStyle = "bg-blue-600 text-white hover:bg-blue-700";
  }

  let sizeStyle = "";
  switch (size) {
    case "sm":
      sizeStyle = "px-3 py-1 text-sm";
      break;
    case "lg":
      sizeStyle = "px-6 py-3 text-lg";
      break;
    default:
      sizeStyle = "px-4 py-2";
  }

  const Comp = asChild ? "span" : "button";

  return (
    <Comp className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </Comp>
  );
};
