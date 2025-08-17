# 🧬 Mutation Testing Report

> **Generated:** 2025-08-17T10:00:41.973Z  
> **Mutation Score:** 🟡 **64.4%**  
> **Coverage Score:** 42.5%  
> **Total Files Analyzed:** 8

> 💡 **Note:** A human-readable, pretty-printed version of the raw JSON data (that was used to produce this md file here) is available at `mutation-report-pretty.json` for detailed analysis and debugging.

---

## 📊 Executive Summary

⚠️ **Risk Level: MEDIUM**

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total Mutants** | 1297 | 100% |
| **✅ Killed (Good)** | 355 | 27.4% |
| **❌ Survived (Bad)** | 180 | 13.9% |
| **🚫 No Coverage** | 746 | 57.5% |
| **⏱️ Timeout** | 13 | 1.0% |
| **💥 Error** | 0 | 0.0% |

### Quality Assessment
- **Mutation Score:** 64.4% (Good)
- **Test Coverage:** 42.5% (Poor)

---

## 🎯 Priority Actions

### Immediate Actions Required:

#### 🔴 HIGH PRIORITY (Immediate attention needed)

**src/app.js**
- Issues: ❌ Very low test coverage (0.0%), ❌ Poor mutation score (0.0%)
- Recommended actions: Add comprehensive unit tests, Improve code coverage
- Stats: 258/258 no coverage, 0 survived

**src/audio.js**
- Issues: ❌ Very low test coverage (0.0%), ❌ Poor mutation score (0.0%)
- Recommended actions: Add comprehensive unit tests, Improve code coverage
- Stats: 95/95 no coverage, 0 survived

**src/llm.js**
- Issues: ❌ Very low test coverage (0.0%), ❌ Poor mutation score (0.0%)
- Recommended actions: Add comprehensive unit tests, Improve code coverage
- Stats: 147/147 no coverage, 0 survived

**src/worklet.js**
- Issues: ❌ Very low test coverage (0.0%), ❌ Poor mutation score (0.0%)
- Recommended actions: Add comprehensive unit tests, Improve code coverage
- Stats: 164/164 no coverage, 0 survived

**src/tts.js**
- Issues: ❌ Poor mutation score (54.8%), ❌ 154 survived mutants need test improvements
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 81/455 no coverage, 154 survived

#### 🟡 MEDIUM PRIORITY (Address soon)

**src/index.js**
- Issues: ❌ Poor mutation score (50.0%)
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 1/9 no coverage, 4 survived

#### 🟢 LOW PRIORITY (Improve when possible)

- 2 files have good test coverage and mutation scores

---

## 🔍 Detailed Analysis

### Mutation Testing Metrics Explained

**Mutation Score**: Percentage of mutants killed by tests (excluding no-coverage mutants)
- 🟢 ≥80%: Excellent test quality
- 🟡 60-79%: Good test quality  
- 🔴 <60%: Tests need improvement

**Coverage Score**: Percentage of code covered by tests
- 🟢 ≥90%: Excellent coverage
- 🟡 70-89%: Good coverage
- 🔴 <70%: Poor coverage

### Top Mutation Operators Analysis

| Mutator | Total | Killed | Survived | No Coverage | Kill Rate |
|---------|-------|--------|----------|-------------|-----------|
| StringLiteral | 273 | 45 | 40 | 188 | 🔴 16.5% |
| ConditionalExpression | 317 | 91 | 63 | 159 | 🔴 28.7% |
| BlockStatement | 294 | 94 | 23 | 171 | 🔴 32.0% |
| BooleanLiteral | 94 | 22 | 7 | 63 | 🔴 23.4% |
| EqualityOperator | 102 | 33 | 17 | 50 | 🔴 32.4% |
| LogicalOperator | 55 | 18 | 12 | 24 | 🔴 32.7% |
| ObjectLiteral | 39 | 6 | 1 | 32 | 🔴 15.4% |
| ArithmeticOperator | 32 | 11 | 1 | 20 | 🔴 34.4% |
| OptionalChaining | 19 | 4 | 4 | 11 | 🔴 21.1% |
| UpdateOperator | 11 | 1 | 0 | 9 | 🔴 9.1% |

### Mutator-Specific Analysis

#### StringLiteral
- **Total Mutations**: 273
- **Success Rate**: 16.5%
- **Impact**: High (40 survived, 188 uncovered)
- **Recommendation**: Primary issue is test coverage. Add tests to cover the 188 uncovered mutations.

#### ConditionalExpression
- **Total Mutations**: 317
- **Success Rate**: 28.7%
- **Impact**: High (63 survived, 159 uncovered)
- **Recommendation**: Primary issue is test coverage. Add tests to cover the 159 uncovered mutations.

#### BlockStatement
- **Total Mutations**: 294
- **Success Rate**: 32.0%
- **Impact**: High (23 survived, 171 uncovered)
- **Recommendation**: Primary issue is test coverage. Add tests to cover the 171 uncovered mutations.

#### BooleanLiteral
- **Total Mutations**: 94
- **Success Rate**: 23.4%
- **Impact**: High (7 survived, 63 uncovered)
- **Recommendation**: Primary issue is test coverage. Add tests to cover the 63 uncovered mutations.

#### EqualityOperator
- **Total Mutations**: 102
- **Success Rate**: 32.4%
- **Impact**: High (17 survived, 50 uncovered)
- **Recommendation**: Primary issue is test coverage. Add tests to cover the 50 uncovered mutations.


### Test Effectiveness Analysis

#### Overall Test Coverage Insights
- **Total Mutants Analyzed**: 1297
- **Average Test Coverage per Mutant**: 3.3 tests
- **Most Tested Mutant**: #550 (covered by 45 tests)
- **Least Tested Areas**: AssignmentOperator, ObjectLiteral, UpdateOperator

#### Test Quality Metrics
- **Mutation Detection Rate**: 27.4%
- **Test Efficiency**: 65.0% (killed/covered ratio)
- **Coverage Gaps**: 153 lines not covered by any tests

#### Top Performing Tests
1. **Test #0**: Killed 19 mutants, covered 68
2. **Test #10**: Killed 18 mutants, covered 132
3. **Test #26**: Killed 15 mutants, covered 114
4. **Test #34**: Killed 14 mutants, covered 118
5. **Test #8**: Killed 13 mutants, covered 127


---

## 📁 File-by-File Breakdown

