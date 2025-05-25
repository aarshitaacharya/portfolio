import React, { useState } from 'react'
import RedStar from '../assets/doodles/Red-Star.svg'

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        messaage: '',
    });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("https://formspree.io/f/xzzrlend", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                messaage: formData.message
            })
        });


        if(res.ok){
            setSubmitted(true)
            setFormData({name: '', email: '', message:''});
        }
    }


  return (
    <section id="contact" className = "bg-[#FFF8E1] py-16 px-6 md:px-20">
        <div className = "relative max-w-3xl mx-auto border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white p-8 md:p-12">
            {/* Pink Star */}
            <img 
            src={RedStar}
            alt="red star"
            className={`absolute right-[45%] w-12 md:w-24
                ${submitted ? '-top-[10%] md:-top-[20%]' : '-top-[3%] md:-top-[7%]'}
            `}
            />


            <h3 className = "text-3xl md:text-4xl font-bold text-center mb-4 font-display">
                Contact Me
            </h3>
            <p className = "text-center text-black mb-8">
                Want to collaborate or chat? Drop a message below 👇🏻!
            </p>


            {submitted ? (
          <p className="text-green-600 text-center text-lg font-semibold">✅ Message sent! I’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border-2 border-black px-4 py-2 rounded focus:outline-none"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="w-full border-2 border-black px-4 py-2 rounded focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full border-2 border-black px-4 py-2 rounded focus:outline-none"
            />

            <div className="text-center relative">
              <button
                type="submit"
                className="bg-[#C0E8FF] text-black font-semibold px-6 py-3 rounded-full border-2 border-black hover:bg-blue-300 transition-all"
              >
                Send message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
