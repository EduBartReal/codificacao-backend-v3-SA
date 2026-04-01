# codificacao-backend-v3-SA# 🎬 Netflix API

Uma API caseira com tema de streaming, onde você pode explorar filmes, diretores e atores favoritos.

## 🎯 Meta do Projeto

Criar uma API REST que simula um serviço de streaming, permitindo buscar filmes por diretor ou ator favorito, filtrar por gênero, ano e nacionalidade, e explorar o catálogo completo.

---

## 🚀 Como rodar
```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

---

## 📡 Rotas disponíveis

### 🎬 Filmes
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/movies` | Lista todos os filmes |
| GET | `/api/movies?genre=Action` | Filtra por gênero |
| GET | `/api/movies?year=2010` | Filtra por ano |
| GET | `/api/movies?directorId=p1` | Filtra por diretor |
| GET | `/api/movies/:id` | Busca filme por ID |

### 👥 Pessoas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/people` | Lista todos |
| GET | `/api/people?role=director` | Filtra por diretores |
| GET | `/api/people?role=actor` | Filtra por atores |
| GET | `/api/people?nationality=Brazilian` | Filtra por nacionalidade |
| GET | `/api/people/:id` | Busca pessoa por ID |
| GET | `/api/people/:id/movies` | Filmes de um diretor ou ator |

---

## 🗂️ Estrutura do Projeto
```
SA/
├── src/
│   ├── data/
│   │   ├── movies.js        # Mock de filmes
│   │   └── people.js        # Mock de atores e diretores
│   ├── routes/
│   │   └── netflixRoutes.js # Rotas da API
│   ├── services/
│   │   └── netflixServices.js # Regras de negócio
│   └── server.js            # Servidor Express
├── package.json
└── README.md
```

---

## 📅 Histórico de Desenvolvimento

**11/03/2026 — Initial commit**
- Repositório criado

**16/03/2026 — Iniciando API para SA**
- Estrutura de pastas criada
- Configuração inicial do servidor Express

**17/03/2026 — Atualização projeto**
- Mock de dados de filmes e pessoas adicionado
- Rotas de `getAll` e `getById` implementadas
- Services com classe criados no padrão ESModule

**25/03/2026 — Atualização filmes, diretores e atores**
- Expansão do catálogo com filmes brasileiros, coreanos, japoneses e mais
- Novos diretores e atores adicionados ao mock

**31/03/2026 — Alterações grandes nas funcionalidades**
- Correções nas rotas e imports
- Testes via Thunder Client
- Ajustes no padrão ESModule e camelCase nos arquivos
- Atualização do README (Estava salvo no local errado, então foi construído do zero novamente😢)

---

## 🛠️ Tecnologias

- Node.js
- Express

---

*Projeto desenvolvido para a aula de backend — SA Codificação* 🚀