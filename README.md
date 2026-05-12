## GitHub Pages

Este projeto já está configurado para exportação estática com Next.js, então pode ser publicado no GitHub Pages sem SSR.

### Como publicar

1. Crie um repositório no GitHub com o mesmo nome usado no `basePath`: `portfolio-enzoyukiochinen`.
2. Faça o push do projeto para a branch `main`.
3. No repositório, abra Settings > Pages e selecione GitHub Actions como fonte.
4. A cada push na `main`, o workflow em [.github/workflows/deploy.yml](.github/workflows/deploy.yml) gera a pasta `out` e publica automaticamente.

### Observações

- Se o nome do repositório mudar, atualize o `basePath` em [next.config.ts](next.config.ts).
- O avatar em [app/page.tsx](app/page.tsx) usa o `basePath` para funcionar corretamente dentro do GitHub Pages.

### Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000 para ver o projeto localmente.
