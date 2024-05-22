const { createApp } = Vue;

createApp({
  data() {
    return {
      // Creo lista di oggetti
      toDoList: [
        {
          text: "lavare i piatti",
          done: true,
        },
        {
          text: "fare la spesa",
          done: false,
        },
        {
          text: "stirare i panni",
          done: false,
        },
        {
          text: "mangiare il gelato",
          done: true,
        },
        {
          text: "recuperare serie mai finita",
          done: false,
        },
      ],
      // Stringa in cui verrà salvato il valore dell'input
      newToDo: "",
    };
  },
  methods: {
    removeItem(index) {
      // Splice rimuove n elementi dall'array (senza l'1 avrebbe rimosso l'elemento più tutti i successivi)
      this.toDoList.splice(index, 1);
    },
    addItem() {
      // Se la stringa non è vuota aggiungo l'input nell'array, lo metto a false e reinizializzo l'input a vuoto
      if (this.newToDo !== "") {
        this.toDoList.push({ text: this.newToDo, done: false });
        this.newToDo = "";
      }
    },
  },
}).mount("#app");
