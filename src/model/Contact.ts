import mongoose, {Schema, Document} from "mongoose";

export interface Contact extends Document {
    name: string;
    location: string;
    email: string;
    phone: string;
    message: string;
}

const ContactSchema: Schema<Contact> = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'] 
    },
    email: {
        type: String, 
        required: [true, 'Email is required'] 
    },
    location: {
        type: String, 
        required: [true, 'Location is required'] 
    },
    phone: {
        type: String, 
        required: [true, 'Phone is required'] 
    },
    message: {
        type: String, 
        required: [true, 'Message is required'] 
    }
   
})

export const ContactModel = (mongoose.models.Contact as mongoose.Model<Contact>) || mongoose.model<Contact>('Contact', ContactSchema)