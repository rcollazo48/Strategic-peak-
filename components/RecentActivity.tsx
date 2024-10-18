import { Activity } from 'lucide-react';

const activities = [
  { id: 1, description: 'New customer signed up', time: '2 hours ago' },
  { id: 2, description: 'Large order placed', time: '4 hours ago' },
  { id: 3, description: 'Marketing campaign launched', time: '1 day ago' },
  { id: 4, description: 'New product added to inventory', time: '2 days ago' },
];

export function RecentActivity() {
  return (
    <ul className="space-y-4">
      {activities.map((activity) => (
        <li key={activity.id} className="flex items-center space-x-3">
          <Activity className="h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-medium">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}