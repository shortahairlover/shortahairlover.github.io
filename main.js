(() => {
  "use strict";

  const GH_USER = "shortahairlover";
  // ?motion=off settles every entrance (used for full-page captures; also a manual opt-out)
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || new URLSearchParams(location.search).get("motion") === "off";
  const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#/\\<>_=+";

  /* ------------------------------------------------------------ data */
  const LOADOUT = [
    {
      group: "Cloud",
      items: [
        { id: "aws", code: "EC2", name: "AWS EC2", tier: "field",
          body: "Hosted the automation pipeline I built during my Telkomsel internship: an always-on instance running the bots and the jobs that move data between Telegram and SharePoint.",
          used: [{ t: "Telkomsel internship, Jul to Sep 2026" }] },
        { id: "gcp", code: "GCP", name: "Google Cloud", tier: "course",
          body: "Learned the platform fundamentals through Dicoding's Learning Basic of Google Cloud course, certificate earned.",
          used: [{ t: "Dicoding Indonesia, Dec 2025 to Feb 2026" }] },
        { id: "integ", code: "API", name: "Bot + SharePoint integration", tier: "field",
          body: "Wired Telegram bots into Microsoft SharePoint so data could flow without anyone copying it by hand.",
          used: [{ t: "Telkomsel internship, private repo" }] },
      ],
    },
    {
      group: "Full stack",
      items: [
        { id: "ts", code: "TS", name: "TypeScript", tier: "build",
          body: "The language of SipDana, end to end.",
          used: [{ t: "SipDana", href: "https://github.com/shortahairlover/sipdana-v3" }] },
        { id: "react", code: "RX", name: "React", tier: "field",
          body: "Shipped responsive front-ends with UI/UX designers during my 2022 internship, and built SipDana's dashboard with it.",
          used: [{ t: "Sinar Abipraya Voyage internship, 2022" }, { t: "SipDana", href: "https://github.com/shortahairlover/sipdana-v3" }] },
        { id: "node", code: "ND", name: "Node.js", tier: "build",
          body: "SipDana's backend: JWT auth, transactions that keep balances consistent, and the Gemini receipt-scanning flow.",
          used: [{ t: "SipDana", href: "https://github.com/shortahairlover/sipdana-v3" }] },
        { id: "sql", code: "SQL", name: "MySQL", tier: "build",
          body: "Relational storage for SipDana, with database transactions so a balance never drifts from its records.",
          used: [{ t: "SipDana", href: "https://github.com/shortahairlover/sipdana-v3" }] },
        { id: "next", code: "NX", name: "Next.js", tier: "build",
          body: "The framework behind LyricsHub.",
          used: [{ t: "LyricsHub", href: "https://github.com/shortahairlover/LyricsHub" }] },
        { id: "php", code: "PHP", name: "Laravel / Blade", tier: "course",
          body: "Server-rendered web work in Laravel with Blade templates for coursework.",
          used: [{ t: "tugas4-web", href: "https://github.com/shortahairlover/tugas4-web" }] },
        { id: "java", code: "JV", name: "Java", tier: "build",
          body: "The backend module of Wellnez.",
          used: [{ t: "Wellnez", href: "https://github.com/shortahairlover/Wellnez-app" }] },
        { id: "web", code: "WEB", name: "HTML / CSS / JS", tier: "field",
          body: "Where I started. Engineered and maintained responsive front-ends professionally in 2022. This page is hand-written in it too.",
          used: [{ t: "Sinar Abipraya Voyage internship, 2022" }] },
      ],
    },
    {
      group: "Data and ML",
      items: [
        { id: "py", code: "PY", name: "Python", tier: "field",
          body: "My default for anything that touches data or automation: the Telkomsel bots, the diffusion model, the recommender notebooks.",
          used: [{ t: "Mini DDPM", href: "https://github.com/shortahairlover/ddpm-kelompok11" }, { t: "Telkomsel internship" }] },
        { id: "torch", code: "PT", name: "PyTorch", tier: "build",
          body: "Wrote a class-conditional DDPM with classifier-free guidance from scratch, reaching FID 16.43 on CIFAR-10.",
          used: [{ t: "Mini DDPM", href: "https://github.com/shortahairlover/ddpm-kelompok11" }] },
        { id: "recsys", code: "CF", name: "Recommender systems", tier: "build",
          body: "User-based CF, item-based CF and matrix factorization, evaluated with 5-fold cross-validation on MovieLens and Goodbooks.",
          used: [{ t: "Movie Recommender", href: "https://github.com/shortahairlover/MovieRecommender-CFvsMF" }, { t: "Book Recommender", href: "https://github.com/shortahairlover/BookRecommender-CFvsMF" }] },
        { id: "ds", code: "DS", name: "Data science", tier: "course",
          body: "Five-month Data Scientist apprenticeship track.",
          used: [{ t: "Coding Camp powered by DBS Foundation, 2026" }] },
      ],
    },
  ];

  const TIER_LABEL = { field: "Field-tested", build: "Built with", course: "Trained" };

  const RUNLOG = [
    {
      group: "Main jobs",
      items: [
        { id: "tsel", name: "Telkomsel", date: "2026", sub: "IT Unified Platform Adoption and Integration, internship",
          meta: ["Jul to Sep 2026", "South Jakarta", "On-site"],
          body: "Built a cloud-hosted automation pipeline on an AWS EC2 instance that integrates Telegram bots with Microsoft SharePoint for streamlined data transmission.",
          list: ["AWS EC2", "Telegram bots", "Microsoft SharePoint", "Python"] },
        { id: "sav", name: "Sinar Abipraya Voyage", date: "2022", sub: "Frontend Web Developer, internship",
          meta: ["Jul to Dec 2022", "Central Jakarta", "Hybrid"],
          body: "Engineered and maintained responsive web front-ends in HTML, CSS and JavaScript, and partnered with UI/UX designers to turn visual concepts into working interfaces.",
          list: ["React.js", "JavaScript", "HTML / CSS"] },
      ],
    },
    {
      group: "Side jobs",
      items: [
        { id: "dbs", name: "DBS Coding Camp", date: "2026", sub: "Data Scientist, apprenticeship",
          meta: ["Feb to Jun 2026", "Bandung", "Remote"],
          body: "A five-month Data Scientist track with Coding Camp powered by DBS Foundation.",
          list: ["Data science"] },
        { id: "dicoding", name: "Dicoding Indonesia", date: "2026", sub: "Community Contributors, apprenticeship",
          meta: ["Dec 2025 to Feb 2026", "Bandung", "Hybrid"],
          body: "Completed Learning Basic of Google Cloud and earned the course certificate.",
          list: ["Google Cloud Platform"] },
      ],
    },
    {
      group: "Base of operations",
      items: [
        { id: "tel-u", name: "Telkom University", date: "Now", sub: "Undergraduate, Informatics, School of Computing",
          meta: ["Bandung", "In progress"],
          body: "Coursework that turned into real projects: recommender systems, a diffusion model built from scratch, and web apps in Laravel, Next.js and Java.",
          list: ["Recommender Systems", "Generative AI from scratch", "Web programming"] },
      ],
    },
  ];


  /* Figures below are quoted from each repository's README (read 2026-11-21). */
  const GIGS = [
    {
      group: "Full stack",
      items: [
        { id: "sipdana", name: "SipDana", kind: "Full-stack / AI", role: "Personal finance manager",
          art: "assets/img/gig-sipdana.svg", artAlt: "A shopping receipt being scanned next to a rising bar chart",
          body: "Upload a shopping receipt and Google Gemini pulls out the items, prices and total, then files them as a transaction. JWT auth, live balances backed by database transactions, saving goals, and Chart.js trends.",
          stack: ["TypeScript", "React", "Node.js", "MySQL", "Gemini API"],
          links: [["Live demo", "https://sipdana-v3.vercel.app"], ["Repo", "https://github.com/shortahairlover/sipdana-v3"]],
          source: "Features as listed in the repo README." },
        { id: "wellnez", name: "Wellnez", kind: "Full-stack", role: "Two-module app",
          art: "assets/img/gig-wellnez.svg", artAlt: "A heartbeat line running across a health monitor",
          body: "A Java backend and a JavaScript web front end, each in its own module of one repository.",
          stack: ["Java", "JavaScript", "HTML / CSS"],
          links: [["Repo", "https://github.com/shortahairlover/Wellnez-app"]] },
        { id: "lyrics", name: "LyricsHub", kind: "Front end", role: "Lyrics search",
          art: "assets/img/gig-lyrics.svg", artAlt: "An audio waveform above highlighted lines of lyrics",
          body: "A lyrics search app built with Next.js.",
          stack: ["Next.js", "JavaScript"],
          links: [["Repo", "https://github.com/shortahairlover/LyricsHub"]] },
      ],
    },
    {
      group: "Machine learning",
      items: [
        { id: "ddpm", name: "Mini DDPM", kind: "ML / team lead", role: "Diffusion model from scratch, team of four",
          art: "assets/img/gig-ddpm.svg", artAlt: "Five tiles denoising from random pixels into a clean digit seven",
          body: "A class-conditional diffusion model written from scratch in PyTorch with classifier-free guidance, trained on MNIST and CIFAR-10 on a 6 GB laptop GPU. I led the team as prompt engineer and LLM navigator.",
          stats: [["FID, CIFAR-10", "16.43"], ["U-Net params", "8.95M"], ["DDIM vs DDPM", "~10x faster"]],
          stack: ["Python", "PyTorch", "CUDA"],
          links: [["Repo", "https://github.com/shortahairlover/ddpm-kelompok11"]],
          source: "Figures from the repo README: FID on 5,000 samples, DDIM-100, guidance w = 2." },
        { id: "movie", name: "Movie Recommender", kind: "RecSys", role: "CF vs MF on MovieLens 100K",
          art: "assets/img/gig-movie.svg", artAlt: "A sparse user by movie rating matrix with one predicted cell highlighted",
          body: "User-based CF, item-based CF and matrix factorization compared with 5-fold cross-validation. Matrix factorization wins every metric.",
          stats: [["Best RMSE", "0.9186"], ["NDCG@10", "0.9187"]],
          stack: ["Python", "Jupyter"],
          links: [["Repo", "https://github.com/shortahairlover/MovieRecommender-CFvsMF"]],
          source: "5-fold cross-validation means from the repo README." },
        { id: "book", name: "Book Recommender", kind: "RecSys", role: "CF vs MF on Goodbooks-10k",
          art: "assets/img/gig-book.svg", artAlt: "A sparse user by book rating matrix with one predicted cell highlighted",
          body: "The same three methods on an 84,139-rating subset at 96.8% sparsity. Here item-based CF takes every metric.",
          stats: [["Best RMSE", "0.8649"], ["NDCG@10", "0.9119"]],
          stack: ["Python", "Jupyter"],
          links: [["Repo", "https://github.com/shortahairlover/BookRecommender-CFvsMF"]],
          source: "5-fold cross-validation means from the repo README." },
      ],
    },
  ];

  /* Snapshot used when the GitHub API is unreachable or rate-limited (taken 2026-11-21). */
  const REPO_FALLBACK = [
    { name: "BookRecommender-CFvsMF", language: "Jupyter Notebook", updated: "2026-11-19", desc: "User-based CF, item-based CF and matrix factorization on Goodbooks-10k" },
    { name: "MovieRecommender-CFvsMF", language: "Jupyter Notebook", updated: "2026-11-18", desc: "User-based CF, item-based CF and matrix factorization on MovieLens 100K" },
    { name: "shortahairlover", language: "Python", updated: "2026-11-14", desc: "My GitHub profile" },
    { name: "ddpm-kelompok11", language: "Python", updated: "2026-10-28", desc: "Mini DDPM class-conditional (MNIST and CIFAR-10) from scratch" },
    { name: "TugasLayout1", language: "C++", updated: "2026-04-19", desc: "" },
    { name: "sipdana-v3", language: "TypeScript", updated: "2026-03-26", desc: "" },
    { name: "tugas4-web", language: "Blade", updated: "2026-03-25", desc: "" },
    { name: "Wellnez-app", language: "Java", updated: "2025-11-30", desc: "" },
    { name: "LyricsHub", language: "JavaScript", updated: "2025-07-05", desc: "" },
    { name: "week-8-cci", language: "JavaScript", updated: "2025-05-16", desc: "Dynamic routing" },
  ];

  /* ------------------------------------------------------------ helpers */
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    for (const kid of kids) if (kid != null) n.append(kid);
    return n;
  };

  function decode(node, finalText, duration = 420) {
    if (REDUCED || !finalText) { node.textContent = finalText; return; }
    const start = performance.now();
    node.classList.add("decoding");
    const len = finalText.length;
    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const settled = Math.floor(p * len);
      let out = finalText.slice(0, settled);
      for (let i = settled; i < Math.min(len, settled + 14); i++) {
        out += finalText[i] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      node.textContent = out;
      if (p < 1) requestAnimationFrame(frame);
      else { node.textContent = finalText; node.classList.remove("decoding"); }
    }
    requestAnimationFrame(frame);
  }

  function fmtDate(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }

  /* ------------------------------------------------------------ list + detail menu */
  function buildMenu({ data, listRoot, detailRoot, renderTab, renderDetail, orientation }) {
    const tabs = [];
    data.forEach((g) => {
      const groupId = `g-${g.group.toLowerCase().replace(/[^a-z]+/g, "-")}`;
      const wrap = el("div", { class: orientation === "vertical" ? "quest-group" : "slot-group", role: "presentation" });
      wrap.append(el("h3", { id: groupId, text: g.group }));
      const row = el("div", { class: orientation === "vertical" ? "quest-row" : "slot-row", role: "presentation" });
      g.items.forEach((item) => {
        const tab = renderTab(item);
        tab.setAttribute("role", "tab");
        tab.id = `tab-${item.id}`;
        tab.setAttribute("aria-controls", detailRoot.id);
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
        tab.addEventListener("click", () => select(tabs.indexOf(tab), true));
        tab._item = item;
        tabs.push(tab);
        row.append(tab);
      });
      wrap.append(row);
      listRoot.append(wrap);
    });

    function select(i, focus) {
      tabs.forEach((t, j) => {
        const on = j === i;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tabs[i].focus();
      detailRoot.setAttribute("aria-labelledby", tabs[i].id);
      renderDetail(tabs[i]._item, detailRoot);
    }

    listRoot.addEventListener("keydown", (e) => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      const next = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (next) { e.preventDefault(); select((i + next + tabs.length) % tabs.length, true); }
      else if (e.key === "Home") { e.preventDefault(); select(0, true); }
      else if (e.key === "End") { e.preventDefault(); select(tabs.length - 1, true); }
    });

    select(0, false);
  }

  function renderUsed(used) {
    const ul = el("ul", { class: "detail__list" });
    used.forEach((u) => {
      const li = el("li");
      li.append(u.href ? el("a", { href: u.href, target: "_blank", rel: "noopener", text: u.t }) : document.createTextNode(u.t));
      ul.append(li);
    });
    return ul;
  }

  buildMenu({
    data: LOADOUT,
    listRoot: $("#slots"),
    detailRoot: $("#slot-detail"),
    orientation: "horizontal",
    renderTab: (item) =>
      el("button", { class: "slot", type: "button", "data-tier": item.tier },
        el("span", { class: "slot__tier", "aria-hidden": "true" }),
        el("span", { class: "slot__code", "aria-hidden": "true", text: item.code }),
        el("span", { class: "slot__name", text: item.name })),
    renderDetail: (item, root) => {
      root.replaceChildren();
      const meta = el("p", { class: "detail__meta" },
        el("span", { class: "is-tier", "data-tier": item.tier, text: TIER_LABEL[item.tier] }),
        el("span", { text: `Slot ${item.code}` }));
      const title = el("h3", { class: "detail__title" });
      const body = el("p", { class: "detail__body" });
      meta.classList.add("detail__meta--after");
      root.append(title, meta, body, el("p", { class: "detail__label", text: "Used in" }), renderUsed(item.used));
      decode(title, item.name, 360);
      decode(body, item.body, 520);
    },
  });

  // tier legend under the slots
  const legend = el("ul", { class: "legend", "aria-label": "Tier legend" });
  [["field", "var(--r)"], ["build", "var(--c)"], ["course", "var(--ink-2)"]].forEach(([k, c]) => {
    const i = el("i", { "aria-hidden": "true" }); i.style.background = c;
    legend.append(el("li", {}, i, document.createTextNode(TIER_LABEL[k])));
  });
  $("#slots").append(legend);

  buildMenu({
    data: RUNLOG,
    listRoot: $("#quests"),
    detailRoot: $("#quest-detail"),
    orientation: "vertical",
    renderTab: (item) =>
      el("button", { class: "quest", type: "button" },
        el("span", { class: "quest__mark", "aria-hidden": "true" }),
        el("span", { class: "quest__name", text: item.name }),
        el("span", { class: "quest__date", text: item.date })),
    renderDetail: (item, root) => {
      root.replaceChildren();
      const meta = el("p", { class: "detail__meta" }, ...item.meta.map((m) => el("span", { text: m })));
      const title = el("h3", { class: "detail__title" });
      const sub = el("p", { class: "detail__sub", text: item.sub });
      const body = el("p", { class: "detail__body" });
      const list = renderUsed(item.list.map((t) => ({ t })));
      meta.classList.add("detail__meta--after");
      root.append(title, sub, meta, body, list);
      decode(title, item.name, 360);
      decode(body, item.body, 560);
    },
  });

  /* ------------------------------------------------------------ gig board */
  buildMenu({
    data: GIGS,
    listRoot: $("#giglist"),
    detailRoot: $("#gig-detail"),
    orientation: "vertical",
    renderTab: (item) =>
      el("button", { class: "quest gigtab", type: "button" },
        el("span", { class: "quest__mark", "aria-hidden": "true" }),
        el("span", { class: "quest__name", text: item.name }),
        el("span", { class: "quest__date", text: item.kind })),
    renderDetail: (item, root) => {
      root.replaceChildren();
      const art = el("div", { class: "gig__art" }, el("img", { src: item.art, alt: item.artAlt, width: "480", height: "300" }));
      const title = el("h3", { class: "detail__title" });
      const sub = el("p", { class: "detail__sub", text: item.role });
      const body = el("p", { class: "detail__body" });
      root.append(art, title, sub, body);
      if (item.stats) {
        const dl = el("dl", { class: "stats" });
        item.stats.forEach(([k, v]) => dl.append(el("div", {}, el("dt", { text: k }), el("dd", { text: v }))));
        root.append(dl);
      }
      const chips = el("ul", { class: "chips" });
      item.stack.forEach((t) => chips.append(el("li", { text: t })));
      const links = el("p", { class: "gig__links" });
      item.links.forEach(([t, href]) => links.append(el("a", { href, target: "_blank", rel: "noopener", text: t })));
      root.append(chips, links);
      if (item.source) root.append(el("p", { class: "detail__source", text: item.source }));
      decode(title, item.name, 360);
      decode(body, item.body, 560);
    },
  });

  /* ------------------------------------------------------------ GitHub repos */
  function renderRepos(repos, live) {
    const tbody = $("#repos");
    const ticker = $("#ticker");
    tbody.replaceChildren();
    ticker.replaceChildren();

    repos.forEach((r) => {
      const url = `https://github.com/${GH_USER}/${r.name}`;
      const nameCell = el("td", {}, el("span", { class: "r-name", text: r.name }));
      if (r.desc) nameCell.append(el("span", { class: "r-desc", text: r.desc }));
      tbody.append(el("tr", {},
        nameCell,
        el("td", { class: "r-lang", text: r.language || "n/a" }),
        el("td", { class: "r-date" }, el("time", { datetime: r.updated, text: fmtDate(r.updated) })),
        el("td", { class: "r-link" }, el("a", { href: url, target: "_blank", rel: "noopener", "aria-label": `Open ${r.name} on GitHub`, text: "Open" }))));
    });

    // ticker: render twice so the marquee loops seamlessly
    const items = repos.map((r) =>
      el("li", {},
        el("a", { href: `https://github.com/${GH_USER}/${r.name}`, target: "_blank", rel: "noopener", text: r.name }),
        el("span", { class: "t-lang", text: r.language || "n/a" }),
        el("span", { class: "t-date", text: fmtDate(r.updated) })));
    items.forEach((li) => ticker.append(li));
    items.forEach((li) => { const c = li.cloneNode(true); c.setAttribute("aria-hidden", "true"); c.querySelector("a").tabIndex = -1; ticker.append(c); });
    ticker.style.setProperty("--marquee-dur", `${Math.max(30, repos.length * 6)}s`);

    const status = $("#scan-status");
    status.dataset.state = live ? "ok" : "error";
    status.textContent = live
      ? `${repos.length} public repos, live from GitHub`
      : `GitHub did not answer, showing a snapshot from 21 Nov 2026 (${repos.length} repos)`;
  }

  async function loadRepos() {
    const KEY = "shl-repos-v1";
    try {
      const cached = JSON.parse(sessionStorage.getItem(KEY) || "null");
      if (cached && Date.now() - cached.at < 10 * 60 * 1000) { renderRepos(cached.repos, true); return; }
    } catch (_) { /* storage unavailable */ }

    try {
      const res = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated&type=owner`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const repos = json
        .filter((r) => !r.fork && !r.private)
        .map((r) => ({ name: r.name, language: r.language, updated: (r.pushed_at || r.updated_at || "").slice(0, 10), desc: r.description || "" }))
        .sort((a, b) => (a.updated < b.updated ? 1 : -1));
      if (!repos.length) throw new Error("empty");
      renderRepos(repos, true);
      try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), repos })); } catch (_) { /* ignore */ }
    } catch (err) {
      console.warn("net scan fell back to snapshot:", err);
      renderRepos(REPO_FALLBACK, false);
    }
  }
  renderRepos(REPO_FALLBACK, false);
  $("#scan-status").dataset.state = "";
  $("#scan-status").textContent = "Pulling public repos from GitHub";
  loadRepos();

  /* ------------------------------------------------------------ clock */
  const clock = $("#clock");
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const tick = () => { clock.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 1000);

  /* ------------------------------------------------------------ nav state */
  const navLinks = [...document.querySelectorAll(".bar__nav a")];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href")));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.removeAttribute("aria-current"));
      const i = sections.indexOf(e.target);
      if (i >= 0) navLinks[i].setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => s && io.observe(s));

  /* ------------------------------------------------------------ boot moment */
  if (!REDUCED) {
    const alias = $("#alias");
    decode(alias, alias.dataset.text, 700);
    setTimeout(() => {
      alias.classList.add("is-glitching");
      setTimeout(() => alias.classList.remove("is-glitching"), 450);
    }, 760);

    // city parallax follows the pointer on the first screen
    const city = $(".boot__city");
    const boot = $(".boot");
    boot.addEventListener("pointermove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * -24;
      city.style.setProperty("--px", `${x.toFixed(1)}px`);
    });
  }

  // the alias always fills its row: measure the set text and scale it to the container width
  const aliasEl = $("#alias");
  const aliasBox = $(".boot__alias");
  function fitAlias() {
    // measure the final text, not a mid-decode frame
    const shown = aliasEl.textContent;
    aliasEl.textContent = aliasEl.dataset.text;
    aliasEl.style.fontSize = "100px";
    const natural = aliasEl.scrollWidth;
    aliasEl.textContent = shown;
    const target = aliasBox.clientWidth;
    if (natural > 0 && target > 0) aliasEl.style.fontSize = `${Math.floor((99.4 * target / natural) * 10) / 10}px`;
  }
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(fitAlias);
  window.addEventListener("resize", fitAlias, { passive: true });
  fitAlias();

  /* ------------------------------------------------------------ scroll motion */
  // Reading progress drawn into the top bar's bottom edge.
  const progress = $(".bar__progress");
  let progressQueued = false;
  const drawProgress = () => {
    progressQueued = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty("--p", max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : "0");
    // decorative loops in the first screen (ticker, scan line, pulses) stop once it is off screen
    const bootGone = $(".boot").getBoundingClientRect().bottom <= 0;
    document.documentElement.classList.toggle("loops-paused", bootGone);
  };
  window.addEventListener("scroll", drawProgress, { passive: true });
  drawProgress();

  // Section breach: each section draws in like a game menu screen the first time it enters view.
  if (!REDUCED && "IntersectionObserver" in window) {
    const breachSections = [...document.querySelectorAll("[data-breach]")];
    breachSections.forEach((sec) => {
      sec.querySelectorAll(".slot, .quest, .log p, .jack").forEach((n, i, all) => {
        // cap the stagger so the last item never waits more than ~0.35s
        n.style.setProperty("--i", String(all.length > 12 ? (i * 12 / all.length).toFixed(2) : i));
      });
    });
    document.documentElement.classList.add("motion");

    // Position check on every scroll frame (and on load/resize), so a section can never stay hidden
    // because an observer callback was throttled or skipped.
    let pending = breachSections.slice();
    const reveal = (sec) => {
      sec.classList.add("is-in");
      const h = sec.querySelector(".h2, .signal__motto");
      if (h && h.dataset.text) setTimeout(() => decode(h, h.dataset.text, 520), 80);
    };
    let checkQueued = false;
    const checkBreach = () => {
      checkQueued = false;
      const line = window.innerHeight * 0.9;
      pending = pending.filter((sec) => {
        const r = sec.getBoundingClientRect();
        if (r.top < line && r.bottom > 0) { reveal(sec); return false; }
        // anything already scrolled past is revealed too (anchor jumps, restored scroll position)
        if (r.bottom <= 0) { sec.classList.add("is-in"); return false; }
        return true;
      });
    };
    // five rect reads per scroll event is cheap; running it directly (not via rAF) keeps reveals working
    // even where animation frames are throttled
    const queueCheck = () => { if (pending.length) checkBreach(); };
    window.addEventListener("scroll", queueCheck, { passive: true });
    window.addEventListener("resize", queueCheck, { passive: true });
    window.addEventListener("load", queueCheck);
    checkBreach();
  }

  // scanning line travels the portrait's real height
  const frame = $(".portrait__frame");
  const setScan = () => frame.style.setProperty("--scan-h", `${frame.clientHeight - 20}px`);
  setScan();
  window.addEventListener("resize", setScan, { passive: true });
})();
