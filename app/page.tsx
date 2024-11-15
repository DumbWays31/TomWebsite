'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Video, Play, ChevronRight, Menu } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  const [email, setEmail] = useState('')
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.8])

  const videoRef = useRef<HTMLVideoElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const headerBgColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  )

  const headerTextColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)']
  )

  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        style={{ opacity, scale }} 
        className="fixed inset-0 w-full h-screen"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.header
        ref={headerRef}
        style={{ 
          backgroundColor: headerBgColor,
          color: headerTextColor,
        }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold">PixelPulse</h1>
          </motion.div>
          <nav className="hidden md:block">
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex space-x-6"
            >
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }}>
                  <a href="#" className="hover:underline">{item}</a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Menu</DialogTitle>
                <DialogDescription>
                  Navigate through our website
                </DialogDescription>
              </DialogHeader>
              <nav className="mt-6">
                <ul className="space-y-4">
                  {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-lg hover:underline">{item}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </motion.header>

      <main className="relative z-10 pt-screen">
        <section className="min-h-screen flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-6">Capture Your Vision</h2>
            <p className="text-xl mb-8">We bring your ideas to life through stunning photography and captivating videos.</p>
            <Button size="lg" className="bg-white text-gray-600 hover:bg-purple-100">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
                <Camera className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Photography</h3>
                <p className="text-gray-600 mb-4">From portraits to landscapes, we capture moments that last a lifetime.</p>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-200">
                  Learn More
                </Button>
              </div>
              <div className="bg-pink-100 p-8 rounded-lg shadow-lg">
                <Video className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Videography</h3>
                <p className="text-gray-600 mb-4">Tell your story through dynamic and engaging video content.</p>
                <Button variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-200">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Portfolio item ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-600 mb-8">Let's create something amazing together. Sign up for our newsletter to get started!</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-xs"
                />
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PixelPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}