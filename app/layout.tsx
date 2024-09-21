import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FocalPoint",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
