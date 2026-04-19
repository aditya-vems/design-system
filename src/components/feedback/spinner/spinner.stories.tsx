import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "./spinner"
import { Button } from "@/components/inputs/button"

const meta: Meta<typeof Spinner> = {
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
        <span className="text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <span className="text-muted-foreground">Large</span>
      </div>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled>
        <Spinner />
        Syncing Routes...
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Loading Fleet Data
      </Button>
    </div>
  ),
}

export const LoadingState: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3 py-8">
      <Spinner className="size-6 text-primary" />
      <p className="text-muted-foreground">Fetching vehicle locations...</p>
    </div>
  ),
}
