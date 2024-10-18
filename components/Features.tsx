import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, PieChart, Users, DollarSign, Zap } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Insights',
    description: 'Get actionable recommendations based on advanced AI analysis of your business data.',
    icon: Brain,
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor key metrics and KPIs in real-time across all aspects of your business.',
    icon: TrendingUp,
  },
  {
    title: 'Data Visualization',
    description: 'Understand complex data at a glance with intuitive charts and graphs.',
    icon: PieChart,
  },
  {
    title: 'Customer Segmentation',
    description: 'Identify and target your most valuable customer segments for improved marketing ROI.',
    icon: Users,
  },
  {
    title: 'Financial Forecasting',
    description: 'Predict future revenue and expenses with AI-driven financial models.',
    icon: DollarSign,
  },
  {
    title: 'Automated Reporting',
    description: 'Save time with automated report generation and scheduled deliveries.',
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-background">
      <h2 className="text-3xl font-bold text-center mb-12">Powerful Features to Drive Growth</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <feature.icon className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}