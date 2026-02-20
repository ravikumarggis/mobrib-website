import { useEffect, useState } from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

interface StatCard {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats: StatCard[] = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in digital innovation and creative solutions.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Talented developers, designers, and strategists working collaboratively.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring timely and quality deliverables.',
    },
    {
      icon: Target,
      title: 'Goal Driven',
      description: 'Focused on delivering solutions that drive measurable business results.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            About <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Mobrib</span>
          </h1>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate developers, designers, and innovators dedicated to creating
            cutting-edge digital solutions that transform businesses. With years of experience in web
            and mobile development, we deliver excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300"
            />
          </div>

          <div
            className={`transition-all duration-1000 transform delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Our mission is to empower businesses by delivering innovative digital solutions that drive
              growth and create lasting impact. We believe in the power of technology to transform ideas
              into reality.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Every project we undertake is approached with dedication, creativity, and a commitment to
              excellence. We work closely with our clients to understand their vision and deliver solutions
              that exceed expectations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                </div>
                <span className="text-white font-semibold">Professional Quality</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                </div>
                <span className="text-white font-semibold">Innovation Focused</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                </div>
                <span className="text-white font-semibold">Customer Centric</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                  <p className="text-slate-400">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Let's create something amazing. Get in touch with our team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
}
