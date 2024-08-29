// api.js
export const getAIMove = async (board) => {
    try {
      const response = await fetch('http://your-backend-api/ai-move', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ board }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.move; // Ensure this matches the response structure
    } catch (error) {
      console.error('Failed to fetch AI move:', error);
      return null; // Handle error by returning null or some fallback
    }
  };
  