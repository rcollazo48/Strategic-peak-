import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    features: ['Basic Analytics', 'Limited AI Insights', 'Email Support'],
  },
  {
    name: 'Pro',
    price: '$99',
    features: ['Advanced Analytics', 'Full AI Insights', 'Priority Support', 'Custom Reporting'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All Pro Features', 'Dedicated Account Manager', 'Custom Integrations', 'On-Premise Deployment'],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="text-3xl font-bold">{plan.price}</p>
              {plan.name !== 'Enterprise' && <p className="text-sm text-muted-foreground">per month</p>}
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}