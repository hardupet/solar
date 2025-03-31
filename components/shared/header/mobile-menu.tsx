'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { ThemeToggle } from "@/components/shared/header/theme-toggle"
import { motion } from 'framer-motion';
import {
  Sun,
  Wind,
  Leaf,
  Battery,
  LineChart,
  Settings,
  Shield,
  Building2,
  Home,
  Factory,
  CloudSun,
  Gauge,
  Lightbulb,
  Users,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

export function MobileMenu() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      text: 'Home',
      icon: Home,
      subItems: [],
    },
    {
      text: 'Solutions',
      icon: Sun,
      subItems: [
        { text: 'Solar Energy', icon: Sun },
        { text: 'Wind Power', icon: Wind },
        { text: 'Energy Storage', icon: Battery },
        { text: 'Smart Monitoring', icon: Gauge },
      ],
    },
    {
      text: 'Features',
      icon: LineChart,
      subItems: [
        { text: 'Energy Analytics', icon: LineChart },
        { text: 'Weather Forecasting', icon: CloudSun },
        { text: 'System Integration', icon: Settings },
        { text: 'Smart Grid', icon: Lightbulb },
        { text: 'Data Security', icon: Shield },
      ],
    },
    {
      text: 'Use Cases',
      icon: Building2,
      subItems: [
        { text: 'Residential', icon: Home },
        { text: 'Commercial', icon: Building2 },
        { text: 'Industrial', icon: Factory },
        { text: 'Community Solar', icon: Users },
        { text: 'Sustainability', icon: Leaf },
      ],
    },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const toggleSubmenu = (text: string) => {
    if (openSubmenu === text) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(text);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 border-l dark:border-gray-800"
      >
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.text}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              <Button
                variant="ghost"
                className="w-full justify-between text-lg font-kode-mono flex items-center"
                onClick={() => toggleSubmenu(item.text)}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.text}
                </span>
                {item.subItems.length > 0 && (
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openSubmenu === item.text ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </Button>
              {item.subItems.length > 0 && openSubmenu === item.text && (
                <motion.div
                  className="ml-4 mt-2 space-y-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {item.subItems.map((subItem, j) => (
                    <motion.div
                      key={subItem.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm font-kode-mono pl-6 flex items-center gap-2"
                      >
                        <subItem.icon className="h-4 w-4" />
                        {subItem.text}
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="outline" className="w-full font-kode-mono">
                Log in
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-kode-mono">
                Register
              </Button>
            </motion.div>
          </div>
          <div className="mt-4">{/* <ThemeToggle /> */}</div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
