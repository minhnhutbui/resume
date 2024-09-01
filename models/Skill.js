import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img_path: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema);
