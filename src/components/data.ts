import image from '../assests/images/work.png'

export type TItemProject = {
    id: number
    image: string;
    title: string;
    description: string;
    year: number
    role: string
}

export const dataProjects: TItemProject[] = [
    {
        id: 345,
        image: image,
        title: 'Promotional landing page for our favorite show',
        description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
        year: 2023,
        role:'Front-end Developer'
    },
    {
        id: 344,
        image: image,
        title: 'Promotional landing page for our favorite show',
        description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
        year: 2023,
        role:'Front-end Developer'
    },
    {
        id: 343,
        image: image,
        title: 'Promotional landing page for our favorite show',
        description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
        year: 2023,
        role:'Front-end Developer'
    }
]