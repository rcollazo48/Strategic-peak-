'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { AIInsights } from '@/components/AIInsights';

const data = [
  { name: 'Social Media', value: 400 },
  { name: 'Email', value: 300 },
  { name: 'SEO', value: 300 },
  { name: 'PPC', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MarketingMetrics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Marketing Metrics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Summer Sale</span>
                <span className="font-semibold">ROI: 250%</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Product Launch</span>
                <span className="font-semibold">ROI: 180%</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Brand Awareness</span>
                <span className="font-semibold">ROI: 120%</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Referral Program</span>
                <span className="font-semibold">ROI: 300%</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <AIInsights
        insights={[
          "Social Media is your top lead source. Consider increasing budget allocation for social media campaigns and explore new platforms to expand your reach.",
          "Email and SEO are tied for second place. Optimize your email marketing strategies and continue to focus on improving your search engine rankings.",
          "PPC campaigns are generating the least leads. Review your ad copy, targeting, and landing pages to improve performance.",
          "The Referral Program has the highest ROI. Develop strategies to encourage more customer referrals, such as offering increased incentives or improving the user experience of the referral process.",
          "The Summer Sale campaign performed well. Plan similar seasonal campaigns throughout the year to capitalize on this success."
        ]}
      />
    </div>
  );
}