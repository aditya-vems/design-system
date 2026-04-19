import type { Meta, StoryObj } from "@storybook/react"
import {
  Avatar,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "./avatar"
import { HugeiconsIcon } from "@hugeicons/react"
import { UserGroupIcon } from "@hugeicons/core-free-icons"

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: "default" },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JM</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarFallback>JM</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const DriverRoster: Story = {
  render: () => (
    <div className="flex flex-col gap-2.5 w-52">
      {[
        { initials: "JM", name: "James Mwangi" },
        { initials: "SO", name: "Sarah Ochieng" },
        { initials: "PK", name: "Peter Kamau" },
        { initials: "AH", name: "Ahmed Hassan" },
      ].map(({ initials, name }) => (
        <div key={initials} className="flex items-center gap-2.5">
          <Avatar size="sm">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-1.5">
        <Avatar size="sm">
          <AvatarFallback>SO</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <span className="text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <Avatar size="default">
          <AvatarFallback>JM</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <span className="text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <Avatar size="lg">
          <AvatarFallback>PK</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <span className="text-muted-foreground">Large</span>
      </div>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup>
        <Avatar size="default">
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarFallback>SO</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarFallback>PK</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+8</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarFallback>GW</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>MO</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>RN</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <HugeiconsIcon icon={UserGroupIcon} />
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
}
