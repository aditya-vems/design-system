import type { Meta, StoryObj } from "@storybook/react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert-dialog"
import { Button } from "@/components/inputs/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlertCircleIcon,
  Delete01Icon,
  CheckmarkCircle01Icon,
  TruckIcon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof AlertDialog> = {
  title: "Feedback/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">End Route</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>End Active Route?</AlertDialogTitle>
          <AlertDialogDescription>
            This will mark the Nairobi — Mombasa route as complete and release KDA 781C back to the available pool.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>End Route</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <HugeiconsIcon icon={Delete01Icon} />
          Remove Vehicle
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove KBZ 456A From Fleet?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently remove KBZ 456A and all associated records, routes, and maintenance history. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Remove Vehicle</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Schedule Service</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <HugeiconsIcon icon={TruckIcon} strokeWidth={2} />
          </AlertDialogMedia>
          <AlertDialogTitle>Confirm Service Booking</AlertDialogTitle>
          <AlertDialogDescription>
            KDA 781C will be taken out of active rotation from 21 Apr 2026 to 23 Apr 2026 for the scheduled 10,000 km service.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm Booking</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">Mark As Available</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} />
          </AlertDialogMedia>
          <AlertDialogTitle>Mark Vehicle As Available?</AlertDialogTitle>
          <AlertDialogDescription>
            KDD 002F will be listed as available for assignment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
