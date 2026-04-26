# tsunagu-brand

つなぐProject ブランド & デザインシステム

## このリポジトリは何？

つなぐProjectのビジュアルアイデンティティ、デザイントークン、再利用可能な UI コンポーネントを集めたものです。

- **入口（推奨）**: `index.html` を開く → 全カードを一覧で確認
- **トークン定義**: `colors_and_type.css`
- **ロゴ等**: `assets/`
- **個別カード**: `preview/`
- **UIキット**: `ui_kits/`（marketing / note_reader / note_feed）
- **スライドテンプレート**: `slides/`

## ローカルで見る

```bash
# Python があれば一番手軽
python3 -m http.server 8000
# → http://localhost:8000/ を開く
```

## GitHub Pages で公開する

1. リポジトリの **Settings** → **Pages**
2. **Source** を `Deploy from a branch`
3. **Branch** を `main` / `/ (root)` に設定して Save
4. 数分後 `https://tsunagu-projct.github.io/tsunagu-brand/` で公開

## ディレクトリ

```
.
├── index.html              ← 入口・全カード一覧
├── colors_and_type.css     ← デザイントークン
├── assets/                 ← ロゴ、画像
├── preview/                ← 個別プレビューカード
├── ui_kits/
│   ├── marketing/          ← マーケサイトひな形
│   ├── note_reader/        ← 記事リーダー
│   └── note_feed/          ← note最新記事カード（3バリアント）
└── slides/                 ← プレゼンテンプレート
```

## ライセンス

Private use — つなぐProject ブランド資産。外部利用不可。
