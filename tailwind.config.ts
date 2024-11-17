import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#F3F6EB',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: '#568366',
				100: '#E3F4E8',
				200: '#C7E9D0',
				300: '#AADFB9',
				400: '#8ED5A1',
				500: '#71CA89',
				600: '#568366', 
				700: '#3F6350',
				800: '#2A4439',
				900: '#162721',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
			tertiary: {
				DEFAULT: '#FFCE55',
				100: '#FFF5DC',
				200: '#FFE9B5',
				300: '#FFDE8F',
				400: '#FFD366',
				500: '#FFCE55', // DEFAULT
				600: '#E6B54D',
				700: '#CC9D44',
				800: '#B3843C',
				900: '#996C33',
				foreground: 'hsl(var(--tertiary-foreground))'
			},
			quaternary: {
				DEFAULT: '#DBF68F', 
				100: '#F5FBE0',
				200: '#EAF9C4',
				300: '#E0F7A8',
				400: '#D5F48D',
				500: '#DBF68F', // DEFAULT
				600: '#C3DE7F',
				700: '#AABD6E',
				800: '#91A35E',
				900: '#788A4D',
				foreground: 'hsl(var(--quaternary-foreground))'
			},
			quinary: {
				DEFAULT: '#92C3A5', 
				100: '#EBF5F0',
				200: '#CEE5DB',
				300: '#B1D5C7',
				400: '#94C5B3',
				500: '#92C3A5', // DEFAULT
				600: '#7EA98E',
				700: '#698F78',
				800: '#547562',
				900: '#3F5B4C',
				foreground: 'hsl(var(--quinary-foreground))'
			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
