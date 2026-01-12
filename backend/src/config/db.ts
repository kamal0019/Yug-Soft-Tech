import mongoose from 'mongoose';

// Global cache for serverless environment to prevent multiple connections
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn) {
        console.log("Using cached MongoDB connection");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // Return errors immediately instead of timing out
        };

        console.log("Creating new MongoDB connection...");
        cached.promise = mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/schoolerp', opts).then((mongoose) => {
            console.log("MongoDB Connected Successfully");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error("MongoDB Connection Failed:", e);
        throw e;
    }

    return cached.conn;
};

export default connectDB;
