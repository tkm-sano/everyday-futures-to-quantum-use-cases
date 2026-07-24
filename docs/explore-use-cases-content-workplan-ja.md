# Explore Use Cases コンテンツ設計・作業進行ファイル

## 0. このファイルの目的

本ファイルは、Webサイトの **Explore Use Cases** に掲載する内容を準備するための作業用ドキュメントである。

対象工程は、次の4段階とする。

1. 技術・社会前提設計
2. 背景アイデア整理
3. ストーリー世界設計
4. アイデアシード設計

最終的には、参加者がWebサイト上で次の順に進める状態を目指す。

```text
Story
↓
Idea Seed
↓
EXPAND
↓
Technology / Policy / Design / Business
```

本ファイルでは、各工程で決める内容、記録する項目、成果物、完了条件を管理する。

---

# 1. 全体方針

## 1.1 Explore Use Casesの位置づけ

Explore Use Casesは、未来ストーリーを読むだけのページではない。

参加者が、

- 未来の日常生活を理解する
- ストーリーに含まれるアイデアの種を選ぶ
- その種を別の観点へ展開する
- Technology / Policy / Design / Businessのいずれかから議論を始める

ための参加型インターフェースとして設計する。

## 1.2 基本原則

- 2055年を未来予測として断定しない。
- 2055年を議論のための探索用シナリオとして扱う。
- 技術前提と社会前提を同時に設計する。
- 量子技術だけで世界全体が成立する構造にしない。
- 過去のワークショップアイデアを背景として用いる。
- ストーリーは一人の人物と一つの日常場面を中心にする。
- アイデアシードは技術だけに限定しない。
- 各シードはTechnology / Policy / Design / Businessへ展開可能にする。
- 参加者に見せる内容と、運営側で保持する根拠情報を分ける。

---

# 2. 作業全体の進行

```text
Phase 0：技術・社会前提設計
↓
Phase 1：背景アイデア整理
↓
Phase 2：ストーリー世界設計
↓
Phase 3：アイデアシード設計
↓
Web掲載用データ作成
```

## 2.1 進捗管理

| Phase | 作業 | 状態 | 担当 | 期限 | 備考 |
|---|---|---|---|---|---|
| 0 | 技術・社会前提設計 | Not Started |  |  |  |
| 1 | 背景アイデア整理 | Not Started |  |  |  |
| 2 | ストーリー世界設計 | Not Started |  |  |  |
| 3 | アイデアシード設計 | Not Started |  |  |  |
| 4 | Web掲載用データ化 | Not Started |  |  |  |

状態は次を使用する。

```text
Not Started
In Progress
Needs Review
Approved
Blocked
```

---

# Phase 0｜技術・社会前提設計

## 0.1 目的

過去のワークショップアイデアを、どのような2055年の世界条件の中で読み直すかを定める。

ここで定める前提は、2055年の実現予測ではなく、未来ストーリーとユースケースを探索するための共通条件である。

```text
技術的に何が可能か
×
社会的に何が成立しているか
＝
ストーリーを作るための世界条件
```

---

## Step 0-1｜シナリオの対象範囲を決める

### 決定事項

| 項目 | 決定内容 | 状態 | 根拠・備考 |
|---|---|---|---|
| 対象年 | 2055年 | Draft |  |
| 位置づけ | 未来予測ではなく探索用シナリオ | Draft |  |
| 主な対象 | 人の日常生活と、それを支える製品・サービス | Draft |  |
| 地域範囲 |  | Open | 日本／都市／地域を限定するか |
| ストーリー間の共通性 | 共通前提＋領域別前提＋ストーリー固有前提 | Draft |  |
| 産業・公共領域の扱い |  | Open | 日常生活との接続がある範囲に限定するか |
| 対象外 |  | Open |  |

### 完了条件

- [ ] 対象年が決まっている。
- [ ] 未来予測ではなく探索用シナリオであると明記されている。
- [ ] 対象と対象外が区別されている。
- [ ] 共通前提・領域別前提・ストーリー固有前提の階層が決まっている。

---

## Step 0-2｜技術前提の分類を決める

### 使用する分類

| Category ID | 技術分類 | 含める内容 | 採用 |
|---|---|---|---|
| TC-01 | Computing | 古典計算、AI、量子計算 | Yes |
| TC-02 | Data | 取得、保存、連携、標準化 | Yes |
| TC-03 | Communication | サービス、端末、設備間の接続 | Yes |
| TC-04 | Sensing | 人、設備、環境の状態取得 | Yes |
| TC-05 | Infrastructure | クラウド、エネルギー、物流設備 | Yes |
| TC-06 | Interface | 確認、修正、拒否、説明 | Yes |
| TC-07 | Verification | 出力の検証、安全確認、監査 | Yes |

