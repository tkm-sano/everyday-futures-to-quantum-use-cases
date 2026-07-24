# Everyday Futures to Quantum Use Cases

2055年の日常生活から量子ユースケースを構想する研究・BoFリポジトリである。

IEEE Quantum Week 2026 Birds-of-a-Featherセッションに向け、2055年の技術・社会前提、
Grover系量子探索の工学基盤、交通・配送および食料・栄養の派生マップ、未来ストーリー、
ワークショップ資料、Webサイトを管理する。

> 2055年は実用化予測ではなく、比較のために固定する **project scenario** である。

## Scope

共通基盤はGrover search、quantum amplitude amplification、Grover-based quantum
minimum findingである。実行方式は古典処理と量子探索を組み合わせるhybrid executionと、
探索の計算核を主に量子回路内で実行するquantum-dominant executionを区別する。

初期領域は次の二つである。

1. Traffic and delivery planning
2. Food and nutrition planning

詳しい設計原則は[`docs/framework.md`](docs/framework.md)を参照する。

## Repository structure

```text
content/
  framework/       2055年シナリオ、量子探索基盤、根拠、資源仮定
  use-cases/       交通・配送、食料・栄養のモデル、派生マップ、ストーリー
  workshop/        セッション、提示物、議論記録
data/
  public/          公開確認済みデータ
  private/         未匿名化・非公開データ（Git対象外）
  intermediate/    公開判断前の加工データ（Git対象外）
docs/              フレームワーク、データ方針、根拠、運営ガイド
schemas/           YAML正本のJSON Schemaと型定義
tools/             検証、公開データ検査、サイトデータ生成
site/              GitHub Pages用の静的サイト
tests/             リポジトリ構造とシナリオ条件のテスト
```

## Data policy

未匿名化原本、参加者情報、音声、逐語録、同意情報をコミットしない。GitHubおよび
GitHub Pagesへ公開するのは、匿名化・公開確認が完了し、
`publication.status: approved`が付与されたデータだけとする。

詳細は[`docs/data-policy.md`](docs/data-policy.md)を参照する。

## Local validation

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"

python tools/validate_repository.py
python tools/scan_public_data.py
python tools/build_site_data.py
pytest
ruff check tools tests
```

ローカルでサイトを確認する場合：

```bash
python -m http.server 8000 --directory site
```

## Documentation

- [`docs/framework.md`](docs/framework.md): 目的、問い、用語、量子探索基盤、派生方法
- [`docs/data-policy.md`](docs/data-policy.md): データ分類、同意、匿名化、公開判定
- [`docs/evidence.md`](docs/evidence.md): 根拠区分、参照クラス、不確実性
- [`docs/workshop-guide.md`](docs/workshop-guide.md): セッション、制作、レビュー

## GitHub Pages

`main`へ関連変更をpushすると、GitHub ActionsがYAML正本からサイト用JSONを生成し、
`site/`を公開する。

<https://tkm-sano.github.io/everyday-futures-to-quantum-use-cases/>

## License

コードはMIT Licenseで提供する。文章、図、画像、参加者由来コンテンツは、公開許諾を
確認後に別途利用条件を定める。
