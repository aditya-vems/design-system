import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  BellDotIcon,
  CreditCardIcon,
  GithubIcon,
  LinkSquare02Icon,
  Logout01Icon,
  Mail01Icon,
  Settings01Icon,
  User02Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/inputs/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu"

const meta: Meta<typeof DropdownMenu> = {
  title: "Overlay/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="min-w-40 justify-between">
            <span className="text-muted-foreground">Signed in as</span>
            <span className="font-medium">you@studio.dev</span>
            <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuItem>
              <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
            GitHub
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={LinkSquare02Icon} strokeWidth={2} />
            Docs
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

export const Checkbox: Story = {
  render: () => {
    const [email, setEmail] = React.useState(true)
    const [push, setPush] = React.useState(false)
    const [digest, setDigest] = React.useState(true)

    return (
      <div className="mx-auto flex w-full max-w-sm justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <HugeiconsIcon icon={BellDotIcon} strokeWidth={2} />
              Notifications
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Channels</DropdownMenuLabel>
              <DropdownMenuCheckboxItem checked={email} onCheckedChange={setEmail}>
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                Email
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={push} onCheckedChange={setPush} disabled>
                <HugeiconsIcon icon={BellDotIcon} strokeWidth={2} />
                Push (coming soon)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={digest} onCheckedChange={setDigest}>
                Weekly digest
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

export const SnapGrid: Story = {
  name: "Snap Grid",
  render: () => {
    const [step, setStep] = React.useState("8")

    return (
      <div className="mx-auto flex w-full max-w-sm justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Snap: {step}px</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Canvas snap</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={step} onValueChange={setStep}>
                <DropdownMenuRadioItem value="4">4 px</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="8">8 px</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="16">16 px</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="24">24 px</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

export const DeepTree: Story = {
  name: "Deep Tree",
  render: () => (
    <div className="mx-auto flex w-full max-w-sm justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Organize</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem>Move</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Options</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Slack</DropdownMenuItem>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Hook</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              Duplicate
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => {
    const Item = ({ label }: { label: string }) => (
      <>
        <DropdownMenuItem>{label} — one</DropdownMenuItem>
        <DropdownMenuItem>{label} — two</DropdownMenuItem>
      </>
    )

    return (
      <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
        {(
          [
            { align: "start" as const, title: "align=start" },
            { align: "center" as const, title: "align=center" },
            { align: "end" as const, title: "align=end" },
          ] as const
        ).map(({ align, title }) => (
          <div key={align} className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">{title}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full max-w-[8rem]">
                  Open
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={align} className="w-44">
                <DropdownMenuLabel>Preview</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Item label={title} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    )
  },
}