### 決定事項

- [ ] すべての分類を共通前提として扱うか。
- [ ] 領域別にのみ必要な分類を分けるか。
- [ ] センシングを今回の中心技術から外すか。
- [ ] 通信・データ連携を共通基盤として固定するか。
- [ ] Verificationを必須要素として扱うか。

---

## Step 0-3｜量子技術の位置づけを決める

### 決定表

| 項目 | 決定内容 | 状態 |
|---|---|---|
| 提供形態 | クラウド型計算資源 | Draft |
| 基本構成 | 古典・量子ハイブリッド | Draft |
| 担当範囲 | システム全体ではなく一部処理 | Draft |
| 入力準備 | 古典システムが担当 | Draft |
| 制御 | 古典システムが担当 | Draft |
| 出力検証 | 古典システムまたは人間が担当 | Draft |
| 量子優位 | すべての問題で成立するとは仮定しない | Draft |
| 代替経路 | 古典処理への切替可能性を残す | Open |
| 利用コスト | 制約が残る | Open |
| 待ち時間 | 制約が残る | Open |
| ハードウェア方式 | 固定しない | Draft |
| 量子ビット数 | 固定しない | Draft |
| 特定アルゴリズム | 初期段階では固定しない | Draft |

### 共通システム構成

```text
利用者・現場
↓
製品・サービス
↓
データ連携・制御
↓
古典計算・AI
↓
量子計算サブルーチン
↓
古典検証
↓
人間またはサービスによる判断・実行
```

### レビュー項目

- [ ] 量子計算だけで全処理が完結していない。
- [ ] 古典計算・AI・データ基盤との役割分担がある。
- [ ] 検証工程がある。
- [ ] 代替技術の可能性が残っている。
- [ ] 「量子だから高速」という説明だけになっていない。

---

## Step 0-4｜一般技術前提を決める

### Technical Premise Register

| Premise ID | Category | 技術前提 | 適用範囲 | Status | Fixed / Open | 根拠 | 未確定事項 |
|---|---|---|---|---|---|---|---|
| TP-001 | Computing | 古典・量子ハイブリッド計算が利用可能である | Common | Draft | Fixed |  |  |
| TP-002 | Data | 複数サービス間で一定範囲のデータ連携が可能である | Common | Draft | Fixed |  |  |
| TP-003 | Interface | 利用者または現場担当者が結果を確認できる | Common | Draft | Fixed |  |  |
| TP-004 | Verification | 計算結果を古典処理で検証できる | Common | Draft | Fixed |  |  |
| TP-005 | Infrastructure | 高度な計算資源をクラウド経由で利用できる | Common | Draft | Fixed |  |  |
| TP-006 | Communication | サービスと設備が常時接続可能である | Common | Draft | Conditional |  | 地域差をどう扱うか |
| TP-007 | Sensing | 状況変化をリアルタイムに取得できる | Domain | Draft | Open |  |  |

必要に応じて行を追加する。

---

## Step 0-5｜社会前提の分類を決める

### 使用する分類

| Category ID | 社会分類 | 含める内容 | 採用 |
|---|---|---|---|
| SC-01 | Lifestyle | 働き方、家族、移動、買物、食事 | Yes |
| SC-02 | Institutions | 法律、規制、認証、標準 | Yes |
| SC-03 | Data Governance | 保有、同意、共有、削除 | Yes |
| SC-04 | Labor | 労働者の役割、裁量、責任 | Yes |
| SC-05 | Access | 地域、所得、年齢、障害による利用差 | Yes |
| SC-06 | Market | 提供者、顧客、支払者、費用 | Yes |
| SC-07 | Public Services | 自治体、公共機関、公共保障 | Yes |
| SC-08 | Culture and Values | 自動化、個人化、共有への価値観 | Yes |

---

## Step 0-6｜人と自動システムの関係を決める

### 決定表

| 項目 | 決定内容 | Status |
|---|---|---|
| 自動処理 | 一般化している | Draft |
| 確認権 | 利用者・現場担当者が確認できる | Draft |
| 修正権 | 利用者・現場担当者が修正できる | Draft |
| 拒否権 | 一定範囲で拒否できる | Open |
| 説明 | 判断理由または処理内容を確認できる | Open |
| 最終責任 | 完全にはアルゴリズムへ移譲しない | Draft |
| 異議申立て | 手段が存在する | Open |
| 非利用選択 | 代替手段が存在する | Open |

