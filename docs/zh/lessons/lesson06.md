# 第6讲 自动演奏

## 本讲目标

学习使用文本数据和 GUI 实现自动演奏的机制。

具体来说，涉及以下内容。

- 使用文本数据的自动输出
- 通过文本输出自动播放音频文件
- 用 GUI 编写节奏（节奏机）
- 经由 MIDI 与 DAW 联动的概要

---

## 文本数据的自动输出

在 Pd 中，可以使用文本数据在任意时刻依次输出消息。这样一来，就能够根据事先准备好的数据自动发出声音。

### 使用的对象

| 对象 | 功能 |
|---|---|
| `text define` | 定义・保存文本数据 |
| `text sequence` | 按顺序输出文本数据 |

### 文本数据的格式

每一行写成「**收件方（发送目标）**」与「**要发送的文本**」的组合，行末加上分号（`;`）。此外，**在行首加上数字（毫秒）**，就会在该时间过去之后自动前进到下一行（`auto` 模式）。

```
note c;
500 note d;
500 note e;
500 note f;
500 note e;
500 note d;
500 note c;
1000 note e;
```

上面的例子（《青蛙之歌》的开头）中，`note` 是收件方，`c`・`d`・`e`… 是要发送的文本。第 1 行没有数字，所以会立刻发送 `c`；第 2 行以后则从上一个音起等待 `500`（毫秒）后再发送下一个音。发送出去的数值用 `[r note]`（receive）接收后使用。

::: tip 文本数据的写法
- 每一行写成 `收件方 值;` 或 `等待时间 收件方 值;` 的形式
- **收件方**: 发送目标的名称。会送达 Pd 内的 `[r 收件方]`（例中的 `note` 对应 `[r note]`）
- **等待时间（可选）**: 放在行首的数字。在 `auto` 模式下，从上一行起等待这么多 **毫秒** 后发送（省略则立即发送。第 1 行省略）
- **值**: 发送给收件方的内容（音阶名或文件名等）
- 行末务必加上分号（`;`）
- 要让收件方生效，需要给 `text sequence` 加上 `-g` 标志（例: `[text sequence kaeru -g]`）
:::

::: details 《青蛙之歌》的完整数据
```
note c;
500 note d;
500 note e;
500 note f;
500 note e;
500 note d;
500 note c;
1000 note e;
500 note f;
500 note g;
500 note a;
500 note g;
500 note f;
500 note e;
1000 note c;
1000 note c;
1000 note c;
1000 note c;
1000 note c;
250 note c;
250 note d;
250 note d;
250 note e;
250 note e;
250 note f;
250 note f;
250 note e;
500 note d;
500 note c;
```
:::

### 补丁示例

![文本文件](/images/pd/29-kaeru-text.png)

在 `text define -k kaeru` 中写入文本数据，用 `text sequence kaeru -g` 依次发送出去。由于 `-g` 标志，每行开头的符号（`note`）成为收件方，就可以用 `[r note]` 接收音阶。

---

## 通过文本输出自动播放音频文件

把 `text sequence` 的输出连接到 `else/play.file~`，就能按照文本数据中写好的顺序自动播放音频文件。

### 主要消息

| 消息 | 动作 |
|---|---|
| `auto` | 切换为自动播放模式（按照文本中的等待时间自动输出下一条数据） |
| `bang` | 输出下一条数据（手动模式） |
| `line 0` | 回到开头 |

### 步骤

1. 在 `text define` 中写入文本数据（`收件方 值;` 的格式。文件名或音阶数据等）
2. 创建 `text sequence`，把 `text define` 的名称与 `-g` 标志指定为参数（例: `[text sequence kaeru -g]`）。各行的收件方用 `[r 收件方]` 接收
3. 发送 `auto` 消息后，就会按照行首的数字（毫秒）自动依次发送各行
4. 发送 `bang` 消息时，会一行一行地手动发送（行首的等待时间数字会被忽略）
5. 用 `line 0` 消息回到第一行

::: tip auto 与 bang 的区分使用
- `auto` : 按照文本数据中写好的时间间隔自动前进。适合 BGM 或自动演奏。
- `bang` : 通过用户的操作（按下按钮等）一个音一个音地前进。适合交互式演奏。
:::

### 补丁示例

![文本自动播放](/images/pd/30-text-sequence.png)

---

## 用 GUI 编写节奏

使用 `else/drum.seq` 对象，可以用图形界面编写节奏模式。可以用鼠标点击，直观地搭建节奏。

### 使用的对象

| 对象 | 功能 |
|---|---|
| `else/drum.seq` | 节奏模式的 GUI 编辑器 |
| `else/tempo` | 设定速度（BPM） |
| `route` | 把输出的数据按乐器分配 |

### BPM 的设定方法

用 `else/tempo` 对象设定 BPM（Beats Per Minute: 每分钟的拍数）。

- 在参数中指定 BPM 的数值（例: `else/tempo 120`）
- 也可以用数值消息动态改变 BPM

::: tip BPM 的参考
| BPM | 速度感 |
|---|---|
| 60〜80 | 缓慢（抒情曲） |
| 100〜120 | 普通（流行乐） |
| 120〜140 | 稍快（舞曲） |
| 140〜180 | 快（Drum'n'Bass） |
:::

### 节奏机的搭建方法

1. 创建 `else/drum.seq`，用 GUI 编写节奏模式
2. 用 `else/tempo` 设定 BPM
3. 用 `route` 分配各个音轨（底鼓、军鼓、踩镲等）的输出
4. 给各个音轨连接音源（`else/play.file~` 或合成器）

### 补丁示例

![节奏机](/images/pd/31-drum-seq.png)

---

## 经由 MIDI 用 DAW 进行自动演奏

::: tip 参考信息
Pd 也可以使用 MIDI（Musical Instrument Digital Interface）与 DAW（Digital Audio Workstation）软件联动。
:::

### 概要

MIDI 是用于在电子乐器与计算机之间交换演奏数据的规格。可以从 Pd 发送 MIDI 消息，也可以从外部的 DAW（Ableton Live、GarageBand 等）接收 MIDI 消息。

### 在 Pd 中使用 MIDI 的方法

- **MIDI 输出**: 用 `noteout` 对象可以发送 MIDI 音符
- **MIDI 输入**: 用 `notein` 对象可以接收来自外部的 MIDI 音符
- **虚拟 MIDI 总线**: macOS 的情况下，可以在「音频 MIDI 设置」中创建虚拟 MIDI 总线，连接 Pd 与 DAW

::: warning 本课程中的处理
MIDI 联动属于进阶内容。本课程只作概要介绍，如果想在作品制作中加以运用，请来商量。
:::

---

## 练习题

### 练习1: 用 A 按钮逐音播放《青蛙之歌》

请使用 `text define` 与 `text sequence` 准备《青蛙之歌》的旋律，并制作一个每按一次 micro:bit 的 A 按钮就播放一个音的补丁。

::: details 提示
- 在 `text define` 中以 `收件方 值;` 的格式写下《青蛙之歌》的音阶数据（例: `note c;` `500 note d;` `500 note e;` ...）
- 给 `text sequence` 加上 `-g` 标志（例: `[text sequence kaeru -g]`）。收件方的音阶用 `[r note]` 接收
- 使用 `text sequence` 的 `bang` 消息，一个音一个音地输出（用 A 按钮推进时，行首的等待时间会被忽略，一次前进一个音）
- 让 micro:bit 的 A 按钮被按下时发送 `bang`
- 用 `sel` 等分配接收到的音阶数据，连接到 `osc~` 或音频文件来发声
- 也可以考虑在到达曲子末尾时用 `line 0` 回到开头
:::

### 练习2: 用 micro:bit 的倾斜改变节奏机的速度

请制作一个使用 `else/drum.seq` 的节奏机，并做出用 micro:bit 的倾斜改变 BPM（速度）的补丁。

::: details 提示
- 用 `else/drum.seq` 创建节奏模式
- 用 `else/tempo` 控制 BPM
- 获取 micro:bit 倾斜（加速度传感器）的数值
- 把倾斜的数值映射到 BPM 的范围（例: 60〜180）
- 使用 `scale` 对象等转换数值的范围
- 如果数值变化过于剧烈，也可以考虑用 `else/lowpass` 等使其平滑
:::
