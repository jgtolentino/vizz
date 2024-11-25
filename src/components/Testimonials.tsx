import React from 'react';
import { ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'DGI dashboard has certainly proved to be a valuable tool for our team! With a great depth of analysis of the digital ecosystem and real-time brand health metrics, we are able to gain valuable insights and further optimize our digital presence.',
    author: 'Carmen Grigoras',
    position: 'DIGITAL MANAGER',
    company: 'AVON'
  },
  {
    quote: 'On the first presentation Digital team had us that this dashboard is the holy Grail 1 year after we improved our organic viewership with over 40% vs our estimations, and the social media engagement surpassed all our expectations. Having everything in real-time data is really the Holy Grail in each business.',
    author: 'Nicoleta Beicu',
    position: 'HEAD OF DIGITAL HUB (DIGITAL & E-COMMERCE MARKETING)',
    company: 'FARMEC'
  },
  {
    quote: 'The idea of having a dashboard was born 2 years ago when we asked ourselves the question what would it be like to gather everything within digital world of OMV brand in one place and be able to monitor it. Today, 2 years after the question when everything is implemented, digital magic is enjoyed at full capacity in a dashboard.',
    author: 'Mihai Chirita',
    position: 'BRAND MANAGER',
    company: 'OMV'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-2">Testimonials</h2>
          <h3 className="text-5xl font-black">FROM CLIENTS</h3>
          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 flex items-center mx-auto">
            SEE ALL
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-serif text-blue-600 absolute -top-8 left-0">"</div>
              <blockquote className="pt-8 px-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <footer>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 mt-1">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;