### 未決定事項

- [ ] 拒否権はすべてのサービスで共通か。
- [ ] 利用者と現場担当者の権限が衝突した場合の優先順位。
- [ ] 自動判断の説明水準。
- [ ] 事故・損害時の責任主体。

---

## Step 0-7｜データガバナンス前提を決める

### 決定表

| 項目 | 決定内容 | Status |
|---|---|---|
| データ連携 | 本人が許可した範囲で可能 | Draft |
| 同意 | 必要 | Draft |
| 利用範囲の確認 | 可能 | Draft |
| 利用範囲の変更 | 可能 | Draft |
| 同意撤回 | 可能 | Draft |
| 目的外利用 | 原則不可 | Draft |
| 非提供者向け代替 | 存在する | Open |
| 子ども・高齢者の扱い |  | Open |
| 匿名化・仮名化 |  | Open |
| データ保有主体 |  | Open |

---

## Step 0-8｜サービス提供とアクセスの前提を決める

### 決定表

| 項目 | 決定内容 | Status |
|---|---|---|
| 提供主体 | 民間・公共・地域事業者が混在 | Draft |
| サービス水準 | 地域差・所得差が残る | Draft |
| 基本保障 | 一部サービスは公共的に保障される | Open |
| 高度機能 | 有料の場合がある | Open |
| 顧客と利用者 | 同一とは限らない | Draft |
| 費用負担 | 個人・企業・自治体が混在 | Open |
| 監査・認証 | 何らかの制度が存在する | Open |
| 利用不能地域 | 残る可能性がある | Draft |

---

## Step 0-9｜技術前提と社会前提を対応させる

### Technical–Social Premise Matrix

| Technical Premise ID | Social Premise ID | 関係 | 必須度 | 矛盾・論点 |
|---|---|---|---|---|
| TP-002 | SP-003 | データ連携には本人同意が必要 | Required | 同意撤回後の処理 |
| TP-003 | SP-001 | 自動判断には確認・修正権が必要 | Required | 誰の判断を優先するか |
| TP-005 | SP-006 | クラウド量子資源には費用負担が必要 | Required | 一部事業者への依存 |
| TP-004 | SP-002 | 検証方法には認証・監査制度が必要 | Conditional | 監査主体 |
| TP-006 | SP-005 | 常時接続にはアクセス格差への対応が必要 | Conditional | 非接続地域 |

### 作業

- [ ] すべてのFixed技術前提に対応する社会前提を付ける。
- [ ] すべてのFixed社会前提に対応する技術・運用条件を付ける。
- [ ] 一対一でない関係も記録する。
- [ ] 矛盾する前提を抽出する。
- [ ] ストーリー内で解決せず、シードとして開く論点を選ぶ。

---

## Step 0-10｜Fixed / Open / Conditional / Excludedを確定する

### Premise Status Register

| Premise ID | 前提 | Status | 理由 | 参加者に見せるか |
|---|---|---|---|---|
| TP-001 | 古典・量子ハイブリッドが利用可能 | Fixed | 共通世界を成立させるため | Yes |
| TP-002 | 一定範囲のデータ連携が可能 | Fixed | 複数サービスを成立させるため | Yes |
| SP-001 | 人間が確認・修正できる | Fixed | 完全自動化を避けるため | Yes |
| SP-002 | 費用負担主体 | Open | Businessへの展開対象 | No |
| SP-003 | データ共有範囲 | Open | Policy / Designへの展開対象 | No |
| TP-007 | リアルタイムセンシング | Conditional | ストーリーによって必要性が異なる | No |
| EX-001 | 無制限なデータ共有 | Excluded | 世界を万能化しないため | Yes |

---

## Step 0-11｜前提の階層を確定する

### Common Premises

すべてのストーリーに適用する。

| Premise ID | 前提 | Status |
|---|---|---|
|  |  |  |

### Domain Premises

交通・配送、食料・栄養など特定領域に適用する。

| Domain | Premise ID | 前提 | Status |
|---|---|---|---|
| Traffic / Delivery |  |  |  |
| Food / Nutrition |  |  |  |

### Story-Specific Premises

特定の人物・場面だけに適用する。

| Story ID | Premise ID | 前提 | Status |
|---|---|---|---|
|  |  |  |  |

---

