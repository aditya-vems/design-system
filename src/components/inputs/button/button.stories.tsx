import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Button } from "./button"
import { Spinner } from "@/components/feedback/spinner"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Archive01Icon,
  ArrowLeft01Icon,
  ArrowUpRightIcon,
  CalendarAdd01Icon,
  Clock01Icon,
  Delete02Icon,
  GitBranchIcon,
  LeftToRightListBulletIcon,
  Mail01Icon,
  MoreHorizontalIcon,
  Tag01Icon,
} from "@hugeicons/core-free-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/overlay/dropdown-menu"

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Size: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6">
      <div className="flex items-end gap-2">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button size="icon-xs" variant="outline" aria-label="Extra small icon">
          <HugeiconsIcon icon={ArrowUpRightIcon} strokeWidth={2} />
        </Button>
      </div>
      <div className="flex items-end gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="icon-sm" variant="outline" aria-label="Small icon">
          <HugeiconsIcon icon={ArrowUpRightIcon} strokeWidth={2} />
        </Button>
      </div>
      <div className="flex items-end gap-2">
        <Button size="default" variant="outline">
          Default
        </Button>
        <Button size="icon" variant="outline" aria-label="Default icon">
          <HugeiconsIcon icon={ArrowUpRightIcon} strokeWidth={2} />
        </Button>
      </div>
      <div className="flex items-end gap-2">
        <Button size="lg" variant="outline">
          Large
        </Button>
        <Button size="icon-lg" variant="outline" aria-label="Large icon">
          <HugeiconsIcon icon={ArrowUpRightIcon} strokeWidth={2} />
        </Button>
      </div>
    </div>
  ),
}

export const Default: Story = {
  render: () => <Button>Button</Button>,
}

export const Outline: Story = {
  render: () => <Button variant="outline">Outline</Button>,
}

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>,
}

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost</Button>,
}

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>,
}

export const Link: Story = {
  render: () => <Button variant="link">Link</Button>,
}

export const Icon: Story = {
  render: () => (
    <Button variant="outline" size="icon" aria-label="Open">
      <HugeiconsIcon icon={ArrowUpRightIcon} strokeWidth={2} />
    </Button>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Button variant="outline">
      <HugeiconsIcon icon={GitBranchIcon} strokeWidth={2} data-icon="inline-start" />
      New Branch
    </Button>
  ),
}

export const Rounded: Story = {
  render: () => (
    <Button variant="outline" size="icon" className="rounded-full" aria-label="Back">
      <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
    </Button>
  ),
}

export const WithSpinner: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Spinner data-icon="inline-start" className="size-3.5" />
        Generating
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" className="size-3.5" />
        Downloading
      </Button>
    </div>
  ),
}

export const ButtonGroup: Story = {
  render: function ButtonGroupToolbar() {
    const [label, setLabel] = React.useState("personal")

    return (
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Back">
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
        </Button>

        <div className="inline-flex" role="group" aria-label="Archive and report">
          <Button variant="outline" className="rounded-r-none">
            Archive
          </Button>
          <Button variant="outline" className="rounded-l-none border-l-0">
            Report
          </Button>
        </div>

        <div className="inline-flex" role="group" aria-label="Snooze">
          <Button variant="outline" className="rounded-r-none">
            Snooze
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-l-none border-l-0"
                aria-label="More actions"
              >
                <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="min-w-52 shadow-none ring-1 ring-border"
            >
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <HugeiconsIcon icon={Archive01Icon} strokeWidth={2} />
                Archive
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <HugeiconsIcon icon={CalendarAdd01Icon} strokeWidth={2} />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <HugeiconsIcon icon={LeftToRightListBulletIcon} strokeWidth={2} />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <HugeiconsIcon icon={Tag01Icon} strokeWidth={2} />
                  Label As…
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="min-w-36 shadow-none ring-1 ring-border">
                  <DropdownMenuRadioGroup value={label} onValueChange={setLabel}>
                    <DropdownMenuRadioItem value="personal">Personal</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">Work</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={(e) => e.preventDefault()}>
                <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                Trash
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  },
}

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="#button-as-child-login">Login</a>
    </Button>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  ),
}
