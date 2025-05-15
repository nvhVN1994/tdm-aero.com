import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Breadcrumb from '../components/Breadcrumb';

const RequestAQuote = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Please verify you are not a robot.');
      return;
    }
    // handle submit logic here
    alert('Form submitted!');
  };

  return (
    <div className="bg-white text-black font-['Roboto_Condensed'] " >
      <NavBar />
      <Breadcrumb />

      {/* Header Section */}
      <div className="bg-black text-white text-xs sm:text-sm px-4 py-2">
        <span className="text-gray-400">Home</span>
        <span className="mx-1">•</span>
        <span>Request A Quote</span>
      </div>

      <div className="bg-[#145399] text-center py-10 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-3 text-white">
          Request A Quote
        </h1>
        <p className="text-white text-sm max-w-2xl mx-auto">
          Please fill out the following form and we will get in touch with you as soon as possible.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 sm:px-8 py-10 space-y-4">
        {[
          'RFQ Number', 'Part Numbers', 'Quantity', 'Date Required',
          'Company Name', 'Contact Name', 'Your Email', 'Your Phone Number',
          'Street Address', 'Address line 2', 'City', 'State',
          'Postal / Zip Code', 'Country'
        ].map((label, index) => (
          <input
            key={index}
            type="text"
            placeholder={label}
            className="w-full border bg-gray-100 px-4 py-2 text-sm rounded"
          />
        ))}

        <textarea
          placeholder="Comments"
          rows={6}
          className="w-full border bg-gray-100 px-4 py-2 text-sm rounded"
        ></textarea>

        <div className="pt-4">
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY"
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#22BDB6] text-white font-bold py-2 px-4 rounded hover:bg-[#1aa39f]"
        >
          Submit Request
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default RequestAQuote;
