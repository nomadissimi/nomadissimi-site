export async function POST(req: Request) {
  console.log("CONTACT ROUTE HIT ✅");

  const body = await req.json();
  console.log("New contact message:", body);

  return Response.json({ ok: true });
}
