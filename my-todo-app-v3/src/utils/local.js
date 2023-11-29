let array_todos = [
    {
        id: 1,
        title: "Belajar React",
        description: "With supporting text below as a natural lead-in to additional content.",
        createdAt: "19/11/2023"
    },
    {
        id: 2,
        title: "Olahraga",
        description: "With supporting text below as a natural lead-in to additional content.",
        createdAt: "19/11/2023"
    },
    {
        id: 3,
        title: "Main Game",
        description: "With supporting text below as a natural lead-in to additional content.",
        createdAt: "19/11/2023"
    },
    {
        id: 4,
        title: "Istirahat",
        description: "With supporting text below as a natural lead-in to additional content.",
        createdAt: "19/11/2023"
    },
    {
        id: 5,
        title: "Mengaji",
        description: "With supporting text below as a natural lead-in to additional content.",
        createdAt: "19/11/2023"
    },
    {
        id: 6,
        title: "Kerjain Tugas",
        description: "With supporting text below as a natural lead-in to additional content.",
        createdAt: "19/11/2023"
    },

];

function addTodos(todo) {
    array_todos = [...array_todos, todo];
}

function getTodos() {
    return array_todos;
}

function deleteTodos(delete_index){
     array_todos = array_todos.filter((todo, index) => index !== delete_index);
}
 
export { getTodos, deleteTodos, addTodos};