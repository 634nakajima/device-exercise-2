import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/device-exercise-2/',
  title: 'デバイス演習 II',
  description: 'micro:bit と Pure Data によるインタラクティブサウンドアート',

  locales: {
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '授業一覧', link: '/ja/lessons/lesson01' },
          { text: '評価手法', link: '/ja/evaluation/' },
          { text: 'Pdリファレンス', link: '/ja/reference/pd-keywords' }
        ],
        sidebar: {
          '/ja/lessons/': [
            {
              text: '前半：基礎と技術習得',
              items: [
                { text: '第1回 イントロダクション', link: '/ja/lessons/lesson01' },
                { text: '第2回 シンプルな電子楽器', link: '/ja/lessons/lesson02' },
                { text: '第3回 Pd基礎', link: '/ja/lessons/lesson03' },
                { text: '第4回 データ処理・micro:bit連携', link: '/ja/lessons/lesson04' },
                { text: '第5回 信号処理・音源ファイル処理', link: '/ja/lessons/lesson05' },
                { text: '第6回 自動演奏', link: '/ja/lessons/lesson06' },
                { text: '第7回 Pd+micro:bitで電子楽器', link: '/ja/lessons/lesson07' }
              ]
            },
            {
              text: '後半：作品制作と評価',
              items: [
                { text: '第8-9回 作品制作', link: '/ja/lessons/lesson08-09' },
                { text: '第10回 思考発話法による評価', link: '/ja/lessons/lesson10' },
                { text: '第11回 マルチチャンネルオーディオ', link: '/ja/lessons/lesson11' },
                { text: '第12回 完成度を上げよう', link: '/ja/lessons/lesson12' },
                { text: '第13回 作品体験会・アンケート', link: '/ja/lessons/lesson13' },
                { text: '第14回 アンケート分析', link: '/ja/lessons/lesson14' },
                { text: '第15回 最終報告会', link: '/ja/lessons/lesson15' }
              ]
            }
          ],
          '/ja/evaluation/': [
            {
              text: '評価手法',
              items: [
                { text: '概要', link: '/ja/evaluation/' },
                { text: 'SD法（印象評価）', link: '/ja/evaluation/sd-method' },
                { text: 'UEQ-S（UX評価）', link: '/ja/evaluation/ueq-s' }
              ]
            }
          ],
          '/ja/reference/': [
            {
              text: 'リファレンス',
              items: [
                { text: 'Pure Data キーワード一覧', link: '/ja/reference/pd-keywords' }
              ]
            }
          ]
        },
        outline: { label: '目次' },
        docFooter: { prev: '前のページ', next: '次のページ' }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Lessons', link: '/en/lessons/lesson01' },
          { text: 'Evaluation', link: '/en/evaluation/' },
          { text: 'Pd Reference', link: '/en/reference/pd-keywords' }
        ],
        sidebar: {
          '/en/lessons/': [
            {
              text: 'Part 1: Fundamentals',
              items: [
                { text: 'Lesson 1: Introduction', link: '/en/lessons/lesson01' },
                { text: 'Lesson 2: Simple Instruments', link: '/en/lessons/lesson02' },
                { text: 'Lesson 3: Pd Basics', link: '/en/lessons/lesson03' },
                { text: 'Lesson 4: Data Processing & micro:bit', link: '/en/lessons/lesson04' },
                { text: 'Lesson 5: Signal Processing & Audio Files', link: '/en/lessons/lesson05' },
                { text: 'Lesson 6: Auto-Play', link: '/en/lessons/lesson06' },
                { text: 'Lesson 7: Instruments with Pd + micro:bit', link: '/en/lessons/lesson07' }
              ]
            },
            {
              text: 'Part 2: Creation & Evaluation',
              items: [
                { text: 'Lesson 8-9: Project Work', link: '/en/lessons/lesson08-09' },
                { text: 'Lesson 10: Think-Aloud Evaluation', link: '/en/lessons/lesson10' },
                { text: 'Lesson 11: Multi-Channel Audio', link: '/en/lessons/lesson11' },
                { text: 'Lesson 12: Refinement', link: '/en/lessons/lesson12' },
                { text: 'Lesson 13: Exhibition & Survey', link: '/en/lessons/lesson13' },
                { text: 'Lesson 14: Survey Analysis', link: '/en/lessons/lesson14' },
                { text: 'Lesson 15: Final Presentation', link: '/en/lessons/lesson15' }
              ]
            }
          ],
          '/en/evaluation/': [
            {
              text: 'Evaluation Methods',
              items: [
                { text: 'Overview', link: '/en/evaluation/' },
                { text: 'SD Method', link: '/en/evaluation/sd-method' },
                { text: 'UEQ-S', link: '/en/evaluation/ueq-s' }
              ]
            }
          ],
          '/en/reference/': [
            {
              text: 'Reference',
              items: [
                { text: 'Pure Data Keywords', link: '/en/reference/pd-keywords' }
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