### 🔴 src/app.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 0.0% | **Coverage**: 0.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 0 | 0.0% |
| ❌ Survived | 0 | 0.0% |
| 🚫 No Coverage | 258 | 100.0% |
| **Total** | **258** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| import { LLMModule } from './llm.js';
  2| import { TTSModule } from './tts.js';
  3| import { AudioModule } from './audio.js';
  4| 
  5| class AppController {
  6|   constructor() {
   🚫 #0: BlockStatement → "{}" [0 tests]
  7|     this.llm = new LLMModule();
  8|     this.tts = new TTSModule();
  9|     this.audio = new AudioModule();
 10|     
 11|     this.currentTab = 'llm-stream';
   🚫 #1: StringLiteral → """" [0 tests]
 12|     this.isGenerating = false;
   🚫 #2: BooleanLiteral → "true" [0 tests]
 13|     this.isSpeaking = false;
   🚫 #3: BooleanLiteral → "true" [0 tests]
 14|     
 15|     this.initializeUI();
 16|     this.setupEventListeners();
 17|     this.detectDevice();
 18|   }
 19| 
 20|   async detectDevice() {
   🚫 #4: BlockStatement → "{}" [0 tests]
 21|     const deviceStatus = document.getElementById('device-status');
   🚫 #5: StringLiteral → """" [0 tests]
 22|     const hasWebGPU = navigator.gpu !== undefined;
   🚫 #6: ConditionalExpression → "true" [0 tests]
   🚫 #7: ConditionalExpression → "false" [0 tests]
   🚫 #8: EqualityOperator → "navigator.gpu === undefined" [0 tests]
 23|     
 24|     if (hasWebGPU) {
   🚫 #9: ConditionalExpression → "true" [0 tests]
   🚫 #10: ConditionalExpression → "false" [0 tests]
   🚫 #11: BlockStatement → "{}" [0 tests]
 25|       try {
   🚫 #12: BlockStatement → "{}" [0 tests]
 26|         const adapter = await navigator.gpu.requestAdapter();
 27|         if (adapter) {
   🚫 #13: ConditionalExpression → "true" [0 tests]
   🚫 #14: ConditionalExpression → "false" [0 tests]
   🚫 #15: BlockStatement → "{}" [0 tests]
 28|           deviceStatus.textContent = 'webgpu';
   🚫 #16: StringLiteral → """" [0 tests]
 29|           deviceStatus.className = 'text-green-600';
   🚫 #17: StringLiteral → """" [0 tests]
 30|         } else {
   🚫 #18: BlockStatement → "{}" [0 tests]
 31|           deviceStatus.textContent = 'wasm (webgpu unavailable)';
   🚫 #19: StringLiteral → """" [0 tests]
 32|           deviceStatus.className = 'text-orange-600';
   🚫 #20: StringLiteral → """" [0 tests]
 33|         }
 34|       } catch {
   🚫 #21: BlockStatement → "{}" [0 tests]
 35|         deviceStatus.textContent = 'wasm (webgpu error)';
   🚫 #22: StringLiteral → """" [0 tests]
 36|         deviceStatus.className = 'text-orange-600';
   🚫 #23: StringLiteral → """" [0 tests]
 37|       }
 38|     } else {
   🚫 #24: BlockStatement → "{}" [0 tests]
 39|       deviceStatus.textContent = 'wasm (webgpu unsupported)';
   🚫 #25: StringLiteral → """" [0 tests]
 40|       deviceStatus.className = 'text-orange-600';
   🚫 #26: StringLiteral → """" [0 tests]
 41|     }
 42|   }
 43| 
 44|   initializeUI() {
   🚫 #27: BlockStatement → "{}" [0 tests]
 45|     // Initialize tab switching
 46|     this.switchTab('llm-stream');
   🚫 #28: StringLiteral → """" [0 tests]
 47|     
 48|     // Initialize TTS controls
 49|     this.updateTTSControls();
 50|     
 51|     // Hide loading progress initially
 52|     document.getElementById('loading-progress').classList.add('hidden');
   🚫 #29: StringLiteral → """" [0 tests]
   🚫 #30: StringLiteral → """" [0 tests]
 53|   }
 54| 
 55|   setupEventListeners() {
   🚫 #31: BlockStatement → "{}" [0 tests]
 56|     // Tab switching
 57|     document.querySelectorAll('.tab-btn').forEach(btn => {
   🚫 #32: StringLiteral → """" [0 tests]
   🚫 #33: BlockStatement → "{}" [0 tests]
 58|       btn.addEventListener('click', (e) => {
   🚫 #34: StringLiteral → """" [0 tests]
   🚫 #35: BlockStatement → "{}" [0 tests]
 59|         this.switchTab(e.target.dataset.tab);
 60|       });
 61|     });
 62| 
 63|     // LLM Stream tab
 64|     document.getElementById('generate-btn').addEventListener('click', () => {
   🚫 #36: StringLiteral → """" [0 tests]
   🚫 #37: StringLiteral → """" [0 tests]
   🚫 #38: BlockStatement → "{}" [0 tests]
 65|       this.generateText();
 66|     });
 67| 
 68|     // TTS Only tab
 69|     document.getElementById('tts-play').addEventListener('click', () => {
   🚫 #39: StringLiteral → """" [0 tests]
   🚫 #40: StringLiteral → """" [0 tests]
   🚫 #41: BlockStatement → "{}" [0 tests]
 70|       this.playTTS();
 71|     });
 72|     document.getElementById('tts-pause').addEventListener('click', () => {
   🚫 #42: StringLiteral → """" [0 tests]
   🚫 #43: StringLiteral → """" [0 tests]
   🚫 #44: BlockStatement → "{}" [0 tests]
 73|       this.pauseTTS();
 74|     });
 75|     document.getElementById('tts-resume').addEventListener('click', () => {
   🚫 #45: StringLiteral → """" [0 tests]
   🚫 #46: StringLiteral → """" [0 tests]
   🚫 #47: BlockStatement → "{}" [0 tests]
 76|       this.resumeTTS();
 77|     });
 78|     document.getElementById('tts-stop').addEventListener('click', () => {
   🚫 #48: StringLiteral → """" [0 tests]
   🚫 #49: StringLiteral → """" [0 tests]
   🚫 #50: BlockStatement → "{}" [0 tests]
 79|       this.stopTTS();
 80|     });
 81| 
 82|     // TTS controls
 83|     document.getElementById('tts-rate').addEventListener('input', (e) => {
   🚫 #51: StringLiteral → """" [0 tests]
   🚫 #52: StringLiteral → """" [0 tests]
   🚫 #53: BlockStatement → "{}" [0 tests]
 84|       document.getElementById('rate-value').textContent = e.target.value;
   🚫 #54: StringLiteral → """" [0 tests]
 85|       this.tts.setRate(parseFloat(e.target.value));
 86|     });
 87|     document.getElementById('tts-pitch').addEventListener('input', (e) => {
   🚫 #55: StringLiteral → """" [0 tests]
   🚫 #56: StringLiteral → """" [0 tests]
   🚫 #57: BlockStatement → "{}" [0 tests]
 88|       document.getElementById('pitch-value').textContent = e.target.value;
   🚫 #58: StringLiteral → """" [0 tests]
 89|       this.tts.setPitch(parseFloat(e.target.value));
 90|     });
 91|     document.getElementById('tts-voice').addEventListener('change', (e) => {
   🚫 #59: StringLiteral → """" [0 tests]
   🚫 #60: StringLiteral → """" [0 tests]
   🚫 #61: BlockStatement → "{}" [0 tests]
 92|       this.tts.setVoice(e.target.value);
 93|     });
 94| 
 95|     // LLM → TTS tab
 96|     document.getElementById('generate-speak-btn').addEventListener('click', () => {
   🚫 #62: StringLiteral → """" [0 tests]
   🚫 #63: StringLiteral → """" [0 tests]
   🚫 #64: BlockStatement → "{}" [0 tests]
 97|       this.generateAndSpeak();
 98|     });
 99|     document.getElementById('combined-pause').addEventListener('click', () => {
   🚫 #65: StringLiteral → """" [0 tests]
   🚫 #66: StringLiteral → """" [0 tests]
   🚫 #67: BlockStatement → "{}" [0 tests]
100|       this.pauseTTS();
101|     });
102|     document.getElementById('combined-stop').addEventListener('click', () => {
   🚫 #68: StringLiteral → """" [0 tests]
   🚫 #69: StringLiteral → """" [0 tests]
   🚫 #70: BlockStatement → "{}" [0 tests]
103|       this.stopTTS();
104|     });
105| 
106|     // Audio module events
107|     this.audio.addEventListener('chunk-complete', (data) => {
   🚫 #71: StringLiteral → """" [0 tests]
   🚫 #72: BlockStatement → "{}" [0 tests]
108|       this.tts.markSentenceSpoken(data.sentenceIndex);
109|     });
110|     this.audio.addEventListener('playback-ended', () => {
   🚫 #73: StringLiteral → """" [0 tests]
   🚫 #74: BlockStatement → "{}" [0 tests]
111|       this.isSpeaking = false;
   🚫 #75: BooleanLiteral → "true" [0 tests]
112|       this.updateTTSControls();
113|     });
114|   }
115| 
116|   switchTab(tabName) {
   🚫 #76: BlockStatement → "{}" [0 tests]
117|     // Update tab buttons
118|     document.querySelectorAll('.tab-btn').forEach(btn => {
   🚫 #77: StringLiteral → """" [0 tests]
   🚫 #78: BlockStatement → "{}" [0 tests]
119|       btn.classList.remove('active', 'bg-indigo-600', 'text-white');
   🚫 #79: StringLiteral → """" [0 tests]
   🚫 #80: StringLiteral → """" [0 tests]
   🚫 #81: StringLiteral → """" [0 tests]
120|       btn.classList.add('bg-gray-200', 'text-gray-700');
   🚫 #82: StringLiteral → """" [0 tests]
   🚫 #83: StringLiteral → """" [0 tests]
121|     });
122|     document.querySelector(`[data-tab="${tabName}"]`).classList.add('active', 'bg-indigo-600', 'text-white');
   🚫 #84: StringLiteral → "``" [0 tests]
   🚫 #85: StringLiteral → """" [0 tests]
   🚫 #86: StringLiteral → """" [0 tests]
   🚫 #87: StringLiteral → """" [0 tests]
123|     document.querySelector(`[data-tab="${tabName}"]`).classList.remove('bg-gray-200', 'text-gray-700');
   🚫 #88: StringLiteral → "``" [0 tests]
   🚫 #89: StringLiteral → """" [0 tests]
   🚫 #90: StringLiteral → """" [0 tests]
124| 
125|     // Update tab content
126|     document.querySelectorAll('.tab-content').forEach(content => {
   🚫 #91: StringLiteral → """" [0 tests]
   🚫 #92: BlockStatement → "{}" [0 tests]
127|       content.classList.remove('active');
   🚫 #93: StringLiteral → """" [0 tests]
128|     });
129|     document.getElementById(tabName).classList.add('active');
   🚫 #94: StringLiteral → """" [0 tests]
130| 
131|     this.currentTab = tabName;
132|   }
133| 
134|   showProgress(show, text = 'Loading models...') {
   🚫 #95: StringLiteral → """" [0 tests]
   🚫 #96: BlockStatement → "{}" [0 tests]
135|     const progressContainer = document.getElementById('loading-progress');
   🚫 #97: StringLiteral → """" [0 tests]
136|     const progressText = document.getElementById('loading-text');
   🚫 #98: StringLiteral → """" [0 tests]
137|     
138|     if (show) {
   🚫 #99: ConditionalExpression → "true" [0 tests]
   🚫 #100: ConditionalExpression → "false" [0 tests]
   🚫 #101: BlockStatement → "{}" [0 tests]
139|       progressContainer.classList.remove('hidden');
   🚫 #102: StringLiteral → """" [0 tests]
140|       progressText.textContent = text;
141|     } else {
   🚫 #103: BlockStatement → "{}" [0 tests]
142|       progressContainer.classList.add('hidden');
   🚫 #104: StringLiteral → """" [0 tests]
143|     }
144|   }
145| 
146|   updateProgress(percentage, text) {
   🚫 #105: BlockStatement → "{}" [0 tests]
147|     const progressBar = document.getElementById('progress-bar');
   🚫 #106: StringLiteral → """" [0 tests]
148|     const progressText = document.getElementById('loading-text');
   🚫 #107: StringLiteral → """" [0 tests]
149|     
150|     progressBar.style.width = `${percentage}%`;
   🚫 #108: StringLiteral → "``" [0 tests]
151|     if (text) progressText.textContent = text;
   🚫 #109: ConditionalExpression → "true" [0 tests]
   🚫 #110: ConditionalExpression → "false" [0 tests]
152|   }
153| 
154|   async generateText() {
   🚫 #111: BlockStatement → "{}" [0 tests]
155|     if (this.isGenerating) return;
   🚫 #112: ConditionalExpression → "true" [0 tests]
   🚫 #113: ConditionalExpression → "false" [0 tests]
156| 
157|     const prompt = document.getElementById('llm-prompt').value.trim();
   🚫 #114: MethodExpression → "document.getElementById('llm-prompt').value" [0 tests]
   🚫 #115: StringLiteral → """" [0 tests]
158|     if (!prompt) {
   🚫 #116: BooleanLiteral → "prompt" [0 tests]
   🚫 #117: ConditionalExpression → "true" [0 tests]
   🚫 #118: ConditionalExpression → "false" [0 tests]
   🚫 #119: BlockStatement → "{}" [0 tests]
159|       this.showError('Please enter a prompt');
   🚫 #120: StringLiteral → """" [0 tests]
160|       return;
161|     }
162| 
163|     this.isGenerating = true;
   🚫 #121: BooleanLiteral → "false" [0 tests]
164|     const generateBtn = document.getElementById('generate-btn');
   🚫 #122: StringLiteral → """" [0 tests]
165|     const output = document.getElementById('llm-output');
   🚫 #123: StringLiteral → """" [0 tests]
166|     const statsEl = {
   🚫 #124: ObjectLiteral → "{}" [0 tests]
167|       ttfb: document.getElementById('ttfb'),
   🚫 #125: StringLiteral → """" [0 tests]
168|       tokensPerSec: document.getElementById('tokens-per-sec')
   🚫 #126: StringLiteral → """" [0 tests]
169|     };
170| 
171|     generateBtn.textContent = 'Generating...';
   🚫 #127: StringLiteral → """" [0 tests]
172|     generateBtn.disabled = true;
   🚫 #128: BooleanLiteral → "false" [0 tests]
173|     output.textContent = '';
   🚫 #129: StringLiteral → ""Stryker was here!"" [0 tests]
174| 
175|     try {
   🚫 #130: BlockStatement → "{}" [0 tests]
176|       this.showProgress(true, 'Loading LLM model...');
   🚫 #131: BooleanLiteral → "false" [0 tests]
   🚫 #132: StringLiteral → """" [0 tests]
177|       
178|       let startTime = Date.now();
179|       let firstTokenTime = null;
180|       let tokenCount = 0;
181| 
182|       await this.llm.generate(prompt, {
   🚫 #133: ObjectLiteral → "{}" [0 tests]
183|         onToken: (token) => {
   🚫 #134: BlockStatement → "{}" [0 tests]
184|           if (!firstTokenTime) {
   🚫 #135: BooleanLiteral → "firstTokenTime" [0 tests]
   🚫 #136: ConditionalExpression → "true" [0 tests]
   🚫 #137: ConditionalExpression → "false" [0 tests]
   🚫 #138: BlockStatement → "{}" [0 tests]
185|             firstTokenTime = Date.now();
186|             const ttfb = firstTokenTime - startTime;
   🚫 #139: ArithmeticOperator → "firstTokenTime + startTime" [0 tests]
187|             statsEl.ttfb.textContent = `TTFB: ${ttfb}ms`;
   🚫 #140: StringLiteral → "``" [0 tests]
188|           }
189|           
190|           tokenCount++;
   🚫 #141: UpdateOperator → "tokenCount--" [0 tests]
191|           output.textContent += token;
   🚫 #142: AssignmentOperator → "output.textContent -= token" [0 tests]
192|           output.scrollTop = output.scrollHeight;
193|           
194|           // Update tokens per second
195|           if (firstTokenTime) {
   🚫 #143: ConditionalExpression → "true" [0 tests]
   🚫 #144: ConditionalExpression → "false" [0 tests]
   🚫 #145: BlockStatement → "{}" [0 tests]
196|             const elapsed = (Date.now() - firstTokenTime) / 1000;
   🚫 #146: ArithmeticOperator → "(Date.now() - firstTokenTime) * 1000" [0 tests]
   🚫 #147: ArithmeticOperator → "Date.now() + firstTokenTime" [0 tests]
197|             const tokensPerSec = elapsed > 0 ? (tokenCount / elapsed).toFixed(1) : '0';
   🚫 #148: ConditionalExpression → "true" [0 tests]
   🚫 #149: ConditionalExpression → "false" [0 tests]
   🚫 #150: EqualityOperator → "elapsed >= 0" [0 tests]
   🚫 #151: EqualityOperator → "elapsed <= 0" [0 tests]
   🚫 #152: ArithmeticOperator → "tokenCount * elapsed" [0 tests]
   🚫 #153: StringLiteral → """" [0 tests]
198|             statsEl.tokensPerSec.textContent = `Tokens/s: ${tokensPerSec}`;
   🚫 #154: StringLiteral → "``" [0 tests]
199|           }
200|         },
201|         onProgress: (progress) => {
   🚫 #155: BlockStatement → "{}" [0 tests]
202|           this.updateProgress(progress.percentage, progress.text);
203|         }
204|       });
205| 
206|       document.getElementById('llm-status').textContent = 'loaded';
   🚫 #156: StringLiteral → """" [0 tests]
   🚫 #157: StringLiteral → """" [0 tests]
207|       document.getElementById('llm-status').className = 'text-green-600';
   🚫 #158: StringLiteral → """" [0 tests]
   🚫 #159: StringLiteral → """" [0 tests]
208|       
209|     } catch (error) {
   🚫 #160: BlockStatement → "{}" [0 tests]
210|       this.showError(`Generation failed: ${error.message}`);
   🚫 #161: StringLiteral → "``" [0 tests]
211|       console.error('Generation error:', error);
   🚫 #162: StringLiteral → """" [0 tests]
212|     } finally {
   🚫 #163: BlockStatement → "{}" [0 tests]
213|       this.isGenerating = false;
   🚫 #164: BooleanLiteral → "true" [0 tests]
214|       generateBtn.textContent = 'Generate';
   🚫 #165: StringLiteral → """" [0 tests]
215|       generateBtn.disabled = false;
   🚫 #166: BooleanLiteral → "true" [0 tests]
216|       this.showProgress(false);
   🚫 #167: BooleanLiteral → "true" [0 tests]
217|     }
218|   }
219| 
220|   async playTTS() {
   🚫 #168: BlockStatement → "{}" [0 tests]
221|     const text = document.getElementById('tts-text').value.trim();
   🚫 #169: MethodExpression → "document.getElementById('tts-text').value" [0 tests]
   🚫 #170: StringLiteral → """" [0 tests]
222|     if (!text) {
   🚫 #171: BooleanLiteral → "text" [0 tests]
   🚫 #172: ConditionalExpression → "true" [0 tests]
   🚫 #173: ConditionalExpression → "false" [0 tests]
   🚫 #174: BlockStatement → "{}" [0 tests]
223|       this.showError('Please enter text to speak');
   🚫 #175: StringLiteral → """" [0 tests]
224|       return;
225|     }
226| 
227|     if (this.isSpeaking) {
   🚫 #176: ConditionalExpression → "true" [0 tests]
   🚫 #177: ConditionalExpression → "false" [0 tests]
   🚫 #178: BlockStatement → "{}" [0 tests]
228|       this.stopTTS();
229|     }
230| 
231|     try {
   🚫 #179: BlockStatement → "{}" [0 tests]
232|       this.showProgress(true, 'Loading TTS model...');
   🚫 #180: BooleanLiteral → "false" [0 tests]
   🚫 #181: StringLiteral → """" [0 tests]
233|       this.isSpeaking = true;
   🚫 #182: BooleanLiteral → "false" [0 tests]
234|       this.updateTTSControls();
235| 
236|       const outputEl = document.getElementById('tts-output');
   🚫 #183: StringLiteral → """" [0 tests]
237|       outputEl.innerHTML = '';
   🚫 #184: StringLiteral → ""Stryker was here!"" [0 tests]
238| 
239|       await this.tts.speak(text, {
   🚫 #185: ObjectLiteral → "{}" [0 tests]
240|         outputElement: outputEl,
241|         audioModule: this.audio,
242|         onProgress: (progress) => {
   🚫 #186: BlockStatement → "{}" [0 tests]
243|           this.updateProgress(progress.percentage, progress.text);
244|         }
245|       });
246| 
247|       document.getElementById('tts-status').textContent = 'loaded';
   🚫 #187: StringLiteral → """" [0 tests]
   🚫 #188: StringLiteral → """" [0 tests]
248|       document.getElementById('tts-status').className = 'text-blue-600';
   🚫 #189: StringLiteral → """" [0 tests]
   🚫 #190: StringLiteral → """" [0 tests]
249| 
250|     } catch (error) {
   🚫 #191: BlockStatement → "{}" [0 tests]
251|       this.showError(`TTS failed: ${error.message}`);
   🚫 #192: StringLiteral → "``" [0 tests]
252|       console.error('TTS error:', error);
   🚫 #193: StringLiteral → """" [0 tests]
253|       this.isSpeaking = false;
   🚫 #194: BooleanLiteral → "true" [0 tests]
254|       this.updateTTSControls();
255|     } finally {
   🚫 #195: BlockStatement → "{}" [0 tests]
256|       this.showProgress(false);
   🚫 #196: BooleanLiteral → "true" [0 tests]
257|     }
258|   }
259| 
260|   pauseTTS() {
   🚫 #197: BlockStatement → "{}" [0 tests]
261|     this.tts.pause();
262|     this.audio.pause();
263|   }
264| 
265|   resumeTTS() {
   🚫 #198: BlockStatement → "{}" [0 tests]
266|     this.tts.resume();
267|     this.audio.resume();
268|   }
269| 
270|   stopTTS() {
   🚫 #199: BlockStatement → "{}" [0 tests]
271|     this.tts.stop();
272|     this.audio.stop();
273|     this.isSpeaking = false;
   🚫 #200: BooleanLiteral → "true" [0 tests]
274|     this.updateTTSControls();
275|   }
276| 
277|   async generateAndSpeak() {
   🚫 #201: BlockStatement → "{}" [0 tests]
278|     const prompt = document.getElementById('combined-prompt').value.trim();
   🚫 #202: MethodExpression → "document.getElementById('combined-prompt').value" [0 tests]
   🚫 #203: StringLiteral → """" [0 tests]
279|     if (!prompt) {
   🚫 #204: BooleanLiteral → "prompt" [0 tests]
   🚫 #205: ConditionalExpression → "true" [0 tests]
   🚫 #206: ConditionalExpression → "false" [0 tests]
   🚫 #207: BlockStatement → "{}" [0 tests]
280|       this.showError('Please enter a prompt');
   🚫 #208: StringLiteral → """" [0 tests]
281|       return;
282|     }
283| 
284|     if (this.isGenerating || this.isSpeaking) return;
   🚫 #209: ConditionalExpression → "true" [0 tests]
   🚫 #210: ConditionalExpression → "false" [0 tests]
   🚫 #211: LogicalOperator → "this.isGenerating && this.isSpeaking" [0 tests]
285| 
286|     this.isGenerating = true;
   🚫 #212: BooleanLiteral → "false" [0 tests]
287|     const generateBtn = document.getElementById('generate-speak-btn');
   🚫 #213: StringLiteral → """" [0 tests]
288|     const output = document.getElementById('combined-output');
   🚫 #214: StringLiteral → """" [0 tests]
289| 
290|     generateBtn.textContent = 'Generating...';
   🚫 #215: StringLiteral → """" [0 tests]
291|     generateBtn.disabled = true;
   🚫 #216: BooleanLiteral → "false" [0 tests]
292|     output.innerHTML = '';
   🚫 #217: StringLiteral → ""Stryker was here!"" [0 tests]
293| 
294|     try {
   🚫 #218: BlockStatement → "{}" [0 tests]
295|       this.showProgress(true, 'Loading models...');
   🚫 #219: BooleanLiteral → "false" [0 tests]
   🚫 #220: StringLiteral → """" [0 tests]
296|       
297|       // Generate text first
298|       let generatedText = '';
   🚫 #221: StringLiteral → ""Stryker was here!"" [0 tests]
299|       await this.llm.generate(prompt, {
   🚫 #222: ObjectLiteral → "{}" [0 tests]
300|         onToken: (token) => {
   🚫 #223: BlockStatement → "{}" [0 tests]
301|           generatedText += token;
   🚫 #224: AssignmentOperator → "generatedText -= token" [0 tests]
302|           output.textContent = generatedText;
303|           output.scrollTop = output.scrollHeight;
304|         },
305|         onProgress: (progress) => {
   🚫 #225: BlockStatement → "{}" [0 tests]
306|           this.updateProgress(progress.percentage * 0.7, `Loading LLM: ${progress.text}`);
   🚫 #226: ArithmeticOperator → "progress.percentage / 0.7" [0 tests]
   🚫 #227: StringLiteral → "``" [0 tests]
307|         }
308|       });
309| 
310|       // Then speak it
311|       this.isGenerating = false;
   🚫 #228: BooleanLiteral → "true" [0 tests]
312|       this.isSpeaking = true;
   🚫 #229: BooleanLiteral → "false" [0 tests]
313|       generateBtn.textContent = 'Speaking...';
   🚫 #230: StringLiteral → """" [0 tests]
314|       
315|       output.innerHTML = '';
   🚫 #231: StringLiteral → ""Stryker was here!"" [0 tests]
316|       await this.tts.speak(generatedText, {
   🚫 #232: ObjectLiteral → "{}" [0 tests]
317|         outputElement: output,
318|         audioModule: this.audio,
319|         onProgress: (progress) => {
   🚫 #233: BlockStatement → "{}" [0 tests]
320|           this.updateProgress(70 + progress.percentage * 0.3, `Loading TTS: ${progress.text}`);
   🚫 #234: ArithmeticOperator → "70 - progress.percentage * 0.3" [0 tests]
   🚫 #235: ArithmeticOperator → "progress.percentage / 0.3" [0 tests]
   🚫 #236: StringLiteral → "``" [0 tests]
321|         }
322|       });
323| 
324|       document.getElementById('llm-status').textContent = 'loaded';
   🚫 #237: StringLiteral → """" [0 tests]
   🚫 #238: StringLiteral → """" [0 tests]
325|       document.getElementById('tts-status').textContent = 'loaded';
   🚫 #239: StringLiteral → """" [0 tests]
   🚫 #240: StringLiteral → """" [0 tests]
326| 
327|     } catch (error) {
   🚫 #241: BlockStatement → "{}" [0 tests]
328|       this.showError(`Generation/Speech failed: ${error.message}`);
   🚫 #242: StringLiteral → "``" [0 tests]
329|       console.error('Combined error:', error);
   🚫 #243: StringLiteral → """" [0 tests]
330|     } finally {
   🚫 #244: BlockStatement → "{}" [0 tests]
331|       this.isGenerating = false;
   🚫 #245: BooleanLiteral → "true" [0 tests]
332|       this.isSpeaking = false;
   🚫 #246: BooleanLiteral → "true" [0 tests]
333|       generateBtn.textContent = 'Generate & Speak';
   🚫 #247: StringLiteral → """" [0 tests]
334|       generateBtn.disabled = false;
   🚫 #248: BooleanLiteral → "true" [0 tests]
335|       this.showProgress(false);
   🚫 #249: BooleanLiteral → "true" [0 tests]
336|     }
337|   }
338| 
339|   updateTTSControls() {
340|     // Update button states based on speaking status
341|     // This would be more complex in a real implementation
342|   }
343| 
344|   showError(message) {
   🚫 #250: BlockStatement → "{}" [0 tests]
345|     const errorContainer = document.getElementById('error-container');
   🚫 #251: StringLiteral → """" [0 tests]
346|     const errorMessage = document.getElementById('error-message');
   🚫 #252: StringLiteral → """" [0 tests]
347|     
348|     errorMessage.textContent = message;
349|     errorContainer.classList.remove('hidden');
   🚫 #253: StringLiteral → """" [0 tests]
350|     
351|     setTimeout(() => {
   🚫 #254: BlockStatement → "{}" [0 tests]
352|       errorContainer.classList.add('hidden');
   🚫 #255: StringLiteral → """" [0 tests]
353|     }, 5000);
354|   }
355| }
356| 
357| // Initialize app when DOM is loaded
358| document.addEventListener('DOMContentLoaded', () => {
   🚫 #256: StringLiteral → """" [0 tests]
   🚫 #257: BlockStatement → "{}" [0 tests]
359|   window.app = new AppController();
360| });
361| 
```

#### 🚫 Coverage Gaps Summary

- **258 uncovered mutants** across 170 lines
- **Most affected lines**: 6, 11, 12, 13, 20
- **Common uncovered operations**: StringLiteral, BlockStatement, ConditionalExpression

##### Detailed No Coverage Mutants:
1. **Mutant #0** - Line 6:17-4: `BlockStatement` → `{}`
2. **Mutant #1** - Line 11:23-35: `StringLiteral` → `""`
3. **Mutant #2** - Line 12:25-30: `BooleanLiteral` → `true`
4. **Mutant #3** - Line 13:23-28: `BooleanLiteral` → `true`
5. **Mutant #4** - Line 20:24-4: `BlockStatement` → `{}`
6. **Mutant #5** - Line 21:50-65: `StringLiteral` → `""`
7. **Mutant #6** - Line 22:23-50: `ConditionalExpression` → `true`
8. **Mutant #7** - Line 22:23-50: `ConditionalExpression` → `false`
9. **Mutant #8** - Line 22:23-50: `EqualityOperator` → `navigator.gpu === undefined`
10. **Mutant #9** - Line 24:9-18: `ConditionalExpression` → `true`
11. **Mutant #10** - Line 24:9-18: `ConditionalExpression` → `false`
12. **Mutant #11** - Line 24:20-6: `BlockStatement` → `{}`
13. **Mutant #12** - Line 25:11-8: `BlockStatement` → `{}`
14. **Mutant #13** - Line 27:13-20: `ConditionalExpression` → `true`
15. **Mutant #14** - Line 27:13-20: `ConditionalExpression` → `false`
16. **Mutant #15** - Line 27:22-10: `BlockStatement` → `{}`
17. **Mutant #16** - Line 28:38-46: `StringLiteral` → `""`
18. **Mutant #17** - Line 29:36-52: `StringLiteral` → `""`
19. **Mutant #18** - Line 30:16-10: `BlockStatement` → `{}`
20. **Mutant #19** - Line 31:38-65: `StringLiteral` → `""`
21. **Mutant #20** - Line 32:36-53: `StringLiteral` → `""`
22. **Mutant #21** - Line 34:15-8: `BlockStatement` → `{}`
23. **Mutant #22** - Line 35:36-57: `StringLiteral` → `""`
24. **Mutant #23** - Line 36:34-51: `StringLiteral` → `""`
25. **Mutant #24** - Line 38:12-6: `BlockStatement` → `{}`
26. **Mutant #25** - Line 39:34-61: `StringLiteral` → `""`
27. **Mutant #26** - Line 40:32-49: `StringLiteral` → `""`
28. **Mutant #27** - Line 44:18-4: `BlockStatement` → `{}`
29. **Mutant #28** - Line 46:20-32: `StringLiteral` → `""`
30. **Mutant #29** - Line 52:29-47: `StringLiteral` → `""`
31. **Mutant #30** - Line 52:63-71: `StringLiteral` → `""`
32. **Mutant #31** - Line 55:25-4: `BlockStatement` → `{}`
33. **Mutant #32** - Line 57:31-41: `StringLiteral` → `""`
34. **Mutant #33** - Line 57:58-6: `BlockStatement` → `{}`
35. **Mutant #34** - Line 58:28-35: `StringLiteral` → `""`
36. **Mutant #35** - Line 58:44-8: `BlockStatement` → `{}`
37. **Mutant #36** - Line 64:29-43: `StringLiteral` → `""`
38. **Mutant #37** - Line 64:62-69: `StringLiteral` → `""`
39. **Mutant #38** - Line 64:77-6: `BlockStatement` → `{}`
40. **Mutant #39** - Line 69:29-39: `StringLiteral` → `""`
41. **Mutant #40** - Line 69:58-65: `StringLiteral` → `""`
42. **Mutant #41** - Line 69:73-6: `BlockStatement` → `{}`
43. **Mutant #42** - Line 72:29-40: `StringLiteral` → `""`
44. **Mutant #43** - Line 72:59-66: `StringLiteral` → `""`
45. **Mutant #44** - Line 72:74-6: `BlockStatement` → `{}`
46. **Mutant #45** - Line 75:29-41: `StringLiteral` → `""`
47. **Mutant #46** - Line 75:60-67: `StringLiteral` → `""`
48. **Mutant #47** - Line 75:75-6: `BlockStatement` → `{}`
49. **Mutant #48** - Line 78:29-39: `StringLiteral` → `""`
50. **Mutant #49** - Line 78:58-65: `StringLiteral` → `""`
51. **Mutant #50** - Line 78:73-6: `BlockStatement` → `{}`
52. **Mutant #51** - Line 83:29-39: `StringLiteral` → `""`
53. **Mutant #52** - Line 83:58-65: `StringLiteral` → `""`
54. **Mutant #53** - Line 83:74-6: `BlockStatement` → `{}`
55. **Mutant #54** - Line 84:31-43: `StringLiteral` → `""`
56. **Mutant #55** - Line 87:29-40: `StringLiteral` → `""`
57. **Mutant #56** - Line 87:59-66: `StringLiteral` → `""`
58. **Mutant #57** - Line 87:75-6: `BlockStatement` → `{}`
59. **Mutant #58** - Line 88:31-44: `StringLiteral` → `""`
60. **Mutant #59** - Line 91:29-40: `StringLiteral` → `""`
61. **Mutant #60** - Line 91:59-67: `StringLiteral` → `""`
62. **Mutant #61** - Line 91:76-6: `BlockStatement` → `{}`
63. **Mutant #62** - Line 96:29-49: `StringLiteral` → `""`
64. **Mutant #63** - Line 96:68-75: `StringLiteral` → `""`
65. **Mutant #64** - Line 96:83-6: `BlockStatement` → `{}`
66. **Mutant #65** - Line 99:29-45: `StringLiteral` → `""`
67. **Mutant #66** - Line 99:64-71: `StringLiteral` → `""`
68. **Mutant #67** - Line 99:79-6: `BlockStatement` → `{}`
69. **Mutant #68** - Line 102:29-44: `StringLiteral` → `""`
70. **Mutant #69** - Line 102:63-70: `StringLiteral` → `""`
71. **Mutant #70** - Line 102:78-6: `BlockStatement` → `{}`
72. **Mutant #71** - Line 107:33-49: `StringLiteral` → `""`
73. **Mutant #72** - Line 107:61-6: `BlockStatement` → `{}`
74. **Mutant #73** - Line 110:33-49: `StringLiteral` → `""`
75. **Mutant #74** - Line 110:57-6: `BlockStatement` → `{}`
76. **Mutant #75** - Line 111:25-30: `BooleanLiteral` → `true`
77. **Mutant #76** - Line 116:22-4: `BlockStatement` → `{}`
78. **Mutant #77** - Line 118:31-41: `StringLiteral` → `""`
79. **Mutant #78** - Line 118:58-6: `BlockStatement` → `{}`
80. **Mutant #79** - Line 119:28-36: `StringLiteral` → `""`
81. **Mutant #80** - Line 119:38-53: `StringLiteral` → `""`
82. **Mutant #81** - Line 119:55-67: `StringLiteral` → `""`
83. **Mutant #82** - Line 120:25-38: `StringLiteral` → `""`
84. **Mutant #83** - Line 120:40-55: `StringLiteral` → `""`
85. **Mutant #84** - Line 122:28-53: `StringLiteral` → ````
86. **Mutant #85** - Line 122:69-77: `StringLiteral` → `""`
87. **Mutant #86** - Line 122:79-94: `StringLiteral` → `""`
88. **Mutant #87** - Line 122:96-108: `StringLiteral` → `""`
89. **Mutant #88** - Line 123:28-53: `StringLiteral` → ````
90. **Mutant #89** - Line 123:72-85: `StringLiteral` → `""`
91. **Mutant #90** - Line 123:87-102: `StringLiteral` → `""`
92. **Mutant #91** - Line 126:31-45: `StringLiteral` → `""`
93. **Mutant #92** - Line 126:66-6: `BlockStatement` → `{}`
94. **Mutant #93** - Line 127:32-40: `StringLiteral` → `""`
95. **Mutant #94** - Line 129:52-60: `StringLiteral` → `""`
96. **Mutant #95** - Line 134:29-48: `StringLiteral` → `""`
97. **Mutant #96** - Line 134:50-4: `BlockStatement` → `{}`
98. **Mutant #97** - Line 135:55-73: `StringLiteral` → `""`
99. **Mutant #98** - Line 136:50-64: `StringLiteral` → `""`
100. **Mutant #99** - Line 138:9-13: `ConditionalExpression` → `true`
101. **Mutant #100** - Line 138:9-13: `ConditionalExpression` → `false`
102. **Mutant #101** - Line 138:15-6: `BlockStatement` → `{}`
103. **Mutant #102** - Line 139:42-50: `StringLiteral` → `""`
104. **Mutant #103** - Line 141:12-6: `BlockStatement` → `{}`
105. **Mutant #104** - Line 142:39-47: `StringLiteral` → `""`
106. **Mutant #105** - Line 146:36-4: `BlockStatement` → `{}`
107. **Mutant #106** - Line 147:49-63: `StringLiteral` → `""`
108. **Mutant #107** - Line 148:50-64: `StringLiteral` → `""`
109. **Mutant #108** - Line 150:31-47: `StringLiteral` → ````
110. **Mutant #109** - Line 151:9-13: `ConditionalExpression` → `true`
111. **Mutant #110** - Line 151:9-13: `ConditionalExpression` → `false`
112. **Mutant #111** - Line 154:24-4: `BlockStatement` → `{}`
113. **Mutant #112** - Line 155:9-26: `ConditionalExpression` → `true`
114. **Mutant #113** - Line 155:9-26: `ConditionalExpression` → `false`
115. **Mutant #114** - Line 157:20-70: `MethodExpression` → `document.getElementById('llm-prompt').value`
116. **Mutant #115** - Line 157:44-56: `StringLiteral` → `""`
117. **Mutant #116** - Line 158:9-16: `BooleanLiteral` → `prompt`
118. **Mutant #117** - Line 158:9-16: `ConditionalExpression` → `true`
119. **Mutant #118** - Line 158:9-16: `ConditionalExpression` → `false`
120. **Mutant #119** - Line 158:18-6: `BlockStatement` → `{}`
121. **Mutant #120** - Line 159:22-45: `StringLiteral` → `""`
122. **Mutant #121** - Line 163:25-29: `BooleanLiteral` → `false`
123. **Mutant #122** - Line 164:49-63: `StringLiteral` → `""`
124. **Mutant #123** - Line 165:44-56: `StringLiteral` → `""`
125. **Mutant #124** - Line 166:21-6: `ObjectLiteral` → `{}`
126. **Mutant #125** - Line 167:37-43: `StringLiteral` → `""`
127. **Mutant #126** - Line 168:45-61: `StringLiteral` → `""`
128. **Mutant #127** - Line 171:31-46: `StringLiteral` → `""`
129. **Mutant #128** - Line 172:28-32: `BooleanLiteral` → `false`
130. **Mutant #129** - Line 173:26-28: `StringLiteral` → `"Stryker was here!"`
131. **Mutant #130** - Line 175:9-6: `BlockStatement` → `{}`
132. **Mutant #131** - Line 176:25-29: `BooleanLiteral` → `false`
133. **Mutant #132** - Line 176:31-53: `StringLiteral` → `""`
134. **Mutant #133** - Line 182:39-8: `ObjectLiteral` → `{}`
135. **Mutant #134** - Line 183:29-10: `BlockStatement` → `{}`
136. **Mutant #135** - Line 184:15-30: `BooleanLiteral` → `firstTokenTime`
137. **Mutant #136** - Line 184:15-30: `ConditionalExpression` → `true`
138. **Mutant #137** - Line 184:15-30: `ConditionalExpression` → `false`
139. **Mutant #138** - Line 184:32-12: `BlockStatement` → `{}`
140. **Mutant #139** - Line 186:26-52: `ArithmeticOperator` → `firstTokenTime + startTime`
141. **Mutant #140** - Line 187:40-57: `StringLiteral` → ````
142. **Mutant #141** - Line 190:11-23: `UpdateOperator` → `tokenCount--`
143. **Mutant #142** - Line 191:11-38: `AssignmentOperator` → `output.textContent -= token`
144. **Mutant #143** - Line 195:15-29: `ConditionalExpression` → `true`
145. **Mutant #144** - Line 195:15-29: `ConditionalExpression` → `false`
146. **Mutant #145** - Line 195:31-12: `BlockStatement` → `{}`
147. **Mutant #146** - Line 196:29-65: `ArithmeticOperator` → `(Date.now() - firstTokenTime) * 1000`
148. **Mutant #147** - Line 196:30-57: `ArithmeticOperator` → `Date.now() + firstTokenTime`
149. **Mutant #148** - Line 197:34-45: `ConditionalExpression` → `true`
150. **Mutant #149** - Line 197:34-45: `ConditionalExpression` → `false`
151. **Mutant #150** - Line 197:34-45: `EqualityOperator` → `elapsed >= 0`
152. **Mutant #151** - Line 197:34-45: `EqualityOperator` → `elapsed <= 0`
153. **Mutant #152** - Line 197:49-69: `ArithmeticOperator` → `tokenCount * elapsed`
154. **Mutant #153** - Line 197:84-87: `StringLiteral` → `""`
155. **Mutant #154** - Line 198:48-75: `StringLiteral` → ````
156. **Mutant #155** - Line 201:35-10: `BlockStatement` → `{}`
157. **Mutant #156** - Line 206:31-43: `StringLiteral` → `""`
158. **Mutant #157** - Line 206:59-67: `StringLiteral` → `""`
159. **Mutant #158** - Line 207:31-43: `StringLiteral` → `""`
160. **Mutant #159** - Line 207:57-73: `StringLiteral` → `""`
161. **Mutant #160** - Line 209:21-6: `BlockStatement` → `{}`
162. **Mutant #161** - Line 210:22-59: `StringLiteral` → ````
163. **Mutant #162** - Line 211:21-40: `StringLiteral` → `""`
164. **Mutant #163** - Line 212:15-6: `BlockStatement` → `{}`
165. **Mutant #164** - Line 213:27-32: `BooleanLiteral` → `true`
166. **Mutant #165** - Line 214:33-43: `StringLiteral` → `""`
167. **Mutant #166** - Line 215:30-35: `BooleanLiteral` → `true`
168. **Mutant #167** - Line 216:25-30: `BooleanLiteral` → `true`
169. **Mutant #168** - Line 220:19-4: `BlockStatement` → `{}`
170. **Mutant #169** - Line 221:18-66: `MethodExpression` → `document.getElementById('tts-text').value`
171. **Mutant #170** - Line 221:42-52: `StringLiteral` → `""`
172. **Mutant #171** - Line 222:9-14: `BooleanLiteral` → `text`
173. **Mutant #172** - Line 222:9-14: `ConditionalExpression` → `true`
174. **Mutant #173** - Line 222:9-14: `ConditionalExpression` → `false`
175. **Mutant #174** - Line 222:16-6: `BlockStatement` → `{}`
176. **Mutant #175** - Line 223:22-50: `StringLiteral` → `""`
177. **Mutant #176** - Line 227:9-24: `ConditionalExpression` → `true`
178. **Mutant #177** - Line 227:9-24: `ConditionalExpression` → `false`
179. **Mutant #178** - Line 227:26-6: `BlockStatement` → `{}`
180. **Mutant #179** - Line 231:9-6: `BlockStatement` → `{}`
181. **Mutant #180** - Line 232:25-29: `BooleanLiteral` → `false`
182. **Mutant #181** - Line 232:31-53: `StringLiteral` → `""`
183. **Mutant #182** - Line 233:25-29: `BooleanLiteral` → `false`
184. **Mutant #183** - Line 236:48-60: `StringLiteral` → `""`
185. **Mutant #184** - Line 237:28-30: `StringLiteral` → `"Stryker was here!"`
186. **Mutant #185** - Line 239:34-8: `ObjectLiteral` → `{}`
187. **Mutant #186** - Line 242:35-10: `BlockStatement` → `{}`
188. **Mutant #187** - Line 247:31-43: `StringLiteral` → `""`
189. **Mutant #188** - Line 247:59-67: `StringLiteral` → `""`
190. **Mutant #189** - Line 248:31-43: `StringLiteral` → `""`
191. **Mutant #190** - Line 248:57-72: `StringLiteral` → `""`
192. **Mutant #191** - Line 250:21-6: `BlockStatement` → `{}`
193. **Mutant #192** - Line 251:22-52: `StringLiteral` → ````
194. **Mutant #193** - Line 252:21-33: `StringLiteral` → `""`
195. **Mutant #194** - Line 253:25-30: `BooleanLiteral` → `true`
196. **Mutant #195** - Line 255:15-6: `BlockStatement` → `{}`
197. **Mutant #196** - Line 256:25-30: `BooleanLiteral` → `true`
198. **Mutant #197** - Line 260:14-4: `BlockStatement` → `{}`
199. **Mutant #198** - Line 265:15-4: `BlockStatement` → `{}`
200. **Mutant #199** - Line 270:13-4: `BlockStatement` → `{}`
201. **Mutant #200** - Line 273:23-28: `BooleanLiteral` → `true`
202. **Mutant #201** - Line 277:28-4: `BlockStatement` → `{}`
203. **Mutant #202** - Line 278:20-75: `MethodExpression` → `document.getElementById('combined-prompt').value`
204. **Mutant #203** - Line 278:44-61: `StringLiteral` → `""`
205. **Mutant #204** - Line 279:9-16: `BooleanLiteral` → `prompt`
206. **Mutant #205** - Line 279:9-16: `ConditionalExpression` → `true`
207. **Mutant #206** - Line 279:9-16: `ConditionalExpression` → `false`
208. **Mutant #207** - Line 279:18-6: `BlockStatement` → `{}`
209. **Mutant #208** - Line 280:22-45: `StringLiteral` → `""`
210. **Mutant #209** - Line 284:9-45: `ConditionalExpression` → `true`
211. **Mutant #210** - Line 284:9-45: `ConditionalExpression` → `false`
212. **Mutant #211** - Line 284:9-45: `LogicalOperator` → `this.isGenerating && this.isSpeaking`
213. **Mutant #212** - Line 286:25-29: `BooleanLiteral` → `false`
214. **Mutant #213** - Line 287:49-69: `StringLiteral` → `""`
215. **Mutant #214** - Line 288:44-61: `StringLiteral` → `""`
216. **Mutant #215** - Line 290:31-46: `StringLiteral` → `""`
217. **Mutant #216** - Line 291:28-32: `BooleanLiteral` → `false`
218. **Mutant #217** - Line 292:24-26: `StringLiteral` → `"Stryker was here!"`
219. **Mutant #218** - Line 294:9-6: `BlockStatement` → `{}`
220. **Mutant #219** - Line 295:25-29: `BooleanLiteral` → `false`
221. **Mutant #220** - Line 295:31-50: `StringLiteral` → `""`
222. **Mutant #221** - Line 298:27-29: `StringLiteral` → `"Stryker was here!"`
223. **Mutant #222** - Line 299:39-8: `ObjectLiteral` → `{}`
224. **Mutant #223** - Line 300:29-10: `BlockStatement` → `{}`
225. **Mutant #224** - Line 301:11-33: `AssignmentOperator` → `generatedText -= token`
226. **Mutant #225** - Line 305:35-10: `BlockStatement` → `{}`
227. **Mutant #226** - Line 306:31-56: `ArithmeticOperator` → `progress.percentage / 0.7`
228. **Mutant #227** - Line 306:58-89: `StringLiteral` → ````
229. **Mutant #228** - Line 311:27-32: `BooleanLiteral` → `true`
230. **Mutant #229** - Line 312:25-29: `BooleanLiteral` → `false`
231. **Mutant #230** - Line 313:33-46: `StringLiteral` → `""`
232. **Mutant #231** - Line 315:26-28: `StringLiteral` → `"Stryker was here!"`
233. **Mutant #232** - Line 316:43-8: `ObjectLiteral` → `{}`
234. **Mutant #233** - Line 319:35-10: `BlockStatement` → `{}`
235. **Mutant #234** - Line 320:31-61: `ArithmeticOperator` → `70 - progress.percentage * 0.3`
236. **Mutant #235** - Line 320:36-61: `ArithmeticOperator` → `progress.percentage / 0.3`
237. **Mutant #236** - Line 320:63-94: `StringLiteral` → ````
238. **Mutant #237** - Line 324:31-43: `StringLiteral` → `""`
239. **Mutant #238** - Line 324:59-67: `StringLiteral` → `""`
240. **Mutant #239** - Line 325:31-43: `StringLiteral` → `""`
241. **Mutant #240** - Line 325:59-67: `StringLiteral` → `""`
242. **Mutant #241** - Line 327:21-6: `BlockStatement` → `{}`
243. **Mutant #242** - Line 328:22-66: `StringLiteral` → ````
244. **Mutant #243** - Line 329:21-38: `StringLiteral` → `""`
245. **Mutant #244** - Line 330:15-6: `BlockStatement` → `{}`
246. **Mutant #245** - Line 331:27-32: `BooleanLiteral` → `true`
247. **Mutant #246** - Line 332:25-30: `BooleanLiteral` → `true`
248. **Mutant #247** - Line 333:33-51: `StringLiteral` → `""`
249. **Mutant #248** - Line 334:30-35: `BooleanLiteral` → `true`
250. **Mutant #249** - Line 335:25-30: `BooleanLiteral` → `true`
251. **Mutant #250** - Line 344:22-4: `BlockStatement` → `{}`
252. **Mutant #251** - Line 345:52-69: `StringLiteral` → `""`
253. **Mutant #252** - Line 346:50-65: `StringLiteral` → `""`
254. **Mutant #253** - Line 349:37-45: `StringLiteral` → `""`
255. **Mutant #254** - Line 351:22-6: `BlockStatement` → `{}`
256. **Mutant #255** - Line 352:36-44: `StringLiteral` → `""`
257. **Mutant #256** - Line 358:27-45: `StringLiteral` → `""`
258. **Mutant #257** - Line 358:53-2: `BlockStatement` → `{}`

---

### 🔴 src/audio.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 0.0% | **Coverage**: 0.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 0 | 0.0% |
| ❌ Survived | 0 | 0.0% |
| 🚫 No Coverage | 95 | 100.0% |
| **Total** | **95** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| export class AudioModule extends EventTarget {
  2|   constructor() {
   🚫 #258: BlockStatement → "{}" [0 tests]
  3|     super();
  4|     this.audioContext = null;
  5|     this.workletNode = null;
  6|     this.isInitialized = false;
   🚫 #259: BooleanLiteral → "true" [0 tests]
  7|     this.isPaused = false;
   🚫 #260: BooleanLiteral → "true" [0 tests]
  8|     this.queue = [];
   🚫 #261: ArrayDeclaration → "["Stryker was here"]" [0 tests]
  9|   }
 10| 
 11|   async initialize() {
   🚫 #262: BlockStatement → "{}" [0 tests]
 12|     if (this.isInitialized) return;
   🚫 #263: ConditionalExpression → "true" [0 tests]
   🚫 #264: ConditionalExpression → "false" [0 tests]
 13| 
 14|     try {
   🚫 #265: BlockStatement → "{}" [0 tests]
 15|       // Create AudioContext with appropriate sample rate for TTS
 16|       this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
   🚫 #266: ConditionalExpression → "true" [0 tests]
   🚫 #267: ConditionalExpression → "false" [0 tests]
   🚫 #268: LogicalOperator → "window.AudioContext && window.webkitAudioContext" [0 tests]
   🚫 #269: ObjectLiteral → "{}" [0 tests]
 17|         sampleRate: 24000
 18|       });
 19| 
 20|       // Load and register the AudioWorklet processor
 21|       await this.audioContext.audioWorklet.addModule('./src/worklet.js');
   🚫 #270: StringLiteral → """" [0 tests]
 22| 
 23|       // Create the worklet node
 24|       this.workletNode = new AudioWorkletNode(this.audioContext, 'pcm-queue-processor');
   🚫 #271: StringLiteral → """" [0 tests]
 25| 
 26|       // Connect to speakers
 27|       this.workletNode.connect(this.audioContext.destination);
 28| 
 29|       // Set up message handling
 30|       this.workletNode.port.onmessage = (event) => {
   🚫 #272: BlockStatement → "{}" [0 tests]
 31|         const { type, data } = event.data;
 32|         
 33|         switch (type) {
 34|           case 'next_chunk':
   🚫 #273: ConditionalExpression → "case 'next_chunk':" [0 tests]
   🚫 #274: StringLiteral → """" [0 tests]
 35|             this.dispatchEvent(new CustomEvent('next_chunk', { detail: data }));
   🚫 #275: StringLiteral → """" [0 tests]
   🚫 #276: ObjectLiteral → "{}" [0 tests]
 36|             break;
 37|           case 'chunk-complete':
   🚫 #277: ConditionalExpression → "case 'chunk-complete':" [0 tests]
   🚫 #278: StringLiteral → """" [0 tests]
 38|             this.dispatchEvent(new CustomEvent('chunk-complete', { detail: data }));
   🚫 #279: StringLiteral → """" [0 tests]
   🚫 #280: ObjectLiteral → "{}" [0 tests]
 39|             break;
 40|           case 'playback_ended':
   🚫 #281: ConditionalExpression → "case 'playback_ended':" [0 tests]
   🚫 #282: StringLiteral → """" [0 tests]
 41|             this.dispatchEvent(new CustomEvent('playback_ended'));
   🚫 #283: StringLiteral → """" [0 tests]
 42|             break;
 43|           case 'buffer-underrun':
   🚫 #284: ConditionalExpression → "case 'buffer-underrun':" [0 tests]
   🚫 #285: StringLiteral → """" [0 tests]
 44|             this.dispatchEvent(new CustomEvent('buffer-underrun'));
   🚫 #286: StringLiteral → """" [0 tests]
 45|             break;
 46|         }
 47|       };
 48| 
 49|       this.isInitialized = true;
   🚫 #287: BooleanLiteral → "false" [0 tests]
 50| 
 51|     } catch (error) {
   🚫 #288: BlockStatement → "{}" [0 tests]
 52|       console.error('Failed to initialize AudioModule:', error);
   🚫 #289: StringLiteral → """" [0 tests]
 53|       throw new Error(`Audio initialization failed: ${error.message}`);
   🚫 #290: StringLiteral → "``" [0 tests]
 54|     }
 55|   }
 56| 
 57|   get port() {
   🚫 #291: BlockStatement → "{}" [0 tests]
 58|     return this.workletNode?.port;
   🚫 #292: OptionalChaining → "this.workletNode.port" [0 tests]
 59|   }
 60| 
 61|   async resumeAudioContext() {
   🚫 #293: BlockStatement → "{}" [0 tests]
 62|     if (this.audioContext && this.audioContext.state === 'suspended') {
   🚫 #294: ConditionalExpression → "true" [0 tests]
   🚫 #295: ConditionalExpression → "false" [0 tests]
   🚫 #296: LogicalOperator → "this.audioContext || this.audioContext.state === 'suspended'" [0 tests]
   🚫 #297: ConditionalExpression → "true" [0 tests]
   🚫 #298: EqualityOperator → "this.audioContext.state !== 'suspended'" [0 tests]
   🚫 #299: StringLiteral → """" [0 tests]
   🚫 #300: BlockStatement → "{}" [0 tests]
 63|       await this.audioContext.resume();
 64|     }
 65|   }
 66| 
 67|   async queueAudio(audioData, metadata = {}) {
   🚫 #301: BlockStatement → "{}" [0 tests]
 68|     await this.initialize();
 69|     await this.resumeAudioContext();
 70| 
 71|     if (this.isPaused) {
   🚫 #302: ConditionalExpression → "true" [0 tests]
   🚫 #303: ConditionalExpression → "false" [0 tests]
   🚫 #304: BlockStatement → "{}" [0 tests]
 72|       // Queue for later playback
 73|       this.queue.push({ audioData, metadata });
   🚫 #305: ObjectLiteral → "{}" [0 tests]
 74|       return;
 75|     }
 76| 
 77|     this.workletNode.port.postMessage({
   🚫 #306: ObjectLiteral → "{}" [0 tests]
 78|       type: 'queue-audio',
   🚫 #307: StringLiteral → """" [0 tests]
 79|       audioData: audioData,
 80|       metadata: metadata
 81|     });
 82|   }
 83| 
 84|   async pause() {
   🚫 #308: BlockStatement → "{}" [0 tests]
 85|     this.isPaused = true;
   🚫 #309: BooleanLiteral → "false" [0 tests]
 86|     
 87|     if (this.workletNode) {
   🚫 #310: ConditionalExpression → "true" [0 tests]
   🚫 #311: ConditionalExpression → "false" [0 tests]
   🚫 #312: BlockStatement → "{}" [0 tests]
 88|       this.workletNode.port.postMessage({
   🚫 #313: ObjectLiteral → "{}" [0 tests]
 89|         type: 'pause'
   🚫 #314: StringLiteral → """" [0 tests]
 90|       });
 91|     }
 92|   }
 93| 
 94|   async resume() {
   🚫 #315: BlockStatement → "{}" [0 tests]
 95|     if (!this.isPaused) return;
   🚫 #316: BooleanLiteral → "this.isPaused" [0 tests]
   🚫 #317: ConditionalExpression → "true" [0 tests]
   🚫 #318: ConditionalExpression → "false" [0 tests]
 96|     
 97|     this.isPaused = false;
   🚫 #319: BooleanLiteral → "true" [0 tests]
 98|     await this.resumeAudioContext();
 99| 
100|     // Process any queued audio
101|     while (this.queue.length > 0) {
   🚫 #320: ConditionalExpression → "false" [0 tests]
   🚫 #321: EqualityOperator → "this.queue.length >= 0" [0 tests]
   🚫 #322: EqualityOperator → "this.queue.length <= 0" [0 tests]
   🚫 #323: BlockStatement → "{}" [0 tests]
102|       const { audioData, metadata } = this.queue.shift();
103|       this.workletNode.port.postMessage({
   🚫 #324: ObjectLiteral → "{}" [0 tests]
104|         type: 'queue-audio',
   🚫 #325: StringLiteral → """" [0 tests]
105|         audioData: audioData,
106|         metadata: metadata
107|       });
108|     }
109| 
110|     if (this.workletNode) {
   🚫 #326: ConditionalExpression → "true" [0 tests]
   🚫 #327: ConditionalExpression → "false" [0 tests]
   🚫 #328: BlockStatement → "{}" [0 tests]
111|       this.workletNode.port.postMessage({
   🚫 #329: ObjectLiteral → "{}" [0 tests]
112|         type: 'resume'
   🚫 #330: StringLiteral → """" [0 tests]
113|       });
114|     }
115|   }
116| 
117|   stop() {
   🚫 #331: BlockStatement → "{}" [0 tests]
118|     this.isPaused = false;
   🚫 #332: BooleanLiteral → "true" [0 tests]
119|     this.queue = [];
   🚫 #333: ArrayDeclaration → "["Stryker was here"]" [0 tests]
120|     
121|     if (this.workletNode) {
   🚫 #334: ConditionalExpression → "true" [0 tests]
   🚫 #335: ConditionalExpression → "false" [0 tests]
   🚫 #336: BlockStatement → "{}" [0 tests]
122|       this.workletNode.port.postMessage({
   🚫 #337: ObjectLiteral → "{}" [0 tests]
123|         type: 'stop'
   🚫 #338: StringLiteral → """" [0 tests]
124|       });
125|     }
126|   }
127| 
128|   getBufferStatus() {
   🚫 #339: BlockStatement → "{}" [0 tests]
129|     if (!this.workletNode) return { length: 0, duration: 0 };
   🚫 #340: BooleanLiteral → "this.workletNode" [0 tests]
   🚫 #341: ConditionalExpression → "true" [0 tests]
   🚫 #342: ConditionalExpression → "false" [0 tests]
   🚫 #343: ObjectLiteral → "{}" [0 tests]
130|     
131|     // This would require the worklet to report back buffer status
132|     // For now, return a placeholder
133|     return { length: 0, duration: 0 };
   🚫 #344: ObjectLiteral → "{}" [0 tests]
134|   }
135| 
136|   destroy() {
   🚫 #345: BlockStatement → "{}" [0 tests]
137|     this.stop();
138|     
139|     if (this.workletNode) {
   🚫 #346: ConditionalExpression → "true" [0 tests]
   🚫 #347: ConditionalExpression → "false" [0 tests]
   🚫 #348: BlockStatement → "{}" [0 tests]
140|       this.workletNode.disconnect();
141|       this.workletNode = null;
142|     }
143|     
144|     if (this.audioContext) {
   🚫 #349: ConditionalExpression → "true" [0 tests]
   🚫 #350: ConditionalExpression → "false" [0 tests]
   🚫 #351: BlockStatement → "{}" [0 tests]
145|       this.audioContext.close();
146|       this.audioContext = null;
147|     }
148|     
149|     this.isInitialized = false;
   🚫 #352: BooleanLiteral → "true" [0 tests]
150|   }
151| }
152| 
```

