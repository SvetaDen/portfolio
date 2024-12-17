import tic_tac_toy_screen from '../images/tic-tac-toe-screen.png';
import react_create_project_screen from '../images/react-create-project-screen.png';
import food_app_screen from '../images/food-app-screen.png';
import main_page_portfolio from '../images/main-page-portfolio.png'
import photo1 from '../images/carousel/desert_pic.jpg';
import photo2 from '../images/carousel/f1_pic.jpg';
import photo3 from '../images/carousel/me_and_my_husband_pic.jpg';
import photo4 from '../images/carousel/georgia_pic.jpg';
import photo5 from '../images/carousel/mount_pic1.jpg';
import photo6 from '../images/carousel/mount_pic2.jpg';
import photo7 from '../images/carousel/view_pic.jpg';
import photo9 from '../images/carousel/pita_pic.jpg';

export type TItemProject = {
    id: number
    image: string;
    title: string;
    description: string;
    year: number;
    role: string;
    demo?: string;
    link_git: string
}

export const dataProjects: TItemProject[] = [
    {
        id: 111,
        image: tic_tac_toy_screen,
        title: 'Interactive Tic-Tac-Toe Game',
        description: 'Independently designed and developed an interactive Tic-Tac-Toe game. This web application offers a simple yet elegant user interface with smooth transitions, ideal for quick gaming sessions between friends. Optimized for two players, the game ensures a fun and competitive experience directly in your web browser.',
        year: 2023,
        role: 'Front-end Developer',
        demo: 'https://tic-tac-toe-six-sage-34.vercel.app/',
        link_git: 'https://github.com/SvetaDen/tic-tac-toe'
    },
    {
        id: 112,
        image: react_create_project_screen,
        title: 'Project Manager Dashboard - Add New Projects Easily',
        description: 'Explore the simplicity and efficiency of managing your projects with our Project Manager Dashboard. This tool allows you to add new projects seamlessly, with fields for title, description, and due dates, ensuring everything is organized and accessible. Designed to enhance productivity for developers, this application features a sleek, intuitive interface that makes project management hassle-free',
        year: 2023,
        role: 'Front-end Developer',
        demo: 'https://practice-project-add-projects-list.vercel.app/',
        link_git: 'https://github.com/SvetaDen/practice-project-add-projects-list'
    },
    {
        id: 113,
        image: food_app_screen,
        title: 'React Food – Delicious Meals',
        description: 'The Food Order Application allows users to browse a menu, add items to their cart, and place orders. This React-based application showcases an interactive front end along with a backend that processes and stores orders in a JSON file.',
        year: 2023,
        role: 'Front-end Developer',
        link_git: 'https://github.com/SvetaDen/food-order-app'
    },
    {
        id: 114,
        image: main_page_portfolio,
        title: 'This website',
        description: 'Developed a personal portfolio website showcasing my skills and projects, built using TypeScript, React, CSS Modules, and React Slick for the photo gallery. The site is fully responsive and features a modern, clean design.',
        year: 2024,
        role: 'Front-end Developer',
        link_git: 'https://github.com/SvetaDen/portfolio'
    },

]

export type ImageItem = {
    src: string;
    alt: string
}
export type CarouselProps = {
    images: ImageItem[];
}

export const images: ImageItem[] = [
    {src:photo1, alt: 'desert_pic'},
    {src:photo2, alt: 'f1_pic'},
    {src:photo3, alt: 'me_and_my_husband_pic'},
    {src:photo4, alt: 'georgia_pic'},
    {src:photo5, alt: 'mount_pic1'},
    {src:photo6, alt: 'mount_pic2'},
    {src:photo7, alt: 'view_pic'},
    {src:photo9, alt: 'pita_pic'},
]