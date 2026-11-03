# Security Audit - Neighborhood Listing Platform

## Authorization Matrix

| Role | Action | Expected Result | Actual Result |
|---|---|---|---|
| Anonymous | Read approved listings | PASS | Not runtime-tested |
| Anonymous | Read draft listings | FAIL / DENIED | Not runtime-tested |
| Anonymous | Read active sponsors | PASS | Not runtime-tested |
| Owner A | Update Owner A draft listing | PASS | Not runtime-tested |
| Owner A | Update Owner B listing | FAIL / DENIED | Not runtime-tested |
| Inquirer | Submit inquiry | PASS | Not runtime-tested |
| Inquirer | Read existing inquiries | FAIL / DENIED | Not runtime-tested |
| Admin | Read all records | PASS | Not runtime-tested |
| Admin | Write all records | PASS | Not runtime-tested |

*Update the Actual Result column when the corresponding test has been executed.*

## Row Level Security Verification

The database migration enables Row Level Security (RLS) on the following five tables:

- `profiles`
- `sponsors`
- `properties`
- `property_sponsors`
- `inquiries`

The security policies are intended to enforce the following restrictions:

- Public access is limited to approved property listings.
- Public sponsor access is limited to eligible active sponsors.
- Property owners can manage their own listings using `owner_id = auth.uid()`.
- Owners cannot modify listings belonging to other users.
- Inquiry records are protected from unauthorized public reads.
- Administrative access is restricted to authorized operations.

## Test Methodology and Evidence

The authorization matrix identifies the expected security behavior for each role and operation.

Verification should include both permitted and denied operations, including attempts to access records belonging to another user.

Suggested verification methods include:

- Reviewing the PostgreSQL migration and RLS policy definitions.
- Testing database access using authenticated user sessions.
- Testing anonymous access to approved and draft listings.
- Attempting to modify another owner's property listing.
- Attempting to read inquiry records without authorization.
- Testing administrative access with an authorized administrator account.

## Verification Limitations

A review of SQL policies does not independently prove that runtime authorization works correctly.

Results should only be marked PASS or FAIL / DENIED after the corresponding database or application test has actually been executed.

Any test that has not been executed should remain marked `Not runtime-tested`.

## Security Review Summary

The migration includes RLS configuration for all five database tables. The policies are designed to restrict public access, enforce property ownership, and protect inquiry records.

Further runtime verification is necessary to confirm that the policies behave as expected under actual anonymous, owner, inquirer, and administrator sessions.