## Step 0-12｜今回成立していないものを決める

### Excluded Conditions

- [ ] 量子計算がすべての古典計算を置き換えている。
- [ ] すべての問題で量子優位が成立している。
- [ ] データ共有が無制限である。
- [ ] 自動化に誤りが存在しない。
- [ ] 人間の判断が不要である。
- [ ] すべてのサービスが無料である。
- [ ] アクセス格差が完全に消滅している。
- [ ] 社会的対立が解消されている。
- [ ] 法制度が世界共通で統一されている。

### Phase 0 成果物

- [ ] Scenario Scope
- [ ] Technical Premise Register
- [ ] Social Premise Register
- [ ] Technical–Social Premise Matrix
- [ ] Premise Status Register
- [ ] Premise Hierarchy
- [ ] Scenario Boundary

### Phase 0 完了ゲート

- [ ] 技術前提と社会前提の双方がある。
- [ ] FixedとOpenが区別されている。
- [ ] 共通・領域別・ストーリー固有が区別されている。
- [ ] 技術前提と社会前提が対応づけられている。
- [ ] 量子技術で万能化された世界になっていない。
- [ ] 社会問題がすべて解消された世界になっていない。
- [ ] 背景アイデアを評価できる粒度になっている。

---

# Phase 1｜背景アイデア整理

## 1.1 目的

`ワークショップ_アイデアまとめ.xlsx`にあるアイデアを、ストーリー世界とアイデアシードの根拠として利用できる形へ整理する。

---

## Step 1-1｜使用するデータ範囲を確定する

### 使用する項目

- Idea ID
- Workshop ID
- Original Idea
- Log
- Requirements
- Category
- Description Type
- Notes

### 使用しない項目

- 氏名
- メールアドレス
- 個人を特定できる所属情報
- ストーリー作成に不要な参加者属性

### 決定表

| 項目 | 決定内容 | Status |
|---|---|---|
| 対象ワークショップ |  | Open |
| 全件／一部 |  | Open |
| 個人情報 | 使用しない | Draft |
| 公開対象 | アイデア本文と加工後データ | Open |
| 原文保存 | 行う | Draft |
| Idea ID維持 | 行う | Draft |

---

## Step 1-2｜原文管理ルールを確定する

### ルール

- Original Ideaは変更しない。
- 誤字修正はNormalized Idea側で行う。
- 元のIdea IDとWorkshop IDを必ず保持する。
- 複数行で一つの意味を持つ場合は一件として保持する。
- 独立した複数の意味がある場合は分割し、Parent Idea IDを残す。
- 原文にない技術や意味を追加しない。
- 願望と実現方法を別項目へ分ける。

---

## Step 1-3｜Idea Decomposition Schemaを確定する

### 背景アイデア整理表

| Field | 内容 |
|---|---|
| Idea ID | 元のアイデアID |
| Parent Idea ID | 分割前のアイデアID |
| Workshop ID | 出典ワークショップ |
| Original Idea | 原文 |
| Normalized Idea | 意味を保った正規化文 |
| Everyday Activity | 関係する日常活動 |
| Current Burden | 現在の負担 |
| Desired Change | 望ましい生活変化 |
| Product or Service | 想定される製品・サービス |
| Technical Function | 必要と考えられる技術機能 |
| Social Condition | 必要な社会・制度・運用条件 |
| Value | 関係する価値 |
| Risk or Tension | リスク・緊張関係 |
| Open Question | 未解決点 |
| Interpretation Status | Explicit / Inferred / Unknown |
| Premise Compatibility | Compatible / Requires Extension / Challenges Premise / Outside Scope |
| Group ID | 類似アイデアグループ |
| Publication Status | 公開可否 |

---

## Step 1-4｜アイデアを正規化する

### 作業ルール

- [ ] 原文を変更せず保存する。
- [ ] 一つの正規化文にまとめる。
- [ ] 生活上の願望と技術案を分ける。
- [ ] 不明な項目を推測で埋めない。
- [ ] 推測した場合はInferredとする。
- [ ] 複数の独立アイデアは分割する。
- [ ] Parent Idea IDを保持する。

### 作業例

```text
Original Idea:
配達時間なし

Normalized Idea:
利用者が配送時刻を指定したり、荷物を待ったりしなくても受け取れる。
```

---

## Step 1-5｜グループ化ルールを確定する

### 第一軸

```text
望ましい生活変化
```

### 第二軸

```text
日常活動・生活領域
```

### 補助タグ

