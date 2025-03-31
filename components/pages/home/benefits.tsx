import { Card } from '@/components/ui/card';
import { LineChart, Bell, BarChart3 } from 'lucide-react';

export function Benefits() {
  return (
    <section className="container px-4 py-12 md:px-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6">
          <LineChart className="h-12 w-12 mb-4 text-orange-500" />
          <h3 className="text-lg font-bold">Predictive Analytics</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Advanced machine learning models with proven high accuracy
          </p>
        </Card>
        <Card className="p-6">
          <Bell className="h-12 w-12 mb-4 text-orange-500" />
          <h3 className="text-lg font-bold">Real-Time Alerts</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stay informed about market shifts and policy changes
          </p>
        </Card>
        <Card className="p-6">
          <BarChart3 className="h-12 w-12 mb-4 text-orange-500" />
          <h3 className="text-lg font-bold">Custom Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Generate detailed reports for stakeholder presentations
          </p>
        </Card>
      </div>
    </section>
  );
}
