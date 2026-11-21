"""Generate the site's SVG artwork (skyline, portrait, gig thumbnails, favicon).

Run from the project root:  python -I tools/gen_assets.py
Every asset is authored here from code; nothing is traced or copied.
"""
import math
import os
import random

OUT = os.path.join("assets", "img")
Y = "#F3E600"
K = "#0A0A0D"
R = "#FF2E4D"
C = "#3DF2E8"


def write(name, svg):
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(svg.strip() + "\n")


# ---------------------------------------------------------------- skyline
def skyline(seed, w, h, fill, base_frac=0.35, windows=None, antenna=True):
    rnd = random.Random(seed)
    parts = []
    x = 0
    while x < w:
        bw = rnd.choice([18, 24, 30, 36, 44, 56, 70])
        tall = rnd.random()
        bh = h * (base_frac + tall * (0.95 - base_frac) * rnd.random())
        top = h - bh
        # stepped or chamfered roofs
        kind = rnd.random()
        if kind < 0.3:
            step = bw * 0.3
            d = f"M{x},{h} V{top + 18} H{x + step} V{top} H{x + bw - step} V{top + 18} H{x + bw} V{h} Z"
        elif kind < 0.55:
            d = f"M{x},{h} V{top + 14} L{x + 14},{top} H{x + bw} V{h} Z"
        else:
            d = f"M{x},{h} V{top} H{x + bw} V{h} Z"
        parts.append(f'<path d="{d}"/>')
        if antenna and rnd.random() < 0.18 and bh > h * 0.6:
            ax = x + bw * rnd.uniform(0.3, 0.7)
            parts.append(f'<rect x="{ax:.1f}" y="{top - 26}" width="2" height="26"/>')
        if windows and bw >= 30:
            rows = int(bh // 14)
            for r_ in range(2, rows):
                for c_ in range(int(bw // 10)):
                    if rnd.random() < 0.07:
                        wx = x + 4 + c_ * 10
                        wy = top + r_ * 14
                        col = rnd.choice(windows)
                        parts.append(f'<rect x="{wx}" y="{wy}" width="5" height="3" fill="{col}"/>')
        x += bw + rnd.choice([0, 0, 2, 4])
    return f'<g fill="{fill}">' + "".join(parts) + "</g>"


def city():
    w, h = 1600, 420
    far = skyline(7, w, h, "#0A0A0D", base_frac=0.45, antenna=False)
    near = skyline(21, w, h, "#0A0A0D", base_frac=0.15, windows=[Y, R, C, Y])
    svg = f"""
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Silhouette of a dense neon city skyline">
  <g opacity="0.28">{far}</g>
  {near}
</svg>"""
    write("city.svg", svg)


# ---------------------------------------------------------------- portrait
def portrait():
    svg = f"""
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" role="img" aria-label="Illustrated portrait of a netrunner with short messy hair, rectangular glasses, a temple implant and a neck cable">
  <defs>
    <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="6" height="6" fill="{K}"/>
      <line x1="0" y1="0" x2="0" y2="6" stroke="{Y}" stroke-width="1.4" opacity="0.55"/>
    </pattern>
    <pattern id="hatchDense" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
      <rect width="4" height="4" fill="{K}"/>
      <line x1="0" y1="0" x2="0" y2="4" stroke="{Y}" stroke-width="1.6" opacity="0.8"/>
    </pattern>
    <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="2" fill="{C}" opacity="0.10"/>
    </pattern>
    <clipPath id="faceClip">
      <path d="M150,168 C150,118 250,118 250,168 L253,238 C253,290 226,326 200,331 C174,326 147,290 147,238 Z"/>
    </clipPath>
  </defs>

  <!-- jacket / shoulders -->
  <path d="M52,500 C60,430 112,392 168,378 L232,378 C288,392 340,430 348,500 Z" fill="url(#hatch)" stroke="{Y}" stroke-width="2.5"/>
  <path d="M168,378 L186,430 L200,404 L214,430 L232,378" fill="none" stroke="{Y}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M110,412 L128,500 M290,412 L272,500" stroke="{Y}" stroke-width="1.5" opacity="0.6"/>
  <!-- shoulder plate -->
  <path d="M262,402 L318,428 L330,470 L300,462 L280,430 Z" fill="{K}" stroke="{R}" stroke-width="2"/>
  <path d="M290,440 L312,448" stroke="{R}" stroke-width="2"/>

  <!-- neck -->
  <path d="M178,318 L178,380 L222,380 L222,318" fill="url(#hatchDense)" stroke="{Y}" stroke-width="2.5"/>
  <!-- neck port + cable -->
  <rect x="204" y="346" width="14" height="10" fill="{K}" stroke="{C}" stroke-width="2"/>
  <path d="M218,351 C250,352 262,380 268,410 C274,440 300,470 340,500" fill="none" stroke="{C}" stroke-width="3"/>
  <path d="M218,351 C250,352 262,380 268,410 C274,440 300,470 340,500" fill="none" stroke="{K}" stroke-width="1" stroke-dasharray="2 6"/>

  <!-- ears -->
  <path d="M148,212 C136,210 134,246 150,252" fill="{K}" stroke="{Y}" stroke-width="2.5"/>
  <path d="M252,212 C264,210 266,246 250,252" fill="{K}" stroke="{Y}" stroke-width="2.5"/>

  <!-- face -->
  <path d="M150,168 C150,118 250,118 250,168 L253,238 C253,290 226,326 200,331 C174,326 147,290 147,238 Z" fill="{K}" stroke="{Y}" stroke-width="2.5"/>
  <g clip-path="url(#faceClip)">
    <!-- shadow side of the face -->
    <path d="M214,120 C240,150 246,230 236,280 C228,310 214,326 200,334 L260,334 L260,120 Z" fill="url(#hatch)"/>
    <rect x="140" y="110" width="120" height="230" fill="url(#scan)"/>
  </g>
  <!-- jaw implant plate -->
  <path d="M232,262 L250,240 L252,268 L236,296 Z" fill="{K}" stroke="{C}" stroke-width="2"/>
  <circle cx="246" cy="262" r="2" fill="{C}"/>
  <!-- temple implant traces -->
  <path d="M250,190 L262,196 L262,232 M256,206 L268,206" fill="none" stroke="{R}" stroke-width="2"/>
  <circle cx="268" cy="206" r="2.5" fill="{R}"/>

  <!-- brows, nose, mouth -->
  <path d="M162,192 L192,188 M208,188 L238,192" stroke="{Y}" stroke-width="3" stroke-linecap="square"/>
  <path d="M200,226 L194,266 L206,268" fill="none" stroke="{Y}" stroke-width="2"/>
  <path d="M184,292 C194,296 206,296 216,292" fill="none" stroke="{Y}" stroke-width="2.5"/>

  <!-- glasses -->
  <rect x="158" y="200" width="36" height="26" rx="3" fill="{C}" fill-opacity="0.16" stroke="{Y}" stroke-width="2.5"/>
  <rect x="206" y="200" width="36" height="26" rx="3" fill="{C}" fill-opacity="0.16" stroke="{Y}" stroke-width="2.5"/>
  <path d="M194,210 C198,206 202,206 206,210 M158,208 L148,206 M242,208 L252,206" fill="none" stroke="{Y}" stroke-width="2.5"/>
  <path d="M164,220 L178,204 M212,220 L226,204" stroke="{R}" stroke-width="1.5" opacity="0.9"/>

  <!-- short messy hair -->
  <path d="M140,196 C128,150 140,104 178,92 C192,80 214,80 230,90 C262,98 276,140 262,196
           C258,176 254,160 246,150 L240,164 L232,146 L220,160 L214,140 L202,158 L194,138 L184,158
           L174,142 L166,162 L158,150 C150,162 144,178 140,196 Z" fill="url(#hatchDense)" stroke="{Y}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M170,96 L160,78 L184,90 M206,84 L212,66 L222,88 M240,96 L258,84 L250,106" fill="none" stroke="{Y}" stroke-width="2.5" stroke-linejoin="round"/>
</svg>"""
    write("portrait.svg", svg)


# ---------------------------------------------------------------- gig thumbs
FRAME = 'viewBox="0 0 480 300"'


def thumb_sipdana():
    bars = "".join(
        f'<rect x="{290 + i * 26}" y="{230 - hgt}" width="16" height="{hgt}" fill="{Y if i != 4 else R}"/>'
        for i, hgt in enumerate([40, 70, 55, 96, 120, 84])
    )
    items = "".join(
        f'<rect x="92" y="{92 + i * 22}" width="{w}" height="6" fill="{K}"/><rect x="{196 - 26}" y="{92 + i * 22}" width="26" height="6" fill="{K}"/>'
        for i, w in enumerate([58, 44, 66, 38, 52])
    )
    zig = " ".join(f"L{76 + i * 10},{(258 if i % 2 else 250)}" for i in range(14))
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" {FRAME} role="img" aria-label="A shopping receipt being scanned next to a rising bar chart">
  <rect width="480" height="300" fill="{K}"/>
  <path d="M76,52 H212 V250 {zig} L76,250 Z" fill="{Y}"/>
  <rect x="92" y="66" width="70" height="10" fill="{K}"/>
  {items}
  <rect x="92" y="214" width="104" height="3" fill="{K}"/>
  <rect x="150" y="224" width="46" height="10" fill="{K}"/>
  <rect x="60" y="150" width="170" height="3" fill="{C}"/>
  <rect x="60" y="130" width="170" height="40" fill="{C}" opacity="0.15"/>
  <path d="M262,236 H440" stroke="{Y}" stroke-width="2" opacity="0.5"/>
  {bars}
  <path d="M296,190 L322,162 L348,176 L374,128 L400,104 L426,140" fill="none" stroke="{C}" stroke-width="2.5"/>
</svg>"""


def thumb_ddpm():
    rnd = random.Random(42)
    glyph = [
        "0111110", "0000010", "0000100", "0001000", "0001000", "0010000", "0010000",
    ]
    tiles = []
    n = 5
    for t in range(n):
        ox = 28 + t * 88
        oy = 96
        tiles.append(f'<rect x="{ox}" y="{oy}" width="76" height="76" fill="#14141A"/>')
        clean = t / (n - 1)
        for gy in range(7):
            for gx in range(7):
                on = glyph[gy][gx] == "1"
                noise = rnd.random()
                p = clean * (1.0 if on else 0.0) + (1 - clean) * noise
                if p > 0.55:
                    col = Y if (on and clean > 0.4) else (rnd.choice([Y, C, R]) if clean < 0.5 else Y)
                    tiles.append(
                        f'<rect x="{ox + 3 + gx * 10}" y="{oy + 3 + gy * 10}" width="10" height="10" fill="{col}" opacity="{0.35 + 0.65 * max(clean, p - 0.55):.2f}"/>'
                    )
    arrows = "".join(f'<path d="M{100 + t * 88},134 L{112 + t * 88},134" stroke="{C}" stroke-width="2"/>' for t in range(n - 1))
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" {FRAME} role="img" aria-label="Five tiles denoising from random pixels into a clean digit seven">
  <rect width="480" height="300" fill="{K}"/>
  {''.join(tiles)}
  {arrows}
  <rect x="28" y="200" width="424" height="2" fill="{Y}" opacity="0.4"/>
  <rect x="28" y="196" width="140" height="10" fill="{R}"/>
</svg>"""


def thumb_matrix(seed, highlight, label):
    rnd = random.Random(seed)
    cells = []
    rows, cols = 9, 14
    for r_ in range(rows):
        for c_ in range(cols):
            x = 40 + c_ * 22
            y = 52 + r_ * 22
            v = rnd.random()
            if v < 0.3:
                op = 0.25 + v * 2.2
                cells.append(f'<rect x="{x}" y="{y}" width="18" height="18" fill="{Y}" opacity="{min(op, 1):.2f}"/>')
            else:
                cells.append(f'<rect x="{x + 7}" y="{y + 7}" width="4" height="4" fill="{Y}" opacity="0.25"/>')
    hr, hc = highlight
    cells.append(f'<rect x="{40 + hc * 22 - 2}" y="{52 + hr * 22 - 2}" width="22" height="22" fill="none" stroke="{R}" stroke-width="2.5"/>')
    cells.append(f'<rect x="{40 + hc * 22 + 3}" y="{52 + hr * 22 + 3}" width="12" height="12" fill="{R}"/>')
    # latent factor bars
    fx = 370
    for i in range(6):
        w = 20 + rnd.random() * 70
        cells.append(f'<rect x="{fx}" y="{60 + i * 30}" width="{w:.0f}" height="12" fill="{C}" opacity="{0.5 + i * 0.08:.2f}"/>')
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" {FRAME} role="img" aria-label="{label}">
  <rect width="480" height="300" fill="{K}"/>
  {''.join(cells)}
  <path d="M356,52 V246" stroke="{Y}" stroke-width="1" opacity="0.4"/>
</svg>"""


def thumb_wellnez():
    pts = []
    for i in range(0, 61):
        x = 40 + i * 6.6
        t = i % 20
        if t == 8:
            y = 110
        elif t == 9:
            y = 210
        elif t == 10:
            y = 130
        else:
            y = 160 + math.sin(i * 0.6) * 4
        pts.append(f"{x:.1f},{y:.1f}")
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" {FRAME} role="img" aria-label="A heartbeat line running across a health monitor">
  <rect width="480" height="300" fill="{K}"/>
  <g stroke="{Y}" stroke-width="1" opacity="0.15">
    {''.join(f'<path d="M40,{y} H440"/>' for y in range(60, 260, 25))}
    {''.join(f'<path d="M{x},60 V240"/>' for x in range(40, 450, 25))}
  </g>
  <polyline points="{' '.join(pts)}" fill="none" stroke="{C}" stroke-width="3" stroke-linejoin="round"/>
  <rect x="40" y="256" width="120" height="10" fill="{Y}"/>
  <rect x="170" y="256" width="40" height="10" fill="{R}"/>
</svg>"""


def thumb_lyrics():
    rnd = random.Random(5)
    bars = []
    for i in range(48):
        hgt = 10 + abs(math.sin(i * 0.45)) * 70 + rnd.random() * 30
        bars.append(f'<rect x="{40 + i * 8.4:.1f}" y="{150 - hgt / 2:.1f}" width="5" height="{hgt:.1f}" fill="{Y}"/>')
    lines = "".join(
        f'<rect x="40" y="{220 + i * 16}" width="{w}" height="7" fill="{C if i == 1 else Y}" opacity="{1 if i == 1 else 0.45}"/>'
        for i, w in enumerate([260, 330, 210])
    )
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" {FRAME} role="img" aria-label="An audio waveform above highlighted lines of lyrics">
  <rect width="480" height="300" fill="{K}"/>
  {''.join(bars)}
  {lines}
  <rect x="246" y="60" width="3" height="180" fill="{R}"/>
</svg>"""


def favicon():
    svg = f"""
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M0,0 H52 L64,12 V64 H12 L0,52 Z" fill="{Y}"/>
  <path d="M16,20 H44 V27 H23 V30 H44 V46 H16 V39 H37 V36 H16 Z" fill="{K}"/>
  <rect x="46" y="40" width="6" height="6" fill="{R}"/>
</svg>"""
    write("favicon.svg", svg)


if __name__ == "__main__":
    city()
    portrait()
    write("gig-sipdana.svg", thumb_sipdana())
    write("gig-ddpm.svg", thumb_ddpm())
    write("gig-movie.svg", thumb_matrix(11, (3, 9), "A sparse user by movie rating matrix with one predicted cell highlighted and latent factor bars"))
    write("gig-book.svg", thumb_matrix(29, (6, 4), "A sparse user by book rating matrix with one predicted cell highlighted and latent factor bars"))
    write("gig-wellnez.svg", thumb_wellnez())
    write("gig-lyrics.svg", thumb_lyrics())
    favicon()
    print("assets written to", OUT)
