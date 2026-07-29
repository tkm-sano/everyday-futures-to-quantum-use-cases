# Developing Quantum Use Cases from Future Everyday Life Scenarios

IEEE Quantum WeekのBirds-of-a-Feather（BoF）セッションに向け、未来の日常生活から
量子ユースケースを考えるための提案、ワークショップ設計、具体化例、検証ツール、
Webサイトを管理するリポジトリです。

従来の技術能力、ロードマップ、産業課題から始める方法を補完し、参加者が実現または
さらに検討したい日常生活の変化を出発点とします。短い未来ストーリーを通じて、
量子技術がどこで、どのように貢献し得るかを複数の専門分野から議論します。

## Guiding question

> Where and how might quantum technologies contribute to changes in everyday life that
> participants would like to see realized or explored further?

参加者はユースケースを事前に準備する必要はありません。量子ハードウェア、ソフトウェア、
ネットワーク、ハイブリッドシステムに加え、応用領域、ビジネス、政策、ガバナンス、
教育などの関心や経験を持ち寄ることを想定しています。

## Session overview

90分のセッションは5フェーズで構成します。

| Phase | Activity | Time |
|---|---|---:|
| 1 | Framing and audience engagement | 10 min |
| 2 | Story-based individual exploration | 15 min |
| 3 | Small-group discussion | 20 min |
| 4 | Plenary discussion | 35 min |
| 5 | Reflection and closing | 10 min |

未来ストーリーを読んだ参加者は、次の問いを起点に個人検討と対話を進めます。

1. Which change in everyday life depicted in the story is most significant?
2. What change would you like to see realized or explored?
3. Where might quantum technologies be relevant?

全体討議では、日常生活の変化、量子技術の貢献可能性、その理由、技術的・実務的・
社会的な問いを整理します。

## Repository scope

本リポジトリには、BoF提案のほか、方法を検討するための具体化例が含まれます。

- **BoF proposal and website**

  未来の日常生活から量子ユースケースを検討する、技術領域を限定しないセッション提案
- **Working scenario and engineering artifacts**

  2055年を議論用の`project_scenario`として固定し、Grover系量子探索を交通・配送と
  食料・栄養へ具体化した検討資料
- **Workshop and publication controls**

  セッション構成、派生マップ、公開判定、匿名化、技術レビューの管理資料
- **Validation utilities**

  YAML、派生マップ、公開対象データ、サイト構造を検査するPythonツール

2055年やGrover系探索は、BoF全体の対象範囲を限定するものではなく、このリポジトリで
方法を具体化・検証するための一つの作業例です。また、2055年は実用化予測ではありません。

## Website

<https://tkm-sano.github.io/everyday-futures-to-quantum-use-cases/>

ホームページは、BoF提案書
`data/private/source-documents/QCE26_proposal_2111.pdf`の内容を基に構成しています。
Q/ESTのデザイン言語を踏襲した静的HTML、CSS、JavaScriptで実装しています。

元PDFは公開リポジトリへコミットせず、`data/private/`以下でローカル管理します。
サイトにはプロジェクト概要、2055年シナリオ、BoF、メンバー、ワークショップ背景を
Aboutページとして掲載しています。

ページ構成：

- `/`：Aboutページ

探索データは公開ページとは分け、`content/use-cases/`と`content/framework/`のYAMLを正本とし、
`python tools/build_site_data.py`で`site/data/explorer.json`へ変換します。

## Repository structure

```text
content/
  framework/       シナリオ条件、量子探索基盤、根拠、資源仮定
  use-cases/       領域別モデル、派生マップ、人物、未来ストーリー
  workshop/        セッション構造、提示計画、議論記録
data/
  public/          公開確認済みデータ
  private/         未匿名化データと非公開原本（Git対象外）
  intermediate/    公開判断前の加工データ（Git対象外）
docs/
  framework.md     目的、用語、量子探索基盤、派生方法
  data-policy.md   同意、匿名化、データ分類、公開判定
  evidence.md      根拠区分、参照クラス、不確実性
  workshop-guide.md
                     セッション、制作、レビュー
schemas/           JSON Schemaと型定義
site/              GitHub Pages用静的サイト
tests/             リポジトリ構造とシナリオ条件のテスト
tools/             検証、公開データ検査、参考計算
```

## Data and publication policy

未匿名化原本、参加者情報、音声、逐語録、同意記録、公開判断前のデータをコミットしません。
公開リポジトリではPagesに表示されないファイルも閲覧できるため、保存場所とGit追跡状態の
両方を確認します。

公開ステータスは次のように扱います。

| Status | Meaning |
|---|---|
| `pending_review` | 公開判断前 |
| `internal_only` | 内部利用限定 |
| `approved` | 匿名化・同意・公開方針の確認済み |

実在する参加者由来データは、`approved`になるまで`data/private/`または
`data/intermediate/`で管理します。詳細は
[`docs/data-policy.md`](docs/data-policy.md)を参照してください。

## Local setup and validation

Python 3.11以上を使用します。

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

検証：

```bash
python tools/validate_repository.py
python tools/scan_public_data.py
pytest
ruff check tools tests
```

ローカルサイト：

```bash
python -m http.server 8000 --directory site
```

<http://localhost:8000/>を開きます。

## GitHub Pages deployment

`main`の`site/`、`content/`、公開データ検査、またはPages workflowに変更があると、
GitHub Actionsが公開データ検査を行い、`site/`をGitHub Pagesへデプロイします。

Workflow：

- [Validate repository](.github/workflows/validate.yml)
- [Deploy GitHub Pages](.github/workflows/deploy-pages.yml)

## Documentation

- [Framework](docs/framework.md)
- [Explore Use Cases content workplan (Japanese)](docs/explore-use-cases-content-workplan-ja.md)
- [M1-01〜M1-07 背景アイデア整理・ストーリーの幹](docs/m1-01-to-m1-07-background-ideas-story-trunks-mermaid-ja.md)
- [QCE26 BoF 90分セッション・スライド構成案](docs/qce26-bof-90-minute-session-and-slide-plan-ja.md)
- [Data and publication policy](docs/data-policy.md)
- [Evidence and uncertainty](docs/evidence.md)
- [Workshop and production guide](docs/workshop-guide.md)
- [Contributing](CONTRIBUTING.md)
- [Citation metadata](CITATION.cff)

## BoF authors

- Takuma Sano — Keio University; moderator
- Haruka Shiina — Keio University
- Reiko Iwasaki — Keio University
- Akihito Soeda — National Institute of Informatics
- Shota Nagayama — Keio University; corresponding organizer

## License

コードは[MIT License](LICENSE)で提供します。文章、図、画像、参加者由来コンテンツは、
公開許諾と適用する利用条件を個別に確認してください。
