import * as React from "react"

import { cn } from "@/hooks/utils"
import { Input } from "@/components/inputs/input"
import { Label } from "@/components/inputs/label"
import { FieldError } from "@/components/inputs/field"

type FloatingFieldProps = Omit<
  React.ComponentProps<typeof Input>,
  "placeholder" | "style"
> & {
  label: string
  error?: string | null
  style?: React.CSSProperties
  inputClassName?: string
  inputStyle?: React.CSSProperties
  labelClassName?: string
  errorClassName?: string
}

function FloatingField({
  id,
  label,
  error,
  className,
  style,
  inputClassName,
  inputStyle,
  labelClassName,
  errorClassName,
  ...inputProps
}: FloatingFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const hasError = error != null && error !== ""

  return (
    <div
      data-slot="floating-field"
      data-invalid={hasError ? "" : undefined}
      className={cn("flex w-full flex-col gap-2", className)}
      style={style}
    >
      <div className="relative pt-5">
        <Input
          id={inputId}
          placeholder=" "
          aria-invalid={hasError || undefined}
          {...inputProps}
          style={inputStyle}
          className={cn(
            "peer h-11 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none transition-colors duration-300 ease-out",
            "placeholder:text-transparent",
            "focus-visible:border-foreground focus-visible:ring-0",
            "aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-0",
            "dark:bg-transparent dark:aria-invalid:ring-0",
            inputClassName,
          )}
        />
        <Label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-0 top-0 text-xs font-normal text-muted-foreground transition-all duration-300 ease-out",
            "peer-placeholder-shown:top-7.5 peer-placeholder-shown:text-base",
            "peer-focus:top-0 peer-focus:text-xs peer-focus:text-foreground",
            "peer-aria-invalid:text-destructive",
            labelClassName,
          )}
        >
          {label}
        </Label>
      </div>
      <FieldError
        className={cn(
          "transition-opacity duration-200 ease-out",
          hasError ? "opacity-100" : "opacity-0",
          errorClassName,
        )}
      >
        {hasError ? error : " "}
      </FieldError>
    </div>
  )
}

export { FloatingField }
export type { FloatingFieldProps }
