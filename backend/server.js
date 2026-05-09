const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// ============================================
// RESEND EMAIL CLIENT - REUSED INSTANCE
// ============================================
const resend = new Resend(process.env.RESEND_API_KEY);

// Verify Resend API key on startup
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is not set in environment variables");
} else {
  console.log("✅ Resend API Key configured - Ready to send emails");
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Create a timeout promise that rejects after specified milliseconds
 * @param {number} ms - Milliseconds before timeout
 * @param {string} message - Error message
 * @returns {Promise}
 */
const createTimeoutPromise = (ms, message = "Operation timeout") => {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(message)), ms),
  );
};

/**
 * Send admin notification email
 * @param {Object} mailData - { name, email, subject, message }
 * @returns {Promise}
 */
const sendAdminEmail = (mailData) => {
  const { name, email, subject, message } = mailData;

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to: process.env.ADMIN_EMAIL,
    replyTo: email,
    subject: `🚀 New Contact Submission - ${name}`,
    html: `
  <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.08);">

      <!-- Header -->
      <div style="background:#111827;color:#ffffff;padding:20px;text-align:center;">
        <h2 style="margin:0;">📩 New Contact Submission</h2>
      </div>

      <!-- Body -->
      <div style="padding:25px;color:#333;">
        <p style="margin:0 0 10px;"><strong>Sender Name:</strong></p>
        <p style="margin:0 0 20px;color:#2563eb;font-weight:bold;">${name}</p>

        <p style="margin:0 0 10px;"><strong>Sender Email:</strong></p>
        <p style="margin:0 0 20px;color:#2563eb;"><a href="mailto:${email}">${email}</a></p>

        <p style="margin-bottom:10px;"><strong>Subject:</strong></p>
        <p style="margin:0 0 20px;color:#374151;">${subject}</p>

        <p style="margin-bottom:10px;"><strong>Message:</strong></p>

        <div style="background:#f9fafb;padding:15px;border-radius:8px;border:1px solid #e5e7eb;">
          ${message.replace(/\n/g, "<br/>")}
        </div>

        <p style="margin-top:20px;font-size:13px;color:#6b7280;">
          Reply directly to this email to respond to the user.
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#f3f4f6;text-align:center;padding:15px;font-size:12px;color:#6b7280;">
        Alagu Tech Solutions • Internal Notification
      </div>

    </div>
  </div>
`,
  });
};

/**
 * Send user confirmation email
 * @param {Object} mailData - { name, email, subject, message }
 * @returns {Promise}
 */
const sendUserEmail = (mailData) => {
  const { name, email, message } = mailData;

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    to: email,
    subject: "We received your message 🚀",
    html: `
  <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:linear-gradient(90deg,#2563eb,#7c3aed);padding:25px;text-align:center;color:#fff;">
        <h2 style="margin:0;">Alagu Tech Solutions 🚀</h2>
        <p style="margin:5px 0 0;font-size:14px;">We build modern web experiences</p>
      </div>

      <!-- Body -->
      <div style="padding:30px;color:#333;">
        <h3 style="margin-top:0;">Hello ${name} 👋</h3>

        <p style="line-height:1.6;">
          Thank you for reaching out to Alagu Tech Solutions. We've successfully received your message and will review it shortly.
        </p>

        <div style="margin-top:20px;padding:18px;background:#f9fafb;border-radius:10px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 8px;"><strong>Your Message:</strong></p>
          <p style="margin:0;color:#374151;">${message.replace(/\n/g, "<br/>")}</p>
        </div>

        <p style="margin-top:20px;line-height:1.6;">
          Our team will carefully review your request and get back to you as soon as possible. We appreciate your interest!
        </p>

        <!-- CTA Button -->
        <div style="text-align:center;margin-top:25px;">
          <a href="https://www.alaguts.com"
             style="display:inline-block;padding:12px 22px;background:#2563eb;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">
             Visit Our Website
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#111827;color:#9ca3af;text-align:center;padding:18px;font-size:12px;">
        © 2026 Alagu Tech Solutions<br/>
        Building scalable web solutions
      </div>

    </div>
  </div>
`,
  });
};

// ============================================
// ROUTES
// ============================================

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "Server Running 🚀",
    timestamp: new Date().toISOString(),
  });
});

// Contact form email route - OPTIMIZED
app.post("/send-email", async (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, subject, message) are required",
    });
  }

  try {
    // Send both emails in parallel with timeout protection
    // 1. Admin email to company inbox
    // 2. Confirmation email to user
    const allEmails = Promise.all([
      sendAdminEmail({ name, email, subject, message }),
      sendUserEmail({ name, email, message }),
    ]);

    const timeoutPromise = createTimeoutPromise(
      20000,
      "Email sending timeout - Request took too long",
    );

    // Race against timeout
    await Promise.race([allEmails, timeoutPromise]);

    console.log(`
✅ Both emails sent successfully!
   📧 Admin Email: ${process.env.ADMIN_EMAIL}
   📧 User Email: ${email}
   📝 Subject: ${subject}
   ⏱️  Timestamp: ${new Date().toISOString()}
    `);

    res.status(200).json({
      success: true,
      message: "Email sent successfully to both admin and your email!",
    });
  } catch (error) {
    console.error("❌ Email sending error:", {
      message: error.message,
      code: error.code,
      timestamp: new Date().toISOString(),
    });

    let errorMessage = "Error sending email";
    let statusCode = 500;

    if (error.message.includes("timeout")) {
      errorMessage = "Email sending timeout - Please try again.";
    } else if (
      error.message.includes("API key") ||
      error.message.includes("Unauthorized")
    ) {
      errorMessage = "Email service authentication failed. Check RESEND_API_KEY.";
      statusCode = 401;
    } else if (
      error.message.includes("ECONNREFUSED") ||
      error.message.includes("Network")
    ) {
      errorMessage =
        "Email service connection failed. Please try again later.";
      statusCode = 503;
    }

    res.status(statusCode).json({
      success: false,
      message: errorMessage,
    });
  }
});

// ============================================
// SERVER STARTUP
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║   🚀 Alagu Tech Solutions Backend   ║
║      Server Running on Port ${PORT}    ║
╚═══════════════════════════════════════╝
  `);
});
