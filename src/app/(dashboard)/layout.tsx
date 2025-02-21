import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar, TopNav } from "@/components/dashboard"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <TopNav />
      <main>
        {children}
      </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
