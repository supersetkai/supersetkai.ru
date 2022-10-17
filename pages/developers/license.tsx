import { readFileSync } from "fs";
import { Text, Container } from "@mantine/core";

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
    return {
        props: {
            license: readFileSync('./LICENSE', 'utf-8')
        }
    }
}