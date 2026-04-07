import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sendIntakeNotification } from "@/lib/email/sendIntakeNotification";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      intakeType,
      firstName,
      lastName,
      email,
      city,
      country,
      citizenships,
      occupation,
      workSetup,
      degreeTitle,
      workExperience,
      workSituation,
      pathway,
      moveDate,
      consulate,
      contactedConsulate,
      documentsStarted,
      stage,
      topQuestions,
      biggestStress,
      notes,
    } = body ?? {};

    if (!intakeType || !email || !firstName || !lastName) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

   
    const { error } = await supabaseAdmin.from("client_intakes").insert({
      intake_type: intakeType,
      first_name: firstName,
      last_name: lastName,
      email,
      city,
      country,
      citizenships,
      occupation,
      work_setup: workSetup,
      degree_title: degreeTitle,
      work_experience: workExperience,
      work_situation: workSituation,
      pathway,
      move_date: moveDate,
      consulate,
      contacted_consulate: contactedConsulate,
      documents_started: documentsStarted,
      stage,
      top_questions: topQuestions,
      biggest_stress: biggestStress,
      notes,
    });

    if (error) {
      console.error("client_intakes insert error:", error);
      return NextResponse.json(
        { error: "Failed to save intake." },
        { status: 500 }
      );
    }

    try {
      await sendIntakeNotification({
        intakeType,
        firstName,
        lastName,
        email,
        city,
        country,
        topQuestions,
        biggestStress,
        adminUrl: "https://www.nomadissimi.com/admin/intakes",
      });
    } catch (emailError) {
      console.error("intake notification email error:", emailError);
    }

    return NextResponse.json({ ok: true });


  } catch (error) {
    console.error("client intake route error:", error);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

