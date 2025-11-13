import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Get In Touch</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're here to help. Reach out to us for any inquiries or to book a service.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                            <ul className="space-y-6 text-base">
                                <li className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>Our Address</h4>
                                        <p className="text-muted-foreground">Universe Electronic Services, Near Ramanuja Circle, Tirupati, Andhra Pradesh 517501</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>Phone</h4>
                                        <div className='flex flex-col'>
                                            <a href="tel:+919951523648" className="text-muted-foreground hover:text-primary transition-colors">9951523648</a>
                                            <a href="tel:+918121210342" className="text-muted-foreground hover:text-primary transition-colors">8121210342</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MessageCircle className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>WhatsApp</h4>
                                        <a href="https://wa.me/919951523648" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Chat with us</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>Operating Hours</h4>
                                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: Closed</p>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px] md:min-h-full">
                       <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.35393411263576!2d79.43366339430212!3d13.617386003588582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b985fc5c213%3A0xd623cc319981a324!2sUniverse%20Electronic%20Services!5e0!3m2!1sen!2sin!4v1762931369441!5m2!1sen!2sin" 
                        className="w-full h-full"
                        style={{border:0}} 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                       </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
