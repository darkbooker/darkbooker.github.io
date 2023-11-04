import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Container } from "@radix-ui/themes";
import SearchComponent from "@/components/SearchComponent";
import "@radix-ui/themes/styles.css";
import { Theme, Heading, ThemeProvider } from "@radix-ui/themes";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Define your custom theme with the accent color
const customTheme = {
  ...dark,
  colors: {
    ...dark.colors,
    accent: "#b64444", // Set the accent color to #b64444
  },
};

export const metadata: Metadata = {
  title: "Pokemon Searcher",
  description: "Find your pokemon and get the moveset!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={customTheme}> {/* Wrap your app with ThemeProvider */}
          <Box>
            <Container className="px-2">
              <Heading className="py-2">
                <Link href="/" className="text-white no-underline">
                  Radical Red Movesets
                </Link>
              </Heading>
              <SearchComponent />
              {children}
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}