```text
技術分野
製品・サービス
社会的価値
リスク
```

### Idea Group Table

| Group ID | Group Name | 共通する生活変化 | 日常活動 | Included Idea IDs | Candidate Story |
|---|---|---|---|---|---|
| IG-001 |  |  |  |  |  |
| IG-002 |  |  |  |  |  |

---

## Step 1-6｜前提との互換性を判定する

### 判定区分

| 判定 | 意味 |
|---|---|
| Compatible | 現在の技術・社会前提内で扱える |
| Requires Extension | 前提追加により扱える |
| Challenges Premise | 前提そのものを問い直す |
| Outside Scope | 今回のシナリオ範囲外 |
| Seed Candidate | ストーリー内のシード候補 |

### Idea–Premise Compatibility Table

| Idea ID | Compatibility | Related Premise IDs | 必要な前提追加 | 判定理由 |
|---|---|---|---|---|
|  |  |  |  |  |

---

## Step 1-7｜ストーリー候補を評価する

### 評価基準

| Criterion | 評価内容 | Score |
|---|---|---:|
| Everyday Relevance | 一人の日常場面として描けるか | 1–5 |
| Clear Change | 変化前後が明確か | 1–5 |
| Idea Support | 複数の背景アイデアに支えられるか | 1–5 |
| Premise Connection | 技術・社会前提の双方に接続できるか | 1–5 |
| Four-Lens Expandability | 四領域へ展開できるか | 1–5 |
| Distinctiveness | 他候補と重複しないか | 1–5 |
| Story Clarity | 短い物語として表現できるか | 1–5 |

### Story Candidate Evaluation

| Candidate ID | Group ID | Theme | Total Score | Decision | Reason |
|---|---|---|---:|---|---|
| SC-001 |  |  |  | Adopt / Hold / Merge / Exclude |  |

---

## Step 1-8｜最初に作るテーマを確定する

### 決定表

| 項目 | 決定内容 | Status |
|---|---|---|
| MVPストーリー数 | 1 | Draft |
| 最初の領域 | 交通・配送 | Draft |
| 次の領域 | 食料・栄養 | Draft |
| 同時制作 | 行わない | Draft |
| 追加ストーリー | MVP検証後 | Draft |

### Phase 1 成果物

- [ ] Source Scope
- [ ] Idea Normalization Rules
- [ ] Background Idea Table
- [ ] Idea Group Table
- [ ] Idea–Premise Compatibility Table
- [ ] Story Candidate Evaluation
- [ ] Selected Story Theme

### Phase 1 完了ゲート

- [ ] 元アイデアと正規化文の対応が残っている。
- [ ] 個人情報を分析表へ持ち込んでいない。
- [ ] 前提との互換性が判定されている。
- [ ] 類似アイデアが生活変化を中心に整理されている。
- [ ] ストーリー候補の採用・保留・統合・除外理由が記録されている。
- [ ] 最初に作るストーリーテーマが決まっている。

---

# Phase 2｜ストーリー世界設計

## 2.1 目的

背景アイデアと技術・社会前提を、一人の人物が生活する2055年の具体的な世界へ変換する。

---

## Step 2-1｜中心となる生活変化を決める

### Central Everyday Change

```text
誰が：
どの日常活動で：
現在どのような負担があり：
2055年には何が変わるか：
```

### 一文定義

```text
____________________________________________________________
```

### 完了条件

- [ ] 誰の変化か分かる。
- [ ] どの日常活動か分かる。
- [ ] 何が不要になるか分かる。
- [ ] 何が新しく可能になるか分かる。

---

## Step 2-2｜中心人物を決める

### Character Profile

| 項目 | 内容 |
|---|---|
| Character ID |  |
| Name |  |
| Age Range |  |
| Living Environment |  |
| Work / Study |  |
| Family Situation |  |
| Daily Activity |  |
| Current Burden |  |
| Reason for Need |  |
| Relevant Attributes Only |  |

### 確認

- [ ] ストーリーに必要な属性だけを設定している。
- [ ] 過剰な人物設定を追加していない。
- [ ] 特定属性に議論を限定しすぎていない。

---

## Step 2-3｜一つの日常場面を決める

### Core Scene

| 項目 | 内容 |
|---|---|
| Time |  |
| Place |  |
| Intended Activity |  |
| Trigger / Change |  |
| Service Contact |  |
| Immediate Result |  |

### 一文定義

```text
____________________________________________________________
```

---

## Step 2-4｜製品・サービスを決める

### Service Concept

