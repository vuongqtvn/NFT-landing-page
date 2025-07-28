/* eslint-disable @next/next/no-img-element */
'use client'

export function Footer() {
  const footerSections = [
    {
      title: 'ABOUT US',
      links: [
        'Careers',
        'Company Details',
        'Terms & Conditions',
        'Help center',
        'Privacy Policy',
        'Affiliate',
      ],
    },
    {
      title: 'PRODUCTS',
      links: [
        'NFT Marketplace',
        'Slingshot',
        'Swaps',
        'NFT Launchpad',
        'Runes Platform',
        'Creator Dashboard',
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        'Support',
        'API',
        'Feature Requests',
        'Trust & Safety',
        'Sitemap',
      ],
    },
  ]

  return (
    <footer className="border-t border-background-gray">
      <div className="max-w-6xl mx-auto px-5 md:px-3 py-5 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-10">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-black italic text-[18px] leading-[28px] mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2 text-body text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-black italic text-[18px] leading-[28px] mb-3">
              CONTACT US
            </h4>
            <ul className="space-y-2 text-body text-sm">
              <li>support@nfttech.com</li>
              <li>info@nfttech.com</li>
              <li className="pt-4">
                <button className="rounded-xl overflow-hidden">
                  <img src="/images/install-app.png" className="h-11" alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
