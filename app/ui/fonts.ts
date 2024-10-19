import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
