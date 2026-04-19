import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "./label"
import { Input } from "@/components/inputs/input"

const meta: Meta<typeof Label> = {
  title: "Inputs/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Vehicle Registration Plate",
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-64">
      <Label htmlFor="plate">Registration Plate</Label>
      <Input id="plate" type="text" placeholder="E.g. KCA 123A" />
    </div>
  ),
}

export const RequiredField: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-64">
      <Label htmlFor="vin">
        VIN Number <span className="text-destructive">*</span>
      </Label>
      <Input id="vin" type="text" placeholder="17-Character VIN" />
    </div>
  ),
}

export const OptionalField: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-64">
      <Label htmlFor="notes" className="flex items-center gap-1.5">
        Service Notes
        <span className="text-muted-foreground">(Optional)</span>
      </Label>
      <Input id="notes" type="text" placeholder="Add any relevant notes..." />
    </div>
  ),
}

export const FormFields: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="driver-name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input id="driver-name" type="text" placeholder="E.g. James Mwangi" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="license">
          License Number <span className="text-destructive">*</span>
        </Label>
        <Input id="license" type="text" placeholder="DL-XXXX-XXXX" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact" className="flex items-center gap-1.5">
          Phone Number
          <span className="text-muted-foreground">(Optional)</span>
        </Label>
        <Input id="contact" type="tel" placeholder="+254 700 000 000" />
      </div>
    </div>
  ),
}
