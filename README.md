# Watsu amb Maria

Lloc web estàtic per a la pràctica de Watsu a Barcelona. Construït amb HTML5 / CSS3 / JS vanilla, sense cap framework ni dependència.

## Estructura de fitxers

```
watsu-amb-maria/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/        ← fotos de perfil i galeria
└── videos/
    └── hero.mp4   ← vídeo de fons de la secció hero
```

## Vídeo hero

Col·loca el teu vídeo a `videos/hero.mp4`. Si el fitxer no existeix, la pàgina mostra automàticament el degradat CSS de fallback.

**Recomanacions:**
- Resolució: **1920 × 1080** (Full HD)
- Codec: **H.264** (compatibilitat màxima)
- Mida màxima: **< 10 MB** per a càrrega ràpida
- Durada: **15–30 s** en bucle
- Contingut suggerit: pla seqüència d'aigua tranquil·la, piscina, o flotació

## Personalitzar el contingut

1. **Correu i telèfon** — busca `maria@exemple.com` i `+34 6XX XXX XXX` a `index.html` i `js/main.js` i substitueix pels valors reals.
2. **Foto de perfil** — afegeix la imatge a `images/` i edita el CSS de `.am-about-img` a `css/styles.css`.
3. **Textos** — tot el contingut és HTML pur a `index.html`, sense CMS.

---

## Desplegar a GitHub Pages

### Pas 1 — Inicialitzar el repositori git

Dins la carpeta `watsu-amb-maria/`:

```bash
git init
git add .
git commit -m "chore: initial commit"
```

### Pas 2 — Crear el repositori a GitHub

Ves a [github.com/new](https://github.com/new), crea un repositori nou (ex: `watsu-amb-maria`) i deixa'l buit (sense README ni .gitignore).

### Pas 3 — Pujar el codi

Substitueix `EL_TEU_USUARI` pel teu nom d'usuari de GitHub:

```bash
git remote add origin https://github.com/EL_TEU_USUARI/watsu-amb-maria.git
git branch -M main
git push -u origin main
```

### Pas 4 — Activar GitHub Pages

1. Al repositori de GitHub, ves a **Settings → Pages**
2. A *Source*, tria **Deploy from a branch**
3. Selecciona la branca **main** i la carpeta **/ (root)**
4. Fes clic a **Save**

Al cap d'uns 60 segons, el lloc estarà disponible a:

```
https://EL_TEU_USUARI.github.io/watsu-amb-maria/
```

### Notes

- El vídeo `hero.mp4` **no** s'hauria de pujar a GitHub si supera els 100 MB (límit de Git). Per a fitxers grans, considera [Git LFS](https://git-lfs.github.com/) o allotja el vídeo externament i canvia el `src` al `<source>`.
- GitHub Pages serveix fitxers estàtics; no cal cap servidor ni backend.
