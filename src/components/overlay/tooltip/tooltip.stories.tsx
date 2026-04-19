import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip"
import { Button } from "@/components/inputs/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Edit01Icon,
  Delete01Icon,
  Download01Icon,
  MoreVerticalIcon,
  Route01Icon,
  Fuel01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof Tooltip> = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">KDA 781C</Button>
      </TooltipTrigger>
      <TooltipContent>Toyota Hilux 2022 — James Mwangi</TooltipContent>
    </Tooltip>
  ),
}

export const OnIcons: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      {[
        { icon: Edit01Icon, label: "Edit Vehicle" },
        { icon: Route01Icon, label: "Assign Route" },
        { icon: Fuel01Icon, label: "Log Fuel" },
        { icon: Download01Icon, label: "Export Record" },
        { icon: Delete01Icon, label: "Remove From Fleet" },
      ].map(({ icon, label }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Button size="icon-sm" variant="ghost">
              <HugeiconsIcon icon={icon} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 place-items-center gap-6 p-10">
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Northbound Route</TooltipContent>
      </Tooltip>
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Previous Checkpoint</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Center</Button>
        </TooltipTrigger>
        <TooltipContent>Current Location</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Next Checkpoint</TooltipContent>
      </Tooltip>
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Southbound Route</TooltipContent>
      </Tooltip>
      <div />
    </div>
  ),
}

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-md border border-border bg-card px-1.5 py-1">
      {[
        { icon: Settings01Icon, label: "Fleet Settings" },
        { icon: Route01Icon, label: "Manage Routes" },
        { icon: Fuel01Icon, label: "Fuel Log" },
        { icon: Download01Icon, label: "Export Report" },
        { icon: MoreVerticalIcon, label: "More Options" },
      ].map(({ icon, label }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Button size="icon-sm" variant="ghost">
              <HugeiconsIcon icon={icon} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
