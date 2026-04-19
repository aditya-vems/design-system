import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"

const meta: Meta<typeof Input> = {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Search vehicles by plate or VIN...",
    type: "text",
    className: "w-72",
  },
}

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Input type="text" placeholder="Driver Name" />
      <Input type="email" placeholder="driver@vems.io" />
      <Input type="password" placeholder="Enter Access Code" />
      <Input type="number" placeholder="Odometer Reading (km)" />
      <Input type="search" placeholder="Search Routes..." />
      <Input type="tel" placeholder="+254 700 000 000" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Input type="text" defaultValue="VH-2024-001" disabled />
      <Input type="text" placeholder="Fleet ID (Read Only)" disabled />
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Input type="text" defaultValue="ABC!#@" aria-invalid />
      <Input type="email" defaultValue="not-a-valid-email" aria-invalid />
      <Input type="number" defaultValue="-9999" aria-invalid />
    </div>
  ),
}

export const FileUpload: Story = {
  render: () => (
    <div className="w-72">
      <Input type="file" accept=".pdf,.jpg,.png" />
    </div>
  ),
}
