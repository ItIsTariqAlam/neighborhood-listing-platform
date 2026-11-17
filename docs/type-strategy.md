# Type Strategy

## Decision

The project uses JSON Schema as the primary source of truth for property data validation.

## Rationale

The schema is used for:

- AI-generated structured output
- Data validation
- Property record testing

TypeScript types are maintained to match the schema structure.

## Benefits

- Prevents invalid property data from reaching the UI.
- Provides consistent validation rules.
- Supports automated testing of generated records.