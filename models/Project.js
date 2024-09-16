import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
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

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
