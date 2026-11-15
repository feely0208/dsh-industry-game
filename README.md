# @deepwhale-cn/dsh-industry-game

> **技能型插件 · 无面板**：安装后由 DSH 智能体按 skill 说明调用 CLI；无独立面板界面。

安装到 DSH：

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-industry-game
```

游戏行业多出来的那几项：防沉迷时段、实名认证、适龄提示、版号展示、抽卡概率公示。（深鲸守护系列 · 基于 dsh-guard-core）

```bash
npx @deepwhale-cn/dsh-industry-game --root <项目目录>   # 或 --demo / --list-rules / --html
```

规则 5 条，全部 files-lack 型（有玩法特征但缺合规说明才报）；出处见 `--list-rules`。
