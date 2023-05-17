import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (

        <Layout >
            <div className={styles.roxo}>
                <h1>Estiloso usando CSS Módulos 3</h1>
            </div>
        </Layout>
    )
}