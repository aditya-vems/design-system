import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-7 w-48" />,
}

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-8 rounded-full" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-7 w-20 rounded-md" />
    </div>
  ),
}

export const VehicleCardSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72 rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-36" />
        </div>
        <Skeleton className="size-6 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-28" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-8" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-7 w-28 rounded-md" />
        <Skeleton className="h-7 w-24 rounded-md" />
      </div>
    </div>
  ),
}

export const TableRowsSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-0 w-[520px] divide-y divide-border rounded-md border border-border">
      <div className="flex items-center gap-4 px-4 py-2.5">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-3 w-24 ml-auto" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-2.5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-20 ml-auto" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      ))}
    </div>
  ),
}

export const DriverProfileSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full shrink-0" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/6" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-7 flex-1 rounded-md" />
        <Skeleton className="h-7 flex-1 rounded-md" />
      </div>
    </div>
  ),
}
