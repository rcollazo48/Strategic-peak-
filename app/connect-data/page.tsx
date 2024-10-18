'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/hooks/useAuth';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

const dataSourcesOptions = [
  { value: 'salesforce', label: 'Salesforce' },
  { value: 'google_sheets', label: 'Google Sheets' },
  { value: 'mysql', label: 'MySQL Database' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'google_drive', label: 'Google Drive' },
  { value: 'dropbox', label: 'Dropbox' },
];

export default function ConnectData() {
  const [selectedDataSource, setSelectedDataSource] = useState('');
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();
  const { user } = useAuth();

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to connect data sources.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Store the data source connection in Firestore
      await setDoc(doc(db, 'users', user.uid, 'dataSources', selectedDataSource), {
        type: selectedDataSource,
        apiKey: apiKey,
        connectedAt: new Date(),
      });

      toast({
        title: "Connection Successful",
        description: `Successfully connected to ${selectedDataSource}.`,
      });

      // Reset form
      setSelectedDataSource('');
      setApiKey('');
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "An error occurred while connecting to the data source.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Connect Your Data</h1>
      <Card>
        <CardHeader>
          <CardTitle>Data Source Connection</CardTitle>
          <CardDescription>Connect your business data sources to get started with AI-powered insights.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleConnect} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="data-source">Select Data Source</Label>
              <Select value={selectedDataSource} onValueChange={setSelectedDataSource}>
                <SelectTrigger id="data-source">
                  <SelectValue placeholder="Choose a data source" />
                </SelectTrigger>
                <SelectContent>
                  {dataSourcesOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key or Connection String</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your API key or connection string"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={!selectedDataSource || !apiKey}>
              Connect Data Source
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}