#### 🚫 Coverage Gaps Summary

- **95 uncovered mutants** across 59 lines
- **Most affected lines**: 2, 6, 7, 8, 11
- **Common uncovered operations**: ConditionalExpression, BlockStatement, StringLiteral

##### Detailed No Coverage Mutants:
1. **Mutant #258** - Line 2:17-4: `BlockStatement` → `{}`
2. **Mutant #259** - Line 6:26-31: `BooleanLiteral` → `true`
3. **Mutant #260** - Line 7:21-26: `BooleanLiteral` → `true`
4. **Mutant #261** - Line 8:18-20: `ArrayDeclaration` → `["Stryker was here"]`
5. **Mutant #262** - Line 11:22-4: `BlockStatement` → `{}`
6. **Mutant #263** - Line 12:9-27: `ConditionalExpression` → `true`
7. **Mutant #264** - Line 12:9-27: `ConditionalExpression` → `false`
8. **Mutant #265** - Line 14:9-6: `BlockStatement` → `{}`
9. **Mutant #266** - Line 16:32-80: `ConditionalExpression` → `true`
10. **Mutant #267** - Line 16:32-80: `ConditionalExpression` → `false`
11. **Mutant #268** - Line 16:32-80: `LogicalOperator` → `window.AudioContext && window.webkitAudioContext`
12. **Mutant #269** - Line 16:82-8: `ObjectLiteral` → `{}`
13. **Mutant #270** - Line 21:54-72: `StringLiteral` → `""`
14. **Mutant #271** - Line 24:66-87: `StringLiteral` → `""`
15. **Mutant #272** - Line 30:52-8: `BlockStatement` → `{}`
16. **Mutant #273** - Line 34:11-19: `ConditionalExpression` → `case 'next_chunk':`
17. **Mutant #274** - Line 34:16-28: `StringLiteral` → `""`
18. **Mutant #275** - Line 35:48-60: `StringLiteral` → `""`
19. **Mutant #276** - Line 35:62-78: `ObjectLiteral` → `{}`
20. **Mutant #277** - Line 37:11-19: `ConditionalExpression` → `case 'chunk-complete':`
21. **Mutant #278** - Line 37:16-32: `StringLiteral` → `""`
22. **Mutant #279** - Line 38:48-64: `StringLiteral` → `""`
23. **Mutant #280** - Line 38:66-82: `ObjectLiteral` → `{}`
24. **Mutant #281** - Line 40:11-19: `ConditionalExpression` → `case 'playback_ended':`
25. **Mutant #282** - Line 40:16-32: `StringLiteral` → `""`
26. **Mutant #283** - Line 41:48-64: `StringLiteral` → `""`
27. **Mutant #284** - Line 43:11-19: `ConditionalExpression` → `case 'buffer-underrun':`
28. **Mutant #285** - Line 43:16-33: `StringLiteral` → `""`
29. **Mutant #286** - Line 44:48-65: `StringLiteral` → `""`
30. **Mutant #287** - Line 49:28-32: `BooleanLiteral` → `false`
31. **Mutant #288** - Line 51:21-6: `BlockStatement` → `{}`
32. **Mutant #289** - Line 52:21-56: `StringLiteral` → `""`
33. **Mutant #290** - Line 53:23-70: `StringLiteral` → ````
34. **Mutant #291** - Line 57:14-4: `BlockStatement` → `{}`
35. **Mutant #292** - Line 58:12-34: `OptionalChaining` → `this.workletNode.port`
36. **Mutant #293** - Line 61:30-4: `BlockStatement` → `{}`
37. **Mutant #294** - Line 62:9-69: `ConditionalExpression` → `true`
38. **Mutant #295** - Line 62:9-69: `ConditionalExpression` → `false`
39. **Mutant #296** - Line 62:9-69: `LogicalOperator` → `this.audioContext || this.audioContext.state === 'suspended'`
40. **Mutant #297** - Line 62:30-69: `ConditionalExpression` → `true`
41. **Mutant #298** - Line 62:30-69: `EqualityOperator` → `this.audioContext.state !== 'suspended'`
42. **Mutant #299** - Line 62:58-69: `StringLiteral` → `""`
43. **Mutant #300** - Line 62:71-6: `BlockStatement` → `{}`
44. **Mutant #301** - Line 67:46-4: `BlockStatement` → `{}`
45. **Mutant #302** - Line 71:9-22: `ConditionalExpression` → `true`
46. **Mutant #303** - Line 71:9-22: `ConditionalExpression` → `false`
47. **Mutant #304** - Line 71:24-6: `BlockStatement` → `{}`
48. **Mutant #305** - Line 73:23-46: `ObjectLiteral` → `{}`
49. **Mutant #306** - Line 77:39-6: `ObjectLiteral` → `{}`
50. **Mutant #307** - Line 78:13-26: `StringLiteral` → `""`
51. **Mutant #308** - Line 84:17-4: `BlockStatement` → `{}`
52. **Mutant #309** - Line 85:21-25: `BooleanLiteral` → `false`
53. **Mutant #310** - Line 87:9-25: `ConditionalExpression` → `true`
54. **Mutant #311** - Line 87:9-25: `ConditionalExpression` → `false`
55. **Mutant #312** - Line 87:27-6: `BlockStatement` → `{}`
56. **Mutant #313** - Line 88:41-8: `ObjectLiteral` → `{}`
57. **Mutant #314** - Line 89:15-22: `StringLiteral` → `""`
58. **Mutant #315** - Line 94:18-4: `BlockStatement` → `{}`
59. **Mutant #316** - Line 95:9-23: `BooleanLiteral` → `this.isPaused`
60. **Mutant #317** - Line 95:9-23: `ConditionalExpression` → `true`
61. **Mutant #318** - Line 95:9-23: `ConditionalExpression` → `false`
62. **Mutant #319** - Line 97:21-26: `BooleanLiteral` → `true`
63. **Mutant #320** - Line 101:12-33: `ConditionalExpression` → `false`
64. **Mutant #321** - Line 101:12-33: `EqualityOperator` → `this.queue.length >= 0`
65. **Mutant #322** - Line 101:12-33: `EqualityOperator` → `this.queue.length <= 0`
66. **Mutant #323** - Line 101:35-6: `BlockStatement` → `{}`
67. **Mutant #324** - Line 103:41-8: `ObjectLiteral` → `{}`
68. **Mutant #325** - Line 104:15-28: `StringLiteral` → `""`
69. **Mutant #326** - Line 110:9-25: `ConditionalExpression` → `true`
70. **Mutant #327** - Line 110:9-25: `ConditionalExpression` → `false`
71. **Mutant #328** - Line 110:27-6: `BlockStatement` → `{}`
72. **Mutant #329** - Line 111:41-8: `ObjectLiteral` → `{}`
73. **Mutant #330** - Line 112:15-23: `StringLiteral` → `""`
74. **Mutant #331** - Line 117:10-4: `BlockStatement` → `{}`
75. **Mutant #332** - Line 118:21-26: `BooleanLiteral` → `true`
76. **Mutant #333** - Line 119:18-20: `ArrayDeclaration` → `["Stryker was here"]`
77. **Mutant #334** - Line 121:9-25: `ConditionalExpression` → `true`
78. **Mutant #335** - Line 121:9-25: `ConditionalExpression` → `false`
79. **Mutant #336** - Line 121:27-6: `BlockStatement` → `{}`
80. **Mutant #337** - Line 122:41-8: `ObjectLiteral` → `{}`
81. **Mutant #338** - Line 123:15-21: `StringLiteral` → `""`
82. **Mutant #339** - Line 128:21-4: `BlockStatement` → `{}`
83. **Mutant #340** - Line 129:9-26: `BooleanLiteral` → `this.workletNode`
84. **Mutant #341** - Line 129:9-26: `ConditionalExpression` → `true`
85. **Mutant #342** - Line 129:9-26: `ConditionalExpression` → `false`
86. **Mutant #343** - Line 129:35-61: `ObjectLiteral` → `{}`
87. **Mutant #344** - Line 133:12-38: `ObjectLiteral` → `{}`
88. **Mutant #345** - Line 136:13-4: `BlockStatement` → `{}`
89. **Mutant #346** - Line 139:9-25: `ConditionalExpression` → `true`
90. **Mutant #347** - Line 139:9-25: `ConditionalExpression` → `false`
91. **Mutant #348** - Line 139:27-6: `BlockStatement` → `{}`
92. **Mutant #349** - Line 144:9-26: `ConditionalExpression` → `true`
93. **Mutant #350** - Line 144:9-26: `ConditionalExpression` → `false`
94. **Mutant #351** - Line 144:28-6: `BlockStatement` → `{}`
95. **Mutant #352** - Line 149:26-31: `BooleanLiteral` → `true`

---

### 🔴 src/index.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 50.0% | **Coverage**: 88.9%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 4 | 44.4% |
| ❌ Survived | 4 | 44.4% |
| 🚫 No Coverage | 1 | 11.1% |
| **Total** | **9** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Configuration constants for the Local LLM Demo
  2| export const CONFIG = {
   ✅ #393: ObjectLiteral → "{}" [0 tests]
  3|   LLM_MODEL_ID: 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX',
   ❌ #394: StringLiteral → """" [0 tests]
  4|   TTS_MODEL_ID: 'onnx-community/Kokoro-82M-v1.0-ONNX',
   ❌ #395: StringLiteral → """" [0 tests]
  5|   SAMPLE_RATE: 24000,
  6|   MAX_NEW_TOKENS: 256,
  7|   TEMPERATURE: 0.8,
  8|   TOP_P: 0.95
  9| };
 10| 
 11| import { splitIntoSentences, formatPromptForInstruction } from './utils/text-processing.js';
 12| 
 13| export { splitIntoSentences, formatPromptForInstruction };
 14| 
 15| export function detectWebGPUSupport() {
   ✅ #396: BlockStatement → "{}" [2 tests]
 16|   return 'gpu' in navigator;
   ❌ #397: StringLiteral → """" [2 tests]
 17| }
 18| 
 19| export function getOptimalDevice() {
   ✅ #398: BlockStatement → "{}" [1 tests]
 20|   return detectWebGPUSupport() ? 'webgpu' : 'wasm';
   🚫 #399: StringLiteral → """" [0 tests]
   ✅ #400: StringLiteral → """" [1 tests]
 21| }
 22| 
 23| console.log("Local LLM Demo initialized");
   ❌ #401: StringLiteral → """" [0 tests]
 24| 
```

#### ❌ Critical Survived Mutants (First 4)

1. **Mutant #397** - Line 16:10-15
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 86, 87

2. **Mutant #394** - Line 3:17-60
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 

3. **Mutant #395** - Line 4:17-54
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 

4. **Mutant #401** - Line 23:13-41
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 

#### 🚫 Coverage Gaps Summary

- **1 uncovered mutants** across 1 lines
- **Most affected lines**: 20
- **Common uncovered operations**: StringLiteral

##### Detailed No Coverage Mutants:
1. **Mutant #399** - Line 20:34-42: `StringLiteral` → `""`

#### ✅ Successfully Killed Mutants Summary

- **4 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 87 (killed 2 mutants)
- **Top mutator types killed**: BlockStatement, StringLiteral, ObjectLiteral

---

### 🔴 src/llm.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 0.0% | **Coverage**: 0.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 0 | 0.0% |
| ❌ Survived | 0 | 0.0% |
| 🚫 No Coverage | 147 | 100.0% |
| **Total** | **147** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Configuration
  2| const LLM_MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX';
   🚫 #402: StringLiteral → """" [0 tests]
  3| 
  4| export class LLMModule {
  5|   constructor() {
   🚫 #403: BlockStatement → "{}" [0 tests]
  6|     this.pipeline = null;
  7|     this.device = null;
  8|     this.isLoading = false;
   🚫 #404: BooleanLiteral → "true" [0 tests]
  9|     this.setupEnvironment();
 10|   }
 11| 
 12|   setupEnvironment() {
   🚫 #405: BlockStatement → "{}" [0 tests]
 13|     // Configure Transformers.js environment
 14|     if (typeof window !== 'undefined' && window.transformers) {
   🚫 #406: ConditionalExpression → "true" [0 tests]
   🚫 #407: ConditionalExpression → "false" [0 tests]
   🚫 #408: LogicalOperator → "typeof window !== 'undefined' || window.transformers" [0 tests]
   🚫 #409: ConditionalExpression → "true" [0 tests]
   🚫 #410: EqualityOperator → "typeof window === 'undefined'" [0 tests]
   🚫 #411: StringLiteral → """" [0 tests]
   🚫 #412: BlockStatement → "{}" [0 tests]
 15|       const { env } = window.transformers;
 16|       
 17|       // Enable browser caching for offline use
 18|       env.useBrowserCache = true;
   🚫 #413: BooleanLiteral → "false" [0 tests]
 19|       
 20|       // Allow local models when serving from local server
 21|       env.allowRemoteModels = true;
   🚫 #414: BooleanLiteral → "false" [0 tests]
 22|       env.allowLocalModels = true;
   🚫 #415: BooleanLiteral → "false" [0 tests]
 23|       
 24|       // Optimize ONNX WASM performance
 25|       env.backends.onnx.wasm.numThreads = navigator.hardwareConcurrency || 4;
   🚫 #416: ConditionalExpression → "true" [0 tests]
   🚫 #417: ConditionalExpression → "false" [0 tests]
   🚫 #418: LogicalOperator → "navigator.hardwareConcurrency && 4" [0 tests]
 26|     }
 27|   }
 28| 
 29|   async detectDevice() {
   🚫 #419: BlockStatement → "{}" [0 tests]
 30|     // Check WebGPU availability
 31|     if (navigator.gpu) {
   🚫 #420: ConditionalExpression → "true" [0 tests]
   🚫 #421: ConditionalExpression → "false" [0 tests]
   🚫 #422: BlockStatement → "{}" [0 tests]
 32|       try {
   🚫 #423: BlockStatement → "{}" [0 tests]
 33|         const adapter = await navigator.gpu.requestAdapter();
 34|         if (adapter) {
   🚫 #424: ConditionalExpression → "true" [0 tests]
   🚫 #425: ConditionalExpression → "false" [0 tests]
   🚫 #426: BlockStatement → "{}" [0 tests]
 35|           return 'webgpu';
   🚫 #427: StringLiteral → """" [0 tests]
 36|         }
 37|       } catch {
   🚫 #428: BlockStatement → "{}" [0 tests]
 38|         console.warn('WebGPU adapter request failed');
   🚫 #429: StringLiteral → """" [0 tests]
 39|       }
 40|     }
 41|     return 'wasm';
   🚫 #430: StringLiteral → """" [0 tests]
 42|   }
 43| 
 44|   async initializePipeline(onProgress) {
   🚫 #431: BlockStatement → "{}" [0 tests]
 45|     if (this.pipeline) return this.pipeline;
   🚫 #432: ConditionalExpression → "true" [0 tests]
   🚫 #433: ConditionalExpression → "false" [0 tests]
 46|     if (this.isLoading) {
   🚫 #434: ConditionalExpression → "true" [0 tests]
   🚫 #435: ConditionalExpression → "false" [0 tests]
   🚫 #436: BlockStatement → "{}" [0 tests]
 47|       // Wait for current loading to complete
 48|       while (this.isLoading) {
   🚫 #437: ConditionalExpression → "false" [0 tests]
   🚫 #438: BlockStatement → "{}" [0 tests]
 49|         await new Promise(resolve => setTimeout(resolve, 100));
   🚫 #439: ArrowFunction → "() => undefined" [0 tests]
 50|       }
 51|       return this.pipeline;
 52|     }
 53| 
 54|     this.isLoading = true;
   🚫 #440: BooleanLiteral → "false" [0 tests]
 55| 
 56|     try {
   🚫 #441: BlockStatement → "{}" [0 tests]
 57|       // Dynamically import Transformers.js
 58|       let transformers;
 59|       try {
   🚫 #442: BlockStatement → "{}" [0 tests]
 60|         // Try to load from CDN
 61|         transformers = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js');
   🚫 #443: StringLiteral → """" [0 tests]
 62|       } catch {
   🚫 #444: BlockStatement → "{}" [0 tests]
 63|         // Fallback error handling
 64|         throw new Error('Failed to load Transformers.js library');
   🚫 #445: StringLiteral → """" [0 tests]
 65|       }
 66| 
 67|       const { pipeline, env } = transformers;
 68|       
 69|       // Configure environment
 70|       env.useBrowserCache = true;
   🚫 #446: BooleanLiteral → "false" [0 tests]
 71|       env.allowRemoteModels = true;
   🚫 #447: BooleanLiteral → "false" [0 tests]
 72|       env.allowLocalModels = true;
   🚫 #448: BooleanLiteral → "false" [0 tests]
 73|       env.backends.onnx.wasm.numThreads = navigator.hardwareConcurrency || 4;
   🚫 #449: ConditionalExpression → "true" [0 tests]
   🚫 #450: ConditionalExpression → "false" [0 tests]
   🚫 #451: LogicalOperator → "navigator.hardwareConcurrency && 4" [0 tests]
 74| 
 75|       // Detect device
 76|       this.device = await this.detectDevice();
 77|       
 78|       // Create pipeline with progress callback
 79|       onProgress?.({ percentage: 0, text: 'Initializing pipeline...' });
   🚫 #452: OptionalChaining → "onProgress({
  percentage: 0,
  text: 'Initializing pipeline...'
})" [0 tests]
   🚫 #453: ObjectLiteral → "{}" [0 tests]
   🚫 #454: StringLiteral → """" [0 tests]
 80|       
 81|       this.pipeline = await pipeline('text-generation', LLM_MODEL_ID, {
   🚫 #455: StringLiteral → """" [0 tests]
   🚫 #456: ObjectLiteral → "{}" [0 tests]
 82|         device: this.device,
 83|         progress_callback: (progress) => {
   🚫 #457: BlockStatement → "{}" [0 tests]
 84|           const percentage = Math.round((progress.loaded / progress.total) * 100);
   🚫 #458: ArithmeticOperator → "progress.loaded / progress.total / 100" [0 tests]
   🚫 #459: ArithmeticOperator → "progress.loaded * progress.total" [0 tests]
 85|           onProgress?.({ 
   🚫 #460: OptionalChaining → "onProgress({
  percentage,
  text: `Loading ${progress.file || 'model'}: ${percentage}%`
})" [0 tests]
   🚫 #461: ObjectLiteral → "{}" [0 tests]
 86|             percentage, 
 87|             text: `Loading ${progress.file || 'model'}: ${percentage}%` 
   🚫 #462: StringLiteral → "``" [0 tests]
   🚫 #463: ConditionalExpression → "true" [0 tests]
   🚫 #464: ConditionalExpression → "false" [0 tests]
   🚫 #465: LogicalOperator → "progress.file && 'model'" [0 tests]
   🚫 #466: StringLiteral → """" [0 tests]
 88|           });
 89|         }
 90|       });
 91| 
 92|       onProgress?.({ percentage: 100, text: 'Model loaded successfully' });
   🚫 #467: OptionalChaining → "onProgress({
  percentage: 100,
  text: 'Model loaded successfully'
})" [0 tests]
   🚫 #468: ObjectLiteral → "{}" [0 tests]
   🚫 #469: StringLiteral → """" [0 tests]
 93|       return this.pipeline;
 94| 
 95|     } catch (error) {
   🚫 #470: BlockStatement → "{}" [0 tests]
 96|       console.error('Failed to initialize LLM pipeline:', error);
   🚫 #471: StringLiteral → """" [0 tests]
 97|       throw new Error(`Failed to load LLM model: ${error.message}`);
   🚫 #472: StringLiteral → "``" [0 tests]
 98|     } finally {
   🚫 #473: BlockStatement → "{}" [0 tests]
 99|       this.isLoading = false;
   🚫 #474: BooleanLiteral → "true" [0 tests]
100|     }
101|   }
102| 
103|   async generate(prompt, options = {}) {
   🚫 #475: BlockStatement → "{}" [0 tests]
104|     const {
105|       onToken,
106|       onProgress,
107|       maxNewTokens = 256,
108|       temperature = 0.8,
109|       topP = 0.95,
110|       doSample = true
   🚫 #476: BooleanLiteral → "false" [0 tests]
111|     } = options;
112| 
113|     try {
   🚫 #477: BlockStatement → "{}" [0 tests]
114|       // Ensure pipeline is initialized
115|       const pipeline = await this.initializePipeline(onProgress);
116| 
117|       // Format prompt for instruction-tuned model
118|       const formattedPrompt = this.formatPrompt(prompt);
119| 
120|       // Generate with streaming-enabled pipeline
121|       const generator = await pipeline(formattedPrompt, {
   🚫 #478: ObjectLiteral → "{}" [0 tests]
122|         max_new_tokens: maxNewTokens,
123|         temperature: temperature,
124|         top_p: topP,
125|         do_sample: doSample,
126|         return_full_text: false,
   🚫 #479: BooleanLiteral → "true" [0 tests]
127|         streamer_callback: onToken
128|       });
129| 
130|       // Delegate handling to helpers for clarity (streaming vs non-streaming)
131|       if (generator && typeof generator[Symbol.asyncIterator] === 'function') {
   🚫 #480: ConditionalExpression → "true" [0 tests]
   🚫 #481: ConditionalExpression → "false" [0 tests]
   🚫 #482: LogicalOperator → "generator || typeof generator[Symbol.asyncIterator] === 'function'" [0 tests]
   🚫 #483: ConditionalExpression → "true" [0 tests]
   🚫 #484: EqualityOperator → "typeof generator[Symbol.asyncIterator] !== 'function'" [0 tests]
   🚫 #485: StringLiteral → """" [0 tests]
   🚫 #486: BlockStatement → "{}" [0 tests]
132|         return await this._handleStreamingGenerator(generator, onToken);
133|       }
134| 
135|       return await this._handleNonStreamingResult(generator, onToken);
136| 
137|     } catch (error) {
   🚫 #487: BlockStatement → "{}" [0 tests]
138|       console.error('Generation failed:', error);
   🚫 #488: StringLiteral → """" [0 tests]
139|       throw new Error(`Text generation failed: ${error.message}`);
   🚫 #489: StringLiteral → "``" [0 tests]
140|     }
141|   }
142| 
143|   async _handleStreamingGenerator(generator, onToken) {
   🚫 #490: BlockStatement → "{}" [0 tests]
144|     let fullText = '';
   🚫 #491: StringLiteral → ""Stryker was here!"" [0 tests]
145|     for await (const chunk of generator) {
   🚫 #492: BlockStatement → "{}" [0 tests]
146|       const token = this.extractToken(chunk);
147|       if (token) {
   🚫 #493: ConditionalExpression → "true" [0 tests]
   🚫 #494: ConditionalExpression → "false" [0 tests]
   🚫 #495: BlockStatement → "{}" [0 tests]
148|         fullText += token;
   🚫 #496: AssignmentOperator → "fullText -= token" [0 tests]
149|         onToken?.(token);
   🚫 #497: OptionalChaining → "onToken(token)" [0 tests]
150|       }
151|     }
152|     return fullText;
153|   }
154| 
155|   async _handleNonStreamingResult(generator, onToken) {
   🚫 #498: BlockStatement → "{}" [0 tests]
156|     const result = Array.isArray(generator) ? generator[0] : generator;
157|     const text = result?.generated_text || result?.text || '';
   🚫 #499: ConditionalExpression → "true" [0 tests]
   🚫 #500: ConditionalExpression → "false" [0 tests]
   🚫 #501: LogicalOperator → "(result?.generated_text || result?.text) && ''" [0 tests]
   🚫 #502: ConditionalExpression → "false" [0 tests]
   🚫 #503: LogicalOperator → "result?.generated_text && result?.text" [0 tests]
   🚫 #504: OptionalChaining → "result.generated_text" [0 tests]
   🚫 #505: OptionalChaining → "result.text" [0 tests]
   🚫 #506: StringLiteral → ""Stryker was here!"" [0 tests]
158| 
159|     // Simulate streaming for consistency
160|     if (onToken && text) {
   🚫 #507: ConditionalExpression → "true" [0 tests]
   🚫 #508: ConditionalExpression → "false" [0 tests]
   🚫 #509: LogicalOperator → "onToken || text" [0 tests]
   🚫 #510: BlockStatement → "{}" [0 tests]
161|       const tokens = this.tokenizeForDisplay(text);
162|       for (const token of tokens) {
   🚫 #511: BlockStatement → "{}" [0 tests]
163|         onToken(token);
164|         await new Promise(resolve => setTimeout(resolve, 50));
   🚫 #512: ArrowFunction → "() => undefined" [0 tests]
165|       }
166|     }
167| 
168|     return text;
169|   }
170| 
171|   formatPrompt(prompt) {
   🚫 #513: BlockStatement → "{}" [0 tests]
172|     // Format for instruction-tuned models (Qwen2.5 format)
173|     return `<|im_start|>system
   🚫 #514: StringLiteral → "``" [0 tests]
