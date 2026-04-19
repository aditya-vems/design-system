import type { Meta, StoryObj } from "@storybook/react"
import { Toaster } from "./sonner"
import { toast } from "sonner"
import { Button } from "@/components/inputs/button"

const meta: Meta<typeof Toaster> = {
  title: "Feedback/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("Route KCA 234B dispatched successfully.")}>
      Show Toast
    </Button>
  ),
}

export const ToastTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="default"
        onClick={() => toast.success("Pre-trip inspection passed. Vehicle cleared for dispatch.")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("KDA 781C GPS signal restored after a 12-minute outage.")}
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast.warning("Insurance for KDB 781C expires in 7 days. Renew promptly.")}
      >
        Warning
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast.error("KBZ 456A reported a critical engine fault. Remove from service.")}
      >
        Error
      </Button>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Driver Peter Kamau has been suspended.", {
          description: "License expired on 31 Mar 2026.",
          action: {
            label: "Undo",
            onClick: () => toast.success("Suspension reversed."),
          },
        })
      }
    >
      Suspend Driver
    </Button>
  ),
}

export const LoadingToast: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading("Syncing fleet data from GPS devices...")
        setTimeout(() => toast.success("Fleet data synced. 142 vehicles updated.", { id }), 3000)
      }}
    >
      Sync Fleet Data
    </Button>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast("Route Assigned", {
            description: "James Mwangi has been assigned the Nairobi — Mombasa route on KCA 234B.",
          })
        }
      >
        Assign Route
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Dispatch Failed", {
            description: "KDD 002F could not be dispatched — active maintenance record blocks assignment.",
          })
        }
      >
        Failed Dispatch
      </Button>
    </div>
  ),
}
