import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./textarea"

const meta: Meta<typeof Textarea> = {
  title: "Inputs/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Add maintenance notes for this vehicle...",
    className: "w-80",
  },
}

export const WithContent: Story = {
  render: () => (
    <Textarea
      className="w-80"
      defaultValue="Vehicle returned with front-left tyre showing abnormal wear. Recommend alignment check and rotation before next dispatch. Minor scratch noted on passenger rear door — logged for body repair queue."
    />
  ),
}

export const AutoResize: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <p className="text-muted-foreground">Grows to fit content automatically</p>
      <Textarea placeholder="Start typing a service note... The textarea will expand as you type more details about this vehicle's maintenance history." />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea
      className="w-80"
      disabled
      defaultValue="Pre-trip inspection completed on 12 Apr 2026. All systems nominal. Engine oil at recommended level. Tyres at correct pressure. Next scheduled service in 5,000 km."
    />
  ),
}

export const Invalid: Story = {
  render: () => (
    <Textarea
      className="w-80"
      aria-invalid
      placeholder="Incident description is required before submission..."
    />
  ),
}
