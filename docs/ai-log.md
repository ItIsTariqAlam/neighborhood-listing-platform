# AI Collaboration Log

## AI Comparison Activity

### Prompt

Explain in plain language the purpose of the following stack:

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- App Router

Assume I am a beginner building a neighborhood property platform.

---

## ChatGPT vs Gemini Differences

### Difference 1

ChatGPT focused on beginner-friendly explanations and practical examples of how each technology would be used in a neighborhood property platform.

Gemini used a building and construction analogy to explain the role of each technology within the application.

### Difference 2

ChatGPT emphasized developer workflow, maintainability, and data safety.

Gemini emphasized performance, search engine visibility, and scalability.

---

## AI Collaboration Table

| Tool | Prompt | Output Used | Output Rejected | Verification | Commit |
|--------|--------|--------|--------|--------|--------|
| ChatGPT | Explain the purpose of Next.js, TypeScript, Tailwind CSS, ESLint, and App Router for a beginner building a neighborhood property platform. | Plain-language explanation of the stack and how the technologies work together. | Detailed examples not required for the initial app shell. | Compared with Gemini response and confirmed concepts matched official Next.js usage. | Pending |
| Gemini | Same stack explanation prompt used with ChatGPT. | Alternative explanation using building analogies and architecture-focused descriptions. | Additional implementation details outside the scope of the lab. | Compared against ChatGPT response and identified two documented differences. | Pending |
| Google AI Studio | Act as a senior teaching assistant. Propose a minimal Next.js App Router + TypeScript + Tailwind starter for a neighborhood property platform. Give a file plan, terminal commands, accessibility requirements, and a verification checklist. Never invent command results or credentials. | File plan, setup commands, accessibility requirements, and verification checklist. | Advanced architecture and additional features not required for the app shell milestone. | Verified that recommendations aligned with assignment requirements and contained no secrets or credentials. | Pending |

---

## Google AI Studio Summary

### File Plan Used

- app/
- layout.tsx
- page.tsx
- globals.css
- components/
- lib/
- types/

### Commands Used

```bash
npx create-next-app@latest
npm run dev
npm run lint
npm run build
```

### Accessibility Guidance Used

- Semantic HTML elements
- Accessible headings
- Labeled form controls
- Keyboard accessibility
- Appropriate color contrast

### Verification Checklist Used

- Application loads successfully
- Browser console contains no errors
- npm run lint passes
- npm run build passes
- No secrets or credentials committed to the repository

---

## Verification Notes

### Local Testing

- Next.js application started successfully with npm run dev.
- Application accessible at http://localhost:3000.
- Browser loaded successfully without blocking errors.

### App Shell Requirements

Completed:

- Project heading added
- Project purpose statement added
- Listings feature card added
- Neighborhood Sponsors feature card added
- Voice Help feature card added

### Security Review

Verified:

- No credentials included in project files.
- No API keys included in project files.
- No .env files committed.

---

## Commit Notes

### Commit 1
Create Next.js TypeScript project

### Commit 2
Replace starter page with neighborhood platform app shell

# Lab 2 - Reusable Components and Accessibility Review

## Step 2 - TypeScript Interface Review

### Tool

Google AI Studio

### Prompt

Provide TypeScript interfaces only for a PropertyCard component and a SponsorBanner component. Include required and optional fields. Do not generate implementation code.

### Output Used

#### PropertyCard Required Fields

```ts
id: string
title: string
price: number
imageUrl: string
address: string | PropertyAddress
```

#### PropertyCard Optional Fields

```ts
bedrooms?: number
bathrooms?: number
squareFeet?: number
propertyType?: string
listingStatus?: string
amenityHighlights?: string[]
```

#### SponsorBanner Required Fields

```ts
id: string
sponsorName: string
sponsorLogoUrl: string
targetUrl: string
```

#### SponsorBanner Optional Fields

```ts
headline?: string
tagline?: string
description?: string
callToActionText?: string
placement?: string
variant?: string
```

### Output Rejected

Rejected fields that added complexity beyond the requirements of the lab:

```ts
onFavoriteToggle
onShare
onImpression
onClose
campaignId
additionalImages
agent
placement tracking
telemetry callbacks
```

Reason:
The lab only requires reusable components, shared data types, semantic HTML, accessibility review, and responsive layouts. Advanced analytics and event tracking are not required.

### Review of Required vs Optional Fields

#### Required Property Fields

These fields are necessary to display a property card:

```ts
id
title
price
imageUrl
address
```

#### Optional Property Fields

These fields provide additional details but are not required for every property:

```ts
bedrooms
bathrooms
squareFeet
propertyType
listingStatus
amenityHighlights
```

#### Required Sponsor Fields

These fields are necessary to display a sponsor banner:

```ts
id
sponsorName
sponsorLogoUrl
targetUrl
```

#### Optional Sponsor Fields

These fields provide additional marketing content:

```ts
headline
tagline
description
callToActionText
variant
placement
```

### Verification

Reviewed all generated interfaces before implementation.

Verified:
- Required fields support component rendering.
- Optional fields support future expansion.
- No secrets or sensitive information included.
- Interfaces can be simplified for the project's current scope.

### Commit

Pending

## Step 4 - PropertyCard Component

### Verification

Reviewed generated markup and confirmed:

- Uses semantic article element.
- Includes heading.
- Includes address.
- Includes price information.
- Uses facts list for bedrooms and bathrooms.
- Includes meaningful image alt text.
- Includes keyboard-accessible link with descriptive label.

### Commit 3
Add AI collaboration documentation and verification notes

## Step 5 - SponsorBanner Component

### Verification

Reviewed generated markup and confirmed:

- Sponsored label is visibly displayed.
- Link identifies the business by name.
- Component is keyboard accessible.
- Semantic aside element used for sponsored content.

## Step 6 - SearchFilters Component

### Verification

Reviewed generated form and confirmed:

- Uses semantic form element.
- Labels are associated using htmlFor and id.
- Select controls are keyboard accessible.
- Submit button is keyboard accessible.
- Does not rely on placeholder text as labels.

## Step 7 - Sample Data and Rendering

### Verification

Implemented:

- Three sample Property objects.
- Rendering with Array.map().
- Stable property IDs used for React keys.

Verified that list rendering works correctly without key warnings.