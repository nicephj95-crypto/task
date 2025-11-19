# GitHub로 프로젝트 올리기: 빠른 안내

`work` 브랜치가 있는 현재 로컬 저장소를 새 GitHub 저장소로 푸시하는 절차입니다. 터미널에서 그대로 따라 하면 됩니다.

1. GitHub에서 비어 있는 새 저장소를 만듭니다. (README·라이선스 초기화 X)
2. 로컬 저장소의 현재 원격을 확인합니다. 이미 `origin`이 있다면 URL을 바꿔도 됩니다.
   ```bash
   git remote -v
   ```
3. 원격이 없다면 새로 추가합니다.
   ```bash
   git remote add origin https://github.com/<사용자명>/<저장소명>.git
   ```
   - 만약 기존 `origin` 주소를 바꾸고 싶다면:
     ```bash
     git remote set-url origin https://github.com/<사용자명>/<저장소명>.git
     ```
4. 현재 `work` 브랜치를 한 번에 올립니다.
   ```bash
   git push -u origin work
   ```
5. 이후에는 일반적인 흐름으로 커밋 후 푸시하면 됩니다.
   ```bash
   git add .
   git commit -m "feat: 변경 내용"
   git push
   ```

## 메인 브랜치와 합칠 때 충돌이 날 경우

README나 주요 컴포넌트가 충돌하면, `.gitattributes`에 미리 정의된 규칙 덕분에 현재 브랜치 쪽 내용이 자동으로 선택됩니다. 아래 순서로
진행해 보세요.

```bash
git fetch origin main
git merge origin/main   # 충돌 파일은 자동으로 현 브랜치 버전을 사용
git status              # 변경 사항 확인
git commit -am "chore: merge main"
```

다른 브랜치 내용을 유지하고 싶은 파일이 있다면 `.gitattributes`의 해당 줄을 삭제하거나 직접 병합하면 됩니다.
