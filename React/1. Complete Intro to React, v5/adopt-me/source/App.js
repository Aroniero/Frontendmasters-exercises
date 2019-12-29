const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "piesely" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Piesel1"
    }),
    React.createElement(Pet, {
      name: "Andrzej",
      animal: "Cat",
      breed: "cat1"
    }),
    React.createElement(Pet, {
      name: "Ania",
      animal: "Spider",
      breed: "Coconut"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
