import React from 'react';
import { MdNotificationsActive } from 'react-icons/md';

function NotificationItem({ title, message, time, read }) {
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-md border shadow-sm ${
        read ? 'bg-white' : 'bg-blue-50'
      }`}
    >
      <div className="text-blue-600 mt-1">
        <MdNotificationsActive size={24} />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{message}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}

export default NotificationItem;