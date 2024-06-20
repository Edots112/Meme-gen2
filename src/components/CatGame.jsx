import React, { useEffect, useRef, useState } from "react";
import catImage from "../assets/Villy/olliy.png";
import objectImage1 from "../assets/object1.png";
import objectImage2 from "../assets/object2.jpg";
import objectImage3 from "../assets/object3.jpg";
import backgroundImage from "../assets/background.png";
import backgroundMusic from "../assets/background.mp3";
import gameOverSound from "../assets/gameover.wav";

const CatGame = () => {
	const canvasRef = useRef(null);
	const [catX, setCatX] = useState(375);
	const catWidth = 100;
	const catHeight = 100;
	const [fallingObjects, setFallingObjects] = useState([]);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const objectWidth = 50;
	const objectHeight = 50;
	const [objectSpeed, setObjectSpeed] = useState(10);
	const [creationInterval, setCreationInterval] = useState(400);
	const catImg = useRef(null);
	const objectImgs = useRef([]);
	const backgroundImg = useRef(null);
	const [gameRunning, setGameRunning] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const lastObjectCreation = useRef(Date.now());
	const [imagesLoaded, setImagesLoaded] = useState(false);

	console.log(creationInterval);

	const backgroundAudio = useRef(new Audio(backgroundMusic));
	const gameOverAudio = useRef(new Audio(gameOverSound));

	const playSound = (audioRef) => {
		const audio = audioRef.current;
		audio.currentTime = 0;
		audio.play().catch((error) => console.error("Failed to play audio:", error));
	};

	useEffect(() => {
		const loadImages = () => {
			const catImageObj = new Image();
			catImageObj.src = catImage;
			catImg.current = catImageObj;

			const bgImageObj = new Image();
			bgImageObj.src = backgroundImage;
			backgroundImg.current = bgImageObj;

			const objImgs = [objectImage1, objectImage2, objectImage3].map((src) => {
				const img = new Image();
				img.src = src;
				return img;
			});
			objectImgs.current = objImgs;

			let imagesToLoad = objImgs.length + 2;

			const onLoad = () => {
				imagesToLoad -= 1;
				if (imagesToLoad === 0) {
					setImagesLoaded(true);
				}
			};

			catImageObj.onload = onLoad;
			catImageObj.onerror = (error) => {
				console.error("Failed to load cat image:", error);
			};

			bgImageObj.onload = onLoad;
			bgImageObj.onerror = (error) => {
				console.error("Failed to load background image:", error);
			};

			objImgs.forEach((img, index) => {
				img.onload = onLoad;
				img.onerror = (error) => {
					console.error(`Failed to load object image ${index + 1}:`, error);
				};
			});
		};

		loadImages();
	}, []);

	const createFallingObject = () => {
		const canvas = canvasRef.current;
		const imgIndex = Math.floor(Math.random() * objectImgs.current.length);
		const isFast = Math.random() < 0.2;
		const speed = isFast ? objectSpeed * 1.5 : objectSpeed;
		const newObject = {
			x: Math.random() * (canvas.width - objectWidth),
			y: -objectHeight,
			img: objectImgs.current[imgIndex],
			speed: speed,
		};
		console.log("Creating new falling object", newObject);
		setFallingObjects((prevObjects) => {
			const updatedObjects = [...prevObjects, newObject];
			console.log("Updated fallingObjects:", updatedObjects);
			return updatedObjects;
		});
	};

	const moveFallingObjects = () => {
		const canvas = canvasRef.current;
		setFallingObjects((prevObjects) => {
			const movedObjects = prevObjects.map((obj) => ({
				...obj,
				y: obj.y + obj.speed,
			}));

			const objectsBeyondBottom = movedObjects.filter((obj) => obj.y >= canvas.height);
			setScore((prevScore) => {
				const newScore = prevScore + objectsBeyondBottom.length;

				if (newScore > score && newScore % 50 === 0) {
					setCreationInterval((prevInterval) => Math.max(100, prevInterval - 50));
					// playSound(new Audio(pointSounds[Math.floor(Math.random() * pointSounds.length)])); // Spela ett poängljud
				}

				return newScore;
			});

			const filteredObjects = movedObjects.filter((obj) => obj.y < canvas.height);
			console.log("Moved fallingObjects:", filteredObjects);
			return filteredObjects;
		});
	};

	const detectCollision = (catRect, objRect) => {
		return !(catRect.right < objRect.left || catRect.left > objRect.right || catRect.bottom < objRect.top || catRect.top > objRect.bottom);
	};

	const render = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		context.clearRect(0, 0, canvas.width, canvas.height);

		context.drawImage(backgroundImg.current, 0, 0, canvas.width, canvas.height);

		if (!gameRunning && !gameOver) {
			context.font = "30px Spark";
			context.fillStyle = "black";
			context.textAlign = "center";
			context.fillText("Press the mouse to start the game", canvas.width / 2, canvas.height / 2);
		}

		if (gameOver) {
			context.font = "30px Spark";
			context.fillStyle = "black";
			context.textAlign = "center";
			context.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 40);
			context.fillText("Score: " + score, canvas.width / 2, canvas.height / 2);
			context.fillText("Click to play again", canvas.width / 2, canvas.height / 2 + 40);
		}

		if (gameRunning) {
			context.drawImage(catImg.current, catX, canvas.height - catHeight, catWidth, catHeight);
			console.log("Drawing cat at", catX, canvas.height - catHeight);

			const catRect = {
				left: catX + 20,
				top: canvas.height - catHeight + 20,
				right: catX + catWidth - 20,
				bottom: canvas.height - 20,
			};

			for (let obj of fallingObjects) {
				context.drawImage(obj.img, obj.x, obj.y, objectWidth, objectHeight);

				const objRect = {
					left: obj.x,
					top: obj.y,
					right: obj.x + objectWidth,
					bottom: obj.y + objectHeight,
				};

				if (detectCollision(catRect, objRect)) {
					backgroundAudio.current.pause();
					playSound(gameOverAudio);
					setGameRunning(false);
					setGameOver(true);
					setFallingObjects([]);

					setHighScore((prevHighScore) => Math.max(prevHighScore, score));
					return;
				}
			}

			// Rita poängen
			context.font = "20px Spark";
			context.fillStyle = "black";
			context.textAlign = "left";
			context.fillText("Score: " + score, 10, 20);

			// Rita high score
			context.fillText("High Score: " + highScore, canvas.width - 150, 20);
		}
	};

	useEffect(() => {
		const gameLoop = () => {
			if (!gameRunning) return;
			console.log("Game loop running");
			const now = Date.now();
			if (now - lastObjectCreation.current > creationInterval) {
				createFallingObject();
				lastObjectCreation.current = now;

				setObjectSpeed((prevSpeed) => prevSpeed + 0.1);
			}

			moveFallingObjects();
			render();
			animationFrameId = requestAnimationFrame(gameLoop);
		};

		let animationFrameId;
		if (gameRunning) {
			console.log("Game started");
			animationFrameId = requestAnimationFrame(gameLoop);
		} else {
			render(); // Rita om canvas om spelet inte körs
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [catX, fallingObjects, gameRunning, score, objectSpeed, gameOver, creationInterval]);

	const handleMouseMove = (e) => {
		const canvas = canvasRef.current;
		const rect = canvas.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		let newCatX = mouseX - catWidth / 2;

		// Begränsa kattens position inom canvasen
		if (newCatX < 0) {
			newCatX = 0;
		} else if (newCatX + catWidth > canvas.width) {
			newCatX = canvas.width - catWidth;
		}

		setCatX(newCatX);
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const handleCanvasClick = () => {
		if (!gameRunning && imagesLoaded) {
			setScore(0);
			setGameOver(false);
			setGameRunning(true);
			setObjectSpeed(10);
			setCreationInterval(400);
			playSound(backgroundAudio);
		}
	};

	return (
		<div className="flex flex-col items-center p-10  bg-black" id="game">
			<h1 className="text-4xl font-bold mb-4 font-Spark">Archie Survival</h1>
			<p className="mb-4 text-4xl font-Emo w-[50%] text-center">
				Help <span className="text-yellow-500 font-bold ">Archie</span> survive all obstecals along his way
			</p>
			<canvas ref={canvasRef} width={1000} height={500} className="border border-white mb-4" onClick={handleCanvasClick} />
		</div>
	);
};

export default CatGame;