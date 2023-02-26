import React, { useState, useEffect, createContext, useContext } from 'react';

// 1. Set up our breakpoints for our CSS
export const breakpoints = {
    isMediumAndUp: '(min-width: 800px)',
    isLargeAndUp: '(min-width: 1200px)',
};

// 2. Leverage CSS breakpoints in JS
export const evalScreen = () => {
    return {
        isMediumAndUp: window.matchMedia(breakpoints.isMediumAndUp).matches,
        isLargeAndUp: window.matchMedia(breakpoints.isLargeAndUp).matches,
    };
};

// 3. Initialize on Load so we do not have to repeat ourselves
const defaultScreen = evalScreen();

// 4. Create Default Context state
const MediaQueryContext = createContext(defaultScreen);

// 5. This is the Provider - any child it is wrapped around, will be MediaQuery Aware
export const MediaQueryProvider = ({ children }) => {
    const [mediaState, mediaStateUpdate] = useState(defaultScreen);

    useEffect(() => {
        const evaluateMedia = () => {
            mediaStateUpdate(evalScreen());
        };

        // Evaluate on load
        evaluateMedia();

        // Listen and evaluate on resize
        window.addEventListener('resize', evaluateMedia);
        return () => {
            // Remove listener on dismount
            window.removeEventListener('resize', evaluateMedia);
        };
    }, []);

    return (
        <MediaQueryContext.Provider value={mediaState}>
            {children}
        </MediaQueryContext.Provider>
    );
};

// 6. This is what is used in the children to access our media queries
export const useMediaQuery = () => {
    return useContext(MediaQueryContext);
};
