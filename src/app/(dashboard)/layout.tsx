import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import { RightPanel } from "@/components/layout/RightPanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 lg:pl-64 xl:pr-80">
          <div className="mx-auto w-full max-w-3xl p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  );
}
