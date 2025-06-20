
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
    React.AnchorHTMLAttributes<HTMLAnchorElement>, // Allow Anchor props like href
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement, // Ref can be button or anchor
  ButtonProps
>(({ className, variant, size, asChild: isSlotForButton = false, ...props }, ref) => {
  // Determine the component type
  let Comp: React.ElementType = "button";
  if (isSlotForButton) {
    Comp = Slot;
  } else if (props.href) { // If href is passed, it should be an anchor
    Comp = "a";
  }

  // Explicitly remove 'asChild' if it exists in props before spreading to a DOM element.
  // This handles the case where <Link asChild> might pass its own 'asChild' prop down.
  // However, 'asChild' in ButtonProps is already destructured as 'isSlotForButton'.
  // The main change is ensuring Comp becomes 'a' when href is present.
  const { asChild, ...renderProps } = props as any; // Use 'as any' to handle potential 'asChild' in props

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as any} // Cast ref to any due to Comp being dynamic
      {...renderProps} // Spread the potentially cleaned props
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
