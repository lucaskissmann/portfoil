interface LevelProgressProps {
	label: string;
	level: number;
};

const LevelProgress: React.FC<LevelProgressProps> = ({
	label,
	level,
}) => {

	const totalDots = 5;
	const filledDots = Array(level).fill(true);
	const emptyDots = Array(totalDots - level).fill(false);

	return (
		<div className="flex items-center mb-2">
			<h2 className="w-24 mr-4">{label.toUpperCase()}</h2>
			<div className="flex space-x-1">
				{[...filledDots, ...emptyDots].map((isFilled, index) => (
					<span
						key={index}
						className={`w-5 h-5 rounded-full border-2 border-[#EAB53D] ${isFilled ? 'bg-[#EAB53D]' : 'bg-white'}`}
					/>
				))}
			</div>
		</div>
	)
}

export default LevelProgress;