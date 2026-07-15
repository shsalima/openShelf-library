import mongoose, { Model, Schema } from "mongoose";


export interface IBook {
    title:String;
    author:string;
    isbn:string;
    category:string;
    publicationYear:number;
    description:string;
    available:boolean;
}


const BookSchema=new Schema<IBook>(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true
        },
        isbn:{
            type:String,
            required:true,
            unique:true
        },
        category:{
            type:String,
            required:true,

        },
        publicationYear:{
            type:Number,
            required:true,
        },
        
        description:{
            type:String,
            required:true,
        },
        available:{
            type:Boolean,
            default:true,
        },

    },
    {
        timestamps:true,
    }
)

const Book:Model<IBook>=
    mongoose.models.Book || mongoose.model<IBook>("Book",BookSchema)

export default Book
 