# Glicol 学习笔记
## Graph-Oriented Live Coding Language

### 基础语法

#### 1. 简单波形
```glicol
-- 440Hz正弦波，音量50%
o: sin 440 >> mul 0.5
```

#### 2. 使用引用（~）
```glicol
-- 定义一个振幅调制
~amp: sin 1.0 >> mul 0.3 >> add 0.5
-- 主输出
o: sin 440 >> mul ~amp
```

#### 3. 音序器 seq
```glicol
-- 播放MIDI音符序列
o: speed 2.0 >> seq 60 _~a _ 48__67 >> sp \blip

-- ~a 是随机选择器
~a: choose 60 60 0 0 72 72
```

#### 4. 速度控制
```glicol
-- 2倍速播放
o: speed 2.0 >> seq 60 _72 _ 48__67 >> mul 0.5
```

### 可用节点

| 节点 | 功能 | 示例 |
|------|------|------|
| `sin` | 正弦波 | `sin 440` |
| `saw` | 锯齿波 | `saw 220` |
| `sqr` | 方波 | `sqr 330` |
| `mul` | 音量 | `>> mul 0.5` |
| `add` | 增益 | `>> add 0.2` |
| `seq` | 音序 | `seq 60 _72 _` |
| `sp` | 采样 | `sp \blip` |
| `speed` | 速度 | `speed 2.0` |
| `choose` | 随机选择 | `choose 60 72 0` |

### 示例代码集合

#### 示例1: 简单旋律
```glicol
o: speed 1.5 >> seq 60 67 72 79 _ 72 67 _ >> mul 0.4
```

#### 示例2: 节奏pattern
```glicol
o: speed 4.0 >> seq 36 _ _ 36 36 _ 36 _ >> sp \bd >> mul 0.6
```

#### 示例3: 琶音
```glicol
~arp: choose 60 64 67 72
o: speed 8.0 >> seq ~arp ~arp ~arp ~arp >> mul 0.3
```

#### 示例4: 复杂调制
```glicol
~lfo: sin 0.5
o: sin 440 >> mul (sin 1.0 >> mul 0.3 >> add 0.5) >> mul 0.5
```

### 学习资源

- **官网**: https://glicol.org
- **GitHub**: https://github.com/chaosprint/glicol
- **YouTube**: Glicol demos
- **Discord**: glicol community

### 实践计划

1. ✅ 理解基本语法
2. ⏳ 在 https://glicol.org 尝试示例
3. ⏳ 写一个简单的Glicol音乐片段
4. ⏳ 对比Sonic Pi和Glicol的优缺点

### 与其他工具对比

| 工具 | 复杂度 | 协作 | 平台 | 适合 |
|------|--------|------|------|------|
| Glicol | 低 | 强 | 浏览器 | 快速原型、教育 |
| Sonic Pi | 中 | 弱 | 桌面 | 演出、深度编程 |
| SuperCollider | 高 | 弱 | 桌面 | 研究、复杂合成 |

---

*学习日期: 2026-01-31*
*状态: 理论学习完成，等待实践*
