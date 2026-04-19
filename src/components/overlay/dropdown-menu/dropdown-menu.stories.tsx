import type { Meta, StoryObj } from "@storybook/react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./dropdown-menu"
import { Button } from "@/components/inputs/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MoreVerticalIcon,
  Edit01Icon,
  Delete01Icon,
  Route01Icon,
  UserAdd01Icon,
  Download01Icon,
  Fuel01Icon,
  Settings01Icon,
  Flag01Icon,
  Share01Icon,
} from "@hugeicons/core-free-icons"
import React from "react"

const meta: Meta<typeof DropdownMenu> = {
  title: "Overlay/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" variant="outline">
          <HugeiconsIcon icon={MoreVerticalIcon} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>View Details</DropdownMenuItem>
        <DropdownMenuItem>Edit Vehicle</DropdownMenuItem>
        <DropdownMenuItem>Assign Driver</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Remove From Fleet</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Vehicle Actions
          <HugeiconsIcon icon={MoreVerticalIcon} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>KDA 781C</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Edit01Icon} />
            Edit Vehicle
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Route01Icon} />
            Assign Route
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={UserAdd01Icon} />
            Assign Driver
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Fuel01Icon} />
            Log Fuel
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Download01Icon} />
            Export Record
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Share01Icon} />
            Share Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <HugeiconsIcon icon={Delete01Icon} />
          Remove From Fleet
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <HugeiconsIcon icon={Settings01Icon} />
          Settings
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Fleet Overview</DropdownMenuItem>
          <DropdownMenuItem>Driver Roster</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <HugeiconsIcon icon={Flag01Icon} />
            Reports
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Daily Summary</DropdownMenuItem>
            <DropdownMenuItem>Weekly Digest</DropdownMenuItem>
            <DropdownMenuItem>Monthly Report</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Custom Date Range</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Export Data</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Export as CSV</DropdownMenuItem>
            <DropdownMenuItem>Export as PDF</DropdownMenuItem>
            <DropdownMenuItem>Export as Excel</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HugeiconsIcon icon={Settings01Icon} />
          Account Settings
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithCheckboxes: Story = {
  render: () => {
    const [gps, setGps] = React.useState(true)
    const [alerts, setAlerts] = React.useState(true)
    const [reports, setReports] = React.useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <HugeiconsIcon icon={Settings01Icon} />
            Notifications
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Active Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={gps} onCheckedChange={setGps}>
            GPS Position Updates
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={alerts} onCheckedChange={setAlerts}>
            Breakdown Alerts
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={reports} onCheckedChange={setReports}>
            Weekly Reports
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const [view, setView] = React.useState("list")

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Mode</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Fleet View</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={view} onValueChange={setView}>
            <DropdownMenuRadioItem value="list">List View</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="grid">Grid View</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="map">Map View</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
