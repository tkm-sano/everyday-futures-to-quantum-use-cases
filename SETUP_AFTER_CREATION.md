# Setup after creation

1. `OWNER`を実際のGitHubユーザー名またはOrganization名へ置換する。
2. GitHubのSettings → PagesでSourceをGitHub Actionsに設定する。
3. `python 18_src/validate_repository.py`を実行する。
4. `git status --ignored`で`data/private/`が追跡されないことを確認する。
