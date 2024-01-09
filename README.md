## 🚀 Code quest

TODO: add screenshot of landing page and compodoc

### Overview 🔖

Explore the world of Angular and NgRx with **Code quest**, a single-page application (SPA) that showcases key features in frontend development.

### Features 🎁

User is available to run application, then:

- visit page with books
  - perform search for book's name
  - add/remove book to favorite books
- visit page with favorite books
  - remove book from favorite books

> IMPORTANT
>
> Out of demo purpose, all functionality related to favorite books is stored locally in the browser.
> Please note that page refresh or server restart will cause DATA LOSS of all favorite books.

#### Technical details

- **complete UI styling with responsiveness** (mobile and desktop, starting with mobile first), having good UX in mind
- **modules** (books, shared and design system) with lazy loading
- **layout** (header with navigation, footer and main)
- **components** (breadcrumbs, pagination, generic error, book, book list and book detail)
- **routing with page components**
  - /
  - /books
  - /books/detail/:id
  - /books/favorite
  - /design-system
- **services** (books and favorite books)
- **store** (using actions, effects, reducers and selectors for books and favorite books)
- **pipes** (divider and numeric list)
- **icons with lazy loading**
- **mocks** (used at design system page and unit tests)
- **utility functions**
- **generated documentation** of application parts

All components are prefixed with `cq` (i.e. code quest), e.g. **cq-breadcrumbs** to potentially avoid conflicts with other libraries.

### Project structure of monorepo and tech stack 💻

```bash
project-root/
│
├── client/
│ └── ...
│
└── api/
  └── ...
```

- [Angular (v16.2)](https://angular.dev/)
- [NgRx (v16)](https://ngrx.io/)
- [Nest.js (v10.0)](https://nestjs.com/)

> To have better understanding of application parts and details, run `yarn compodoc` and visit [http://127.0.0.1:8080](http://127.0.0.1:8080).

You can read more at [official page of compodoc](https://compodoc.app/).

### API

[An API of Ice And Fire](https://anapioficeandfire.com/) has been used to provide mock data.

### Getting started 💪

#### Installation

1. Clone the repository: `git clone https://github.com/ZigaVukcevicDev/code-quest`
2. Change to the project directory: `cd code-quest`
3. Install dependencies:
   - For the client: `cd client && yarn install`
   - For the API: `cd api && yarn install`

### Usage 📚

#### Running the client

```bash
cd client
yarn start
```

#### Running the API

```bash
cd api
yarn start:dev
```

Visit

- [http://localhost:4200](http://localhost:4200) for the client and
- [http://localhost:3000](http://localhost:3000) for the API.

### Design system 🎨

Visit [http://localhost:4200/design-system](http://localhost:4200/design-system) for styling guides, representations of elements or components which you can reuse.

> This page is always a **good entry point** to continue development. If you develop something new, please add it to the page, so next developer can pick it up.

### VSC plugins for smoother DX 🏄

- [Tailwind Config Viewer](https://marketplace.visualstudio.com/items?itemName=KalimahApps.tailwind-config-viewer)
- [Tailwind Documentation](https://marketplace.visualstudio.com/items?itemName=alfredbirk.tailwind-documentation)
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Resources for best practices

- [How to define a top-level folder structure for your Angular project](https://medium.com/@VenuThomas/how-to-define-a-top-level-folder-structure-for-your-angular-project-de6d151783e5) with [source code](https://github.com/venuthomas/AngularFileStructure)
