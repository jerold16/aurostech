import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL;

const resend = new Resend(RESEND_API_KEY);

export interface EnquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  service?: string;
  message?: string;
}

export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Use POST.",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      budget,
      service,
      message,
    } = (req.body || {}) as EnquiryData;

    if (!name || !name.trim() || !email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Full Name and Work Email are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safePhone = phone?.trim() || "Not provided";
    const safeCompany = company?.trim() || "Not provided";
    const safeBudget = budget?.trim() || "Not specified";
    const safeService = service?.trim() || "General Consultation";
    const safeMessage = message?.trim() || "No additional message provided.";

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const { data, error } = await resend.emails.send({
      from: "AUREOSTECH Inquiries <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: safeEmail,
      subject: `New Project Inquiry from ${safeName} (${safeCompany})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #007BFF 0%, #06B6D4 100%); padding: 32px 28px; text-align: left; color: #ffffff; }
            .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
            .header p { margin: 0; font-size: 13px; opacity: 0.9; }
            .content { padding: 28px; }
            .badge { display: inline-block; padding: 4px 10px; background-color: #eff6ff; color: #007bff; border: 1px solid #bfdbfe; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 20px; }
            .table-box { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .table-box tr { border-bottom: 1px solid #f1f5f9; }
            .table-box tr:last-child { border-bottom: none; }
            .table-box td { padding: 12px 6px; font-size: 14px; vertical-align: top; }
            .table-box td.label { font-weight: 600; color: #64748b; width: 34%; }
            .table-box td.value { font-weight: 500; color: #0f172a; }
            .message-box { background-color: #f8fafc; border-left: 4px solid #007BFF; padding: 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 28px; white-space: pre-wrap; }
            .btn-reply { display: inline-block; background-color: #007BFF; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; }
            .footer { background: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>AUREOSTECH Project Brief</h1>
              <p>New consultation request submitted from website</p>
            </div>
            <div class="content">
              <span class="badge">Inquiry Received</span>
              
              <table class="table-box">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value"><strong>${safeName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Work Email</td>
                  <td class="value"><a href="mailto:${safeEmail}" style="color: #007BFF; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone</td>
                  <td class="value">${safePhone}</td>
                </tr>
                <tr>
                  <td class="label">Company / Org</td>
                  <td class="value">${safeCompany}</td>
                </tr>
                <tr>
                  <td class="label">Service of Interest</td>
                  <td class="value"><span style="color: #0284c7; font-weight: 600;">${safeService}</span></td>
                </tr>
                <tr>
                  <td class="label">Target Budget</td>
                  <td class="value"><span style="color: #16a34a; font-weight: 600;">${safeBudget}</span></td>
                </tr>
                <tr>
                  <td class="label">Received At</td>
                  <td class="value" style="font-size: 13px; color: #64748b;">${formattedDate} (IST)</td>
                </tr>
              </table>

              <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Project Overview & Objectives</h3>
              <div class="message-box">${safeMessage}</div>

              <div style="text-align: center; margin-top: 16px;">
                <a href="mailto:${safeEmail}?subject=Re: Project Engagement Inquiry - AUREOSTECH" class="btn-reply">
                  Reply to ${safeName} (${safeEmail})
                </a>
              </div>
            </div>
            <div class="footer">
              Sent via AUREOSTECH Consultation Portal • Automated Notification
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to send email via Resend.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been submitted successfully! Our team will contact you shortly.",
      data,
    });
  } catch (error: any) {
    console.error("Handler error:", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "An unexpected error occurred while submitting your brief.",
    });
  }
}