import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import DecorativeElements from '../components/DecorativeElements';
import PrimaryButton from '../components/PrimaryButton';
import Footer from '../components/Footer'; // Import the Footer component
import BlazeLogo from '../assets/blaze-logo.svg';
import '../index.css'; // Importing the CSS file

function Home() {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null); // Track the winner
  const [turn, setTurn] = useState('x'); // Track whose turn it is

  useEffect(() => {
    gsap.fromTo('.logo-animated', 
      { 
        scale: 0.5, 
        opacity: 0, 
        rotation: -360 
      }, 
      { 
        duration: 1.5, 
        scale: 1, 
        opacity: 1, 
        rotation: 0, 
        ease: 'elastic.out(1, 0.3)', 
        delay: 0.5 
      }
    );

    gsap.fromTo('.welcome-text', 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      }, 
      { 
        duration: 1.2, 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        ease: 'power3.out', 
        delay: 1 
      }
    );

    gsap.fromTo('.game-board', 
      { 
        opacity: 0, 
        scale: 0.5 
      }, 
      { 
        duration: 1.5, 
        opacity: 1, 
        scale: 1, 
        ease: 'back.out(1.5)', 
        delay: 1.5 
      }
    );

    gsap.fromTo('.features-list li', 
      { 
        opacity: 0, 
        y: 20, 
        scale: 0.9 
      }, 
      { 
        duration: 1, 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        ease: 'bounce.out', 
        stagger: 0.3, 
        delay: 2 
      }
    );

    gsap.fromTo('.button', 
      { 
        scale: 1, 
        backgroundColor: '#0074fc' 
      }, 
      { 
        scale: 1.1, 
        backgroundColor: '#005bb5', 
        duration: 0.6, 
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      }
    );
  }, []);

  // Define the winning combinations and check for a winner
  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // X or O
      }
    }
    return null;
  };

  useEffect(() => {
    // Simulate X and O moves
    const interval = setInterval(() => {
      setCells(prevCells => {
        const emptyIndices = prevCells.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
        if (emptyIndices.length === 0 || winner) return prevCells;

        const newCells = [...prevCells];
        const countX = newCells.filter(cell => cell === 'x').length;
        const countO = newCells.filter(cell => cell === 'o').length;

        const shouldPlaceX = countX <= countO;
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newCells[randomIndex] = shouldPlaceX ? 'x' : 'o';

        const currentWinner = checkWinner(newCells);
        setWinner(currentWinner);

        return newCells;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [winner]);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-[#1b1b32]">
      <div className="decorative-bg" />

      <div className="absolute top-4 left-4 z-10">
        <img
          src={BlazeLogo}
          alt="Blaze Logo"
          className="w-32 h-32 logo-animated"
        />
      </div>

      <div className="text-center relative z-10 mt-16">
        <h1 className="text-white font-bold mb-4 welcome-text">Welcome to Blaze</h1>
        <p className="text-white mb-6 welcome-text">The classic game, now even more fun!</p>
        <PrimaryButton href="/register" label="Get Started" className="button" />
      </div>

      <div className="relative mt-10">
        <div className="game-board">
          <div className="grid grid-cols-3 gap-1">
            {cells.map((cell, i) => (
              <div key={i} className={`game-cell ${cell}`}></div>
            ))}
          </div>
        </div>
      </div>

      {winner && (
        <div className="text-white text-center mt-6">
          <h2 className="text-lg font-bold">Winner: {winner.toUpperCase()}</h2>
        </div>
      )}

      <div className="mt-20 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-white">The Thrill Awaits</h2>
        <div className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center">
            <span className="text-3xl mr-3">🎉</span>
            <span className="text-lg text-white">Enjoy Classic Fun</span>
          </div>
          <div className="flex items-center">
            <span className="text-3xl mr-3">👥</span>
            <span className="text-lg text-white">Challenge Your Friends</span>
          </div>
          <div className="flex items-center">
            <span className="text-3xl mr-3">📈</span>
            <span className="text-lg text-white">Track Your Progress</span>
          </div>
        </div>
      </div>

      <DecorativeElements />

      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Home;
