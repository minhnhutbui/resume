interface Skill {
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Skills {
    skills: Skill[];
}
