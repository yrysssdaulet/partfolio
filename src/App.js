import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
// import { GitHubOAuthProvider, useGitHubOAuth } from 'react-oauth/github';
import axios from 'axios';

const clientId = 'YOUR_CLIENT_ID'; // Замените на ваш Client ID из настроек OAuth на GitHub

function App() {

    const [githubData, setGithubData] = React.useState(null);
    const [repos, setRepos] = React.useState([]);
    const [logo, setLogo] = React.useState(null);
    const [isChangeRepo, setIsChangeRepo] = React.useState(false);

    const fetchData = () => {
        return fetch(`https://api.github.com/users/yrysssdaulet`, {
            headers: {
                Authorization: `token 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`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setGithubData(data);
                setLogo(data.avatar_url);
            });
    }
    const fetchRepos = () => {
        return fetch(`https://api.github.com/users/yrysssdaulet/repos`, {
            headers: {
                Authorization: `token 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`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRepos(data);
            });
    }
    React.useEffect(() => {
        fetchData();
        fetchRepos();
    }, [isChangeRepo]);
    return (
        <div className="w-full h-auto bg-bodyColor text-lightText px-4">
            <Navbar logo={githubData?.avatar_url}/>
            <div className="max-w-screen-xl mx-auto">
                <Banner gitUser={githubData}/>
                <Features/>
                <Projects repos={repos} isChangeRepo={isChangeRepo}/>
                <Resume/>
                <Contact img={logo}/>
                {/*<Footer/>*/}
                <FooterBottom/>
            </div>
        </div>
    );
}

export default App;
