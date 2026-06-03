import { MarketingHeader } from "@/components/marketing/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      <MarketingHeader />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
