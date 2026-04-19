import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./card"
import { Button } from "@/components/inputs/button"
import { Badge } from "@/components/data-display/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  TruckIcon,
  Route01Icon,
  Fuel01Icon,
  AlertCircleIcon,
  MoreVerticalIcon,
  Edit01Icon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Vehicle Summary</CardTitle>
        <CardDescription>Active fleet count and operational status overview.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">142</p>
        <p className="text-muted-foreground">Vehicles in fleet</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">View All Vehicles</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>KDA 781C — Toyota Hilux</CardTitle>
        <CardDescription>Nairobi — Mombasa Route</CardDescription>
        <CardAction>
          <Button size="icon-sm" variant="ghost">
            <HugeiconsIcon icon={MoreVerticalIcon} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Status</span>
          <Badge variant="default">On Route</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Driver</span>
          <span>James Mwangi</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Fuel Level</span>
          <span>68%</span>
        </div>
      </CardContent>
    </Card>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-start">
      <Card size="default" className="w-60">
        <CardHeader>
          <CardTitle>Default Size</CardTitle>
          <CardDescription>Standard card padding and spacing.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Content area</p>
        </CardContent>
      </Card>
      <Card size="sm" className="w-60">
        <CardHeader>
          <CardTitle>Small Size</CardTitle>
          <CardDescription>Compact card with reduced spacing.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Content area</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const StatsRow: Story = {
  render: () => (
    <div className="flex gap-3">
      {[
        { icon: TruckIcon, label: "Total Vehicles", value: "142", change: "+3 this week" },
        { icon: Route01Icon, label: "Active Routes", value: "38", change: "12 in transit" },
        { icon: Fuel01Icon, label: "Avg Fuel Level", value: "71%", change: "↑ 4% vs last week" },
        { icon: AlertCircleIcon, label: "Alerts", value: "5", change: "2 require action" },
      ].map(({ icon, label, value, change }) => (
        <Card key={label} size="sm" className="w-44">
          <CardHeader>
            <CardAction>
              <HugeiconsIcon icon={icon} className="text-muted-foreground size-4" />
            </CardAction>
            <CardDescription>{label}</CardDescription>
            <CardTitle className="text-xl font-semibold">{value}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Schedule Maintenance</CardTitle>
        <CardDescription>
          KBZ 456A — Ford Ranger is due for a 10,000 km service. Last serviced on 14 Jan 2026.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-2">
          <HugeiconsIcon icon={AlertCircleIcon} className="text-destructive size-4 shrink-0" />
          <span className="text-muted-foreground">Service overdue by 800 km</span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Schedule Service</Button>
        <Button variant="outline">Remind Later</Button>
      </CardFooter>
    </Card>
  ),
}
