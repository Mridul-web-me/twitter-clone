'use client';

import useCurrentUser from '@/hooks/useCurrentUser';
import useNotificaitons from '@/hooks/useNotifications';
import notifications from '@/pages/notifications';
import { useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs';

const NotificationFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotification = [] } = useNotificaitons(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotification.length === 0) {
    return (
      <div
        className="
                text-neutral-500
                text-center
                p-6
                text-xl
            "
      >
        No Notifications
      </div>
    );
  }
  return (
    <div
      className="
        flex
        flex-col
    "
    >
      {fetchedNotification.map((notification: Record<string, any>) => (
        <div
          key={notification.id}
          className="
                flex
                flex-row
                items-center
                p-6
                gap-4
                border-b-[1px]
                border-neutral-800
                "
        >
          <BsTwitter color="white" size={32} />
          <p className="text-white">{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationFeed;
