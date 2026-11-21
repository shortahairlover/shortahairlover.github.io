---
name: shorthairlovr rig
description: A personal persona page read as a game menu from an original 2077-style open world.
colors:
  acid-yellow: "#F3E600"
  signal-red: "#FF2E4D"
  data-cyan: "#3DF2E8"
  night-black: "#0A0A0D"
  panel-black: "#131318"
  raised-panel: "#1C1C23"
  bone-ink: "#ECE8CF"
  dim-ink: "#ABA78D"
  yellow-shadow-ink: "#2A2700"
  hud-rule: "rgba(243, 230, 0, 0.22)"
typography:
  display:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "clamp(1.75rem, 12.4cqi, 14rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  display-close:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  nav:
    fontFamily: "Oxanium, Barlow Semi Condensed, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  data-figure:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "28px"
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(80px, 11vw, 160px)"
components:
  button-solid:
    backgroundColor: "{colors.night-black}"
    textColor: "{colors.acid-yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.night-black}"
  button-line:
    backgroundColor: "{colors.acid-yellow}"
    textColor: "{colors.night-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.night-black}"
    textColor: "{colors.acid-yellow}"
  nav-link:
    textColor: "{colors.bone-ink}"
    typography: "{typography.nav}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.acid-yellow}"
    textColor: "{colors.night-black}"
  slot:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.bone-ink}"
    rounded: "{rounded.none}"
    padding: "12px"
    height: "104px"
  slot-hover:
    backgroundColor: "{colors.raised-panel}"
  slot-selected:
    backgroundColor: "{colors.acid-yellow}"
    textColor: "{colors.night-black}"
  quest-tab:
    textColor: "{colors.bone-ink}"
    padding: "14px 14px 14px 12px"
  quest-tab-hover:
    backgroundColor: "{colors.panel-black}"
  quest-tab-selected:
    backgroundColor: "{colors.acid-yellow}"
    textColor: "{colors.night-black}"
  detail-panel:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.bone-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3vw, 40px)"
  chip:
    textColor: "{colors.bone-ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  tier-tag:
    backgroundColor: "{colors.acid-yellow}"
    textColor: "{colors.night-black}"
    typography: "{typography.data}"
    padding: "2px 8px"
  jack:
    backgroundColor: "{colors.night-black}"
    textColor: "{colors.acid-yellow}"
    rounded: "{rounded.none}"
    padding: "18px 22px 20px"
    width: "min(320px, 100%)"
  jack-hover:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.night-black}"
  ticker-label:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.night-black}"
    typography: "{typography.nav}"
    padding: "0 20px"
    height: "56px"
---

# Design System: shorthairlovr rig

## Overview

**Creative North Star: "The Netrunner's Rig"**

The page is a personal rig booted from an original 2077-style open world: a drenched acid-yellow field opens and closes the run, and everything between is a night-black game menu (inventory slots, a quest journal, a gig board) that happens to be the real navigation for a real person. Density is menu-dense inside panels and generous between sections; the world reads as hardware, not as a website template.

Material is flat ink on two grounds. Yellow is a whole surface, never a highlight smear; black carries the menus. Depth comes from tonal panel steps, 45-degree chamfered corners, hairline HUD rules with tick marks, and a faint scanline grain, not from shadows or blur. Motion is diegetic and short: a boot decode on the alias, a two-channel red/cyan slice-glitch on display type, scramble-to-settle text when a menu entry is selected, a marquee of live repos. All of it switches off under reduced motion and the page stays complete.

The world evokes the look of the Cyberpunk 2077 game with original art only. It carries no CD PROJEKT RED logos, wordmarks, official fonts, characters, faction or corporation names, or game art, and no emoji anywhere. Every image is generated for the page.

**Key Characteristics:**
- Two grounds: acid yellow for the opening and the close, night black for the menus.
- Chamfered corners (top-left and bottom-right cut at 45 degrees) on every panel, button and frame; no border radius anywhere.
- Three-voice type: Oxanium display caps, Barlow Semi Condensed body, JetBrains Mono for data only.
- Red means alert or active, cyan means number or live data; neither is decoration.
- List-plus-detail menus with keyboard arrows and in-place decode as the signature interaction.

## Colors

