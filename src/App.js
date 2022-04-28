import "./App.css";
import "antd/dist/antd.min.css";
import Cards from "./components/Cards/Cards";

function App() {
  let dataItems = [
    {
      id: 1,
      title: "Nikon D5600",
      imageUrl:
        "https://images.1a.ee/display/aikido/store/96f0bbab2472f356c494578b9d907952.jpg?h=742&w=816",
      price: "1 199,00 €",
      description:
        "Зеркальный фотоаппарат Nikon D5600 + AF-P DX NIKKOR 18-55mm VR + AF-P DX NIKKOR 70-300mm VR",
    },
    {
      id: 2,
      title: "Nikon D7500",
      imageUrl:
        "https://images.1a.ee/display/aikido/store/0507c501cec23a5f40457e9eea13c13b.jpg?h=270&op=fit&w=374",
      price: "1 444,00 €",
      description:
        "Зеркальный фотоаппарат Nikon D7500 + AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR",
    },
    {
      id: 3,
      title: "Canon EOS 90D",
      imageUrl:
        "https://images.1a.ee/display/aikido/store/5b5aaa30805b0a2e83629d94583e3d35.jpg?h=270&op=fit&w=374",
      price: "1 316,00 €",
      description: "Зеркальный фотоаппарат Canon EOS 90D Body",
    },
    {
      id: 4,
      title: "Nikon D5600",
      imageUrl:
        "https://images.1a.ee/display/aikido/store/0c6e9f4add5dd8ef57a5cf92f8e84e07.jpg?h=270&op=fit&w=374",
      price: "948,00 €",
      description: "Зеркальный фотоаппарат Nikon D5600 AF-P DX 18-55mm VR",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Cards dataItems={dataItems} />
      </header>
    </div>
  );
}

export default App;
