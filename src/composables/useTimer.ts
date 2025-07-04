import { ref, onMounted, onUnmounted } from 'vue';

export function useTimer(duration: number) {
    const timeLeft = ref(duration);
    const isRunning = ref(false);
    let timer: NodeJS.Timeout | null = null;

    const start = () => {
        if (isRunning.value) return;
        isRunning.value = true;
        timer = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                stop();
            }
        }, 1000);
    };

    const stop = () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        isRunning.value = false;
    };

    const reset = () => {
        stop();
        timeLeft.value = duration;
    };

    onMounted(() => {
        reset();
    });

    onUnmounted(() => {
        stop();
    });

    return {
        timeLeft,
        isRunning,
        start,
        stop,
        reset,
    };
}