| 項目 | 内容 |
|---|---|
| Service ID |  |
| Service Name |  |
| Service Role |  |
| User Action |  |
| Automated Functions |  |
| Human Intervention |  |
| Connected Services |  |
| Provider | Open / Fixed |
| Payment Model | Open / Fixed |

---

## Step 2-5｜適用する技術前提を選ぶ

### Applied Technical Premises

| Premise ID | 適用 | ストーリー内の役割 | Fixed / Open |
|---|---|---|---|
| TP-001 | Yes / No |  |  |
| TP-002 | Yes / No |  |  |
| TP-003 | Yes / No |  |  |

---

## Step 2-6｜適用する社会前提を選ぶ

### Applied Social Premises

| Premise ID | 適用 | ストーリー内の役割 | Fixed / Open |
|---|---|---|---|
| SP-001 | Yes / No |  |  |
| SP-002 | Yes / No |  |  |
| SP-003 | Yes / No |  |  |

---

## Step 2-7｜ストーリー固有前提を決める

### Story-Specific Premises

| Premise ID | 前提 | Technical / Social | Fixed / Open | 理由 |
|---|---|---|---|---|
| SSP-001 |  |  |  |  |

---

## Step 2-8｜参加者に開く部分を決める

### Open World Questions

| Open ID | 未確定事項 | EXPAND先候補 | ストーリー本文に書くか | シード候補 |
|---|---|---|---|---|
| OWQ-001 |  | Technology / Policy / Design / Business | Yes / No | Yes / No |

### 確認

- [ ] すべてを決め切っていない。
- [ ] 参加者が提案できる余白がある。
- [ ] 技術だけでなく社会・運用面も開かれている。
- [ ] Openな部分がストーリーの矛盾になっていない。

---

## Step 2-9｜ストーリーのプロットを作る

### Story Plot

| Scene | 内容 | 関連する前提 | 背景Idea IDs | Seed Candidate |
|---|---|---|---|---|
| 1. 人物と日常 |  |  |  |  |
| 2. 予定変更・問題 |  |  |  |  |
| 3. 未来サービス利用 |  |  |  |  |
| 4. 背後の仕組み |  |  |  |  |
| 5. 生活上の変化 |  |  |  |  |
| 6. 残る余白 |  |  |  |  |

### Story Draft

```text
[ここに100〜150語程度のストーリー初稿を記入する]
```

---

## Step 2-10｜背景アイデアとの対応を記録する

### Story Traceability Table

| Story Element ID | Story Element | Source Idea IDs | Related Premise IDs | Interpretation |
|---|---|---|---|---|
| SE-001 |  |  |  | Explicit / Inferred |

---

## Step 2-11｜ストーリーをレビューする

### Review Checklist

- [ ] 一人の人物の日常が見える。
- [ ] 中心となる生活変化が一つである。
- [ ] 一つの日常場面に絞られている。
- [ ] 技術前提と社会前提の双方に接続している。
- [ ] 世界観説明だけになっていない。
- [ ] 量子技術の広告になっていない。
- [ ] 3〜5個のシード候補を抽出できる。
- [ ] Technology / Policy / Design / Businessへ展開可能である。
- [ ] 未来を確定的に予測していない。
- [ ] 背景アイデアとの対応が残っている。

### Review Status

```text
Draft
Needs Revision
Reviewed
Approved
```

### Phase 2 成果物

- [ ] Central Everyday Change
- [ ] Character Profile
- [ ] Core Scene
- [ ] Service Concept
- [ ] Applied Technical Premises
- [ ] Applied Social Premises
- [ ] Story-Specific Premises
- [ ] Open World Questions
- [ ] Story Plot
- [ ] Story Draft
- [ ] Story Traceability Table
- [ ] Story Review Record

### Phase 2 完了ゲート

- [ ] 一人の人物と一つの日常場面が明確である。
- [ ] 中心変化が一文で書ける。
- [ ] 前提・物語・未確定事項が区別されている。
- [ ] 背景アイデアへ追跡できる。
- [ ] 3〜5個の異なるシード候補がある。
- [ ] Web掲載候補としてレビュー済みである。

---

# Phase 3｜アイデアシード設計

## 3.1 目的

ストーリー世界を構成する要素から、参加者が一つを選び、Technology / Policy / Design / BusinessへEXPANDできるアイデアの種を作る。

---

## Step 3-1｜シード構成ルールを決める

### 推奨構成

一つのストーリーに、異なる種類のシードを含める。

