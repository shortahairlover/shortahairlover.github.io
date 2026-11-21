# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML, CSS and vanilla JS with no build step. Chosen because it is a single portfolio page that should host for free on GitHub Pages, load fast, and stay editable without Node tooling. The live GitHub list is fetched client-side from the public GitHub REST API.

## Users

The site is the owner's personal persona: a self-authored space that shows who Naufal is, what he builds, and what he cares about, in his own voice and taste. It is made for the owner first and for anyone who lands on it (peers, community, collaborators, and recruiters as one audience among many), who should come away knowing the person, not just the CV. Changed on 2026-11-21 from a recruiter-first target at the owner's request.

## Product Purpose

A personal portfolio and landing page for Naufal Rafif Hidayat (GitHub `shortahairlover`), an undergraduate Informatics student at Telkom University based in Sidoarjo, East Java. Open to work in Jakarta, on-site or hybrid. Success means a visitor leaves with a distinct picture of the person (identity, interests, the cloud and full-stack work), explores at least one project, and can find him on LinkedIn or GitHub.

## Positioning

Cloud Engineer with Full-stack Developer skills. Cloud proof lives in experience rather than public repos: an AWS EC2 automation pipeline at Telkomsel and a Google Cloud course at Dicoding. Full-stack proof lives in the public repos and a 2022 frontend internship. The LinkedIn About frames the interest as integrating cloud infrastructure and modern web development to remove manual work and streamline business operations.

## Capabilities and Constraints

- Featured projects are curated by hand with detailed cards; the remaining public repositories render live from the GitHub API below them.
- Private repositories (for example `telkomsel_bot`) are never shown.
- The GitHub API is rate-limited without auth (60 requests per hour per IP), so the live list needs a cached or static fallback and an error state.
- Contact (all public, confirmed by the owner 2026-11-21): LinkedIn https://www.linkedin.com/in/naufal-rafif-hidayat-80309a2a2/, GitHub https://github.com/shortahairlover, email naufalraf21@gmail.com, Instagram @naufalrafh (https://www.instagram.com/naufalrafh/).
- Undecided: CV file.

## Brand Commitments

- Theme pinned by the owner: the cyberpunk aesthetic of the game Cyberpunk 2077. It is rendered as an original world in that genre: no game logos, wordmarks, characters, faction or corporation names, official fonts, or copied game art.
- No emoji anywhere.
- Persona: alias "shorthairlovr" leads, real name Naufal Rafif Hidayat beside it. Personal motto (changed by the owner 2026-11-21, replacing "Audentes Fortuna iuvat"): the Johnny Silverhand line from Cyberpunk 2077, "Swap meat for chrome, live a BD fantasy, whatever, but at the end of it all, it's the code you live by that defines who you are." Always quoted verbatim and attributed to Johnny Silverhand, Cyberpunk 2077; it is a quotation, not character art, so the no-characters rule still holds for imagery. Interest outside code: games.
- Page language: English.
- Portrait: generated, not the owner's photo.
- Visual assets are generated (authored SVG, canvas, CSS) rather than stock or copied.

## Evidence on Hand

Experience (from the owner's LinkedIn profile, 2026-11-21):
- Telkomsel, internship, IT Unified Platform Adoption and Integration, Jul to Sep 2026, South Jakarta, on-site. Built a cloud-hosted automation pipeline on an AWS EC2 instance integrating Telegram bots with Microsoft SharePoint for data transmission. Skill: AWS. (The related repo `telkomsel_bot` is private: describe it, never link it.)
- Coding Camp powered by DBS Foundation, apprenticeship, Data Scientist, Feb to Jun 2026, remote.
- Dicoding Indonesia, apprenticeship, Community Contributors, Dec 2025 to Feb 2026, hybrid. Learning Basic of Google Cloud, certificate on file (file not yet supplied). Skill: GCP.
- Sinar Abipraya Voyage, internship, Frontend Web Developer, Jul to Dec 2022, Central Jakarta, hybrid. Responsive front-ends in HTML, CSS and JavaScript with UI/UX designers. Skills: React.js, JavaScript.

Public repositories (as of 2026-11-21):
- BookRecommender-CFvsMF: user-based CF, item-based CF and matrix factorization on Goodbooks-10k (Jupyter)
- MovieRecommender-CFvsMF: the same comparison on MovieLens 100K (Jupyter)
- ddpm-kelompok11: mini class-conditional DDPM from scratch on MNIST and CIFAR-10, a group project (Python)
- sipdana-v3 (TypeScript), tugas4-web (Blade), LyricsHub (JavaScript), Wellnez-app (Java), TugasLayout1 (C++), week-8-cci (JavaScript, dynamic routing)
- lyrics.ovh is a fork and is not original work.

Figures sourced from the repository READMEs (read 2026-11-21), usable on the site:
- ddpm-kelompok11: FID 16.43 on CIFAR-10 (5,000 samples, DDIM-100, guidance w = 2); U-Net 8.95M params (CIFAR-10), 1.62M (MNIST); DDIM-100 about 10x faster than DDPM-1000 at equal FID; trained on an RTX 4050 Laptop 6 GB; Naufal was team lead (Prompt Engineer and LLM Navigator) of four.
- MovieRecommender-CFvsMF: 5-fold CV, matrix factorization best on all metrics, RMSE 0.9186, NDCG@10 0.9187.
- BookRecommender-CFvsMF: subset of 84,139 ratings, 996 users, 2,618 books, 96.8% sparsity; item-based CF best on all metrics, RMSE 0.8649, NDCG@10 0.9119.
- sipdana-v3: README lists Gemini receipt scanning, JWT auth, dashboard with Chart.js, transactions with database-transaction balance updates, saving goals; stack TypeScript, React, Node.js, MySQL; live at https://sipdana-v3.vercel.app.

Absent and must not be fabricated: public cloud repositories, certifications beyond the Dicoding course, testimonials, metrics, or star counts beyond what the API returns.

## Product Principles

1. Persona first: the page is an expression of the owner, so voice, taste and the cyberpunk world lead; the role and contact stay findable but never flatten the identity into a CV.
2. Show real work: every claim links to a repository.
3. Never inflate: missing cloud evidence is filled by the owner, not invented.
4. The page stays usable and accessible even with effects turned off.

## Accessibility & Inclusion

Honor `prefers-reduced-motion` (no glitch, flicker or scanline motion), keep body text at WCAG AA contrast against neon fields, and never put content inside effects that flash more than three times per second.
