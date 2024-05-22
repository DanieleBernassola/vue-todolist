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
    };
  },
  methods: {
    removeItem(index) {
      // Splice rimuove n elementi dall'array (senza l'1 avrebbe rimosso l'elemento più tutti i successivi)
      this.toDoList.splice(index, 1);
    },
  },
}).mount("#app");
