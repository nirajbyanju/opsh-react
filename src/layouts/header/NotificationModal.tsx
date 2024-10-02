import { FC, useEffect, useState } from "react";
import Pusher from "pusher-js";
import sildingImg from "../../assets/auth/sildingImg.png";
interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal: FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Initialize Pusher
    const pusher = new Pusher("dac85103f0ef206efeb4", {
      cluster: "ap2",
    });

    // Subscribe to the channel and event
    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data: any) {
      // Log the received data in the console
      console.log("Pusher event received:", data);

      // Assuming the message is in data.message
      setNotifications((prev) => [...prev, data.data.message]);

      // Automatically open the modal if not open
      if (!isOpen) onClose();
    });

    // Cleanup the pusher connection when the component unmounts
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-lg px-2 shadow-lg w-64 z-50 border border-gray-200">
    {notifications.length > 0 ? (
        notifications.map((notification, index) => (
            
      <div key={index}  className="flex items-center pb-3">
        <div className="relative inline-block shrink-0">
          <div className="rounded-full w-10 h-10">
            <img
              src={sildingImg}
              alt="profile-image"
              className="rounded-full"
            />
          </div>
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full">
            <svg
              className="w-2 h-2 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 18"
              fill="currentColor"
            >
              <path
                d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                fill="currentColor"
              />
              <path
                d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Message icon</span>
          </span>
        </div>
        <div className="ms-3 flex flex-col text-sm font-normal space-y-0.5">
          <span className="text-sm font-semibold m-0 p-0 text-gray-900">
            Bonnie Green
          </span>
          <span className="text-sm font-normal">{notification}</span>
          <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
            a few seconds ago
          </span>
        </div>
      </div>
    ))
          ) : (
            <p className="text-opsh-black text-sm">You have no new notifications.</p>
            )}
      
    </div>
  );
};

export default NotificationModal;
