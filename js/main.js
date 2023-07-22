
const app = Vue.createApp({
    data() {
        return {
            listTask: [
                {
                    id: "01",
                    text: "Brainstorming",
                    done: true,
                },
                {
                    id: "02",
                    text: "Creazione grafiche",
                    done: false,
                },
                {
                    id: "03",
                    text: "Architettura sito web",
                    done: false,
                },
                {
                    id: "04",
                    text: "Analizzare dati",
                    done: true,
                },
                {
                    id: "05",
                    text: "Inserire immagini",
                    done: true,
                }
            ],

            // Per incrementare automaticamente id
            idTask: "05",

            newTask: {
                id: "",
                text: "",
                done: false,
            },

            textUnderline:""
        };
    },
    methods: {
        addNewTask() {
            // Clono l'arrey per il problema reattività
            const newTaskClone = {...this.newTask, id: ++this.idTask}

            this.listTask.push(newTaskClone)
            console.log(newTaskClone)
        },

        removeItem(itemId){
            // passo come argomento id
            console.log(itemId)

            // Stesso meccanismo di fare un ciclo
            const deleteIndex = this.listTask.findIndex((singleTask) => singleTask.id === itemId)
            this.listTask.splice(deleteIndex,1)
        },

        lineTask(singleTask){
            if (singleTask.done === true) {
                singleTask.done = false
            }else{
                singleTask.done = true
            }
        },
    },
});

console.log(app);
app.mount("#app");
