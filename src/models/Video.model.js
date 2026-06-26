import mongoose from 'mongoose';
import {schema} from 'mongoose';
const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    videofile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    ispublished: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);