import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
    const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');
    
    return (
        <section id="contact" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Get In Touch</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're here to help. Reach out to us for any inquiries or to book a service.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                            <ul className="space-y-6 text-base">
                                <li className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>Our Address</h4>
                                        <p className="text-muted-foreground">123 Electronics Street, Tirupati, Andhra Pradesh, 517501</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>Phone</h4>
                                        <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 123-456-7890</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MessageCircle className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className='font-semibold'>WhatsApp</h4>
                                        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Chat with us</a>
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
                        {mapImage && (
                            <Image
                                src={mapImage.imageUrl}
                                alt={mapImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={mapImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
