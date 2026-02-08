import { redirect } from "next/navigation";

export default function RootPage() {
  // Default to Indonesian as primary market
  redirect("/id/presale");
}
