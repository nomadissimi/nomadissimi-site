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
          <div>
            <h2 className="serif text-2xl md:text-3xl font-semibold text-black">
              Proof of being a "highly qualified" worker
            </h2>
            <div className="mt-4">
              {renderBlock(
                `This is the part where most people hit the wall not because they’re unqualified, but because Italy only accepts a very specific paper trail that matches the legal definition of a “highly specialized worker.” But what does that even mean? We break it all down here so you don’t walk into your appointment with a packet that looks fine but doesn’t speak Italy’s specific bureaucracy language.`,
              )}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Why this is so hard (and so important)
            </h3>
            <div className="mt-4">
              {renderBlock(
                `Italy doesn’t give this visa to “anyone who works online.” The Digital Nomad/Remote Worker visa is specifically designed for highly specialized workers, and proving that on paper is often the longest, most bureaucratic, and most time-consuming part of the entire application.`,
              )}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Why Italy asks for it
            </h3>
            <div className="mt-4">
              {renderBlock(
                `Because legally, this visa falls under the rules for highly qualified work (in the Italian immigration framework), so the consulate must verify that your professional profile matches the category before they can approve you.`,
              )}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              The 3 qualification routes (pick ONE and follow it)
            </h3>
            <div className="mt-4">
              {renderBlock(`Here’s the big picture: there are three main ways to prove you qualify, and your task is to choose the path that best fits your real situation and that you can document cleanly.
Higher education degree: If you have a Bachelor’s degree (or higher), this is usually the most straightforward route.
Professional qualification: similar to “university education-level” proof. This would be used if you don’t have a traditional Bachelor’s degree, but you have a recognized post-secondary qualification.
Proven Work Experience (often described by consulates as “higher professional qualification + experience”): for people who don’t have the above, but can prove strong professional experience with the right kind of evidence.
In the next subsections, we’ll guide you through each path with a clear, step-by-step document sequence, so you know exactly what to request, in what order, and how to build a complete consulate-ready packet.`)}
            </div>
          </div>
        </section>

        <section id="option-a" className="space-y-8">
          <div>
            <h2 className="serif text-2xl md:text-3xl font-semibold text-black">
              Option A: Higher Education Degree
            </h2>
            <div className="mt-4">
              {renderBlock(`If you have a university degree, you're taking the path most consulates know how to manage best. This is the most common route, and if you qualify for it, this is the one we recommend to follow. 
Why? Because a recognized tertiary degree is the clearest, most straightforward way to prove to Italy that you're “highly qualified.” You don't need to prove years of work experience, and it’s a great choice if you’re a younger applicant. However, you need to validate your degree the right way. 
What "Higher" Actually Means (& Why “3 Years” Matter)
Here's where a lot of confusion starts. When Italy says your degree must be "higher education," they're being very specific. It means your qualification must be at a tertiary level, which translates to a program that took at least three years to complete. 

Think of it this way: if you completed a University degree in 4 years, or a Master's in 2 years after your Bachelor's, you're good. If you did a 2-year diploma program at a technical school, that probably doesn't count, but we'll circle back to that.


The legal language calls this “EQF Level 6 or equivalent,” which is the European qualification framework way of saying "university-level." 
If your degree is a Bachelor's, Master's, or Doctorate from a recognized institution, and it took at least 3 years, you meet the threshold.
The Major or Minor of your degree doesn't matter for this visa. You don't need to be an engineer or a lawyer specifically. A degree in Literature, Marketing, Biology, Business, Graphic Design, or anything else at the tertiary level works, as long as you can prove you actually earned it.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Why Having Your Degree Recognized in Italy Isn't So
              Straightforward
            </h3>
            <div className="mt-4">
              {renderBlock(`Here's the reality: getting your degree officially recognized as “equivalent” to an Italian university degree is not a one-size-fits-all process. 
The number of documents you'll need, the time it takes, and the exact procedure depend on two main variables that you cannot control: where you earned your degree and which consulate you're applying to.
Your consulate didn't invent these rules. Each embassy and consulate follows guidelines from the Italian Ministry of Foreign Affairs (Ministero degli Affari esteri e della Cooperazione internazionale), but they interpret them with some flexibility. The Italian consulate in Houston might ask for different documents than the consulate in Paris. A consulate in Paris might have stricter requirements than one in Mexico City. 
I know, this is bureaucratic chaos, but this is how international education recognition works. Each country's education system is different, and Italy's consulates adapt their approach accordingly (sometimes turning a simple thing into a puzzle). As much as we love Italy, we can’t deny that their bureaucracy is very fragmented. 

So if your degree comes from the United States, you'll have one document pathway. If it's from India, the pathway might be different. If it's from a European country within the Bologna Process, it might be different again. 

In this guide, you’ll find a clear explanation of the documents consulates usually ask for, so if they mention a “dichiarazione di valore” or a “traduzione certificata,” you’ll know what they mean and how to get it.
One thing to remember: the document list isn’t fixed.
Before you start collecting anything, always confirm the exact requirements with your specific consulate.


A lot of people find out mid-process that their consulate wants extra pieces—like a notarized transcript of records (which can take weeks to get from your university), an apostille, or a certified translation done by someone with very specific credentials. Those “small” details can quietly add weeks—or even months—to your timeline if you don’t spot them early.
But here’s the flip side: double-checking requirements with your specific consulate can bring pleasant surprises, too. You might learn they don’t require apostilles, or they don’t want a “certified translation” at all. When that happens, you save time, money, and stress—and you can focus only on the items this guide actually applies to.
This is exactly why Nomadissimi exists. Because we've seen the timelines slip, the "come back next time" conversations, and applications get rejected because just a single document was missing or formatted incorrectly. You're not going to be that person!`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              From University to Consulate: The Paper Trail
            </h3>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Diploma + Transcript: Request Them Together
            </h3>
            <div className="mt-4">
              {renderBlock(`​Here’s another big-sis tip you’ll love: when you contact your university, ask for your degree diploma and your transcript of records in the same request, like it’s one single mission. 
This tiny choice saves you time, money, and that horrible “wait… you also need this other paper” moment that tends to happen right when you thought you were done. (Believe me: been there, done that)
Why? Because many applicants request only the diploma, then discover (often too late) that to obtain a “Dichiarazione di Valore” (declaration of value) or a CIMEA statement, the transcript is usually needed to validate the structure and duration of the degree. And the worst part is: the transcript is not always written clearly on some consulate checklists, even though it ends up being essential for the Dichiarazione di Valore/CIMEA step. It’s pretty much a document to obtain another document: a step within another step.
What these documents are (yes, you know… but read this)
You obviously know what a diploma is, but being crystal clear prevents stupid mistakes, and Italian bureaucracy loves stupid mistakes.
Degree diploma (diploma/degree certificate): the official document proving you were awarded the degree (Bachelor/Master/Doctorate), with the University letterhead and logo, your name, and the date of graduation. 
Transcript of records: the university-issued document that shows what you actually studied and confirms the degree is a real “3+ years” higher-education program in a way that a diploma alone sometimes can’t.

To be safe, your transcript should clearly include: 
Your full name (matching your passport), the University name, the degree/program name, dates/period of attendance (or graduation date), and a list of courses/exams with results (grades) and, when available, credits/credit hours or another workload indicator. 
If your university issues both a “full academic transcript” and a “short transcript,” always pick the full one; Italy rarely approves minimalism.​`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              The Golden Rule: Physical Originals Only
            </h3>
            <div className="mt-4">
              {renderBlock(`When the consulate asks for your degree and transcript, there is only one standard that counts: It must be an original document issued directly by the university.
In the world of Italian visas, a "printout" is not a document. It is just a piece of paper.
What they want to see: A physical document created by your university's registrar, usually on official letterhead, often with a raised seal, a watermark, or a wet-ink signature.


What usually fails: A PDF you downloaded from your student portal and printed at home. Even if it says "Official," if you printed it yourself, the consulate will likely reject it as a simple photocopy.
Big-sis Reality Check: We know everything is digital now, but the consulate still lives in a paper world. Even if your university offers an “official” digital document, contact your university and order an official hard copy of your diploma and transcript to be mailed to you.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              What “notarized” means (and why it is not an apostille)
            </h3>
            <div className="mt-4">
              {renderBlock(`Notarization is the crucial first step in making your university documents legally recognized abroad. 
When a document is notarized, a legally authorized public official (like a Notary Public) inspects it, verifies its authenticity, and adds their official seal and signature.
Why does Italy ask for it? Because the Italian consulate needs a way to trust foreign education documents it didn’t issue. Even if you have a real university degree, consulates use formalities like notarization (and the legalization steps that follow) to assess authenticity and reduce fraud risk. They are relying on the notary to tell them: "I have personally verified that this document is genuine, and the signature it has is a legitimate signature."
What it is NOT: A notarization is not an apostille. An apostille is a separate, international stamp (which we will cover in the very next section).


Why you care: In many countries, the government authority that issues apostilles will only stamp a document if it has already been notarized. If you try to skip notarization and jump straight to the apostille step, you will likely get rejected and lose precious time.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              How to notarize your documents
            </h3>
            <div className="mt-4">
              {renderBlock(`How you get notarization depends heavily on your country and on what your consulate accepts, because consular practice is not perfectly uniform worldwide. The safest sequence is:
Ask your university first: Call the Registrar’s office and ask if they can issue a notarized degree diploma or a notarized transcript directly (many universities offer this as a standard service).


The backup plan: If they can’t, ask them to issue a "certified" copy (a sealed transcript or a registrar letter confirming authenticity).


The Notary Public: Only then, if your consulate or your recognition route requires it, take those official university documents to a local Notary Public to have them formally notarized.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              What to bring to the appointment
            </h3>
            <div className="mt-4">
              {renderBlock(`These are some of the most important components of your application:
Your degree diploma: original university-issued document or the most official certified version your university provides (hard physical copy).
Your transcript of records: official transcript, not a screenshot or student-portal printout. You need the authentic version.
One clean photocopy set of both (diploma + transcript), kept in the same order as your originals.
Bring these if your consulate (or your Dichiarazione di Valore/CIMEA route) requires them. It’s smart to confirm before appointment day:
Notarization pages (and copies of them).
Any university cover letter/registrar statement that confirms degree award and transcript authenticity (if your school can issue it).`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Apostille: The International Stamp That Makes Italy Trust You
            </h3>
            <div className="mt-4">
              {renderBlock(`This is one of those steps that sounds weird because it has a mysterious name… but in real life, it’s just a very official stamp.
Yes, it can feel like bureaucracy-on-top-of-bureaucracy (and it kind of is). But you’re not doing it “because Italian authorities love to make applicants suffer.” You’re doing it because this stamp is what helps a foreign document enter an Italian office and be taken seriously.
​Think of an apostille like this: your diploma and transcript are valid in your country… but Italy doesn’t automatically trust that. The apostille is the international “verification jacket” that tells Italy: “Relax, this seal is legit. This signature is real.”`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              What an apostille is (in normal-human language)
            </h3>
            <div className="mt-4">
              {renderBlock(`An apostille is a form of international authentication used between countries that are part of the Hague Apostille Convention (over 120 member countries, including the US, UK, Canada, Australia, and all of the EU).
Think of it like an international "verification jacket" for your document.
An apostille doesn’t evaluate your degree, and it doesn’t “approve” your studies. It simply certifies that the signature or stamp on your document is real and issued by the proper authority. It is the agreed-upon system that lets a foreign document walk into an Italian office and be treated like a serious, valid piece of paper.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Apostille vs. Notarization (The difference)
            </h3>
            <div className="mt-4">
              {renderBlock(`Remember the notarization we just talked about? Here is how they connect:
The Notary verifies that your specific document (and the signature on it) is authentic within your home country.


The Apostille Authority (usually a state or federal government office) verifies that the Notary's signature is authentic, so the document can be trusted internationally.
This is why, in most cases, they are a two-step combo: You get the document notarized first, and then you get the notary's work apostilled.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Legalizzazione vs. Apostille
            </h3>
            <div className="mt-4">
              {renderBlock(`Apostille and “legalizzazione” (legalization) do the same job: they prove a foreign public document is authentic (the signature/seal is real) so Italy can trust it. Which one you need depends on where the document was issued (the document’s “nationality”), not on your passport.
When Apostille is available (Hague Convention countries)
If the country that issued your document is part of the Hague Apostille Convention, you’ll typically use an apostille.
The member list is long, but the big ones include: the USA, all EU countries, the UK, Canada, Australia, Japan, South Korea, New Zealand, Mexico, and many South American countries (for example Argentina, Brazil, Chile, Colombia, and Peru).

In practical terms, you get the apostille from the competent authority in the country that issued the document (for example, a Secretary of State, a Court of Appeal, or a ministry). You don’t go to the Italian consulate for the apostille step itself.

We’ll get into the how-to soon, but you’ve got two common paths: handle it yourself (in person or by mail) or use a third-party apostille service. Either way, the apostille can only be issued by the same competent authority.


When Apostille is not available (non-Hague countries, or limited cases)
If the country that issued your document isn’t part of the Hague Apostille Convention, an apostille isn’t an option—so you’ll usually need consular legalization instead.
This would include the United Arab Emirates, Saudi Arabia, China, Egypt, Lebanon, Iran, and several Southeast Asian countries such as Indonesia, Thailand, the Philippines, and Malaysia.

In practice, the Italian Embassy/Consulate in (or responsible for) the country where the document was issued verifies the signature or seal and adds its own legalization stamp. That’s why this route is often slower and depends on appointments.
Quick example (so it sticks): A diploma issued in the United States typically follows the apostille route, while a diploma issued in Saudi Arabia typically follows the legalization route.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Why they ask for it (and when it’s actually mandatory)
            </h3>
            <div className="mt-4">
              {renderBlock(`Here’s the big-sis truth: apostille requirements can be very different depending on the consulate and on which recognition route you’re using.
Apostille is typically mandatory when:
You are going for a Dichiarazione di Valore (Declaration of Value) (because DV procedures are traditionally linked to legalization/apostille + formal document checks).
Your specific consulate explicitly says that non-EU documents must be “legalized” or “apostilled.” (Some consulates—especially in Europe—apply the strict “EU Blue Card-style” approach).​
Apostille can often be skipped when:
You are using CIMEA and your specific CIMEA “country of education system” requirements don’t ask for apostille (this is common in some cases, but not universal).
Important: It’s not correct to say “CIMEA never needs an apostille.” The correct rule is: CIMEA may or may not require it, depending on your country and your specific case.
Don’t spend money on apostilles until you’ve confirmed whether you’re going through the Dichiarazione di Valore route or CIMEA—and whether your consulate is strict about it.
​What should be apostilled
If apostille is required for your case, apostille both:
Your degree diploma
AND your university transcript of records.
​This is where people mess up: they apostille the diploma (because it feels “more important”), then later discover the transcript must be apostilled too…so they have to repeat the process, lose weeks, and curse Italy in three languages.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Quick pause: do not skip Step 1 (Notarization)
            </h3>
            <div className="mt-4">
              {renderBlock(`Before you even search for an apostille office or service, make sure you’ve completed the previous step: getting your diploma + transcript notarized/certified (in the format your country requires).
In many countries, the apostille authority can only apostille documents that are already properly notarized/certified. This means that if you try to apostille a plain university printout, you may get rejected and lose time.​
That’s why this guide follows a simple, safer method: notarize first, then apostille—in that order.
That said, only in a few lucky cases, your diploma or transcript can be apostilled directly if it was issued or signed in a format the apostille authority accepts without notarization. But that’s rare.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              How to get an apostille
            </h3>
            <div className="mt-4">
              {renderBlock(`The apostille is issued by the competent authority in the same country where your document originates—not by Italy.
The exact office depends on your country and, in some countries, also on the local jurisdiction (state/province/region).


Example (USA-specific): many apostilles are handled at the state level (often via the relevant Secretary of State), while federal documents are handled by the US Department of State.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Which jurisdiction should you use?
            </h3>
            <div className="mt-4">
              {renderBlock(`In many cases, it’s the jurisdiction connected to the public official signature on the document (for example, where it was notarized or issued), 
If your diploma was issued by a university in one place but notarized/certified in another, the apostille is often tied to the authority that can verify the signature/seal you’re apostilling—so always follow the instructions of the apostille office you’re using.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Option 1 (best when doable): Do it yourself in person
            </h3>
            <div className="mt-4">
              {renderBlock(`This is the best option when you can physically reach the competent authority, and they offer walk-in or appointment service.
How to find the right office: search “apostille authority + your country” (and, if your country is federal, add your state/province/region).
Once you find the official page, confirm 4 things before you go: accepted document format (original vs certified/notarized), fees/payment method, booking rules, and processing time.
It is best to book an appointment online through the Secretary of State's website for in-person service.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Option 2 (best when time isn’t tight): Do it yourself by mail
            </h3>
            <div className="mt-4">
              {renderBlock(`This is often the second-best route when you can’t go in person (or you live far away) and you can wait for shipping + processing time.​
Yes—you usually mail to the same competent authority you would visit in person (same office, just a different submission method), unless that authority has separate mail-in instructions or a central processing address.​
A typical mail-in packet includes: your documents, the authority’s request form, payment, and a tracked/prepaid return envelope—always following that office’s exact checklist.
Let’s go through a more detailed example to help illustrate this further. Suppose Laura graduated from The University of Texas at Austin but she lives in Dallas. Here’s a step-by-step process on how she would request an apostille for her University Diploma. In this case, the competent authority would be the Texas Secretary of State. She would first:
Get the original diploma from the University Registrar’s Office.
Get it notarized by a Texas Notary Public. Remember that universities will notarize their own diplomas or provide certified copies for apostille purposes, so this might already be part of step 1 (it would need to be requested explicitly)
Complete the Request Form: Fill out the Form 2102 - Request for Universal Apostille, available from the Texas Secretary of State's website.
Prepare Return Shipping: Include a self-addressed, postage-paid return envelope (FedEx or UPS preferred) for the apostilled document. Yes, it’s an envelope within the big envelope she’d be sending. 
Pay the Fee: there’s usually a small fee when processing directly with the Texas Secretary of State. It would be approximately a $15 fee per document (check, money order, or credit card). For the most recent updates and specific fees, we recommend checking the Texas Secretary of State website. This is an example of how the process works, at the time of writing this guide. 
Submit the full request and mail it. Send everything to the Authentications Unit.
Big-sis tip: Send your documents with the most reliable courier you can. Choose a certified mail service that provides you with a tracking number. Paying a little extra beats the nightmare of losing your original paperwork and having to restart the process.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Option 3: Use an apostille service (third party)
            </h3>
            <div className="mt-4">
              {renderBlock(`This is the “hands-off” option when you can’t go in person, you’re short on time, or you want to avoid figuring out the correct office and submission rules (but it costs more).​
Apostille services do not “create” apostilles themselves. What they do is that they submit your documents to the correct competent authority on your behalf and manage shipping/tracking.
To choose a legit service, look for transparent pricing, a real physical address, clear timelines, and a clear explanation of which authority they’ll file with (and avoid vague sites that don’t say where your documents are going).`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Quick check before you apostille
            </h3>
            <div className="mt-4">
              {renderBlock(`Before you pay anything, ask yourself:
Am I doing the Dichiarazione di Valore or CIMEA route?
Does my consulate explicitly require apostille/legalization? Most likely yes.
If I’m going the CIMEA route: do my CIMEA country requirements require an apostille in my specific scenario?
Do I have both documents ready (diploma + transcript) and notarized, so I can apostille them in one go?
This is how you avoid the classic “I apostilled the wrong thing” tragedy.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Please don’t “tidy it up”
            </h3>
            <div className="mt-4">
              {renderBlock(`When you finally obtain your apostille, it will be physically attached to your diploma/transcript (stapled, glued, or bound as one packet).
Do not detach it for any reason—not to scan it “more nicely,” not to re-order papers, not even to put it in a different folder.
If you separate the apostille from the document it certifies, you risk destroying its bureaucratic value and making it no longer valid. The apostille remains valid only if it is attached to that specific document.`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              What to bring to the appointment
            </h3>
            <div className="mt-4">
              {renderBlock(`Bring these items to your visa appointment (traditional paper world, remember):
Your degree diploma (notarized official paper version).
Your transcript of records (notarized official paper version).
The apostille of both documents (if it applies to your route/consulate).
Photocopies of everything (because many consulates want originals + copies).`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              Certified Translation: when Italy says “Ok… but in Italian.”
            </h3>
            <div className="mt-4">
              {renderBlock(`You can have the perfect document… and still get the dreaded Italian bureaucracy face: “Bellissimo. Now… in Italian.”


Certified Translation (yes, more certifications)
When Italy says “certified translation,” they mean an Italian translation that a real person officially stands behind. It basically means that it was done by someone who takes responsibility that the translation is faithful to the original text (in Italy this is referred to as “traduzione giurata/asseverata”).
It’s not enough to speak “decent” Italian, since this is more about having a translation that an authority accepts as official.
Here’s the sneaky part: some consulates accept a simple (non-sworn) translation for the Dichiarazione di Valore (Declaration of Value), and then they authenticate it themselves. However, other consulates require the sworn/”asseverata” version before you apply, so it’s best to not assume.
Do you really need it?
The golden rule to keep in mind: the consulate is the final boss, and yes, it can even change rules mid-game.
You need a certified translation if:
The specific consulate you’re applying through lists it as a required document for the visa.
You’re doing the Dichiarazione di Valore (DV), and that specific consulate requires translations (and sometimes specifically sworn/certified ones) as part of the DV request (a step within a step… we will dig into the DV in the next section).
​You often don’t need it if:
You’re using CIMEA and your documents are already in English (CIMEA is often more flexible on translations, but you still must check your case).
Which documents usually need it
If a certified translation is required, the components that usually require it are:
Your notarized diploma.​
The apostille pages attached to the diploma
Your notarized transcript of records.
The apostille pages attached to the transcript
How to get it
There are 3 realistic paths. Pick the one your consulate accepts.
Through an Italian consulate (often the DV consulate)
Some consulates handle the translation/certification inside their DV workflow, or they authenticate the translation as part of issuing the DV.
This is why the smartest question to ask is: “Do you require a sworn/certified translation before I submit the DV? However, each consulate may charge a fee per page.
Sworn translation in Italy (“Tribunale” route)
Yes, it’s possible: a translator in Italy can prepare the Italian translation and then swear it at a Tribunal.
This is often the cheapest “official-looking” solution because the main extra cost is about ~€20 (you just need to buy a bunch of “marca da bollo” i.e. some Italian stamps).

This way has two problems that you should evaluate:
Confirm your consulate accepts an Italy-issued sworn translation for the visa application and/or for the DV.
Second, you’ll need a truly reliable person in Italy to handle the process using your original physical documents (and keep them safe).
Professional translator (local or online)
This is the most flexible option when the consulate has specific rules on who can translate (or when timing is tight).
The key is not “find a translator,” or “find someone who speaks Italian well.” What you would need to do in this case is to find a certified translator who can give you the format your consulate accepts (wording, certification statement, signature, stamp, attachments).
“Please don’t tidy it up.” (We mean it)
Repeat after me: keep each set together!
If an office staples it, binds it, or seals it, it stays that way: diploma + transcript + notarization + apostille + translation, all as one packet.
 → Don’t unstaple apostilles or pull pages out to “make it cleaner.” 
That’s how you can accidentally destroy the validity of the packet and ruin everything you’ve done up to that point… better not risk it.
Don’t translate yet (seriously)
​Here’s the good news: in some cases, the certified translation is not requested at all—so you might be able to skip it completely and save time and money. The not-so-good news is that whether you can skip it depends on the exact consulate rules and on the method you choose to validate your degree.
So don’t translate “just in case” yet. First, go to the next section and decide your path: CIMEA or Dichiarazione di Valore (DV). Once you’ve made that choice, come back here and apply the correct translation strategy for your route (because DV procedures often involve Italian translations in some form, while CIMEA is usually more flexible—especially when your documents are already in English).`)}
            </div>
          </div>

          <div>
            <h3 className="serif text-[24px] font-semibold text-black">
              CIMEA vs Dichiarazione di Valore (choose one)
            </h3>
            <div className="mt-4">
              {renderBlock(`CIMEA and the “Dichiarazione di Valore” (“Declaration of Value” in English) are the two main “degree-validation” routes that consulates use to accept your foreign university qualification for the Digital Nomad / Remote Worker visa.​
Think of this as the moment your degree stops being “a foreign document” and becomes “a document Italy can read, understand, and classify.”
For the visa, many consulates accept either a CIMEA statement or a Dichiarazione di Valore (DV), but which one is best depends on your consulate and your country of education.
What is it? The Dichiarazione di Valore (DV) is issued by an Italian embassy/consulate in the country where the qualification was obtained, and it describes the value of that qualification in its home system.​
CIMEA provides standardized statements (usually faster and more “remote-worker friendly”).​
Here’s the simple decision logic:
If your consulate clearly says “CIMEA accepted” → CIMEA is usually the smoothest route.​
If your consulate strongly prefers DV (“EU Blue Card style” consulates) → plan for the Dichiarazione di Valore route early, because it often comes with apostille + certified Italian translations and longer timelines.
CIMEA: the modern, online “degree translator”
CIMEA (Centro di Informazione sulla Mobilità e le Equivalenze Accademiche) is basically Italy’s official “degree translator.”
CIMEA is Italy’s ENIC-NARIC centre (yes—two acronyms, but they matter), which means it sits in the official European network for evaluating foreign degrees.
In simple terms, CIMEA checks your foreign qualification and then issues official statements that Italian institutions (including consulates) can use to understand what your degree is in Italy-equivalents. More than the language itself, it’s about the essence of what professional training you have obtained and explaining it in a way that Italy would understand it.
It operates through its online platform DiploMe, where you apply, upload documents, and receive the outcome digitally.


What CIMEA issues (and why it matters)
For this visa path, CIMEA can issue two different statements, and your consulate may ask for one or for both: the Statement of Comparability and the  Statement of Verification.

Most of the time, the Statement of Comparability is the “minimum” because it tells Italy what level your degree is.

The Statement of Verification is requested when the authority also wants an extra layer of comfort that your diploma is authentic (not just comparable).
Big-sis tip: always follow your consulate’s checklist and email them, asking if they want Comparability only or Comparability AND Verification.

Important to know: these statements support an assessment, but they are not “formal recognition” that automatically binds every institution—consulates still have discretion.​

How CIMEA works (the flow)
Create a DiploMe account and select the service you need (comparability, or comparability + verification, depending on what your consulate expects).​
Upload the core documents (usually: diploma + full transcript + ID), in the format requested for your “country of education system.”​
If Verification is required, be ready for an extra authenticity step: in many cases, CIMEA may require an official transcript to be sent directly by the university (this is one way CIMEA verifies authenticity without relying on apostilles in many scenarios).​
Receive the statement(s) and include them in your visa packet as proof that your degree has been evaluated in an Italy-readable way.
Why CIMEA could be the best choice
CIMEA is usually the most practical route for non-Italian speakers because the process is online and produces standardized documents used widely by Italian institutions.
In many common scenarios (especially for English-language degrees like those from universities in the United States), CIMEA often avoids the “apostille + sworn Italian translation” spiral that Dichiarazione di Valore procedures are traditionally anchored to.
That’s why many applicants use CIMEA as the fastest path to a clean, consulate-friendly proof of qualification, when their consulate accepts it.

CIMEA has a cousin: meet the “Dichiarazione di Valore”
Now that you’ve met CIMEA (the modern, online “degree translator”), it’s time to meet its older, more traditional cousin: the Dichiarazione di Valore (Declaration of Value or DV for short).​
It’s not “better” or “worse” by nature. Sometimes it’s simply the route your specific consulate expects, so it becomes the safest path to approval.
What does the DV prove?
The DV (Dichiarazione di Valore = “Declaration of Value”) is a document issued by an Italian embassy/consulate that explains what your foreign degree means in the education system where you earned it.

In plain English, it helps Italy understand if your degree is a real university-level qualification, how long it is, and what “level” it has in that country (so your visa officer can classify you as “highly qualified” on paper, not by mere claims).
It’s widely used in Italy for recognition procedures and also for highly skilled immigration-style checks, which is why it shows up in Digital Nomad/Remote Worker visa applications too.
When the DV is the required choice
The DV is usually the right move when your consulate is “strict-mode” and explicitly asks for a DV (or clearly follows the more formal EU Blue Card-style document approach).
Safer option: if your consulate is unclear or inconsistent, DV is often the “classic” format they’re most used to seeing, which can reduce back-and-forth requests.

Big-sis wisdom: your goal is not to win an argument with the checklist. Your goal is to walk out with that visa sticker.
Who issues the DV (with examples)
Here’s the trap: the DV is typically issued by the Italian embassy/consulate in the country/state where the degree was obtained (where the university is), not necessarily where you live now.
Let’s look at some examples (so it sticks):
Sofía lives in Minneapolis, but she got her degree from Caltech in Pasadena, California—so she’ll request her DV through the Italian Consulate in Los Angeles.
Pro tip: You can find the right Italian embassy/consulate for your city using the official link to be super sure: 
https://serviziconsolarionline.esteri.it/ScoFE/services/consulate/find-consulate.sco
DV method (simple steps)
This guide is about method—so here’s the full Dichiarazione di Valore path, clean and simple.
Collect your core school documents: diploma + transcript, original and notarized.
Apostille your diploma AND your transcript. 
Check whether your consulate also requires a certified translation—and if they do, ask whether they can process it together with the DV.
 If they want a certified translation but don’t handle it in-house, follow the instructions in the dedicated section above to get it done correctly.
Submit the DV request following the exact instructions of the consulate that issues DV for your degree’s location (process can be appointment-based, mail-based, or both—depending on the office).
Note: In rare cases, you may not need notarization and/or an apostille and/or a certified translation to get the DV. To avoid wasting time and money, double-check the DV requirements on the website of the consulate where you’ll submit your request before you start gathering documents. However, just keep in mind that if they do require it, the Dichiarazione di Valore is a document that takes a while to obtain, given all the “substeps” (notarizing the diploma, getting the apostille, notarizing the transcript and apostilling them, etc…). It’s best to plan ahead to avoid delays. 
​
Final choice: CIMEA vs Dichiarazione di Valore (quick summary)
In most cases, both CIMEA and Dichiarazione di Valore can do the same job: make your foreign degree “readable” for Italy. That’s why the consulates ask for them as part of the visa process. The Digital Nomad visa and the Remote Worker visas are for “highly skilled” professionals that work online, not someone who has no university degree and no work experience and started making money online last month. 
The path to take depends on what your consulate explicitly asks for. If they don’t explicitly state it, go through the Dichiarazione di Valore route.
CIMEA (DiploMe) — best when you want the smooth route and the consulate explicitly accepts it:
Usually faster and fully online.​
Often fewer formalities than DV (less apostille/translation pain, depending on your case and document language).​
Can be very clear for the visa officer because it places your degree inside an Italian/EU framework.​
Dichiarazione di Valore — best when your consulate is “strict-mode” or unclear:
It’s the classic consular route, widely recognized and often preferred by more rigid consulates.​
Commonly comes with more steps (transcript + apostille + Italian certified translation rules).​
Issued by the Italian consulate/embassy in the country where the degree was obtained, so logistics can be less convenient.
Two big-sis warnings (so you don’t waste weeks)
CIMEA is NOT a blanket shortcut either: requirements can change by country, and sometimes the “Verification” component requires the university to send transcripts directly, which can slow things down if your school takes a while to process these things.​
If your consulate asks for a “certified translation,” sometimes it can be smart to coordinate DV + certified translation through the same office workflow (if the certified translation is a service that is available at the consulate).
​
Option A (Higher Education Degree): The Final Wrap-Up
I know, reading (and applying) this whole section takes real focus, because it asks you to hold a lot of moving pieces in your head at the same time: the degree rules, the consulate’s habits, and the “paper format” Italy expects. 
But here’s the good news: you don’t have to keep all of that in your head anymore. You just need the order—one step at a time—and this guide gives you that roadmap.

Here are the core concepts to remember:

What Italy wants to see: 
A real tertiary degree (typically at least 3 years) that can be clearly understood and “classified” in Italy’s system.

Start from the right documents (always): 
Request both your diploma certificate and your full transcript of records (NOT a portal printout), because the transcript is often essential for either validation route.

Make the documents “trustworthy” internationally (when required): 
Depending on your country/consulate, you may need notarization and then an apostille—and if they apply, do it for both diploma and transcript.

Translation is not automatic: 
Certified Italian translation is sometimes required (especially in DV-style workflows), but sometimes it’s not—so don’t translate “just in case” until you know your route and your consulate’s rule.

Choose one validation route (this is the key fork):
CIMEA = usually the smoother, online path if your consulate accepts it (often fewer formalities, especially with English documents).

Dichiarazione di Valore (DV) = the more traditional consular route, often requested by stricter consulates and more commonly tied to apostille + certified translation requirements.

Assemble one “easy-to-check” packet: 
Keep your diploma + transcript + any certification/notarization/apostille/translation pages together, in the right order, so the officer can confirm your qualifications at a glance (instead of going on a scavenger hunt in your folder).
And repeat after me: if an office stapled it, sealed it, or bound it—leave it alone. Never separate what they put together.

Now you have everything you need to turn your degree into proof that Italy can actually read and accept. Follow the sequence, keep your packet clean, and don’t waste energy guessing what’s next: you already have the roadmap. And if anything gets confusing, you’re not supposed to muscle through alone: Nomadissimi is your big sister on the bureaucratic battlefield, and we’re walking you to the “Approved” visa stamp.`)}
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
