import { useOnlineStatus } from "../utils/customHooks";

const OfflineOnlinePopup = () => {
  const { networkStatus, popupVisibility } = useOnlineStatus();
  return (
    <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-2 rounded font-bold text-sm z-50 transition-opacity ${networkStatus ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'} ${popupVisibility ? 'opacity-100' : 'opacity-0'}`}>
      {networkStatus ? 'You are back online' : 'You are offline'}
    </div>
  );
};

export default OfflineOnlinePopup;
