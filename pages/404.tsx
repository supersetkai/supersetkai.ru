// Components
// Компоненты
import { useMediaQuery } from "@mantine/hooks";
import { Text, Container, Divider } from "@mantine/core";

export default function NotFound() {

    const matches = useMediaQuery("(max-width: 650px)");
    const holder = matches ? {
        width: "100%",
    } : {};

    return (
        <Container
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
        >
            <Container
                style={{
                    width: "50%",
                    margin: "0 20px",
                    ...holder
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 900,
                        lineHeight: 1.25,
                    }}
                    variant="gradient"
                    gradient={{ from: "black", to: "white", deg: 90 }}
                >
                    404:
                </Text>
                <Text
                    style={{
                        fontSize: 48,
                        fontWeight: 900,
                        lineHeight: 1
                    }}
                    variant="gradient"
                    gradient={{ from: "black", to: "white", deg: 90 }}
                >
                    МЫ НИЧЕГО<br />
                    НЕ НАШЛИ!
                </Text>
                <Divider
                    my="sm"
                    color="dimmed"
                    style={{
                        borderImageSource: "linear-gradient(90deg, black 0%, white 100%)",
                        borderImageSlice: 1,
                    }}
                    mt={40}
                />
            </Container>
        </Container>
    )
}