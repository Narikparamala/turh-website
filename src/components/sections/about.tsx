import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 lg:py-24 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 md:h-auto md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg order-last md:order-first">
                        <Image
                            src="https://res.cloudinary.com/doourcehz/image/upload/v1762927865/IMG_20251112_113907_dng2b6.jpg"
                            alt="Founder of Tirupati Universe Electronics"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
                            Meet Our Founder
                        </h2>
                        <h3 className="text-xl font-semibold mt-2 text-foreground">Srinivas M.</h3>
                        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                            With over 20 years of hands-on experience in the electronics repair industry, Srinivas founded Tirupati Universe Electronics with a simple mission: to provide honest, reliable, and expert service to the community.
                        </p>
                        <p className="mt-4 text-muted-foreground max-w-xl mx-auto md:mx-0">
                            His passion for technology and commitment to quality have been the driving force behind our success. He is also dedicated to mentoring the next generation of technicians through our unique apprenticeship program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