174| You are a helpful assistant.<|im_end|>
175| <|im_start|>user
176| ${prompt}<|im_end|>
177| <|im_start|>assistant
178| `;
179|   }
180| 
181|   extractToken(chunk) {
   🚫 #515: BlockStatement → "{}" [0 tests]
182|     // Extract token from different possible chunk formats
183|     if (typeof chunk === 'string') {
   🚫 #516: ConditionalExpression → "true" [0 tests]
   🚫 #517: ConditionalExpression → "false" [0 tests]
   🚫 #518: EqualityOperator → "typeof chunk !== 'string'" [0 tests]
   🚫 #519: StringLiteral → """" [0 tests]
   🚫 #520: BlockStatement → "{}" [0 tests]
184|       return chunk;
185|     }
186|     if (chunk && chunk.token) {
   🚫 #521: ConditionalExpression → "true" [0 tests]
   🚫 #522: ConditionalExpression → "false" [0 tests]
   🚫 #523: LogicalOperator → "chunk || chunk.token" [0 tests]
   🚫 #524: BlockStatement → "{}" [0 tests]
187|       return chunk.token.text || chunk.token;
   🚫 #525: ConditionalExpression → "true" [0 tests]
   🚫 #526: ConditionalExpression → "false" [0 tests]
   🚫 #527: LogicalOperator → "chunk.token.text && chunk.token" [0 tests]
188|     }
189|     if (chunk && chunk.generated_text) {
   🚫 #528: ConditionalExpression → "true" [0 tests]
   🚫 #529: ConditionalExpression → "false" [0 tests]
   🚫 #530: LogicalOperator → "chunk || chunk.generated_text" [0 tests]
   🚫 #531: BlockStatement → "{}" [0 tests]
190|       return chunk.generated_text;
191|     }
192|     return '';
   🚫 #532: StringLiteral → ""Stryker was here!"" [0 tests]
193|   }
194| 
195|   tokenizeForDisplay(text) {
   🚫 #533: BlockStatement → "{}" [0 tests]
196|     // Simple tokenization for display purposes
197|     // In a real implementation, this could use the model's actual tokenizer
198|     const words = text.split(/(\s+)/);
   🚫 #534: Regex → "/(\s)/" [0 tests]
   🚫 #535: Regex → "/(\S+)/" [0 tests]
199|     const tokens = [];
   🚫 #536: ArrayDeclaration → "["Stryker was here"]" [0 tests]
200|     
201|     for (const word of words) {
   🚫 #537: BlockStatement → "{}" [0 tests]
202|       if (word.length > 0) {
   🚫 #538: ConditionalExpression → "true" [0 tests]
   🚫 #539: ConditionalExpression → "false" [0 tests]
   🚫 #540: EqualityOperator → "word.length >= 0" [0 tests]
   🚫 #541: EqualityOperator → "word.length <= 0" [0 tests]
   🚫 #542: BlockStatement → "{}" [0 tests]
203|         tokens.push(word);
204|       }
205|     }
206|     
207|     return tokens;
208|   }
209| 
210|   getDevice() {
   🚫 #543: BlockStatement → "{}" [0 tests]
211|     return this.device;
212|   }
213| 
214|   getModelId() {
   🚫 #544: BlockStatement → "{}" [0 tests]
215|     return LLM_MODEL_ID;
216|   }
217| 
218|   isInitialized() {
   🚫 #545: BlockStatement → "{}" [0 tests]
219|     return this.pipeline !== null;
   🚫 #546: ConditionalExpression → "true" [0 tests]
   🚫 #547: ConditionalExpression → "false" [0 tests]
   🚫 #548: EqualityOperator → "this.pipeline === null" [0 tests]
220|   }
221| }
222| 
```

#### 🚫 Coverage Gaps Summary

- **147 uncovered mutants** across 81 lines
- **Most affected lines**: 2, 5, 8, 12, 14
- **Common uncovered operations**: ConditionalExpression, BlockStatement, StringLiteral

