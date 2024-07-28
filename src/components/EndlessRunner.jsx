import React, { useRef, useEffect, useState } from 'react';
import dogImage from '../assets/Max/dog.png';
import obstacle1 from '../assets/Max/meme1.png';
import obstacle2 from '../assets/Max/meme2.png';
import obstacle3 from '../assets/Max/meme3.png';
import obstacle4 from '../assets/Max/meme4.png';
import backgroundImage from '../assets/2580.jpg';
import powerUpImage from '../assets/pump.png';
import collisionSound from '../assets/100pts.wav';
import backgroundMusic from '../assets/Max/bgmusic.mp3';

const EndlessRunner = () => {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Load images
    const dogImg = new Image();
    dogImg.src = dogImage;
    const obstacleImgs = [obstacle1, obstacle2, obstacle3, obstacle4].map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });
    const bgImg = new Image();
    bgImg.src = backgroundImage;
    const powerUpImg = new Image();
    powerUpImg.src = powerUpImage;

    // Load sounds
    const collisionAudio = new Audio(collisionSound);
    const bgMusic = new Audio(backgroundMusic);
    bgMusic.loop = true;

    // Game variables
    let dogY = 300;
    let dogVelocity = 0;
    const gravity = 0.6;
    let jumpStrength = -15;
    let isJumping = false;
    let gameSpeed = 5;
    let powerUpActive = false;
    let powerUpTimer = 0;

    const obstacles = [];
    const powerUps = [];

    const obstacleTypes = [
      { width: 50, height: 50 },
      { width: 70, height: 70 },
      { width: 60, height: 80 },
      { width: 80, height: 60 }
    ];

    // Game loop
    const gameLoop = () => {
      // Clear canvas and draw background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

      // Update and draw dog
      dogVelocity += gravity;
      dogY += dogVelocity;
      if (dogY > 300) {
        dogY = 300;
        isJumping = false;
      }
      ctx.drawImage(dogImg, 50, dogY, 50, 50);

      // Update and draw obstacles
      obstacles.forEach((obstacle, index) => {
        obstacle.x -= gameSpeed;
        ctx.drawImage(obstacleImgs[obstacle.type], obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Check collision
        if (
          50 < obstacle.x + obstacle.width &&
          100 > obstacle.x &&
          dogY < obstacle.y + obstacle.height &&
          dogY + 50 > obstacle.y &&
          !powerUpActive
        ) {
          collisionAudio.play();
          setGameOver(true);
          if (score > highScore) {
            localStorage.setItem('highScore', score);
            setHighScore(score);
          }
        }

        // Remove off-screen obstacles
        if (obstacle.x + obstacle.width < 0) {
          obstacles.splice(index, 1);
          setScore(prevScore => {
            const newScore = prevScore + 1;
            if (newScore % 10 === 0) {
              gameSpeed += 0.5; // Increase difficulty
              jumpStrength -= 1; // Increase jump strength
            }
            return newScore;
          });
        }
      });

      // Spawn new obstacles
      if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < canvas.width - 300) {
        const obstacleType = Math.floor(Math.random() * obstacleTypes.length);
        obstacles.push({
          x: canvas.width,
          y: 350 - obstacleTypes[obstacleType].height,
          ...obstacleTypes[obstacleType],
          type: obstacleType
        });
      }

      // Update and draw power-ups
      powerUps.forEach((powerUp, index) => {
        powerUp.x -= gameSpeed;
        ctx.drawImage(powerUpImg, powerUp.x, powerUp.y, 30, 30);

        // Check collision with power-up
        if (
          50 < powerUp.x + 30 &&
          100 > powerUp.x &&
          dogY < powerUp.y + 30 &&
          dogY + 50 > powerUp.y
        ) {
          powerUps.splice(index, 1);
          powerUpActive = true;
          powerUpTimer = 300; // 5 seconds at 60 FPS
        }

        // Remove off-screen power-ups
        if (powerUp.x + 30 < 0) {
          powerUps.splice(index, 1);
        }
      });

      // Spawn new power-ups
      if (Math.random() < 0.001 && powerUps.length === 0) {
        powerUps.push({
          x: canvas.width,
          y: Math.random() * (canvas.height - 100) + 50
        });
      }

      // Update power-up timer
      if (powerUpActive) {
        powerUpTimer--;
        if (powerUpTimer <= 0) {
          powerUpActive = false;
        }
      }

      // Draw score
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${score}`, 10, 30);
      ctx.fillText(`High Score: ${highScore}`, 10, 60);

      // Continue game loop
      if (!gameOver && gameStarted) {
        animationFrameId = requestAnimationFrame(gameLoop);
      } else if (gameOver) {
        bgMusic.pause();
      }
    };

    // Start game loop and background music when game starts
    if (gameStarted) {
      gameLoop();
      bgMusic.play();
    }

    // Event listener for jumping
    const handleClick = () => {
      if (!isJumping && gameStarted && !gameOver) {
        dogVelocity = jumpStrength;
        isJumping = true;
      }
    };
    canvas.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('click', handleClick);
      bgMusic.pause();
      bgMusic.currentTime = 0; // Ensure the music resets to the beginning when restarting
    };
  }, [gameOver, highScore, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
  };

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setGameStarted(true); // Automatically restart the game
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-8xl font-bold font-Lon mb-4">Endless Runner</h2>
      <canvas ref={canvasRef} width={1000} height={400} className="border border-gray-300" />
      <p className="mt-4 text-xl">Score: {score}</p>
      {!gameStarted && !gameOver && (
        <button
          className="mt-4 px-6 py-3 bg-green-500 text-white rounded-full text-xl font-bold hover:bg-green-600"
          onClick={startGame}
        >
          Start Game
        </button>
      )}
      {gameOver && (
        <div className="mt-4">
          <p className="text-xl font-bold text-red-500">Game Over!</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default EndlessRunner;
