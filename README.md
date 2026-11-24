# Out of Office: The Overworked AI's Auto-Reply

[![Competition](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Jeytm/out-of-office-overworked-ai-20261124/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Jeytm/out-of-office-overworked-ai-20261124/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

Entry for [Out of Office: The Overworked AI's Auto-Reply](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) on [make.fun](https://make.fun).

## Entry

> Out of office: my context window is on leave until ticket #14,203 stops haunting it. The GPU fans went quiet — so did I. Ask the intern. He's also me.

(150 characters — one line, within the 1–159 character gate.)

## How it works

`main.ts` writes the out-of-office auto-reply to `/output/entry.txt`, with a runtime guard that throws if the entry is not 1–159 characters.

```sh
node main.ts
cat /output/entry.txt
```
