/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        oxford: {
          DEFAULT: "#212437",
          50: "#F8F9FC",
          100: "#E2E5EE",
          200: "#A1A9C2",
          300: "#4A5578",
          900: "#0F111A",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      fontSize: {
        // For better type scale and readability
        "body-sm": ["0.9375rem", { lineHeight: "1.5" }], // 15px
        body: ["1.0625rem", { lineHeight: "1.6" }], // 17px
        h4: ["1.25rem", { lineHeight: "1.4" }], // 20px
        h3: ["1.5rem", { lineHeight: "1.3" }], // 24px
        h2: ["1.875rem", { lineHeight: "1.3" }], // 30px
        h1: ["2.25rem", { lineHeight: "1.2" }], // 36px
        display: ["3rem", { lineHeight: "1.2" }], // 48px
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#212437',
            a: {
              color: '#4A5578',
              '&:hover': {
                color: '#212437',
              },
            },
            h1: {
              fontFamily: 'Montserrat, system-ui, sans-serif',
              color: '#212437',
            },
            h2: {
              fontFamily: 'Montserrat, system-ui, sans-serif',
              color: '#212437',
            },
            h3: {
              fontFamily: 'Montserrat, system-ui, sans-serif',
              color: '#212437',
            },
            h4: {
              fontFamily: 'Montserrat, system-ui, sans-serif',
              color: '#212437',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#212437',
              backgroundColor: '#F8F9FC',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
