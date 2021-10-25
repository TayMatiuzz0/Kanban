import { Container, Sub, Module, Header } from "./styled"
import Box from "./components/Box"
import Title from "./components/Title"
import Card from "./components/Card"
import Add from "./components/Button";
import { useBoard } from "../context/board";


function Kanban() {

    const { boardData } = useBoard()




    return (
        <Container className="container">

            <Header>
                <Sub>Kanban do projeto</Sub>
            </Header>

            <Module className="d-flex justify-content-around module-content">
                <Module>
                    {
                        boardData.map((board, i) => (

                            <Box backgroundColor={board.color}>
                                <Title label={board.name} />

                                {
                                    board.cards.map((card, j) => (
                                        <Card subtitle={card.name} tagColor={board.color} board={i} card={j} />
                                    ))
                                }

                                <Add board={i} label={"Adicionar outro cartão"} labelBotao={"Adicionar"} color={"#FFFFFF"} isBoard={false} placeholder={"Insira o nome do cartão"} />
                            </Box>

                        ))

                    }
                </Module>

                <Module>
                    <Box backgroundColor={"#cbd1d5"}>
                        <Add label={"Adicionar outra lista"} labelBotao={"Adicionar"} color={"#212529"} isBoard={true} placeholder={"Insira o nome da lista"} />
                    </Box>
                </Module>


            </Module>


        </Container>
    );
}

export default Kanban;