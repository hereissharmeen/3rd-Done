const ContactSection = () => {
  return (
    <section id="contact" className="bg-white-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input type="text" className="w-full p-2 border border-white-700 rounded-lg bg-slate-100 text-black" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full p-2 border border-white-700 rounded-lg bg-slate-100 text-black" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <textarea className="w-full p-2 border border-white-700 rounded-lg bg-slate-100 text-black" rows={5} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 py-2 px-4 rounded hover:bg-yellow-600">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;