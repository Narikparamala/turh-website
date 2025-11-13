import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WashingMachine, Wrench } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Image src="https://res.cloudinary.com/doourcehz/image/upload/v1763011712/download_7_mhzvet.jpg" alt="AC Repair" width={40} height={40} className="mx-auto" />,
    title: 'AC Repair',
    description: 'Comprehensive AC servicing, installation, and repair for all brands.',
  },
  {
    icon: <Image src="https://res.cloudinary.com/doourcehz/image/upload/v1763011379/download_5_tdcpgv.jpg" alt="TV Repair" width={40} height={40} className="mx-auto" />,
    title: 'TV Repair',
    description: 'Expert repairs for LED, LCD, OLED, and Plasma TVs.',
  },
  {
    icon: <Image src="https://res.cloudinary.com/doourcehz/image/upload/v1763011475/download_6_qpuemv.jpg" alt="Fridge Repair" width={40} height={40} className="mx-auto" />,
    title: 'Fridge Repair',
    description: 'Solutions for cooling issues, compressor problems, and more.',
  },
  {
    icon: <WashingMachine className="h-10 w-10 text-primary" />,
    title: 'Washing Machine Repair',
    description: 'Top-load and front-load washing machine repairs and servicing.',
  },
   {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Other Appliances',
    description: 'We also repair microwaves, water purifiers, and other small appliances.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Our Repair Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide professional, high-quality repair services for a wide range of home and commercial electronics.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="bg-primary/10 rounded-full p-4 mb-4 inline-flex">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
