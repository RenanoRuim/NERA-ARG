# NERA — frontend

Aplicação React com Vite para o site institucional e o terminal ficcional da
NERA, parte do ARG de *The Last Bunker*.

## Requisitos

- Node.js compatível com a versão do Vite definida em `package.json`
- Backend NERA em execução para login e notícias

## Desenvolvimento

```sh
npm ci
npm run dev
```

O Vite informa no terminal o endereço local. Para validar o projeto:

```sh
npm run lint
npm run build
```

## Estrutura de `src`

```text
src/
├── assets/       imagens e arquivos estáticos importados
├── components/   cabeçalho, rodapé e notícias reutilizáveis
├── pages/        páginas públicas e páginas do terminal administrativo
│   └── admin/    áreas e controle de acesso do terminal NERA
├── styles/       folhas de estilo associadas às páginas/componentes
├── App.jsx       rotas da aplicação
└── main.jsx      inicialização do React
```

O frontend chama o backend hospedado em `https://nera-arg.onrender.com`.
Configure uma URL via variável de ambiente antes de separar ambientes local,
homologação e produção.
