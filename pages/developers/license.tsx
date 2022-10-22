// Serverside
// Часть сервера
import { readFileSync } from "fs";

// Components
// Компоненты
import { Container, Text } from "@mantine/core";

// SCSS/SASS
import styles from "../../styles/modules/pages/developers/license.module.scss";

export default function License(props: any) {
    return (
        <Container id={styles.container}>
            <Text size="sm" color="dimmed" id={styles.license}>
                {props.license}
            </Text>
        </Container>
    )
}

export function getServerSideProps() {
    // props.license is a license text
    // readFileSync cannot be used inside non-serverside function
    // props.license - это текст лицензии
    // readFileSync не может быть использован внутри не-серверной функции
    return {
        props: {
            license: readFileSync('./LICENSE', 'utf-8')
        }
    }
}