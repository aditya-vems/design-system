import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "./label"
import { Button } from "@/components/inputs/button"
import { Checkbox } from "@/components/inputs/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/inputs/field"
import { Input } from "@/components/inputs/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/inputs/select"
import { Textarea } from "@/components/inputs/textarea"

const meta: Meta<typeof Label> = {
  title: "Inputs/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="mx-auto w-fit">
      <div className="flex gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  ),
}

export const FieldDemo: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-card-name">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-card-name"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-card-number">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-card-number"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month">Month</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Array.from({ length: 12 }, (_, i) => {
                          const v = String(i + 1).padStart(2, "0")
                          return (
                            <SelectItem key={v} value={v}>
                              {v}
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-exp-year">Year</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-year">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {["2024", "2025", "2026", "2027", "2028", "2029"].map(
                          (y) => (
                            <SelectItem key={y} value={y}>
                              {y}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-cvv">CVV</FieldLabel>
                  <Input id="checkout-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox id="checkout-same-as-shipping" defaultChecked />
                <FieldLabel
                  htmlFor="checkout-same-as-shipping"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-comments">Comments</FieldLabel>
                <Textarea
                  id="checkout-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  ),
}
