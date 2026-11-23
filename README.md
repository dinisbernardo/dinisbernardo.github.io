# Site pessoal

feito com [Astro](https://astro.build), com a ajuda do ClaudeCode (Opus5.5).

## Começar


```bash
npm install      # instala as dependências (só da primeira vez)
npm run dev      # abre o site em http://localhost:4321 e atualiza ao gravar
npm run build    # gera a versão final na pasta dist/
npm run preview  # mostra a versão final localmente
```

## Onde está cada coisa

| O que mudar | Ficheiro |
| --- | --- |
| Nome, foto, links, About me, educação, skills, escala de notas | `src/data/profile.ts` |
| Reviews | `src/content/reviews/*.md` |
| Cores, tipografia, espaçamentos (modo claro e escuro) | `src/styles/global.css` |
| Página inicial | `src/pages/index.astro` |
| Lista de reviews | `src/pages/reviews/index.astro` |
| Página de cada review | `src/pages/reviews/[id].astro` |
| Perfil | `src/pages/profile.astro` |
| Menu e botão claro/escuro | `src/components/Header.astro` |

Foto e CV: põe `photo.jpg` e `cv.pdf` na pasta `public/` e, em `profile.ts`, muda `photo: null` para `photo: 'photo.jpg'`.

## Escrever uma review

1. Copia `src/content/reviews/_template.md` para, por exemplo, `src/content/reviews/hollow-knight.md` (o nome do ficheiro passa a ser o endereço: `/reviews/hollow-knight/`).
2. Preenche os campos do topo (nota, plataforma, data…) e escreve o texto em Markdown.
3. Para uma capa, põe a imagem na mesma pasta (ou numa subpasta `images/`) e escreve `cover: ./images/hollow-knight.jpg`.
4. Com `draft: true` a review só aparece no `npm run dev`; muda para `false` para a publicar.

Apaga `example-review.md` quando tiveres a primeira review a sério.

## Publicar no GitHub Pages

1. Cria um repositório no GitHub e faz push deste projeto para a branch `main`.
2. No repositório: **Settings → Pages → Source: GitHub Actions**.
3. Em `astro.config.mjs`, muda `site` para `https://<o-teu-username>.github.io`.
   - Se o repositório se chamar `<o-teu-username>.github.io`, deixa `base: '/'`.
   - Se tiver outro nome (ex. `GameIndustryWebsite`), muda para `base: '/GameIndustryWebsite'`.
4. Cada push para `main` publica o site automaticamente (`.github/workflows/deploy.yml`).
