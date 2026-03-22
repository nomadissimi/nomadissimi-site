import Link from "next/link";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sha256 } from "@/lib/crypto";

const chapters = [
  {
    slug: "welcome",
    title: "Welcome",
    description: "A warm introduction to the guide and how to use it.",
    content: `
Welcome to The Nomadissimi Digital Nomad Visa Master Guide.

This guide was built to help you move through the Italian Digital Nomad Visa process with more clarity, fewer false assumptions, and a more realistic understanding of what consulates actually care about.

You are not reading a generic checklist.

You are reading a structured, practical guide designed to help you understand the visa in real life.
    `,
  },
  {
    slug: "unlock-italy",
    title: "Unlock Italy",
    description: "Distinctions, eligibility, and how the visa really works.",
    content: `
This chapter explains the real logic behind Italy’s Digital Nomad Visa.

We’ll look at who the visa is for, what makes it different from other routes, and how eligibility is actually interpreted in practice.
    `,
  },
  {
    slug: "starting-requirements",
    title: "Starting Requirements, Explained",
    description: "A grounded breakdown of the baseline requirements.",
    content: `
Here we break down the initial requirements in plain language.

The goal is not just to list them, but to explain what they mean, how they interact, and where applicants often get confused.
    `,
  },

  //chapter 4: highly qualified worker

  {
    slug: "highly-qualified-worker",
    title: 'Proof of being a "highly qualified" worker',
    description: "",
    content: (
      <>
        <div className="rounded-2xl border border-black/10 bg-[#FBF8F2] px-5 py-5">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            In this chapter
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="#chapter-4-intro"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-black/70 transition hover:bg-white/80"
            >
              <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                Intro
              </p>
              <p className="serif mt-1 text-[18px] leading-snug">
                Why this section matters
              </p>
            </a>

            <a
              href="#option-a"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-black/70 transition hover:bg-white/80"
            >
              <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                Option A
              </p>
              <p className="serif mt-1 text-[18px] leading-snug">
                Higher Education Degree
              </p>
            </a>

            <a
              href="#option-b"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-black/70 transition hover:bg-white/80"
            >
              <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                Option B
              </p>
              <p className="serif mt-1 text-[18px] leading-snug">
                Professional Qualification
              </p>
            </a>

            <a
              href="#option-c"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-black/70 transition hover:bg-white/80"
            >
              <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                Option C
              </p>
              <p className="serif mt-1 text-[18px] leading-snug">
                Work-Experience Route
              </p>
            </a>

            <a
              href="#chapter-4-closing"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-black/70 transition hover:bg-white/80 sm:col-span-2"
            >
              <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                Closing
              </p>
              <p className="serif mt-1 text-[18px] leading-snug">
                60-second overview
              </p>
            </a>
          </div>
        </div>

        <section id="chapter-4-intro" className="space-y-8">
          <div className="rounded-[24px] border border-[#D8D1C5] bg-gradient-to-br from-[#FBF8F2] to-[#F7F2E8] px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.05)]">
            <p className="sans text-xs tracking-[0.22em] uppercase text-[#7E7566]">
              Chapter introduction
            </p>

            <h2 className="serif mt-3 text-2xl md:text-3xl font-semibold text-black leading-tight">
              Proof of being a "highly qualified" worker
            </h2>

            <div className="mt-5 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/80">
              {`This is the part where most people hit the wall not because they’re unqualified, but because Italy only accepts a very specific paper trail that matches the legal definition of a “highly specialized worker.” But what does that even mean? We break it all down here so you don’t walk into your appointment with a packet that looks fine but doesn’t speak Italy’s specific bureaucracy language.`}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[22px] border border-[#D8D1C5] bg-white/80 px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
              <h3 className="serif text-[24px] font-semibold text-black">
                Why this is so hard (and so important)
              </h3>
              <div className="mt-4 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
                {`Italy doesn’t give this visa to “anyone who works online.” The Digital Nomad/Remote Worker visa is specifically designed for highly specialized workers, and proving that on paper is often the longest, most bureaucratic, and most time-consuming part of the entire application.`}
              </div>
            </div>

            <div className="rounded-[22px] border border-[#D8D1C5] bg-white/80 px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
              <h3 className="serif text-[24px] font-semibold text-black">
                Why Italy asks for it
              </h3>
              <div className="mt-4 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
                {`Because legally, this visa falls under the rules for highly qualified work (in the Italian immigration framework), so the consulate must verify that your professional profile matches the category before they can approve you.`}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#D8D1C5] bg-white/80 px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)]">
            <h3 className="serif text-[24px] font-semibold text-black">
              The 3 qualification routes (pick ONE and follow it)
            </h3>

            <div className="mt-4 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
              {`Here’s the big picture: there are three main ways to prove you qualify, and your task is to choose the path that best fits your real situation and that you can document cleanly.`}
            </div>

            <ol className="mt-5 space-y-3">
              <li className="rounded-2xl bg-[#FBF8F2] px-4 py-4">
                <span className="serif text-[20px] font-semibold text-black">
                  Higher education degree
                </span>
                <p className="mt-2 sans text-[16px] leading-[1.9] text-black/78">
                  If you have a Bachelor’s degree (or higher), this is usually
                  the most straightforward route.
                </p>
              </li>

              <li className="rounded-2xl bg-[#FBF8F2] px-4 py-4">
                <span className="serif text-[20px] font-semibold text-black">
                  Professional qualification
                </span>
                <p className="mt-2 sans text-[16px] leading-[1.9] text-black/78">
                  similar to “university education-level” proof. This would be
                  used if you don’t have a traditional Bachelor’s degree, but
                  you have a recognized post-secondary qualification.
                </p>
              </li>

              <li className="rounded-2xl bg-[#FBF8F2] px-4 py-4">
                <span className="serif text-[20px] font-semibold text-black">
                  Proven Work Experience
                </span>
                <p className="mt-2 sans text-[16px] leading-[1.9] text-black/78">
                  (often described by consulates as “higher professional
                  qualification + experience”): for people who don’t have the
                  above, but can prove strong professional experience with the
                  right kind of evidence.
                </p>
              </li>
            </ol>

            <div className="mt-5 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
              {`In the next subsections, we’ll guide you through each path with a clear, step-by-step document sequence, so you know exactly what to request, in what order, and how to build a complete consulate-ready packet.`}
            </div>
          </div>
        </section>

        <section id="option-a" className="space-y-8">
          <div className="rounded-[24px] border border-[#D8D1C5] bg-gradient-to-br from-white to-[#FBF8F2] px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)]">
            <p className="sans text-xs tracking-[0.22em] uppercase text-[#7E7566]">
              Option A
            </p>

            <h2 className="serif mt-3 text-2xl md:text-3xl font-semibold text-black leading-tight">
              Higher Education Degree
            </h2>

            <div className="mt-5 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
              {`If you have a university degree, you're taking the path most consulates know how to manage best. This is the most common route, and if you qualify for it, this is the one we recommend to follow. 
Why? Because a recognized tertiary degree is the clearest, most straightforward way to prove to Italy that you're “highly qualified.” You don't need to prove years of work experience, and it’s a great choice if you’re a younger applicant. However, you need to validate your degree the right way.`}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#D8D1C5] bg-white/80 px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)]">
            <h3 className="serif text-[24px] font-semibold text-black">
              What "Higher" Actually Means (& Why “3 Years” Matter)
            </h3>

            <div className="mt-4 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
              {`Here's where a lot of confusion starts. When Italy says your degree must be "higher education," they're being very specific. It means your qualification must be at a tertiary level, which translates to a program that took at least three years to complete. 

Think of it this way: if you completed a University degree in 4 years, or a Master's in 2 years after your Bachelor's, you're good. If you did a 2-year diploma program at a technical school, that probably doesn't count, but we'll circle back to that.


The legal language calls this “EQF Level 6 or equivalent,” which is the European qualification framework way of saying "university-level." 
If your degree is a Bachelor's, Master's, or Doctorate from a recognized institution, and it took at least 3 years, you meet the threshold.
The Major or Minor of your degree doesn't matter for this visa. You don't need to be an engineer or a lawyer specifically. A degree in Literature, Marketing, Biology, Business, Graphic Design, or anything else at the tertiary level works, as long as you can prove you actually earned it.`}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#D8D1C5] bg-[#F8F4EA] px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.03)]">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C9A86A]" />
              <div>
                <p className="sans text-xs tracking-[0.22em] uppercase text-[#7E7566]">
                  Big-picture note
                </p>
                <h3 className="serif mt-2 text-[24px] font-semibold text-black">
                  Why Having Your Degree Recognized in Italy Isn't So
                  Straightforward
                </h3>

                <div className="mt-4 whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
                  {`Here's the reality: getting your degree officially recognized as “equivalent” to an Italian university degree is not a one-size-fits-all process. 
The number of documents you'll need, the time it takes, and the exact procedure depend on two main variables that you cannot control: where you earned your degree and which consulate you're applying to.
Your consulate didn't invent these rules. Each embassy and consulate follows guidelines from the Italian Ministry of Foreign Affairs (Ministero degli Affari esteri e della Cooperazione internazionale), but they interpret them with some flexibility. The Italian consulate in Houston might ask for different documents than the consulate in Paris. A consulate in Paris might have stricter requirements than one in Mexico City. 
I know, this is bureaucratic chaos, but this is how international education recognition works. Each country's education system is different, and Italy's consulates adapt their approach accordingly (sometimes turning a simple thing into a puzzle). As much as we love Italy, we can’t deny that their bureaucracy is very fragmented. 

So if your degree comes from the United States, you'll have one document pathway. If it's from India, the pathway might be different. If it's from a European country within the Bologna Process, it might be different again. 

In this guide, you’ll find a clear explanation of the documents consulates usually ask for, so if they mention a “dichiarazione di valore” or a “traduzione certificata,” you’ll know what they mean and how to get it.
One thing to remember: the document list isn’t fixed.
Before you start collecting anything, always confirm the exact requirements with your specific consulate.


A lot of people find out mid-process that their consulate wants extra pieces—like a notarized transcript of records (which can take weeks to get from your university), an apostille, or a certified translation done by someone with very specific credentials. Those “small” details can quietly add weeks—or even months—to your timeline if you don’t spot them early.
But here’s the flip side: double-checking requirements with your specific consulate can bring pleasant surprises, too. You might learn they don’t require apostilles, or they don’t want a “certified translation” at all. When that happens, you save time, money, and stress—and you can focus only on the items this guide actually applies to.
This is exactly why Nomadissimi exists. Because we've seen the timelines slip, the "come back next time" conversations, and applications get rejected because just a single document was missing or formatted incorrectly. You're not going to be that person!`}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="option-b" className="space-y-8">
          <div>
            <h2 className="serif text-2xl md:text-3xl font-semibold text-black">
              Option B. Professional Qualification (When Your Qualification
              Isn’t a University Degree)
            </h2>
            <div className="mt-4">
              {renderBlock(`Using a classic university Bachelor’s/Master’s degree (Option A) is the most common way to prove you’re “highly qualified”… but it’s not the only way.

Option B is basically the same recognition logic as Option A (CIMEA or Dichiarazione di Valore), just applied to a qualification that doesn’t have the words “Bachelor’s Degree” on the front—so the paperwork has a bit more explaining to do.
Option B: The “Not a Bachelor’s, Still Valid” Route
Option B is for people who don’t have a traditional university Bachelor’s degree, but do have a post-secondary professional qualification that is at least 3 years long and issued by a recognized tertiary institution (polytechnic, higher technical institute, university of applied sciences, etc.).

In Nomadissimi terms: your qualification is real, serious, and higher-education level, but it just comes with a different label. So your job is to make it obvious on paper, usually with the same validation logic you saw in Option A: CIMEA or a Dichiarazione di Valore (DV), depending on what your consulate accepts.
Why Option B exists
Italy’s “highly qualified” standard is not limited to classic university degrees or grad school; it also allows certain post-secondary professional qualifications, as long as they meet the level and duration threshold.​
So if your education path was more technical, applied, or career-focused (and not called “Bachelor’s”), Option B is your way to still fit the “highly qualified” category on paper.
What counts
A professional qualification can work for this visa when:
It’s post-secondary:
It means you earned it after completing secondary school/high school. 
In USA/Canada terms: you finished high school, then you enrolled in a structured program at a college-level institution; it’s not a “career course you took while in high school,” and it’s not a one-off training certificate.
It’s 3+ years long:
It has to be an official program that is considered at least three years of higher education in its own system, and that can be documented through a transcript/diploma supplement.
It’s issued by a recognized tertiary institution:
This means the school is officially part of your country’s higher-education system—not a random “academy” or sketchy online platform that awards degrees—and it’s recognized or accredited by the proper public authority (like a Ministry of Education or a national accreditation body). This part is key.
In practice, this is the type of institution that can issue official transcripts, has a formal program structure, and can be verified by CIMEA or used to obtain a Dichiarazione di Valore—because Italy wants something that can be classified at “university-level” (EQF Level 6 or equivalent), not just “professional training.”

Examples that often fit Option B (names vary by country, but the logic is the same):
​
Polytechnic diplomas (technical/engineering/business programs).
Higher Technical Institute-type programs.
Universities of Applied Sciences qualifications.

​Examples that usually do not fit:
Anything under 3 years (even if it felt intense).
High school-level diplomas.
Short professional certificates/training courses that aren’t clearly tertiary education.
Summer school 
​
Why Option B can be trickier
Option A is “easy to classify” because most visa officers understand what a Bachelor’s degree is. It’s the more straightforward option.
​
On the other hand, Option B poses more of a “translation” and “classification” problem. Even though your qualification and training may be strong (we believe you), the consulate may not instantly recognize the level of the institution or the program, so clarity and supporting documents matter even more in this case.

Here are some common friction points (so they don’t surprise you):
Your document says “Diploma,” and the officer reads it as “high school diploma,” even when it’s tertiary-level. It needs to be specific.
The consulate wants proof of program level + duration, not just the final certificate. (Anybody can generate a certificate online and apply a gold star at the top).
Some consulates apply a stricter “EU Blue Card style” document mindset (more formalities); others are more pragmatic (same visa, different paper culture).​
​
The “hidden” requirement
With Option B, you’re not only proving that you studied, but you’re also proving your qualification sits at a university-equivalent level. You’ll often see this described as “EQF Level 6 or equivalent.” Treat that as a way to explain the level, not a magic label you must personally print on your certificate. 

Your job is to provide documents that let CIMEA/DV (and the consulate) classify it at that level. And yes: this is where people lose weeks.
​
A consulate checklist might just say “proof of qualification.” But when you start dealing with DV or CIMEA, you can trigger an entire domino chain made of transcripts, legalization/apostille, and sometimes certified translations, depending on your route and your country.​
CIMEA vs DV (for Option B specifically)
You already met CIMEA and DV in Option A, so there’s no need to  re-learn the whole theory here (feel free to go back to those sections and review). At this stage, it’s a matter of using the right tool for this specific situation.

CIMEA is often the smartest choice for Option B because it can “classify” or “categorize”  your non-traditional qualification in a way Italy understands, reducing interpretation at the visa desk.​ Consulate staff are generally not academic guidance counselors or career coaches that automatically understand complex degrees. 

The Dichiarazione di Valore is often the safest choice when your consulate is strict-mode, vague, or simply when they explicitly state they prefer DV, because it’s a classic consular document and fits their internal workflow best.

What you should do in practice:
Re-read the dedicated CIMEA section and DV section in Option A, and then come back here with one question: “Which route makes my qualification easiest to accept in my consulate?”
If your consulate is unclear, email them (or call them) and ask if they accept CIMEA Statements for professional qualifications or require DV. If they don’t answer in a few days, choose the DV route. Unfortunately some consulates are not so punctual about replying. (Don’t shoot the messenger, we’re just keeping it real with you). Of course it’s best to try and reach out to them directly for this, but don’t sit around waiting for months for them to reply either as to whether they want the CIMEA or DV route. ​If they’re vague or if they ghost you, get started on preparing the Dichiarazione di Valore. By now you know it’s a multi-step process just to obtain that document. Time is money. 
What to collect (Option B checklist)
Option B lives and dies on credibility on paper—so give the consulate a clean, easy story to approve. Collect these documents early (even if the visa checklist doesn’t spell them out), because DV/CIMEA often “pull” extra documents into the process anyway.

Final qualification certificate/diploma (the official award document).
Transcript / course list / diploma supplement showing subjects + dates + duration (be super careful: this is often the missing piece that trips people up and slows down their application).
Official letter from the institution confirming program duration and level (if they can issue it).
Proof the institution is recognized/accredited in your country (mostly if your case is “non-obvious”; this can be a government/accreditation registry printout or an official statement).
Your chosen recognition output: CIMEA Statements or Dichiarazione di Valore, depending on what your consulate accepts.

With Option B, your consulate’s interpretation matters even more than it does with a standard university degree. Email your consulate with the exact details of your qualification (program name, institution type, duration, country) and ask how they want it proven—specifically whether they accept CIMEA Statements and/or a Dichiarazione di Valore (DV) for professional qualifications, and whether legalization or translation steps apply in your case.

Your goal isn’t to win an argument with bureaucracy; your goal is to walk out with that visa sticker. Let the consulate define what “right” looks like at their desk.`)}
            </div>
          </div>
        </section>

        <section id="option-c" className="space-y-8">
          <div>
            <h2 className="serif text-2xl md:text-3xl font-semibold text-black">
              Option C: No Degree, But Still Highly Qualified (The
              Work-Experience Route)
            </h2>
            <div className="mt-4">
              {renderBlock(`If Option A and B are “show your education,” Option C is “show your receipts.” This path is totally legitimate, but it’s the one where Italy doesn’t care how talented you are in real life—it cares whether your experience can be proven on paper, in a way a consular officer can verify in 3 minutes. 
What Option C is (and who it’s for)
Option C is for applicants who don’t have a qualifying university degree (Option A) and don’t have a qualifying 3+ year post-secondary professional qualification (Option B), but can prove they are “highly qualified” through relevant professional experience. This is not the case for someone who has randomly started selling digital products on social media in the past few months (although if you do, good for you, but it’s not really fitting for this visa according to Italy). We’re just talking about the requirements Italy has established to prove what they deem as “highly qualified” on paper.
Consulates often describe this as a “higher professional qualification attested by professional experience,” and they expect a structured set of documents (not just a resume or CV).
The “highly qualified” proof (Option C) has the same logic for both Digital Nomads and Remote Workers, but the work relationship part of the visa differs:
Digital Nomad (freelancer or consultant): you will usually prove experience across multiple clients and projects.
Remote Worker (employee): you have employer-specific documents for the visa (employment contract/binding job offer + explicit employer declaration), so your current employer becomes part of the story.
The Time Thresholds Requirements
There are two possible thresholds for Option C (no degree route), and you must pick the one that best matches your professional profile.
The General Rule
You qualify under Option C if you can prove a “higher professional qualification” through at least 5 years of professional experience—the kind of work that clearly reads as skilled and specialized on paper.
What makes those 5 years count is connection: your experience must line up with the profession or sector written in your contract (or, for remote workers, in the employment contract/binding offer).
In other words, the officer should be able to look at your contracts + duties letters + pay proof and think: “Okay, this person has been doing this job, in this field, for at least five years… this isn’t a random career jump on paper or whatever.”

The ICT exception: 3 years within the last 7 years
If you fall under the ICT category, Option C becomes much faster: you can qualify with 3 years of relevant experience in the last 7 years, instead of the general 5-year requirement. So the advantage is simple: you don’t need to “prove a full 5-year career” — you need a tighter, more recent track record, as long as your role fits the ICT occupation groups the consulate is referring to.

What “ICT” means: 
ICT stands for Information and Communication Technologies. In real life, that’s work that builds, runs, secures, or manages digital systems: software, networks, infrastructure, cloud, blockchain, AI, and the rest of the tech stack.


What “ISCO-08 (25 or 133)” means: 
ISCO-08 is the International Standard Classification of Occupations, basically a global system for grouping jobs by tasks and skills. For this visa, the shorter “3 years in the last 7” rule applies only if your role falls under ISCO-08 group 25 (ICT professionals) or group 133 (ICT service managers).
Examples of roles that typically fit those groups include software developer/engineer, cloud engineer, database administrator, cybersecurity engineer, and ICT services program manager.
How to check which threshold applies
Want the official source? Here’s the ISCO framework straight from the “International Labour Organization” (ILO) to check directly with their framework:
https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/
If you think your role can be categorized as an “ICT professional” (ISCO-08 group 25) or an “ICT services manager” (ISCO-08 group 133), you can match your job duties to the ISCO descriptions (titles alone can be misleading and vague at times).
If you’re not clearly in ISCO-08 group 25 or 133, assume the 5-year rule unless your consulate confirms otherwise.
Quick self-check (before collecting documents)
Before you start requesting letters and chasing stamps, check these four things:
Time: Do you cleanly meet 5 years, or (only if ICT) 3 years within the recent 7 years?
Verifiability: For each role you’re counting, can you prove 
Who is the client?
What did you specifically do?
Do you have paystubs/invoices verifying the payable nature of your work? (It can’t be volunteering or unpaid internship experience).
Consistency: Do all documents tell the same story (role title, dates, sector, duties)?
Paper verification: Are you able to obtain at least one “competent entity” verification per employer or client? (if your consulate requires that, but it’s best to come prepared and have proof)

What to collect (The option C kit)
With Option C, the winning move is to make your experience obvious on paper. 
Think in “mini folders”: one folder for each employer or company (if you’re classified as an employee) or each serious client (if you’re a freelancer), all in date order, so the officer can verify your timeline without guessing.
Papers from your employer or client
For each employer/client folder, aim to include these three items (they’re the core of your story):
The relationship document: a signed contract (employment, collaboration, consulting agreement) that clearly shows what you were hired to do and the start/end dates (or total duration).
Proof you were paid: pay slips for employees; for freelancers, payment proof that connects to your invoices (bank incoming transactions work well).​ Many consulates explicitly expect at least four pay slips per year for every year of experience you’re counting, so plan for that level of proof.
A duties letter on company letterhead (or a formal client attestation): what you did, your job title, start/end dates, and ideally the company’s business sector. 
Quick reminder (we’ll unpack this later): if you’re applying as a remote worker, your current employment contract or binding offer goes in the “remote worker–specific” part of your visa file. Make sure it lines up with what you’re claiming in this section. Italy is romantic but it doesn’t love plot twists or vagueness.
Papers from official bodies (the “trust me, I exist” proof)
Some consulates don’t want only private letters, but they also want documents issued by a public authority in the country where you gained the experience.

The goal is simple: they want an official source that confirms:
The company’s identity and sector
Your position inside it (owner, partner, employee, or the closest equivalent in your system).
Common examples of “official sources” consulates themselves mention include the Chamber of Commerce, municipality, public competent entities, and social security bodies. 
Consulates are skeptical and thorough… so it’s best to give them things in a detailed way that clears amibiguity.
Formalities warning 
Some consulates (especially in Europe) are strict about format—they may require certified copies, document legalization (or an apostille, if your country uses that system), plus a certified Italian translation.
Other consulates can be more practical on paper, but they can still ask for extra documents at their discretion.​ 
So do it in the smartest order: collect the documents first, then ask your consulate exactly how they want them prepared.
DV/CIMEA vs Option C: different tools, different goal
Think of CIMEA and the Dichiarazione di Valore as “degree translation tools.” They exist to make a foreign education credential understandable inside the Italian system—so they matter in Option A and Option B.
However, with Option C, you’re not asking Italy to decode a diploma. You’re proving you’re highly qualified through solid work evidence, so DV/CIMEA usually are not part of the story.
What can still show up in Option C is the paperwork “format” layer: some consulates want non-EU documents—contracts, payslips, official certificates, employer letters—properly legalized (or apostilled) and paired with a certified Italian translation.
Good news: you don’t have to re-learn that. If you need those formalities, jump back to the Apostille and Certified Translation sections in Option A and follow the exact steps there.

What to collect (Option C checklist)
Here’s how we suggest you proceed: build an “easy-to-verify” experience file that makes Italian bureaucracy feel simple. The consulate isn’t looking for passion, it’s looking for proof.
Pick your lane (don’t improvise): 5 years of relevant experience is the standard route; the faster ICT route is 3 years in the last 7 only if you truly fit ISCO-08 group 25 or 133.


Create your Master Timeline: one line per employer/client with role title + exact dates, and don’t let dates “drift” across documents.


Create one mini-folder per employer or "serious" client, and order them chronologically.


In every mini-folder include the same three core proofs: the contract that shows the relationship and dates, proof you were paid, and a duties letter that explains what you did and confirms your role and dates.


Add the “official proof” layer: some consulates want government-issued evidence that the work relationship you’re claiming is real, not just a private letter.
If you are an employee: for each employer you count, add official documents from your country that identify the company and its business sector, and that confirm your role with that company (common sources consulates mention include Chamber of Commerce, municipality, public competent entities, and social security bodies).
If you are a freelancer: add official documents that prove you are legally operating as an independent professional or business in your country, and then support your client work with strong private evidence (contracts, invoices, bank incoming payments) tied to each client folder.


Only after your evidence is complete, ask your consulate about format rules (whether they want legalization and/or apostille, and certified Italian translations), because offices may apply these formalities differently.


Do the final check: titles, dates, and duties must tell one single story: no plot twists, no contradictions, no vague approximations. Consular authorities want precision. 
If you build Option C this way, you’re not submitting “a lot of random papers,” you’re submitting an organized file that reads like a clean, checkable story. And that’s much more digestible for your consulate reviewer to go through. Even if you come prepared, if your packet of documents is messy, the consulate might interpret it as incomplete… and we certainly don’t want that!
One Last Big-Sis Tip (Before You Hit “Submit”)
You now have everything you need to apply through Option C with a clean, consulate-proof file.
One last big-sis reminder: your embassy or consulate is the final decision-maker, and each office can apply extra document rules or format requests, even for the exact same visa. 
So send your consulate a quick email confirming what they want for Option C (especially the “official proof” part).​ 
Do that, and you’ll walk into your appointment calm, prepared, and ready for that “Approved” stamp.`)}
            </div>
          </div>
        </section>

        <section id="chapter-4-closing" className="space-y-8">
          <div>
            <h2 className="serif text-2xl md:text-3xl font-semibold text-black">
              The “Highly Qualified Worker” 60-second overview (so it sticks)
            </h2>
            <div className="mt-4">
              {renderBlock(`That “Highly Qualified Worker” section was long on purpose, because it’s usually the part that makes or breaks approval at the consulate.
Here’s the quick recap to lock in the main ideas.
The 3 routes (pick your best)
Route A — Bachelor’s Degree or Higher: You prove you’re highly qualified with a university degree (the “classic, easiest-to-understand” path when you can document it cleanly).


Route B — Professional qualification: You prove you’re highly qualified with a serious post-secondary qualification (not called a Bachelor’s, but still higher-education level).


Route C — Work experience: No degree? No problem (if you have relevant work experience). In this case you prove you’re highly qualified with solid professional experience matching the required professions and timeframes. This is the “show me what you’ve done” path.

We’ve said it before and we’ll say it again: your consulate/embassy is the final boss. They have the power to ask for extra documents, specific formats, or “random consulate requirements.”
Contact them in writing—or, best case, confirm in person—and verify exactly what they want you to bring to your appointment.
A Note on Regulated Professions and Italian Authority Recognition
If you work in a regulated profession—such as an architect, structural engineer, lawyer, or psychologist—you should know that some consulates may ask about an official recognition document from the applicable Italian regulatory authority (“albo professionalis”).
However, this is usually not required for the visa if you already have a degree or sufficient work experience. This attestation becomes relevant mainly if: 
You plan to perform regulated professional services for Italian clients or within Italy (for example: designing a building, certifying electrical work, etc…) 
Your consulate specifically requests it as verification of your qualifications (rare)
Important distinction: Not all professionals in regulated fields need this. For example, a software engineer working remotely for foreign clients does not need an albo registration. Their degree or work experience path is sufficient.
For your specific situation: If your profession might trigger this requirement, confirm with your consulate before investing time and money in obtaining Italian regulatory recognition. Obtaining this attestation from abroad is often time-consuming and often not necessary for remote work with clients outside Italy.
You’ve just conquered the hardest part of the bureaucracy. You’ve proven your brain and skills are valuable to the Italian authorities, yay!
Now you just need to prove your bank account is stable. 
Next up: The Money.
Money talks, money talks…`)}
            </div>
          </div>
        </section>
      </>
    ),
  },

  {
    slug: "other-requirements",
    title: "The Other Requirements That Matter",
    description: "The details applicants often underestimate.",
    content: `
Beyond headline eligibility, there are secondary requirements that still shape outcomes.

This section covers those often-overlooked details and how to prepare for them.
    `,
  },
  {
    slug: "remote-work-only",
    title: "Remote Work Only",
    description:
      "Why the visa is specifically for remote workers and how that changes your application.",
    content: `
This visa is not a general relocation visa.

It is tied to remote professional activity, and your application needs to make that unmistakably clear.
    `,
  },
  {
    slug: "perfect-packet-strategy",
    title: "The Perfect Packet Strategy",
    description:
      "How to assemble a clean, convincing, consulate-friendly application packet.",
    content: `
This chapter is about presentation, coherence, and strategic assembly.

A strong application is not just about having documents — it is about making the entire packet feel clean, complete, and easy to evaluate.
    `,
  },
];

function renderBlock(text: string) {
  return (
    <div className="whitespace-pre-line sans text-[16px] leading-[1.95] text-black/78">
      {text}
    </div>
  );
}

function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

function getChapterIndex(slug: string) {
  return chapters.findIndex((chapter) => chapter.slug === slug);
}

export default async function PremiumGuideChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = await cookies();
  const rawSession = cookieStore.get("nm_session")?.value;

  if (!rawSession) {
    redirect("/checkout/cancel");
  }

  const sessionHash = sha256(rawSession + process.env.SESSION_SECRET!);

  const { data: session } = await supabaseAdmin
    .from("sessions")
    .select("id, entitlement_id, expires_at, revoked_at")
    .eq("session_hash", sessionHash)
    .single();

  if (!session || session.revoked_at) {
    redirect("/checkout/cancel");
  }

  if (new Date(session.expires_at).getTime() < Date.now()) {
    redirect("/checkout/cancel");
  }

  const { data: entitlement } = await supabaseAdmin
    .from("entitlements")
    .select("id, product, expires_at, revoked_at")
    .eq("id", session.entitlement_id)
    .single();

  if (!entitlement || entitlement.revoked_at) {
    redirect("/checkout/cancel");
  }

  if (new Date(entitlement.expires_at).getTime() < Date.now()) {
    redirect("/checkout/cancel");
  }

  const { slug } = await params;
  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  const chapterIndex = getChapterIndex(slug);
  const previousChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter =
    chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#FBF8F2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="h-fit rounded-[24px] border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Private guide
          </p>

          <h2 className="serif mt-3 text-2xl font-semibold text-black leading-tight">
            The Nomadissimi Digital Nomad Visa Master Guide
          </h2>

          <div className="mt-6 space-y-2">
            {chapters.map((item, index) => {
              const isActive = item.slug === chapter.slug;

              return (
                <Link
                  key={item.slug}
                  href={`/premium/guide/${item.slug}`}
                  className={`block rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? "bg-[#4B5D44] text-white shadow-[0_12px_30px_rgba(75,93,68,0.22)]"
                      : "bg-[#FBF8F2] text-black/70 hover:bg-white"
                  }`}
                >
                  <p className="sans text-[11px] uppercase tracking-[0.18em] opacity-60">
                    Chapter {index + 1}
                  </p>
                  <p className="serif mt-1 text-[18px] leading-snug">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Chapter content */}
        <section className="rounded-[28px] border border-black/10 bg-white/70 p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <p className="sans text-xs tracking-[0.22em] uppercase text-black/45">
            Chapter {chapterIndex + 1}
          </p>

          <h1 className="serif mt-3 text-3xl md:text-5xl font-semibold tracking-[0.01em] text-black leading-tight">
            {chapter.title}
          </h1>

          {chapter.description ? (
            <p className="sans mt-4 text-[16px] md:text-[17px] leading-[1.8] text-black/60 max-w-3xl">
              {chapter.description}
            </p>
          ) : null}

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <article className="mt-8 max-w-3xl">
            <div className="space-y-6 sans text-[16px] leading-[1.95] text-black/78 whitespace-pre-line">
              {chapter.content}
            </div>
          </article>

          <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {previousChapter ? (
                <Link
                  href={`/premium/guide/${previousChapter.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF8F2] px-5 py-3 text-black/70 transition hover:bg-white"
                >
                  ← {previousChapter.title}
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div>
              {nextChapter ? (
                <Link
                  href={`/premium/guide/${nextChapter.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
                >
                  {nextChapter.title} →
                </Link>
              ) : (
                <Link
                  href="/premium/guide"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4B5D44] px-5 py-3 text-white shadow-[0_14px_40px_rgba(75,93,68,0.25)] transition hover:bg-[#3E4E38]"
                >
                  Back to guide home →
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
