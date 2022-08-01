

var gProjects = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Minesweeper game with extra features',
        desc: 'Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.',
        url: 'https://github.com/or-agami/Minesweeper-CA/blob/main/index.html',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
    {
        id: 'in-picture',
        name: 'In Picture',
        title: 'What is in the Picture?',
        desc: 'description here',
        url: 'https://github.com/or-agami/in-picture-ca',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Game']
    },
    {
        id: 'touch-nums',
        name: 'Touch Nums',
        title: 'Try your best to press the nums by order',
        desc: 'You have to touch numbers quickly. The best score is the least time to touch all numbers in order.',
        url: 'https://github.com/or-agami/touch-nums-ca',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
    {
        id: 'ball-board',
        name: 'Ball Board',
        title: 'Simple arcade game',
        desc: 'Ball board is an video game. Balls are generated every few seconds, to win collect all the balls.',
        url: 'https://github.com/or-agami/ball-board-ca',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
    {
        id: 'todos',
        name: 'Todos',
        title: 'Get organized with the things you need to do',
        desc: 'description here',
        url: 'https://github.com/or-agami/todos-ca',
        publishedAt: 'Jule 2022',
        category: 'Tool',
        labels: ['Organize', 'Productivity tool']
    },
    {
        id: 'safe-content',
        name: 'Safe Content',
        title: 'Proof of concept login page with personal content',
        desc: 'description here',
        url: 'https://github.com/or-agami/safe-content-ca',
        publishedAt: 'Jule 2022',
        category: 'Tool',
        labels: ['Organize', 'Productivity']
    },
    {
        id: 'book-shop',
        name: 'Book Shop',
        title: 'Admin management page of book store',
        desc: 'description here',
        url: 'https://github.com/or-agami/book-shop-ca',
        publishedAt: 'Jule 2022',
        category: 'Store',
        labels: ['Management', 'Store', 'Admin']
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Simple Pacman game',
        desc: 'Pac-Man is an action maze chase video game. the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding colored ghosts',
        url: 'https://github.com/or-agami/pacman-ca',
        publishedAt: 'Jule 2022',
        category: 'Game',
        labels: ['Matrixes', 'Game']
    },
]


function getProjectsForDisplay() {
    return gProjects
}

function getProjectForDisplay(projId) {
    console.log('projId:', projId);
    const proj = gProjects.find(proj => proj.id === projId)
    console.log('proj:', proj);
    return proj
}