import Image from "next/image";
import Link from "next/link";
import { Container, Group, Text, Button, Divider } from "@mantine/core";
import { Prism } from '@mantine/prism';
import styles from "../../styles/modules/pages/projects/index.module.scss";
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
    let buttons: any = [];

    props.item.forEach((button: any) => {
        buttons.push((
            <ButtonGen item={button} key={button.content} />
        ));
    });

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
    let projects: any = [];

    indexConfig.projects.forEach(item => {
        projects.push((
            <ProjectGen item={item} key={item.name} />
        ));

        if (indexConfig.projects.indexOf(item) === indexConfig.projects.length - 1) return;

        projects.push((
            <Divider my="sm" mt={60} mb={60} />
        ))
    });


    return (
        <Container id={styles.land}>
            {projects}
        </Container>
    );
}

export default function Index() {
    return (
        <Projects />
    )
}