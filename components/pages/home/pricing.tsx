import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$0',
    features: ['Basic predictions', 'Monthly reports', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$30',
    isBestSeller: true,
    features: ['Advanced predictions', 'Weekly reports', 'Priority support', 'API access'],
  },
  {
    name: 'Enterprise',
    price: '$100',
    features: [
      'Custom predictions',
      'Real-time reports',
      '24/7 support',
      'Full API access',
      'Custom integration',
    ],
  },
];

export function Pricing() {
  return (
    <section className="container px-4 py-12 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map(plan => (
          <Card key={plan.name} className="p-6 relative">
            {plan.isBestSeller && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Best seller
              </div>
            )}
            <div className="mb-4">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <div className="mt-2 text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">
              {plan.name === 'Basic' ? 'Get Started' : 'Subscribe'}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
