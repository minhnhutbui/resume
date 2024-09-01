'use client';
import Card from '@/components/Card';
import loadData from '@/utils/loadData';
import { cache, useEffect, useState } from 'react';

function Home() {
    const [skillItems, setSkillItems] = useState<Skills>([]);
    useEffect(() => {
        async function fetchData() {
            const skills: Skills = await loadData('http://localhost:3000/api/skills');
            setSkillItems(skills);
        }
        fetchData();
    }, []);
    return (
        <div className="xl:max-w-[1400px] 2xl:max-w-screen-2xl w-full h-full mx-auto grid grid-cols-3 gap-10">
            {skillItems.skills?.map((i) => (
                <Card key={i._id} title={i.name} description={i.description} />
            ))}
        </div>
    );
}
export default Home;
