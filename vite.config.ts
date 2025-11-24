import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from 'path';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    [vue()]
  ],
  server: {
    port: 3036,        // 使用するポート
    host: '0.0.0.0',   // 外部アクセスを許可するために 0.0.0.0 に設定
    strictPort: true,  // ポートが既に使用されている場合に終了するように設定（任意）
    hmr: {
        host: 'localhost',
    },

  },
  root: 'app/javascript/entrypoints', // JavaScriptファイルのルートディレクトリ
  build: {
    outDir: 'public/assets', // ビルド出力先ディレクトリ
    manifest: true,          // manifest.jsonの出力
    rollupOptions: {
      input: 'app/javascript/entrypoints/application.js', // エントリーポイント
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/javascript/src')  // 
    }
  }
})