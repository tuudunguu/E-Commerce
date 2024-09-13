import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  await connect(
    'mongodb+srv://tuguldurbayr0309:Q7_3K!s2_St8AHY@cluster0.11axu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );

  console.log('Connected to database');
};
