// Components
// Компоненты
import { Badge, Button, Card, Container, Grid, Group, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import EastSharpIcon from '@mui/icons-material/EastSharp';
import Link from "next/link";
import Image from "next/future/image";

// SCSS/SASS
import styles from "../styles/modules/pages/index.module.scss";

// Configs
// Конфиги
import indexConfig from "../configs/pages/index.json";

// Logo
// Лого
import text from "../public/media/logo/superset-text.png";


// Notification:
// Requires checking typeof window
// in order not to get an error
// as next runs on both server side and client side
// Уведомление:
// Требует проверки typeof window
// для того, чтобы не получить ошибку
// так как next работает как на стороне сервера, так и на стороне клиента
if (typeof window != 'undefined') {
    setTimeout(() => showNotification({
        title: "Вебсайт в разработке",
        message: "Мы стараемся изо всех сил, будем благодарны за помощь!",
        color: "indigo",
        autoClose: true,
        radius: 0,
        style: {
            border: "1px solid #19191a"
        }
    }), 3000);
}

function ButtonGen(props: any) {
    const arrow: JSX.Element = props.item.arrow ? <EastSharpIcon /> : <></>;
    return (
        <Link href={props.item.link} passHref>
            <Button
                rightIcon={arrow}
                variant="outline"
                color={props.item.color}
                fullWidth={props.item.fullWidth}
                mt="md"
                radius={0}
            >
                {props.item.content}
            </Button>
        </Link>
    )
}

function CardGen(props: any) {
    return (
        <Card shadow="sm" p="lg" radius={0} withBorder className={styles.cards}>
            <Group position="apart" mt="xs" mb="xs">
                <Text weight={700}>{props.item.name}</Text>
                {props.item.badge.show ? (
                    <Badge color={props.item.badge.color} variant="outline" radius={0}>
                        {props.item.badge.content}
                    </Badge>
                ) : ''}
            </Group>
    
            <Text size="sm" color="dimmed">
                {props.item.content}
            </Text>
    
            {props.item.buttons ? (
                <Buttons item={props.item.buttons} />
            ) : ''}
        </Card>
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

function Cards() {
    const cards = indexConfig.cards.map(item => (
        <Grid.Col span={1} key={item.name} className={styles.gridCol}>
            <CardGen item={item}/>
        </Grid.Col>
    ));

    return (
        <Grid columns={3} className={styles.grid} grow>
            {cards}
        </Grid>
    );
}

export default function Home() {
    return (
        <Container id={styles.landingContainer} fluid>
            <Image
                src={text}
                alt="Text"
                sizes="512px"
                style={{
                    width: "512px",
                    height: "auto"
                }}
                width={512}
                height={512}
            />
            <Cards />
        </Container>
    );
}