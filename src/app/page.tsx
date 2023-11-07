import { Box } from "@radix-ui/themes";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // Centers vertically within the viewport
};

const Page = () => {
  return (
    <div style={containerStyle}>
      <Box className="py-3">
        <div>
        <img src="https://i.ibb.co/G5VcKdJ/download.png" alt="houndoom" />
        <img src="https://i.ibb.co/8dKTmfq/download-1.png" alt="sceptile" />
        <img src="https://i.ibb.co/XJtJ8xs/download.png" alt="ironbundle" />
        <img src="https://i.ibb.co/dtgsyvv/dialga.png" alt="dialga" />
        <img src="https://i.ibb.co/0VRXbqw/drednaw.png" alt="drednaw" />
        <img src="https://i.ibb.co/hHyQd5B/noivern.png" alt="noivern" />
        <img src="https://i.ibb.co/Jt3TJ05/pikachu.png" alt="pikachu" />
        <img src="https://i.ibb.co/xMRT3T7/toxicroak.png" alt="toxicroak" />
        </div>
        <div>Welcome to the Radical Red Movesets Database!</div>
        <div>Report Mistakes in the Documentation-Reports channel in the Radical Red Discord Server.</div>
      </Box>
    </div>
  );
};

export default Page;
