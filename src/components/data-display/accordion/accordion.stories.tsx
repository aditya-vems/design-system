import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"

const meta: Meta<typeof Accordion> = {
  title: "Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>What Is VEMS?</AccordionTrigger>
        <AccordionContent>
          VEMS is a vehicle and fleet management platform for tracking assets, managing drivers, and optimising routes across your organisation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How Do I Add A Vehicle?</AccordionTrigger>
        <AccordionContent>
          Navigate to Fleet → Vehicles and click <strong>Add Vehicle</strong>. Enter the registration plate, VIN, make, model, and assign a primary driver.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I Track Vehicles In Real Time?</AccordionTrigger>
        <AccordionContent>
          Yes. Enable GPS Tracking in Vehicle Settings. Live location updates are available every 30 seconds when the vehicle is on a route.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" className="w-80" defaultValue={["oil", "tyres"]}>
      <AccordionItem value="oil">
        <AccordionTrigger>Oil &amp; Fluids</AccordionTrigger>
        <AccordionContent>
          Engine oil, coolant, brake fluid, and power steering fluid should be checked every 5,000 km or monthly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="tyres">
        <AccordionTrigger>Tyre Maintenance</AccordionTrigger>
        <AccordionContent>
          Check tyre pressure weekly. Rotate every 10,000 km. Replace when tread depth falls below 1.6 mm.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="brakes">
        <AccordionTrigger>Brake System</AccordionTrigger>
        <AccordionContent>
          Inspect brake pads and discs every 20,000 km. Replace brake fluid every 2 years regardless of mileage.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="electrical">
        <AccordionTrigger>Electrical &amp; Battery</AccordionTrigger>
        <AccordionContent>
          Test battery voltage every 6 months. Check all lighting, indicators, and the GPS unit at each service interval.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const MaintenanceSchedule: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      {[
        {
          value: "5k",
          trigger: "5,000 km — Minor Service",
          content: "Engine oil and filter change. Check all fluid levels. Inspect tyres and tyre pressure. Clean air filter.",
        },
        {
          value: "10k",
          trigger: "10,000 km — Intermediate Service",
          content: "All minor service items plus tyre rotation, brake inspection, cabin air filter replacement, and lubrication of all moving parts.",
        },
        {
          value: "20k",
          trigger: "20,000 km — Major Service",
          content: "All intermediate items plus fuel filter, spark plugs (petrol), timing belt inspection, differential oil, and a full electrical systems check.",
        },
        {
          value: "50k",
          trigger: "50,000 km — Full Overhaul",
          content: "Comprehensive mechanical inspection, transmission service, coolant flush, brake fluid replacement, and GPS unit calibration.",
        },
      ].map(({ value, trigger, content }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
