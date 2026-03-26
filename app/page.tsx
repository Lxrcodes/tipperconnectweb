import Link from 'next/link'
import {
  Truck,
  Building2,
  ClipboardCheck,
  MapPin,
  Shield,
  Clock,
  Camera,
  Users,
  FileCheck,
  Smartphone,
  WifiOff,
  CheckCircle,
  ArrowRight,
  Phone,
  X,
  Sparkles,
  PoundSterling,
  TrendingDown
} from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Move More Dirt.
              <span className="block text-orange-500">Less Hassle.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Tell us what materials you need moved. We source the best rates from
              tipping sites and suppliers — then handle the haulage for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 text-lg"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm text-lg"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500">Best</div>
              <div className="text-slate-400 mt-1">Prices</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500">100%</div>
              <div className="text-slate-400 mt-1">Compliant</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500">UK</div>
              <div className="text-slate-400 mt-1">Wide Coverage</div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-transparent" />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Waste Removal Shouldn&apos;t Be This Hard
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We&apos;ve replaced the chaos with a simple, streamlined platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Old Way */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Ringing around for quotes, never sure you\'re getting the best price',
                  'Endless phone calls to find available trucks',
                  'Paper tickets getting lost on site',
                  'Chasing for proof of delivery',
                  'Compliance headaches and paperwork',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TipperConnect Way */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">With TipperConnect</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Tell us what you need, we source the best rates',
                  'We negotiate with tipping sites and suppliers for you',
                  'Digital records, automatic WTNs',
                  'Real-time tracking with signatures',
                  'Photo evidence for every load',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-200 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Construction Companies */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium mb-4">
              <Building2 className="w-4 h-4" />
              For Construction Companies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Waste Moving in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: ClipboardCheck,
                title: 'Tell Us What You Need',
                description: 'Create a job card with your material type and quantities. Muck away, crushed concrete, topsoil — whatever you\'re moving.',
              },
              {
                step: '02',
                icon: PoundSterling,
                title: 'We Get You the Best Price',
                description: 'We source rates from tipping sites and suppliers, then quote you a competitive price. No ringing around required.',
              },
              {
                step: '03',
                icon: MapPin,
                title: 'Track Every Load',
                description: 'Accept the quote and watch loads complete in real-time. Digital signatures, weighbridge tickets, full audit trail.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-slate-100 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative bg-slate-50 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Hauliers */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 font-medium mb-4">
              <Truck className="w-4 h-4" />
              For Hauliers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fill Your Trucks. Grow Your Business.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: MapPin,
                title: 'Browse Available Work',
                description: 'See jobs near you with fair rates, filtered to materials you\'re licensed for.',
              },
              {
                step: '02',
                icon: Users,
                title: 'Accept & Assign Fleet',
                description: 'Accept jobs that fit your schedule. Assign trucks and drivers — they get job details on their phone.',
              },
              {
                step: '03',
                icon: FileCheck,
                title: 'Get Paid, Stay Compliant',
                description: 'Every load documented. Compliance tracked. Professional records for every job.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-slate-800 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative bg-slate-800 rounded-2xl p-8 h-full border border-slate-700">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built specifically for UK construction waste management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: 'Best Prices',
                description: 'We negotiate rates with tipping sites and suppliers. You get competitive pricing without the legwork.',
                color: 'green',
              },
              {
                icon: ClipboardCheck,
                title: 'Simple Job Cards',
                description: 'Tell us the material and quantity. We handle sourcing and pricing.',
                color: 'orange',
              },
              {
                icon: MapPin,
                title: 'Real-time Tracking',
                description: 'Know where every load is. Live updates as jobs progress.',
                color: 'blue',
              },
              {
                icon: FileCheck,
                title: 'Digital WTNs',
                description: 'Waste Transfer Notes generated automatically. Always compliant.',
                color: 'green',
              },
              {
                icon: Truck,
                title: 'Fleet Management',
                description: 'Track vehicles, MOT, insurance. Expiry alerts before they lapse.',
                color: 'purple',
              },
              {
                icon: Smartphone,
                title: 'Driver App',
                description: 'Mobile-friendly for on-site use. Simple enough for anyone.',
                color: 'pink',
              },
              {
                icon: Camera,
                title: 'Photo Evidence',
                description: 'Weighbridge tickets captured. Proof for every load.',
                color: 'indigo',
              },
              {
                icon: Shield,
                title: 'Compliance Tracking',
                description: 'Never miss an expiry date. Automatic reminders.',
                color: 'red',
              },
              {
                icon: WifiOff,
                title: 'Offline Mode',
                description: 'Works even without signal. Syncs when back online.',
                color: 'slate',
              },
              {
                icon: Users,
                title: 'Team Access',
                description: 'Invite team members with the right permissions.',
                color: 'teal',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium mb-4">
                <Shield className="w-4 h-4" />
                Built for Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Built for UK Waste Regulations
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We handle the paperwork so you can focus on the work. Every load is documented,
                every transfer note is generated, and every record is stored for the required 3 years.
              </p>
              <ul className="space-y-4">
                {[
                  'Environment Agency compliant',
                  'Automatic Waste Transfer Note generation',
                  'Waste Carrier Licence verification',
                  '3-year record retention',
                  'Full audit trail for every load',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center">
                <Shield className="w-32 h-32 text-white/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold">100%</div>
                    <div className="text-xl mt-2">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No monthly fees. No setup costs. Pay only when work gets done.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="text-orange-400 font-medium mb-2">Commission Model</div>
              <div className="text-5xl md:text-6xl font-bold mb-2">5%</div>
              <div className="text-slate-400 mb-8">per completed load</div>
              <ul className="space-y-4 text-left mb-8">
                {[
                  'Free to join',
                  'No monthly fees',
                  'No setup costs',
                  'Unlimited users',
                  'Full platform access',
                  'Dedicated support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Waste Management?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Tell us what materials you need moved. We&apos;ll source the best rates and handle the rest.
            We&apos;ll help you get set up personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
