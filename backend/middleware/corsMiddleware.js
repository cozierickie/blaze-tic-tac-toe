import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust according to your needs
  credentials: true, // Enable this if your requests include credentials (e.g., cookies)
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
