import "server-only";
import fs from "node:fs";
import path from "node:path";

const GUIDE_PATH = path.join(process.cwd(), "content", "visa-guide.md");

export type GuideChapter = {
  slug: string;
  title: string;
  content: string;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/["“”'’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getVisaGuideChapters(): GuideChapter[] {
  if (!fs.existsSync(GUIDE_PATH)) return [];

  const raw = fs.readFileSync(GUIDE_PATH, "utf8");

  const chapterRegex = /^#\s+\*\*Chapter\s+\d+\s+(.+?)\*\*\s*$/gm;

  const matches = [...raw.matchAll(chapterRegex)];

  if (matches.length === 0) return [];

  const chapters: GuideChapter[] = [];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const title = match[1].trim();

    const start = match.index! + match[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : raw.length;

    const content = raw.slice(start, end).trim();

    chapters.push({
      slug: slugify(title),
      title,
      content,
    });
  }

  return chapters;
}

export function getVisaGuideChapter(slug: string) {
  return getVisaGuideChapters().find((chapter) => chapter.slug === slug) ?? null;
}

