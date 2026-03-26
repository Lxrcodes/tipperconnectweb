'use client'

import { FileText, AlertTriangle, Scale, CreditCard, Shield, Ban, Mail } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-orange-500" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-slate-300">
            Last updated: March 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 space-y-12">

            {/* Introduction */}
            <div>
              <p className="text-slate-600 leading-relaxed">
                Welcome to TipperConnect. These Terms of Service (&quot;Terms&quot;) govern your use of the TipperConnect
                platform and services. By accessing or using our platform, you agree to be bound by these Terms.
                If you do not agree to these Terms, please do not use our platform.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Definitions</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>&quot;Platform&quot;</strong> refers to the TipperConnect web application and related services.</li>
                  <li><strong>&quot;User&quot;</strong> refers to any individual or entity that accesses or uses the Platform.</li>
                  <li><strong>&quot;Site Company&quot;</strong> refers to construction companies that post jobs for waste removal.</li>
                  <li><strong>&quot;Haulier&quot;</strong> refers to haulage companies that accept and fulfil waste removal jobs.</li>
                  <li><strong>&quot;Job&quot;</strong> refers to a waste removal request posted on the Platform.</li>
                  <li><strong>&quot;Services&quot;</strong> refers to the waste removal and transport services arranged through the Platform.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">2. Platform Services</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>TipperConnect provides a platform that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Connects construction companies with licensed waste hauliers</li>
                  <li>Facilitates the posting and acceptance of waste removal jobs</li>
                  <li>Provides digital delivery ticket management</li>
                  <li>Tracks compliance documentation and expiry dates</li>
                  <li>Enables communication between parties</li>
                </ul>
                <p className="mt-4">
                  <strong>TipperConnect is a platform provider only.</strong> We do not ourselves provide waste
                  removal services. All services are provided by independent haulage companies who use our platform.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>To use the Platform, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Register for an account with accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorised access to your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
                <p>
                  We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">4. Compliance Requirements</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <h3 className="font-bold text-slate-800">For Hauliers:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must hold a valid Waste Carrier Licence issued by the Environment Agency</li>
                  <li>You must hold a valid Operator&apos;s Licence (O-Licence) where required</li>
                  <li>You must maintain valid public liability and cargo insurance</li>
                  <li>All vehicles used must have valid MOT certificates and insurance</li>
                  <li>You must comply with all UK waste management regulations</li>
                </ul>

                <h3 className="font-bold text-slate-800 mt-6">For Site Companies:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must ensure all waste is correctly classified before posting jobs</li>
                  <li>You must provide accurate site information and access details</li>
                  <li>You must maintain appropriate insurance coverage</li>
                  <li>You must comply with Duty of Care requirements</li>
                </ul>

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">
                      <strong>Important:</strong> Users with expired compliance documents will have their
                      account functionality restricted until documents are renewed. This is to ensure
                      regulatory compliance for all parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">5. Payments and Fees</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>Payment Terms:</strong> All payments for services are arranged directly between
                  Site Companies and Hauliers. TipperConnect may charge subscription fees or transaction
                  fees as specified in your service agreement.
                </p>
                <p>
                  <strong>Pricing:</strong> Job pricing is agreed between Site Companies and Hauliers.
                  TipperConnect does not set or control pricing for waste removal services.
                </p>
                <p>
                  <strong>Disputes:</strong> Payment disputes between Site Companies and Hauliers should
                  be resolved directly between the parties. TipperConnect may provide transaction records
                  to assist in dispute resolution.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Ban className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">6. Prohibited Conduct</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Users must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide false or misleading information</li>
                  <li>Use the Platform for illegal purposes or to transport hazardous waste without proper licensing</li>
                  <li>Circumvent the Platform to arrange direct transactions after initial introduction</li>
                  <li>Share account credentials with unauthorised parties</li>
                  <li>Interfere with or disrupt the Platform&apos;s operation</li>
                  <li>Engage in price fixing or anti-competitive behaviour</li>
                  <li>Post discriminatory, harassing, or inappropriate content</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TIPPERCONNECT SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>The conduct or content of any user or third party on the Platform</li>
                  <li>Any services provided by Hauliers through the Platform</li>
                  <li>Any failure of Hauliers to comply with waste management regulations</li>
                </ul>
                <p>
                  Our total liability for any claims arising from or relating to these Terms or the Platform
                  shall not exceed the amount you paid to TipperConnect in the twelve (12) months preceding
                  the claim.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Indemnification</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless TipperConnect, its officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, and expenses
                  arising out of or in any way connected with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of the Platform</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party right, including intellectual property rights</li>
                  <li>Any services you provide or receive through the Platform</li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Intellectual Property</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  The Platform and its original content, features, and functionality are owned by TipperConnect
                  and are protected by international copyright, trademark, patent, trade secret, and other
                  intellectual property laws.
                </p>
                <p>
                  You may not copy, modify, distribute, sell, or lease any part of the Platform without our
                  prior written consent.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability,
                  for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Platform will cease immediately. All provisions
                  of these Terms which by their nature should survive termination shall survive, including
                  ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Governing Law</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of England and
                  Wales, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising out of or relating to these Terms or the Platform shall be subject
                  to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to Terms</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material,
                  we will provide at least 30 days&apos; notice prior to any new terms taking effect.
                </p>
                <p>
                  By continuing to access or use our Platform after any revisions become effective, you agree
                  to be bound by the revised terms. If you do not agree to the new terms, you are no longer
                  authorised to use the Platform.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-medium text-slate-900">TipperConnect</p>
                <p className="text-slate-600">Email: admin@tipperconnect.co.uk</p>
                <p className="text-slate-600">Address: London, United Kingdom</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