##### Detailed No Coverage Mutants:
1. **Mutant #402** - Line 2:22-65: `StringLiteral` → `""`
2. **Mutant #403** - Line 5:17-4: `BlockStatement` → `{}`
3. **Mutant #404** - Line 8:22-27: `BooleanLiteral` → `true`
4. **Mutant #405** - Line 12:22-4: `BlockStatement` → `{}`
5. **Mutant #406** - Line 14:9-61: `ConditionalExpression` → `true`
6. **Mutant #407** - Line 14:9-61: `ConditionalExpression` → `false`
7. **Mutant #408** - Line 14:9-61: `LogicalOperator` → `typeof window !== 'undefined' || window.transformers`
8. **Mutant #409** - Line 14:9-38: `ConditionalExpression` → `true`
9. **Mutant #410** - Line 14:9-38: `EqualityOperator` → `typeof window === 'undefined'`
10. **Mutant #411** - Line 14:27-38: `StringLiteral` → `""`
11. **Mutant #412** - Line 14:63-6: `BlockStatement` → `{}`
12. **Mutant #413** - Line 18:29-33: `BooleanLiteral` → `false`
13. **Mutant #414** - Line 21:31-35: `BooleanLiteral` → `false`
14. **Mutant #415** - Line 22:30-34: `BooleanLiteral` → `false`
15. **Mutant #416** - Line 25:43-77: `ConditionalExpression` → `true`
16. **Mutant #417** - Line 25:43-77: `ConditionalExpression` → `false`
17. **Mutant #418** - Line 25:43-77: `LogicalOperator` → `navigator.hardwareConcurrency && 4`
18. **Mutant #419** - Line 29:24-4: `BlockStatement` → `{}`
19. **Mutant #420** - Line 31:9-22: `ConditionalExpression` → `true`
20. **Mutant #421** - Line 31:9-22: `ConditionalExpression` → `false`
21. **Mutant #422** - Line 31:24-6: `BlockStatement` → `{}`
22. **Mutant #423** - Line 32:11-8: `BlockStatement` → `{}`
23. **Mutant #424** - Line 34:13-20: `ConditionalExpression` → `true`
24. **Mutant #425** - Line 34:13-20: `ConditionalExpression` → `false`
25. **Mutant #426** - Line 34:22-10: `BlockStatement` → `{}`
26. **Mutant #427** - Line 35:18-26: `StringLiteral` → `""`
27. **Mutant #428** - Line 37:15-8: `BlockStatement` → `{}`
28. **Mutant #429** - Line 38:22-53: `StringLiteral` → `""`
29. **Mutant #430** - Line 41:12-18: `StringLiteral` → `""`
30. **Mutant #431** - Line 44:40-4: `BlockStatement` → `{}`
31. **Mutant #432** - Line 45:9-22: `ConditionalExpression` → `true`
32. **Mutant #433** - Line 45:9-22: `ConditionalExpression` → `false`
33. **Mutant #434** - Line 46:9-23: `ConditionalExpression` → `true`
34. **Mutant #435** - Line 46:9-23: `ConditionalExpression` → `false`
35. **Mutant #436** - Line 46:25-6: `BlockStatement` → `{}`
36. **Mutant #437** - Line 48:14-28: `ConditionalExpression` → `false`
37. **Mutant #438** - Line 48:30-8: `BlockStatement` → `{}`
38. **Mutant #439** - Line 49:27-62: `ArrowFunction` → `() => undefined`
39. **Mutant #440** - Line 54:22-26: `BooleanLiteral` → `false`
40. **Mutant #441** - Line 56:9-6: `BlockStatement` → `{}`
41. **Mutant #442** - Line 59:11-8: `BlockStatement` → `{}`
42. **Mutant #443** - Line 61:37-120: `StringLiteral` → `""`
43. **Mutant #444** - Line 62:15-8: `BlockStatement` → `{}`
44. **Mutant #445** - Line 64:25-65: `StringLiteral` → `""`
45. **Mutant #446** - Line 70:29-33: `BooleanLiteral` → `false`
46. **Mutant #447** - Line 71:31-35: `BooleanLiteral` → `false`
47. **Mutant #448** - Line 72:30-34: `BooleanLiteral` → `false`
48. **Mutant #449** - Line 73:43-77: `ConditionalExpression` → `true`
49. **Mutant #450** - Line 73:43-77: `ConditionalExpression` → `false`
50. **Mutant #451** - Line 73:43-77: `LogicalOperator` → `navigator.hardwareConcurrency && 4`
51. **Mutant #452** - Line 79:7-72: `OptionalChaining` → `onProgress({
  percentage: 0,
  text: 'Initializing pipeline...'
})`
52. **Mutant #453** - Line 79:20-71: `ObjectLiteral` → `{}`
53. **Mutant #454** - Line 79:43-69: `StringLiteral` → `""`
54. **Mutant #455** - Line 81:38-55: `StringLiteral` → `""`
55. **Mutant #456** - Line 81:71-8: `ObjectLiteral` → `{}`
56. **Mutant #457** - Line 83:42-10: `BlockStatement` → `{}`
57. **Mutant #458** - Line 84:41-81: `ArithmeticOperator` → `progress.loaded / progress.total / 100`
58. **Mutant #459** - Line 84:42-74: `ArithmeticOperator` → `progress.loaded * progress.total`
59. **Mutant #460** - Line 85:11-13: `OptionalChaining` → `onProgress({
  percentage,
  text: `Loading ${progress.file || 'model'}: ${percentage}%`
})`
60. **Mutant #461** - Line 85:24-12: `ObjectLiteral` → `{}`
61. **Mutant #462** - Line 87:19-72: `StringLiteral` → ````
62. **Mutant #463** - Line 87:30-54: `ConditionalExpression` → `true`
63. **Mutant #464** - Line 87:30-54: `ConditionalExpression` → `false`
64. **Mutant #465** - Line 87:30-54: `LogicalOperator` → `progress.file && 'model'`
65. **Mutant #466** - Line 87:47-54: `StringLiteral` → `""`
66. **Mutant #467** - Line 92:7-75: `OptionalChaining` → `onProgress({
  percentage: 100,
  text: 'Model loaded successfully'
})`
67. **Mutant #468** - Line 92:20-74: `ObjectLiteral` → `{}`
68. **Mutant #469** - Line 92:45-72: `StringLiteral` → `""`
69. **Mutant #470** - Line 95:21-6: `BlockStatement` → `{}`
70. **Mutant #471** - Line 96:21-57: `StringLiteral` → `""`
71. **Mutant #472** - Line 97:23-67: `StringLiteral` → ````
72. **Mutant #473** - Line 98:15-6: `BlockStatement` → `{}`
73. **Mutant #474** - Line 99:24-29: `BooleanLiteral` → `true`
74. **Mutant #475** - Line 103:40-4: `BlockStatement` → `{}`
75. **Mutant #476** - Line 110:18-22: `BooleanLiteral` → `false`
76. **Mutant #477** - Line 113:9-6: `BlockStatement` → `{}`
77. **Mutant #478** - Line 121:57-8: `ObjectLiteral` → `{}`
78. **Mutant #479** - Line 126:27-32: `BooleanLiteral` → `true`
79. **Mutant #480** - Line 131:11-77: `ConditionalExpression` → `true`
80. **Mutant #481** - Line 131:11-77: `ConditionalExpression` → `false`
81. **Mutant #482** - Line 131:11-77: `LogicalOperator` → `generator || typeof generator[Symbol.asyncIterator] === 'function'`
82. **Mutant #483** - Line 131:24-77: `ConditionalExpression` → `true`
83. **Mutant #484** - Line 131:24-77: `EqualityOperator` → `typeof generator[Symbol.asyncIterator] !== 'function'`
84. **Mutant #485** - Line 131:67-77: `StringLiteral` → `""`
85. **Mutant #486** - Line 131:79-8: `BlockStatement` → `{}`
86. **Mutant #487** - Line 137:21-6: `BlockStatement` → `{}`
87. **Mutant #488** - Line 138:21-41: `StringLiteral` → `""`
88. **Mutant #489** - Line 139:23-65: `StringLiteral` → ````
89. **Mutant #490** - Line 143:55-4: `BlockStatement` → `{}`
90. **Mutant #491** - Line 144:20-22: `StringLiteral` → `"Stryker was here!"`
91. **Mutant #492** - Line 145:42-6: `BlockStatement` → `{}`
92. **Mutant #493** - Line 147:11-16: `ConditionalExpression` → `true`
93. **Mutant #494** - Line 147:11-16: `ConditionalExpression` → `false`
94. **Mutant #495** - Line 147:18-8: `BlockStatement` → `{}`
95. **Mutant #496** - Line 148:9-26: `AssignmentOperator` → `fullText -= token`
96. **Mutant #497** - Line 149:9-25: `OptionalChaining` → `onToken(token)`
97. **Mutant #498** - Line 155:55-4: `BlockStatement` → `{}`
98. **Mutant #499** - Line 157:18-62: `ConditionalExpression` → `true`
99. **Mutant #500** - Line 157:18-62: `ConditionalExpression` → `false`
100. **Mutant #501** - Line 157:18-62: `LogicalOperator` → `(result?.generated_text || result?.text) && ''`
101. **Mutant #502** - Line 157:18-56: `ConditionalExpression` → `false`
102. **Mutant #503** - Line 157:18-56: `LogicalOperator` → `result?.generated_text && result?.text`
103. **Mutant #504** - Line 157:18-40: `OptionalChaining` → `result.generated_text`
104. **Mutant #505** - Line 157:44-56: `OptionalChaining` → `result.text`
105. **Mutant #506** - Line 157:60-62: `StringLiteral` → `"Stryker was here!"`
106. **Mutant #507** - Line 160:9-24: `ConditionalExpression` → `true`
107. **Mutant #508** - Line 160:9-24: `ConditionalExpression` → `false`
108. **Mutant #509** - Line 160:9-24: `LogicalOperator` → `onToken || text`
109. **Mutant #510** - Line 160:26-6: `BlockStatement` → `{}`
110. **Mutant #511** - Line 162:35-8: `BlockStatement` → `{}`
111. **Mutant #512** - Line 164:27-61: `ArrowFunction` → `() => undefined`
112. **Mutant #513** - Line 171:24-4: `BlockStatement` → `{}`
113. **Mutant #514** - Line 173:12-2: `StringLiteral` → ````
114. **Mutant #515** - Line 181:23-4: `BlockStatement` → `{}`
115. **Mutant #516** - Line 183:9-34: `ConditionalExpression` → `true`
116. **Mutant #517** - Line 183:9-34: `ConditionalExpression` → `false`
117. **Mutant #518** - Line 183:9-34: `EqualityOperator` → `typeof chunk !== 'string'`
118. **Mutant #519** - Line 183:26-34: `StringLiteral` → `""`
119. **Mutant #520** - Line 183:36-6: `BlockStatement` → `{}`
120. **Mutant #521** - Line 186:9-29: `ConditionalExpression` → `true`
121. **Mutant #522** - Line 186:9-29: `ConditionalExpression` → `false`
122. **Mutant #523** - Line 186:9-29: `LogicalOperator` → `chunk || chunk.token`
123. **Mutant #524** - Line 186:31-6: `BlockStatement` → `{}`
124. **Mutant #525** - Line 187:14-45: `ConditionalExpression` → `true`
125. **Mutant #526** - Line 187:14-45: `ConditionalExpression` → `false`
126. **Mutant #527** - Line 187:14-45: `LogicalOperator` → `chunk.token.text && chunk.token`
127. **Mutant #528** - Line 189:9-38: `ConditionalExpression` → `true`
128. **Mutant #529** - Line 189:9-38: `ConditionalExpression` → `false`
129. **Mutant #530** - Line 189:9-38: `LogicalOperator` → `chunk || chunk.generated_text`
130. **Mutant #531** - Line 189:40-6: `BlockStatement` → `{}`
131. **Mutant #532** - Line 192:12-14: `StringLiteral` → `"Stryker was here!"`
132. **Mutant #533** - Line 195:28-4: `BlockStatement` → `{}`
133. **Mutant #534** - Line 198:30-37: `Regex` → `/(\s)/`
134. **Mutant #535** - Line 198:30-37: `Regex` → `/(\S+)/`
135. **Mutant #536** - Line 199:20-22: `ArrayDeclaration` → `["Stryker was here"]`
136. **Mutant #537** - Line 201:31-6: `BlockStatement` → `{}`
137. **Mutant #538** - Line 202:11-26: `ConditionalExpression` → `true`
138. **Mutant #539** - Line 202:11-26: `ConditionalExpression` → `false`
139. **Mutant #540** - Line 202:11-26: `EqualityOperator` → `word.length >= 0`
140. **Mutant #541** - Line 202:11-26: `EqualityOperator` → `word.length <= 0`
141. **Mutant #542** - Line 202:28-8: `BlockStatement` → `{}`
142. **Mutant #543** - Line 210:15-4: `BlockStatement` → `{}`
143. **Mutant #544** - Line 214:16-4: `BlockStatement` → `{}`
144. **Mutant #545** - Line 218:19-4: `BlockStatement` → `{}`
145. **Mutant #546** - Line 219:12-34: `ConditionalExpression` → `true`
146. **Mutant #547** - Line 219:12-34: `ConditionalExpression` → `false`
147. **Mutant #548** - Line 219:12-34: `EqualityOperator` → `this.pipeline === null`

---

### 🔴 src/tts.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 54.8% | **Coverage**: 82.2%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 205 | 45.1% |
| ❌ Survived | 154 | 33.8% |
| 🚫 No Coverage | 81 | 17.8% |
| **Total** | **455** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Configuration
  2| const FALLBACK_TO_WEB_SPEECH = true;
   ✅ #549: BooleanLiteral → "false" [0 tests]
  3| 
  4| export class TTSModule {
  5|   constructor() {
   ✅ #550: BlockStatement → "{}" [45 tests]
  6|     this.kokoroModel = null;
  7|     this.useWebSpeech = false;
   ✅ #551: BooleanLiteral → "true" [45 tests]
  8|     this.isLoading = false;
   ⚠️ #552: BooleanLiteral → "true" [45 tests]
  9|     this.currentUtterance = null;
 10|     this.currentSplitter = null;
 11|     this.sentences = [];
   ❌ #553: ArrayDeclaration → "["Stryker was here"]" [45 tests]
 12|     this.currentSentenceIndex = 0;
 13|     this.isPaused = false;
   ⚠️ #554: BooleanLiteral → "true" [45 tests]
 14|     this.isStopped = false;
   ✅ #555: BooleanLiteral → "true" [45 tests]
 15|     
 16|     // Settings
 17|     this.rate = 1.0;
 18|     this.pitch = 1.0;
 19|     this.selectedVoice = null;
 20|     
 21|     this.initializeWebSpeech();
 22|   }
 23| 
 24|   initializeWebSpeech() {
   ❌ #556: BlockStatement → "{}" [45 tests]
 25|     if ('speechSynthesis' in window && speechSynthesis) {
   ✅ #557: ConditionalExpression → "true" [45 tests]
   ❌ #558: ConditionalExpression → "false" [45 tests]
   ❌ #559: LogicalOperator → "'speechSynthesis' in window || speechSynthesis" [45 tests]
   ❌ #560: StringLiteral → """" [45 tests]
   ❌ #561: BlockStatement → "{}" [45 tests]
 26|       // Load voices
 27|       this.loadVoices();
 28|       
 29|       // Handle voice changes
 30|       speechSynthesis.addEventListener('voiceschanged', () => {
   🚫 #563: BlockStatement → "{}" [0 tests]
   ❌ #562: StringLiteral → """" [45 tests]
 31|         this.loadVoices();
 32|       });
 33|     }
 34|   }
 35| 
 36|   loadVoices() {
   ✅ #564: BlockStatement → "{}" [45 tests]
 37|     if (!('speechSynthesis' in window) || !speechSynthesis) return;
   ✅ #565: ConditionalExpression → "true" [45 tests]
   ✅ #566: ConditionalExpression → "false" [45 tests]
   ❌ #567: LogicalOperator → "!('speechSynthesis' in window) && !speechSynthesis" [45 tests]
   ✅ #568: BooleanLiteral → "'speechSynthesis' in window" [45 tests]
   ✅ #569: StringLiteral → """" [45 tests]
   ✅ #570: BooleanLiteral → "speechSynthesis" [45 tests]
 38|     
 39|     const voices = speechSynthesis.getVoices();
 40|     const voiceSelect = (typeof document !== 'undefined' && typeof document.getElementById === 'function')
   ✅ #571: ConditionalExpression → "true" [45 tests]
   ✅ #572: ConditionalExpression → "false" [45 tests]
   ✅ #573: LogicalOperator → "typeof document !== 'undefined' || typeof document.getElementById === 'function'" [45 tests]
   ✅ #574: ConditionalExpression → "true" [45 tests]
   ✅ #575: EqualityOperator → "typeof document === 'undefined'" [45 tests]
   ✅ #576: StringLiteral → """" [45 tests]
   ❌ #577: ConditionalExpression → "true" [44 tests]
   ✅ #578: EqualityOperator → "typeof document.getElementById !== 'function'" [44 tests]
   ✅ #579: StringLiteral → """" [44 tests]
 41|       ? document.getElementById('tts-voice')
   ❌ #580: StringLiteral → """" [44 tests]
 42|       : null;
 43| 
 44|     if (voiceSelect && voices.length > 0) {
   ✅ #581: ConditionalExpression → "true" [45 tests]
   ✅ #583: LogicalOperator → "voiceSelect || voices.length > 0" [45 tests]
   ✅ #582: ConditionalExpression → "false" [45 tests]
   ❌ #584: ConditionalExpression → "true" [36 tests]
   ❌ #585: EqualityOperator → "voices.length >= 0" [36 tests]
   ✅ #586: EqualityOperator → "voices.length <= 0" [36 tests]
   ✅ #587: BlockStatement → "{}" [36 tests]
 45|       // Best-effort: only set innerHTML if supported
 46|       if (typeof voiceSelect.innerHTML === 'string') {
   ❌ #588: ConditionalExpression → "true" [36 tests]
   ❌ #589: ConditionalExpression → "false" [36 tests]
   ❌ #590: EqualityOperator → "typeof voiceSelect.innerHTML !== 'string'" [36 tests]
   ❌ #591: StringLiteral → """" [36 tests]
   ❌ #592: BlockStatement → "{}" [35 tests]
 47|         voiceSelect.innerHTML = '';
   ❌ #593: StringLiteral → ""Stryker was here!"" [35 tests]
 48|       }
 49| 
 50|       voices.forEach((voice, index) => {
   ✅ #594: BlockStatement → "{}" [36 tests]
 51|         const option = (typeof document !== 'undefined' && typeof document.createElement === 'function')
   ❌ #595: ConditionalExpression → "true" [36 tests]
   ❌ #596: ConditionalExpression → "false" [36 tests]
   ❌ #597: LogicalOperator → "typeof document !== 'undefined' || typeof document.createElement === 'function'" [36 tests]
   ❌ #598: ConditionalExpression → "true" [36 tests]
   ❌ #599: EqualityOperator → "typeof document === 'undefined'" [36 tests]
   ❌ #600: StringLiteral → """" [36 tests]
   ❌ #601: ConditionalExpression → "true" [36 tests]
   ❌ #602: EqualityOperator → "typeof document.createElement !== 'function'" [36 tests]
   ❌ #603: StringLiteral → """" [36 tests]
 52|           ? document.createElement('option')
   ❌ #604: StringLiteral → """" [36 tests]
 53|           : { value: '', textContent: '', selected: false };
   🚫 #605: ObjectLiteral → "{}" [0 tests]
   🚫 #606: StringLiteral → ""Stryker was here!"" [0 tests]
   🚫 #607: StringLiteral → ""Stryker was here!"" [0 tests]
   🚫 #608: BooleanLiteral → "true" [0 tests]
 54| 
 55|         option.value = index;
 56|         option.textContent = `${voice.name} (${voice.lang})`;
   ❌ #609: StringLiteral → "``" [36 tests]
 57|         if (voice.default) {
   ✅ #610: ConditionalExpression → "true" [36 tests]
   ❌ #612: BlockStatement → "{}" [2 tests]
   ❌ #611: ConditionalExpression → "false" [36 tests]
 58|           option.selected = true;
   ❌ #613: BooleanLiteral → "false" [2 tests]
 59|           this.selectedVoice = voice;
 60|         }
 61| 
 62|         // Append option in a safe manner depending on what's available on the mocked element
 63|         if (typeof voiceSelect.appendChild === 'function') {
   ✅ #614: ConditionalExpression → "true" [36 tests]
   ✅ #616: EqualityOperator → "typeof voiceSelect.appendChild !== 'function'" [36 tests]
   ✅ #615: ConditionalExpression → "false" [36 tests]
   ✅ #618: BlockStatement → "{}" [27 tests]
   ✅ #617: StringLiteral → """" [36 tests]
 64|           voiceSelect.appendChild(option);
 65|         } else if (typeof voiceSelect.append === 'function') {
   🚫 #623: BlockStatement → "{}" [0 tests]
   ✅ #619: ConditionalExpression → "true" [9 tests]
   ❌ #620: ConditionalExpression → "false" [9 tests]
   ✅ #621: EqualityOperator → "typeof voiceSelect.append !== 'function'" [9 tests]
   ❌ #622: StringLiteral → """" [9 tests]
 66|           try { voiceSelect.append(option); } catch { /* ignore */ }
   🚫 #624: BlockStatement → "{}" [0 tests]
 67|         } else {
   ✅ #625: BlockStatement → "{}" [9 tests]
 68|           // If append isn't available, store options array so tests can inspect if needed
 69|           voiceSelect.options = voiceSelect.options || [];
   ✅ #626: ConditionalExpression → "true" [9 tests]
   ✅ #627: ConditionalExpression → "false" [9 tests]
   ✅ #628: LogicalOperator → "voiceSelect.options && []" [9 tests]
   ✅ #629: ArrayDeclaration → "["Stryker was here"]" [2 tests]
 70|           voiceSelect.options.push(option);
 71|         }
 72|       });
 73| 
 74|       if (!this.selectedVoice && voices.length > 0) {
   ❌ #630: ConditionalExpression → "true" [36 tests]
   ✅ #631: ConditionalExpression → "false" [36 tests]
   ❌ #632: LogicalOperator → "!this.selectedVoice || voices.length > 0" [36 tests]
   ✅ #633: BooleanLiteral → "this.selectedVoice" [36 tests]
   ❌ #634: ConditionalExpression → "true" [34 tests]
   ❌ #635: EqualityOperator → "voices.length >= 0" [34 tests]
   ✅ #636: EqualityOperator → "voices.length <= 0" [34 tests]
   ✅ #637: BlockStatement → "{}" [34 tests]
 75|         this.selectedVoice = voices[0];
 76|       }
 77|     }
 78|   }
 79| 
 80|   async initializeKokoro(onProgress) {
   ✅ #638: BlockStatement → "{}" [8 tests]
 81|     if (this.kokoroModel) return this.kokoroModel;
   ✅ #639: ConditionalExpression → "true" [8 tests]
   ❌ #640: ConditionalExpression → "false" [8 tests]
 82|     if (this.isLoading) {
   ✅ #642: ConditionalExpression → "false" [8 tests]
   ✅ #641: ConditionalExpression → "true" [8 tests]
   ✅ #643: BlockStatement → "{}" [1 tests]
 83|       return await this._waitForLoading();
 84|     }
 85| 
 86|     this.isLoading = true;
   ❌ #644: BooleanLiteral → "false" [7 tests]
 87| 
 88|     try {
   ✅ #645: BlockStatement → "{}" [7 tests]
 89|       return await this._loadKokoroModel(onProgress);
 90|     } catch (error) {
   ✅ #646: BlockStatement → "{}" [4 tests]
 91|       return this._handleKokoroLoadError(error, onProgress);
 92|     } finally {
   ✅ #647: BlockStatement → "{}" [7 tests]
 93|       this.isLoading = false;
   ✅ #648: BooleanLiteral → "true" [7 tests]
 94|     }
 95|   }
 96| 
 97|   async _waitForLoading() {
   ✅ #649: BlockStatement → "{}" [1 tests]
 98|     while (this.isLoading) {
   ✅ #650: ConditionalExpression → "false" [1 tests]
   ⚠️ #651: BlockStatement → "{}" [1 tests]
 99|       await new Promise(resolve => setTimeout(resolve, 100));
   ✅ #652: ArrowFunction → "() => undefined" [1 tests]
100|     }
101|     return this.kokoroModel;
102|   }
103| 
104|   async _loadKokoroModel(onProgress) {
   ✅ #653: BlockStatement → "{}" [7 tests]
105|     onProgress?.({ percentage: 0, text: 'Loading Kokoro TTS model...' });
   ✅ #654: OptionalChaining → "onProgress({
  percentage: 0,
  text: 'Loading Kokoro TTS model...'
})" [7 tests]
   ✅ #655: ObjectLiteral → "{}" [3 tests]
   ✅ #656: StringLiteral → """" [3 tests]
106|     
107|     // Check for WebGPU availability first
108|     if (!navigator.gpu) {
   ✅ #657: BooleanLiteral → "navigator.gpu" [7 tests]
   ✅ #658: ConditionalExpression → "true" [7 tests]
   ❌ #659: ConditionalExpression → "false" [7 tests]
   ❌ #660: BlockStatement → "{}" [4 tests]
109|       throw new Error('WebGPU not available');
   ❌ #661: StringLiteral → """" [4 tests]
110|     }
111| 
112|     // Try to load Kokoro model
113|     const { KokoroTTS } = await import('kokoro-js');
   ✅ #662: StringLiteral → """" [4 tests]
114|     
115|     this.kokoroModel = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
   ❌ #663: StringLiteral → """" [4 tests]
   ✅ #664: ObjectLiteral → "{}" [4 tests]
116|       dtype: "fp32",
   ❌ #665: StringLiteral → """" [4 tests]
117|       device: "webgpu",
   ❌ #666: StringLiteral → """" [4 tests]
118|       progress_callback: (item) => {
   ✅ #667: BlockStatement → "{}" [1 tests]
119|         if (item.status === "progress" && item.file?.endsWith?.("onnx")) {
   ❌ #668: ConditionalExpression → "true" [1 tests]
   ✅ #669: ConditionalExpression → "false" [1 tests]
   ❌ #670: LogicalOperator → "item.status === "progress" || item.file?.endsWith?.("onnx")" [1 tests]
   ❌ #671: ConditionalExpression → "true" [1 tests]
   ✅ #672: EqualityOperator → "item.status !== "progress"" [1 tests]
   ✅ #673: StringLiteral → """" [1 tests]
   ✅ #674: MethodExpression → "item.file?.startsWith?.("onnx")" [1 tests]
   ❌ #675: OptionalChaining → "item.file?.endsWith("onnx")" [1 tests]
   ❌ #676: OptionalChaining → "item.file.endsWith" [1 tests]
   ❌ #677: StringLiteral → """" [1 tests]
   ✅ #678: BlockStatement → "{}" [1 tests]
120|           const progress = Math.round(item.progress * 100);
   ✅ #679: ArithmeticOperator → "item.progress / 100" [1 tests]
121|           onProgress?.({ percentage: progress, text: `Loading Kokoro model: ${progress}%` });
   ❌ #680: OptionalChaining → "onProgress({
  percentage: progress,
  text: `Loading Kokoro model: ${progress}%`
})" [1 tests]
   ✅ #681: ObjectLiteral → "{}" [1 tests]
   ✅ #682: StringLiteral → "``" [1 tests]
122|         }
123|       },
124|     });
125| 
126|     onProgress?.({ percentage: 100, text: 'Kokoro TTS loaded successfully' });
   ✅ #683: OptionalChaining → "onProgress({
  percentage: 100,
  text: 'Kokoro TTS loaded successfully'
})" [4 tests]
   ✅ #684: ObjectLiteral → "{}" [2 tests]
   ✅ #685: StringLiteral → """" [2 tests]
127|     this.useWebSpeech = false;
   ✅ #686: BooleanLiteral → "true" [4 tests]
128|     return this.kokoroModel;
129|   }
130| 
131|   _handleKokoroLoadError(error, onProgress) {
   ✅ #687: BlockStatement → "{}" [4 tests]
132|     console.warn('Kokoro TTS not available, falling back to Web Speech API:', error);
   ❌ #688: StringLiteral → """" [4 tests]
133| 
134|     if (FALLBACK_TO_WEB_SPEECH && 'speechSynthesis' in window) {
   ✅ #689: ConditionalExpression → "true" [4 tests]
   ✅ #690: ConditionalExpression → "false" [4 tests]
   ✅ #691: LogicalOperator → "FALLBACK_TO_WEB_SPEECH || 'speechSynthesis' in window" [4 tests]
   ✅ #692: StringLiteral → """" [4 tests]
   ✅ #693: BlockStatement → "{}" [3 tests]
135|       this.useWebSpeech = true;
   ✅ #694: BooleanLiteral → "false" [3 tests]
136|       onProgress?.({ percentage: 100, text: 'Using Web Speech API' });
   ✅ #695: OptionalChaining → "onProgress({
  percentage: 100,
  text: 'Using Web Speech API'
})" [3 tests]
   ✅ #696: ObjectLiteral → "{}" [1 tests]
   ✅ #697: StringLiteral → """" [1 tests]
137|       return 'web-speech';
   ✅ #698: StringLiteral → """" [3 tests]
138|     } else {
   ✅ #699: BlockStatement → "{}" [1 tests]
139|       throw new Error('No TTS system available');
   ✅ #700: StringLiteral → """" [1 tests]
140|     }
141|   }
142| 
143|   async _simulateModelLoad(onProgress) {
   🚫 #701: BlockStatement → "{}" [0 tests]
144|     for (let i = 0; i <= 100; i += 10) {
   🚫 #702: ConditionalExpression → "false" [0 tests]
   🚫 #703: EqualityOperator → "i < 100" [0 tests]
   🚫 #704: EqualityOperator → "i > 100" [0 tests]
   🚫 #705: AssignmentOperator → "i -= 10" [0 tests]
   🚫 #706: BlockStatement → "{}" [0 tests]
145|       onProgress?.({ percentage: i, text: `Loading Kokoro model: ${i}%` });
   🚫 #707: OptionalChaining → "onProgress({
  percentage: i,
  text: `Loading Kokoro model: ${i}%`
})" [0 tests]
   🚫 #708: ObjectLiteral → "{}" [0 tests]
   🚫 #709: StringLiteral → "``" [0 tests]
146|       await new Promise(resolve => setTimeout(resolve, 100));
   🚫 #710: ArrowFunction → "() => undefined" [0 tests]
147|     }
148|   }
149| 
150|   splitIntoSentences(text) {
   ✅ #711: BlockStatement → "{}" [6 tests]
151|     // Simple sentence splitting
152|     return text
   ✅ #712: MethodExpression → "text.split(/[.!?]+/).map(s => s.trim())" [6 tests]
153|       .split(/[.!?]+/)
   ❌ #713: Regex → "/[.!?]/" [6 tests]
   ✅ #714: Regex → "/[^.!?]+/" [6 tests]
154|       .map(s => s.trim())
   ✅ #715: ArrowFunction → "() => undefined" [6 tests]
   ✅ #716: MethodExpression → "s" [6 tests]
155|       .filter(s => s.length > 0)
   ✅ #717: ArrowFunction → "() => undefined" [6 tests]
   ✅ #718: ConditionalExpression → "true" [6 tests]
   ✅ #719: ConditionalExpression → "false" [6 tests]
   ✅ #720: EqualityOperator → "s.length >= 0" [6 tests]
   ✅ #721: EqualityOperator → "s.length <= 0" [6 tests]
156|       .map(s => s + '.');
   ✅ #722: ArrowFunction → "() => undefined" [6 tests]
   ✅ #723: StringLiteral → """" [6 tests]
157|   }
158| 
159|   async speak(text, options = {}) {
   ✅ #724: BlockStatement → "{}" [2 tests]
160|     const { outputElement, onProgress, audioModule } = options;
161| 
162|     try {
   ✅ #725: BlockStatement → "{}" [2 tests]
163|       // Initialize TTS system
164|       await this.initializeKokoro(onProgress);
165|       
166|       // Split text into sentences
167|       this.sentences = this.splitIntoSentences(text);
168|       this.currentSentenceIndex = 0;
169|       this.isStopped = false;
   ❌ #726: BooleanLiteral → "true" [1 tests]
170|       this.isPaused = false;
   ❌ #727: BooleanLiteral → "true" [1 tests]
171| 
172|       // Display sentences in output element
173|       if (outputElement) {
   ❌ #728: ConditionalExpression → "true" [1 tests]
   ❌ #729: ConditionalExpression → "false" [1 tests]
   ❌ #730: BlockStatement → "{}" [1 tests]
174|         this.displaySentences(outputElement);
175|       }
176| 
177|       if (this.useWebSpeech) {
   ❌ #731: ConditionalExpression → "true" [1 tests]
   ✅ #732: ConditionalExpression → "false" [1 tests]
   ✅ #733: BlockStatement → "{}" [1 tests]
178|         await this.speakWithWebSpeech(outputElement);
179|       } else {
   🚫 #734: BlockStatement → "{}" [0 tests]
180|         await this.speakWithKokoro(audioModule, outputElement);
181|       }
182| 
183|     } catch (error) {
   ✅ #735: BlockStatement → "{}" [1 tests]
184|       console.error('TTS failed:', error);
   ❌ #736: StringLiteral → """" [1 tests]
185|       throw error;
186|     }
187|   }
188| 
189|   displaySentences(outputElement) {
   ✅ #737: BlockStatement → "{}" [4 tests]
190|     outputElement.innerHTML = '';
   ✅ #738: StringLiteral → ""Stryker was here!"" [4 tests]
191|     
192|     this.sentences.forEach((sentence, index) => {
   ✅ #739: BlockStatement → "{}" [4 tests]
193|       const span = document.createElement('span');
   ✅ #740: StringLiteral → """" [4 tests]
194|       span.textContent = sentence + ' ';
   ❌ #741: StringLiteral → """" [4 tests]
195|       span.id = `sentence-${index}`;
   ❌ #742: StringLiteral → "``" [4 tests]
196|       span.className = 'sentence';
   ❌ #743: StringLiteral → """" [4 tests]
197|       outputElement.appendChild(span);
198|     });
199|   }
200| 
201|   async speakWithWebSpeech(outputElement) {
   ⚠️ #744: BlockStatement → "{}" [7 tests]
202|     return new Promise((resolve, reject) => {
   ⚠️ #745: BlockStatement → "{}" [7 tests]
203|       let currentIndex = 0;
204| 
205|       const speakNext = () => {
   ⚠️ #746: BlockStatement → "{}" [7 tests]
206|         if (currentIndex >= this.sentences.length || this.isStopped) {
   ⚠️ #747: ConditionalExpression → "true" [7 tests]
   ✅ #749: LogicalOperator → "currentIndex >= this.sentences.length && this.isStopped" [7 tests]
   ⚠️ #748: ConditionalExpression → "false" [7 tests]
   ✅ #751: EqualityOperator → "currentIndex > this.sentences.length" [7 tests]
   ✅ #750: ConditionalExpression → "false" [7 tests]
   ⚠️ #752: EqualityOperator → "currentIndex < this.sentences.length" [7 tests]
   ⚠️ #753: BlockStatement → "{}" [4 tests]
207|           resolve();
208|           return;
209|         }
210| 
211|         if (this.isPaused) {
   ⚠️ #754: ConditionalExpression → "true" [6 tests]
   ✅ #756: BlockStatement → "{}" [1 tests]
   ✅ #755: ConditionalExpression → "false" [6 tests]
212|           // Wait for resume
213|           setTimeout(speakNext, 100);
214|           return;
215|         }
216| 
217|         const sentence = this.sentences[currentIndex];
218|         const utterance = new SpeechSynthesisUtterance(sentence);
219|         this.currentUtterance = utterance;
220| 
221|         // Configure utterance
222|         if (this.selectedVoice) {
   ❌ #757: ConditionalExpression → "true" [6 tests]
   ❌ #758: ConditionalExpression → "false" [6 tests]
   ❌ #759: BlockStatement → "{}" [6 tests]
223|           utterance.voice = this.selectedVoice;
224|         }
225|         utterance.rate = this.rate;
226|         utterance.pitch = this.pitch;
227| 
228|         utterance.onstart = () => {
   ❌ #760: BlockStatement → "{}" [1 tests]
229|           if (outputElement) {
   ❌ #761: ConditionalExpression → "true" [1 tests]
   ❌ #762: ConditionalExpression → "false" [1 tests]
   ❌ #763: BlockStatement → "{}" [1 tests]
230|             this.markSentenceSpoken(currentIndex);
231|           }
232|         };
233| 
234|         // Small safety timer in case the environment (or test mocks) do not
235|         // invoke the utterance callbacks. This prevents the promise from
236|         // hanging in test environments where speechSynthesis is a no-op.
237|         let safetyTimer = null;
238|         const clearSafety = () => {
   ✅ #764: BlockStatement → "{}" [6 tests]
239|           if (safetyTimer) {
   ❌ #765: ConditionalExpression → "true" [6 tests]
   ✅ #766: ConditionalExpression → "false" [6 tests]
   ✅ #767: BlockStatement → "{}" [5 tests]
240|             clearTimeout(safetyTimer);
241|             safetyTimer = null;
242|           }
243|         };
244| 
245|         utterance.onend = () => {
   ✅ #768: BlockStatement → "{}" [3 tests]
246|           clearSafety();
247|           currentIndex++;
   ✅ #769: UpdateOperator → "currentIndex--" [3 tests]
248|           setTimeout(speakNext, 100); // Small delay between sentences
249|         };
250| 
251|         // If onerror is called, also clear safety timer
252|         const originalOnError = utterance.onerror;
253|         utterance.onerror = (event) => {
   ✅ #770: BlockStatement → "{}" [2 tests]
254|           clearSafety();
255|           if (typeof originalOnError === 'function') {
   ❌ #771: ConditionalExpression → "true" [2 tests]
   ✅ #772: ConditionalExpression → "false" [2 tests]
   ✅ #773: EqualityOperator → "typeof originalOnError !== 'function'" [2 tests]
   ✅ #774: StringLiteral → """" [2 tests]
   ✅ #775: BlockStatement → "{}" [1 tests]
256|             try { originalOnError.call(utterance, event); } catch { /* ignore */ }
   ✅ #776: BlockStatement → "{}" [1 tests]
257|           }
258|           console.error('Speech synthesis error:', event);
   ❌ #777: StringLiteral → """" [2 tests]
259|           reject(new Error('Speech synthesis failed'));
   ✅ #778: StringLiteral → """" [2 tests]
260|         };
261| 
262|         // Start a safety timer to auto-advance if no events fire.
263|         safetyTimer = setTimeout(() => {
   ✅ #779: BlockStatement → "{}" [2 tests]
264|           safetyTimer = null;
265|           // Try to simulate onend to keep behavior consistent
266|           try {
   ✅ #780: BlockStatement → "{}" [2 tests]
267|             if (typeof utterance.onend === 'function') utterance.onend();
   ❌ #781: ConditionalExpression → "true" [2 tests]
   ✅ #782: ConditionalExpression → "false" [2 tests]
   ✅ #783: EqualityOperator → "typeof utterance.onend !== 'function'" [2 tests]
   ✅ #784: StringLiteral → """" [2 tests]
268|           } catch {
   🚫 #785: BlockStatement → "{}" [0 tests]
269|             // ignore
270|             currentIndex++;
   🚫 #786: UpdateOperator → "currentIndex--" [0 tests]
271|             setTimeout(speakNext, 100);
272|           }
273|         }, 250);
274| 
275|         // Finally, request speech. If speak throws, clear safety and reject.
276|         try {
   ✅ #787: BlockStatement → "{}" [6 tests]
277|           speechSynthesis.speak(utterance);
278|         } catch (e) {
   ❌ #788: BlockStatement → "{}" [1 tests]
279|           clearSafety();
280|           reject(e);
281|         }
282|       };
283| 
284|       speakNext();
285|     });
286|   }
287| 
288|   async speakWithKokoro(audioModule, outputElement) {
   ✅ #789: BlockStatement → "{}" [4 tests]
289|     // Import Kokoro TTS modules
290|     const { KokoroTTS, TextSplitterStream } = await import('kokoro-js');
   ✅ #790: StringLiteral → """" [4 tests]
291|     
292|     // 0) Guards
293|     if (!navigator.gpu) {
   🚫 #794: BlockStatement → "{}" [0 tests]
   ✅ #791: BooleanLiteral → "navigator.gpu" [4 tests]
   ✅ #792: ConditionalExpression → "true" [4 tests]
   ❌ #793: ConditionalExpression → "false" [4 tests]
294|       throw new Error("WebGPU is required for Kokoro TTS");
   🚫 #795: StringLiteral → """" [0 tests]
295|     }
296|     if (!audioModule?.port) {
   ✅ #796: BooleanLiteral → "audioModule?.port" [4 tests]
   ✅ #797: ConditionalExpression → "true" [4 tests]
   ✅ #798: ConditionalExpression → "false" [4 tests]
   ✅ #799: OptionalChaining → "audioModule.port" [4 tests]
   ✅ #800: BlockStatement → "{}" [1 tests]
297|       throw new Error("Audio worklet not initialized");
   ✅ #801: StringLiteral → """" [1 tests]
298|     }
299| 
300|     // 1) Load TTS model (cache instance in class to avoid reloading)
301|     if (!this.kokoroModel) {
   ❌ #802: BooleanLiteral → "this.kokoroModel" [3 tests]
   ❌ #803: ConditionalExpression → "true" [3 tests]
   ❌ #804: ConditionalExpression → "false" [3 tests]
   ❌ #805: BlockStatement → "{}" [1 tests]
302|       this.kokoroModel = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
   ❌ #806: StringLiteral → """" [1 tests]
   ❌ #807: ObjectLiteral → "{}" [1 tests]
303|         dtype: "fp32",
   ❌ #808: StringLiteral → """" [1 tests]
304|         device: "webgpu",
   ❌ #809: StringLiteral → """" [1 tests]
305|         progress_callback: (item) => {
   🚫 #810: BlockStatement → "{}" [0 tests]
306|           if (item.status === "progress" && item.file?.endsWith?.("onnx")) {
   🚫 #811: ConditionalExpression → "true" [0 tests]
   🚫 #812: ConditionalExpression → "false" [0 tests]
   🚫 #813: LogicalOperator → "item.status === "progress" || item.file?.endsWith?.("onnx")" [0 tests]
   🚫 #814: ConditionalExpression → "true" [0 tests]
   🚫 #815: EqualityOperator → "item.status !== "progress"" [0 tests]
   🚫 #816: StringLiteral → """" [0 tests]
   🚫 #817: MethodExpression → "item.file?.startsWith?.("onnx")" [0 tests]
   🚫 #818: OptionalChaining → "item.file?.endsWith("onnx")" [0 tests]
   🚫 #819: OptionalChaining → "item.file.endsWith" [0 tests]
   🚫 #820: StringLiteral → """" [0 tests]
   🚫 #821: BlockStatement → "{}" [0 tests]
307|             // Update progress for ONNX files only
308|             const progress = Math.round(item.progress * 100);
   🚫 #822: ArithmeticOperator → "item.progress / 100" [0 tests]
309|             console.log(`Loading Kokoro model: ${progress}%`);
   🚫 #823: StringLiteral → "``" [0 tests]
310|             // You can emit a progress event here if needed
311|           }
312|         },
313|       });
314|     }
315| 
316|     // 2) Get text content and prepare sentences
317|     const text = outputElement.textContent ?? "";
   🚫 #825: StringLiteral → ""Stryker was here!"" [0 tests]
   ✅ #824: LogicalOperator → "outputElement.textContent && """ [3 tests]
318|     if (!text.trim()) {
   ✅ #826: BooleanLiteral → "text.trim()" [3 tests]
   ✅ #827: ConditionalExpression → "true" [3 tests]
   ✅ #828: ConditionalExpression → "false" [3 tests]
   ✅ #830: BlockStatement → "{}" [1 tests]
   ✅ #829: MethodExpression → "text" [3 tests]
319|       throw new Error("No text content to speak");
   ✅ #831: StringLiteral → """" [1 tests]
320|     }
321| 
322|     // Split into sentences and render as spans for highlighting
323|     this.sentences = this.splitIntoSentences(text);
324|     this.displaySentences(outputElement);
325| 
326|     // 3) Initialize tracking variables
327|     this.pendingTexts = [];
   ❌ #832: ArrayDeclaration → "["Stryker was here"]" [2 tests]
328|     this.currentSentenceIndex = 0;
329|     this.isStopped = false;
   ✅ #833: BooleanLiteral → "true" [2 tests]
330|     this.isPaused = false;
   ❌ #834: BooleanLiteral → "true" [2 tests]
331| 
332|     // 4) Set up worklet message handler
333|     const originalHandler = audioModule.port.onmessage;
334|     const onWorkletMsg = (evt) => {
   🚫 #835: BlockStatement → "{}" [0 tests]
335|       const data = evt?.data;
   🚫 #836: OptionalChaining → "evt.data" [0 tests]
336|       if (!data || typeof data !== "object") return;
   🚫 #837: ConditionalExpression → "true" [0 tests]
   🚫 #838: ConditionalExpression → "false" [0 tests]
   🚫 #839: LogicalOperator → "!data && typeof data !== "object"" [0 tests]
   🚫 #840: BooleanLiteral → "data" [0 tests]
   🚫 #841: ConditionalExpression → "false" [0 tests]
   🚫 #842: EqualityOperator → "typeof data === "object"" [0 tests]
   🚫 #843: StringLiteral → """" [0 tests]
337|       
338|       if (data.type === "next_chunk") {
   🚫 #844: ConditionalExpression → "true" [0 tests]
   🚫 #845: ConditionalExpression → "false" [0 tests]
   🚫 #846: EqualityOperator → "data.type !== "next_chunk"" [0 tests]
   🚫 #847: StringLiteral → """" [0 tests]
   🚫 #848: BlockStatement → "{}" [0 tests]
339|         this.advanceHighlight();
340|       } else if (data.type === "playback_ended") {
   🚫 #849: ConditionalExpression → "true" [0 tests]
   🚫 #850: ConditionalExpression → "false" [0 tests]
   🚫 #851: EqualityOperator → "data.type !== "playback_ended"" [0 tests]
   🚫 #852: StringLiteral → """" [0 tests]
   🚫 #853: BlockStatement → "{}" [0 tests]
341|         this.finalizeUIState();
342|       }
343|       
344|       // Call original handler if it exists
345|       if (originalHandler) {
   🚫 #854: ConditionalExpression → "true" [0 tests]
   🚫 #855: ConditionalExpression → "false" [0 tests]
   🚫 #856: BlockStatement → "{}" [0 tests]
346|         originalHandler(evt);
347|       }
348|     };
349|     audioModule.port.onmessage = onWorkletMsg;
350| 
351|     // 5) Create splitter and stream
352|     this.currentSplitter = new TextSplitterStream();
353|     const stream = this.kokoroModel.stream(this.currentSplitter);
354| 
355|     // 6) Start consuming the stream
356|     const consume = (async () => {
   ✅ #857: BlockStatement → "{}" [2 tests]
357|       try {
   ✅ #858: BlockStatement → "{}" [2 tests]
358|         for await (const chunk of stream) {
   ✅ #859: BlockStatement → "{}" [2 tests]
359|           if (this.isStopped) break;
   ✅ #860: ConditionalExpression → "true" [2 tests]
   ❌ #861: ConditionalExpression → "false" [2 tests]
360|           
361|           if (chunk.audio && chunk.audio.audio) {
   ❌ #862: ConditionalExpression → "true" [2 tests]
   ✅ #863: ConditionalExpression → "false" [2 tests]
   ❌ #864: LogicalOperator → "chunk.audio || chunk.audio.audio" [2 tests]
   ✅ #865: BlockStatement → "{}" [2 tests]
362|             // Send Float32Array PCM data to worklet
363|             audioModule.port.postMessage(chunk.audio.audio);
364|           }
365|           
366|           if (chunk.text) {
   ❌ #866: ConditionalExpression → "true" [2 tests]
   ❌ #867: ConditionalExpression → "false" [2 tests]
   ❌ #868: BlockStatement → "{}" [2 tests]
367|             this.pendingTexts.push(chunk.text);
368|             this.tryResolveHighlights();
369|           }
370|         }
371|       } catch (error) {
   🚫 #869: BlockStatement → "{}" [0 tests]
372|         console.error('TTS streaming error:', error);
   🚫 #870: StringLiteral → """" [0 tests]
373|         throw error;
374|       }
375|     })();
376| 
377|     // 7) Feed text to splitter
378|     try {
   ❌ #871: BlockStatement → "{}" [2 tests]
379|       for (const sentence of this.sentences) {
   ❌ #872: BlockStatement → "{}" [2 tests]
380|         if (this.isStopped) break;
   ❌ #873: ConditionalExpression → "true" [2 tests]
   ❌ #874: ConditionalExpression → "false" [2 tests]
381|         this.currentSplitter.push(sentence + " ");
   ❌ #875: StringLiteral → """" [2 tests]
382|       }
383|       this.currentSplitter.close();
384| 
385|       // Wait for stream to complete
386|       await consume;
387|       
388|     } catch (error) {
   🚫 #876: BlockStatement → "{}" [0 tests]
389|       console.error('Kokoro TTS failed:', error);
   🚫 #877: StringLiteral → """" [0 tests]
390|       throw error;
391|     } finally {
   ❌ #878: BlockStatement → "{}" [2 tests]
392|       // Restore original message handler
393|       audioModule.port.onmessage = originalHandler;
394|       this.currentSplitter = null;
395|     }
396|   }
397| 
398|   // Helper method to advance sentence highlighting
399|   advanceHighlight() {
   🚫 #879: BlockStatement → "{}" [0 tests]
400|     if (this.currentSentenceIndex < this.sentences.length) {
   🚫 #880: ConditionalExpression → "true" [0 tests]
   🚫 #881: ConditionalExpression → "false" [0 tests]
   🚫 #882: EqualityOperator → "this.currentSentenceIndex <= this.sentences.length" [0 tests]
   🚫 #883: EqualityOperator → "this.currentSentenceIndex >= this.sentences.length" [0 tests]
   🚫 #884: BlockStatement → "{}" [0 tests]
401|       this.markSentenceSpoken(this.currentSentenceIndex);
402|       this.currentSentenceIndex++;
   🚫 #885: UpdateOperator → "this.currentSentenceIndex--" [0 tests]
403|     }
404|   }
405| 
406|   // Helper method to finalize UI state when playback ends
407|   finalizeUIState() {
   🚫 #886: BlockStatement → "{}" [0 tests]
408|     this.isStopped = true;
   🚫 #887: BooleanLiteral → "false" [0 tests]
409|     this.isPaused = false;
   🚫 #888: BooleanLiteral → "true" [0 tests]
410|     this.currentSentenceIndex = 0;
411|     
412|     // Clear all highlights
413|     document.querySelectorAll('.sentence.spoken').forEach(el => {
   🚫 #889: StringLiteral → """" [0 tests]
   🚫 #890: BlockStatement → "{}" [0 tests]
414|       el.classList.remove('spoken');
   🚫 #891: StringLiteral → """" [0 tests]
415|     });
416|   }
417| 
418|   // Helper method to try resolving pending text snippets to highlights
419|   tryResolveHighlights() {
   ❌ #892: BlockStatement → "{}" [2 tests]
420|     // For simplicity, we'll assume the chunks align with sentences
421|     // In a more sophisticated implementation, you would normalize text
422|     // and map character ranges as described in the reference
423|     while (this.pendingTexts.length > 0 && this.currentSentenceIndex < this.sentences.length) {
   ❌ #893: ConditionalExpression → "false" [2 tests]
   ⚠️ #894: LogicalOperator → "this.pendingTexts.length > 0 || this.currentSentenceIndex < this.sentences.length" [2 tests]
   ⚠️ #895: ConditionalExpression → "true" [2 tests]
   ⚠️ #896: EqualityOperator → "this.pendingTexts.length >= 0" [2 tests]
   ❌ #897: EqualityOperator → "this.pendingTexts.length <= 0" [2 tests]
   ❌ #898: ConditionalExpression → "true" [2 tests]
   ❌ #899: EqualityOperator → "this.currentSentenceIndex <= this.sentences.length" [2 tests]
   ❌ #900: EqualityOperator → "this.currentSentenceIndex >= this.sentences.length" [2 tests]
   ⚠️ #901: BlockStatement → "{}" [2 tests]
424|       const pendingText = this.pendingTexts.shift();
425|       // Simple matching - in production you'd want more robust text alignment
426|       if (pendingText && pendingText.trim()) {
   ❌ #902: ConditionalExpression → "true" [2 tests]
   ❌ #903: ConditionalExpression → "false" [2 tests]
   ❌ #904: LogicalOperator → "pendingText || pendingText.trim()" [2 tests]
   ❌ #905: MethodExpression → "pendingText" [2 tests]
427|         // Text is available, highlight will be triggered by worklet next_chunk message
428|       }
429|     }
430|   }
431| 
432|   markSentenceSpoken(index) {
   ❌ #906: BlockStatement → "{}" [5 tests]
433|     const sentenceEl = (typeof document !== 'undefined' && typeof document.getElementById === 'function')
   ❌ #907: ConditionalExpression → "true" [5 tests]
   ❌ #908: ConditionalExpression → "false" [5 tests]
   ❌ #909: LogicalOperator → "typeof document !== 'undefined' || typeof document.getElementById === 'function'" [5 tests]
   ❌ #910: ConditionalExpression → "true" [5 tests]
   ❌ #911: EqualityOperator → "typeof document === 'undefined'" [5 tests]
   ❌ #912: StringLiteral → """" [5 tests]
   ❌ #913: ConditionalExpression → "true" [5 tests]
   ❌ #914: EqualityOperator → "typeof document.getElementById !== 'function'" [5 tests]
   ❌ #915: StringLiteral → """" [5 tests]
434|       ? document.getElementById(`sentence-${index}`)
   ❌ #916: StringLiteral → "``" [5 tests]
435|       : null;
436| 
437|     // Remove previous highlights (guarded)
438|     if (typeof document !== 'undefined' && typeof document.querySelectorAll === 'function') {
   ❌ #917: ConditionalExpression → "true" [5 tests]
   ❌ #918: ConditionalExpression → "false" [5 tests]
   ❌ #919: LogicalOperator → "typeof document !== 'undefined' || typeof document.querySelectorAll === 'function'" [5 tests]
   ❌ #920: ConditionalExpression → "true" [5 tests]
   ❌ #921: EqualityOperator → "typeof document === 'undefined'" [5 tests]
   ❌ #922: StringLiteral → """" [5 tests]
   ❌ #923: ConditionalExpression → "true" [5 tests]
   ❌ #924: EqualityOperator → "typeof document.querySelectorAll !== 'function'" [5 tests]
   ❌ #925: StringLiteral → """" [5 tests]
   ❌ #926: BlockStatement → "{}" [5 tests]
439|       const prev = document.querySelectorAll('.sentence.spoken') || [];
   ✅ #927: ConditionalExpression → "true" [5 tests]
   ✅ #928: ConditionalExpression → "false" [5 tests]
   ✅ #929: LogicalOperator → "document.querySelectorAll('.sentence.spoken') && []" [5 tests]
   ❌ #930: StringLiteral → """" [5 tests]
   ❌ #931: ArrayDeclaration → "["Stryker was here"]" [1 tests]
440|       prev.forEach(el => {
   ❌ #932: BlockStatement → "{}" [2 tests]
441|         if (el && el.classList && typeof el.classList.remove === 'function') {
   ✅ #933: ConditionalExpression → "true" [2 tests]
   ❌ #934: ConditionalExpression → "false" [2 tests]
   ✅ #935: LogicalOperator → "el && el.classList || typeof el.classList.remove === 'function'" [2 tests]
   ✅ #936: ConditionalExpression → "true" [2 tests]
   ❌ #938: ConditionalExpression → "true" [2 tests]
   ✅ #937: LogicalOperator → "el || el.classList" [2 tests]
   ❌ #939: EqualityOperator → "typeof el.classList.remove !== 'function'" [2 tests]
   ❌ #940: StringLiteral → """" [2 tests]
   ❌ #941: BlockStatement → "{}" [2 tests]
442|           el.classList.remove('spoken');
   ❌ #942: StringLiteral → """" [2 tests]
443|         }
444|       });
445|     }
446| 
447|     // Highlight current sentence if possible
448|     if (sentenceEl && sentenceEl.classList && typeof sentenceEl.classList.add === 'function') {
   🚫 #948: ConditionalExpression → "true" [0 tests]
   🚫 #949: EqualityOperator → "typeof sentenceEl.classList.add !== 'function'" [0 tests]
   🚫 #950: StringLiteral → """" [0 tests]
   🚫 #951: BlockStatement → "{}" [0 tests]
   ✅ #943: ConditionalExpression → "true" [5 tests]
   ✅ #945: LogicalOperator → "sentenceEl && sentenceEl.classList || typeof sentenceEl.classList.add === 'function'" [5 tests]
   ✅ #946: ConditionalExpression → "true" [5 tests]
   ❌ #944: ConditionalExpression → "false" [5 tests]
   ✅ #947: LogicalOperator → "sentenceEl || sentenceEl.classList" [5 tests]
449|       sentenceEl.classList.add('spoken');
   🚫 #952: StringLiteral → """" [0 tests]
450|     }
451| 
452|     this.currentSentenceIndex = index;
453|   }
454| 
455|   pause() {
   ✅ #953: BlockStatement → "{}" [1 tests]
456|     if (this.useWebSpeech) {
   ❌ #954: ConditionalExpression → "true" [1 tests]
   ✅ #955: ConditionalExpression → "false" [1 tests]
   ✅ #956: BlockStatement → "{}" [1 tests]
457|       speechSynthesis.pause();
458|     }
459|     this.isPaused = true;
   ✅ #957: BooleanLiteral → "false" [1 tests]
460|   }
461| 
462|   resume() {
   ✅ #958: BlockStatement → "{}" [1 tests]
463|     if (this.useWebSpeech) {
   ❌ #959: ConditionalExpression → "true" [1 tests]
   ✅ #960: ConditionalExpression → "false" [1 tests]
   ✅ #961: BlockStatement → "{}" [1 tests]
464|       speechSynthesis.resume();
465|     }
466|     this.isPaused = false;
   ✅ #962: BooleanLiteral → "true" [1 tests]
467|   }
468| 
469|   stop() {
   ✅ #963: BlockStatement → "{}" [4 tests]
470|     this.isStopped = true;
   ✅ #964: BooleanLiteral → "false" [4 tests]
471|     this.isPaused = false;
   ❌ #965: BooleanLiteral → "true" [4 tests]
472|     
473|     if (this.useWebSpeech) {
   ❌ #966: ConditionalExpression → "true" [4 tests]
   ✅ #967: ConditionalExpression → "false" [4 tests]
   ✅ #968: BlockStatement → "{}" [1 tests]
474|       speechSynthesis.cancel();
475|     }
476|     
477|     // For Kokoro, stop the stream and clear worklet queue
478|     if (this.currentSplitter) {
   ❌ #969: ConditionalExpression → "true" [4 tests]
   ✅ #970: ConditionalExpression → "false" [4 tests]
   ✅ #971: BlockStatement → "{}" [3 tests]
479|       try {
   ✅ #972: BlockStatement → "{}" [3 tests]
480|         this.currentSplitter.close?.();
   ❌ #973: OptionalChaining → "this.currentSplitter.close()" [3 tests]
481|       } catch {
482|         // Ignore errors when closing splitter
483|       }
484|       this.currentSplitter = null;
485|     }
486|     
487|     // Clear highlights
488|     document.querySelectorAll('.sentence.spoken').forEach(el => {
   ❌ #974: StringLiteral → """" [4 tests]
   ❌ #975: BlockStatement → "{}" [1 tests]
489|       if (el && el.classList) {
   ❌ #976: ConditionalExpression → "true" [1 tests]
   ❌ #977: ConditionalExpression → "false" [1 tests]
   ❌ #978: LogicalOperator → "el || el.classList" [1 tests]
   ❌ #979: BlockStatement → "{}" [1 tests]
490|         el.classList.remove('spoken');
   ❌ #980: StringLiteral → """" [1 tests]
491|       }
492|     });
493|     
494|     this.currentSentenceIndex = 0;
495|   }
496| 
497|   setRate(rate) {
   ✅ #981: BlockStatement → "{}" [1 tests]
498|     this.rate = rate;
499|   }
500| 
501|   setPitch(pitch) {
   ✅ #982: BlockStatement → "{}" [1 tests]
502|     this.pitch = pitch;
503|   }
504| 
505|   setVoice(voiceIndex) {
   ✅ #983: BlockStatement → "{}" [2 tests]
506|     const voices = speechSynthesis.getVoices();
507|     if (voices[voiceIndex]) {
   ✅ #984: ConditionalExpression → "true" [2 tests]
   ✅ #985: ConditionalExpression → "false" [2 tests]
   ✅ #986: BlockStatement → "{}" [1 tests]
508|       this.selectedVoice = voices[voiceIndex];
509|     }
510|   }
511| 
512|   getAvailableVoices() {
   ✅ #987: BlockStatement → "{}" [1 tests]
513|     return speechSynthesis.getVoices();
514|   }
515| 
516|   isWebSpeechAvailable() {
   ✅ #988: BlockStatement → "{}" [1 tests]
517|     return 'speechSynthesis' in window;
   ✅ #989: StringLiteral → """" [1 tests]
518|   }
519| 
520|   isKokoroAvailable() {
   ✅ #990: BlockStatement → "{}" [2 tests]
521|     return this.kokoroModel !== null;
   ✅ #991: ConditionalExpression → "true" [2 tests]
   ✅ #992: ConditionalExpression → "false" [2 tests]
   ✅ #993: EqualityOperator → "this.kokoroModel === null" [2 tests]
522|   }
523| 
524|   getCurrentSystem() {
   ✅ #994: BlockStatement → "{}" [1 tests]
525|     if (this.kokoroModel && !this.useWebSpeech) return 'kokoro';
   ✅ #995: ConditionalExpression → "true" [1 tests]
   ✅ #997: LogicalOperator → "this.kokoroModel || !this.useWebSpeech" [1 tests]
   ✅ #996: ConditionalExpression → "false" [1 tests]
   ✅ #999: StringLiteral → """" [1 tests]
   ✅ #998: BooleanLiteral → "this.useWebSpeech" [1 tests]
526|     if (this.useWebSpeech) return 'web-speech';
   ✅ #1001: ConditionalExpression → "false" [1 tests]
   ✅ #1000: ConditionalExpression → "true" [1 tests]
   ✅ #1002: StringLiteral → """" [1 tests]
527|     return 'none';
   ✅ #1003: StringLiteral → """" [1 tests]
528|   }
529| }
530| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #553** - Line 11:22-24
   - **Mutator**: `ArrayDeclaration` → `["Stryker was here"]`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

2. **Mutant #556** - Line 24:25-4
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

3. **Mutant #558** - Line 25:9-55
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

4. **Mutant #559** - Line 25:9-55
   - **Mutator**: `LogicalOperator` → `'speechSynthesis' in window || speechSynthesis`
   - **Issue**: Unknown
   - **Fix**: Test all logical combinations (&&, ||)
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

5. **Mutant #560** - Line 25:9-26
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

6. **Mutant #561** - Line 25:57-6
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

7. **Mutant #562** - Line 30:40-55
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

8. **Mutant #567** - Line 37:9-59
   - **Mutator**: `LogicalOperator` → `!('speechSynthesis' in window) && !speechSynthesis`
   - **Issue**: Unknown
   - **Fix**: Test all logical combinations (&&, ||)
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44

9. **Mutant #577** - Line 40:61-106
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44

10. **Mutant #580** - Line 41:33-44
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44

#### 🚫 Coverage Gaps Summary

- **81 uncovered mutants** across 38 lines
- **Most affected lines**: 30, 53, 65, 66, 143
- **Common uncovered operations**: BlockStatement, StringLiteral, ConditionalExpression

##### Detailed No Coverage Mutants:
1. **Mutant #563** - Line 30:63-8: `BlockStatement` → `{}`
2. **Mutant #605** - Line 53:13-60: `ObjectLiteral` → `{}`
3. **Mutant #606** - Line 53:22-24: `StringLiteral` → `"Stryker was here!"`
4. **Mutant #607** - Line 53:39-41: `StringLiteral` → `"Stryker was here!"`
5. **Mutant #608** - Line 53:53-58: `BooleanLiteral` → `true`
6. **Mutant #623** - Line 65:62-10: `BlockStatement` → `{}`
7. **Mutant #624** - Line 66:15-46: `BlockStatement` → `{}`
8. **Mutant #701** - Line 143:40-4: `BlockStatement` → `{}`
9. **Mutant #702** - Line 144:21-29: `ConditionalExpression` → `false`
10. **Mutant #703** - Line 144:21-29: `EqualityOperator` → `i < 100`
11. **Mutant #704** - Line 144:21-29: `EqualityOperator` → `i > 100`
12. **Mutant #705** - Line 144:31-38: `AssignmentOperator` → `i -= 10`
13. **Mutant #706** - Line 144:40-6: `BlockStatement` → `{}`
14. **Mutant #707** - Line 145:7-75: `OptionalChaining` → `onProgress({
  percentage: i,
  text: `Loading Kokoro model: ${i}%`
})`
15. **Mutant #708** - Line 145:20-74: `ObjectLiteral` → `{}`
16. **Mutant #709** - Line 145:43-72: `StringLiteral` → ````
17. **Mutant #710** - Line 146:25-60: `ArrowFunction` → `() => undefined`
18. **Mutant #734** - Line 179:14-8: `BlockStatement` → `{}`
19. **Mutant #785** - Line 268:19-12: `BlockStatement` → `{}`
20. **Mutant #786** - Line 270:13-27: `UpdateOperator` → `currentIndex--`
21. **Mutant #794** - Line 293:25-6: `BlockStatement` → `{}`
22. **Mutant #795** - Line 294:23-58: `StringLiteral` → `""`
23. **Mutant #810** - Line 305:38-10: `BlockStatement` → `{}`
24. **Mutant #811** - Line 306:15-74: `ConditionalExpression` → `true`
25. **Mutant #812** - Line 306:15-74: `ConditionalExpression` → `false`
26. **Mutant #813** - Line 306:15-74: `LogicalOperator` → `item.status === "progress" || item.file?.endsWith?.("onnx")`
27. **Mutant #814** - Line 306:15-41: `ConditionalExpression` → `true`
28. **Mutant #815** - Line 306:15-41: `EqualityOperator` → `item.status !== "progress"`
29. **Mutant #816** - Line 306:31-41: `StringLiteral` → `""`
30. **Mutant #817** - Line 306:45-74: `MethodExpression` → `item.file?.startsWith?.("onnx")`
31. **Mutant #818** - Line 306:45-74: `OptionalChaining` → `item.file?.endsWith("onnx")`
32. **Mutant #819** - Line 306:45-64: `OptionalChaining` → `item.file.endsWith`
33. **Mutant #820** - Line 306:67-73: `StringLiteral` → `""`
34. **Mutant #821** - Line 306:76-12: `BlockStatement` → `{}`
35. **Mutant #822** - Line 308:41-60: `ArithmeticOperator` → `item.progress / 100`
36. **Mutant #823** - Line 309:25-61: `StringLiteral` → ````
37. **Mutant #825** - Line 317:47-49: `StringLiteral` → `"Stryker was here!"`
38. **Mutant #835** - Line 334:35-6: `BlockStatement` → `{}`
39. **Mutant #836** - Line 335:20-29: `OptionalChaining` → `evt.data`
40. **Mutant #837** - Line 336:11-44: `ConditionalExpression` → `true`
41. **Mutant #838** - Line 336:11-44: `ConditionalExpression` → `false`
42. **Mutant #839** - Line 336:11-44: `LogicalOperator` → `!data && typeof data !== "object"`
43. **Mutant #840** - Line 336:11-16: `BooleanLiteral` → `data`
44. **Mutant #841** - Line 336:20-44: `ConditionalExpression` → `false`
45. **Mutant #842** - Line 336:20-44: `EqualityOperator` → `typeof data === "object"`
46. **Mutant #843** - Line 336:36-44: `StringLiteral` → `""`
47. **Mutant #844** - Line 338:11-37: `ConditionalExpression` → `true`
48. **Mutant #845** - Line 338:11-37: `ConditionalExpression` → `false`
49. **Mutant #846** - Line 338:11-37: `EqualityOperator` → `data.type !== "next_chunk"`
50. **Mutant #847** - Line 338:25-37: `StringLiteral` → `""`
51. **Mutant #848** - Line 338:39-8: `BlockStatement` → `{}`
52. **Mutant #849** - Line 340:18-48: `ConditionalExpression` → `true`
53. **Mutant #850** - Line 340:18-48: `ConditionalExpression` → `false`
54. **Mutant #851** - Line 340:18-48: `EqualityOperator` → `data.type !== "playback_ended"`
55. **Mutant #852** - Line 340:32-48: `StringLiteral` → `""`
56. **Mutant #853** - Line 340:50-8: `BlockStatement` → `{}`
57. **Mutant #854** - Line 345:11-26: `ConditionalExpression` → `true`
58. **Mutant #855** - Line 345:11-26: `ConditionalExpression` → `false`
59. **Mutant #856** - Line 345:28-8: `BlockStatement` → `{}`
60. **Mutant #869** - Line 371:23-8: `BlockStatement` → `{}`
61. **Mutant #870** - Line 372:23-45: `StringLiteral` → `""`
62. **Mutant #876** - Line 388:21-6: `BlockStatement` → `{}`
63. **Mutant #877** - Line 389:21-41: `StringLiteral` → `""`
64. **Mutant #879** - Line 399:22-4: `BlockStatement` → `{}`
65. **Mutant #880** - Line 400:9-58: `ConditionalExpression` → `true`
66. **Mutant #881** - Line 400:9-58: `ConditionalExpression` → `false`
67. **Mutant #882** - Line 400:9-58: `EqualityOperator` → `this.currentSentenceIndex <= this.sentences.length`
68. **Mutant #883** - Line 400:9-58: `EqualityOperator` → `this.currentSentenceIndex >= this.sentences.length`
69. **Mutant #884** - Line 400:60-6: `BlockStatement` → `{}`
70. **Mutant #885** - Line 402:7-34: `UpdateOperator` → `this.currentSentenceIndex--`
71. **Mutant #886** - Line 407:21-4: `BlockStatement` → `{}`
72. **Mutant #887** - Line 408:22-26: `BooleanLiteral` → `false`
73. **Mutant #888** - Line 409:21-26: `BooleanLiteral` → `true`
74. **Mutant #889** - Line 413:31-49: `StringLiteral` → `""`
75. **Mutant #890** - Line 413:65-6: `BlockStatement` → `{}`
76. **Mutant #891** - Line 414:27-35: `StringLiteral` → `""`
77. **Mutant #948** - Line 448:47-93: `ConditionalExpression` → `true`
78. **Mutant #949** - Line 448:47-93: `EqualityOperator` → `typeof sentenceEl.classList.add !== 'function'`
79. **Mutant #950** - Line 448:83-93: `StringLiteral` → `""`
80. **Mutant #951** - Line 448:95-6: `BlockStatement` → `{}`
81. **Mutant #952** - Line 449:32-40: `StringLiteral` → `""`

#### ✅ Successfully Killed Mutants Summary

- **205 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 0 (killed 19 mutants)
- **Top mutator types killed**: BlockStatement, ConditionalExpression, StringLiteral

---

### 🔴 src/worklet.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 0.0% | **Coverage**: 0.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 0 | 0.0% |
| ❌ Survived | 0 | 0.0% |
| 🚫 No Coverage | 164 | 100.0% |
| **Total** | **164** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // AudioWorklet processor for PCM audio playback
  2| class PCMQueueProcessor extends AudioWorkletProcessor {
  3|   constructor() {
   🚫 #1133: BlockStatement → "{}" [0 tests]
  4|     super();
  5|     
  6|     // Audio queue and playback state
  7|     this.audioQueue = [];
   🚫 #1134: ArrayDeclaration → "["Stryker was here"]" [0 tests]
  8|     this.currentBuffer = null;
  9|     this.bufferPosition = 0;
 10|     this.chunkIndex = 0;
 11|     this.isPaused = false;
   🚫 #1135: BooleanLiteral → "true" [0 tests]
 12|     this.isPlaying = false;
   🚫 #1136: BooleanLiteral → "true" [0 tests]
 13|     
 14|     // Ring buffer for smooth playback
 15|     this.ringBuffer = new Float32Array(sampleRate * 2); // 2 seconds buffer
   🚫 #1137: ArithmeticOperator → "sampleRate / 2" [0 tests]
 16|     this.writePosition = 0;
 17|     this.readPosition = 0;
 18|     this.availableSamples = 0;
 19|     
 20|     // Handle messages from main thread
 21|     this.port.onmessage = (event) => {
   🚫 #1138: BlockStatement → "{}" [0 tests]
 22|       this.handleMessage(event.data);
 23|     };
 24|   }
 25| 
 26|   handleMessage(data) {
   🚫 #1139: BlockStatement → "{}" [0 tests]
 27|     if (typeof data === 'object' && data !== null) {
   🚫 #1140: ConditionalExpression → "true" [0 tests]
   🚫 #1141: ConditionalExpression → "false" [0 tests]
   🚫 #1142: LogicalOperator → "typeof data === 'object' || data !== null" [0 tests]
   🚫 #1143: ConditionalExpression → "true" [0 tests]
   🚫 #1144: EqualityOperator → "typeof data !== 'object'" [0 tests]
   🚫 #1145: StringLiteral → """" [0 tests]
   🚫 #1146: ConditionalExpression → "true" [0 tests]
   🚫 #1147: EqualityOperator → "data === null" [0 tests]
   🚫 #1148: BlockStatement → "{}" [0 tests]
 28|       const { type } = data;
 29|       
 30|       switch (type) {
 31|         case 'queue-audio':
   🚫 #1149: ConditionalExpression → "case 'queue-audio':" [0 tests]
   🚫 #1150: StringLiteral → """" [0 tests]
 32|           this.queueAudio(data.audioData, data.metadata);
 33|           break;
 34|         case 'pause':
   🚫 #1151: ConditionalExpression → "case 'pause':" [0 tests]
   🚫 #1152: StringLiteral → """" [0 tests]
 35|           this.isPaused = true;
   🚫 #1153: BooleanLiteral → "false" [0 tests]
 36|           break;
 37|         case 'resume':
   🚫 #1154: ConditionalExpression → "case 'resume':" [0 tests]
   🚫 #1155: StringLiteral → """" [0 tests]
 38|           this.isPaused = false;
   🚫 #1156: BooleanLiteral → "true" [0 tests]
 39|           break;
 40|         case 'stop':
   🚫 #1157: ConditionalExpression → "case 'stop':" [0 tests]
   🚫 #1158: StringLiteral → """" [0 tests]
 41|           this.stop();
 42|           break;
 43|       }
 44|     } else if (data instanceof Float32Array) {
   🚫 #1159: ConditionalExpression → "true" [0 tests]
   🚫 #1160: ConditionalExpression → "false" [0 tests]
   🚫 #1161: BlockStatement → "{}" [0 tests]
 45|       // Direct Float32Array data from Kokoro
 46|       this.queueAudio(data);
 47|     }
 48|   }
 49| 
 50|   queueAudio(audioData, metadata = {}) {
   🚫 #1162: BlockStatement → "{}" [0 tests]
 51|     // Convert to Float32Array if needed
 52|     let float32Data;
 53|     if (audioData instanceof Float32Array) {
   🚫 #1163: ConditionalExpression → "true" [0 tests]
   🚫 #1164: ConditionalExpression → "false" [0 tests]
   🚫 #1165: BlockStatement → "{}" [0 tests]
 54|       float32Data = audioData;
 55|     } else if (audioData instanceof Array) {
   🚫 #1166: ConditionalExpression → "true" [0 tests]
   🚫 #1167: ConditionalExpression → "false" [0 tests]
   🚫 #1168: BlockStatement → "{}" [0 tests]
 56|       float32Data = new Float32Array(audioData);
 57|     } else {
   🚫 #1169: BlockStatement → "{}" [0 tests]
 58|       console.error('Invalid audio data type');
   🚫 #1170: StringLiteral → """" [0 tests]
 59|       return;
 60|     }
 61| 
 62|     this.audioQueue.push({
   🚫 #1171: ObjectLiteral → "{}" [0 tests]
 63|       data: float32Data,
 64|       metadata: {
   🚫 #1172: ObjectLiteral → "{}" [0 tests]
 65|         ...metadata,
 66|         chunkIndex: this.chunkIndex++
   🚫 #1173: UpdateOperator → "this.chunkIndex--" [0 tests]
 67|       }
 68|     });
 69| 
 70|     // Fill ring buffer
 71|     this.fillRingBuffer();
 72|   }
 73| 
 74|   fillRingBuffer() {
   🚫 #1174: BlockStatement → "{}" [0 tests]
 75|     while (this.audioQueue.length > 0 && this.availableSamples < this.ringBuffer.length * 0.8) {
   🚫 #1175: ConditionalExpression → "false" [0 tests]
   🚫 #1176: LogicalOperator → "this.audioQueue.length > 0 || this.availableSamples < this.ringBuffer.length * 0.8" [0 tests]
   🚫 #1177: ConditionalExpression → "true" [0 tests]
   🚫 #1178: EqualityOperator → "this.audioQueue.length >= 0" [0 tests]
   🚫 #1179: EqualityOperator → "this.audioQueue.length <= 0" [0 tests]
   🚫 #1180: ConditionalExpression → "true" [0 tests]
   🚫 #1181: EqualityOperator → "this.availableSamples <= this.ringBuffer.length * 0.8" [0 tests]
   🚫 #1182: EqualityOperator → "this.availableSamples >= this.ringBuffer.length * 0.8" [0 tests]
   🚫 #1183: ArithmeticOperator → "this.ringBuffer.length / 0.8" [0 tests]
   🚫 #1184: BlockStatement → "{}" [0 tests]
 76|       const chunk = this.audioQueue.shift();
 77|       const data = chunk.data;
 78|       
 79|       for (let i = 0; i < data.length; i++) {
   🚫 #1185: ConditionalExpression → "false" [0 tests]
   🚫 #1186: EqualityOperator → "i <= data.length" [0 tests]
   🚫 #1187: EqualityOperator → "i >= data.length" [0 tests]
   🚫 #1188: UpdateOperator → "i--" [0 tests]
   🚫 #1189: BlockStatement → "{}" [0 tests]
 80|         this.ringBuffer[this.writePosition] = data[i];
 81|         this.writePosition = (this.writePosition + 1) % this.ringBuffer.length;
   🚫 #1190: ArithmeticOperator → "(this.writePosition + 1) * this.ringBuffer.length" [0 tests]
   🚫 #1191: ArithmeticOperator → "this.writePosition - 1" [0 tests]
 82|         this.availableSamples++;
   🚫 #1192: UpdateOperator → "this.availableSamples--" [0 tests]
 83|         
 84|         // Prevent buffer overflow
 85|         if (this.availableSamples >= this.ringBuffer.length) {
   🚫 #1193: ConditionalExpression → "true" [0 tests]
   🚫 #1194: ConditionalExpression → "false" [0 tests]
   🚫 #1195: EqualityOperator → "this.availableSamples > this.ringBuffer.length" [0 tests]
   🚫 #1196: EqualityOperator → "this.availableSamples < this.ringBuffer.length" [0 tests]
   🚫 #1197: BlockStatement → "{}" [0 tests]
 86|           break;
 87|         }
 88|       }
 89|       
 90|       // Notify that chunk has been queued
 91|       this.port.postMessage({
   🚫 #1198: ObjectLiteral → "{}" [0 tests]
 92|         type: 'chunk-queued',
   🚫 #1199: StringLiteral → """" [0 tests]
 93|         data: chunk.metadata
 94|       });
 95|     }
 96|   }
 97| 
 98|   stop() {
   🚫 #1200: BlockStatement → "{}" [0 tests]
 99|     this.audioQueue = [];
   🚫 #1201: ArrayDeclaration → "["Stryker was here"]" [0 tests]
100|     this.currentBuffer = null;
101|     this.bufferPosition = 0;
102|     this.isPaused = false;
   🚫 #1202: BooleanLiteral → "true" [0 tests]
103|     this.isPlaying = false;
   🚫 #1203: BooleanLiteral → "true" [0 tests]
104|     this.availableSamples = 0;
105|     this.readPosition = 0;
106|     this.writePosition = 0;
107|     this.chunkIndex = 0;
108|   }
109| 
110|   process(inputs, outputs) {
   🚫 #1204: BlockStatement → "{}" [0 tests]
111|     const output = outputs[0];
112| 
113|     if (!this._validOutput(output)) return true;
   🚫 #1205: BooleanLiteral → "this._validOutput(output)" [0 tests]
   🚫 #1206: ConditionalExpression → "true" [0 tests]
   🚫 #1207: ConditionalExpression → "false" [0 tests]
   🚫 #1208: BooleanLiteral → "false" [0 tests]
114| 
115|     const outputChannel = output[0];
116|     const framesToProcess = outputChannel.length;
117| 
118|     if (this.isPaused || this.availableSamples === 0) {
   🚫 #1209: ConditionalExpression → "true" [0 tests]
   🚫 #1210: ConditionalExpression → "false" [0 tests]
   🚫 #1211: LogicalOperator → "this.isPaused && this.availableSamples === 0" [0 tests]
   🚫 #1212: ConditionalExpression → "false" [0 tests]
   🚫 #1213: EqualityOperator → "this.availableSamples !== 0" [0 tests]
   🚫 #1214: BlockStatement → "{}" [0 tests]
119|       outputChannel.fill(0);
120|       return true;
   🚫 #1215: BooleanLiteral → "false" [0 tests]
121|     }
122| 
123|     const { samplesWritten, wasPlaying } = this._writeOutput(outputChannel, framesToProcess);
124| 
125|     this._maybeRefillBuffer();
126|     this._maybeReportChunkCompletion(samplesWritten);
127|     this._maybeReportPlaybackEnded(wasPlaying);
128|     this._maybeReportUnderrun(samplesWritten, framesToProcess);
129| 
130|     return true;
   🚫 #1216: BooleanLiteral → "false" [0 tests]
131|   }
132| 
133|   _validOutput(output) {
   🚫 #1217: BlockStatement → "{}" [0 tests]
134|     return output && output.length > 0;
   🚫 #1218: ConditionalExpression → "true" [0 tests]
   🚫 #1219: ConditionalExpression → "false" [0 tests]
   🚫 #1220: LogicalOperator → "output || output.length > 0" [0 tests]
   🚫 #1221: ConditionalExpression → "true" [0 tests]
   🚫 #1222: EqualityOperator → "output.length >= 0" [0 tests]
   🚫 #1223: EqualityOperator → "output.length <= 0" [0 tests]
135|   }
136| 
137|   _writeOutput(outputChannel, frames) {
   🚫 #1224: BlockStatement → "{}" [0 tests]
138|     let samplesWritten = 0;
139|     const wasPlaying = this.isPlaying;
140|     this.isPlaying = true;
   🚫 #1225: BooleanLiteral → "false" [0 tests]
141| 
142|     for (let i = 0; i < frames; i++) {
   🚫 #1226: ConditionalExpression → "false" [0 tests]
   🚫 #1227: EqualityOperator → "i <= frames" [0 tests]
   🚫 #1228: EqualityOperator → "i >= frames" [0 tests]
   🚫 #1229: UpdateOperator → "i--" [0 tests]
   🚫 #1230: BlockStatement → "{}" [0 tests]
143|       if (this.availableSamples > 0) {
   🚫 #1231: ConditionalExpression → "true" [0 tests]
   🚫 #1232: ConditionalExpression → "false" [0 tests]
   🚫 #1233: EqualityOperator → "this.availableSamples >= 0" [0 tests]
   🚫 #1234: EqualityOperator → "this.availableSamples <= 0" [0 tests]
   🚫 #1235: BlockStatement → "{}" [0 tests]
144|         outputChannel[i] = this.ringBuffer[this.readPosition];
145|         this.readPosition = (this.readPosition + 1) % this.ringBuffer.length;
   🚫 #1236: ArithmeticOperator → "(this.readPosition + 1) * this.ringBuffer.length" [0 tests]
   🚫 #1237: ArithmeticOperator → "this.readPosition - 1" [0 tests]
146|         this.availableSamples--;
   🚫 #1238: UpdateOperator → "this.availableSamples++" [0 tests]
147|         samplesWritten++;
   🚫 #1239: UpdateOperator → "samplesWritten--" [0 tests]
148|       } else {
   🚫 #1240: BlockStatement → "{}" [0 tests]
149|         outputChannel[i] = 0;
150|       }
151|     }
152| 
153|     return { samplesWritten, wasPlaying };
   🚫 #1241: ObjectLiteral → "{}" [0 tests]
154|   }
155| 
156|   _maybeRefillBuffer() {
   🚫 #1242: BlockStatement → "{}" [0 tests]
157|     if (this.availableSamples < this.ringBuffer.length * 0.3) {
   🚫 #1243: ConditionalExpression → "true" [0 tests]
   🚫 #1244: ConditionalExpression → "false" [0 tests]
   🚫 #1245: EqualityOperator → "this.availableSamples <= this.ringBuffer.length * 0.3" [0 tests]
   🚫 #1246: EqualityOperator → "this.availableSamples >= this.ringBuffer.length * 0.3" [0 tests]
   🚫 #1247: ArithmeticOperator → "this.ringBuffer.length / 0.3" [0 tests]
   🚫 #1248: BlockStatement → "{}" [0 tests]
158|       this.fillRingBuffer();
159|     }
160|   }
161| 
162|   _maybeReportChunkCompletion(samplesWritten) {
   🚫 #1249: BlockStatement → "{}" [0 tests]
163|     if (samplesWritten <= 0) return;
   🚫 #1250: ConditionalExpression → "true" [0 tests]
   🚫 #1251: ConditionalExpression → "false" [0 tests]
   🚫 #1252: EqualityOperator → "samplesWritten < 0" [0 tests]
   🚫 #1253: EqualityOperator → "samplesWritten > 0" [0 tests]
164| 
165|     const samplesPerChunk = sampleRate * 0.1; // Assuming 100ms chunks
   🚫 #1254: ArithmeticOperator → "sampleRate / 0.1" [0 tests]
166|     if (this.bufferPosition > 0 && this.bufferPosition % samplesPerChunk < samplesWritten) {
   🚫 #1255: ConditionalExpression → "true" [0 tests]
   🚫 #1256: ConditionalExpression → "false" [0 tests]
   🚫 #1257: LogicalOperator → "this.bufferPosition > 0 || this.bufferPosition % samplesPerChunk < samplesWritten" [0 tests]
   🚫 #1258: ConditionalExpression → "true" [0 tests]
   🚫 #1259: EqualityOperator → "this.bufferPosition >= 0" [0 tests]
   🚫 #1260: EqualityOperator → "this.bufferPosition <= 0" [0 tests]
   🚫 #1261: ConditionalExpression → "true" [0 tests]
   🚫 #1262: EqualityOperator → "this.bufferPosition % samplesPerChunk <= samplesWritten" [0 tests]
   🚫 #1263: EqualityOperator → "this.bufferPosition % samplesPerChunk >= samplesWritten" [0 tests]
   🚫 #1264: ArithmeticOperator → "this.bufferPosition * samplesPerChunk" [0 tests]
   🚫 #1265: BlockStatement → "{}" [0 tests]
167|       this.port.postMessage({
   🚫 #1266: ObjectLiteral → "{}" [0 tests]
168|         type: 'next_chunk',
   🚫 #1267: StringLiteral → """" [0 tests]
169|         data: {
   🚫 #1268: ObjectLiteral → "{}" [0 tests]
170|           chunkIndex: Math.floor(this.bufferPosition / samplesPerChunk),
   🚫 #1269: ArithmeticOperator → "this.bufferPosition * samplesPerChunk" [0 tests]
171|           timestamp: currentTime
172|         }
173|       });
174|     }
175| 
176|     this.bufferPosition += samplesWritten;
   🚫 #1270: AssignmentOperator → "this.bufferPosition -= samplesWritten" [0 tests]
177|   }
178| 
179|   _maybeReportPlaybackEnded(wasPlaying) {
   🚫 #1271: BlockStatement → "{}" [0 tests]
180|     if (wasPlaying && this.availableSamples === 0 && this.audioQueue.length === 0) {
   🚫 #1272: ConditionalExpression → "true" [0 tests]
   🚫 #1273: ConditionalExpression → "false" [0 tests]
   🚫 #1274: LogicalOperator → "wasPlaying && this.availableSamples === 0 || this.audioQueue.length === 0" [0 tests]
   🚫 #1275: ConditionalExpression → "true" [0 tests]
   🚫 #1276: LogicalOperator → "wasPlaying || this.availableSamples === 0" [0 tests]
   🚫 #1277: ConditionalExpression → "true" [0 tests]
   🚫 #1278: EqualityOperator → "this.availableSamples !== 0" [0 tests]
   🚫 #1279: ConditionalExpression → "true" [0 tests]
   🚫 #1280: EqualityOperator → "this.audioQueue.length !== 0" [0 tests]
   🚫 #1281: BlockStatement → "{}" [0 tests]
181|       this.isPlaying = false;
   🚫 #1282: BooleanLiteral → "true" [0 tests]
182|       this.port.postMessage({ type: 'playback_ended' });
   🚫 #1283: ObjectLiteral → "{}" [0 tests]
   🚫 #1284: StringLiteral → """" [0 tests]
183|     }
184|   }
185| 
186|   _maybeReportUnderrun(samplesWritten, framesToProcess) {
   🚫 #1285: BlockStatement → "{}" [0 tests]
187|     if (samplesWritten < framesToProcess && this.isPlaying) {
   🚫 #1286: ConditionalExpression → "true" [0 tests]
   🚫 #1287: ConditionalExpression → "false" [0 tests]
   🚫 #1288: LogicalOperator → "samplesWritten < framesToProcess || this.isPlaying" [0 tests]
   🚫 #1289: ConditionalExpression → "true" [0 tests]
   🚫 #1290: EqualityOperator → "samplesWritten <= framesToProcess" [0 tests]
   🚫 #1291: EqualityOperator → "samplesWritten >= framesToProcess" [0 tests]
   🚫 #1292: BlockStatement → "{}" [0 tests]
188|       this.port.postMessage({
   🚫 #1293: ObjectLiteral → "{}" [0 tests]
189|         type: 'buffer-underrun',
   🚫 #1294: StringLiteral → """" [0 tests]
190|         data: { requested: framesToProcess, available: samplesWritten }
   🚫 #1295: ObjectLiteral → "{}" [0 tests]
191|       });
192|     }
193|   }
194| }
195| 
196| // Register the processor
197| registerProcessor('pcm-queue-processor', PCMQueueProcessor);
   🚫 #1296: StringLiteral → """" [0 tests]
198| 
```

