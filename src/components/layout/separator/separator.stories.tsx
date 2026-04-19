import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "Layout/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <p>Vehicle Overview</p>
      <Separator />
      <p className="text-muted-foreground">142 vehicles registered across 6 zones.</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-3 h-8">
      <span>Vehicles</span>
      <Separator orientation="vertical" />
      <span>Drivers</span>
      <Separator orientation="vertical" />
      <span>Routes</span>
      <Separator orientation="vertical" />
      <span>Reports</span>
    </div>
  ),
}

export const BetweenSections: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div>
        <p className="font-medium mb-1">Vehicle Info</p>
        <p className="text-muted-foreground">KDA 781C — Toyota Hilux 2022</p>
      </div>
      <Separator />
      <div>
        <p className="font-medium mb-1">Current Assignment</p>
        <p className="text-muted-foreground">James Mwangi — Nairobi — Mombasa</p>
      </div>
      <Separator />
      <div>
        <p className="font-medium mb-1">Next Service</p>
        <p className="text-muted-foreground">50,000 km — due in 1,800 km</p>
      </div>
    </div>
  ),
}

export const InToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5">
      <span>KDA 781C</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-muted-foreground">Toyota Hilux</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-muted-foreground">James Mwangi</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-muted-foreground">On Route</span>
    </div>
  ),
}
