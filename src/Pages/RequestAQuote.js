import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Breadcrumb from '../components/Breadcrumb';

const initialFormState = {
  rfqNumber: '',
  partNumbers: '',
  quantity: '',
  dateRequired: '',
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  comments: '',
};

const RequestAQuote = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please verify you are not a robot.');
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://tdm-aero-com-backend.onrender.com/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: captchaToken }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('✅ Request submitted successfully!');
        setFormData(initialFormState);         // reset form fields
        setCaptchaToken(null);                 // clear token
        recaptchaRef.current.reset();          // reset captcha
      } else {
        alert('❌ Submission failed: ' + result.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('❌ Network error');
      } finally {
    setIsSubmitting(false); // Dừng loading
    }
  };

  return (
    <div className="bg-white text-black font-['Roboto_Condensed']">
      <NavBar />
      <Breadcrumb />

      <div className="bg-black text-white text-xs sm:text-sm px-4 py-2">
        <span className="text-gray-400">Home</span>
        <span className="mx-1">•</span>
        <span>Request A Quote</span>
      </div>

      <div className="bg-[#106A77] text-center py-10 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-3 text-white">
          Request A Quote
        </h1>
        <p className="text-black text-lg max-w-2xl mx-auto mt-10">
          Please fill out the following form and we will get in touch with you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 sm:px-8 py-10 space-y-4">
        {[
          ['rfqNumber', 'RFQ Number'],
          ['partNumbers', 'Part Numbers'],
          ['quantity', 'Quantity'],
          ['dateRequired', 'Date Required'],
          ['companyName', 'Company Name'],
          ['contactName', 'Contact Name'],
          ['email', 'Your Email'],
          ['phone', 'Your Phone Number'],
          ['address1', 'Street Address'],
          ['address2', 'Address Line 2'],
          ['city', 'City'],
          ['state', 'State'],
          ['zip', 'Postal / Zip Code'],
          ['country', 'Country'],
        ].map(([name, placeholder]) => (
          <input
            key={name}
            type="text"
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            className="w-full border bg-gray-100 px-4 py-2 text-sm rounded"
          />
        ))}

        <textarea
          name="comments"
          placeholder="Comments"
          rows={6}
          value={formData.comments}
          onChange={handleChange}
          className="w-full border bg-gray-100 px-4 py-2 text-sm rounded"
        ></textarea>

        <div className="pt-4">
          <ReCAPTCHA
            sitekey="6LdnR0ArAAAAAIgTLZPQqDY1bp-aoxhUjgshS1La"
            onChange={handleCaptchaChange}
            ref={recaptchaRef}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#22BDB6] text-black font-semibold py-2 px-4 rounded hover:bg-[#106A77] "
        >
          Submit Request
        </button>
      </form>
      {/* 🔄 Spinner overlay toàn màn hình khi đang gửi */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
)}
      <Footer />
    </div>
  );
};

export default RequestAQuote;
