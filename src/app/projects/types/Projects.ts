interface Project {
    _id: string;
    name: string;
    description: string;
    img_path: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Projects {
    data: Project[];
}
