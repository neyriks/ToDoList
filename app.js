const App = {
  data: () => ({
    title: "Ваши заметки",
    placeholder: "Введите вашу заметку",
    notes: [],
    inputValue: "",
  }),
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    },
    removeNote(i) {
      this.notes.splice(i, 1);
    },
  },
  mounted() {
    console.log("App mounted!");
    console.log(localStorage);
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
  },
  watch: {
    notes: {
      handler() {
        console.log("Notes changed!");
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true,
    },
  },
};
const app = Vue.createApp(App);

app.mount("#app");
