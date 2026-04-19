import type { Meta, StoryObj } from "@storybook/react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./dialog"
import { Button } from "@/components/inputs/button"
import { Input } from "@/components/inputs/input"
import { Label } from "@/components/inputs/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/inputs/select"

const meta: Meta<typeof Dialog> = {
  title: "Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Vehicle Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>KDA 781C — Toyota Hilux</DialogTitle>
          <DialogDescription>
            Full vehicle profile including registration, assignment, and operational status.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Registration</span>
            <span className="font-mono">KDA 781C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Model</span>
            <span>Toyota Hilux 2022</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Driver</span>
            <span>James Mwangi</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Odometer</span>
            <span>48,200 km</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Next Service</span>
            <span>50,000 km</span>
          </div>
        </div>
        <DialogFooter showCloseButton>
          <Button>Edit Vehicle</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AddVehicle: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Vehicle</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Vehicle</DialogTitle>
          <DialogDescription>
            Enter the vehicle registration and assign it to the fleet.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="reg-plate">
              Registration Plate <span className="text-destructive">*</span>
            </Label>
            <Input id="reg-plate" placeholder="E.g. KCA 234B" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="vehicle-type">Vehicle Type</Label>
            <Select>
              <SelectTrigger id="vehicle-type" className="w-full">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="pickup">Pickup Truck</SelectItem>
                <SelectItem value="van">Cargo Van</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="vin">VIN Number</Label>
            <Input id="vin" placeholder="17-Character VIN" />
          </div>
        </div>
        <DialogFooter showCloseButton>
          <Button>Add To Fleet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Session Timeout Warning</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Session Expiring Soon</DialogTitle>
          <DialogDescription>
            Your session will expire in 5 minutes due to inactivity. Would you like to stay signed in?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Sign Out</Button>
          <Button>Stay Signed In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
