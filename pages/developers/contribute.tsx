// Components
// Компоненты
import { Button, Card, Container, Group, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import Link from "next/link";

// SCSS/SASS
import styles from "../../styles/modules/pages/developers/contribute.module.scss";

// Configs
// Конфиги
import contributeConfig from "../../configs/pages/developers/contribute.json";

function AppCard() {
    return (
        <Card id={styles.card} p="lg" radius={0} withBorder>

            <Group position="apart" mb="xs">
                <Text weight={500}>{contributeConfig.card.title}</Text>
            </Group>

            <Text size="sm" color="dimmed">
                {contributeConfig.card.description}
            </Text>

            {contributeConfig.card.button.show ? (
                <Link href={contributeConfig.card.link} passHref>
                    <Button
                        component="a"
                        target="_blank"
                        rightIcon={<OpenInNewSharpIcon />}
                        variant="outline"
                        color={contributeConfig.card.button.color}
                        fullWidth
                        mt="md"
                        radius={0}
                    >
                        {contributeConfig.card.button.content}
                    </Button>
                </Link>
            ) : ""}
        </Card>
    )
}

function Title() {
    return (
        <Container id={styles.text}>
            <Text
                weight={900}
                color="white"
                size={22}
            >СТАНЬ ЧАСТЬЮ</Text>
            <Text
                weight={900}
                color="indigo"
                size={60}
            >КОМАНДЫ</Text>
            <Text
                weight={900}
                color="white"
                size={22}
            >СЕГОДНЯ!</Text>
        </Container>
    )
}

if (typeof window != 'undefined') {
    setTimeout(() => {
        showNotification({
            message: "Данная страница находится в разработке",
            color: "indigo",
            autoClose: true,
            radius: 0,
            style: {
                border: "1px solid #19191a"
            }
        });
    }, 3000);
}

export default function Contribute() {
    return (
        <>
            <Container id={styles.landingContainer}>
                <AppCard />
                <Title />
            </Container>
        </>
    )
}