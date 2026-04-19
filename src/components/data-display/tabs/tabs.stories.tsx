import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"
import { Badge } from "@/components/data-display/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  TruckIcon,
  UserIcon,
  Route01Icon,
  Settings01Icon,
  AlertCircleIcon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof Tabs> = {
  title: "Data Display/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="routes">Routes</TabsTrigger>
        <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        <TabsTrigger value="drivers">Drivers</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-muted-foreground py-4">Fleet overview content goes here.</p>
      </TabsContent>
      <TabsContent value="routes">
        <p className="text-muted-foreground py-4">Active and scheduled routes.</p>
      </TabsContent>
      <TabsContent value="maintenance">
        <p className="text-muted-foreground py-4">Upcoming and overdue service records.</p>
      </TabsContent>
      <TabsContent value="drivers">
        <p className="text-muted-foreground py-4">Driver roster and assignments.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-80">
      <TabsList variant="line">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="inactive">Inactive</TabsTrigger>
        <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p className="text-muted-foreground py-4">38 vehicles currently active.</p>
      </TabsContent>
      <TabsContent value="inactive">
        <p className="text-muted-foreground py-4">14 vehicles inactive or unassigned.</p>
      </TabsContent>
      <TabsContent value="maintenance">
        <p className="text-muted-foreground py-4">6 vehicles currently in service.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="vehicles" className="w-96">
      <TabsList>
        <TabsTrigger value="vehicles">
          <HugeiconsIcon icon={TruckIcon} />
          Vehicles
        </TabsTrigger>
        <TabsTrigger value="routes">
          <HugeiconsIcon icon={Route01Icon} />
          Routes
        </TabsTrigger>
        <TabsTrigger value="drivers">
          <HugeiconsIcon icon={UserIcon} />
          Drivers
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <HugeiconsIcon icon={AlertCircleIcon} />
          Alerts
          <Badge variant="destructive" className="ml-1">3</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="vehicles">
        <p className="text-muted-foreground py-4">142 vehicles in fleet.</p>
      </TabsContent>
      <TabsContent value="routes">
        <p className="text-muted-foreground py-4">38 routes currently active.</p>
      </TabsContent>
      <TabsContent value="drivers">
        <p className="text-muted-foreground py-4">87 registered drivers.</p>
      </TabsContent>
      <TabsContent value="alerts">
        <p className="text-muted-foreground py-4">3 critical alerts require attention.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="details" orientation="vertical" className="w-96">
      <TabsList className="w-36">
        <TabsTrigger value="details">Vehicle Details</TabsTrigger>
        <TabsTrigger value="history">Service History</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="px-4">
        <p className="font-medium mb-2">KDA 781C</p>
        <div className="flex flex-col gap-1.5 text-muted-foreground">
          <span>Model: Toyota Hilux 2022</span>
          <span>Engine: 2.8L Diesel</span>
          <span>Odometer: 48,200 km</span>
          <span>VIN: HMNBE1V6XLB3XXXXX</span>
        </div>
      </TabsContent>
      <TabsContent value="history" className="px-4">
        <p className="text-muted-foreground">Last service: 14 Jan 2026 at 40,000 km.</p>
      </TabsContent>
      <TabsContent value="documents" className="px-4">
        <p className="text-muted-foreground">Insurance, logbook, and inspection certificates.</p>
      </TabsContent>
      <TabsContent value="settings" className="px-4">
        <p className="text-muted-foreground">Vehicle-specific tracking and alert settings.</p>
      </TabsContent>
    </Tabs>
  ),
}
