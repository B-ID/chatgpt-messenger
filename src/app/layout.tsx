import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT Messenger",
  description: "",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <div></div>

          {/* ClientProvider - Notification */}
          <div></div>

          <div className="flex-1 bg-gpt">{children}</div>
        </div>
      </body>
    </html>
  );
}

