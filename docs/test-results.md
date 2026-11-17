# Validation Test Cases

## Valid Record

valid-property.json

Expected Result: PASS

## Invalid Record 1

missing-id.json

Expected Result: FAIL

Reason:
Missing property_id

## Invalid Record 2

negative-price.json

Expected Result: FAIL

Reason:
Price must be non-negative

## Invalid Record 3

bad-zip.json

Expected Result: FAIL

Reason:
ZIP code does not match schema pattern

## Invalid Record 4

unknown-field.json

Expected Result: FAIL

Reason:
additionalProperties is false
