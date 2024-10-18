'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AIInsights } from '@/components/AIInsights';

const data = [
  { name: 'Product A', sales: 4000, target: 2400 },
  { name: 'Product B', sales: 3000, target: 1398 },
  { name: 'Product C', sales: 2000, target: 9800 },
  { name: 'Product D', sales: 2780, target: 3908 },
  { name: 'Product E', sales: 1890, target: 4800 },
  { name: 'Product F', sales: 2390, target: 3800 },
  { name: 'Product G', sales: 3490, target: 4300 },
];

export default function SalesMetrics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Sales Metrics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance by Product</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="target" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.sort((a, b) => b.sales - a.sales).slice(0, 5).map((product, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{product.name}</span>
                  <span className="font-semibold">${product.sales.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <AIInsights
        insights={[
          "Product A and G are consistently outperforming their sales targets. Consider allocating more resources to promote these products further.",
          "Product C is significantly underperforming compared to its target. Investigate the reasons for this gap and develop strategies to improve its sales performance.",
          "Products B and F are closely meeting their targets. Analyze what's working well for these products and apply those learnings to other underperforming products.",
          "Consider bundling high-performing products with lower-performing ones to boost overall sales.",
          "Review your pricing strategy for underperforming products to ensure they are competitive in the market."
        ]}
      />
    </div>
  );
}