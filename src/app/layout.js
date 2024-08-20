import { config } from "@/helpers/config";

import "./global.css"
import Header from "./components/header";


export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: config.project.name,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Header/>
        {children}</body>
    </html>
  );
}
