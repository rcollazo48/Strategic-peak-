import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
        Supercharge Your Business Growth with AI
      </h1>
      <p className="text-xl mb-8 max-w-2xl text-muted-foreground">
        Unlock hidden opportunities, optimize performance, and make data-driven decisions with our AI-powered business growth platform.
      </p>
      <div className="flex space-x-4">
        <Button asChild size="lg">
          <Link href="/signup">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link href="#features">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}