import type { Meta, StoryObj } from "@storybook/react"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/inputs/field"
import { Button } from "@/components/inputs/button"
import { Input } from "@/components/inputs/input"
import { Label } from "@/components/inputs/label"
import { copyToClipboard } from "@/hooks/utils"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

const meta: Meta<typeof Dialog> = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline" type="button">
              Edit profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you are
                done.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="dialog-demo-name">Name</FieldLabel>
                  <Input id="dialog-demo-name" defaultValue="Pedro Duarte" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="dialog-demo-username">Username</FieldLabel>
                  <Input id="dialog-demo-username" defaultValue="@peduarte" />
                </Field>
              </FieldGroup>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  ),
}

export const Share: Story = {
  render: () => {
    const link = "https://ui.shadcn.com/docs/installation"
    return (
      <div className="mx-auto flex w-full max-w-sm justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Share</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <DialogBody className="flex flex-row flex-wrap items-center gap-2">
              <div className="grid min-w-0 flex-1 gap-2">
                <Label htmlFor="dialog-share-link" className="sr-only">
                  Link
                </Label>
                <Input id="dialog-share-link" readOnly value={link} />
              </div>
              <Button type="button" onClick={() => void copyToClipboard(link)}>
                Copy
              </Button>
            </DialogBody>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
}

export const NoCloseButton: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false} className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>No Close Button</DialogTitle>
            <DialogDescription>
              This dialog does not have a close button in the top-right corner.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

export const StickyFooter: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Sticky footer</Button>
        </DialogTrigger>
        <DialogContent className="flex max-h-[min(80vh,520px)] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Sticky Footer</DialogTitle>
            <DialogDescription>
              This dialog has a sticky footer that stays visible while the
              content scrolls.
            </DialogDescription>
          </DialogHeader>
          <DialogBody className="min-h-0 flex-1 overflow-y-auto text-sm">
            {Array.from({ length: 16 }, (_, i) => (
              <p key={i} className="mb-2 text-muted-foreground last:mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Paragraph {i + 1}.
              </p>
            ))}
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

export const ScrollableContent: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Long content</Button>
        </DialogTrigger>
        <DialogContent className="flex max-h-[min(80vh,520px)] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Release notes</DialogTitle>
            <DialogDescription>Changes in this version.</DialogDescription>
          </DialogHeader>
          <DialogBody className="min-h-0 flex-1 overflow-y-auto text-sm">
            {Array.from({ length: 14 }, (_, i) => (
              <p key={i} className="mb-2 text-muted-foreground last:mb-0">
                Section {i + 1}. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            ))}
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}
