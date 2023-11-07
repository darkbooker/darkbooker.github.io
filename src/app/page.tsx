import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import path from "path";
import fs from "fs";

const Page = async () => {
  const fullPath = path.resolve(process.cwd(), "README.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(fileContents);
  const html = String(file);
  
  // Center the content with CSS
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically within the viewport
  };

  return (
    <Box className='py-3' style={centerStyle}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
};

export default Page;
