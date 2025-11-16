'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, Shield, Users, CheckCircle2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <Image 
              src="/logo.png" 
              alt="Land of Justice Logo" 
              width={50} 
              height={50}
              className="h-10 w-auto md:h-12"
            />
            <div>
              <h2 className="font-semibold text-[#9D865F] text-sm md:text-lg tracking-wide">LAND OF JUSTICE</h2>
              <p className="text-[#B5A782] text-[10px] md:text-xs">Management & Environmental Consulting</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm text-neutral-700 hover:text-[#8B9D6F] transition-colors">Services</a>
            <a href="#about" className="text-sm text-neutral-700 hover:text-[#8B9D6F] transition-colors">About</a>
            <a href="#contact" className="text-sm text-neutral-700 hover:text-[#8B9D6F] transition-colors">Contact</a>
          </nav>
          <Button className="hidden md:flex bg-[#9D865F] hover:bg-[#8B7650] text-white">Get Started</Button>
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-[#9D865F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className="text-neutral-700 hover:text-[#8B9D6F] transition-colors py-2"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-neutral-700 hover:text-[#8B9D6F] transition-colors py-2"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-neutral-700 hover:text-[#8B9D6F] transition-colors py-2"
              >
                Contact
              </a>
              <Button className="bg-[#9D865F] hover:bg-[#8B7650] text-white w-full mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/logo.png" 
              alt="Land of Justice Logo" 
              width={300} 
              height={300}
              className="h-48 w-auto md:h-56 lg:h-64"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#9D865F] mb-4 tracking-tight">
            LAND OF JUSTICE
          </h1>
          <p className="text-2xl md:text-3xl text-[#B5A782] mb-8 font-light">
            MANAGEMENT & ENVIRONMENTAL CONSULTING SERVICES
          </p>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Providing sustainable solutions for environmental management, compliance, and conservation. 
            We help organizations navigate complex environmental challenges with integrity and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9D865F] hover:bg-[#8B7650] text-white px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-[#8B9D6F] text-[#8B9D6F] hover:bg-[#8B9D6F] hover:text-white px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Added scroll-mt-20 for proper navigation */}
      <section id="services" className="bg-gradient-to-b from-white to-neutral-50 py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#9D865F] mb-4">Our Services</h2>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Comprehensive environmental and management consulting tailored to your needs
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#8B9D6F]/10 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-[#8B9D6F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#9D865F] mb-3">Environmental Assessment</h3>
              <p className="text-neutral-600 leading-relaxed">
                Comprehensive environmental impact studies, site assessments, and compliance auditing to ensure regulatory adherence.
              </p>
            </Card>
            
            <Card className="p-6 border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#9D865F]/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#9D865F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#9D865F] mb-3">Compliance Management</h3>
              <p className="text-neutral-600 leading-relaxed">
                Expert guidance on environmental regulations, permitting processes, and sustainable compliance strategies.
              </p>
            </Card>
            
            <Card className="p-6 border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#B5A782]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#B5A782]" />
              </div>
              <h3 className="text-xl font-semibold text-[#9D865F] mb-3">Strategic Consulting</h3>
              <p className="text-neutral-600 leading-relaxed">
                Management solutions that integrate environmental stewardship with business objectives for sustainable growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#9D865F] mb-12">Why Choose Land of Justice</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Expert team with decades of combined experience",
                "Proven track record in environmental compliance",
                "Tailored solutions for your unique challenges",
                "Commitment to sustainable and ethical practices",
                "Comprehensive support from assessment to implementation",
                "Up-to-date knowledge of regulatory requirements"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8B9D6F] flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-[#9D865F] to-[#8B9D6F] py-20 scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your organization achieve environmental excellence.
          </p>
          <Button size="lg" className="bg-white text-[#9D865F] hover:bg-neutral-100 px-8">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Land of Justice Logo" 
                  width={40} 
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <p className="font-semibold text-[#B5A782]">LAND OF JUSTICE</p>
                  <p className="text-xs text-neutral-400">Environmental Excellence</p>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                Providing sustainable solutions for environmental management, compliance, and conservation with integrity and expertise.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-[#B5A782] mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="mailto:info@landofjustice.com" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-[#8B9D6F] transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@landofjustice.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-[#8B9D6F] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-neutral-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>123 Environmental Way<br />Green City, GC 12345</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-[#B5A782] mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#8B9D6F] flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#8B9D6F] flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#8B9D6F] flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#8B9D6F] flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-800 pt-8">
            <p className="text-sm text-neutral-400 text-center">
              © 2025 Land of Justice. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
