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
        <div className="grid grid-cols-3 gap-10">
            {projectItems?.data?.map((i) => (
                <a className="grid" key={i._id} href={i.uri} target="_blank">
                    <Card title={i.name} description={i.description} imgPath={i.img_path} />
                </a>
            ))}
        </div>
    );
}
export default Project;
