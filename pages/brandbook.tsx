// Components
// Компоненты
import { Container, Divider, Grid, Image, Menu, Text } from "@mantine/core";
import Link from "next/link";

// SCSS/SASS
import styles from "../styles/modules/pages/brandbook.module.scss";

// Configs
// Конфиги
import brandbookConfig from "../configs/pages/brandbook.json";

export default function Brandbook() {
    const images = brandbookConfig.map((item: any) => (
        <Grid.Col key={item.alt} span={item.span}>
            <Menu shadow="md" width={200} radius={0} key={item.alt}>
                <Menu.Target>
                    <Image src={item.src.png} alt={item.alt} caption={item.alt} />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Формат</Menu.Label>
                    <Link href={item.src.psd} passHref><Menu.Item>.PSD</Menu.Item></Link>
                    <Link href={item.src.kra} passHref><Menu.Item>.KRA</Menu.Item></Link>
                    <Link href={item.src.png} passHref><Menu.Item>.PNG</Menu.Item></Link>

                    <Menu.Divider />

                    <Menu.Item>Закрыть</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Grid.Col>
    ));

    return (
        <Container id={styles.landingContainer} fluid={true}>
            <Text weight={900} size={48}>Брендбук</Text>
            <Divider size={1} mt={48} mb={48} style={{width: "100%"}} />
            <Grid className={styles.grid} columns={11} gutter={0}>
                {images}
            </Grid>
        </Container>
    )
}