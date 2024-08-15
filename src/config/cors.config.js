import cors from 'cors';

const corsConfig = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200
};

export default cors(corsConfig) 