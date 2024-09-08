import tic_tac_toy_screen from '../assests/images/tic-tac-toe-screen.png'
import react_create_project_screen from '../assests/images/react-create-project-screen.png'
import food_app_screen from '../assests/images/food-app-screen.png'

export type TItemProject = {
    id: number
    image: string;
    title: string;
    description: string;
    year: number;
    role: string;
    demo: string;
    link_git: string
}

export const dataProjects: TItemProject[] = [
    {
        id: 111,
        image: tic_tac_toy_screen,
        title: 'Interactive Tic-Tac-Toe Game',
        description: 'Independently designed and developed an interactive Tic-Tac-Toe game. This web application offers a simple yet elegant user interface with smooth transitions, ideal for quick gaming sessions between friends. Optimized for two players, the game ensures a fun and competitive experience directly in your web browser.',
        year: 2023,
        role:'Front-end Developer',
        demo: 'https://tic-tac-toe-six-sage-34.vercel.app/',
        link_git: 'https://github.com/SvetaDen/tic-tac-toe'
    },
    {
        id: 112,
        image: react_create_project_screen,
        title: 'Project Manager Dashboard - Add New Projects Easily',
        description: 'Explore the simplicity and efficiency of managing your projects with our Project Manager Dashboard. This tool allows you to add new projects seamlessly, with fields for title, description, and due dates, ensuring everything is organized and accessible. Designed to enhance productivity for developers, this application features a sleek, intuitive interface that makes project management hassle-free',
        year: 2023,
        role:'Front-end Developer',
        demo: 'https://practice-project-add-projects-list.vercel.app/',
        link_git: 'https://github.com/SvetaDen/practice-project-add-projects-list'
    },
    {
        id: 113,
        image: food_app_screen,
        title: 'React Food – Delicious Meals',
        description: 'The Food Order Application allows users to browse a menu, add items to their cart, and place orders. This React-based application showcases an interactive front end along with a backend that processes and stores orders in a JSON file.',
        year: 2023,
        role:'Front-end Developer',
        demo: '',
        link_git: 'https://github.com/SvetaDen/food-order-app'
    }
]