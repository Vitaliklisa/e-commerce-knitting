import { Metadata } from "next";
import NewKnittyForm from "./NewKnittyForm";

export const metadata: Metadata = {
  title: "Post a new hand-made clothes",
};

export default function Page() {
  return <NewKnittyForm />;
}
