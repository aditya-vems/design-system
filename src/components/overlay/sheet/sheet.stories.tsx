import type { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "./sheet"
import { Button } from "@/components/inputs/button"
import { Input } from "@/components/inputs/input"
import { Label } from "@/components/inputs/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/inputs/select"
import { Separator } from "@/components/layout/separator"
import { Badge } from "@/components/data-display/badge"

const meta: Meta<typeof Sheet> = {
  title: "Overlay/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Vehicle Panel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>KDA 781C — Toyota Hilux</SheetTitle>
          <SheetDescription>Vehicle details and current assignment status.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-6">
          {[
            { label: "Registration", value: "KDA 781C" },
            { label: "Driver", value: "James Mwangi" },
            { label: "Route", value: "Nairobi — Mombasa" },
            { label: "Odometer", value: "48,200 km" },
            { label: "Fuel Level", value: "68%" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-muted-foreground">{label}</span>
              <span>{value}</span>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Status</span>
            <Badge variant="default">On Route</Badge>
          </div>
        </div>
        <SheetFooter>
          <Button>Edit Vehicle</Button>
          <Button variant="outline">View Full Profile</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const AddDriver: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Onboard Driver</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Onboard New Driver</SheetTitle>
          <SheetDescription>Add a driver to the system and assign their initial vehicle.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-6">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="full-name">Full Name <span className="text-destructive">*</span></Label>
            <Input id="full-name" placeholder="E.g. Grace Wambua" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="license-no">License Number <span className="text-destructive">*</span></Label>
            <Input id="license-no" placeholder="DL-XXXX-XXXX" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+254 700 000 000" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="assign-vehicle">Assign Vehicle</Label>
            <Select>
              <SelectTrigger id="assign-vehicle" className="w-full">
                <SelectValue placeholder="Select Vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kdb">KDB 781C — Ford Ranger</SelectItem>
                <SelectItem value="kca">KCA 234B — Toyota Hilux</SelectItem>
                <SelectItem value="kcf">KCF 119E — Mitsubishi Canter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <Button>Add Driver</Button>
          <Button variant="outline">Cancel</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      {(["left", "right", "top", "bottom"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="capitalize">{side} Sheet</SheetTitle>
              <SheetDescription>Content slides in from the {side}.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
}
