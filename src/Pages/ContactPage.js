import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: 'Customer Service & Sales',
    message: '',
    recaptchaToken: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token) => {
    setFormData({ ...formData, recaptchaToken: token });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('https://tdm-aero-com-backend.onrender.com/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.message || 'Form submitted successfully.');
      window.location.reload();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit the form.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Condensed'] relative">
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
      )}

      <main className="pt-[115px]">
        <Breadcrumb />

        <div className="max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center mb-2 uppercase">
            Send Us a Message
          </h1>
          <p className="text-center text-sm text-gray-700 mb-6">"*" indicates required fields</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border p-2 bg-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 invisible">Last</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border p-2 bg-gray-200 rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 bg-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 bg-gray-200 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Department <span className="text-red-500">*</span>
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-2 bg-white rounded"
                required
              >
                <option>Customer Service & Sales</option>
                <option>Technical Support</option>
                <option>Logistics</option>
                <option>Partnership Inquiry</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Message / Inquiry <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="12"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 bg-gray-200 rounded"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LdnR0ArAAAAAIgTLZPQqDY1bp-aoxhUjgshS1La"
                onChange={handleCaptchaChange}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#22BDB6] text-black font-semibold px-6 py-2 rounded hover:bg-[#106A77] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
