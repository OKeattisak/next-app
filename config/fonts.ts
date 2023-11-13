import { Fira_Code as FontMono, Inter as FontSans, Kanit as FontKanit } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontKanit = FontKanit({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kanit",
})
