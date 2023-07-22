import SideBar from "@/components/sidebar";
import "./globals.css";
import SessionProvider from "@/components/session-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import MenuProvider from "@/contexts/sidebar-context";
import Login from "@/components/login";
import Header from "@/components/header";

export const metadata = {
  title: "ChatGPT Messenger",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // if (!session) return <Login />;

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <MenuProvider>
            <div className="flex">
              {/* Sidebar */}
              <div className="z-40 bg-gpt">
                <SideBar />
              </div>

              <div className="flex-1 h-screen overflow-auto scrollbar-hide bg-gpt">
                <Header />
                {children}
              </div>
            </div>
          </MenuProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
