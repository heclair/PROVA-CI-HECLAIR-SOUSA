# PROVA-CI-HECLAIR-SOUSA

Este projeto é uma aplicação simples de **Agenda de Compromissos**, desenvolvida em **TypeScript**, com testes automatizados utilizando **Jest**, e pipeline de Integração Contínua configurado com **GitHub Actions**.

## 👤 Autor
**Heclair Sousa**

---

## 📌 Funcionalidade Principal
A aplicação permite:
- Criar um compromisso com **título** e **data/hora**;
- Listar compromissos em ordem cronológica;
- Buscar compromissos por dia;
- Cancelar compromisso pelo ID.

Não há necessidade de banco de dados real. O armazenamento é feito em **memória**, conforme permitido no enunciado (**mock database**).

---

## 📁 Estrutura do Projeto

```
PROVA-CI-HECLAIR-SOUSA/
├─ src/
│  └─ index.ts         # Demonstração da agenda
├─ App.ts               # Funções principais da lógica da Agenda
├─ App.test.ts          # Testes com Jest
├─ jest.config.cjs      # Configuração de testes
├─ tsconfig.json        # Configuração do TypeScript
└─ .github/workflows/ci.yml   # Pipeline CI
```

---

## 🚀 Como Executar o Projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar os testes
```bash
npm test
```

### 3. Compilar o projeto
```bash
npm run build
```

### 4. Executar
```bash
npm start
```

---

## 🔁 Integração Contínua (CI)
O projeto inclui pipeline configurado no arquivo:

```
.github/workflows/ci.yml
```

### O pipeline executa automaticamente quando:
- Você faz **push** para a branch `main`
- Você abre um **Pull Request** para `main`

### O pipeline realiza:
1. Instalação das dependências
2. Execução dos testes automatizados
3. Build do projeto

---

## ✅ Requisitos da Prova Atendidos

| Requisito | Atendido? |
|----------|:---------:|
| Configuração correta do arquivo YAML do GitHub Actions | ✅ |
| Execução automática em push e pull request | ✅ |
| Execução bem-sucedida dos testes | ✅ |
| Organização correta do projeto e scripts no package.json | ✅ |
| Banco de dados mockado (sem Postgres) | ✅ |

---

## 📝 Licença
Uso acadêmico / educacional.

---

Desenvolvido por **Heclair Sousa** 💡
