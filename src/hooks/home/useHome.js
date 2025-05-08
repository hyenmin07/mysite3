import {useState, useMemo, useEffect} from 'react';
import stela from '../../assets/images/stela.jpg';
import pixel from '../../assets/images/pixel.jpg';
import honeyz from '../../assets/images/honeyz.png';
import sandbox from '../../assets/images/sandbox.jpg';
function useHome() {
    const allProjects = useMemo(() => [
        {
            id: 1,
            title: "Weather App",
            description: "React 기반 날씨 앱 프로젝트",
            image: stela,   
            category:"Web",
            link: "https://example.com/Weather-app"
        },
        {
            id: 2,
            title: "Todo List",
            description: "리엑트 상태콴리를 배운 TODO 리스트",
            image: pixel,
            category:"Web",
            link: "https://example.com/Weather-app"
        },
        {
            id: 3,
            title: "Portfolio site",
            description: "나의 작업을 보여주는 포트폴리오",
            image: honeyz,  
            category:"Web",
            link: "https://example.com/Weather-app"
        },
        {
            id: 4,
            title: "Moblie UI Design",
            description: "나의 작업을 보여주는 포트폴리오",
            image: sandbox,
            category:"Design",
            link: "https://example.com/Weather-app"
        }
    ], []);

    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(allProjects);
        }, 500);

        return () => clearTimeout(timer);
    }, [allProjects]);

    useEffect(() => {
        if(activeCategory === 'All') {
            setProjects(allProjects);
        } else {
            const filtered = allProjects.filter(projects => projects.category === activeCategory);
            setProjects(filtered);
        }
    }, [activeCategory, allProjects]);

        useEffect(() => {
            if(isDarkMode) {
                document.body.classList.add('dark-mode');
            }else {
                document.body.classList.remove('dark-mode');
            }
        }, [isDarkMode]);

        const handleCategoryChange = (category) => {
            setActiveCategory(category);
        };

        const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
        };

        return {
            projects,
            activeCategory,
            handleCategoryChange,
            isDarkMode,
            toggleDarkMode
        };
}

export default useHome;