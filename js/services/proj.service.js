

var gProjects = [
    {
        id: 'ergogami',
        name: 'Ergogami',
        title: 'Custom fully wireless split keyboard',
        desc: '"Regular" keyboard layout is the same since the original mechanical type writer. I tried to make a keyboard with minimal fingers movement and improved ergonomics without compromise keys behavior. the layout is fully programmable with easy to use config, PCB design with future proof in mind - hot-swappable switches, easy to swap rechargable battery. you want to get one? click "View Project"!',
        url: 'https://github.com/or-agami/Ergogami',
        publishedAt: 'Jule 2022',
        category: 'Hardware',
        labels: ['Electronics', 'Keyboard']
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Minesweeper game with extra features',
        desc: 'Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.',
        url: 'https://or-agami.github.io/Minesweeper-CA/',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
    {
        id: 'guess-me',
        name: 'Guess Me',
        title: 'Self-learning guess game',
        desc: 'Basic self-learning logic of "guess me" game',
        url: 'https://or-agami.github.io/guess-me-ca/',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Game']
    },
    {
        id: 'in-picture',
        name: 'In Picture',
        title: 'What is in the Picture?',
        desc: 'Test your knowledge on games, can you recognize them all?',
        url: 'https://or-agami.github.io/in-picture-ca/',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Game']
    },
    {
        id: 'touch-nums',
        name: 'Touch Nums',
        title: 'Try your best to press the nums by order',
        desc: 'You have to touch numbers quickly. The best score is the least time to touch all numbers in order.',
        url: 'https://or-agami.github.io/touch-nums-ca/',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
    {
        id: 'todos',
        name: 'Todos',
        title: 'Get organized with the things you need to do',
        desc: 'Simple yet efficient todo list',
        url: 'https://or-agami.github.io/todos-ca/',
        publishedAt: 'Jule 2022',
        category: 'Tool',
        labels: ['Organize', 'Productivity tool']
    },
    {
        id: 'safe-content',
        name: 'Safe Content',
        title: 'Safe content with admin page',
        desc: 'Proof of concept login page with personal content and admin managment page',
        url: 'https://or-agami.github.io/safe-content-ca/',
        publishedAt: 'Jule 2022',
        category: 'Tool',
        labels: ['Organize', 'Productivity']
    },
    {
        id: 'book-shop',
        name: 'Book Shop',
        title: 'Admin management page of book store',
        desc: 'Management of books for book store owner',
        url: 'https://or-agami.github.io/book-shop-ca/',
        publishedAt: 'Jule 2022',
        category: 'Store',
        labels: ['Management', 'Store', 'Admin']
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Simple Pacman game',
        desc: 'Extremely simple Pac-Man game. The objective of the game is to eat all of the dots placed in the maze while avoiding colored ghosts',
        url: 'https://or-agami.github.io/pacman-ca/',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
]


function getProjectsForDisplay() {
    return gProjects
}

function getProjectById(projId) {
    console.log('projId:', projId);
    const proj = gProjects.find(proj => proj.id === projId)
    console.log('proj:', proj);
    return proj
}