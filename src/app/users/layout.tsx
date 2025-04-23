export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col justify-center gap-1 py-8">
      {children}
    </section>
  );
}
