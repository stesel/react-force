import * as React from "react";

/**
 * Hook executes callback on each animation frame.
 * @param callback - function which is executed on each animation frame.
 */
export function useAnimation(callback: (time: number) => void) {
    const callbackRef = React.useRef<typeof callback>((time: number) => { /* empty */ });
    const frameRef = React.useRef<number>();

    callbackRef.current = (time: number) => {
        callback(time);
        frameRef.current = window.requestAnimationFrame(callbackRef.current);
    };

    React.useEffect(() => {
        frameRef.current = window.requestAnimationFrame(callbackRef.current);
        return () => {
            if (frameRef.current) {
                window.cancelAnimationFrame(frameRef.current);
            }
        };
    }, [callbackRef]);
}

/**
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
