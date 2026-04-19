import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"
import { Spinner } from "@/components/feedback/spinner"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

/** Same fixed shell as Accordion / Avatar stories */
const STORY_SHELL =
  "mx-auto box-border flex min-w-0 w-[min(24rem,calc(100vw-2rem))] max-w-full shrink-0"

const meta: Meta = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <div className="flex w-full min-w-0 flex-wrap justify-center gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <div className="flex min-w-0 flex-wrap justify-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </div>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <div className="flex min-w-0 flex-wrap justify-center gap-2">
        <Badge variant="outline">
          New
          <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} data-icon="inline-end" />
        </Badge>
      </div>
    </div>
  ),
}

export const WithSpinner: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <div className="flex min-w-0 flex-wrap justify-center gap-2">
        <Badge variant="destructive">
          <Spinner data-icon="inline-start" className="size-2.5 text-destructive" />
          Remove
        </Badge>
        <Badge variant="secondary">
          Processing
          <Spinner data-icon="inline-end" className="size-2.5" />
        </Badge>
      </div>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <div className="flex min-w-0 flex-wrap justify-center gap-2">
        <Badge asChild>
          <a href="#badge-profile">Profile</a>
        </Badge>
        <Badge asChild variant="secondary">
          <a href="#badge-settings">Settings</a>
        </Badge>
      </div>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <div className="flex min-w-0 flex-wrap justify-center gap-2">
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Blue
        </Badge>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          Green
        </Badge>
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">Sky</Badge>
        <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Purple
        </Badge>
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">Red</Badge>
      </div>
    </div>
  ),
}
