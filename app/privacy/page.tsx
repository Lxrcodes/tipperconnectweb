'use client'

import { Shield, Eye, Lock, Server, UserCheck, Mail } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-orange-500" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
                At TipperConnect, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our platform. Please read this
                privacy policy carefully. If you do not agree with the terms of this privacy policy, please
                do not access the platform.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, company name, and role within the company.</li>
                  <li><strong>Business Information:</strong> Company registration details, VAT numbers, waste carrier licence information, operator licences, and insurance certificates.</li>
                  <li><strong>Vehicle Information:</strong> Vehicle registration numbers, MOT certificates, and insurance details for haulage companies.</li>
                  <li><strong>Site Information:</strong> Construction site addresses, operating hours, and contact details.</li>
                  <li><strong>Job Data:</strong> Information about waste removal jobs, including materials, quantities, pricing, and delivery tickets.</li>
                  <li><strong>Location Data:</strong> GPS coordinates when using location-based features of our platform.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our platform and services</li>
                  <li>Process transactions and send related information</li>
                  <li>Connect construction companies with haulage providers</li>
                  <li>Verify compliance with UK waste management regulations</li>
                  <li>Send notifications about job updates, document expiries, and platform news</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyse trends, usage, and activities on our platform</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>With Business Partners:</strong> When you accept or post jobs, relevant information is shared between construction companies and hauliers to facilitate the service.</li>
                  <li><strong>For Compliance:</strong> We may share information with regulatory bodies when required to verify waste carrier licences or other compliance documents.</li>
                  <li><strong>With Service Providers:</strong> We share information with third-party vendors who provide services such as hosting, payment processing, and analytics.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We implement appropriate technical and organisational security measures to protect your
                  personal information against unauthorised access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee training on data protection</li>
                  <li>Secure data centres with physical security measures</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights Under UK GDPR</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Under the UK General Data Protection Regulation (UK GDPR), you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data in certain circumstances</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the details provided below.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We retain your personal information for as long as necessary to provide our services and
                  fulfil the purposes outlined in this policy. We may also retain certain information to
                  comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <p>
                  Job records and delivery tickets are retained for a minimum of 7 years to comply with
                  UK waste management regulations and tax requirements.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to track activity on our platform and
                  hold certain information. Cookies are files with small amounts of data which may include
                  an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of
                  our platform.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the
                  top of this policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to
                  this Privacy Policy are effective when they are posted on this page.
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
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
