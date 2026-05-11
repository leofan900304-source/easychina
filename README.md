# EasyChina

**China Travel, Made Easy.**

EasyChina 是一个面向外国游客的智能中国旅行攻略平台。通过填写个人偏好（入境城市、停留时间、预算、兴趣方向等），AI 会生成一份完整的定制化攻略——包括行前准备、城市推荐、交通线路、景点美食和实用贴士。

## 项目定位

不是"旅游推广网站"，而是"外国人去中国的行前决策助手"。

- 消除外国人对中国旅行的恐惧和信息焦虑
- 智能定制化行程规划（表单 + AI 双模式）
- 行前准备一站式指南（SIM卡/VPN/支付/APP/签证）
- 热门城市深度攻略（北京/上海/广州/西安/成都/重庆/桂林/丽江/杭州/昆明）

## 技术栈

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS + shadcn/ui
- Lucide React (图标)
- next-intl (国际化)
- DeepSeek V4 (AI 行程生成)

## 快速开始

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 项目结构

```
src/
├── app/            # 页面路由
├── components/     # React 组件
├── lib/            # 工具函数 & 数据
├── hooks/          # 自定义 Hooks
├── types/          # TypeScript 类型
└── i18n/           # 国际化配置
```
