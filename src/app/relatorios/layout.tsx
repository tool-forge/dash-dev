const RelatoriosLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col gap-4 p-4 max-w-screen h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)]">
      {children}
    </main>
  );
};

export default RelatoriosLayout;
