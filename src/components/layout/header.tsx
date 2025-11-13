"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';
import BookingForm from '@/components/booking-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Founder', href: '#founder' },
  { name: 'Training', href: '#training' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-background/30'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
             <Image src="https://res.cloudinary.com/doourcehz/image/upload/v1763010912/download_2_a9dg1h.jpg" alt="Tirupati Universal Repair Hub Logo" width={50} height={50} className="rounded-full"/>
            <span className='hidden sm:inline'>Tirupati Universal Repair Hub</span>
            <span className='sm:hidden font-semibold'>T.U.R.H.</span>
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
            <ModeToggle />
            <DialogTrigger asChild>
                <Button variant="destructive">Book a Repair</Button>
            </DialogTrigger>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                   <SheetTitle>
                     <Link href="/" onClick={closeSheet} className="flex items-center gap-2 font-bold text-lg text-primary">
                        <Image src="https://res.cloudinary.com/doourcehz/image/upload/v1763010912/download_2_a9dg1h.jpg" alt="Tirupati Universal Repair Hub Logo" width={40} height={40} className="rounded-full"/>
                        T.U.R.H.
                      </Link>
                   </SheetTitle>
                   <SheetDescription>
                     Navigation Menu
                   </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  <nav className="grid gap-2">
                    {navLinks.map((link) => (
                       <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeSheet}
                          className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                        >
                          {link.name}
                        </Link>
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
