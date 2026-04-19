import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "./textarea"
import { Button } from "@/components/inputs/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/inputs/field"

const meta: Meta<typeof Textarea> = {
  title: "Inputs/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Textarea placeholder="Type your message here." />
    </div>
  ),
}

export const FieldExample: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
        <FieldDescription>Enter your message below.</FieldDescription>
        <Textarea
          id="textarea-message"
          placeholder="Type your message here."
        />
      </Field>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field data-disabled>
        <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
        <Textarea
          id="textarea-disabled"
          placeholder="Type your message here."
          disabled
        />
      </Field>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field data-invalid>
        <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
        <Textarea
          id="textarea-invalid"
          placeholder="Type your message here."
          aria-invalid
        />
        <FieldDescription>Please enter a valid message.</FieldDescription>
      </Field>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </div>
    </div>
  ),
}
