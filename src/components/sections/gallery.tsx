import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GallerySection() {
    const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

    return (
        <section id="gallery" className="py-16 lg:py-24 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Our Work & Workshop</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A glimpse into our completed projects and training sessions.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="w-full">
                        <Carousel className="w-full max-w-xl mx-auto">
                            <CarouselContent>
                                {galleryImages.map((image) => (
                                    <CarouselItem key={image.id}>
                                        <Card>
                                            <CardContent className="relative aspect-video flex items-center justify-center p-0">
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={image.description}
                                                    width={600}
                                                    height={400}
                                                    className="object-cover rounded-lg w-full h-full"
                                                    data-ai-hint={image.imageHint}
                                                />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </div>
                    <div className="w-full">
                        <div className="aspect-video rounded-lg overflow-hidden shadow-lg border">
                             <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                        <p className="text-center mt-4 text-muted-foreground text-sm">Watch our team in action!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
