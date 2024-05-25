import React, {useState} from 'react'
import {BsGithub} from "react-icons/bs";
import {FaGlobe} from "react-icons/fa";
import axios from "axios";
import ActionModal from "../ActionModal";

const ProjectsCard = ({title, des, src, link, topics, isChangeRepo}) => {

    const [newRepoName, setNewRepoName] = useState('');

    const [name, setName] = useState(title)
    const update = async () => {
        setName(newRepoName)
        // try {
        //     const response = await axios.patch(
        //         `https://api.github.com/users/repos/yrysssdaulet/${title}.git`,
        //         {
        //             name: 'NEW_REPO_NAME', // Замените на новое имя вашего репозитория
        //         },
        //         {
        //             headers: {
        //                 Authorization: `token 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`,
        //             },
        //         }
        //     );
        //     console.log('Обновление репозитория:', response.data);
        // } catch (error) {
        //     console.error('Ошибка при обновлении репозитория:', error);
        // }
    };

    return (<>
            <ActionModal name={newRepoName} func={update} setName={setNewRepoName} action={update} id={title}/>
            <div
                className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
                <div className="w-full h-[80%] overflow-hidden rounded-lg">
                    <img
                        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyhgi_Uy0cjEqKBddbc1FLrQLhqGx7cUfew&s"
                        alt="src"
                    />
                </div>
                <div className="w-full mt-5 flex flex-col  gap-6">
                    <div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base uppercase text-designColor font-normal">
                                {name}
                            </h3>
                            <div className="flex gap-2">
              <span
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">

               <a href={link} target="_blank" rel="noreferrer"
               > <BsGithub/></a>
              </span>
                                <span
                                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe/>
              </span>
                            </div>
                        </div>
                        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                            {des}
                        </p>
                        {topics && (
                            <div className="flex gap-2 mt-4">
                                {topics.map((topic, index) => (
                                    <span
                                        style={{color: index % 2 === 0 ? "yellow" : "darkgreen"}}
                                        key={index}
                                        className="text-xs bg-[#202327] text-gray-400 px-2 py-1 rounded-lg"
                                    >
                        {topic}
                    </span>
                                ))}
                            </div>
                        )
                        }
                        <div className="text-center">
                            <button type="button" className="updatebtn" data-toggle="modal"
                                    data-target={'#exampleModal' + title}>
                                Обнавить
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsCard