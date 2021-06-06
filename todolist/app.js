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
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
  },
  watch: {
    notes: {
      handler() {
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true,
    },
  },
};
const app = Vue.createApp(App);

app.mount("#app");
