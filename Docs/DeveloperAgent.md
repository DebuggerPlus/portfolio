# Hermes DeveloperAgent Task — DebuggerPlus Portfolio

## Role

You are Hermes DeveloperAgent. Implement, review and validate a polished, responsive static portfolio website for the DebuggerPlus developer brand. Work inside the existing project directory. Treat the supplied files as a starter implementation and improve them where needed; do not blindly overwrite working user changes.

## Goal

Produce a professional portfolio hosted on GitHub Pages. The site should present the owner as an independent software developer focused on C#/.NET, desktop applications, AI agents, automation and trading-related tools. The site must be fast, accessible, responsive and maintainable, without a server-side backend.

## Brand and design direction

- Brand: DebuggerPlus
- Visual style: dark developer portfolio, clean and modern, restrained technical details.
- Background: #0d1117
- Secondary surfaces/cards: #161b22
- Borders: #30363d
- Primary text: #f0f6fc
- Secondary text: #8b949e
- Accent: #58a6ff
- Green status accent: #3fb950
- Use a clear typography hierarchy, comfortable spacing, subtle transitions and restrained decorative visuals.
- Avoid excessive gradients, animation, visual clutter, fake testimonials, invented metrics, or claims that the owner has professional experience not stated in the content.
- Respect `prefers-reduced-motion`.
- Mobile-first and responsive at common mobile, tablet and desktop widths.

## Required sections

1. Sticky header/navigation with brand and links to Projects, About, Technologies, Contact. Mobile navigation should have an accessible toggle.
2. Hero section:
   - “Building software. Exploring AI. Solving real problems.”
   - Brief developer description.
   - CTA to projects and GitHub profile.
   - Focus tags: AI Agents, C#/.NET, Automation.
   - A tasteful code/workspace illustration; avoid requiring external image APIs.
3. Featured Projects cards:
   - EnglishTutorBot — AI English learning Telegram bot; C#, ASP.NET Core, Telegram, AI. Repository: https://github.com/AI-Agents-by-DebuggerPlus/EnglishTutorBot. Label status as Testing only if it remains accurate; otherwise use Development.
   - Hermes AI Ecosystem — autonomous AI agents, memory, specialized roles, routing. Link to https://github.com/AI-Agents-by-DebuggerPlus if appropriate. Status Experimental.
   - ScreenRecorder — Windows recording app, screen/region/window and audio selection. Repository: https://github.com/DebuggerPlus/ScreenRecorder. Status Development, unless repo evidence indicates otherwise.
   - Trading Systems — market analysis, order-book visualization, algorithms and risk-management experiments. Link to owner profile/relevant repository only when verified. Status Research.
   - Do not invent demo URLs, release dates, user counts, performance numbers or project completion.
4. About section: independent developer; background in C#, .NET, desktop applications and algorithmic trading; currently exploring AI agents, automation, web technologies and intelligent applications. Use modest, accurate language.
5. Technologies: C#, .NET, WPF, ASP.NET Core, Python, MQL5, Git/GitHub, REST APIs, AI/LLM, Automation. Do not imply expert proficiency in all technologies.
6. Contact section: GitHub link; email/Telegram may be added only if supplied by the user. Do not fabricate contact details.
7. Footer with current year generated in JavaScript and back-to-top link.

## Implementation constraints

- Use semantic HTML5.
- Use CSS and vanilla JavaScript; no frameworks, bundlers or external dependencies unless the user specifically approves.
- Keep paths relative so GitHub Pages project/user sites work.
- Ensure all assets are local or CSS-generated. No remote image dependencies.
- Provide accessible navigation, aria labels/state, keyboard operation, visible focus styles, adequate contrast, and reduced-motion support.
- Ensure links opening new tabs include `rel="noopener noreferrer"`.
- Keep code organized, readable and maintainable.
- Do not add fake functionality. Buttons/links must work or be clearly marked as unavailable/coming soon.
- Project preview graphics can be CSS mockups; label them as decorative and avoid presenting them as actual product screenshots.
- Validate all paths, markup and console behavior if tools are available.

## Tasks

1. Inspect the project files and Git status before editing.
2. Review the supplied `index.html`, CSS and JS.
3. Make any necessary improvements to visual polish, responsive behavior, accessibility, content consistency and code quality.
4. Verify the mobile menu toggles, closes on link click, Escape and outside click; update `aria-expanded`.
5. Verify current year is populated.
6. Check all navigation anchors and external links.
7. Test the page at approximately 1440px desktop, 768px tablet and 375px mobile widths, using available browser/testing tools if possible.
8. Check for horizontal overflow and broken local asset paths.
9. If no browser is available, clearly report which checks were not performed and provide manual test steps.
10. Do not deploy, force-push, commit, change repository visibility, or alter GitHub settings unless the user explicitly authorizes those actions.

## Deliverables

- Finished static site files.
- Updated README with local preview and GitHub Pages instructions.
- A short completion report listing files changed, tests/checks performed, unresolved items, and steps the user must take to publish.

## Acceptance criteria

- Site loads from `index.html` without a build step.
- Layout is responsive and no horizontal scrolling at mobile width.
- Navigation and CTA anchors work.
- Mobile menu is keyboard accessible and reports state through `aria-expanded`.
- Current year is correct.
- No fabricated content or nonfunctional controls.
- GitHub Pages-compatible relative paths.
- Clear, concise README deployment guide.
