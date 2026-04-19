import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  AlertCircleIcon,
  Clock01Icon,
  Flag01Icon,
  Fuel01Icon,
  Route01Icon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Active",
    variant: "default",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">In Review</Badge>
      <Badge variant="destructive">Breakdown</Badge>
      <Badge variant="outline">Scheduled</Badge>
      <Badge variant="ghost">Unassigned</Badge>
      <Badge variant="link">View Details</Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default">
        <HugeiconsIcon icon={CheckmarkCircle01Icon} />
        Cleared For Dispatch
      </Badge>
      <Badge variant="destructive">
        <HugeiconsIcon icon={AlertCircleIcon} />
        Fault Detected
      </Badge>
      <Badge variant="outline">
        <HugeiconsIcon icon={Clock01Icon} />
        Pending Inspection
      </Badge>
      <Badge variant="secondary">
        <HugeiconsIcon icon={Flag01Icon} />
        Flagged
      </Badge>
      <Badge variant="ghost">
        <HugeiconsIcon icon={Fuel01Icon} />
        Low Fuel
      </Badge>
    </div>
  ),
}

export const VehicleStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-0 w-56 divide-y divide-border">
      {[
        { plate: "KCA 234B", status: "On Route", variant: "default" as const },
        { plate: "KDB 781C", status: "Available", variant: "secondary" as const },
        { plate: "KDD 002F", status: "Maintenance", variant: "outline" as const },
        { plate: "KBZ 456A", status: "Breakdown", variant: "destructive" as const },
        { plate: "KCF 119E", status: "Unassigned", variant: "ghost" as const },
      ].map(({ plate, status, variant }) => (
        <div key={plate} className="flex items-center justify-between py-2">
          <span className="text-sm font-mono">{plate}</span>
          <Badge variant={variant}>{status}</Badge>
        </div>
      ))}
    </div>
  ),
}

export const MaintenancePriority: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="ghost">Routine</Badge>
      <Badge variant="outline">Scheduled</Badge>
      <Badge variant="secondary">Overdue</Badge>
      <Badge variant="destructive">
        <HugeiconsIcon icon={AlertCircleIcon} />
        Urgent
      </Badge>
    </div>
  ),
}
