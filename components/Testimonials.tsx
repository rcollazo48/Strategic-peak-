import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'This AI platform has revolutionized how we approach business growth. The insights provided are invaluable.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthMax',
    content: 'The data visualization tools have made it so much easier to communicate complex metrics to our stakeholders.',
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CFO, InnovateCorp',
    content: 'The financial forecasting feature has significantly improved our budgeting and planning processes.',
    avatar: 'ER',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-background">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}