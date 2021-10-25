import Board from "./board"
import { Container } from "./styled"
import BoardProvider from "./context/board";

function App() {
  return (

    <BoardProvider>
      <Container>
        <Board />
      </Container>
    </BoardProvider>

  );
}

export default App;
