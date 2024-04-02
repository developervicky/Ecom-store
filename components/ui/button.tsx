import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        {...props}
        className={cn(
          "w-auto rounded-lg border-transparent bg-black px-5 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 ",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
