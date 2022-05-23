const App = {
  data: () => ({
    title: "Ваши заметки",
    placeholder: "Введите вашу заметку",
    notes: [],
    inputValue: "",
    checkedNotes: []
  }),
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      if(item != null) {
        return item.charAt(0).toUpperCase() + item.slice(1);
      }
    },
    removeNote(i, note) {
      this.notes.splice(i, 1);

      this.checkedNotes = this.checkedNotes.filter(function(f) { return f !== note })
    },

    clearNotes() {
      this.notes = []
      this.checkedNotes = []
      localStorage.clear()
    }

  },
  mounted() {
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
    if(localStorage.getItem("checkedNotes"))
      this.checkedNotes = JSON.parse(localStorage.getItem("checkedNotes"))
  },
  watch: {
    checkedNotes: {
      handler() {
        localStorage.setItem("checkedNotes", JSON.stringify(this.checkedNotes))
      },
      deep: true
    },
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
