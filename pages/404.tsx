// Components
// Компоненты
import { useMediaQuery } from "@mantine/hooks";
import { Container, Divider, Text } from "@mantine/core";

// Why not use SCSS/SASS modules?
// I want this file to be clean, without any dependencies.
// Почему бы не использовать SCSS/SASS модули?
// Я хочу, чтобы этот файл был чистым, без каких-либо зависимостей.

export default function NotFound() {

    // Media query
    // Sets width of Container with text
    // to 100% if mobile width is less than 650px
    // Медиа квери
    // Устанавливает ширину контейнера с текстом
    // на 100%, если ширина мобильного устройства меньше 650px
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