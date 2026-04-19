import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "./switch"
import { Label } from "@/components/inputs/label"

const meta: Meta<typeof Switch> = {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default"],
    },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { id: "gps-toggle", size: "default" },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} />
      <Label htmlFor="gps-toggle">Enable GPS Tracking</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="alerts" defaultChecked />
      <Label htmlFor="alerts">Live Maintenance Alerts</Label>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch size="sm" id="sm-switch" defaultChecked />
        <Label htmlFor="sm-switch">Small — Fuel Monitoring</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="default" id="default-switch" defaultChecked />
        <Label htmlFor="default-switch">Default — Driver Notifications</Label>
      </div>
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: () => (
    <div className="flex flex-col gap-0 w-72 divide-y divide-border">
      {[
        { id: "gps", label: "GPS Tracking", on: true },
        { id: "alerts", label: "Breakdown Alerts", on: true },
        { id: "reports", label: "Weekly Reports", on: false },
        { id: "geofence", label: "Geofence Monitoring", on: false },
        { id: "idle", label: "Idle Time Warnings", on: true },
      ].map(({ id, label, on }) => (
        <div key={id} className="flex items-center justify-between py-2.5">
          <Label htmlFor={id}>{label}</Label>
          <Switch id={id} defaultChecked={on} />
        </div>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="immobilizer" disabled />
        <Label htmlFor="immobilizer" className="opacity-50">Remote Immobilizer (Unavailable)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="beacon" disabled defaultChecked />
        <Label htmlFor="beacon" className="opacity-50">Emergency Beacon (Read Only)</Label>
      </div>
    </div>
  ),
}
