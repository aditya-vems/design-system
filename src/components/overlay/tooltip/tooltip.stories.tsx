import type { Meta, StoryObj } from "@storybook/react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/inputs/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon-sm">
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-6 p-8">
      <div />
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Top
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Top side</TooltipContent>
        </Tooltip>
      </div>
      <div />
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Left side</TooltipContent>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Default
            </Button>
          </TooltipTrigger>
          <TooltipContent>Default placement</TooltipContent>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Right side</TooltipContent>
        </Tooltip>
      </div>
      <div />
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Bottom
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Bottom side</TooltipContent>
        </Tooltip>
      </div>
      <div />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex">
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>You cannot use this action right now.</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithShortcut: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Save</Button>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2">
          Save document
          <kbd className="rounded border border-background/30 bg-background/15 px-1 font-mono text-[0.625rem]">
            ⌘S
          </kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}
