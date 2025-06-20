
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement>, // Allow anchor props
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // This is for the Button's own Slot behavior
  // Note: 'href' is part of React.AnchorHTMLAttributes
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, asChild: buttonOwnAsChild = false, ...allOtherProps }, ref) => {
  // Determine if the Button itself should render as a Slot based on its own asChild prop
  const isSlot = buttonOwnAsChild;
  
  // Determine if the component should render as an anchor tag if an href is present 
  // AND it's not meant to be a Slot itself.
  const isLink = !isSlot && allOtherProps.href !== undefined;
  
  const Comp = isSlot ? Slot : (isLink ? "a" : "button");

  // Explicitly remove 'asChild' from the props that will be spread to the DOM element.
  // This is crucial to prevent the "React does not recognize the `asChild` prop" warning
  // when <Link asChild> wraps this Button.
  const { asChild, ...domProps } = allOtherProps;

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as any} // Cast ref to any due to Comp being dynamic
      {...domProps} // Spread domProps which are now clean of any 'asChild'
    />
  );
});
Button.displayName = "Button"

export { Button, buttonVariants }
