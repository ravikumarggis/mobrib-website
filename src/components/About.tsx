import { CheckCircle, Users, Award, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { icon: Users, text: 'Expert Team of Developers' },
  { icon: Award, text: 'Award-Winning Solutions' },
  { icon: Target, text: '100% Client Satisfaction' },
  { icon: CheckCircle, text: 'On-Time Delivery' },
];

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={titleRef}
            className={`space-y-6 ${
              titleVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Mobrib</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mobrib is a leading web and mobile app development company committed to delivering innovative, high-quality solutions. With a team of skilled developers and designers, we offer a wide range of services including custom web development, responsive web design, and mobile app development for iOS and Android platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We follow industry best practices and utilize cutting-edge technologies to create user-friendly, scalable, and secure solutions tailored to our client's unique requirements.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={contentRef}
            className={`relative ${
              contentVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-900 rounded-2xl p-1">
                <div className="w-full h-full bg-slate-800 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-slate-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                        <div className="text-gray-400">Projects Delivered</div>
                      </div>
                      <div className="bg-slate-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                        <div className="text-gray-400">Happy Clients</div>
                      </div>
                      <div className="bg-slate-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                        <div className="text-gray-400">Years Experience</div>
                      </div>
                      <div className="bg-slate-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                        <div className="text-gray-400">Team Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
