# Portfolio Project

React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + TypeScript.

## Commands
- `npm run dev` - Dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Structure
- `src/` - App source
- `src/components/` - React components
- `src/globals.css` - Tailwind v4 global styles
- `src/App.tsx` - Root component
- `src/main.tsx` - Entry point
- `@/` path alias maps to `src/`

## Design Rules
CRITICAL: The UI UX Pro Max skill is installed at `.opencode/skills/ui-ux-pro-max/`. For EVERY UI/UX task, you MUST read and follow the design system generation flow from `SKILL.md`. Always generate a complete design system (style, colors, typography, effects, anti-patterns) before writing any code. Use the search script directly when needed:
```
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "<product-type>" --design-system -p "<project-name>"
```

Magic MCP (`@21st-dev/magic`) is available for generating polished React components. Use the `magic` tool to build components via the MCP server when creating complex UI pieces. Invoke it by describing components clearly.

## Quality Standards
Before delivering any UI code, verify:
- Responsive at 375px, 768px, 1024px, 1440px
- WCAG AA contrast (4.5:1 text, 3:1 large text)
- `cursor-pointer` on all clickable elements
- Hover/focus states with smooth transitions (150-300ms)
- `prefers-reduced-motion` respected via Framer Motion's `useReducedMotion`
- No hardcoded colors - use Tailwind theme or CSS variables
- Components in `src/components/`, one per file, named exports

## Tech Stack
- React 19 with hooks, no class components
- Tailwind CSS v4 (`@import "tailwindcss"` in CSS, `@tailwindcss/vite` plugin)
- Framer Motion v12 for animations
- React Icons (`react-icons`) for icons
- Path alias `@/` for imports from `src/`
