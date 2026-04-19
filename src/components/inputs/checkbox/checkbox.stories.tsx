import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/inputs/field"
import { Label } from "@/components/inputs/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/data-display/table"

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="terms-checkbox-2"
            name="terms-checkbox-2"
            defaultChecked
          />
          <FieldContent>
            <FieldLabel htmlFor="terms-checkbox-2">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              By clicking this checkbox, you agree to the terms.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
          <FieldLabel htmlFor="toggle-checkbox">
            Enable notifications
          </FieldLabel>
        </Field>
        <FieldLabel>
          <Field orientation="horizontal">
            <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                You can enable or disable notifications at any time.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </div>
  ),
}

export const Controlled: Story = {
  render: function ControlledRender() {
    const [checked, setChecked] = React.useState(false)
    return (
      <div className="mx-auto w-fit">
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
        />
      </div>
    )
  },
}

export const Basic: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-56">
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            Accept terms and conditions
          </FieldLabel>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const Description: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-72">
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox
            id="terms-checkbox-desc"
            name="terms-checkbox-desc"
            defaultChecked
          />
          <FieldContent>
            <FieldLabel htmlFor="terms-checkbox-desc">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              By clicking this checkbox, you agree to the terms and conditions.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-56">
      <FieldGroup>
        <Field orientation="horizontal" data-disabled>
          <Checkbox
            id="toggle-checkbox-disabled"
            name="toggle-checkbox-disabled"
            disabled
          />
          <FieldLabel htmlFor="toggle-checkbox-disabled">
            Enable notifications
          </FieldLabel>
        </Field>
      </FieldGroup>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm">
      <FieldSet>
        <FieldLegend variant="label">
          Show these items on the desktop:
        </FieldLegend>
        <FieldDescription>
          Select the items you want to show on the desktop.
        </FieldDescription>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-hard-disks"
              name="finder-pref-hard-disks"
              defaultChecked
            />
            <FieldLabel
              htmlFor="finder-pref-hard-disks"
              className="font-normal"
            >
              Hard disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-external-disks"
              name="finder-pref-external-disks"
              defaultChecked
            />
            <FieldLabel
              htmlFor="finder-pref-external-disks"
              className="font-normal"
            >
              External disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-cds-dvds"
              name="finder-pref-cds-dvds"
            />
            <FieldLabel
              htmlFor="finder-pref-cds-dvds"
              className="font-normal"
            >
              CDs, DVDs, and iPods
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="finder-pref-connected-servers"
              name="finder-pref-connected-servers"
            />
            <FieldLabel
              htmlFor="finder-pref-connected-servers"
              className="font-normal"
            >
              Connected servers
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-56">
      <FieldGroup>
        <Field orientation="horizontal" data-invalid>
          <Checkbox
            id="terms-checkbox-invalid"
            name="terms-checkbox-invalid"
            aria-invalid
          />
          <FieldLabel htmlFor="terms-checkbox-invalid">
            Accept terms and conditions
          </FieldLabel>
        </Field>
      </FieldGroup>
    </div>
  ),
}

const tableData = [
  { id: "1", name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin" },
  { id: "2", name: "Marcus Rodriguez", email: "marcus.rodriguez@example.com", role: "User" },
  { id: "3", name: "Priya Patel", email: "priya.patel@example.com", role: "User" },
  { id: "4", name: "David Kim", email: "david.kim@example.com", role: "Editor" },
]

export const InTable: Story = {
  render: function InTableRender() {
    const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
      new Set(["1"])
    )

    const selectAll = selectedRows.size === tableData.length

    const handleSelectAll = (checked: boolean | "indeterminate") => {
      if (checked === true) {
        setSelectedRows(new Set(tableData.map((row) => row.id)))
      } else {
        setSelectedRows(new Set())
      }
    }

    const handleSelectRow = (id: string, checked: boolean | "indeterminate") => {
      const newSelected = new Set(selectedRows)
      if (checked === true) {
        newSelected.add(id)
      } else {
        newSelected.delete(id)
      }
      setSelectedRows(newSelected)
    }

    return (
      <div className="mx-auto w-full max-w-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">
                <Checkbox
                  id="select-all-checkbox"
                  name="select-all-checkbox"
                  checked={selectAll}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                data-state={selectedRows.has(row.id) ? "selected" : undefined}
              >
                <TableCell>
                  <Checkbox
                    id={`row-${row.id}-checkbox`}
                    name={`row-${row.id}-checkbox`}
                    checked={selectedRows.has(row.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(row.id, checked)
                    }
                  />
                </TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  },
}
