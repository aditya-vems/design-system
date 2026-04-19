import type { Meta, StoryObj } from "@storybook/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/data-display/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import { HugeiconsIcon } from "@hugeicons/react"
import { CodeIcon, Layout01Icon } from "@hugeicons/core-free-icons"

const STORY_SHELL =
  "mx-auto box-border flex min-w-0 w-[min(24rem,calc(100vw-2rem))] max-w-full shrink-0"

const meta: Meta = {
  title: "Data Display/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Tabs defaultValue="overview" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                View your key metrics and recent project activity. Track progress across all your
                active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends and identify growth
                opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in multiple formats for
                analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your experience to fit your
                needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const Line: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Tabs defaultValue="overview" className="w-full max-w-md">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-md">
        <TabsList className="w-36">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Tabs defaultValue="home" className="w-full max-w-xs">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Tabs defaultValue="preview" className="w-full max-w-xs">
        <TabsList>
          <TabsTrigger value="preview">
            <HugeiconsIcon icon={Layout01Icon} strokeWidth={2} />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  ),
}
