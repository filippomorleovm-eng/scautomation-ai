import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, business, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Console log come backup
    console.log("\n══════════════════════════════════════");
    console.log("  NUOVA RICHIESTA AUDIT AI");
    console.log("══════════════════════════════════════");
    console.log(`  Nome:     ${name}`);
    console.log(`  Contatto: ${contact}`);
    console.log(`  Business: ${business}`);
    if (message) console.log(`  Messaggio: ${message}`);
    console.log(`  Data:     ${new Date().toLocaleString("it-IT")}`);
    console.log("══════════════════════════════════════\n");

    // Invio email con Resend
    const { error } = await resend.emails.send({
      from: "SC Automation AI <noreply@scautomation-ai.it>",
      to: "info@scautomation-ai.it",
      subject: `Nuovo contatto dal sito — ${name}`,
      html: `
        <h2>Nuova richiesta di Audit AI</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#1E3A5F;border-bottom:1px solid #eee;">Nome</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#1E3A5F;border-bottom:1px solid #eee;">Contatto</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#1E3A5F;border-bottom:1px solid #eee;">Business</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${business}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#1E3A5F;border-bottom:1px solid #eee;">Messaggio</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${message}</td>
          </tr>
          ` : ""}
        </table>
        <p style="margin-top:16px;color:#6B7280;font-size:13px;">
          Inviato il ${new Date().toLocaleString("it-IT")} dal sito scautomation-ai.it
        </p>
      `,
    });

    if (error) {
      console.error("Errore Resend:", error);
      return NextResponse.json(
        { success: false, error: "Errore nell'invio dell'email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore API contact:", err);
    return NextResponse.json(
      { success: false, error: "Errore nel processare la richiesta." },
      { status: 500 }
    );
  }
}
