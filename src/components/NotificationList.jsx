import React from 'react';
import NotificationItem from './NotificationItem';

const mockNotifications = [
  {
    id: 1,
    title: 'Order Confirmed',
    message: 'Your order #2342 has been successfully placed.',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    title: 'Delivery Scheduled',
    message: 'Your grocery delivery is scheduled for tomorrow at 10 AM.',
    time: '2 hours ago',
    read: true,
  },
  {
    id: 3,
    title: 'Account Update',
    message: 'Your profile was updated successfully.',
    time: 'Yesterday',
    read: true,
  },
];

function NotificationList() {
  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <div className="space-y-3">
        {mockNotifications.map((note) => (
          <NotificationItem
            key={note.id}
            title={note.title}
            message={note.message}
            time={note.time}
            read={note.read}
          />
        ))}
      </div>
    </div>
  );
}

export default NotificationList;