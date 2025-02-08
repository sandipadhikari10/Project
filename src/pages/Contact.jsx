import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 ">
      {/* Contact Info Cards */}
      <div className="max-w-5xl mx-auto  mt-[4.5rem] grid md:grid-cols-3 gap-12">
        <a href="tel:+1 510-309-7474">
          <div className="w-xs bg-white px-2 py-14 h-58  rounded shadow-lg text-center">
            <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Call Us 24x7</h3>
            <p className="text-lg font-semibold py-2">+1 510-309-7474</p>
          </div>
        </a>

        <div className="bg-white px-6 py-14 h-58 rounded shadow-lg text-center">
          <a
            href="mailto:someone@example.com?subject=Hello&body=How are you?"
            className="email-link"
          >
            <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Write Us</h3>
            <span className="text-lg font-semibold py-2">
              cachapter@nrnusa.org
            </span>
          </a>
        </div>

        <div className="bg-white px-6 py-14 h-58 rounded shadow-lg text-center">
          <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Main Office</h3>
          <p className="text-lg font-semibold py-2">
            1670 Lafayette Street, Santa Clara, CA, 95050
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <h2 className="text-center font-[vollkorn] text-[35px] font-bold mt-25 mb-3">
        Send Us a Message
      </h2>
      <div className="max-w-195 mx-auto mt-12 mb-25 bg-white p-9 rounded-md shadow-lg">
        <form className="space-y-6 p-6 pt-10">
          <div>
            <label className="text-base block text-gray-700 font-bold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 mt-1 border border-[#dddddd] rounded focus:border-dotted focus:border-black focus:outline-none bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="text-base block text-gray-700 font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 mt-1 border border-[#dddddd] rounded focus:border-dotted focus:border-black focus:outline-none bg-gray-50"
              required
            />
          </div>

          <div>
            <div>
              <label className="text-base block text-gray-700 font-bold">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 mt-1 border border-[#dddddd] rounded focus:border-dotted focus:border-black focus:outline-none bg-gray-50"
                name="subject"
              />
            </div>
            <label className="text-base mt-6 block text-gray-700 font-bold">
              Comment or Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full px-4 py-3 mt-1 border border-[#dddddd] rounded focus:border-dotted focus:border-black focus:outline-none bg-gray-50"
              rows="4"
              required
            ></textarea>
          </div>

          <button className="w-44 h-14 bg-[#0275bf] text-white py-2 rounded-full cursor-pointer hover:bg-[#0884dc] transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
