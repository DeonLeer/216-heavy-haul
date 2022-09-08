import { useState, useCallback, useEffect } from 'react';
import * as React from 'react';
import DestopNav from './DesktopNav';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
}
function NavBar(props) {

  const isBreakpoint = useMediaQuery(1000)

  return (
    <nav>
      {isBreakpoint ? (
        <>Mobile Nav</>
      ) : (
        <DestopNav />
      )}

    </nav>
  );
}

export default NavBar;