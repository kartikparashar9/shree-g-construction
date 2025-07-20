import { prisma } from '@/lib/utils';
import Brevo from '@getbrevo/brevo';

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return new Response(JSON.stringify({ success: true, data: contacts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("GET Contact API Error:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to fetch", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const { name, mobile, email, message } = await req.json();

    if (!process.env.BREVO_API_KEY) throw new Error("Brevo API key is missing");

    await prisma.contact.create({
      data: { name, email, mobile, message },
    });

    const emailApi = new Brevo.TransactionalEmailsApi();
    emailApi.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    const adminEmailData = {
      sender: { email: "bathrilove@gmail.com", name: "Contact Form" },
      to: [{ email: "mahendrachandel040@gmail.com" }],
      subject: "New Contact Form Submission",
      htmlContent: `<h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>`,
    };

    const userEmailData = {
      sender: { email: "bathrilove@gmail.com", name: "ShreeG-Construction" },
      to: [{ email }],
      subject: "Thank You for Contacting Us",
      htmlContent: `<h3>Hi ${name},</h3>
        <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
        <p><b>Your Message:</b> ${message}</p>
        <p>Best Regards,<br/>ShreeG-Construction</p>`,
    };

    await Promise.all([
      emailApi.sendTransacEmail(adminEmailData),
      emailApi.sendTransacEmail(userEmailData),
    ]);

    return new Response(JSON.stringify({ success: true, message: "Saved and emails sent" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
