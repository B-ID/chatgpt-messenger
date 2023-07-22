import SideBar from "@/components/sidebar";
import "./globals.css";
import SessionProvider from "@/components/session-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/login";

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

  if (!session) return <Login />;

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            {/* Sidebar */}
            <div className="h-screen max-w-xs overflow-y-scroll md:min-w-[20rem]">
              <SideBar />
            </div>

            <div className="flex-1 bg-gpt">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
