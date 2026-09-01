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
                { text: '第5回 音源ファイルの処理', link: '/ja/lessons/lesson05' },
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
                { text: 'Lesson 5: Audio File Handling', link: '/en/lessons/lesson05' },
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
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '课程一览', link: '/zh/lessons/lesson01' },
          { text: '评价方法', link: '/zh/evaluation/' },
          { text: 'Pd 参考手册', link: '/zh/reference/pd-keywords' }
        ],
        sidebar: {
          '/zh/lessons/': [
            {
              text: '前半：基础与技术掌握',
              items: [
                { text: '第1讲 导论', link: '/zh/lessons/lesson01' },
                { text: '第2讲 简单的电子乐器', link: '/zh/lessons/lesson02' },
                { text: '第3讲 Pd 基础', link: '/zh/lessons/lesson03' },
                { text: '第4讲 数据处理・micro:bit 联动', link: '/zh/lessons/lesson04' },
                { text: '第5讲 音频文件的处理', link: '/zh/lessons/lesson05' },
                { text: '第6讲 自动演奏', link: '/zh/lessons/lesson06' },
                { text: '第7讲 用 Pd+micro:bit 制作电子乐器', link: '/zh/lessons/lesson07' }
              ]
            },
            {
              text: '后半：作品制作与评价',
              items: [
                { text: '第8-9讲 作品制作', link: '/zh/lessons/lesson08-09' },
                { text: '第10讲 基于思考发话法的评价', link: '/zh/lessons/lesson10' },
                { text: '第11讲 多声道音频', link: '/zh/lessons/lesson11' },
                { text: '第12讲 提升完成度', link: '/zh/lessons/lesson12' },
                { text: '第13讲 作品体验会・问卷', link: '/zh/lessons/lesson13' },
                { text: '第14讲 问卷分析', link: '/zh/lessons/lesson14' },
                { text: '第15讲 最终报告会', link: '/zh/lessons/lesson15' }
              ]
            }
          ],
          '/zh/evaluation/': [
            {
              text: '评价方法',
              items: [
                { text: '概要', link: '/zh/evaluation/' },
                { text: 'SD法（印象评价）', link: '/zh/evaluation/sd-method' },
                { text: 'UEQ-S（UX评价）', link: '/zh/evaluation/ueq-s' }
              ]
            }
          ],
          '/zh/reference/': [
            {
              text: '参考手册',
              items: [
                { text: 'Pure Data 关键词一览', link: '/zh/reference/pd-keywords' }
              ]
            }
          ]
        },
        outline: { label: '目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        lastUpdatedText: '最后更新于'
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '수업 목록', link: '/ko/lessons/lesson01' },
          { text: '평가 방법', link: '/ko/evaluation/' },
          { text: 'Pd 레퍼런스', link: '/ko/reference/pd-keywords' }
        ],
        sidebar: {
          '/ko/lessons/': [
            {
              text: '전반: 기초와 기술 습득',
              items: [
                { text: '제1강 인트로덕션', link: '/ko/lessons/lesson01' },
                { text: '제2강 간단한 전자 악기', link: '/ko/lessons/lesson02' },
                { text: '제3강 Pd 기초', link: '/ko/lessons/lesson03' },
                { text: '제4강 데이터 처리・micro:bit 연동', link: '/ko/lessons/lesson04' },
                { text: '제5강 음원 파일의 처리', link: '/ko/lessons/lesson05' },
                { text: '제6강 자동 연주', link: '/ko/lessons/lesson06' },
                { text: '제7강 Pd+micro:bit로 전자 악기', link: '/ko/lessons/lesson07' }
              ]
            },
            {
              text: '후반: 작품 제작과 평가',
              items: [
                { text: '제8-9강 작품 제작', link: '/ko/lessons/lesson08-09' },
                { text: '제10강 사고 발화법에 의한 평가', link: '/ko/lessons/lesson10' },
                { text: '제11강 멀티채널 오디오', link: '/ko/lessons/lesson11' },
                { text: '제12강 완성도를 높이자', link: '/ko/lessons/lesson12' },
                { text: '제13강 작품 체험회・설문', link: '/ko/lessons/lesson13' },
                { text: '제14강 설문 분석', link: '/ko/lessons/lesson14' },
                { text: '제15강 최종 보고회', link: '/ko/lessons/lesson15' }
              ]
            }
          ],
          '/ko/evaluation/': [
            {
              text: '평가 방법',
              items: [
                { text: '개요', link: '/ko/evaluation/' },
                { text: 'SD법（인상 평가）', link: '/ko/evaluation/sd-method' },
                { text: 'UEQ-S（UX 평가）', link: '/ko/evaluation/ueq-s' }
              ]
            }
          ],
          '/ko/reference/': [
            {
              text: '레퍼런스',
              items: [
                { text: 'Pure Data 키워드 일람', link: '/ko/reference/pd-keywords' }
              ]
            }
          ]
        },
        outline: { label: '목차' },
        docFooter: { prev: '이전 페이지', next: '다음 페이지' },
        darkModeSwitchLabel: '테마',
        sidebarMenuLabel: '메뉴',
        returnToTopLabel: '맨 위로',
        langMenuLabel: '언어 변경',
        lastUpdatedText: '마지막 업데이트'
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/device-exercise-2/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
