# Evidence and uncertainty

2055年の設定は予測ではなく、根拠の状態を明示したプロジェクトシナリオとして扱う。
出典は`content/framework/source-registry.yml`、不確実性は
`content/framework/uncertainty-register.yml`で管理する。

| Assumption | Reference class | Repository use |
|---|---|---|
| 2055 common year | DARPA QBI and official FTQC roadmaps | 2055年はproject scenarioとして設定 |
| Utility | DARPA QBI | 計算価値と総費用の比較 |
| Algorithm function | Grover, amplitude amplification, minimum finding | 量子探索基盤 |
| Present scale | Small Grover experiments | 現在と2055年の距離 |
| Resource estimates | Microsoft QRE and reproducible tools | 論理・物理資源と実行時間 |
| Traffic model | OR-Tools and VRP benchmarks | 候補、制約、古典ベースライン |
| Food model | Dietary references and food tables | 栄養制約と食品データ |

ロードマップは達成保証ではない。資源推定にはオラクル、状態準備、誤り訂正、測定、
再実行、古典処理を含め、同じ問題に対する古典ベースラインと比較する。
