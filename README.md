# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Pushing this project to your GitHub account

The repository currently lives on the `work` branch. To publish it to your own GitHub repository:

1. Create an empty repository on GitHub (do **not** initialize with a README or license).
2. Point this local repo to the new remote:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   ```
3. Push the current branch:
   ```bash
   git push -u origin work
   ```
4. For future updates, commit your changes locally and push them:
   ```bash
   git add .
   git commit -m "feat: describe your change"
   git push
   ```

### GitHub로 푸시하기 (한국어 안내)

위 절차를 한국어로 정리했습니다. 로컬에서 `work` 브랜치를 그대로 올릴 수 있어요. 필요하면 루트의 [`PUSH_KR.md`](./PUSH_KR.md)에 있는 빠른 명령어 모음도 참고하세요.

1. GitHub에서 **빈 저장소**를 하나 만들고, README나 라이선스는 추가하지 않습니다.
2. 지금 작업 중인 로컬 저장소에 새 원격을 등록합니다.
   ```bash
   git remote add origin https://github.com/<사용자명>/<저장소명>.git
   ```
3. 현재 `work` 브랜치를 원격에 최초로 올립니다.
   ```bash
   git push -u origin work
   ```
4. 이후에는 변경사항을 커밋한 뒤 평소처럼 푸시하면 됩니다.
   ```bash
   git add .
   git commit -m "feat: 변경 내용을 적어주세요"
   git push
   ```
5. 원격이 제대로 연결됐는지 확인하고 싶다면 다음 명령으로 목록을 확인할 수 있습니다.
   ```bash
   git remote -v
   ```

### 병합 충돌을 빠르게 풀고 싶다면

`work` 브랜치를 다른 메인 브랜치와 합칠 때 README나 주요 컴포넌트가 자주 충돌한다면, 루트의 `.gitattributes`가 현재 브랜치 버전을 우선하도록
자동 병합 규칙을 제공합니다. 기본 흐름은 다음과 같습니다.

1. 원격 메인 브랜치를 가져옵니다.
   ```bash
   git fetch origin main
   ```
2. 메인 브랜치와 병합할 때 충돌 파일은 자동으로 이 브랜치 내용을 선택합니다.
   ```bash
   git merge origin/main
   ```
3. 병합 결과를 확인한 뒤 커밋하면 충돌 없이 PR을 올릴 수 있습니다.
   ```bash
   git status
   git commit -am "chore: resolve merge with main"
   ```

> 참고: 특정 파일에서 상대 브랜치 내용을 유지하고 싶다면 `.gitattributes`를 수정하거나 해당 파일만 수동으로 병합하면 됩니다.
