import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./checkbox"
import { Label } from "@/components/inputs/label"

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { id: "gps-tracking" },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} />
      <Label htmlFor="gps-tracking">Enable GPS Tracking</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="insurance" defaultChecked />
      <Label htmlFor="insurance">Third-Party Insurance Active</Label>
    </div>
  ),
}

export const ServiceChecklist: Story = {
  render: () => (
    <div className="flex flex-col gap-2.5">
      <p className="text-muted-foreground mb-0.5">Pre-Trip Service Checklist</p>
      {[
        { id: "oil", label: "Engine Oil Level", checked: true },
        { id: "tires", label: "Tyre Pressure Check", checked: true },
        { id: "brakes", label: "Brake System Inspection", checked: true },
        { id: "lights", label: "Exterior Lighting Check", checked: false },
        { id: "filter", label: "Air Filter Condition", checked: false },
        { id: "ac", label: "AC System Functional", checked: false },
      ].map(({ id, label, checked }) => (
        <div key={id} className="flex items-center gap-2">
          <Checkbox id={id} defaultChecked={checked} />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <Checkbox id="subsidy" disabled />
        <Label htmlFor="subsidy" className="opacity-50">Fuel Subsidy Eligible</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="beacon" disabled defaultChecked />
        <Label htmlFor="beacon" className="opacity-50">Emergency Beacon Active</Label>
      </div>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="confirm" aria-invalid />
      <Label htmlFor="confirm">I Confirm This Vehicle Has Passed Pre-Trip Inspection</Label>
    </div>
  ),
}
