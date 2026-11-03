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

# Practical Midterm - Persistence, Security, and Accessibility

## AI Tools Used

- ChatGPT
- GitHub Copilot
- Google AI Studio

## Implementation Areas

### Database and Persistence

AI assistance was used to review and develop the PostgreSQL
migration, including table relationships, primary keys,
foreign keys, constraints, timestamps, and cascading behavior.

### Security

AI assistance was used to review Row Level Security policies
for public listing access, property ownership, inquiry privacy,
and administrative permissions.

### API and Validation

AI assistance was used to implement and review:
- Property request validation using Zod.
- Structured HTTP 400 validation errors.
- The properties API route.
- Server-side Supabase client configuration.
- Parameterized database queries.

### Accessibility and Responsive Design

AI assistance was used to review:
- Semantic HTML elements.
- Accessible property card markup.
- Keyboard navigation.
- Visible keyboard focus indicators.
- Responsive one-, two-, and three-column layouts.

## Human Review and Decisions

Generated code was reviewed and adjusted to match the
assignment requirements. Implementation choices were
evaluated based on functionality, security, accessibility,
and project scope.

## Verification Status

- Changes committed and pushed to the exam feature branch.
- Git working tree confirmed clean after the latest push.
- Local production build encountered a syntax error.
- Full browser and keyboard-navigation verification of the
  latest implementation remains unconfirmed.

## AI Collaboration Table

| Tool | Prompt / Task | Output Used | Output Rejected | Verification | Commit |
|---|---|---|---|---|---|
| ChatGPT | Explain the purpose of Next.js, TypeScript, Tailwind CSS, ESLint, and App Router for a beginner building a neighborhood property platform. | Plain-language explanation of the technology stack. | Detailed examples not required for the initial app shell. | Compared with Gemini's response. | Earlier project commits |
| Gemini | Same technology-stack explanation prompt used with ChatGPT. | Alternative explanation using building analogies. | Additional implementation details outside the lab scope. | Compared against ChatGPT's response. | Earlier project commits |
| Google AI Studio | Propose a minimal Next.js App Router and TypeScript starter with a file plan, terminal commands, accessibility requirements, and verification checklist. | File plan, setup guidance, and accessibility recommendations. | Advanced architecture outside the assignment scope. | Reviewed recommendations against assignment requirements. | Earlier project commits |
| ChatGPT / GitHub Copilot | Assist with the PostgreSQL migration, database relationships, constraints, and persistence requirements. | Database implementation guidance and migration-related code. | Any suggestions that were outside the assignment requirements or unnecessary for the project scope. | Reviewed implementation against the persistence requirements. | Midterm implementation commits |
| ChatGPT / GitHub Copilot | Assist with Row Level Security policies and authorization requirements. | Security implementation guidance for public access, ownership, inquiry privacy, and administrative permissions. | Any suggestions that did not match the required authorization behavior. | Reviewed policies against the security requirements. | Midterm implementation commits |
| ChatGPT / GitHub Copilot | Assist with Zod validation, structured HTTP 400 responses, and the properties API route. | Validation schema, API implementation guidance, and server-side configuration. | Unnecessary features or implementation suggestions outside the required API behavior. | Reviewed implementation against the API and validation requirements. | Midterm implementation commits |
| ChatGPT / GitHub Copilot | Review the PropertyCard component for semantic HTML, keyboard accessibility, visible focus indicators, and responsive layout requirements. | Accessibility and responsive-design improvements. | Additional functionality not required by the assignment. | Reviewed component markup and responsive grid classes. | `cab3bb8` |

*The latest midterm implementation commit is `cab3bb8`. Earlier project commits may contain work from multiple AI tools. Update individual commit references if you can identify the exact commits associated with each task.*

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

## Earlier lab Verification Notes

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

## Practical Midterm - Human Review and Implementation Decisions

AI-generated suggestions were reviewed before being incorporated into the project.

Implementation decisions were evaluated based on:

- Alignment with the assignment requirements.
- Correctness of database relationships and constraints.
- Appropriate access restrictions and security policies.
- Proper request validation and error handling.
- Semantic HTML and accessibility.
- Responsive layout behavior.
- Avoiding unnecessary features outside the project scope.

Not every AI-generated suggestion was automatically accepted. Suggestions that introduced unnecessary complexity or did not align with the assignment requirements were excluded.

## Practical Midterm - Verification Status

The following development activities were completed:

- Midterm implementation changes were committed to the exam feature branch.
- Changes were pushed to the remote GitHub repository.
- The Git working tree was confirmed clean after the latest push.

The following verification limitations remain:

- The local production build encountered a syntax error during testing.
- Full browser verification of the latest implementation remains unconfirmed.
- Full keyboard-navigation verification of the latest implementation remains unconfirmed.
- Database runtime security testing should only be reported as successful when the corresponding tests have actually been performed.

These limitations are documented to distinguish completed implementation work from tests that have not yet been verified.