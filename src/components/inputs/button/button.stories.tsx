import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  PlusSignIcon,
  Search01Icon,
  TruckIcon,
  UserAdd01Icon,
  Edit01Icon,
  Delete01Icon,
  Download01Icon,
  Route01Icon,
  Settings01Icon,
  Refresh01Icon,
  MoreVerticalIcon,
} from "@hugeicons/core-free-icons"

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

export const Default: Story = {
  args: {
    children: "Assign Driver",
    variant: "default",
    size: "default",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Button variant="default">Add Vehicle</Button>
      <Button variant="outline">Export Report</Button>
      <Button variant="secondary">View Details</Button>
      <Button variant="ghost">Dismiss</Button>
      <Button variant="destructive">Remove From Fleet</Button>
      <Button variant="link">View Route History</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Button size="xs">Compact</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Button>
        <HugeiconsIcon icon={PlusSignIcon} />
        Add Vehicle
      </Button>
      <Button variant="outline">
        <HugeiconsIcon icon={Search01Icon} />
        Search Fleet
      </Button>
      <Button variant="secondary">
        <HugeiconsIcon icon={Route01Icon} />
        Assign Route
      </Button>
      <Button variant="ghost">
        <HugeiconsIcon icon={Settings01Icon} />
        Settings
      </Button>
      <Button variant="destructive">
        <HugeiconsIcon icon={Delete01Icon} />
        Remove Vehicle
      </Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Button size="icon-xs" variant="ghost">
        <HugeiconsIcon icon={Edit01Icon} />
      </Button>
      <Button size="icon-sm" variant="outline">
        <HugeiconsIcon icon={Refresh01Icon} />
      </Button>
      <Button size="icon" variant="outline">
        <HugeiconsIcon icon={Download01Icon} />
      </Button>
      <Button size="icon-lg" variant="default">
        <HugeiconsIcon icon={PlusSignIcon} />
      </Button>
    </div>
  ),
}

export const DriverActions: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button>
          <HugeiconsIcon icon={UserAdd01Icon} />
          Onboard Driver
        </Button>
        <Button variant="outline">
          <HugeiconsIcon icon={TruckIcon} />
          Assign Vehicle
        </Button>
        <Button size="icon-sm" variant="ghost">
          <HugeiconsIcon icon={MoreVerticalIcon} />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="secondary">View Schedule</Button>
        <Button size="sm" variant="ghost">Manage Permits</Button>
        <Button size="sm" variant="destructive">Suspend License</Button>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Button disabled>
        <HugeiconsIcon icon={PlusSignIcon} />
        Add Vehicle
      </Button>
      <Button variant="outline" disabled>Export Report</Button>
      <Button variant="destructive" disabled>Remove From Fleet</Button>
    </div>
  ),
}