- 計算・技術機能
- データ・サービス連携
- 人とシステムの関係
- サービス運用
- 生活上の変化

### 決定事項

| 項目 | 決定内容 |
|---|---|
| 1ストーリー当たりのシード数 | 3〜5個 |
| 技術シードのみで構成するか | No |
| 生活変化シードを含めるか | Yes |
| 社会・運用シードを含めるか | Yes |
| すべてのシードを4レンズ対応にするか | 原則Yes |

---

## Step 3-2｜シード候補を抽出する

### Candidate Seed List

| Candidate ID | Candidate Seed | Source | Story Connection | Type | Status |
|---|---|---|---|---|---|
| CS-001 |  | Story / Premise / Idea / Open Question |  |  | Draft |

---

## Step 3-3｜シードの記述形式を統一する

### Writing Rule

```text
一つのシード
＝
一つの機能、変化、関係、または条件
```

### 避ける表現

```text
量子計算
AI
配送最適化
プライバシー
自動化
```

### 推奨表現

```text
利用者の予定変更に応じて配送計画が更新される。
配送員が自動作成された計画を修正できる。
予定情報が複数サービス間で共有される。
```

---

## Step 3-4｜Seed Data Schemaを作る

### Seed Definition Table

| Field | 内容 |
|---|---|
| Seed ID | 固有ID |
| Seed Title | 短いタイトル |
| Description | シードの説明 |
| Story ID | 所属ストーリー |
| Story Connection | ストーリーのどこに現れるか |
| Source Idea IDs | 背景アイデア |
| Related Technical Premise IDs | 関連技術前提 |
| Related Social Premise IDs | 関連社会前提 |
| Assumption | 仮定していること |
| Open Point | 未確定事項 |
| Lens Availability | Technology / Policy / Design / Business |
| Display Order | 表示順 |
| Status | Draft / Reviewed / Approved |

---

## Step 3-5｜シードの粒度をそろえる

### Review Checklist

- [ ] 一つのシードが大きすぎない。
- [ ] 一つのシードに複数の独立要素を詰め込んでいない。
- [ ] 他のシードと粒度がそろっている。
- [ ] 技術名だけになっていない。
- [ ] ストーリー内の具体的な現象として書かれている。
- [ ] 一文で意味を説明できる。

---

## Step 3-6｜四レンズへの展開可能性を確認する

### Seed–Lens Availability Table

| Seed ID | Technology | Policy | Design | Business | 判定 |
|---|---|---|---|---|---|
|  | Yes / No | Yes / No | Yes / No | Yes / No | Adopt / Revise |

この段階では、レンズ別の詳細質問は作らない。

確認するのは、特定の一領域に閉じていないかである。

---

## Step 3-7｜シード間の関係を整理する

### 使用する関係

```text
Enables
Depends on
Changes
Creates tension with
Results in
```

### Seed Relationship Table

| Source Seed ID | Relationship | Target Seed ID | 説明 |
|---|---|---|---|
|  | Enables |  |  |

---

## Step 3-8｜採用するシードを決める

### 選定基準

| Criterion | 確認内容 |
|---|---|
| Story Presence | ストーリー内に実際に現れている |
| Clarity | 一文で意味が伝わる |
| Distinctiveness | 他シードと重複していない |
| Four-Lens Expandability | 四領域へ展開できる |
| Traceability | 背景アイデアまたは前提へ戻れる |
| Discussion Potential | 答えが決まりすぎていない |
| Balance | 技術だけに偏っていない |

### Seed Selection Record

| Candidate ID | Decision | Final Seed ID | 理由 |
|---|---|---|---|
|  | Adopt / Merge / Hold / Exclude |  |  |

---

## Step 3-9｜Web表示順を決める

### Story–Seed Display Order

| Story ID | Seed ID | Display Order | 表示理由 |
|---|---|---:|---|
|  |  | 1 |  |

表示順は、次のいずれかを基準とする。

- ストーリー内の登場順
- 因果関係順
- 参加者が理解しやすい順

技術要素を常に先頭にしない。

---

## Step 3-10｜Web掲載状態を確定する

### Approval Status

```text
Draft
Content Reviewed
Technical Reviewed
Social Reviewed
Approved for Web
```

### Seed Approval Table

| Seed ID | Content Review | Technical Review | Social Review | Web Approval | Reviewer |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### Phase 3 成果物

