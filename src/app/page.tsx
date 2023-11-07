import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import path from "path";
import fs from "fs";
import remarkGfm from "remark-gfm";

const Page = async () => {
  const fullPath = path.resolve(process.cwd(), "README.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(fileContents);
  const html = String(file);
  return (
    <Box className='py-3'>
      <div
        style={{
          textAlign: 'center', // Center-align text
          margin: '0 auto',     // Center-align the div itself
          maxWidth: '600px'    // Optional: Set a max width for the centered content
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  );
};

export default Page;
