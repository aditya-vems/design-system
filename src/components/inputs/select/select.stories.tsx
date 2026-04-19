import type { Meta, StoryObj } from "@storybook/react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select"

const meta: Meta<typeof Select> = {
  title: "Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Select Vehicle Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sedan">Sedan</SelectItem>
        <SelectItem value="suv">SUV</SelectItem>
        <SelectItem value="pickup">Pickup Truck</SelectItem>
        <SelectItem value="van">Cargo Van</SelectItem>
        <SelectItem value="bus">Bus</SelectItem>
        <SelectItem value="heavy">Heavy Commercial</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Assign Driver" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Drivers</SelectLabel>
          <SelectItem value="d1">James Mwangi</SelectItem>
          <SelectItem value="d2">Sarah Ochieng</SelectItem>
          <SelectItem value="d3">Peter Kamau</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>On Leave</SelectLabel>
          <SelectItem value="d4" disabled>Ahmed Hassan</SelectItem>
          <SelectItem value="d5" disabled>Grace Wambua</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Select>
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="critical">Critical</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="default" className="w-32">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="critical">Critical</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="active">
      <SelectTrigger className="w-44">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
        <SelectItem value="maintenance">In Maintenance</SelectItem>
        <SelectItem value="decommissioned">Decommissioned</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="No Routes Available" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="r1">Nairobi — Mombasa</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const RouteSelector: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select Route" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Nairobi Region</SelectLabel>
          <SelectItem value="nbi-cbd">CBD — Westlands</SelectItem>
          <SelectItem value="nbi-south">City Centre — Karen</SelectItem>
          <SelectItem value="nbi-east">CBD — Eastleigh</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Inter-County</SelectLabel>
          <SelectItem value="nbi-msa">Nairobi — Mombasa</SelectItem>
          <SelectItem value="nbi-kis">Nairobi — Kisumu</SelectItem>
          <SelectItem value="nbi-nak">Nairobi — Nakuru</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
