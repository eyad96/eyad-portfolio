import { useState } from "react";
import AnimatedSection from "../animation/AnimatedPage.jsx";
import { Mail, MapPin, Briefcase } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully ✅");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
      <AnimatedSection
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] to-[#020617] px-4"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Let’s Work Together
            </h2>

            <p className="text-slate-400 max-w-md leading-relaxed">
              Have a project in mind or looking for a developer to join your team?
              I’m always open to discussing new opportunities.
            </p>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>odeh.eyad9@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Amman , Jordan</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <span>Available for freelance & full-time</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full bg-[#020617] border border-slate-800 rounded-2xl p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl font-semibold text-white mb-2 text-center">
              Contact Me
            </h3>

            <p className="text-slate-400 text-sm text-center mb-6">
              I usually reply within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#020617] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  required
              />

              <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#020617] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  required
              />

              <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#020617] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                  required
              />

              <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </AnimatedSection>
  );
}
