/* eslint-disable @next/next/no-img-element */
'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { BaseButton } from './BaseButton'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={twMerge(
        'inline-flex items-center justify-center uppercase px-[18px] py-2.5 h-10 text-sm font-medium rounded-full',
        isActive ? 'text-primary bg-background-gray' : 'text-body',
        className
      )}
    >
      {children}
    </Link>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationList = [
    {
      label: 'HOME',
      hyperLink: '/',
    },
    {
      label: 'FEATURES',
      hyperLink: '/features',
    },
    {
      label: 'FORUMS',
      hyperLink: '/forums',
    },
    {
      label: 'THEMES',
      hyperLink: '/themes',
    },
    {
      label: 'BLOG',
      hyperLink: '/blog',
    },
  ]

  return (
    <header className="relative z-50 py-3 md:py-4 px-5 lg:px-10">
      <nav className="flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <Image
                  src="/images/close.svg"
                  width={24}
                  height={24}
                  alt="close"
                />
              ) : (
                <Image
                  src="/images/menu.svg"
                  width={24}
                  height={24}
                  alt="menu"
                />
              )}
            </button>
          </div>
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="md:h-[39px] h-[36px]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1">
          {navigationList.map((item) => (
            <NavLink key={item.hyperLink} href={item.hyperLink}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2">
          <BaseButton variant="primary">SIGN UP</BaseButton>
          <BaseButton variant="secondary">LOG IN</BaseButton>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] bottom-0 left-0 right-0 bg-background-secondary p-5">
          <div className="grid grid-cols-1 gap-4">
            {navigationList.map((item) => (
              <NavLink
                className="w-full"
                key={item.hyperLink}
                href={item.hyperLink}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
