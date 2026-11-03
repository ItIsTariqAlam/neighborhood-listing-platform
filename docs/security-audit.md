Authorization Matrix
Role	Action	Expected Result	Actual Result
Anonymous	Read approved listings	PASS	PASS
Anonymous	Read draft listings	FAIL / DENIED	FAIL / DENIED
Anonymous	Read active sponsors	PASS	PASS
Owner A	Update Owner A draft listing	PASS	PASS
Owner A	Update Owner B listing	FAIL / DENIED	FAIL / DENIED
Inquirer	Submit inquiry	PASS	PASS
Inquirer	Read existing inquiries	FAIL / DENIED	FAIL / DENIED
Admin	Read all records	PASS	PASS
Admin	Write all records	PASS	PASS
Verification Notes
RLS enabled on profiles.
RLS enabled on sponsors.
RLS enabled on properties.
RLS enabled on property_sponsors.
RLS enabled on inquiries.
Public access limited to approved properties and active sponsors.
Owner access scoped to owner_id = auth.uid().
Inquiry records protected from public reads.