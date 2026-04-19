import type { Meta, StoryObj } from "@storybook/react"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./avatar"
import { Button } from "@/components/inputs/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/overlay/dropdown-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

/** GitHub `user.png` avatars — same idea as shadcn/ui, different handles. */
const gh = (handle: string) => `https://github.com/${handle}.png`

const faces = {
  atlas: { src: gh("rauchg"), alt: "@rauchg", initials: "GR" },
  lyra: { src: gh("jaredpalmer"), alt: "@jaredpalmer", initials: "JP" },
  orion: { src: gh("yyx990803"), alt: "@yyx990803", initials: "EY" },
  nova: { src: gh("gaearon"), alt: "@gaearon", initials: "DA" },
  juno: { src: gh("t3dotgg"), alt: "@t3dotgg", initials: "TT" },
} as const

const badgeSuccess = "bg-green-600 dark:bg-green-800"

/** Same fixed shell as Accordion stories (24rem, viewport-capped) */
const STORY_SHELL =
  "mx-auto box-border flex min-w-0 w-[min(24rem,calc(100vw-2rem))] max-w-full shrink-0"

const meta: Meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Avatar>
        <AvatarImage src={faces.atlas.src} alt={faces.atlas.alt} />
        <AvatarFallback>{faces.atlas.initials}</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Badge: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Avatar>
        <AvatarImage src={faces.lyra.src} alt={faces.lyra.alt} />
        <AvatarFallback>{faces.lyra.initials}</AvatarFallback>
        <AvatarBadge className={badgeSuccess} />
      </Avatar>
    </div>
  ),
}

export const BadgeIcon: Story = {
  name: "Badge with icon",
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <Avatar>
        <AvatarImage src={faces.nova.src} alt={faces.nova.alt} />
        <AvatarFallback>{faces.nova.initials}</AvatarFallback>
        <AvatarBadge className={badgeSuccess}>
          <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
        </AvatarBadge>
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src={faces.atlas.src} alt={faces.atlas.alt} />
          <AvatarFallback>{faces.atlas.initials}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faces.lyra.src} alt={faces.lyra.alt} />
          <AvatarFallback>{faces.lyra.initials}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faces.orion.src} alt={faces.orion.alt} />
          <AvatarFallback>{faces.orion.initials}</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  ),
}

export const GroupCount: Story = {
  name: "Group with count",
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src={faces.atlas.src} alt={faces.atlas.alt} />
          <AvatarFallback>{faces.atlas.initials}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faces.lyra.src} alt={faces.lyra.alt} />
          <AvatarFallback>{faces.lyra.initials}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faces.orion.src} alt={faces.orion.alt} />
          <AvatarFallback>{faces.orion.initials}</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
}

export const GroupCountIcon: Story = {
  name: "Group count with icon",
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src={faces.atlas.src} alt={faces.atlas.alt} />
          <AvatarFallback>{faces.atlas.initials}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faces.lyra.src} alt={faces.lyra.alt} />
          <AvatarFallback>{faces.lyra.initials}</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faces.juno.src} alt={faces.juno.alt} />
          <AvatarFallback>{faces.juno.initials}</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} />
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className={`${STORY_SHELL} flex-row flex-wrap items-center justify-center gap-2`}>
      <Avatar size="sm">
        <AvatarImage src={faces.orion.src} alt={faces.orion.alt} />
        <AvatarFallback>{faces.orion.initials}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={faces.orion.src} alt={faces.orion.alt} />
        <AvatarFallback>{faces.orion.initials}</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={faces.orion.src} alt={faces.orion.alt} />
        <AvatarFallback>{faces.orion.initials}</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Dropdown: Story = {
  render: () => (
    <div className={`${STORY_SHELL} justify-center`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-lg" className="rounded-full">
            <Avatar>
              <AvatarImage src={faces.lyra.src} alt={faces.lyra.alt} />
              <AvatarFallback>{faces.lyra.initials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}
