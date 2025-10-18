import React, { useState, useEffect } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

// This is a placeholder for the actual App component that would render this form.
// In a real application, you would import and use the Contact component within your main App.
export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
       {/* Toaster component from sonner needs to be rendered at the root of your app */}
      {/* <Toaster position="top-center" richColors /> */}
      <Contact />
    </div>
  );
}


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: ''
  });
  
  // FIX: State to track if the EmailJS script has loaded successfully.
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // FIX: useEffect hook to dynamically load the EmailJS script from the CDN.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
    };
    
    script.onerror = () => {
        console.error('EmailJS script failed to load.');
        toast.error('Could not load email service. Please refresh the page.');
    }

    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on component mount.


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Access emailjs from the window object
    const emailjsService = (window as any).emailjs;

    if (!isScriptLoaded || !emailjsService) {
      toast.error('Email sending service is not ready. Please wait a moment and try again.');
      console.error('EmailJS script not loaded or available on window object.');
      return;
    }

    // The fourth argument is your Public Key from your EmailJS account settings.
    emailjsService
      .send(
        'service_ayuk0ex', // replace with your Service ID
        'template_o5pluge', // replace with your Template ID
        formData,
        'mTXm4wj0yvIsCH0Bj' // replace with your Public Key
      )
      .then(
        (response: any) => {
          toast.success('Message sent successfully! I\'ll get back to you soon.');
          setFormData({ name: '', email: '', phone: '', title: '', message: '' });
        },
        (error: any) => {
          toast.error('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" data-animate>
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12" data-animate>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's work together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">isurujayanada2002@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">(+94) 71 579 5099</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-sky-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Matale,Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-300"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Subject"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={!isScriptLoaded}
                className="w-full py-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 text-white font-medium flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isScriptLoaded ? 'Send Message' : 'Loading Service...'}</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-white/10">
        <p className="text-gray-400">
          © 2025 Isuru Jayanada. All rights reserved.
        </p>
      </div>
    </section>
  );
};

