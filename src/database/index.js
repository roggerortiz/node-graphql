import mongoose from 'mongoose'

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('>> DB is connected!');
    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }
}