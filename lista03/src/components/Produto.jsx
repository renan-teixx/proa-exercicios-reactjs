function Produto(props) {
    return (
        <>
            <p>Nome do produto: {props.nome}</p>
            <p>Preço do produto: R${props.preco}</p>
        </>
    );
}

export default Produto;