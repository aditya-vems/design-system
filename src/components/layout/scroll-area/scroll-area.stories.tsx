import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea, ScrollBar } from "./scroll-area"
import { Badge } from "@/components/data-display/badge"
import { Separator } from "@/components/layout/separator"

const meta: Meta<typeof ScrollArea> = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

const vehicles = [
  { plate: "KCA 234B", model: "Toyota Hilux", status: "On Route", variant: "default" as const },
  { plate: "KDB 781C", model: "Ford Ranger", status: "Available", variant: "secondary" as const },
  { plate: "KDD 002F", model: "Isuzu NPR", status: "Maintenance", variant: "outline" as const },
  { plate: "KBZ 456A", model: "Toyota Dyna", status: "Breakdown", variant: "destructive" as const },
  { plate: "KCF 119E", model: "Mitsubishi Canter", status: "On Route", variant: "default" as const },
  { plate: "KCG 331H", model: "Nissan Navara", status: "Available", variant: "secondary" as const },
  { plate: "KCH 882J", model: "Toyota Land Cruiser", status: "On Route", variant: "default" as const },
  { plate: "KCI 445K", model: "Isuzu ELF", status: "Maintenance", variant: "outline" as const },
  { plate: "KCJ 009L", model: "Mitsubishi Rosa", status: "Available", variant: "secondary" as const },
  { plate: "KCK 721M", model: "Toyota HiAce", status: "On Route", variant: "default" as const },
  { plate: "KCL 358N", model: "Ford Transit", status: "Available", variant: "secondary" as const },
  { plate: "KCM 194P", model: "Isuzu Forward", status: "Breakdown", variant: "destructive" as const },
]

export const VerticalList: Story = {
  render: () => (
    <ScrollArea className="h-64 w-72 rounded-md border">
      <div className="flex flex-col divide-y divide-border">
        {vehicles.map((v) => (
          <div key={v.plate} className="flex items-center justify-between px-4 py-2.5">
            <div>
              <p className="font-mono text-sm">{v.plate}</p>
              <p className="text-muted-foreground">{v.model}</p>
            </div>
            <Badge variant={v.variant}>{v.status}</Badge>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-80 rounded-md border">
      <div className="flex gap-3 p-4 w-max">
        {[
          { zone: "Nairobi CBD", count: 24, color: "bg-primary" },
          { zone: "Westlands", count: 18, color: "bg-primary/80" },
          { zone: "Karen", count: 12, color: "bg-primary/60" },
          { zone: "Eastleigh", count: 9, color: "bg-primary/40" },
          { zone: "Mombasa Road", count: 31, color: "bg-primary" },
          { zone: "Ngong Road", count: 7, color: "bg-primary/30" },
          { zone: "Thika Road", count: 19, color: "bg-primary/70" },
        ].map(({ zone, count, color }) => (
          <div key={zone} className="flex flex-col items-center gap-2 w-24 shrink-0">
            <div className={`flex items-end justify-center w-full rounded-t-sm ${color}`} style={{ height: `${count * 3}px` }} />
            <p className="text-center text-muted-foreground leading-tight">{zone}</p>
            <p className="font-medium">{count}</p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const RouteLog: Story = {
  render: () => (
    <ScrollArea className="h-72 w-80 rounded-md border">
      <div className="p-4">
        <p className="font-medium mb-3">Route Log — KDA 781C</p>
        {[
          { date: "19 Apr 2026", route: "Nairobi — Mombasa", driver: "James Mwangi", km: 450 },
          { date: "17 Apr 2026", route: "Nairobi — Nakuru", driver: "James Mwangi", km: 156 },
          { date: "15 Apr 2026", route: "CBD — Westlands", driver: "Sarah Ochieng", km: 8 },
          { date: "14 Apr 2026", route: "Nairobi — Kisumu", driver: "James Mwangi", km: 347 },
          { date: "12 Apr 2026", route: "Nairobi — Mombasa", driver: "Peter Kamau", km: 450 },
          { date: "10 Apr 2026", route: "CBD — Karen", driver: "James Mwangi", km: 14 },
          { date: "08 Apr 2026", route: "Nairobi — Nakuru", driver: "Sarah Ochieng", km: 156 },
          { date: "05 Apr 2026", route: "Nairobi — Mombasa", driver: "James Mwangi", km: 450 },
        ].map((entry, i) => (
          <div key={i}>
            <div className="flex flex-col gap-0.5 py-2">
              <div className="flex items-center justify-between">
                <p>{entry.route}</p>
                <span className="text-muted-foreground">{entry.km} km</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">{entry.driver}</p>
                <p className="text-muted-foreground">{entry.date}</p>
              </div>
            </div>
            {i < 7 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
