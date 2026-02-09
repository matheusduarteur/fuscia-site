import "./globals.css";

export const metadata = {
  title: "Agência de Marketing",
  description: "Landing page de alta conversão"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
