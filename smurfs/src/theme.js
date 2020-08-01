const dark = {
	breakpoints: ['600px', '900px', '1200px', '1800px'],
	colors: {
		text: '#fff',
		background: '#3cf',
		primary: '#db9913',
		secondary: '#97b6c3',
		muted: '#191919',
		highlight: '#29112c',
		gray: '#999',
	},
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 84],
	fontWeights: {
		body: 400,
		heading: 700,
		display: 900,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	textStyles: {
		heading: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
		},
		display: {
			variant: 'textStyles.heading',
			fontSize: [5, 6],
			fontWeight: 'display',
			letterSpacing: '-0.03em',
			mt: 3,
		},
	},
	layout: {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: ['100%', null, '90%', null, '80%'],
			// minHeight: '100vh',
		},
		cardContainer: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-evenly',
		},
	},
	cards: {
		primary: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: 'muted',
			border: '4px solid #97b6c3',
			padding: '20px',
			margin: '30px',
			width: ['90%', null],
		},
	},
	forms: {
		fields: {
			marginY: ['10px', null, null, '20px'],
		},
	},
	buttons: {
		primary: {
			marginY: ['10px', null, null, '20px'],
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			lineHeight: 'body',
			fontWeight: 'body',
			boxSizing: 'border-box',
			minHeight: '100vh',
		},
		a: {
			margin: '10px',
			marginTop: 'auto',
			fontSize: [1, 2, 3, 4],
			textAlign: 'center',
			display: 'inline-block',
			textDecoration: 'none',
			color: 'primary',
			transition: 'all .3s ease',

			'&:hover': {
				color: 'secondary',
				transform: 'scale(1.1)',
			},
		},
	},
};

export default dark;
