// app/page.js
"use client";

import SpotlightText from "@/components/SpotlightText";
import { useState, useEffect } from "react";
import {
	ChevronDown,
	ChevronRight,
	Star,
	Youtube,
	Twitter,
	Facebook,
	Instagram,
	Search,
	Bell,
	ShoppingCart,
} from "lucide-react";

// Reusable Components from previous version (can be moved to separate files)
const SectionTitle = ({ children }) => (
	<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 tracking-wider">
		{children}
	</h2>
);
/**
 * <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <g clip-path="url(#clip0_1456_3756)">
    <path d="M8.76557 5.88184C10.0256 5.88184 11.234 6.38238 12.125 7.27335C13.0159 8.16432 13.5165 9.37273 13.5165 10.6328C13.5165 11.8928 13.0159 13.1012 12.125 13.9922C11.234 14.8831 10.0256 15.3837 8.76557 15.3837C7.50555 15.3837 6.29714 14.8831 5.40617 13.9922C4.5152 13.1012 4.01466 11.8928 4.01466 10.6328C4.01466 9.37273 4.5152 8.16432 5.40617 7.27335C6.29714 6.38238 7.50555 5.88184 8.76557 5.88184ZM8.76557 9.27535C8.40557 9.27535 8.06031 9.41836 7.80575 9.67293C7.55118 9.92749 7.40817 10.2727 7.40817 10.6328C7.40817 10.9928 7.55118 11.338 7.80575 11.5926C8.06031 11.8471 8.40557 11.9902 8.76557 11.9902C9.12558 11.9902 9.47084 11.8471 9.7254 11.5926C9.97997 11.338 10.123 10.9928 10.123 10.6328C10.123 10.2727 9.97997 9.92749 9.7254 9.67293C9.47084 9.41836 9.12558 9.27535 8.76557 9.27535ZM7.01452 1.80963C7.23488 1.80961 7.45193 1.86324 7.64692 1.96588C7.84191 2.06851 8.00898 2.21708 8.1337 2.39874L8.19275 2.49376L9.3703 4.5543C8.54987 4.47129 7.72113 4.55591 6.93442 4.80302C6.1477 5.05013 5.41942 5.45457 4.79381 5.99179L4.63635 6.1316L3.03665 3.33264C2.95183 3.18432 2.9057 3.01704 2.90252 2.8462C2.89934 2.67537 2.9392 2.50649 3.01844 2.35511C3.09768 2.20374 3.21374 2.07474 3.35593 1.98C3.49812 1.88527 3.66187 1.82785 3.83209 1.81302L3.91964 1.80963H7.01452ZM13.6101 1.80963C13.7885 1.80957 13.9637 1.85636 14.1183 1.94531C14.2729 2.03426 14.4013 2.16225 14.4909 2.31647C14.5804 2.4707 14.6279 2.64574 14.6285 2.82407C14.6292 3.00241 14.583 3.17778 14.4945 3.33264L12.8948 6.1316C12.325 5.60819 11.661 5.19776 10.9381 4.92216L9.55015 2.49376C9.5185 2.43848 9.48313 2.38542 9.44428 2.33495C9.57114 2.17143 9.73372 2.03909 9.91958 1.94804C10.1054 1.85699 10.3097 1.80965 10.5166 1.80963H13.6101Z" fill="#227CFF"/>
  </g>
  <defs>
    <clipPath id="clip0_1456_3756">
      <rect width="16.2889" height="16.2888" fill="white" transform="translate(0.621094 0.452271)"/>
    </clipPath>
  </defs>
</svg>
 */
const medalIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="17"
		viewBox="0 0 17 17"
		fill="none"
	>
		<g clip-path="url(#clip0_1456_3756)">
			<path
				d="M8.76557 5.88184C10.0256 5.88184 11.234 6.38238 12.125 7.27335C13.0159 8.16432 13.5165 9.37273 13.5165 10.6328C13.5165 11.8928 13.0159 13.1012 12.125 13.9922C11.234 14.8831 10.0256 15.3837 8.76557 15.3837C7.50555 15.3837 6.29714 14.8831 5.40617 13.9922C4.5152 13.1012 4.01466 11.8928 4.01466 10.6328C4.01466 9.37273 4.5152 8.16432 5.40617 7.27335C6.29714 6.38238 7.50555 5.88184 8.76557 5.88184ZM8.76557 9.27535C8.40557 9.27535 8.06031 9.41836 7.80575 9.67293C7.55118 9.92749 7.40817 10.2727 7.40817 10.6328C7.40817 10.9928 7.55118 11.338 7.80575 11.5926C8.06031 11.8471 8.40557 11.9902 8.76557 11.9902C9.12558 11.9902 9.47084 11.8471 9.7254 11.5926C9.97997 11.338 10.123 10.9928 10.123 10.6328C10.123 10.2727 9.97997 9.92749 9.7254 9.67293C9.47084 9.41836 9.12558 9.27535 8.76557 9.27535ZM7.01452 1.80963C7.23488 1.80961 7.45193 1.86324 7.64692 1.96588C7.84191 2.06851 8.00898 2.21708 8.1337 2.39874L8.19275 2.49376L9.3703 4.5543C8.54987 4.47129 7.72113 4.55591 6.93442 4.80302C6.1477 5.05013 5.41942 5.45457 4.79381 5.99179L4.63635 6.1316L3.03665 3.33264C2.95183 3.18432 2.9057 3.01704 2.90252 2.8462C2.89934 2.67537 2.9392 2.50649 3.01844 2.35511C3.09768 2.20374 3.21374 2.07474 3.35593 1.98C3.49812 1.88527 3.66187 1.82785 3.83209 1.81302L3.91964 1.80963H7.01452ZM13.6101 1.80963C13.7885 1.80957 13.9637 1.85636 14.1183 1.94531C14.2729 2.03426 14.4013 2.16225 14.4909 2.31647C14.5804 2.4707 14.6279 2.64574 14.6285 2.82407C14.6292 3.00241 14.583 3.17778 14.4945 3.33264L12.8948 6.1316C12.325 5.60819 11.661 5.19776 10.9381 4.92216L9.55015 2.49376C9.5185 2.43848 9.48313 2.38542 9.44428 2.33495C9.57114 2.17143 9.73372 2.03909 9.91958 1.94804C10.1054 1.85699 10.3097 1.80965 10.5166 1.80963H13.6101Z"
				fill="#227CFF"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1456_3756">
				<rect
					width="16.2889"
					height="16.2888"
					fill="white"
					transform="translate(0.621094 0.452271)"
				/>
			</clipPath>
		</defs>
	</svg>
);

const GameItemCard = ({ item }) => (
	<div className="bg-[#1e1e2d] rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
		<div className="relative">
			<img
				src={item.image}
				alt={item.title}
				className="w-full h-48 object-cover"
			/>
			<div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
				{item.price}
			</div>
		</div>
		<div className="p-4">
			<h3 className="text-white text-lg font-semibold mb-2">
				{item.title}
			</h3>
			<div className="flex items-center text-gray-400 text-sm mb-4">
				<img
					src="https://placehold.co/24x24/ffffff/000000?text=S"
					alt="seller"
					className="w-6 h-6 rounded-full mr-2"
				/>
				<span>{item.seller}</span>
			</div>
			<div className="text-gray-400 text-xs space-y-2">
				<div className="flex justify-between">
					<span>Platform:</span>{" "}
					<span className="text-white font-medium">
						{item.platform}
					</span>
				</div>
				<div className="flex justify-between">
					<span>Delivery:</span>{" "}
					<span className="text-white font-medium">
						{item.delivery}
					</span>
				</div>
				<div className="flex justify-between">
					<span>In Stock:</span>{" "}
					<span className="text-white font-medium">{item.stock}</span>
				</div>
			</div>
			<button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
				View Item
			</button>
		</div>
	</div>
);

