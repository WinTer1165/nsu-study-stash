/* ===== NSU Study Stash — app ===== */
(function () {
  "use strict";

  const grid = document.getElementById("courses");
  const empty = document.getElementById("empty");
  const searchEl = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const statsEl = document.getElementById("stats");
  const flagsEl = document.getElementById("flags");

  const DEPTS = ["All", "CSE", "GED", "MAT"];
  let activeDept = "All";
  let query = "";

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ----- stats ----- */
  function renderStats() {
    const n = COURSES.length;
    const depts = new Set(COURSES.map((c) => c.dept)).size;
    const withProj = COURSES.filter((c) => c.project).length;
    statsEl.innerHTML =
      `<span class="stat"><b>${n}</b> courses</span>` +
      `<span class="stat"><b>${depts}</b> departments</span>` +
      `<span class="stat"><b>${withProj}</b> project repos</span>` +
      `<span class="stat">100% free</span>` +
      `<span class="stat" id="viewStat" hidden>👁 <b id="viewCount">0</b> views</span>`;
  }

  /* ----- live page-view counter (Abacus: free, no sign-up) ----- */
  function loadViews() {
    const chip = document.getElementById("viewStat");
    if (!chip) return;
    fetch("https://abacus.jasoncameron.dev/hit/nsu-study-stash-winter1165/home")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const n = d && (typeof d.value === "number" ? d.value : d.count);
        if (typeof n === "number") {
          document.getElementById("viewCount").textContent = n.toLocaleString();
          chip.hidden = false;
        }
      })
      .catch(() => {}); // counter is best-effort; never block the page
  }

  /* ----- filters ----- */
  function renderFilters() {
    filtersEl.innerHTML = DEPTS.map(
      (d) =>
        `<button role="tab" data-dept="${d}" aria-selected="${d === activeDept}">${d}</button>`
    ).join("");
    filtersEl.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", () => {
        activeDept = b.dataset.dept;
        renderFilters();
        render();
      })
    );
  }

  /* ----- cards ----- */
  function card(c) {
    const badge = `badge badge--${c.dept.toLowerCase()}`;
    const provider = c.provider
      ? `<a href="https://github.com/WinTer1165" target="_blank" rel="noopener">${esc(c.provider)}</a>`
      : "N/A";
    const repoBtn = c.project
      ? `<a class="btn btn--repo" href="${esc(c.project)}" target="_blank" rel="noopener">Project ↗</a>`
      : "";
    return `
      <article class="card">
        <div class="card__top">
          <span class="code">${esc(c.code)}</span>
          <span class="${badge}">${esc(c.dept)}</span>
        </div>
        <h3 class="card__name">${esc(c.name)}</h3>
        <div class="meta">
          <div><span class="k">Faculty</span><span class="v">${esc(c.faculty)}</span></div>
          <div><span class="k">Year</span><span class="v">${esc(c.year)}</span></div>
          <div><span class="k">Provided by</span><span class="v">${provider}</span></div>
        </div>
        <div class="card__actions">
          <a class="btn btn--dl" href="${esc(c.drive)}" target="_blank" rel="noopener">⬇ Download</a>
          ${repoBtn}
        </div>
      </article>`;
  }

  /* ----- flagged issues (static HTML, filtered by the same search) ----- */
  function renderFlags() {
    if (!flagsEl) return 0;
    const q = query.trim().toLowerCase();
    let shown = 0;
    flagsEl.querySelectorAll(".flag").forEach((el) => {
      const dept = el.dataset.flagDept || "";
      const hay = ((el.dataset.flagTags || "") + " " + el.textContent).toLowerCase();
      const ok = (activeDept === "All" || dept === activeDept) && (!q || hay.includes(q));
      el.hidden = !ok;
      if (ok) shown++;
    });
    flagsEl.hidden = shown === 0;
    return shown;
  }

  function render() {
    const q = query.trim().toLowerCase();
    const list = COURSES.filter((c) => {
      const okDept = activeDept === "All" || c.dept === activeDept;
      const okText =
        !q ||
        (c.code + " " + c.name + " " + c.faculty).toLowerCase().includes(q);
      return okDept && okText;
    });
    grid.innerHTML = list.map(card).join("");
    const flagsShown = renderFlags();
    empty.hidden = list.length !== 0 || flagsShown > 0;
  }

  /* ----- theme ----- */
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    toggle.textContent = t === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("nss-theme", t); } catch (e) {}
  }
  (function initTheme() {
    let t;
    try { t = localStorage.getItem("nss-theme"); } catch (e) {}
    if (!t) t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(t);
  })();
  toggle.addEventListener("click", () =>
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark")
  );

  /* ----- search ----- */
  searchEl.addEventListener("input", (e) => {
    query = e.target.value;
    render();
  });

  /* ----- structured data (ItemList) for SEO ----- */
  function injectItemList() {
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "NSU Study Stash course list",
      numberOfItems: COURSES.length,
      itemListElement: COURSES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${c.code} — ${c.name}`,
        url: c.drive,
      })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  renderStats();
  renderFilters();
  render();
  injectItemList();
  loadViews();
})();
