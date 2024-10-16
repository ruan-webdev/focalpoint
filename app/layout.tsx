import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Gerenciador de tarefas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <link rel="icon" href="/favicon.svg" sizes="any" />
        </header>
      </body>
      <body>{children}</body>
    </html>
  )
}
