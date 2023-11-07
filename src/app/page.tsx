import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const Page = async () => {
  const yourText = `
    ![Image 1](image1.jpg) ![Image 2](image2.jpg) ![Image 3](image3.jpg) ![Image 4](image4.jpg)
    ![Image 5](image5.jpg) ![Image 6](image6.jpg) ![Image 7](image7.jpg) ![Image 8](image8.jpg)
    
    Welcome to the Radical Red Movesets Database!
    
    Report Mistakes in the Documentation-Reports channel in the Radical Red Discord Server.
  `;

  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(yourText);

  const html = String(file);

  return (
    <Box className='py-3'>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
};

export default Page;
