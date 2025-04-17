import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, Clock, Mail, Phone, User, MessageSquare, Briefcase, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from "../../lib/utils";
import swal from "sweetalert";
"use client";

const RAINBOW_COUNT = 25;
const colorCombos = [
  ["rgb(232 121 249)", "rgb(96 165 250)", "rgb(94 234 212)"], // purple, blue, green
  ["rgb(232 121 249)", "rgb(94 234 212)", "rgb(96 165 250)"],
  ["rgb(94 234 212)", "rgb(232 121 249)", "rgb(96 165 250)"],
  ["rgb(94 234 212)", "rgb(96 165 250)", "rgb(232 121 249)"],
  ["rgb(96 165 250)", "rgb(94 234 212)", "rgb(232 121 249)"],
  ["rgb(96 165 250)", "rgb(232 121 249)", "rgb(94 234 212)"],
];

const generateRainbows = () =>
  Array.from({ length: RAINBOW_COUNT }, (_, i) => {
    const delay = -(i / RAINBOW_COUNT) * 45;
    const duration = 45 - (45 / RAINBOW_COUNT / 2) * i;
    const colors = colorCombos[Math.floor(Math.random() * colorCombos.length)];

    const boxShadow = `
      -130px 0 80px 40px white,
      -50px 0 50px 25px ${colors[0]},
      0 0 50px 25px ${colors[1]},
      50px 0 50px 25px ${colors[2]},
      130px 0 80px 40px white
    `;

    return (
      <div
        key={i}
        className="rainbow absolute top-0 h-screen w-0"
        style={{
          animation: `slide ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          boxShadow,
        }}
      ></div>
    );
  });


const services = [
  'Web Development',
  'Graphic Design',
  'Video Editing',
  'Motion Graphics',
  'Digital Marketing'
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: ''
};



export default function AppointmentForm({
  className,
  children,
  showRadialGradient = true,
  ...props
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        'service_v37fh2g',
        'template_l879xf8',
        {
          to_name: 'Admin',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message
        },
        'bX4WvkEhlrCHLW83Q'
      );

      setSuccess(true);
      setFormData(initialFormState);
      swal({
        title: "Good job!",
        text: "Your appointment request has been sent successfully. We'll contact you shortly to confirm your appointment.",
        icon: "success",
        button: "Aww yiss!",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const whatsappNumber = '+8801601982900';
    const message = 'Hi! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>

      <div
        className={cn(
          "transition-bg relative flex  flex-col items-center justify-center bg-zinc-50 ",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",

            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",

            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

            "--blue-300": "#93c5fd",
            "--blue-400": "#60a5fa",
            "--blue-500": "#3b82f6",
            "--indigo-300": "#a5b4fc",
            "--violet-200": "#ddd6fe",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent"
          }}
        >

          <div
            className={cn(
              "after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
              showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
            )}
          >


          </div>
        </div>
        <div className="  py-12 px-4 sm:px-6 lg:px-8 relative">
          {/* WhatsApp Float Button */}
          <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
            <span className="hidden sm:inline">Chat with us</span>
          </button>

          <div className="max-w-3xl mx-auto">
            <div className=" rounded-2xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-[50px] font-semibold text-[#064BA7] mb-2 font-Poppins">Schedule a Consultation</h2>
                  <p className="text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal lg:mt-5">Book your appointment with our experts</p>
                </div>

                {/* {success && (
                <div className="mb-6 text-center p-4 bg-green-50 rounded-lg animate-fade-in">
                  <h3 className="text-green-800 text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-green-700">Your appointment request has been sent successfully. We'll contact you shortly to confirm your appointment.</p>
                </div>
              )} */}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <User size={16} className="mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Mail size={16} className="mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Phone size={16} className="mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Briefcase size={16} className="mr-2" />
                        Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Calendar size={16} className="mr-2" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={format(new Date(), 'yyyy-MM-dd')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Clock size={16} className="mr-2" />
                        Preferred Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* <div className="relative">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <MessageSquare size={16} className="mr-2" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your project..."
                  />
                </div> */}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-[#064BA7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Scheduling...' : 'Schedule Appointment'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}



{/* <div className="relative w-full h-screen overflow-hidden bg-black"> */}

{/* {generateRainbows()}


<div className="glow-h absolute bottom-0 left-0 w-screen h-0"></div>
<div className="glow-v absolute bottom-0 left-0 w-0 h-screen"></div>


<div className="absolute bottom-8 left-8 text-left tracking-widest">
  <div className="uppercase text-black font-medium text-[19px]">
    rainbow background
  </div>
  <div className="uppercase text-black font-medium text-[26px] mt-1.5">
    pure css
  </div>
</div>


<div className="absolute right-[21px] bottom-[21px] text-right">
  <div className="relative w-[42px] h-[42px] -mt-[54px]">
    <img
      src="https://assets.codepen.io/595576/internal/avatars/users/default.png?format=auto&version=1689877807&width=80&height=80"
      className="w-full h-full object-cover rounded-full"
      alt="Author"
    />
  </div>
  <div className="text-black text-[16px] tracking-wider">@SylvainGarnot</div>
</div>
</div> */}