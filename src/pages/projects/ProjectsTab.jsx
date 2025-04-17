import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsTab = ({items}) => {
    return (
        <div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[390px] md:max-w-[700px] lg:max-w-[1320px] mx-auto'>
                {
                    items.map(item => <ProjectCard key={item._id} item={item}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default ProjectsTab;