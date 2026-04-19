import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/inputs/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/inputs/field"
import { Input } from "@/components/inputs/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"

const meta: Meta<typeof Sheet> = {
  title: "Overlay/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you are done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 overflow-y-auto px-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sheet-demo-name">Name</FieldLabel>
                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sheet-demo-username">Username</FieldLabel>
                <Input id="sheet-demo-username" defaultValue="@peduarte" />
              </Field>
            </FieldGroup>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" type="button">
                Close
              </Button>
            </SheetClose>
            <Button type="button">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-2xl flex-wrap justify-center gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className={
              side === "bottom" || side === "top"
                ? "max-h-[min(360px,70vh)]"
                : undefined
            }
          >
            <SheetHeader>
              <SheetTitle className="capitalize">{side}</SheetTitle>
              <SheetDescription>
                This sheet opens from the {side} edge of the viewport.
              </SheetDescription>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto px-6 text-sm text-muted-foreground">
              {Array.from({ length: 8 }, (_, i) => (
                <p key={i} className="mb-3">
                  Paragraph {i + 1}. Use scroll when content exceeds the sheet
                  height on top and bottom placements.
                </p>
              ))}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" type="button">
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
}

export const NoCloseButton: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">No header close</Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>
              The corner close control is hidden; use the footer to dismiss.
            </SheetDescription>
          </SheetHeader>
          <div className="px-6 text-sm text-muted-foreground">
            Content goes here.
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button">Done</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
}
