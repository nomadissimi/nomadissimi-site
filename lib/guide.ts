import "server-only";
import fs from "node:fs";
import path from "node:path";

export type GuideTheme = "visa" | "residence" | "tax" | "codice-fiscale";

export type GuideChapter = {
  slug: string;
  title: string;
  content: string;
};

export type GuidePortal = {
  key: GuideTheme;
  title: string;
  filePath: string;
  chapterPrefix: string;
};

//here is where the guide portals are defined, with their corresponding markdown file paths and chapter slug prefixes and portal titles. This allows us to easily manage multiple guides in a structured way.

const GUIDE_PORTALS: Record<GuideTheme, GuidePortal> = {
  visa: {
    key: "visa",
    title: "The Nomadissimi Digital Nomad Visa Master Guide",
    filePath: path.join(process.cwd(), "content", "visa-guide.md"),
    chapterPrefix: "visa",
  },
  residence: {
    key: "residence",
    title: "From Tourist to Italian Resident",
    filePath: path.join(process.cwd(), "content", "residence-guide.md"),
    chapterPrefix: "residence",
  },
  tax: {
    key: "tax",
    title: "Tax & Partita IVA Portal",
    filePath: path.join(process.cwd(), "content", "tax-guide.md"),
    chapterPrefix: "tax",
  },
  "codice-fiscale": {
    key: "codice-fiscale",
    title: "Codice Fiscale Portal",
    filePath: path.join(process.cwd(), "content", "codice-fiscale-guide.md"),
    chapterPrefix: "codice-fiscale",
  },
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/["“”'’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseGuideFile(portal: GuidePortal): GuideChapter[] {
  if (!fs.existsSync(portal.filePath)) return [];

  const raw = fs.readFileSync(portal.filePath, "utf8");

const chapterRegex = /^#\s+\*\*Chapter\s+\d+\s+(.+?)\*\*\s*$/gm;
const matches: RegExpExecArray[] = [];

let match: RegExpExecArray | null;
while ((match = chapterRegex.exec(raw)) !== null) {
  matches.push(match);
}

if (matches.length === 0) return [];

  const chapters: GuideChapter[] = [];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const title = match[1].trim();

    const start = match.index! + match[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : raw.length;

    const content = raw.slice(start, end).trim();

    chapters.push({
      slug: `${portal.chapterPrefix}-${slugify(title)}`,
      title,
      content,
    });
  }

  return chapters;
}

export function getGuidePortal(theme: GuideTheme) {
  return GUIDE_PORTALS[theme];
}

export function getGuideChapters(theme: GuideTheme): GuideChapter[] {
  return parseGuideFile(GUIDE_PORTALS[theme]);
}

export function getGuideChapter(theme: GuideTheme, slug: string) {
  return getGuideChapters(theme).find((chapter) => chapter.slug === slug) ?? null;
}

export function detectGuideThemeFromSlug(slug: string): GuideTheme | null {
  if (slug.startsWith("visa-")) return "visa";
  if (slug.startsWith("residence-")) return "residence";
  if (slug.startsWith("tax-")) return "tax";
  if (slug.startsWith("codice-fiscale-")) return "codice-fiscale";
  return null;
}


export function getVisaGuideSampleChapters(): GuideChapter[] {
  return getGuideChapters("visa").slice(0, 3);
}

export function getVisaGuideSampleChapter(slug: string) {
  return getVisaGuideSampleChapters().find((chapter) => chapter.slug === slug) ?? null;
}

/**
 * Backwards-compatible helpers
 * Keep these for now so existing imports don't explode while we migrate page logic.
 */
export function getVisaGuideChapters(): GuideChapter[] {
  return getGuideChapters("visa");
}

export function getVisaGuideChapter(slug: string) {
  return getGuideChapter("visa", slug);
}


