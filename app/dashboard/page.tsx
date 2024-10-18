'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart, DollarSign, TrendingUp, Users } from 'lucide-react';
import { OverviewChart } from '@/components/OverviewChart';
import { RecentActivity } from '@/components/RecentActivity';
import { useAuth } from '@/hooks/useAuth';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { fetchDataFromSource } from '@/lib/dataFetcher';

export default function Dashboard() {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    newCustomers: 0,
    sales: 0,
    activeNow: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        const dataSourcesSnapshot = await getDocs(collection(db, 'users', user.uid, 'dataSources'));
        let combinedMetrics = {
          totalRevenue: 0,
          newCustomers: 0,
          sales: 0,
          activeNow: 0,
        };

        for (const doc of dataSourcesSnapshot.docs) {
          const sourceData = doc.data();
          const sourceMetrics = await fetchDataFromSource(sourceData.type, sourceData.apiKey);
          combinedMetrics.totalRevenue += sourceMetrics.totalRevenue || 0;
          combinedMetrics.newCustomers += sourceMetrics.newCustomers || 0;
          combinedMetrics.sales += sourceMetrics.sales || 0;
          combinedMetrics.activeNow += sourceMetrics.activeNow || 0;
        }

        setMetrics(combinedMetrics);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Total Revenue" value={`$${metrics.totalRevenue.toFixed(2)}`} icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} />
        <MetricCard title="New Customers" value={metrics.newCustomers.toString()} icon={<Users className="h-4 w-4 text-muted-foreground" />} />
        <MetricCard title="Sales" value={metrics.sales.toString()} icon={<BarChart className="h-4 w-4 text-muted-foreground" />} />
        <MetricCard title="Active Now" value={metrics.activeNow.toString()} icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Business Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button asChild className="w-full">
          <Link href="/metrics/finance">Finance Metrics</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/metrics/sales">Sales Metrics</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/metrics/marketing">Marketing Metrics</Link>
        </Button>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
</boltArtifact>

Now, let's create the `dataFetcher.ts` file to handle fetching data from different sources:

<boltArtifact id="data-fetcher" title="Data Fetcher for Different Sources">
<boltAction type="file" filePath="lib/dataFetcher.ts">
import axios from 'axios';

interface Metrics {
  totalRevenue?: number;
  newCustomers?: number;
  sales?: number;
  activeNow?: number;
}

export async function fetchDataFromSource(sourceType: string, apiKey: string): Promise<Metrics> {
  switch (sourceType) {
    case 'salesforce':
      return fetchSalesforceData(apiKey);
    case 'google_sheets':
      return fetchGoogleSheetsData(apiKey);
    case 'mysql':
    case 'mongodb':
      return fetchDatabaseData(sourceType, apiKey);
    case 'google_drive':
    case 'dropbox':
      return fetchCloudStorageData(sourceType, apiKey);
    default:
      throw new Error(`Unsupported data source: ${sourceType}`);
  }
}

async function fetchSalesforceData(apiKey: string): Promise<Metrics> {
  // Implement Salesforce API call here
  // This is a mock implementation
  return {
    totalRevenue: 100000,
    newCustomers: 50,
    sales: 200,
    activeNow: 100,
  };
}

async function fetchGoogleSheetsData(apiKey: string): Promise<Metrics> {
  // Implement Google Sheets API call here
  // This is a mock implementation
  return {
    totalRevenue: 75000,
    newCustomers: 30,
    sales: 150,
    activeNow: 80,
  };
}

async function fetchDatabaseData(sourceType: string, connectionString: string): Promise<Metrics> {
  // Implement database connection and query here
  // This is a mock implementation
  return {
    totalRevenue: 120000,
    newCustomers: 60,
    sales: 250,
    activeNow: 120,
  };
}

async function fetchCloudStorageData(sourceType: string, apiKey: string): Promise<Metrics> {
  // Implement cloud storage API call here
  // This is a mock implementation
  return {
    totalRevenue: 90000,
    newCustomers: 40,
    sales: 180,
    activeNow: 90,
  };
}