- [ ] Seed Composition Rule
- [ ] Candidate Seed List
- [ ] Seed Writing Rule
- [ ] Seed Definition Table
- [ ] Seed–Lens Availability Table
- [ ] Seed Relationship Table
- [ ] Seed Selection Record
- [ ] Story–Seed Display Order
- [ ] Seed Approval Table

### Phase 3 完了ゲート

- [ ] 1ストーリーに3〜5個のシードがある。
- [ ] シード名だけで内容を理解できる。
- [ ] 技術シードだけに偏っていない。
- [ ] 各シードがストーリー内の具体的要素に接続している。
- [ ] 各シードが背景アイデアまたは前提へ追跡できる。
- [ ] 各シードが4レンズへ展開可能である。
- [ ] シード同士が重複しすぎていない。
- [ ] Approved for Webになっている。

---

# 4. Web掲載用データへの変換

## 4.1 Story Data

```json
{
  "story_id": "",
  "world_id": "",
  "title": "",
  "summary": "",
  "character": {},
  "daily_activity": "",
  "central_change": "",
  "story_text": "",
  "technical_premise_ids": [],
  "social_premise_ids": [],
  "seed_ids": [],
  "source_idea_ids": [],
  "status": "draft"
}
```

## 4.2 Seed Data

```json
{
  "seed_id": "",
  "story_id": "",
  "title": "",
  "description": "",
  "story_connection": "",
  "source_idea_ids": [],
  "technical_premise_ids": [],
  "social_premise_ids": [],
  "lens_ids": [
    "technology",
    "policy",
    "design",
    "business"
  ],
  "display_order": 1,
  "status": "draft"
}
```

## 4.3 Premise Data

```json
{
  "premise_id": "",
  "type": "technical",
  "category": "",
  "statement": "",
  "scope": "common",
  "status": "fixed",
  "public": true,
  "open_points": []
}
```

---

# 5. トレーサビリティ

## 5.1 最終対応関係

```text
Technical / Social Premise
↓
Background Workshop Idea
↓
Story World
↓
Story Element
↓
Idea Seed
↓
EXPAND Lens
```

## 5.2 Traceability Matrix

| Premise ID | Idea ID | Story ID | Story Element ID | Seed ID | Lens |
|---|---|---|---|---|---|
|  |  |  |  |  | Technology / Policy / Design / Business |

---

# 6. 意思決定記録

| Decision ID | 日付 | 対象 | 決定内容 | 理由 | 影響する成果物 | 決定者 |
|---|---|---|---|---|---|---|
| DEC-001 |  |  |  |  |  |  |

---

# 7. 未決定事項・リスク

| Risk / Open ID | 内容 | 影響 | 対応方針 | 担当 | 期限 | Status |
|---|---|---|---|---|---|---|
| OPEN-001 |  |  |  |  |  |  |

---

# 8. 初回MVPの完成条件

最初のMVPでは、交通・配送のストーリー1本について、次を完成させる。

- [ ] 共通技術前提が定義されている。
- [ ] 共通社会前提が定義されている。
- [ ] 技術・社会前提が対応づけられている。
- [ ] 対象となる背景アイデアが整理されている。
- [ ] 中心人物と日常場面が決まっている。
- [ ] Story World Profileが完成している。
- [ ] 未来ストーリー初稿が完成している。
- [ ] アイデアシードが3〜5個ある。
- [ ] 各シードが四レンズへ展開可能である。
- [ ] 元アイデアからシードまで追跡できる。
- [ ] Web掲載用JSONへ変換できる。
- [ ] 内容レビューを通過している。

---

# 9. 次に着手する作業

## Task 1

Phase 0のScenario Scopeを決める。

## Task 2

Technical Premise Registerの初稿を作る。

## Task 3

Social Premise Registerの初稿を作る。

## Task 4

Technical–Social Premise Matrixを作る。

## Task 5

前提のFixed / Open / Conditional / Excludedを決める。

## Task 6

`ワークショップ_アイデアまとめ.xlsx`の分析対象範囲を確定する。

## Task 7

交通・配送に関係する背景アイデアを抽出・正規化する。

## Task 8

最初のStory Candidateを一つ選ぶ。

---

# 10. 最終確認

この作業で最終的に決める内容は次の通りである。

```text
2055年に技術的に何が成立しているか
＋
2055年に社会的に何が成立しているか
↓
過去アイデアのどれを背景として使うか
↓
誰のどの日常を描くか
↓
どの製品・サービスが登場するか
↓
参加者に渡す3〜5個のアイデアシードは何か
↓
各シードをTechnology / Policy / Design / Businessへどう展開可能にするか
```
