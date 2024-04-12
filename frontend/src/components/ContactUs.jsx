import React from 'react';

function ContactUs() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          We'd love to hear from you! Whether you have questions, feedback, feel free to reach out to us.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md outline-none" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-md outline-none" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
