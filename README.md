# Nyanboard

a Free and open-source dashboard template for Next.js built with typescript and shadcn UI.

## Get Started

Clone repository

```bash
git clone https://github.com/rifkiahmadfahrezi/nyanboard.git
```

Change directory & Install dependencies

```bash
cd nyanboard && pnpm install
```

Run dev server

```bash
pnpm run dev
```

## Setting Navigation

Go to each component (navbar/footer/dashboard) and you can edit the `...-menu.ts` file to set the menu and menu items.

## Navbar Menu

| Property | Type | Description |
|----------|------|-------------|
| label | `string` | The menu label |
| url | `string?` | The menu URL (optional for dropdown)  |
| items | `NavMenuItem[]?` | List of submenu items (optional). If items are added, the menu will be a dropdown. |

### Navbar Item

| Property | Type | Description |
|----------|------|-------------|
| title | `string` | The item title |
| url | `string` | The item URL |
| description | `string?` | The item description (optional) |
| icon | `LucideIcon?` | The item icon (optional) |

## Sidebar Menu

| Property | Type | Description |
|----------|------|-------------|
| title | `string?` | The sidebar menu title (optional) |
| menus | `SidebarSubmenu[]` | List of submenu items |

### Sidebar Submenu

| Property | Type | Description |
|----------|------|-------------|
| label | `string` | The submenu label |
| url | `string` | The submenu URL |
| icon | `LucideIcon?` | The submenu icon (optional) |
| isActive | `boolean?` | Indicates if the submenu is active (optional) |
| badge | `MenuBadge?` | The submenu badge (optional) |
| items | `SidebarMenuItem[]?` | List of submenu items (optional). If items are added, the menu will be a dropdown. |

### Menu Badge

| Property | Type | Description |
|----------|------|-------------|
| variant | `BadgeVariant["variant"]`, [check](https://github.com/rifkiahmadfahrezi/nyanboard/blob/main/src/components/ui/badge.tsx) | Badge variant type |
| content | `string` | Badge content |

### Sidebar Menu Item

| Property | Type | Description |
|----------|------|-------------|
| badge | `MenuBadge?` | The item badge (optional) |
| label | `string` | The item label |
| url | `string` | The item URL |

## Footer Menu

### Footer Section

| Property | Type | Description |
|----------|------|-------------|
| title | `string` | The section title |
| links | `FooterLink[]` | List of footer links |

### Footer Link

| Property | Type | Description |
|----------|------|-------------|
| label | `string` | The link label |
| href | `string` | The link URL |

