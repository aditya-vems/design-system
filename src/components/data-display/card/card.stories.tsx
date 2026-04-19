import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import { Badge } from "@/components/data-display/badge"
import { Button } from "@/components/inputs/button"

const STORY_SHELL =
  "mx-auto box-border flex min-w-0 w-[min(24rem,calc(100vw-2rem))] max-w-full shrink-0"

const meta: Meta = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Inbox Zero</CardTitle>
          <CardDescription>You&apos;re Caught Up for Now</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Next Sweep Runs at 09:00</p>
        </CardContent>
        <CardFooter>
          <Button type="button" variant="outline" className="w-full">
            Open Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Card size="sm" className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>Autosave</CardTitle>
          <CardDescription>Every 30 Seconds</CardDescription>
          <CardAction>
            <Badge variant="secondary">On</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="truncate text-muted-foreground text-xs">
            <span className="text-foreground">Notes.md</span>
            <span className="text-muted-foreground"> · Draft</span>
          </p>
        </CardContent>
        <CardFooter>
          <Button type="button" variant="outline" size="sm" className="w-full">
            Turn Off
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-chart-2 to-chart-4"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_0%_0%,rgba(255,255,255,0.35),transparent_55%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
            aria-hidden
          />
        </div>
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Design Systems Meetup</CardTitle>
          <CardDescription>
            A Practical Talk on Component APIs, Accessibility, and Shipping Faster
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">View Event</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
