import type { Meta, StoryObj } from "@storybook/react"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table"
import { Badge } from "@/components/data-display/badge"
import { Button } from "@/components/inputs/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { MoreVerticalIcon } from "@hugeicons/core-free-icons"

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

const vehicles = [
  { plate: "KCA 234B", model: "Toyota Hilux", driver: "James Mwangi", route: "Nairobi — Mombasa", status: "On Route", variant: "default" as const },
  { plate: "KDB 781C", model: "Ford Ranger", driver: "Sarah Ochieng", route: "—", status: "Available", variant: "secondary" as const },
  { plate: "KDD 002F", model: "Isuzu NPR", driver: "Peter Kamau", route: "CBD — Karen", status: "Maintenance", variant: "outline" as const },
  { plate: "KBZ 456A", model: "Toyota Dyna", driver: "—", route: "—", status: "Breakdown", variant: "destructive" as const },
  { plate: "KCF 119E", model: "Mitsubishi Canter", driver: "Ahmed Hassan", route: "Nairobi — Nakuru", status: "On Route", variant: "default" as const },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Plate</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Driver</TableHead>
          <TableHead>Route</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {vehicles.map((v) => (
          <TableRow key={v.plate}>
            <TableCell className="font-mono">{v.plate}</TableCell>
            <TableCell>{v.model}</TableCell>
            <TableCell>{v.driver}</TableCell>
            <TableCell>{v.route}</TableCell>
            <TableCell>
              <Badge variant={v.variant}>{v.status}</Badge>
            </TableCell>
            <TableCell>
              <Button size="icon-xs" variant="ghost">
                <HugeiconsIcon icon={MoreVerticalIcon} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>Fleet status as of 19 Apr 2026</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Plate</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vehicles.slice(0, 3).map((v) => (
          <TableRow key={v.plate}>
            <TableCell className="font-mono">{v.plate}</TableCell>
            <TableCell>{v.model}</TableCell>
            <TableCell>
              <Badge variant={v.variant}>{v.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vehicle</TableHead>
          <TableHead className="text-right">Distance (km)</TableHead>
          <TableHead className="text-right">Fuel Used (L)</TableHead>
          <TableHead className="text-right">Cost (KES)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { vehicle: "KCA 234B", distance: 450, fuel: 42, cost: 5_040 },
          { vehicle: "KDB 781C", distance: 280, fuel: 26, cost: 3_120 },
          { vehicle: "KCF 119E", distance: 600, fuel: 58, cost: 6_960 },
        ].map((row) => (
          <TableRow key={row.vehicle}>
            <TableCell className="font-mono">{row.vehicle}</TableCell>
            <TableCell className="text-right">{row.distance.toLocaleString()}</TableCell>
            <TableCell className="text-right">{row.fuel}</TableCell>
            <TableCell className="text-right">{row.cost.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">1,330</TableCell>
          <TableCell className="text-right">126</TableCell>
          <TableCell className="text-right">15,120</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
