import { useOnlineStatus } from "../utils/customHooks";

const OfflineOnlinePopup = () => {
  const { networkStatus, popupVisibility } = useOnlineStatus();
  return (
    <div className={`offline-popup ${networkStatus ? 'online' : 'offline'} ${popupVisibility ? 'show' : 'hide'}`}>
      {networkStatus ? 'You are back online' : 'You are offline'}
    </div>
  );
};

export default OfflineOnlinePopup;