#### 🚫 Coverage Gaps Summary

- **164 uncovered mutants** across 72 lines
- **Most affected lines**: 3, 7, 11, 12, 15
- **Common uncovered operations**: ConditionalExpression, BlockStatement, EqualityOperator

##### Detailed No Coverage Mutants:
1. **Mutant #1133** - Line 3:17-4: `BlockStatement` → `{}`
2. **Mutant #1134** - Line 7:23-25: `ArrayDeclaration` → `["Stryker was here"]`
3. **Mutant #1135** - Line 11:21-26: `BooleanLiteral` → `true`
4. **Mutant #1136** - Line 12:22-27: `BooleanLiteral` → `true`
5. **Mutant #1137** - Line 15:40-54: `ArithmeticOperator` → `sampleRate / 2`
6. **Mutant #1138** - Line 21:38-6: `BlockStatement` → `{}`
7. **Mutant #1139** - Line 26:23-4: `BlockStatement` → `{}`
8. **Mutant #1140** - Line 27:9-50: `ConditionalExpression` → `true`
9. **Mutant #1141** - Line 27:9-50: `ConditionalExpression` → `false`
10. **Mutant #1142** - Line 27:9-50: `LogicalOperator` → `typeof data === 'object' || data !== null`
11. **Mutant #1143** - Line 27:9-33: `ConditionalExpression` → `true`
12. **Mutant #1144** - Line 27:9-33: `EqualityOperator` → `typeof data !== 'object'`
13. **Mutant #1145** - Line 27:25-33: `StringLiteral` → `""`
14. **Mutant #1146** - Line 27:37-50: `ConditionalExpression` → `true`
15. **Mutant #1147** - Line 27:37-50: `EqualityOperator` → `data === null`
16. **Mutant #1148** - Line 27:52-6: `BlockStatement` → `{}`
17. **Mutant #1149** - Line 31:9-17: `ConditionalExpression` → `case 'queue-audio':`
18. **Mutant #1150** - Line 31:14-27: `StringLiteral` → `""`
19. **Mutant #1151** - Line 34:9-17: `ConditionalExpression` → `case 'pause':`
20. **Mutant #1152** - Line 34:14-21: `StringLiteral` → `""`
21. **Mutant #1153** - Line 35:27-31: `BooleanLiteral` → `false`
22. **Mutant #1154** - Line 37:9-17: `ConditionalExpression` → `case 'resume':`
23. **Mutant #1155** - Line 37:14-22: `StringLiteral` → `""`
24. **Mutant #1156** - Line 38:27-32: `BooleanLiteral` → `true`
25. **Mutant #1157** - Line 40:9-17: `ConditionalExpression` → `case 'stop':`
26. **Mutant #1158** - Line 40:14-20: `StringLiteral` → `""`
27. **Mutant #1159** - Line 44:16-44: `ConditionalExpression` → `true`
28. **Mutant #1160** - Line 44:16-44: `ConditionalExpression` → `false`
29. **Mutant #1161** - Line 44:46-6: `BlockStatement` → `{}`
30. **Mutant #1162** - Line 50:40-4: `BlockStatement` → `{}`
31. **Mutant #1163** - Line 53:9-42: `ConditionalExpression` → `true`
32. **Mutant #1164** - Line 53:9-42: `ConditionalExpression` → `false`
33. **Mutant #1165** - Line 53:44-6: `BlockStatement` → `{}`
34. **Mutant #1166** - Line 55:16-42: `ConditionalExpression` → `true`
35. **Mutant #1167** - Line 55:16-42: `ConditionalExpression` → `false`
36. **Mutant #1168** - Line 55:44-6: `BlockStatement` → `{}`
37. **Mutant #1169** - Line 57:12-6: `BlockStatement` → `{}`
38. **Mutant #1170** - Line 58:21-46: `StringLiteral` → `""`
39. **Mutant #1171** - Line 62:26-6: `ObjectLiteral` → `{}`
40. **Mutant #1172** - Line 64:17-8: `ObjectLiteral` → `{}`
41. **Mutant #1173** - Line 66:21-38: `UpdateOperator` → `this.chunkIndex--`
42. **Mutant #1174** - Line 74:20-4: `BlockStatement` → `{}`
43. **Mutant #1175** - Line 75:12-94: `ConditionalExpression` → `false`
44. **Mutant #1176** - Line 75:12-94: `LogicalOperator` → `this.audioQueue.length > 0 || this.availableSamples < this.ringBuffer.length * 0.8`
45. **Mutant #1177** - Line 75:12-38: `ConditionalExpression` → `true`
46. **Mutant #1178** - Line 75:12-38: `EqualityOperator` → `this.audioQueue.length >= 0`
47. **Mutant #1179** - Line 75:12-38: `EqualityOperator` → `this.audioQueue.length <= 0`
48. **Mutant #1180** - Line 75:42-94: `ConditionalExpression` → `true`
49. **Mutant #1181** - Line 75:42-94: `EqualityOperator` → `this.availableSamples <= this.ringBuffer.length * 0.8`
50. **Mutant #1182** - Line 75:42-94: `EqualityOperator` → `this.availableSamples >= this.ringBuffer.length * 0.8`
51. **Mutant #1183** - Line 75:66-94: `ArithmeticOperator` → `this.ringBuffer.length / 0.8`
52. **Mutant #1184** - Line 75:96-6: `BlockStatement` → `{}`
53. **Mutant #1185** - Line 79:23-38: `ConditionalExpression` → `false`
54. **Mutant #1186** - Line 79:23-38: `EqualityOperator` → `i <= data.length`
55. **Mutant #1187** - Line 79:23-38: `EqualityOperator` → `i >= data.length`
56. **Mutant #1188** - Line 79:40-43: `UpdateOperator` → `i--`
57. **Mutant #1189** - Line 79:45-8: `BlockStatement` → `{}`
58. **Mutant #1190** - Line 81:30-79: `ArithmeticOperator` → `(this.writePosition + 1) * this.ringBuffer.length`
59. **Mutant #1191** - Line 81:31-53: `ArithmeticOperator` → `this.writePosition - 1`
60. **Mutant #1192** - Line 82:9-32: `UpdateOperator` → `this.availableSamples--`
61. **Mutant #1193** - Line 85:13-60: `ConditionalExpression` → `true`
62. **Mutant #1194** - Line 85:13-60: `ConditionalExpression` → `false`
63. **Mutant #1195** - Line 85:13-60: `EqualityOperator` → `this.availableSamples > this.ringBuffer.length`
64. **Mutant #1196** - Line 85:13-60: `EqualityOperator` → `this.availableSamples < this.ringBuffer.length`
65. **Mutant #1197** - Line 85:62-10: `BlockStatement` → `{}`
66. **Mutant #1198** - Line 91:29-8: `ObjectLiteral` → `{}`
67. **Mutant #1199** - Line 92:15-29: `StringLiteral` → `""`
68. **Mutant #1200** - Line 98:10-4: `BlockStatement` → `{}`
69. **Mutant #1201** - Line 99:23-25: `ArrayDeclaration` → `["Stryker was here"]`
70. **Mutant #1202** - Line 102:21-26: `BooleanLiteral` → `true`
71. **Mutant #1203** - Line 103:22-27: `BooleanLiteral` → `true`
72. **Mutant #1204** - Line 110:28-4: `BlockStatement` → `{}`
73. **Mutant #1205** - Line 113:9-35: `BooleanLiteral` → `this._validOutput(output)`
74. **Mutant #1206** - Line 113:9-35: `ConditionalExpression` → `true`
75. **Mutant #1207** - Line 113:9-35: `ConditionalExpression` → `false`
76. **Mutant #1208** - Line 113:44-48: `BooleanLiteral` → `false`
77. **Mutant #1209** - Line 118:9-53: `ConditionalExpression` → `true`
78. **Mutant #1210** - Line 118:9-53: `ConditionalExpression` → `false`
79. **Mutant #1211** - Line 118:9-53: `LogicalOperator` → `this.isPaused && this.availableSamples === 0`
80. **Mutant #1212** - Line 118:26-53: `ConditionalExpression` → `false`
81. **Mutant #1213** - Line 118:26-53: `EqualityOperator` → `this.availableSamples !== 0`
82. **Mutant #1214** - Line 118:55-6: `BlockStatement` → `{}`
83. **Mutant #1215** - Line 120:14-18: `BooleanLiteral` → `false`
84. **Mutant #1216** - Line 130:12-16: `BooleanLiteral` → `false`
85. **Mutant #1217** - Line 133:24-4: `BlockStatement` → `{}`
86. **Mutant #1218** - Line 134:12-39: `ConditionalExpression` → `true`
87. **Mutant #1219** - Line 134:12-39: `ConditionalExpression` → `false`
88. **Mutant #1220** - Line 134:12-39: `LogicalOperator` → `output || output.length > 0`
89. **Mutant #1221** - Line 134:22-39: `ConditionalExpression` → `true`
90. **Mutant #1222** - Line 134:22-39: `EqualityOperator` → `output.length >= 0`
91. **Mutant #1223** - Line 134:22-39: `EqualityOperator` → `output.length <= 0`
92. **Mutant #1224** - Line 137:39-4: `BlockStatement` → `{}`
93. **Mutant #1225** - Line 140:22-26: `BooleanLiteral` → `false`
94. **Mutant #1226** - Line 142:21-31: `ConditionalExpression` → `false`
95. **Mutant #1227** - Line 142:21-31: `EqualityOperator` → `i <= frames`
96. **Mutant #1228** - Line 142:21-31: `EqualityOperator` → `i >= frames`
97. **Mutant #1229** - Line 142:33-36: `UpdateOperator` → `i--`
98. **Mutant #1230** - Line 142:38-6: `BlockStatement` → `{}`
99. **Mutant #1231** - Line 143:11-36: `ConditionalExpression` → `true`
100. **Mutant #1232** - Line 143:11-36: `ConditionalExpression` → `false`
101. **Mutant #1233** - Line 143:11-36: `EqualityOperator` → `this.availableSamples >= 0`
102. **Mutant #1234** - Line 143:11-36: `EqualityOperator` → `this.availableSamples <= 0`
103. **Mutant #1235** - Line 143:38-8: `BlockStatement` → `{}`
104. **Mutant #1236** - Line 145:29-77: `ArithmeticOperator` → `(this.readPosition + 1) * this.ringBuffer.length`
105. **Mutant #1237** - Line 145:30-51: `ArithmeticOperator` → `this.readPosition - 1`
106. **Mutant #1238** - Line 146:9-32: `UpdateOperator` → `this.availableSamples++`
107. **Mutant #1239** - Line 147:9-25: `UpdateOperator` → `samplesWritten--`
108. **Mutant #1240** - Line 148:14-8: `BlockStatement` → `{}`
109. **Mutant #1241** - Line 153:12-42: `ObjectLiteral` → `{}`
110. **Mutant #1242** - Line 156:24-4: `BlockStatement` → `{}`
111. **Mutant #1243** - Line 157:9-61: `ConditionalExpression` → `true`
112. **Mutant #1244** - Line 157:9-61: `ConditionalExpression` → `false`
113. **Mutant #1245** - Line 157:9-61: `EqualityOperator` → `this.availableSamples <= this.ringBuffer.length * 0.3`
114. **Mutant #1246** - Line 157:9-61: `EqualityOperator` → `this.availableSamples >= this.ringBuffer.length * 0.3`
115. **Mutant #1247** - Line 157:33-61: `ArithmeticOperator` → `this.ringBuffer.length / 0.3`
116. **Mutant #1248** - Line 157:63-6: `BlockStatement` → `{}`
117. **Mutant #1249** - Line 162:47-4: `BlockStatement` → `{}`
118. **Mutant #1250** - Line 163:9-28: `ConditionalExpression` → `true`
119. **Mutant #1251** - Line 163:9-28: `ConditionalExpression` → `false`
120. **Mutant #1252** - Line 163:9-28: `EqualityOperator` → `samplesWritten < 0`
121. **Mutant #1253** - Line 163:9-28: `EqualityOperator` → `samplesWritten > 0`
122. **Mutant #1254** - Line 165:29-45: `ArithmeticOperator` → `sampleRate / 0.1`
123. **Mutant #1255** - Line 166:9-90: `ConditionalExpression` → `true`
124. **Mutant #1256** - Line 166:9-90: `ConditionalExpression` → `false`
125. **Mutant #1257** - Line 166:9-90: `LogicalOperator` → `this.bufferPosition > 0 || this.bufferPosition % samplesPerChunk < samplesWritten`
126. **Mutant #1258** - Line 166:9-32: `ConditionalExpression` → `true`
127. **Mutant #1259** - Line 166:9-32: `EqualityOperator` → `this.bufferPosition >= 0`
128. **Mutant #1260** - Line 166:9-32: `EqualityOperator` → `this.bufferPosition <= 0`
129. **Mutant #1261** - Line 166:36-90: `ConditionalExpression` → `true`
130. **Mutant #1262** - Line 166:36-90: `EqualityOperator` → `this.bufferPosition % samplesPerChunk <= samplesWritten`
131. **Mutant #1263** - Line 166:36-90: `EqualityOperator` → `this.bufferPosition % samplesPerChunk >= samplesWritten`
132. **Mutant #1264** - Line 166:36-73: `ArithmeticOperator` → `this.bufferPosition * samplesPerChunk`
133. **Mutant #1265** - Line 166:92-6: `BlockStatement` → `{}`
134. **Mutant #1266** - Line 167:29-8: `ObjectLiteral` → `{}`
135. **Mutant #1267** - Line 168:15-27: `StringLiteral` → `""`
136. **Mutant #1268** - Line 169:15-10: `ObjectLiteral` → `{}`
137. **Mutant #1269** - Line 170:34-71: `ArithmeticOperator` → `this.bufferPosition * samplesPerChunk`
138. **Mutant #1270** - Line 176:5-42: `AssignmentOperator` → `this.bufferPosition -= samplesWritten`
139. **Mutant #1271** - Line 179:41-4: `BlockStatement` → `{}`
140. **Mutant #1272** - Line 180:9-82: `ConditionalExpression` → `true`
141. **Mutant #1273** - Line 180:9-82: `ConditionalExpression` → `false`
142. **Mutant #1274** - Line 180:9-82: `LogicalOperator` → `wasPlaying && this.availableSamples === 0 || this.audioQueue.length === 0`
143. **Mutant #1275** - Line 180:9-50: `ConditionalExpression` → `true`
144. **Mutant #1276** - Line 180:9-50: `LogicalOperator` → `wasPlaying || this.availableSamples === 0`
145. **Mutant #1277** - Line 180:23-50: `ConditionalExpression` → `true`
146. **Mutant #1278** - Line 180:23-50: `EqualityOperator` → `this.availableSamples !== 0`
147. **Mutant #1279** - Line 180:54-82: `ConditionalExpression` → `true`
148. **Mutant #1280** - Line 180:54-82: `EqualityOperator` → `this.audioQueue.length !== 0`
149. **Mutant #1281** - Line 180:84-6: `BlockStatement` → `{}`
150. **Mutant #1282** - Line 181:24-29: `BooleanLiteral` → `true`
151. **Mutant #1283** - Line 182:29-55: `ObjectLiteral` → `{}`
152. **Mutant #1284** - Line 182:37-53: `StringLiteral` → `""`
153. **Mutant #1285** - Line 186:57-4: `BlockStatement` → `{}`
154. **Mutant #1286** - Line 187:9-59: `ConditionalExpression` → `true`
155. **Mutant #1287** - Line 187:9-59: `ConditionalExpression` → `false`
156. **Mutant #1288** - Line 187:9-59: `LogicalOperator` → `samplesWritten < framesToProcess || this.isPlaying`
157. **Mutant #1289** - Line 187:9-41: `ConditionalExpression` → `true`
158. **Mutant #1290** - Line 187:9-41: `EqualityOperator` → `samplesWritten <= framesToProcess`
159. **Mutant #1291** - Line 187:9-41: `EqualityOperator` → `samplesWritten >= framesToProcess`
160. **Mutant #1292** - Line 187:61-6: `BlockStatement` → `{}`
161. **Mutant #1293** - Line 188:29-8: `ObjectLiteral` → `{}`
162. **Mutant #1294** - Line 189:15-32: `StringLiteral` → `""`
163. **Mutant #1295** - Line 190:15-72: `ObjectLiteral` → `{}`
164. **Mutant #1296** - Line 197:19-40: `StringLiteral` → `""`

