// Update the import directory to point to it‘s location within node_modules
// $bootstrap-icons-font-dir: "bootstrap-icons/font/fonts";

// Import the Sass files as usual
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/header/header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
      </head>
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
