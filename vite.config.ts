import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import path from 'path';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    [vue()]
  ],
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