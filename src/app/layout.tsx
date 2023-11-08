import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Container } from "@radix-ui/themes";
import SearchComponent from "@/components/SearchComponent";
import "@radix-ui/themes/styles.css";
import { Theme, Heading } from "@radix-ui/themes";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radical Red Moveset Database",
  description: "Search Radical Red Movesets.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="red" grayColor="auto">
          <Box>
            <Container className="px-2">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Heading className="py-2">
                  <Link href="/" className="text-white no-underline">
                    Radical <span className="text-[#A93226]">Red</span> Movesets
                  </Link>
                </Heading>
                <SearchComponent />
              </div>
              {children}
            </Container>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
