/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            keyframes: {
                'bounce-left': {
                    '0%, 100%': {
                        transform: 'translateX(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
                'bounce-right': {
                    '0%, 100%': {
                        transform: 'translateX(25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
            animation: {
                'bounce-left': 'bounce-left 3s  infinite',
                'bounce-right': 'bounce-right 3s  infinite',
            },
        },
    },
    plugins: [],
};
