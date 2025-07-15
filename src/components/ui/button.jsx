import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const getButtonVariantClasses = (variant, size) => {
  const variantClasses = {
    default: 'ui-button-default',
    destructive: 'ui-button-destructive',
    outline: 'ui-button-outline',
    secondary: 'ui-button-secondary',
    ghost: 'ui-button-ghost',
    link: 'ui-button-link'
  };
  
  const sizeClasses = {
    default: 'ui-button-size-default',
    sm: 'ui-button-size-sm',
    lg: 'ui-button-size-lg',
    icon: 'ui-button-size-icon'
  };
  
  return `ui-button-base ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default}`;
};

const buttonVariants = cva(
  "ui-button-base",
  {
    variants: {
      variant: {
        default: "ui-button-default",
        destructive: "ui-button-destructive",
        outline: "ui-button-outline",
        secondary: "ui-button-secondary",
        ghost: "ui-button-ghost",
        link: "ui-button-link",
      },
      size: {
        default: "ui-button-size-default",
        sm: "ui-button-size-sm",
        lg: "ui-button-size-lg",
        icon: "ui-button-size-icon",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props} />
  );
}

export { Button, buttonVariants }
