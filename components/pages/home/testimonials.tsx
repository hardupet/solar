import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Solar Project Manager',
    content: 'This platform has revolutionized how we approach solar projects.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Investment Analyst',
    content: 'The predictive insights have been invaluable for our investment decisions.',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'EPC Director',
    content: 'Excellent tool for project planning and analysis.',
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="container px-4 py-12 md:px-6 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map(testimonial => (
          <Card key={testimonial.name} className="p-6">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="mb-4">{testimonial.content}</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
