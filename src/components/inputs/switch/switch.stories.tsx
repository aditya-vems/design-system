import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "./switch"
import { Label } from "@/components/inputs/label"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/inputs/field"

const meta: Meta<typeof Switch> = {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
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

export const Demo: Story = {
  render: () => (
    <div className="mx-auto w-fit">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  ),
}

export const Description: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode">
            Share across devices
          </FieldLabel>
          <FieldDescription>
            Focus is shared across devices, and turns off when you leave the
            app.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode" />
      </Field>
    </div>
  ),
}

export const ChoiceCard: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <FieldGroup>
        <FieldLabel htmlFor="switch-share">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Share across devices</FieldTitle>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the
                app.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-share" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="switch-notifications">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                Receive notifications when focus mode is enabled or disabled.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-notifications" defaultChecked />
          </Field>
        </FieldLabel>
      </FieldGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto w-fit">
      <Field orientation="horizontal" data-disabled>
        <Switch id="switch-disabled-unchecked" disabled />
        <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
      </Field>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field orientation="horizontal" data-invalid>
        <FieldContent>
          <FieldLabel htmlFor="switch-terms">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            You must accept the terms and conditions to continue.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-terms" aria-invalid />
      </Field>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-[10rem]">
      <FieldGroup>
        <Field orientation="horizontal">
          <Switch id="switch-size-sm" size="sm" />
          <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Switch id="switch-size-default" size="default" />
          <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
        </Field>
      </FieldGroup>
    </div>
  ),
}
