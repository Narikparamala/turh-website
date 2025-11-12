"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Wrench } from 'lucide-react';
import React from 'react';
import BookingForm from '@/components/booking-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'AI Diagnostics', href: '#ai-diagnostics' },
  { name: 'Training', href: '#training' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-background/30'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
            <Wrench className="h-6 w-6" />
            <span className='hidden sm:inline'>Tirupati Universe Electronics</span>
            <span className='sm:hidden font-semibold'>T.U.E.</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <DialogTrigger asChild>
                <Button variant="destructive">Book a Repair</Button>
            </DialogTrigger>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
                    <Wrench className="h-6 w-6" />
                    Tirupati Universe
                  </Link>
                  <nav className="grid gap-2">
                    {navLinks.map((link) => (
                       <SheetTrigger asChild key={link.name}>
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      </SheetTrigger>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <DialogContent>
        <BookingForm setOpen={setIsBookingOpen} />
      </DialogContent>
    </Dialog>
  );
}
