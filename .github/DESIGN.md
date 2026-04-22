---
name: Ethereal Developer
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1100px
  gutter: 32px
  section-padding: 120px
  card-padding: 24px
---

## Brand & Style

The design system is rooted in high-end minimalism, targeting an audience of premium tech recruiters, CTOs, and design-led agencies. It evokes an emotional response of quiet confidence, technical mastery, and intellectual depth.

The aesthetic style is a fusion of **Minimalism** and **Tactile** design. It prioritizes vast whitespace and intentional typography while introducing a subtle paper-like texture to the background to avoid clinical sterility. The interaction model is calm, utilizing soft transitions and depth to guide the user through the developer's journey without loud distractions.

## Colors

The color palette is strictly monochromatic, relying on value and contrast rather than hue to establish hierarchy.

- **Primary:** Deep charcoal black for headings and primary CTAs.
- **Secondary:** Mid-tone greys for body text and labels to reduce visual vibration.
- **Neutral:** A warm, off-white base that feels more organic and "high-end" than pure digital white.
- **Texture:** The background should utilize a very fine, low-opacity grain or paper fiber overlay to provide a tactile, editorial quality.

## Typography

The typographic system relies on a classic "Editorial Serif + Modern Sans" pairing.

**Noto Serif** is used for all major headings. It provides the "high-end" literary feel. Headings should often be used in a larger-than-standard scale to create focal points.

**Manrope** is used for body text and metadata. Its refined, geometric construction ensures that technical details remain highly legible and professional.

Use the **label-caps** style for secondary information like project dates, categories, or technical "Case Study" tags to create a structured, organized feel.

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach for the main content container to ensure readability and a focused "gallery" feel.

The spacing rhythm is generous. Large vertical gaps (section-padding) are used to separate the hero, skills, and project sections, allowing each to breathe. A 12-column grid is standard, but content should ideally occupy the center 8-10 columns for long-form reading, while project cards can span the full 12.

## Elevation & Depth

Depth in this design system is subtle and intentional. We avoid heavy dropshadows in favor of **Ambient Shadows**.

- **Cards:** Use a multi-layered shadow with very high blur (40px-60px) and extremely low opacity (3-5%). This makes elements look as though they are floating slightly above the textured paper surface rather than being glued to a screen.
- **Interaction:** On hover, shadows should expand slightly in radius rather than increasing in opacity, maintaining the soft, airy aesthetic.
- **Layers:** Use tonal separation sparingly. A slightly lighter grey background can be used for "wells" or decorative containers, but the primary background should remain the dominant surface.

## Shapes

The shape language is sophisticated and "Soft" (0.25rem - 0.5rem).

While a sharp (0px) aesthetic is often associated with minimalism, this design system uses a small radius to feel more approachable and modern. Avoid pill-shaped buttons or large radii; the goal is a tailored, architectural look where corners are clearly defined but not aggressive.

## Components

### Buttons

Primary actions use a "Ghost" style: a thin 1px border in charcoal black, with text in Manrope Semibold. Fill the button with white or a very light grey on hover. Use generous horizontal padding (32px+) to maintain the high-end feel.

### Cards (Projects & Skills)

Cards are the primary container. They feature a white background, the defined ambient shadow, and the "Soft" corner radius. For project cards, images should be desaturated or treated with a slight grain filter to match the monochromatic theme.

### Chips (Tech Stack)

Chips are used for listing skills. They should have a light grey background (`#EDEDED`) with no border. Text should be small, Manrope Regular, with a slight tracking increase for legibility.

### Inputs

Search or contact fields should be simple underlines (1px) with label-caps text floating above. This maintains the "clean" minimalist aesthetic without the bulk of boxed input fields.

### Navigation

The navigation bar is transparent and fixed at the top. Use Manrope Regular for links with a subtle underline effect that appears on hover, mirroring the "developer" nature of the site while remaining elegant.
