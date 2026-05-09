# 第二回 FMCer合宿 特設ページ

参加者向け特設ページのソース。GitHub Pages の専用リポジトリ `fmcer-camp-2` に配置して公開する。

## 構成

```
site/
  index.html       # ページ本体(全セクション含む)
  styles.css       # 全スタイル(モバイルファースト)
  countdown.js     # 開催までのカウントダウン(依存なし)
  robots.txt       # 検索エンジン全拒否
  .nojekyll        # GitHub Pages の Jekyll 処理を無効化
  assets/
    og.svg         # OG / favicon 兼用簡易ロゴ
README.md          # このファイル
```

## ローカルプレビュー

Python が入っていれば:

```bash
cd 03_develop/site
python -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

Node 派なら `npx serve` でも可。

## デプロイ手順 (GitHub Pages)

1. GitHub に **Public** リポジトリ `fmcer-camp-2` を新規作成
2. 本ディレクトリ `site/` の中身(`site/` 自体ではなく中身)をリポジトリ root に配置して push
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<owner>/fmcer-camp-2.git
   git push -u origin main
   ```
3. リポジトリ Settings → Pages → Source = `main` / `/ (root)` で保存
4. 数分後 `https://<owner>.github.io/fmcer-camp-2/` で公開
5. 共有 URL を参加者に X DM で配布

## 更新フロー

- テキスト修正は `index.html` を直接編集 → コミット → push
- 参加者リスト追加は `<ul class="roster-grid">` 内に `<li class="roster-item">表示名</li>` を追加し、`<span class="roster-count">` の数値を更新
- カウントダウン目標日時は `data-target-start` / `data-target-end` 属性で固定済み

## チェックリスト(公開前)

- [ ] `<meta name="robots" content="noindex, nofollow">` が `<head>` にある
- [ ] `robots.txt` が root に配置されている
- [ ] スマホ縦持ち(375px)で横スクロールが発生しない
- [ ] カウントダウンが「あと N 日」を表示している
- [ ] 主催者 X (`@cube_224`) リンクが新規タブで開く
- [ ] タイムテーブル 1日目 13 ブロック・2日目 3 ブロック全てある
- [ ] 参加費・参加者リスト等のプレースホルダ箇所が把握できている
