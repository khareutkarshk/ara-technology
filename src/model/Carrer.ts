import mongoose, {Schema, Document} from "mongoose";

export interface Carrer extends Document {
    name: string;
    skills: string;
    email: string;
    phone: string;
    resume: string;
    createdAt: Date;
}

const CarrerSchema: Schema<Carrer> = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'] 
    },
    email: {
        type: String, 
        required: [true, 'Email is required'] 
    },
    skills: {
        type: String, 
        required: [true, 'Skills is required'] 
    },
    phone: {
        type: String, 
        required: [true, 'Phone is required'] 
    },
    resume: {
        type: String, 
        required: [true, 'Resume is required'] 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
   
})

export const CarrerModel = (mongoose.models.Carrer as mongoose.Model<Carrer>) || mongoose.model<Carrer>('Carrer', CarrerSchema)