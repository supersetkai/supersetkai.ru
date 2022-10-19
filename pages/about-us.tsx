import { Container, Table, Accordion, Text, Avatar, Divider } from "@mantine/core";
import Link from "next/link";

import styles from "../styles/modules/pages/about-us.module.scss";
import aboutUsConfig from "../configs/pages/about-us.json";

function Tables(props: any) {
    const tables = props.item.map((table: any) => (
        <tr key={table.row}>
            <td>{table.row}</td>
            <td>
                <Link href={table.link}>
                    <a>{table.value}</a>
                </Link>
            </td>
        </tr>
    ));

    return (
        <Table
            id={styles.table}
            withBorder
        >
            <tbody>{tables}</tbody>
        </Table>
    )
}

function FAQs(props: any) {
    return props.item.map((faq: any) => (
        <Accordion
            key={faq.name}
            variant="contained"
            radius={0}
            defaultValue="defaultAccordion"
        >
            <Accordion.Item value={faq.name}>
                <Accordion.Control>{faq.name}</Accordion.Control>
                <Accordion.Panel>{faq.content}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    ));
}

function Avatars(props: any) {
    let avatars: any = [];

    props.item.forEach((avatar: any) => {
        if (!avatar.show) return;

        avatars.push((
            <Avatar
                src={avatar.src}
                alt={avatar.alt}
                key={avatar.alt}
                size={48}
                radius="xl"
                variant="light"
                color="gray"
            />
        ));
    });

    return (
        <Container id={styles.avatars}>
            <Text
                weight={900}
                size="xl"
                id={styles.title}
            >
                Контрибуторы:
            </Text>
            <Avatar.Group spacing="sm">
                {avatars}
                {(props.item.length > avatars.length) ? (
                    <Avatar
                        size={48}
                        radius="xl"
                        color="gray"
                    >
                        +{props.item.length - avatars.length}
                    </Avatar>
                ) : ""}
            </Avatar.Group>
        </Container>
    );
}

export default function AboutUs() {
    return (
        <Container id={styles.container}>
            <Container id={styles.contributors} p={0}>
                <Avatars item={aboutUsConfig.avatars} />
            </Container>

            <Divider size={1} mt={48} mb={48} />

            <Container id={styles.faq}>
                <Text
                    weight={900}
                    size="xl"
                    mb="md"
                >
                    Контакты:
                </Text>
                <Tables item={aboutUsConfig.contacts} />
            </Container>

            <Divider size={1} mt={48} mb={48} />

            <Container id={styles.faq}>
                <Text
                    weight={900}
                    size="xl"
                    mb="md"
                >
                    Часто задаваемые вопросы:
                </Text>
                <FAQs item={aboutUsConfig.faqs} />
            </Container>
        </Container>
    )
}