// Header Component based on the new design
const Header = () => {
	const [timeLeft, setTimeLeft] = useState(6 * 3600 + 12 * 60 + 56); // Example time

	useEffect(() => {
		if (timeLeft <= 0) return;
		const timer = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);
		return () => clearTimeout(timer);
	}, [timeLeft]);

	const formatTime = (seconds) => {
		const h = Math.floor(seconds / 3600)
			.toString()
			.padStart(2, "0");
		const m = Math.floor((seconds % 3600) / 60)
			.toString()
			.padStart(2, "0");
		const s = (seconds % 60).toString().padStart(2, "0");
		return `${h}:${m}:${s}`;
	};

	return (
		<header className="bg-[#161622]/80 backdrop-blur-sm sticky top-0 z-50">
			<div className="bg-purple-600 text-white text-center text-sm py-1">
				<div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
					<div className="hidden md:flex items-center gap-2 text-gray-400">
						<Facebook className="w-5 h-5 hover:text-white transition-colors" />
						<Twitter className="w-5 h-5 hover:text-white transition-colors" />
						<Instagram className="w-5 h-5 hover:text-white transition-colors" />
					</div>
					<span>
						<span>✨ Up to 50% discount on every weekend!</span>
						<span className="font-bold bg-purple-800/50 px-2 ms-2 py-0.5 rounded">
							{formatTime(timeLeft)}
						</span>
					</span>
				</div>
			</div>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-8">
						<div className="text-white text-2xl font-bold tracking-wider">
							PLAYER<span className="text-purple-400">HUB</span>
						</div>
					</div>
					<div className="hidden lg:flex flex-1 justify-center px-8">
						<div className="relative w-full max-w-lg">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
							<input
								type="text"
								placeholder="Search..."
								className="bg-[#1e1e2d] w-full pl-10 pr-32 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
							<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
								<span className="text-gray-400 text-sm">
									Category
								</span>
								<ChevronDown className="text-gray-400 w-4 h-4 ml-1" />
							</div>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<ShoppingCart className="text-gray-300 hover:text-white transition-colors cursor-pointer" />
						<Bell className="text-gray-300 hover:text-white transition-colors cursor-pointer" />
						<div className="flex items-center gap-2">
							<img
								src="https://placehold.co/32x32/ffffff/000000?text=E"
								alt="Elinor Summer"
								className="w-8 h-8 rounded-full"
							/>
							<span className="text-white font-medium hidden sm:block">
								Elinor Summer
							</span>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

// REWORKED: Hero Section with new animation and layout
const HeroSection = () => {
	const [isAnimated, setIsAnimated] = useState(false);

	useEffect(() => {
		// Trigger the animation shortly after the component mounts
		const timer = setTimeout(() => setIsAnimated(true), 100);
		return () => clearTimeout(timer);
	}, []);

	const gameCards = [
		{
			title: "Fortnite",
			subtitle: "Battle Royal",
			backgroundColor: "fort",
			image: "/images/home/fort.png",
			rating: "4.5",
			zIndex: 10,
			delay: "400ms",
			rotation: "-rotate-[24deg]",
			translateX: "-translate-x-[165%]",
			translateY: "translate-y-24",
		},
		{
			title: "Call of Duty",
			subtitle: "Kingdom Battle",
			backgroundColor: "call",
			image: "/images/home/call.png",
			rating: "4.6",
			zIndex: 20,
			delay: "200ms",
			rotation: "-rotate-[12deg]",
			translateX: "-translate-x-[110%]",
			translateY: "translate-y-10",
		},
		{
			title: "Valorant",
			subtitle: "Star Allies",
			backgroundColor: "val",
			image: "/images/home/val.png",
			rating: "4.7",
			zIndex: 30,
			delay: "0ms",
			rotation: "rotate-0",
			translateX: "-translate-x-1/2",
			translateY: "translate-y-0",
		},
		{
			title: "League of Legends",
			subtitle: "Nexus",
			backgroundColor: "lol",
			image: "/images/home/lol.png",
			rating: "4.7",
			zIndex: 20,
			delay: "250ms",
			rotation: "rotate-[12deg]",
			translateX: "translate-x-[10%]",
			translateY: "translate-y-10",
		},
		{
			title: "Counter-Strike",
			subtitle: "Global Offensive",
			backgroundColor: "csgo",
			image: "/images/home/counter.png",
			rating: "4.7",
			zIndex: 10,
			delay: "450ms",
			rotation: "rotate-[24deg]",
			translateX: "translate-x-[65%]",
			translateY: "translate-y-24",
		},
	];

	return (
		<div className="relative gradientHomeBg text-white pt-24 pb-56 px-4 sm:px-6 lg:px-8 text-center overflow-hidden md:max-h-screen min-h-[700px] md:min-h-screen">
			{/* Background Grid */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2MTYyMiIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTYxNjIyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

			{/* Floating weapon placeholders */}
			<img
				src="/images/home/gun.png"
				alt="weapon"
				className="absolute top-1/10 float-animation left-[15%] w-50 h-50 object-contain opacity-50 -rotate-0"
			/>
			<img
				src="/images/home/bomb.png"
				alt="grenade"
				className="absolute top-1/3 float-animation right-[18%] w-40 h-40 object-contain opacity-50 rotate-0"
			/>
			<img
				src="/images/home/rocket.png"
				alt="rocket"
				className="absolute bottom-1/3 float-animation left-[10%] w-50 h-50 object-contain opacity-50 rotate-0"
			/>

			<div className="relative z-10">
				<p className="text-lg text-gray-400">Playerhub</p>
				<h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2 uppercase">
					PAY LESS
				</h1>
				<h2 className="text-6xl md:text-8xl font-black tracking-tighter text-purple-400 uppercase">
					PLAY MORE
				</h2>
			</div>

			{/* Animated Game Cards Container */}
			<div className="absolute bottom-[-10%] left-0 w-full h-96">
				<div className="relative w-full h-full max-w-5xl mx-auto">
					{gameCards.map((card) => (
						<div
							key={card.title}
							className={`
                absolute bottom-0  left-1/2 w-48 md:w-64 h-72 md:h-96 rounded-4xl overflow-hidden shadow-2xl shadow-purple-900/30 group
                transform-gpu transition-all ease-in-out
                ${
					isAnimated
						? `${card.rotation} ${card.translateX} ${card.translateY} opacity-100 scale-100`
						: "rotate-0 -translate-x-1/2 translate-y-full opacity-0 scale-75"
				}
              `}
							style={{
								transitionDuration: "3000ms",
								transitionDelay: card.delay,
								zIndex: card.zIndex,
							}}
						>
							<img
								src={card.image}
								alt={card.title}
								className={`w-full h-full object-cover ${card.backgroundColor} group-hover:scale-110 transition-transform duration-500`}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
							<div className="absolute bottom-0 left-0 p-4 w-full">
								<h3 className="text-white text-lg md:text-xl font-bold">
									{card.title}
								</h3>
								<p className="text-gray-300 text-sm">
									{card.subtitle}
								</p>
							</div>
							<div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
								{medalIcon
								}
								<span>{card.rating}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

// Main Page Component
export default function GamingMarketplacePage() {
	// Mock Data for other sections (can be filled in later)
	const gameItems = [
		{
			id: 1,
			title: "League of legends",
			price: "250 USD",
			seller: "MIKE JACKSON",
			image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Game+Item+1",
			platform: "PC-Windows",
			delivery: "1-24 Hours",
			stock: 100,
		},
	];

	return (
		<div className="bg-[#10101a] font-sans">
			<Header />
			<main>
				<HeroSection />
				{/* The rest of the sections will be added here one by one */}
				<SpotlightText />
			</main>
		</div>
	);
}
