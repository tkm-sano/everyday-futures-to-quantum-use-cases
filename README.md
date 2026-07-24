# Everyday Futures to Quantum Use Cases

**2055年の日常生活から量子ユースケースを構想する研究・BoFリポジトリである。**

本リポジトリは、IEEE Quantum Week 2026 Birds-of-a-Feather セッションに向けて、
過去のワークショップ記録、2055年の技術・社会前提、Grover系量子探索の工学的基盤、
交通・配送および食料・栄養の派生マップ、未来ストーリー、提示物、Webサイトを管理する。

> 2055年は実用化予測ではなく、比較のために固定する **project scenario** である。

## Common engineering baseline

- Grover search
- Quantum amplitude amplification
- Grover-based quantum minimum finding

実行方式は次の二つを区別する。

- **Hybrid execution**：古典処理が入力、候補生成、検証、業務制御を担い、量子処理が探索を担う。
- **Quantum-dominant execution**：候補符号化、制約判定、評価、探索、選択の計算核を主として量子回路内で実行する。

初期領域は次の二つである。

1. Traffic and delivery planning
2. Food and nutrition planning

## Workflow

```text
過去のワークショップ記録
        ↓
2055年の共通前提
        ↓
Grover系量子探索基盤
        ↓
交通／食料栄養の工学モデル
        ↓
派生マップ
        ↓
人物・未来ストーリー
        ↓
BoF資料
        ↓
GitHub Pages
```

## Data policy

未匿名化原本、参加者情報、音声、逐語録、同意情報は `data/private/` に置き、
`.gitignore` によりGit管理対象外とする。原本の正本はGoogle Drive等の
アクセス制限付きストレージで管理する。

GitHubおよびGitHub Pagesへ公開するのは、匿名化・公開確認が完了し、
`publication.status: approved` が付与されたデータだけである。

## Local validation

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
python 18_src/validate_repository.py
python 18_src/scan_public_data.py
pytest
```

## GitHub Pages

Webサイトは同じリポジトリの `site/` で管理する。

1. GitHubの **Settings → Pages** を開く。
2. Sourceを **GitHub Actions** に設定する。
3. `main`へpushすると `.github/workflows/deploy-pages.yml` が公開する。

公開URLの形式：

```text
https://<owner>.github.io/everyday-futures-to-quantum-use-cases/
```

## License

コードはMIT Licenseで提供する。文章、図、画像、参加者由来コンテンツは、
公開許諾を確認後に別途利用条件を定める。
