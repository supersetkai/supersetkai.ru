// Components
// Компоненты
import { Button, Container, Divider, Group, Text } from "@mantine/core";
import { Prism } from '@mantine/prism';
import Image from "next/image";
import Link from "next/link";

// SCSS/SASS
import styles from "../../styles/modules/pages/projects/index.module.scss";

// Configs
// Конфиги
import indexConfig from "../../configs/pages/projects/index.json";

function ButtonGen(props: any) {
    return (
        <Link href={props.item.link} passHref>
            <Button variant="outline" color={props.item.color} mt="md" radius={0}>
                {props.item.content}
            </Button>
        </Link>
    )
}

function Buttons(props: any) {
    const buttons = props.item.map((button: any) => (
        <ButtonGen item={button} key={button.content} />
    ));

    return (
        <Button.Group>
            {buttons}
        </Button.Group>
    );
}

function ProjectGen(props: any) {
    const ProjectSide = (
        <Container className={styles.card}>
            <Group mt={0} mb="md">
                <Text size="xl" weight={900}>
                    {props.item.name}
                </Text>
            </Group>

            <Text mt="md" mb="md" color="dimmed">
                {props.item.content}
            </Text>

            <Buttons item={props.item.buttons} />
        </Container>
    );

    const ShowCaseSide = (
        <Container className={styles.showCase}>
            {/* Checking all types: code/image */}
            {/* Проверка всех типов: код/изображение */}
            {props.item.showCase.type === "code" ? (
                <Prism
                    language={props.item.showCase.code.language}
                    radius={0}
                    noCopy
                    withLineNumbers
                >{props.item.showCase.code.content}</Prism>
            ) : ""}
            {props.item.showCase.type === "image" ? (
                <Image
                    src={props.item.showCase.image.source}
                    width={props.item.showCase.image.width}
                    height={props.item.showCase.image.height}
                    alt={props.item.showCase.image.alt}
                    objectFit="contain"
                />
            ) : ""}
        </Container>
    );

    // A lot easier to read in my opinion
    // Намного легче в прочтении по-моему мнению
    if (indexConfig.projects.indexOf(props.item) % 2 == 1) {
        return (
            <Container className={styles.projects}>
                {ShowCaseSide}
                {ProjectSide}
            </Container>
        )
    } else {
        return (
            <Container className={styles.projects}>
                {ProjectSide}
                {ShowCaseSide}
            </Container>
        )
    }
}

function Projects() {

    const projects = indexConfig.projects.map(item => (
        <>
            <ProjectGen item={item} key={item.name} />
            {(indexConfig.projects.indexOf(item) !== indexConfig.projects.length - 1) ? (
                <Divider my={1} mt={60} mb={60} />
            ) : ""}
        </>
    ));


    return (
        <Container id={styles.land}>
            {projects}
        </Container>
    );
}

export default function Index() {
    return <Projects />
}