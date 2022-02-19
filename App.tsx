import '@expo/match-media';
import { useMediaQuery } from "react-responsive";
import MobileComponent from './mobile';
import DesktopComponent from './desktop';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,    // alternatively...    query: "(max-device-width: 1224px)"  
  });
  return (
    <NavigationContainer>
      { isTabletOrMobileDevice ? <MobileComponent /> : <DesktopComponent /> }
    </NavigationContainer>
  )
}


