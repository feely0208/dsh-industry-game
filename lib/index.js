import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'industry-game',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/industry-game.md',
  binFile: 'bin/cli.mjs',
  description: "游戏多出来的那几项：防沉迷时段、实名认证、适龄提示、版号展示、抽奖概率公示",
  whenToUse: "需要对「游戏行业专项体检」相关项目做自查时使用。",
});
