const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// POST route
app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //  1. EMAIL TO YOU (ADMIN)
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, //  YOU receive this
      replyTo: email, //  reply directly to user
      subject: "🚀 New Contact Form Submission",

      html: `
  <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.08);">

      <!-- Header -->
      <div style="background:#111827;color:#ffffff;padding:20px;text-align:center;">
        <h2 style="margin:0;">📩 New Contact Submission</h2>
      </div>

      <!-- Body -->
      <div style="padding:25px;color:#333;">
        <p style="margin:0 0 10px;"><strong>Sender Email:</strong></p>
        <p style="margin:0 0 20px;color:#2563eb;">${email}</p>

        <p style="margin-bottom:10px;"><strong>Message:</strong></p>

        <div style="background:#f9fafb;padding:15px;border-radius:8px;border:1px solid #e5e7eb;">
          ${message}
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

    //  2. EMAIL TO USER (PROFESSIONAL)
    await transporter.sendMail({
      from: `"Alagu Tech Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting us 🚀",

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
        <h3 style="margin-top:0;">Hello 👋</h3>

        <p style="line-height:1.6;">
          Thank you for contacting us. We've successfully received your message.
        </p>

        <div style="margin-top:20px;padding:18px;background:#f9fafb;border-radius:10px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 8px;"><strong>Your Message:</strong></p>
          <p style="margin:0;color:#374151;">${message}</p>
        </div>

        <p style="margin-top:20px;line-height:1.6;">
          Our team will review your request and get back to you shortly.
        </p>

        <!-- CTA Button -->
        <div style="text-align:center;margin-top:25px;">
          <a href="https://yourwebsite.com"
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

    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
