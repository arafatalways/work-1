import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <section className={`py-24 px-6 transition-all duration-500`}>
      {/* Top Header Text */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h4 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Contact Us
        </h4>
        <h1 className="text-5xl font-bold mb-6">
          Let's Talk About Your <span className="text-blue-500">Projects</span>
        </h1>
        <p className={`text-lg max-w-xl mx-auto font-medium`}>
          Have a question or want to work together? We'd love to hear from you.
          Send us a message!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 1. Contact Info Cards */}
        <div className="space-y-6 order-2 lg:order-1">
          <h4 className="text-2xl font-semibold">Email, Live Chat, Location</h4>
          <div className="p-3 rounded-md border flex items-center gap-6 group hover:border-blue-500 transition-all">
            <div className="bg-blue-500/10 p-2 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider">
                Email Us
              </p>
              <h3 className="text-md">support@editorstudio.com</h3>
            </div>
          </div>

          <div className="p-3 rounded-md border flex items-center gap-6 group hover:border-purple-500 transition-all">
            <div className="bg-purple-500/10 p-4 rounded-2xl text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <MessageSquare size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider">
                Live Chat
              </p>
              <h3 className="text-md">Available 24/7 Service</h3>
            </div>
          </div>

          <div className="p-3 rounded-md border flex items-center gap-6 group hover:border-green-500 transition-all">
            <div className="bg-green-500/10 p-4 rounded-2xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider">
                Our Studio
              </p>
              <h3 className="text-md">Dhaka, Bangladesh</h3>
            </div>
          </div>
        </div>

        {/* 2. Contact Form */}
        <div className="p-8 rounded-md border order-1 lg:order-2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-2 rounded-md mt-1.5 border outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full px-6 py-2 rounded-md mt-1.5 border outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-6 py-2 rounded-md mt-1.5 border outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Message</label>
              <textarea
                placeholder="Write your message here..."
                className="w-full px-6 py-2 rounded-md mt-1.5 border outline-none focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-sm shadow-blue-500/40 flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
