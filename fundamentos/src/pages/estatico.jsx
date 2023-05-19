import Layout from "../components/Layout";

export async function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export async function Estatico(props){
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}