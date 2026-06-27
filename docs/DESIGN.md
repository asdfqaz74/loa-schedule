---
name: Aethelgard Chronicle
colors:
  surface: "#111417"
  surface-dim: "#111417"
  surface-bright: "#37393d"
  surface-container-lowest: "#0b0e11"
  surface-container-low: "#191c1f"
  surface-container: "#1d2023"
  surface-container-high: "#272a2e"
  surface-container-highest: "#323538"
  on-surface: "#e1e2e7"
  on-surface-variant: "#d1c5b4"
  inverse-surface: "#e1e2e7"
  inverse-on-surface: "#2e3134"
  outline: "#9a8f80"
  outline-variant: "#4e4639"
  surface-tint: "#e9c07c"
  primary: "#f2c883"
  on-primary: "#422c00"
  primary-container: "#d4ad6a"
  on-primary-container: "#5b4005"
  inverse-primary: "#78591f"
  secondary: "#e7c17a"
  on-secondary: "#412d00"
  secondary-container: "#5f4507"
  on-secondary-container: "#d8b36d"
  tertiary: "#c7cfdd"
  on-tertiary: "#29313c"
  tertiary-container: "#abb3c1"
  on-tertiary-container: "#3d4551"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#ffdea9"
  primary-fixed-dim: "#e9c07c"
  on-primary-fixed: "#271900"
  on-primary-fixed-variant: "#5d4207"
  secondary-fixed: "#ffdea4"
  secondary-fixed-dim: "#e7c17a"
  on-secondary-fixed: "#261900"
  on-secondary-fixed-variant: "#5c4205"
  tertiary-fixed: "#dbe3f2"
  tertiary-fixed-dim: "#bfc7d6"
  on-tertiary-fixed: "#141c27"
  on-tertiary-fixed-variant: "#3f4753"
  background: "#111417"
  on-background: "#e1e2e7"
  surface-variant: "#323538"
  surface-base: "#12161C"
  surface-elevated: "#1C222B"
  status-scheduled: "#8493A8"
  status-completed: "#4ADE80"
  status-not-participating: "#F87171"
  gold-shimmer: "#F3E5AB"
  deep-border: "#2D3748"
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.25"
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.5"
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.2"
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "500"
    lineHeight: "1.2"
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: "600"
    lineHeight: "1.2"
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  container-max: 1280px
---

## Brand & Style

The design system is crafted for a specialized gaming utility that bridges the gap between high-fantasy immersion and functional dashboard productivity. The target audience consists of dedicated Lost Ark players who value coordination and efficiency but desire an environment that feels like an extension of the game's universe.

The visual style is **Fantasy Corporate**, a hybrid of **Minimalism** and **Tactile RPG** elements. It utilizes a deep, nocturnal foundation to reduce eye strain during long gaming sessions, punctuated by sharp, metallic accents that evoke the feeling of ancient artifacts and legendary gear. The aesthetic is sophisticated and "prestige" oriented, avoiding clutter in favor of a clean, structured dashboard that commands authority and facilitates quick decision-making.

**Key visual principles:**

- **Atmospheric Depth:** Using layered darkness rather than flat blacks to create a sense of space.
- **Gilded Precision:** Gold is used sparingly but with high impact to signify primary actions and critical status.
- **Utility First:** While the theme is fantasy, the interaction model is strictly systematic to ensure high task completion rates for scheduling.

## Colors

The palette is anchored in **Deep Navy and Absolute Black** to provide a canvas that feels expansive and immersive.

