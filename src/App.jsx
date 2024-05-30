import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Cricual", "Core"];

function genRamdomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRamdomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConsept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Consepts</h2>
          <ul>
            <CoreConsept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConsept
              {...CORE_CONCEPTS[1]}
            />
            <CoreConsept {...CORE_CONCEPTS[2]}
            />
            <CoreConsept
               {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
