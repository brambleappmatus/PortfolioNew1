'use client';

export default function Pay() {
  const handlePayClick = () => {
    // Force open in browser window
    window.open('https://revolut.me/attymatty', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md w-full text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Do you owe me money? 🤔</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          That's too bad... No worries though! Use the button below to pay me with Apple or Google Pay, 
          or a card if you're old fashioned 😉
        </p>
        <button 
          className="px-8 py-3 text-lg font-normal text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-lg transition-colors duration-200 shadow-lg"
          onClick={handlePayClick}
        >
          PayMe
        </button>
      </div>
    </div>
  );
}