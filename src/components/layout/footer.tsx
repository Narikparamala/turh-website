import Link from 'next/link';
import { Wrench, Phone, Youtube, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 mt-auto">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Wrench className="h-7 w-7" />
            Tirupati Universal Repair Hub
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Your trusted partner for all electronic repairs. Quality service, guaranteed.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://wa.me/919951523648" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            &copy; {new Date().getFullYear()} Tirupati Universal Repair Hub.
          </div>
        </div>
        
        <div className="md:justify-self-center">
          <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-primary">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="#founder" className="text-sm text-muted-foreground hover:text-primary transition-colors">Founder</Link></li>
            <li><Link href="#training" className="text-sm text-muted-foreground hover:text-primary transition-colors">Training Program</Link></li>
             <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-primary">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Universe Electronic Services, Near Ramanuja Circle, Tirupati, Andhra Pradesh 517501</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <a href="tel:+919951523648" className="text-muted-foreground hover:text-primary transition-colors">9951523648</a>
                <span className="text-muted-foreground"> / </span>
                <a href="tel:+918121210342" className="text-muted-foreground hover:text-primary transition-colors">8121210342</a>
              </div>
            </li>
             <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">
                Mon - Sat: 9:00 AM - 8:00 PM
                <br/>
                Sunday: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
