import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Powerful predictive models for solar adoption trends',
  },
  {
    title: 'Real-time Monitoring',
    description: 'Track solar performance metrics in real-time',
  },
  {
    title: 'Custom Reports',
    description: 'Generate detailed reports for stakeholders',
  },
  {
    title: 'API Access',
    description: 'Integrate with your existing systems',
  },
  {
    title: 'Market Insights',
    description: 'Stay updated with market trends',
  },
  {
    title: 'Policy Tracking',
    description: 'Monitor regulatory changes and policies',
  },
];

export function Features() {
  return (
    <section className="container px-4 py-12 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(feature => (
          <Card key={feature.title} className="p-6">
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
