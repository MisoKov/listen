import {
	Box,
	Button,
	Icon,
	MobileStepper,
	Slide,
	Typography
} from '@mui/material';
import {
	MusicNoteOutlined,
	EmojiEventsOutlined,
	PersonOutlined
} from '@mui/icons-material';
import React, { useState } from 'react';

import Circle from '../components/Circle';

const IntroPage = () => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const steps = [
		{
			icon: MusicNoteOutlined,
			text: 'Listen to randomly selected song'
		},
		{
			icon: EmojiEventsOutlined,
			text: 'Rate the song with multi-directional swipe'
		},
		{
			icon: PersonOutlined,
			text: 'See global scoreboard ratings'
		}
	];

	return (
		<Box
			sx={{
				paddingX: 2,
				display: 'grid',
				gridTemplateColumns: '1fr',
				gridTemplateRows: '1fr',
				width: '100%',
				overflow: 'hidden'
			}}
		>
			<MobileStepper
				variant="dots"
				steps={steps.length}
				position="top"
				sx={{ paddingTop: 5, justifyContent: 'center', background: 'none' }}
				activeStep={activeStep}
				nextButton={undefined}
				backButton={undefined}
			/>

			{steps.map((step, index) => (
				<Slide
					timeout={350}
					direction={index === activeStep ? 'left' : 'right'}
					in={index === activeStep}
					key={index}
					easing={{
						enter: 'cubic-bezier(.45,.2,.42,.93)',
						exit: 'linear'
					}}
				>
					<Box
						sx={{
							gridRowStart: 1,
							gridColumnStart: 1,
							display: 'flex',
							flexDirection: 'column',
							marginTop: 15
						}}
					>
						<Circle sx={{ padding: 8 }}>
							<Icon component={step.icon} sx={{ fontSize: 140 }} />
						</Circle>
						<Typography
							key={index}
							variant="h4"
							sx={{
								marginTop: 10,
								fontWeight: 'bold',
								textAlign: 'center',
								gridRowStart: 1,
								gridColumnStart: 1
							}}
						>
							{step.text}
						</Typography>
						<Button
							variant="contained"
							sx={{
								position: 'relative',
								width: '100%',
								boxShadow: 'none',
								backgroundColor: '#373669',
								fontWeight: 'bold',
								textTransform: 'none',
								borderRadius: 3,
								padding: 2,
								marginTop: 'auto',
								marginBottom: 2
							}}
							fullWidth
							onClick={handleNext}
						>
							<Typography sx={{ fontWeight: 'bold' }}>Next</Typography>
						</Button>
					</Box>
				</Slide>
			))}
		</Box>
	);
};

export default IntroPage;
