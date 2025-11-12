import Link from 'next/link';
import { Wrench, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 mt-auto">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Wrench className="h-7 w-7" />
            Tirupati Universe
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Your trusted partner for all electronic repairs. Quality service, guaranteed.
          </p>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tirupati Universe Electronics.
          </div>
        </div>
        
        <div className="md:justify-self-center">
          <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-primary">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="#founder" className="text-sm text-muted-foreground hover:text-primary transition-colors">Founder</Link></li>
            <li><Link href="#training" className="text-sm text-muted-foreground hover:text-primary transition-colors">Training Program</Link></li>
            <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="#ai-diagnostics" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Diagnostics</Link></li>
             <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-primary">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">123 Electronics Street, Tirupati, Andhra Pradesh, 517501</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 123-456-7890</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-primary" />
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Chat on WhatsApp</a>
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
