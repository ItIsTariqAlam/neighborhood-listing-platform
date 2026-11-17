# ADR 001 - Data Contract Strategy

## Context

The application must validate property records before they reach the UI or future database layers.

## Decision

JSON Schema will be used as the primary validation contract.

TypeScript types will mirror the schema.

Amenities will be stored as controlled values.

## Alternatives Considered

### Free Text Amenities

Pros:
- Flexible

Cons:
- Inconsistent values
- Harder filtering

### Join Table

Pros:
- Fully normalized

Cons:
- Additional complexity beyond lab scope

## Consequences

Benefits:
- Consistent validation
- Reliable generated test data
- Reduced invalid records

Tradeoffs:
- Less flexibility than free text