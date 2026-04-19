import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "./spinner"
import { Button } from "@/components/inputs/button"
import { Badge } from "@/components/data-display/badge"

const meta: Meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Spinner />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-3" />
        <span className="text-muted-foreground text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-muted-foreground text-xs">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-muted-foreground text-xs">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <span className="text-muted-foreground text-xs">XL</span>
      </div>
    </div>
  ),
}

export const ButtonStory: Story = {
  name: "Button",
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  ),
}

export const BadgeStory: Story = {
  name: "Badge",
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge>
        <Spinner data-icon="inline-start" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Processing
      </Badge>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-border bg-muted/50 px-3 py-2">
      <Spinner />
      <span className="truncate text-sm font-medium">Processing payment...</span>
      <span className="ml-auto shrink-0 text-sm text-muted-foreground tabular-nums">$100.00</span>
    </div>
  ),
}
