import * as React from "react";

/**
 * Hook executes callback on each animation frame.
 * @param callback - function which is executed on each animation frame.
 */
export function useAnimation(callback: () => void) {
    const callbackRef = React.useRef<() => void>(() => { /* empty */ });
    callbackRef.current = callback;
    const frameRef = React.useRef<number>();

    callbackRef.current = () => {
        callback();
        frameRef.current = requestAnimationFrame(callbackRef.current);
    };

    React.useEffect(() => {
        frameRef.current = requestAnimationFrame(callbackRef.current);
        return () => {
            if (frameRef.current) {
                window.cancelAnimationFrame(frameRef.current);
            }
        };
    }, [callbackRef]);
}

/***
 * Hook return times in milliseconds on each animation frame.
 */
export function useAnimationTime() {
    const initialTimeRef = React.useRef(Date.now());
    const [time, setTime] = React.useState(0);
    useAnimation(() => {
        setTime(Date.now() - initialTimeRef.current);
    });
    return time;
}
