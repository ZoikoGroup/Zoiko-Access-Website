"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const statusChips = [
  {
    title: "Submitting",
    desc: "Progress is shown. Do not send twice.",
  },
  {
    title: "Received by Zoiko Access",
    desc: "Only after the message is safely stored, with a reference.",
  },
  {
    title: "Under review",
    desc: "The team is looking at it.",
  },
  {
    title: "More information requested",
    desc: "We need a little more from you.",
  },
  {
    title: "Closed or redirected",
    desc: "Sent to a better route.",
  },
  {
    title: "Unable to deliver",
    desc: "We could not confirm receipt, so nothing was submitted. Try again or use another verified route.",
  },
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    orgType: "",
    topic: "",
    description: "",
    agreedPrivacy: false,
    agreedMarketing: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="relative w-full border-b border-[#E1DBF9] bg-[#FAF9FD] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            Contact form
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="mt-3.5 max-w-[800px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            The form, when the channel is live
          </h2>
          <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[#575387] sm:text-[16px]">
            The server decides whether the form appears. If the channel is not approved, staffed and
            routed, there is no form at all.
          </p>
        </div>

        {/* Grid Container */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Specimen Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[16px] border border-[#E1DBF9] bg-white shadow-sm lg:col-span-8"
          >
            {/* Form Top Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-[#282063] to-[#2D40CB] px-6 py-4.5 text-white">
              <strong className="text-[16.8px] font-semibold tracking-tight">
                Contact clinical partnerships
              </strong>
              <span className="rounded-full bg-white/20 px-3.5 py-1 text-[12.8px] font-semibold text-white backdrop-blur-xs">
                Specimen · not connected
              </span>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <p className="text-[15.5px] leading-[1.65] text-[#575387]">
                Tell us about your professional role and general collaboration interest. Do not
                include patient details.
              </p>

              {submitted && (
                <div className="mt-4 rounded-[8px] bg-[#ECE7FE] p-4 text-[14.5px] font-medium text-[#282063] border border-[#B9B0EA]">
                  This is an interactive specimen form demonstrating interface behavior. In production,
                  submissions are securely transmitted via authorized encrypted channels.
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Field 1: Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-[14.7px] font-semibold text-[#1B1750]">
                    Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="h-[50px] rounded-[6px] border border-[#B9B0EA] bg-white px-4 text-[15px] text-[#1B1750] placeholder:text-slate-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20"
                  />
                </div>

                {/* Field 2: Work Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-[14.7px] font-semibold text-[#1B1750]">
                    Work email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="colleague@institution.org"
                    className="h-[50px] rounded-[6px] border border-[#B9B0EA] bg-white px-4 text-[15px] text-[#1B1750] placeholder:text-slate-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20"
                  />
                </div>

                {/* Field 3: Organization */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-org" className="text-[14.7px] font-semibold text-[#1B1750]">
                    Organization (optional)
                  </label>
                  <input
                    id="form-org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Hospital, clinic or network"
                    className="h-[50px] rounded-[6px] border border-[#B9B0EA] bg-white px-4 text-[15px] text-[#1B1750] placeholder:text-slate-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20"
                  />
                </div>

                {/* Field 4: Professional Role */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-role" className="text-[14.7px] font-semibold text-[#1B1750]">
                    Professional role
                  </label>
                  <select
                    id="form-role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="h-[50px] rounded-[6px] border border-[#B9B0EA] bg-white px-4 text-[15px] text-[#1B1750] focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20 cursor-pointer"
                  >
                    <option value="">Choose a role</option>
                    <option value="lead">Hospital or Clinic Clinical Lead</option>
                    <option value="clinician">Independent Licensed Clinician</option>
                    <option value="coord-admin">Care Coordination Administrator</option>
                    <option value="cmo">Chief Medical Officer / Medical Director</option>
                    <option value="it-lead">Health IT / Technical Systems Lead</option>
                    <option value="other">Other Healthcare Professional</option>
                  </select>
                </div>

                {/* Field 5: Organization Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-orgtype" className="text-[14.7px] font-semibold text-[#1B1750]">
                    Organization type (optional)
                  </label>
                  <select
                    id="form-orgtype"
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                    className="h-[50px] rounded-[6px] border border-[#B9B0EA] bg-white px-4 text-[15px] text-[#1B1750] focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20 cursor-pointer"
                  >
                    <option value="">Choose a type</option>
                    <option value="hospital">Hospital or Health System</option>
                    <option value="outpatient">Outpatient Medical Group</option>
                    <option value="academic">Academic Medical Center</option>
                    <option value="specialist">Specialist Practice</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Field 6: Inquiry Topic */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-topic" className="text-[14.7px] font-semibold text-[#1B1750]">
                    Inquiry topic
                  </label>
                  <select
                    id="form-topic"
                    required
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="h-[50px] rounded-[6px] border border-[#B9B0EA] bg-white px-4 text-[15px] text-[#1B1750] focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20 cursor-pointer"
                  >
                    <option value="">Choose a topic</option>
                    <option value="scope">Care Coordination Feasibility</option>
                    <option value="readiness">Organizational Readiness & Governance</option>
                    <option value="escalation">Escalation & Clinical Decision Boundaries</option>
                    <option value="pilot">Regional Pilot Availability</option>
                    <option value="general">General Partnership Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Textarea: Description */}
              <div className="mt-5 flex flex-col gap-1.5">
                <label htmlFor="form-desc" className="text-[14.7px] font-semibold text-[#1B1750]">
                  Brief, non-clinical description (optional)
                </label>
                <textarea
                  id="form-desc"
                  rows={4}
                  maxLength={1000}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline your organization's general focus and objectives..."
                  className="rounded-[6px] border border-[#B9B0EA] bg-white p-4 text-[15px] text-[#1B1750] placeholder:text-slate-400 focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20"
                />
                <span className="text-[13.1px] text-[#575387]">
                  Up to 1,000 characters. No uploads.
                </span>
              </div>

              {/* Checkboxes */}
              <div className="mt-5 flex flex-col gap-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreedPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedPrivacy: e.target.checked })}
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-[#4267D5] focus:ring-[#4267D5]"
                  />
                  <span className="text-[14.8px] sm:text-[15.2px] leading-[1.5] text-[#575387]">
                    I have read the privacy notice describing how this inquiry will be handled.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedMarketing}
                    onChange={(e) =>
                      setFormData({ ...formData, agreedMarketing: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-[#4267D5] focus:ring-[#4267D5]"
                  />
                  <span className="text-[14.8px] sm:text-[15.2px] leading-[1.5] text-[#575387]">
                    Optional: I agree to be contacted about partnership opportunities. This is separate
                    from the notice above.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="mt-7">
                <button
                  type="submit"
                  className="inline-flex h-[49px] items-center justify-center rounded-[6px] bg-[#2D3FC7] px-8 text-[16px] font-semibold text-white shadow-sm transition-all hover:bg-[#2030A5] hover:shadow-md cursor-pointer"
                >
                  Contact clinical partnerships
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Status Chips (What you would see after submitting) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3.5 lg:col-span-4"
          >
            <div className="mb-1">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#5B47D6]">
                After submission sequence
              </span>
              <h3 className="mt-1 text-[17.6px] font-semibold text-[#1B1750]">
                What you would see after submitting
              </h3>
            </div>

            {statusChips.map((chip, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center rounded-[12px] border border-[#E1DBF9] bg-[#ECE7FE] p-4.5 transition-all hover:border-[#B49CFA] hover:shadow-xs"
              >
                <b className="text-[15.5px] font-bold text-[#1B1750]">{chip.title}</b>
                <p className="mt-1 text-[14px] leading-[1.55] text-[#575387]">{chip.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
