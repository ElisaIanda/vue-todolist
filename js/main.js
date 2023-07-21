
const app = Vue.createApp({
    data() {
        return {
            listTask: [
                {
                    id: "01",
                    text: "Brainstorming",
                    done: "true",
                },
                {
                    id: "02",
                    text: "Creazione grafiche",
                    done: "false",
                },
                {
                    id: "03",
                    text: "Architettura sito web",
                    done: "false",
                },
                {
                    id: "04",
                    text: "Analizzare dati",
                    done: "true",
                },
                {
                    id: "05",
                    text: "Inserire immagini",
                    done: "true",
                }
            ],

            newTask: {
                id: "",
                text: "",
                done: "",
            },
        };
    },
    methods: {
        addNewTask() {
            // Clono l'arrey per il problema reattività
            const newTaskClone = {...this.newTask}

            this.listTask.push(newTaskClone)
            console.log(newTaskClone)
        }
    },
});

console.log(app);
app.mount("#app");