---

### 🟢 src/components/audio-processor.js

**Overall Health**: 🟢 Excellent | **Mutation Score**: 90.0% | **Coverage**: 100.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 36 | 90.0% |
| ❌ Survived | 3 | 7.5% |
| 🚫 No Coverage | 0 | 0.0% |
| **Total** | **40** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Audio utilities for the Local LLM Demo
  2| export class AudioProcessor {
  3|   constructor(sampleRate = 24000) {
   ✅ #353: BlockStatement → "{}" [14 tests]
  4|     this.sampleRate = sampleRate;
  5|     this.buffer = [];
   ✅ #354: ArrayDeclaration → "["Stryker was here"]" [14 tests]
  6|   }
  7| 
  8|   processAudioChunk(audioData) {
   ✅ #355: BlockStatement → "{}" [11 tests]
  9|     if (!audioData || audioData.length === 0) {
   ✅ #356: ConditionalExpression → "true" [11 tests]
   ✅ #357: ConditionalExpression → "false" [11 tests]
   ✅ #359: BooleanLiteral → "audioData" [11 tests]
   ✅ #358: LogicalOperator → "!audioData && audioData.length === 0" [11 tests]
   ✅ #361: EqualityOperator → "audioData.length !== 0" [11 tests]
   ✅ #360: ConditionalExpression → "false" [11 tests]
   ✅ #362: BlockStatement → "{}" [2 tests]
 10|       throw new Error('Invalid audio data');
   ✅ #363: StringLiteral → """" [2 tests]
 11|     }
 12| 
 13|     // Convert to Float32Array if needed
 14|     let float32Data;
 15|     if (audioData instanceof Float32Array) {
   ✅ #364: ConditionalExpression → "true" [10 tests]
   ✅ #365: ConditionalExpression → "false" [10 tests]
   ✅ #366: BlockStatement → "{}" [8 tests]
 16|       float32Data = audioData;
 17|     } else if (Array.isArray(audioData)) {
   ✅ #367: ConditionalExpression → "true" [2 tests]
   ✅ #368: ConditionalExpression → "false" [2 tests]
   ✅ #369: BlockStatement → "{}" [1 tests]
 18|       float32Data = new Float32Array(audioData);
 19|     } else {
   ✅ #370: BlockStatement → "{}" [1 tests]
 20|       throw new Error('Audio data must be Float32Array or Array');
   ✅ #371: StringLiteral → """" [1 tests]
 21|     }
 22| 
 23|     this.buffer.push(...float32Data);
 24|     return float32Data;
 25|   }
 26| 
 27|   getBufferLength() {
   ✅ #372: BlockStatement → "{}" [7 tests]
 28|     return this.buffer.length;
 29|   }
 30| 
 31|   getBufferDuration() {
   ✅ #373: BlockStatement → "{}" [2 tests]
 32|     return this.buffer.length / this.sampleRate;
   ✅ #374: ArithmeticOperator → "this.buffer.length * this.sampleRate" [2 tests]
 33|   }
 34| 
 35|   clearBuffer() {
   ✅ #375: BlockStatement → "{}" [2 tests]
 36|     this.buffer = [];
   ✅ #376: ArrayDeclaration → "["Stryker was here"]" [2 tests]
 37|   }
 38| 
 39|   resample(targetSampleRate) {
   ✅ #377: BlockStatement → "{}" [1 tests]
 40|     if (targetSampleRate === this.sampleRate) {
   ✅ #378: ConditionalExpression → "true" [1 tests]
   ❌ #379: ConditionalExpression → "false" [1 tests]
   ✅ #380: EqualityOperator → "targetSampleRate !== this.sampleRate" [1 tests]
   ❌ #381: BlockStatement → "{}" [1 tests]
 41|       return new Float32Array(this.buffer);
 42|     }
 43| 
 44|     const ratio = this.sampleRate / targetSampleRate;
   ✅ #382: ArithmeticOperator → "this.sampleRate * targetSampleRate" [1 tests]
 45|     const newLength = Math.floor(this.buffer.length / ratio);
   ✅ #383: ArithmeticOperator → "this.buffer.length * ratio" [1 tests]
 46|     const resampled = new Float32Array(newLength);
 47| 
 48|     for (let i = 0; i < newLength; i++) {
   ✅ #384: ConditionalExpression → "false" [1 tests]
   ❌ #385: EqualityOperator → "i <= newLength" [1 tests]
   ✅ #386: EqualityOperator → "i >= newLength" [1 tests]
   ⚠️ #387: UpdateOperator → "i--" [1 tests]
   ✅ #388: BlockStatement → "{}" [1 tests]
 49|       const srcIndex = Math.floor(i * ratio);
   ✅ #389: ArithmeticOperator → "i / ratio" [1 tests]
 50|       resampled[i] = this.buffer[srcIndex] || 0;
   ✅ #390: ConditionalExpression → "true" [1 tests]
   ✅ #391: ConditionalExpression → "false" [1 tests]
   ✅ #392: LogicalOperator → "this.buffer[srcIndex] && 0" [1 tests]
 51|     }
 52| 
 53|     return resampled;
 54|   }
 55| }
 56| 
