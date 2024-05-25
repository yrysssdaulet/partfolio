import React from 'react'
import Title from '../layouts/Title'
import {projectOne, projectTwo, projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = ({repos,isChangeRepo}) => {
    console.log(repos)
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Мои проэкты"
                    des="Мои проэкты"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">


                <ProjectsCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src={projectTwo}
                />
                {repos.map((repo) => (
                    <ProjectsCard isChangeRepo={isChangeRepo}
                        key={repo.id}
                        title={repo.name}
                        des={repo.description}
                        src={projectOne}
                        link={repo.html_url}
                        topics={repo.topics}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects