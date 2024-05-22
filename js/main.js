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
}).mount("#app");
