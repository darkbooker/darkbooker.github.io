import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const Page = async () => {
  const yourText = `
    ![houndoom](https://i.ibb.co/G5VcKdJ/download.png) ![sceptile](https://i.ibb.co/8dKTmfq/download-1.png) ![ironbundle](https://i.ibb.co/XJtJ8xs/download.png) ![dialga](https://i.ibb.co/dtgsyvv/dialga.png)![drednaw](https://i.ibb.co/0VRXbqw/drednaw.png) ![noivern](https://i.ibb.co/hHyQd5B/noivern.png) ![pikachu](https://i.ibb.co/Jt3TJ05/pikachu.png) ![toxicroak](https://i.ibb.co/xMRT3T7/toxicroak.png)
    
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
