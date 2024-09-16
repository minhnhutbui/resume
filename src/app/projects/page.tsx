'use client';
import Card from '@/components/Card';
import loadData from '@/utils/loadData';
import { useEffect, useState } from 'react';

function Project() {
    const [projectItems, setProjectItems] = useState<Projects>();
    useEffect(() => {
        async function fetchData() {
            const projects: Projects = await loadData('http://localhost:3000/api/projects');
            setProjectItems(projects);
        }
        fetchData();
    }, []);
    return (
        <div className="max-w-screen-xl w-full h-full mx-auto grid grid-cols-3 gap-10">
            {projectItems?.data?.map((i) => (
                <Card key={i._id} title={i.name} description={i.description} imgPath={i.img_path} />
            ))}
        </div>
    );
}
export default Project;
