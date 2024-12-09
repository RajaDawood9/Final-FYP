import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for your interest in NCBA&E University. We are here to
            assist you with any questions you may have. Please feel free to
            reach out to us through the following contact details or visit our
            campus.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Location
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>NCBA&E University</strong>
            <br />
            123 University Avenue
            <br />
            Lahore, Punjab, Pakistan
            <br />
            Postal Code: 54000
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Phone:</strong> +92 42 1234 5678
            <br />
            <strong>Email:</strong> info@ncbae.edu.pk
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Working Hours
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM
            <br />
            <strong>Saturday:</strong> 9:00 AM - 1:00 PM
            <br />
            <strong>Sunday:</strong> Closed
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Social Media
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Connect with us on social media:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://facebook.com/ncbaeuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ncbaeuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/school/ncbaeuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ncbaeuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            For inquiries, you can also fill out our online contact form, and
            one of our representatives will get back to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
