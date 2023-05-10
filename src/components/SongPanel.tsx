import { Box, IconButton, SxProps, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { PlayArrow, Stop } from '@mui/icons-material';

import { Song } from '../firebase';

type Props = PropsWithChildren<{
	song: Song;
	sx?: SxProps;
	isPlaying: boolean;
	rating: string;
	onPlay: (song: Song) => void;
	onStop: () => void;
}>;

const SongPanel: FC<Props> = ({
	song,
	sx,
	onPlay,
	isPlaying,
	onStop,
	rating
}) => (
	<Box
		position="relative"
		width="100%"
		display="flex"
		alignItems="center"
		p={1.2}
		borderRadius={6}
		sx={{
			backgroundColor: 'white',
			boxShadow: '0px 5px 25px rgba(0, 26, 255, 0.25)',
			...sx
		}}
	>
		<Box
			component="img"
			width="55px"
			height="55px"
			mr={2}
			borderRadius={4}
			sx={{
				objectFit: 'cover',
				pointerEvents: 'none'
			}}
			alt={song.artist.name}
			src={song.album.cover_xl}
		/>
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			overflow="hidden"
			mr="auto"
		>
			<Typography
				fontWeight="bold"
				sx={{
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis'
				}}
			>
				{song.title}
				{song.title}
				{song.title}
			</Typography>
			<Typography fontSize={13} color="gray">
				{song.artist.name}
			</Typography>
		</Box>

		{isPlaying ? (
			<IconButton onClick={onStop}>
				<Stop sx={{ fontSize: 35, color: 'hsla(0deg, 100%, 50%, .75)' }} />
			</IconButton>
		) : (
			<IconButton onClick={() => onPlay(song)}>
				<PlayArrow sx={{ fontSize: 35, color: '#373669' }} />
			</IconButton>
		)}

		<Box
			position="absolute"
			top={-8}
			right={12}
			py={0.3}
			px={1.5}
			borderRadius="25%"
			sx={{
				backgroundColor: 'white',
				boxShadow: '0px 2px 15px rgba(0, 26, 255, 0.1)'
			}}
		>
			<Typography fontSize={12} fontWeight="900">
				{rating}
			</Typography>
		</Box>
	</Box>
);

export default SongPanel;
