import { redirect } from "next/navigation";
import { getVisaGuideSampleChapters } from "@/lib/guide";

export default function VisaPortalSampleIndexPage() {
  const chapters = getVisaGuideSampleChapters();
  const firstChapter = chapters[0];

  if (!firstChapter) {
    redirect("/");
  }

  redirect(`/visa-portal-sample/${firstChapter.slug}`);
}