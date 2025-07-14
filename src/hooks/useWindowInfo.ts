import { useEffect, useState, useCallback } from "react";

const useWindowInfo = () => {
    const [windowInfo, setWindowInfo] = useState(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 768,
    }));

    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width <= 768;
        setWindowInfo(prev =>
            prev.width !== width || prev.height !== height || prev.isMobile !== isMobile
                ? { width, height, isMobile }
                : prev
        );
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize, { passive: true });
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return windowInfo;
}

export default useWindowInfo;