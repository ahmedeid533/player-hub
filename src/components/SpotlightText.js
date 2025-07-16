// components/SpotlightText.js

import Image from "next/image";

const SpotlightText = () => {
	return (
		// Main container for the whole scene
		<div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
			{/* ===== The "Lamp & Beam Rig" (Top Layer) ===== */}
			{/* This container is the ONLY thing that swings.
          Note the 'transform-origin' to make it swing from the top.
      */}
			<div
				className="absolute -top-4 z-30 animate-swing-and-move"
				style={{ transformOrigin: "50% 0" }}
			>
				{/* The Lamp Image - No animation, it just sits inside the rig */}
				<div className="relative flex justify-center">
					<Image
						src="/lamp.png"
						alt="Hanging Lamp"
						width={200}
						height={200}
						className="z-10" // Lamp is in front of its own beam
					/>
				</div>

				{/* The Light Beam - Positioned relative to the rig, below the lamp */}
				<div
					className="relative mx-auto"
					style={{
						// Position it to start below the lamp's bulb
						top: "-120px",
						height: "500px",
						width: "300px",
						// The light effect itself
						background:
							"radial-gradient(ellipse 70% 120% at 50% 90%, rgba(168, 85, 247, 0.25), transparent 80%)",
						filter: "blur(5px)",
					}}
				></div>
			</div>

			{/* ===== The Text (Bottom Layer) ===== */}
			{/* This container has a lower z-index to be behind the rig */}
			<div className="relative z-10">
				<h1 className="text-8xl md:text-9xl font-bold text-slate-700 select-none">
					PLAYERHUB
				</h1>
				<h1 className="absolute top-0 left-0 text-8xl md:text-9xl font-bold text-purple-500 select-none animate-color-wipe">
					PLAYERHUB
				</h1>
			</div>
		</div>
	);
};

export default SpotlightText;
