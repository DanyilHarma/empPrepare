type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    return function (...args: number[]) {
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
}
