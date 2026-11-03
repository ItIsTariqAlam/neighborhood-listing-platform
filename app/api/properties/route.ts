import { NextResponse } from "next/server";
import { propertySchema } from "@/src/schemas/property";
import { supabaseServer } from "@/src/lib/supabaseServer";

export async function GET() {
  const { data, error } = await supabaseServer
    .from("properties")
    .select(
      "id,address,price,bedrooms,bathrooms,square_feet"
    )
    .eq("status", "approved");

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validated =
      propertySchema.parse(body);

    const { data, error } =
      await supabaseServer
        .from("properties")
        .insert(validated)
        .select()
        .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: error.errors,
      },
      { status: 400 }
    );
  }
}