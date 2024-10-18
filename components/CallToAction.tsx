import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Business Growth?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of businesses already leveraging our AI-powered platform to drive success.
      </p>
      <Button asChild size="lg" variant="secondary">
        <Link href="/signup">Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </Button>
    </section>
  );
}