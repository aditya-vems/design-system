import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./input"
import { Button } from "@/components/inputs/button"
import { Badge } from "@/components/data-display/badge"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/inputs/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/inputs/select"

const meta: Meta<typeof Input> = {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
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

export const Demo: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
        <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
        <FieldDescription>
          Your API key is encrypted and stored securely.
        </FieldDescription>
      </Field>
    </div>
  ),
}

export const Basic: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Input placeholder="Enter text" />
    </div>
  ),
}

export const FieldExample: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
        <Input
          id="input-field-username"
          type="text"
          placeholder="Enter your username"
        />
        <FieldDescription>
          Choose a unique username for your account.
        </FieldDescription>
      </Field>
    </div>
  ),
}

export const FieldGroupExample: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We'll send updates to this address.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field data-disabled>
        <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
        <Input
          id="input-demo-disabled"
          type="email"
          placeholder="Email"
          disabled
        />
        <FieldDescription>This field is currently disabled.</FieldDescription>
      </Field>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field data-invalid>
        <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
        <Input id="input-invalid" placeholder="Error" aria-invalid />
        <FieldDescription>
          This field contains validation errors.
        </FieldDescription>
      </Field>
    </div>
  ),
}

export const File: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="picture">Picture</FieldLabel>
        <Input id="picture" type="file" />
        <FieldDescription>Select a picture to upload.</FieldDescription>
      </Field>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md">
      <Field orientation="horizontal">
        <Input type="search" placeholder="Search..." />
        <Button>Search</Button>
      </Field>
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <Input id="first-name" placeholder="Jordan" />
        </Field>
        <Field>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <Input id="last-name" placeholder="Lee" />
        </Field>
      </div>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-required">
          Required Field <span className="text-destructive">*</span>
        </FieldLabel>
        <Input
          id="input-required"
          placeholder="This field is required"
          required
        />
        <FieldDescription>This field must be filled out.</FieldDescription>
      </Field>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-badge">
          Webhook URL{" "}
          <Badge variant="secondary" className="ml-auto">
            Beta
          </Badge>
        </FieldLabel>
        <Input
          id="input-badge"
          type="url"
          placeholder="https://api.example.com/webhook"
        />
      </Field>
    </div>
  ),
}

export const Form: Story = {
  render: () => (
    <form className="mx-auto w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
            We'll never share your email with anyone.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input
              id="form-phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  ),
}