- **Primary Gold (#D4AD6A):** Reserved for the most important "Call to Action" buttons, primary borders of active cards, and essential icons. It represents the "Legendary" tier of information.
- **Secondary Gold (#B18F4D):** Used for hover states, active tab indicators, and secondary illustrative elements.
- **Surface Hierarchy:** The background uses `#0B0E11`, while containers use `#12161C` and `#1C222B` to create depth without the need for heavy drop shadows.
- **Semantic Colors:** Green and Red are used for "Completed" and "Not Participating" statuses, but are slightly desaturated to maintain the dark fantasy harmony.

## Typography

This design system uses a triple-font approach to balance personality with technical utility.

1.  **Display (Sora):** A geometric sans-serif that feels futuristic yet solid. It is used for headlines to provide a "command center" feel.
2.  **UI/Body (Manrope):** A highly legible, modern sans-serif used for all functional text and descriptions. It ensures that raid names and times are readable at a glance.
3.  **Technical (JetBrains Mono):** A monospaced font used for "Room Codes," timestamps, and status labels. This adds a "system log" or "ledger" aesthetic appropriate for a tracker/scheduler.

For mobile devices, headlines scale down significantly to maintain the dashboard's information density. All labels use uppercase styling with increased letter-spacing to evoke a sense of "prestige" and "classification."

## Layout & Spacing

The layout follows a **12-column Fluid Grid** system on desktop, transitioning to a single-column stack on mobile.

- **Dashboard Philosophy:** The scheduler utilizes a "card-masonry" or "standardized grid" where each raid/task is a discrete module. This allows the user to scan multiple days or tasks horizontally and vertically.
- **Rhythm:** A 4px baseline grid ensures consistent vertical rhythm. Standard padding within cards is 20px (5 units) to provide enough "breath" between dense information like time, participants, and status.
- **Breakpoints:**
  - **Mobile:** < 768px (Full width cards, 16px margins)
  - **Tablet:** 768px - 1024px (2-column grid)
  - **Desktop:** > 1024px (3 or 4 column grid based on content density)

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Metallic Outlines** rather than traditional drop shadows.

- **Level 0 (Background):** `#0B0E11` - The base void.
- **Level 1 (Cards/Containers):** `#12161C` - Slightly raised with a 1px solid border of `#2D3748`.
- **Level 2 (Active/Hover):** `#1C222B` - When a card is hovered or selected, it gains a subtle outer glow using the primary gold color at 10% opacity and the border changes to the primary gold.
- **Modals:** Use a heavy backdrop blur (20px) on the Level 0 layer to isolate the input task, creating a "glassmorphism" effect that feels like an ethereal overlay on top of the map.

## Shapes

The design system uses **Soft (0.25rem)** roundedness to maintain a serious, architectural feel.

- **Cards and Inputs:** Use the base 4px (0.25rem) radius. This sharp-but-not-piercing corner style reflects the "hard edges" of armor and weapons in the game.
- **Status Badges:** Use a slightly higher radius (8px) to distinguish them as floating interface elements.
- **Buttons:** Maintain the 4px radius to feel like solid blocks or "tiles."

## Components

### Buttons

- **Primary:** Background `#D4AD6A`, Text `#0B0E11` (Black), Bold weight. Includes a subtle top-light inner shadow to give a "minted coin" effect.
- **Secondary:** Transparent background, Border 1px `#B18F4D`, Text `#D4AD6A`.
- **Ghost:** No border or background, Text `#8493A8`. Used for "Cancel" or "Close" actions.

### Cards (Schedule Item)

- **Structure:** Content Name (Headline-md), Date/Time (Label-md + Icon), Status Badge (Top-Right), Progress Checkbox (Bottom-Right).
- **Interactive State:** On hover, the border transitions from Deep-Border to Gold.

### Status Badges

- **Scheduled:** Grey background `#1E2631`, Blue-grey text.
- **Completed:** Subtle green tint background, Emerald text.
- **Not Participating:** Dark red tint background, Salmon text.
- All badges are uppercase using **JetBrains Mono**.

### Input Fields

- Background is darker than the card surface (`#080A0D`).
- Borders are `#2D3748` until focused, where they glow with a 1px Gold stroke.
- Placeholder text uses Text-Secondary with 50% opacity.

### Progress Check (The "Task Clear" Action)

- A custom-styled checkbox that, when checked, triggers a gold "shimmer" animation across the card and changes the card border to a dim gold.
