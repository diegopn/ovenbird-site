# Ovenbird site

Site de apresentação do [Ovenbird](https://github.com/diegopn/ovenbird), editor LaTeX nativo para GNOME.

[Manual do usuário (versão 0.4.0)](https://diegopn.github.io/ovenbird-site/manual/): instalação, projetos, edição LaTeX e biblioteca BibTeX.

## Idiomas e rotas

- Português (Brasil): https://diegopn.github.io/ovenbird-site/
- English: https://diegopn.github.io/ovenbird-site/en/
- Español: https://diegopn.github.io/ovenbird-site/es/
- Manual em português: https://diegopn.github.io/ovenbird-site/manual/
- Manual em inglês: https://diegopn.github.io/ovenbird-site/en/manual/
- Manual em espanhol: https://diegopn.github.io/ovenbird-site/es/manual/

## Estrutura

- _config.yml: domínio, caminho-base, idiomas e dados confirmados do aplicativo.
- _layouts/default.html: estrutura comum do documento e carregamento dos recursos.
- _includes/: cabeçalho, rodapé, metadados, dados estruturados e Google Analytics compartilhados.
- index.html, en/ e es/: conteúdo localizado, com metadados próprios no front matter.
- manual/, en/manual/ e es/manual/: manuais localizados, publicados nas rotas atuais.
- assets/ e manual/screenshots/: imagens do site e capturas usadas pelo manual.
- style.css e script.js: apresentação e interações compartilhadas.

## GitHub Pages e prévia local

O repositório usa Jekyll e mantém as páginas publicadas em Settings → Pages → Deploy from a branch → main → /(root). O GitHub Pages processa o _config.yml, layouts e includes automaticamente.

Para visualizar localmente, instale o Jekyll e execute jekyll serve. A configuração já define o baseurl necessário para testar as mesmas rotas do GitHub Pages.

O seletor de idioma navega entre páginas equivalentes. A preferência de tema claro/escuro é salva no navegador.
