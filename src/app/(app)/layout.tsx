import { AuthGate } from "@/components/AuthGate";
import { Header } from "@/components/Header";
import { TabNav } from "@/components/TabNav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGate>
      <div className="min-h-screen flex flex-col bg-bg">
        <Header />
        <TabNav />
        <main className="flex-1 max-w-[760px] w-full mx-auto px-5 py-7">
          {children}
        </main>
        <footer className="mt-12 px-5 pt-5 pb-8 text-center border-t border-(--border)">
          <div className="w-10 h-0.5 bg-c1 mx-auto mb-4" />
          <div className="font-display text-[14px] text-ink tracking-[0.1em] mb-1.5">
            EXECUTIVE COMMUNICATION GUIDE
          </div>
          <div className="font-mono text-[11px] text-muted">
            <a href="http://cheewan.ai" target="_blank" rel="noopener" className="hover:text-c1 transition-colors">
              cheewan.ai
            </a>
            {" · May 2026"}
          </div>
        </footer>
      </div>
    </AuthGate>
  );
}
