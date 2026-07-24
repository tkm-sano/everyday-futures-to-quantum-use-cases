# Data and publication policy

## Classification

- `data/private/`: 未匿名化原本、参加者情報、音声、逐語録、同意情報
- `data/intermediate/`: 公開判定前の加工データ
- `data/public/`: 匿名化と公開確認が完了したデータ
- `data/derived/`: 公開確認済み入力から生成したデータ

`data/private/`と`data/intermediate/`はGit管理しない。公開リポジトリではPagesに表示
されないファイルも閲覧できるため、ラベルだけで非公開性を担保しない。

## Workshop-record selection

初期領域は交通・配送と食料・栄養である。採用する記録は次をすべて満たすこと。

1. 2055年の生活変化へ接続できる。
2. Grover系の候補探索・制約判定・最小値探索へ定式化できる。
3. 個人情報を含まない。
4. 参加者同意と研究上の公開方針が確認されている。

## Publication status

- `pending_review`: 公開判断前
- `internal_only`: 内部利用限定
- `approved`: 公開確認済み

`approved`以外の実データを公開リポジトリへコミットしない。構造例が必要な場合は、
実在の参加者記録と混同しない合成データを使用する。

## Pre-publication checks

公開前に`tools/scan_public_data.py`を実行し、コミット対象とignored filesを確認する。
自動検査は同意確認の代替ではない。
