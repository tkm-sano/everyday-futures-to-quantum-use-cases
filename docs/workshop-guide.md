# Workshop and production guide

## Session

資料を誰に、いつ、どの順序で見せるかは`content/workshop/`のYAMLで管理する。
参加者が追加した派生ノードと問いは、匿名化と公開確認を経て記録する。

## Visual and presentation design

人物の活動と製品・サービスを中心に設計し、装飾的な量子表現を避ける。提示物は
opening overview、story card、seed map、discussion cardを基本単位とする。

## Generation control

固定要素、可変要素、禁止表現、生成履歴、レビュー結果を管理する。画像生成の
raw outputsとrejected outputsはGit管理せず、公開確認済みの選定画像だけを公開する。

## Review

アルゴリズム、オラクル、資源仮定、古典ベースライン、派生マップを技術レビューする。
参加者用、スクリーン用、ファシリテーター用の完成資料は同じ公開判定を適用する。
