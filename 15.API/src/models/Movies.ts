import { model, Schema } from 'mongoose';

const movieSchema = new Schema(
    {
        title:{type:String},
        rating:{ type:Number},
        description:{ type:String },
        stars:{type:Number},
        director:{type:String},
        poster:{type:String},

    },{
        timestamps:true
    }
);


export const MovieModel = model('Movie', movieSchema);
