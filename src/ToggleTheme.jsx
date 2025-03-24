import { Box, Button, useColorMode } from "@chakra-ui/react";

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      bg="gray.800"
      color="white"
    >
      <h1>Instagram Clone</h1>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </Button>
    </Box>
  );
};

export default ToggleTheme;