```

#### ❌ Critical Survived Mutants (First 3)

1. **Mutant #379** - Line 40:9-45
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 81

2. **Mutant #381** - Line 40:47-6
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 81

3. **Mutant #385** - Line 48:21-34
   - **Mutator**: `EqualityOperator` → `i <= newLength`
   - **Issue**: Unknown
   - **Fix**: Test boundary conditions and edge cases
   - **Tests that should have caught this**: 81

#### ✅ Successfully Killed Mutants Summary

- **36 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 81 (killed 12 mutants)
- **Top mutator types killed**: BlockStatement, ConditionalExpression, ArithmeticOperator

---

### 🟢 src/utils/text-processing.js

**Overall Health**: 🟢 Excellent | **Mutation Score**: 85.3% | **Coverage**: 100.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 110 | 85.3% |
| ❌ Survived | 19 | 14.7% |
| 🚫 No Coverage | 0 | 0.0% |
| **Total** | **129** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Text processing utilities for LLM and TTS
  2| export function splitTextIntoChunks(text, chunkSize = 100) {
   ✅ #1004: BlockStatement → "{}" [4 tests]
  3|   if (!text || typeof text !== 'string') {
   ✅ #1005: ConditionalExpression → "true" [4 tests]
   ✅ #1006: ConditionalExpression → "false" [4 tests]
   ✅ #1007: LogicalOperator → "!text && typeof text !== 'string'" [4 tests]
   ❌ #1009: ConditionalExpression → "false" [3 tests]
   ✅ #1008: BooleanLiteral → "text" [4 tests]
   ✅ #1010: EqualityOperator → "typeof text === 'string'" [3 tests]
   ✅ #1011: StringLiteral → """" [3 tests]
   ✅ #1012: BlockStatement → "{}" [1 tests]
  4|     return [];
   ✅ #1013: ArrayDeclaration → "["Stryker was here"]" [1 tests]
  5|   }
  6| 
  7|   const words = text.trim().split(/\s+/);
   ❌ #1014: MethodExpression → "text" [3 tests]
   ❌ #1015: Regex → "/\s/" [3 tests]
   ✅ #1016: Regex → "/\S+/" [3 tests]
  8|   const chunks = [];
   ✅ #1017: ArrayDeclaration → "["Stryker was here"]" [3 tests]
  9|   let currentChunk = [];
   ✅ #1018: ArrayDeclaration → "["Stryker was here"]" [3 tests]
 10| 
 11|   for (const word of words) {
   ✅ #1019: BlockStatement → "{}" [3 tests]
 12|     if (currentChunk.join(' ').length + word.length + 1 <= chunkSize) {
   ✅ #1020: ConditionalExpression → "true" [3 tests]
   ❌ #1021: ConditionalExpression → "false" [3 tests]
   ❌ #1022: EqualityOperator → "currentChunk.join(' ').length + word.length + 1 < chunkSize" [3 tests]
   ❌ #1023: EqualityOperator → "currentChunk.join(' ').length + word.length + 1 > chunkSize" [3 tests]
   ✅ #1024: ArithmeticOperator → "currentChunk.join(' ').length + word.length - 1" [3 tests]
   ✅ #1025: ArithmeticOperator → "currentChunk.join(' ').length - word.length" [3 tests]
   ✅ #1026: StringLiteral → """" [3 tests]
   ✅ #1027: BlockStatement → "{}" [2 tests]
 13|       currentChunk.push(word);
 14|     } else {
   ✅ #1028: BlockStatement → "{}" [3 tests]
 15|       if (currentChunk.length > 0) {
   ✅ #1029: ConditionalExpression → "true" [3 tests]
   ✅ #1031: EqualityOperator → "currentChunk.length >= 0" [3 tests]
   ✅ #1030: ConditionalExpression → "false" [3 tests]
   ✅ #1032: EqualityOperator → "currentChunk.length <= 0" [3 tests]
   ✅ #1033: BlockStatement → "{}" [1 tests]
 16|         chunks.push(currentChunk.join(' '));
   ❌ #1034: StringLiteral → """" [1 tests]
 17|         currentChunk = [word];
   ❌ #1035: ArrayDeclaration → "[]" [1 tests]
 18|       } else {
   ✅ #1036: BlockStatement → "{}" [2 tests]
 19|         // Word is longer than chunk size, add it anyway
 20|         chunks.push(word);
 21|       }
 22|     }
 23|   }
 24| 
 25|   if (currentChunk.length > 0) {
   ✅ #1037: ConditionalExpression → "true" [3 tests]
   ✅ #1038: ConditionalExpression → "false" [3 tests]
   ✅ #1039: EqualityOperator → "currentChunk.length >= 0" [3 tests]
   ✅ #1040: EqualityOperator → "currentChunk.length <= 0" [3 tests]
   ✅ #1041: BlockStatement → "{}" [2 tests]
 26|     chunks.push(currentChunk.join(' '));
   ✅ #1042: StringLiteral → """" [2 tests]
 27|   }
 28| 
 29|   return chunks;
 30| }
 31| 
 32| export function splitIntoSentences(text) {
   ✅ #1043: BlockStatement → "{}" [6 tests]
 33|   return text
   ✅ #1044: MethodExpression → "text.split(/[.!?]+/).map(s => s.trim())" [6 tests]
 34|     .split(/[.!?]+/)
   ❌ #1045: Regex → "/[.!?]/" [6 tests]
   ✅ #1046: Regex → "/[^.!?]+/" [6 tests]
 35|     .map(s => s.trim())
   ✅ #1047: ArrowFunction → "() => undefined" [6 tests]
   ✅ #1048: MethodExpression → "s" [6 tests]
 36|     .filter(s => s.length > 0)
   ✅ #1050: ConditionalExpression → "true" [6 tests]
   ✅ #1049: ArrowFunction → "() => undefined" [6 tests]
   ✅ #1051: ConditionalExpression → "false" [6 tests]
   ✅ #1052: EqualityOperator → "s.length >= 0" [6 tests]
   ✅ #1053: EqualityOperator → "s.length <= 0" [6 tests]
 37|     .map(s => s + '.');
   ✅ #1054: ArrowFunction → "() => undefined" [6 tests]
   ✅ #1055: StringLiteral → """" [5 tests]
 38| }
 39| 
 40| export function formatPromptForInstruction(prompt) {
   ✅ #1056: BlockStatement → "{}" [2 tests]
 41|   return `<|im_start|>system
   ✅ #1057: StringLiteral → "``" [2 tests]
 42| You are a helpful assistant.<|im_end|>
 43| <|im_start|>user
 44| ${prompt}<|im_end|>
 45| <|im_start|>assistant
 46| `;
 47| }
 48| 
 49| export function normalizeText(text) {
   ✅ #1058: BlockStatement → "{}" [2 tests]
 50|   if (!text || typeof text !== 'string') {
   ✅ #1059: ConditionalExpression → "true" [2 tests]
   ✅ #1060: ConditionalExpression → "false" [2 tests]
   ❌ #1061: LogicalOperator → "!text && typeof text !== 'string'" [2 tests]
   ✅ #1062: BooleanLiteral → "text" [2 tests]
   ❌ #1063: ConditionalExpression → "false" [1 tests]
   ✅ #1064: EqualityOperator → "typeof text === 'string'" [1 tests]
   ✅ #1065: StringLiteral → """" [1 tests]
   ✅ #1066: BlockStatement → "{}" [1 tests]
 51|     return '';
   ✅ #1067: StringLiteral → ""Stryker was here!"" [1 tests]
 52|   }
 53| 
 54|   return text
   ✅ #1068: MethodExpression → "text" [1 tests]
 55|     .trim()
 56|     .replace(/\s+/g, ' ')
   ✅ #1069: Regex → "/\s/g" [1 tests]
   ✅ #1070: Regex → "/\S+/g" [1 tests]
   ✅ #1071: StringLiteral → """" [1 tests]
 57|     .replace(/([.!?])\s*([A-Z])/g, '$1 $2');
   ✅ #1072: Regex → "/([^.!?])\s*([A-Z])/g" [1 tests]
   ✅ #1073: Regex → "/([.!?])\s([A-Z])/g" [1 tests]
   ❌ #1074: Regex → "/([.!?])\S*([A-Z])/g" [1 tests]
   ✅ #1075: Regex → "/([.!?])\s*([^A-Z])/g" [1 tests]
   ✅ #1076: StringLiteral → """" [1 tests]
 58| }
 59| 
 60| export function estimateTokenCount(text) {
   ✅ #1077: BlockStatement → "{}" [3 tests]
 61|   if (!text || typeof text !== 'string') {
   ✅ #1078: ConditionalExpression → "true" [3 tests]
   ✅ #1079: ConditionalExpression → "false" [3 tests]
   ❌ #1080: LogicalOperator → "!text && typeof text !== 'string'" [3 tests]
   ✅ #1081: BooleanLiteral → "text" [3 tests]
   ❌ #1082: ConditionalExpression → "false" [2 tests]
   ✅ #1083: EqualityOperator → "typeof text === 'string'" [2 tests]
   ✅ #1084: StringLiteral → """" [2 tests]
   ✅ #1085: BlockStatement → "{}" [1 tests]
 62|     return 0;
 63|   }
 64| 
 65|   // Rough estimation: ~4 characters per token for English text
 66|   return Math.ceil(text.length / 4);
   ❌ #1086: ArithmeticOperator → "text.length * 4" [2 tests]
 67| }
 68| 
 69| export function tokenizeForDisplay(text) {
   ✅ #1087: BlockStatement → "{}" [2 tests]
 70|   // Simple tokenization for display purposes
 71|   const words = text.split(/(\s+)/);
   ❌ #1088: Regex → "/(\s)/" [2 tests]
   ❌ #1089: Regex → "/(\S+)/" [2 tests]
 72|   return words.filter(word => word.length > 0);
   ✅ #1090: MethodExpression → "words" [2 tests]
   ✅ #1091: ArrowFunction → "() => undefined" [2 tests]
   ✅ #1092: ConditionalExpression → "true" [2 tests]
   ✅ #1093: ConditionalExpression → "false" [2 tests]
   ✅ #1094: EqualityOperator → "word.length >= 0" [2 tests]
   ✅ #1095: EqualityOperator → "word.length <= 0" [2 tests]
 73| }
 74| 
 75| export function formatDuration(seconds) {
   ✅ #1096: BlockStatement → "{}" [3 tests]
 76|   if (typeof seconds !== 'number' || seconds < 0) {
   ✅ #1097: ConditionalExpression → "true" [3 tests]
   ✅ #1098: ConditionalExpression → "false" [3 tests]
   ✅ #1099: LogicalOperator → "typeof seconds !== 'number' && seconds < 0" [3 tests]
   ✅ #1100: ConditionalExpression → "false" [3 tests]
   ✅ #1101: EqualityOperator → "typeof seconds === 'number'" [3 tests]
   ✅ #1102: StringLiteral → """" [3 tests]
   ✅ #1103: ConditionalExpression → "false" [3 tests]
   ❌ #1104: EqualityOperator → "seconds <= 0" [3 tests]
   ✅ #1105: EqualityOperator → "seconds >= 0" [3 tests]
   ✅ #1106: BlockStatement → "{}" [1 tests]
 77|     return '0:00';
   ✅ #1107: StringLiteral → """" [1 tests]
 78|   }
 79| 
 80|   const minutes = Math.floor(seconds / 60);
   ✅ #1108: ArithmeticOperator → "seconds * 60" [2 tests]
 81|   const remainingSeconds = Math.floor(seconds % 60);
   ✅ #1109: ArithmeticOperator → "seconds * 60" [2 tests]
 82|   return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
   ✅ #1110: StringLiteral → "``" [2 tests]
   ✅ #1111: StringLiteral → """" [2 tests]
 83| }
 84| 
 85| export function debounce(func, wait) {
   ✅ #1112: BlockStatement → "{}" [1 tests]
 86|   let timeout;
 87|   return function executedFunction(...args) {
   ✅ #1113: BlockStatement → "{}" [1 tests]
 88|     const later = () => {
   ✅ #1114: BlockStatement → "{}" [1 tests]
 89|       clearTimeout(timeout);
 90|       func(...args);
 91|     };
 92|     clearTimeout(timeout);
 93|     timeout = setTimeout(later, wait);
 94|   };
 95| }
 96| 
 97| export function calculateTokensPerSecond(tokenCount, durationMs) {
   ✅ #1115: BlockStatement → "{}" [3 tests]
 98|   if (typeof tokenCount !== 'number' || typeof durationMs !== 'number' || durationMs <= 0) {
   ✅ #1116: ConditionalExpression → "true" [3 tests]
   ✅ #1117: ConditionalExpression → "false" [3 tests]
   ✅ #1118: LogicalOperator → "(typeof tokenCount !== 'number' || typeof durationMs !== 'number') && durationMs <= 0" [3 tests]
   ✅ #1119: ConditionalExpression → "false" [3 tests]
   ✅ #1120: LogicalOperator → "typeof tokenCount !== 'number' && typeof durationMs !== 'number'" [3 tests]
   ✅ #1121: ConditionalExpression → "false" [3 tests]
   ✅ #1122: EqualityOperator → "typeof tokenCount === 'number'" [3 tests]
   ✅ #1123: StringLiteral → """" [3 tests]
   ❌ #1124: ConditionalExpression → "false" [3 tests]
   ✅ #1126: StringLiteral → """" [3 tests]
   ✅ #1125: EqualityOperator → "typeof durationMs === 'number'" [3 tests]
   ✅ #1127: ConditionalExpression → "false" [3 tests]
   ✅ #1128: EqualityOperator → "durationMs < 0" [3 tests]
   ✅ #1129: EqualityOperator → "durationMs > 0" [3 tests]
   ✅ #1130: BlockStatement → "{}" [1 tests]
 99|     return 0;
100|   }
101| 
102|   return (tokenCount / (durationMs / 1000)).toFixed(1);
   ✅ #1131: ArithmeticOperator → "tokenCount * (durationMs / 1000)" [2 tests]
   ✅ #1132: ArithmeticOperator → "durationMs * 1000" [2 tests]
103| }
104| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #1009** - Line 3:16-40
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 45, 47, 70

2. **Mutant #1014** - Line 7:17-28
   - **Mutator**: `MethodExpression` → `text`
   - **Issue**: Unknown
   - **Fix**: Mock and verify method calls with different inputs
   - **Tests that should have caught this**: 45, 47, 70

3. **Mutant #1015** - Line 7:35-40
   - **Mutator**: `Regex` → `/\s/`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 45, 47, 70

4. **Mutant #1021** - Line 12:9-69
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 45, 47, 70

5. **Mutant #1022** - Line 12:9-69
   - **Mutator**: `EqualityOperator` → `currentChunk.join(' ').length + word.length + 1 < chunkSize`
   - **Issue**: Unknown
   - **Fix**: Test boundary conditions and edge cases
   - **Tests that should have caught this**: 45, 47, 70

6. **Mutant #1023** - Line 12:9-69
   - **Mutator**: `EqualityOperator` → `currentChunk.join(' ').length + word.length + 1 > chunkSize`
   - **Issue**: Unknown
   - **Fix**: Test boundary conditions and edge cases
   - **Tests that should have caught this**: 45, 47, 70

7. **Mutant #1035** - Line 17:24-30
   - **Mutator**: `ArrayDeclaration` → `[]`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 45

8. **Mutant #1034** - Line 16:39-42
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 45

9. **Mutant #1045** - Line 34:12-20
   - **Mutator**: `Regex` → `/[.!?]/`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 50, 51, 52, 71, 83, 84

10. **Mutant #1061** - Line 50:7-40
   - **Mutator**: `LogicalOperator` → `!text && typeof text !== 'string'`
   - **Issue**: Unknown
   - **Fix**: Test all logical combinations (&&, ||)
   - **Tests that should have caught this**: 48, 49

#### ✅ Successfully Killed Mutants Summary

- **110 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 48 (killed 13 mutants)
- **Top mutator types killed**: ConditionalExpression, BlockStatement, EqualityOperator

---

## 📚 Appendix

### Understanding Mutation Testing

Mutation testing validates test quality by introducing small bugs (mutations) into your code:

1. **🟢 Killed Mutants**: Tests detected the bug ✅ Good!
2. **❌ Survived Mutants**: Tests missed the bug ❌ Need better tests  
3. **🚫 No Coverage**: Code isn't tested ❌ Need more tests

### Mutation Testing Process

1. **Mutation Generation**: The tool creates variants of your code with small changes
2. **Test Execution**: Your test suite runs against each mutant
3. **Result Analysis**: 
   - If tests fail → Mutant is "killed" (good)
   - If tests pass → Mutant "survived" (bad)
   - If no tests run → "No coverage" (very bad)

### Interpreting Results

#### Status Definitions
- **Killed**: Tests caught the mutation (test quality is good for this area)
- **Survived**: Tests didn't catch the mutation (test quality needs improvement)
- **No Coverage**: No tests executed this code (coverage gap)
- **Timeout**: Tests took too long (possible infinite loop)
- **Runtime Error**: Mutation caused a runtime error
- **Compile Error**: Mutation caused compilation to fail

#### Mutator Types Explained
- **ConditionalExpression**: Changes conditions (true ↔ false)
- **EqualityOperator**: Changes equality operators (== ↔ !=, === ↔ !==)
- **StringLiteral**: Changes string values
- **BooleanLiteral**: Changes boolean values (true ↔ false)
- **ArithmeticOperator**: Changes math operators (+, -, *, /, %)
- **LogicalOperator**: Changes logical operators (&&, ||)
- **BlockStatement**: Removes or modifies code blocks
- **MethodExpression**: Changes method calls

### Recommended Next Steps

#### Immediate Actions (Priority Order)
1. **Address High Priority Files**: Focus on files with low coverage or poor mutation scores
2. **Fix No Coverage Issues**: Add tests for uncovered code paths
3. **Improve Test Assertions**: Strengthen tests to catch survived mutants
4. **Add Edge Case Tests**: Test boundary conditions and error scenarios

#### Long-term Improvements
1. **Regular Monitoring**: Run mutation testing in CI/CD pipeline
2. **Set Quality Gates**: Require minimum mutation scores for commits
3. **Team Training**: Educate team on mutation testing principles
4. **Incremental Improvement**: Focus on most critical files first

#### Test Quality Guidelines
- **Target 80%+ mutation score** for critical business logic
- **Focus on edge cases** and error conditions
- **Test both positive and negative scenarios**
- **Verify error messages and exception types**
- **Test with various input combinations**

### Mutation Testing Best Practices

#### Do's ✅
- Use mutation testing to **guide test improvements**
- Focus on **business-critical code** first
- Set **realistic targets** (80%+ for important code)
- **Combine with code coverage** for comprehensive analysis
- **Run regularly** to prevent regression
- **Use results to improve** test design

#### Don'ts ❌
- Don't aim for 100% mutation score (some mutants are equivalent)
- Don't ignore "No Coverage" mutants
- Don't rely solely on mutation score
- Don't test generated or trivial code extensively
- Don't let perfect be the enemy of good

### Troubleshooting Common Issues

#### Low Mutation Score
- **Symptom**: Many survived mutants
- **Solution**: Add more specific assertions and edge case tests
- **Example**: Test both success and failure paths

#### No Coverage Issues  
- **Symptom**: High percentage of uncovered mutants
- **Solution**: Increase test coverage first, then improve test quality
- **Example**: Add unit tests for all public methods

#### Equivalent Mutants
- **Symptom**: Mutants that don't change behavior
- **Solution**: This is normal - focus on actionable mutants
- **Example**: Changing variable names doesn't affect functionality

### Integration with Development Workflow

#### CI/CD Integration
```bash
# Example pipeline step
npm run test:mutation
if mutation_score < 80%; then
  echo "Mutation score too low"
  exit 1
fi
```

#### Git Hooks
```bash
# Pre-commit hook
npm run test:mutation:changed-files
```

#### Quality Gates
- **Minimum mutation score**: 70% for new code
- **No decrease**: Mutation score shouldn't drop
- **Coverage requirement**: 90%+ line coverage before mutation testing

### Additional Resources

- [Mutation Testing Guide](https://stryker-mutator.io/docs/)
- [Best Practices](https://blog.stryker-mutator.io/blog/)
- [Academic Research](https://en.wikipedia.org/wiki/Mutation_testing)
- [Interpreting Results](https://github.com/stryker-mutator/stryker/blob/master/docs/mutation-testing-elements/supported-mutators.md)

### Tool Configuration

#### Stryker Configuration Tips
```json
{
  "mutate": ["src/**/*.js", "!src/**/*.test.js"],
  "testRunner": "jest",
  "coverageAnalysis": "perTest",
  "thresholds": {
    "high": 80,
    "low": 60,
    "break": 50
  }
}
```

#### Performance Optimization
- Use **coverage analysis** to speed up execution
- **Exclude test files** from mutation
- **Parallelize execution** when possible
- **Use incremental mode** for large codebases

---

*Report generated by Stryker Mutation Testing Framework*  
*For questions or issues, consult your development team or the Stryker documentation.*

**Report Generation Details**
- Generated: 2025-08-17T10:00:41.983Z
- Stryker Version: Latest
- Analysis Includes: Source code, test coverage, mutant details, recommendations
- Interactive Version: Available at `html/index.html`
