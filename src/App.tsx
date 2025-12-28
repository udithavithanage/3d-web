import "./App.css";
import CharacterModel from "./components/Character";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <main className="main-body">
      <MainContainer>
        <CharacterModel />
      </MainContainer>
    </main>
  );
};

export default App;
