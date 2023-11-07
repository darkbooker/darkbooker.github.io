import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import React from "react";

const Page = async () => {
  // Define your custom content with 8 images in the first line and text on the second and third lines
  const customContent = `
    <img src="image1.jpg" alt="Image 1" />
    <img src="image2.jpg" alt="Image 2" />
    <img src="image3.jpg" alt="Image 3" />
    <img src="image4.jpg" alt="Image 4" />
    <img src="image5.jpg" alt="Image 5" />
    <img src="image6.jpg" alt="Image 6" />
    <img src="image7.jpg" alt="Image 7" />
    <img src="image8.jpg" alt="Image 8" />
    <p>Welcome to the Radical Red Movesets Database!</p>
    <p>Report Mistakes in the Documentation-Reports channel in the Radical Red Discord Server.</p>
  `;

  const file = await unified()
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(customContent);
  const html = String(file);

  // Center the content both horizontally and vertically with CSS Flexbox
  const centerStyle = {
    display: 'flex',        // Use 'flex' display property
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',    // Center vertically
    minHeight: '100vh',      // Ensure the container takes up at least the full viewport height
  };

  return (
    <Box className='py-3' style={centerStyle}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
};

export default Page;
