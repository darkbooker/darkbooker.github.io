import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const Page = async () => {
  const yourText = `
    <img src="https://i.ibb.co/G5VcKdJ/download.png" alt="houndoom" /> <img src="image2.jpg" alt="Image 2" /> <img src="image3.jpg" alt="Image 3" /> <img src="image4.jpg" alt="Image 4" />
    <img src="image5.jpg" alt="Image 5" /> <img src="image6.jpg" alt="Image 6" /> <img src="image7.jpg" alt="Image 7" /> <img src="image8.jpg" alt="Image 8" />
    
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
