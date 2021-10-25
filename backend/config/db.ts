import mongooose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongooose.connect(process.env.MONGO_URI!);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    }catch (error){
        if(error instanceof Error)
            console.error(`error: ${error.message}`);
        process.exit(1);
    }
} 

export default connectDB;