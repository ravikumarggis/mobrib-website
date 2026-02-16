import { Package, Shield, Clock, MapPin, CheckCircle, Users, Star, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white -z-10"></div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Mobrib is now live! 🚀
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Send your Parcels{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                seamlessly
              </span>{' '}
              with Mobrib
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Mobrib makes sending packages easier and cheaper than ever before. Just sign up and tell us where you want your package to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" >
  {/* Play Store Button */}
  <a
    href="https://play.google.com/store/apps/details?id=your.package.name"
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-105 transition-all"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Get it on Google Play"
      className="h-14"
    />
  </a>

  {/* App Store Button */}
  <a
    href="https://apps.apple.com/app/idYOUR_APP_ID"
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-105 transition-all"
  >
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="Download on the App Store"
      className="h-14"
    />
  </a>
</div>

            <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Get up to 60% off on your first order
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🚀 Trusted by Thousands</h2>
            <p className="text-gray-600 text-lg">Join our growing community of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, label: 'Delivered Successfully', value: '10,000+', color: 'from-blue-500 to-cyan-500' },
              { icon: Users, label: 'Happy Customers', value: '2,500+', color: 'from-orange-500 to-pink-500' },
              { icon: Star, label: 'Average Rating', value: '4.8★', color: 'from-yellow-500 to-orange-500' },
              { icon: TrendingUp, label: 'Total App Installs', value: '5,000+', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Mobrib?</h2>
            <p className="text-gray-600 text-lg">Experience the future of package delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Live Tracking',
                description: 'Track your packages in real-time with precise location updates',
                color: 'bg-blue-500',
              },
              {
                icon: Shield,
                title: 'KYC Verification',
                description: 'Secure identity verification for trusted deliveries',
                color: 'bg-cyan-500',
              },
              {
                icon: Clock,
                title: 'Fast & Affordable',
                description: 'Best rates guaranteed with lightning-fast delivery',
                color: 'bg-orange-500',
              },
              {
                icon: CheckCircle,
                title: '5 Step Verification',
                description: 'Comprehensive security process for maximum safety',
                color: 'bg-green-500',
              },
              {
                icon: Package,
                title: 'Secure Packaging',
                description: 'Your parcels are handled with utmost care and protection',
                color: 'bg-pink-500',
              },
              {
                icon: Users,
                title: 'Trusted Network',
                description: 'Connect with verified travelers and senders in our community',
                color: 'bg-teal-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Mobrib Works</h2>
            <p className="text-gray-600 text-lg">Send your parcels in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                emoji: '📱',
                title: 'Sign Up',
                description: 'Create your account with just your mobile number. Quick, secure, and ready to go in seconds.',
                badge: ['Quick Setup', 'Secure'],
              },
              {
                step: '2',
                emoji: '👥',
                title: 'Choose a Traveler',
                description: 'Browse verified travelers heading to your destination and select the perfect match for your parcel.',
                badge: ['Verified Travelers', 'Real-time Matching'],
              },
              {
                step: '3',
                emoji: '📦',
                title: 'Send Your Parcel',
                description: 'Hand over your package and track its journey in real-time until it safely reaches its destination.',
                badge: ['Live Tracking', 'Instant Updates'],
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <div className="text-6xl mb-4">{step.emoji}</div>
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Step {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {step.badge.map((badge, i) => (
                      <span
                        key={i}
                        className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 font-medium border border-blue-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Your{' '}
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Personal
              </span>{' '}
              Parcel Hub
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We've designed the perfect platform to connect your parcels with travelers going your way, making it easy to send packages quickly and reliably across any distance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-2">3000+</p>
                <p className="text-gray-600">Users</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-cyan-600 mb-2">6-8 hr</p>
                <p className="text-gray-600">Avg. Delivery Time</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-orange-600 mb-2">24/7</p>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow">
              Start Sending Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
