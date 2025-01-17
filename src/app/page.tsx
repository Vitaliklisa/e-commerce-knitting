import JobFilterSidebar from "@/components/JobFilterSidebar";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string,
  };
}
/// Change get title to knitted clothes or by categories such as sweetier, socks, camoflage e.t.c
function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type}  developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All knitted clothes";

  const titleSuffix = location ? `in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote},
}: PageProps): Metadata {
  return {
    title: `${getTitle({ q, type, location, remote: remote === "true" })} | Knitty Nata`
  };
}

export default async function Home({
  searchParams: { q, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">
          Find best knitted clothes for yourself
        </p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues}
        page={page ? parseInt(page) : undefined} />
      </section>
    </main>
  );
}
