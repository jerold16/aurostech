import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL;

const resend = new Resend(RESEND_API_KEY);

export interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed. Use POST." });
  }

  try {
    const { name, phone, email, company, service, message } =
      (req.body || {}) as EnquiryData;

    // Validate required fields
    if (!name?.trim()) {
      return res.status(400).json({ success: false, message: "Full Name is required." });
    }
    if (!phone?.trim()) {
      return res.status(400).json({ success: false, message: "Phone Number is required." });
    }

    // Validate email only if provided
    if (email?.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({ success: false, message: "Please enter a valid email address." });
      }
    }

    const safeName    = name.trim();
    const safePhone   = phone.trim();
    const safeEmail   = email?.trim() || null;
    const safeCompany = company?.trim() || "Not provided";
    const safeService = service?.trim() || "General Enquiry";
    const safeMessage = message?.trim() || "No additional message.";

    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const replyToField = safeEmail
      ? { replyTo: safeEmail }
      : {};

    const { data, error } = await resend.emails.send({
      from: "AureosTech Enquiries <onboarding@resend.dev>",
      to: [TO_EMAIL!],
      ...replyToField,
      subject: `New Enquiry from ${safeName}${safeEmail ? ` — ${safeEmail}` : ` — ${safePhone}`}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #007BFF 0%, #06B6D4 100%); padding: 28px; color: #fff; }
            .header h1 { margin: 0 0 4px; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
            .header p  { margin: 0; font-size: 13px; opacity: 0.88; }
            .content { padding: 28px; }
            .badge { display: inline-block; padding: 4px 10px; background: #eff6ff; color: #007bff; border: 1px solid #bfdbfe; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 20px; }
            .table-box { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table-box tr { border-bottom: 1px solid #f1f5f9; }
            .table-box tr:last-child { border-bottom: none; }
            .table-box td { padding: 11px 6px; font-size: 14px; vertical-align: top; }
            .table-box td.label { font-weight: 600; color: #64748b; width: 36%; }
            .table-box td.value { font-weight: 500; color: #0f172a; }
            .msg-box { background: #f8fafc; border-left: 4px solid #007BFF; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.65; color: #334155; margin-bottom: 28px; white-space: pre-wrap; }
            .btn { display: inline-block; padding: 11px 22px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; }
            .btn-phone { background: #007BFF; color: #ffffff !important; }
            .btn-email { background: #f1f5f9; color: #0f172a !important; border: 1px solid #e2e8f0; }
            .actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
            .footer { background: #f8fafc; padding: 18px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Website Enquiry</h1>
              <p>Someone reached out via the AureosTech contact form</p>
            </div>
            <div class="content">
              <span class="badge">New Enquiry</span>

              <table class="table-box">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value"><strong>${safeName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Phone</td>
                  <td class="value"><a href="tel:${safePhone}" style="color:#007BFF; text-decoration:none; font-weight:600;">${safePhone}</a></td>
                </tr>
                ${safeEmail ? `
                <tr>
                  <td class="label">Email</td>
                  <td class="value"><a href="mailto:${safeEmail}" style="color:#007BFF; text-decoration:none; font-weight:600;">${safeEmail}</a></td>
                </tr>` : ''}
                <tr>
                  <td class="label">Company / Org</td>
                  <td class="value">${safeCompany}</td>
                </tr>
                <tr>
                  <td class="label">Service Interested In</td>
                  <td class="value"><span style="color:#0284c7; font-weight:600;">${safeService}</span></td>
                </tr>
                <tr>
                  <td class="label">Received At</td>
                  <td class="value" style="font-size:13px; color:#64748b;">${formattedDate} (IST)</td>
                </tr>
              </table>

              <h3 style="font-size:13px; font-weight:700; color:#0f172a; margin:0 0 10px; text-transform:uppercase; letter-spacing:0.05em;">Message</h3>
              <div class="msg-box">${safeMessage}</div>

              <div class="actions">
                <a href="tel:${safePhone}" class="btn btn-phone">📞 Call ${safeName}</a>
                ${safeEmail ? `<a href="mailto:${safeEmail}?subject=Re: Your Enquiry — AureosTech" class="btn btn-email">✉️ Reply by Email</a>` : ''}
              </div>
            </div>
            <div class="footer">
              Sent via AureosTech Website Contact Form • Automated Notification
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ success: false, message: error.message || "Failed to send email." });
    }

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been submitted. We'll be in touch shortly!",
      data,
    });

  } catch (error: any) {
    console.error("Handler error:", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "An unexpected error occurred.",
    });
  }
}