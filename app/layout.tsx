import '@/app/ui/global.css';
import { lusita } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusita.className} antialiased`}>{children}</body>
    </html>
  );
}
