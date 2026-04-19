import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Label } from "@/components/inputs/label"

const meta: Meta<typeof RadioGroup> = {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="medium">
      {[
        { value: "low", label: "Low Priority" },
        { value: "medium", label: "Medium Priority" },
        { value: "high", label: "High Priority" },
        { value: "critical", label: "Critical — Immediate Action" },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`priority-${value}`} />
          <Label htmlFor={`priority-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const MaintenanceType: Story = {
  render: () => (
    <RadioGroup defaultValue="scheduled">
      <p className="text-muted-foreground mb-0.5">Maintenance Type</p>
      {[
        { value: "scheduled", label: "Scheduled Service" },
        { value: "corrective", label: "Corrective Repair" },
        { value: "preventive", label: "Preventive Maintenance" },
        { value: "emergency", label: "Emergency Breakdown" },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`type-${value}`} />
          <Label htmlFor={`type-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const ReportFrequency: Story = {
  render: () => (
    <RadioGroup defaultValue="weekly">
      <p className="text-muted-foreground mb-0.5">Report Frequency</p>
      {[
        { value: "daily", label: "Daily Summary" },
        { value: "weekly", label: "Weekly Digest" },
        { value: "monthly", label: "Monthly Report" },
        { value: "none", label: "No Automatic Reports" },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`freq-${value}`} />
          <Label htmlFor={`freq-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="weekly" disabled>
      {[
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
      ].map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={`disabled-${value}`} />
          <Label htmlFor={`disabled-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
}
