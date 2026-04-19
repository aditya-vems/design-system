import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "./alert"
import { Button } from "@/components/inputs/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  AlertCircleIcon,
  InformationCircleIcon,
  Alert02Icon,
  Fuel01Icon,
} from "@hugeicons/core-free-icons"

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Scheduled Maintenance Reminder</AlertTitle>
      <AlertDescription>
        KDA 781C is due for a 10,000 km service. Book an appointment before the next dispatch.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertTitle>Vehicle Breakdown Reported</AlertTitle>
      <AlertDescription>
        KBZ 456A has broken down on the Nairobi — Mombasa route near Mtito Andei. Driver has been notified. Dispatch recovery.
      </AlertDescription>
    </Alert>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert>
        <HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={2} />
        <AlertTitle>Pre-Trip Inspection Passed</AlertTitle>
        <AlertDescription>KCA 234B has passed all pre-trip checks and is cleared for dispatch.</AlertDescription>
      </Alert>
      <Alert>
        <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
        <AlertTitle>GPS Signal Lost</AlertTitle>
        <AlertDescription>KDD 002F has not sent a location update in over 15 minutes. Check device connectivity.</AlertDescription>
      </Alert>
      <Alert>
        <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
        <AlertTitle>Insurance Expiring Soon</AlertTitle>
        <AlertDescription>Third-party insurance for KDB 781C expires in 7 days. Renew before 26 Apr 2026.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
        <AlertTitle>Critical: Engine Fault Detected</AlertTitle>
        <AlertDescription>Onboard diagnostics report a critical engine fault on KCF 119E. Remove from service immediately.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert>
        <HugeiconsIcon icon={Fuel01Icon} strokeWidth={2} />
        <AlertTitle>Low Fuel Warning</AlertTitle>
        <AlertDescription>KDA 781C is below 15% fuel capacity. Refuel before the next long-distance route.</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">Assign Fuel Stop</Button>
        </AlertAction>
      </Alert>
      <Alert variant="destructive">
        <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
        <AlertTitle>Driver License Expired</AlertTitle>
        <AlertDescription>Peter Kamau's driving license expired on 31 Mar 2026. Suspend assignments immediately.</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="destructive">Suspend Driver</Button>
        </AlertAction>
      </Alert>
    </div>
  ),
}