A four-hue HUD palette: one ground color at full saturation, one black family, and two signal colors that each carry a single meaning.

### Primary
- **Acid Yellow** (acid-yellow): the world's ground. Fills the boot screen and the signal-out close edge to edge, colors every display headline on black, the selected slot and quest, the scrollbar thumb, and the outlined-button fill. On black it is the voice of headings and links.

### Secondary
- **Signal Red** (signal-red): alerts and the active state. Hover fill of solid buttons and contact jacks, the active-nav underline, the ticker label band, the persistent glitch offset on the alias, the portrait reticle, pulse dots, the corner tab on the file panel, the "field" tier, error status, and text selection.

### Tertiary
- **Data Cyan** (data-cyan): numbers and live data. Stat figures, repo languages, the clock time, the portrait scan line, success status, list bullets in detail panels, the "build" tier, the decode-in-progress text, and every focus ring on black.

### Neutral
- **Night Black** (night-black): page ground, top bar, ticker band, footer, solid buttons and jacks on yellow.
- **Panel Black** (panel-black): first panel step: detail panels, slots, the file panel, hovered rows.
- **Raised Panel** (raised-panel): second step, hovered slots only.
- **Bone Ink** (bone-ink): body text on black, yellow-tinted so it belongs to the ground.
- **Dim Ink** (dim-ink): secondary text, mono labels, dates, ledes, the "course" tier.
- **Yellow Shadow Ink** (yellow-shadow-ink): secondary text on the yellow ground (the quote's lead clause and attribution, readout keys, portrait tag keys).
- **HUD Rule** (hud-rule, translucent acid yellow): every hairline: section dividers, list rows, inset panel and chip outlines.

### Named Rules
**The One Meaning Rule.** Red is alert or active; cyan is a number, live data or focus. Never swap them and never use either as plain decoration on body copy.

**The Two Grounds Rule.** Yellow is a full surface, a heading voice, or a translucent hairline (HUD Rule); never a tinted wash or gradient fill. A section is either yellow ground with black ink or black ground with yellow headings and bone ink.

## Typography

**Display Font:** Oxanium (with Barlow Semi Condensed, sans-serif)
**Body Font:** Barlow Semi Condensed (with Arial Narrow, sans-serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace)

**Character:** A squared, techno display face set in heavy uppercase against a narrow, readable grotesque; the mono only ever speaks in data. All three are self-hosted woff2 files under `assets/fonts/`.

### Hierarchy
- **Display** (800, clamp(1.75rem, 12.4cqi, 14rem) sized to its container, line-height 0.86, -0.02em, uppercase, no wrap): the alias on the boot screen only.
- **Display Close** (800, clamp(2.4rem, 6.2vw, 5.75rem), 0.92, -0.025em, uppercase, max 17ch): the quote's punchline on the signal-out close. Its lead clause sits inside the same heading in Barlow 600 sentence case, and the attribution follows in mono caps behind a short red rule.
- **Headline** (800, clamp(2.5rem, 6vw, 5.25rem), 0.95, -0.015em, uppercase, acid yellow): section titles.
- **Title** (800, clamp(2rem, 3.6vw, 3rem), 1, -0.01em, uppercase): detail-panel titles; Title Small (700, clamp(1.5rem, 2.6vw, 2rem), 1.05) for sub-blocks like the repo table head.
- **Body** (400, 1.125rem, 1.6): running text, detail bodies capped at 58 to 64ch; Body Lead (clamp(1.125rem, 1.5vw, 1.3125rem)) for the profile log, first paragraph in acid yellow at 500.
- **Label** (700, 0.8125 to 0.9375rem, 0.1 to 0.16em tracking, uppercase, Oxanium): buttons, nav (600, 0.12em), ticker label, gig links, quest names (700, 1.0625rem, 0.03em).
- **Data** (JetBrains Mono 400, 0.6875 to 0.8125rem, 0.08 to 0.2em tracking, uppercase for keys): readouts, file keys, dates, chips, stat keys, footer. Data Figure (700, 1.5rem, tabular) for stat values in cyan.

### Named Rules
**The Mono Is Data Rule.** JetBrains Mono appears only on keys, values, dates, languages, counts and system status. Prose never sets in mono.

**The Caps Display Rule.** Oxanium headings, labels and commands are uppercase, tight-tracked at large sizes (negative) and wide-tracked at label sizes (0.1em and up); only literal identifiers such as repo names keep their own case.

## Layout

Content sits in a centered wrap of min(1240px, 100% minus two gutters); the boot grid widens to 1320px. The gutter is fluid (spacing.gutter) and sections are separated by fluid vertical padding (spacing.section) with a hairline HUD rule between adjacent black sections. A sticky 56px top bar holds the mark, the section nav and a local clock.

The boot screen fills the first viewport minus the bar: a two-row grid with the alias spanning both columns, then identity and actions (1.7fr) beside the portrait (1fr, max 420px), with the ticker band pinned to its bottom edge. Menus are two-column list-plus-detail grids (loadout 1.35fr / 1fr, journal and gig board list-narrow / detail-wide) with the detail panel sticky at 88px. Inner rhythm uses 4, 8, 12, 20 and 28px steps.

At 1080px the clock drops. At 900px every two-column grid collapses to one and detail panels stop being sticky. At 720px the nav becomes a horizontally scrolling strip with tighter tracking, boot actions become a two-column grid with the primary spanning, the file panel stacks keys over values, and the repo table becomes stacked rows.

## Elevation & Depth

The system is flat. There are no drop shadows; depth is tonal (night black, then panel black, then raised panel) plus inset 1px hairlines (`box-shadow: inset 0 0 0 1px` in HUD Rule, or acid yellow on hover) that read as panel edges rather than lift. Texture comes from a scanline grain: `repeating-linear-gradient(0deg, rgba(10,10,13,0.05) 0 1px, transparent 1px 4px)` over yellow grounds, and a heavier 0.25-alpha, 3px-period version over gig art. A generated city skyline sits low on both yellow grounds (0.16 opacity at the boot, full at the close).

### Named Rules
**The No-Lift Rule.** Nothing floats. A state change shifts tone, swaps ground color, or lights an inset hairline; it never adds a blur shadow.

## Shapes

The one silhouette is the chamfer: a clip-path polygon cutting the top-left and bottom-right corners at 45 degrees, sized by a per-component `--cut` (10px slot, 12px button, 16px gig art in a panel, 18px jack, 22px file panel and gig art, 26px detail panel, 28px portrait frame). Larger surfaces take larger cuts. Border radius is zero everywhere; small markers are hard squares (6 to 8px pulse and tier dots) or a 45-degree rotated square (the quest mark). Outlined chamfers are built from two stacked clipped layers so the stroke follows the cut. HUD rules carry tick marks: a solid 1 to 2px line over a repeating 1 to 2px tick every 32 to 48px. Panels carry a single accent bar on an uncut corner edge (a 56x6px red tab top-right on the file panel, a 38%-wide 2px yellow bar bottom-right on detail panels).

### Named Rules
**The Chamfer Rule.** Every container, button and frame is chamfered top-left and bottom-right; nothing is rounded, and the cut scales with the surface.

## Components

### Buttons
Heavy, squared, tactile; they read as menu commands.
- **Shape:** chamfered, 12px cut, min height 48px, 22px side padding, Oxanium 700 caps.
- **Solid:** night black with acid yellow text on the yellow ground; hover floods signal red with black text and nudges the arrow icon 4px right.
- **Line:** a black chamfer with an acid-yellow chamfer inset 2px, black text; hover removes the inner layer so it becomes solid black with yellow text.
- **Hover / Focus:** 180ms ease-out (cubic-bezier(0.16, 1, 0.3, 1)); active presses 1px down; focus on yellow is a 2px black outline offset 4px.

### Chips
- **Style:** mono 0.75rem, bone ink, inset 1px HUD Rule outline, square corners, 4px 10px padding. Used for a gig's stack.
- **Tier tag:** mono caps on a solid fill: red for field, cyan for build, dim ink for course, black text.

### Cards / Containers
- **Corner Style:** chamfered, 22 to 28px cut.
- **Background:** panel black on the night-black ground; the portrait frame is night black on yellow.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** none, or an inset HUD Rule hairline; rows inside are split by HUD Rule bottom borders.
- **Internal Padding:** clamp(24px, 3vw, 36 to 40px).

### Navigation
- **Style:** sticky night-black bar, Oxanium 600 caps at 0.8125rem with 0.12em tracking in bone ink.
- **Hover:** the link floods acid yellow with black text (160ms).
- **Active:** acid-yellow text with a 2px signal-red underline bar inset 12px, set by scroll position.
- **Mobile:** below 720px the mark text hides and the links become a scrolling strip at 0.6875rem.

### Inventory Slot (signature)
A 104px-tall chamfered tile (10px cut) in panel black with an inset HUD hairline: a two-letter Oxanium code in acid yellow, the skill name in dim ink, an 8px tier square top-right. Hover raises to the raised panel and lights the hairline yellow; selected fills acid yellow with black text and no hairline. Tiles auto-fill at a 112px minimum.

### Quest Tab (signature)
A full-width list row: rotated-square mark, Oxanium caps name, mono date. Hover takes panel black with a HUD hairline; selected fills acid yellow, the mark turns solid red and the date drops to yellow-shadow ink. The gig board reuses this row.

### Detail Panel with Decode (signature)
The right half of every list-plus-detail menu. Selecting a slot, quest or gig re-renders the panel and decodes its title (about 360ms) and body (about 520 to 560ms): settled characters advance left to right while a 14-character scramble front runs ahead in data cyan. Arrow keys, Home and End move selection. Under reduced motion the text lands immediately.

### Contact Jack
A chamfered black block (18px cut, min 320px) on the yellow close: Oxanium value in yellow over a dim mono caption, with a diagonal arrow. Hover floods signal red with black text and moves the arrow 3px up-right.

### Ticker
A 56px night-black band at the bottom of the boot screen: a signal-red label block with a pulsing cyan square, then a marquee of live public repos (name in yellow, language in cyan, date in dim ink) that pauses on hover and becomes a scrollable strip under reduced motion.

### Slice Glitch
Display type carries `data-text` duplicates: red sliced 3px left, cyan sliced 3px right, animated in two 420ms stepped bursts on hover and once on boot. The alias keeps a permanent red slice as its resting state.

**Section breach (scroll motion).** Each `[data-breach]` section draws in once, the first time its top crosses 90% of the viewport, like a game menu screen being drawn. The sequence: a 4px yellow bar sweeps across the section head (640ms); the heading wipes in left to right with `clip-path` (560ms, 80ms delay) and decodes its text; chamfered panels (`.file`, `.detail`) draw from the left through the registered `--rv` property, which keeps the cut corners intact (720ms, 260ms delay); list items (slots, quests, log paragraphs, jacks) slide 14px in with a 28ms stagger (70ms for jacks). The hidden start states only exist under `html.motion`, which JS adds when motion is allowed, so content is visible if the script fails. A 2px yellow reading-progress rule with a red head rides the top bar's bottom edge. The first-screen loops (ticker, portrait scan, pulses) pause once the hero has scrolled out of view. `?motion=off` settles everything, for full-page captures.

## Do's and Don'ts

### Do:
- **Do** chamfer every new panel, button and frame top-left and bottom-right with a `--cut` sized to the surface (10 to 28px).
- **Do** keep red for alert and active states and cyan for numbers, live data and focus rings.
- **Do** set data (keys, dates, languages, counts, status) in JetBrains Mono and everything else in Oxanium or Barlow Semi Condensed.
- **Do** use the list-plus-detail menu with arrow-key selection and in-place decode for any new collection of entries.
- **Do** signal state with tone shifts, ground swaps and inset hairlines, at 160 to 180ms on the ease-out curve.
- **Do** make every motion effect optional: under prefers-reduced-motion (or `?motion=off`) the glitch, scan, pulse, marquee, decode and section breach stop and the content is still complete.
- **Do** generate all imagery for the page (authored SVG, canvas or CSS) in this palette.

### Don't:
- **Don't** use any CD PROJEKT RED logo, wordmark, official font, character, faction or corporation name, or game art; the world is original.
- **Don't** use emoji anywhere.
- **Don't** round corners or add blur drop shadows.
- **Don't** wash a surface in tinted or gradient acid yellow; it is a full ground, a solid heading color, or a translucent hairline rule.
- **Don't** set prose in mono or set Oxanium headings and labels in lowercase.
- **Don't** put content inside an effect that flashes more than three times per second.
