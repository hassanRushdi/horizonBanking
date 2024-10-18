export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        SIDBAR 
        {children}
        SIDEBAR
      </main>
    );
  }