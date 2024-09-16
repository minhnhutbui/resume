'use client';
import Card from '@/components/Card';
import loadData from '@/utils/loadData';
import { useEffect, useState } from 'react';

function Skill() {
    const [skillItems, setSkillItems] = useState<Skills>();
    useEffect(() => {
        async function fetchData() {
            const skills: Skills = await loadData('http://localhost:3000/api/skills');
            setSkillItems(skills);
        }
        fetchData();
    }, []);
    return (
        <div className="max-w-screen-xl w-full h-full mx-auto grid grid-cols-3 gap-10">
            {skillItems?.data?.map((i) => (
                <Card key={i._id} title={i.name} description={i.description} imgPath={i.img_path} />
            ))}
        </div>
    );
}
export default Skill;
