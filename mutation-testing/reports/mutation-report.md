# 🧬 Mutation Testing Report

> **Generated:** 2025-08-17T14:36:26.461Z  
> **Mutation Score:** 🔴 **58.8%**  
> **Coverage Score:** 89.3%  
> **Total Files Analyzed:** 8

> 💡 **Note:** A human-readable, pretty-printed version of the raw JSON data (that was used to produce this md file here) is available at `mutation-report-pretty.json` for detailed analysis and debugging.

---

## 📊 Executive Summary

❌ **Risk Level: HIGH**

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total Mutants** | 1330 | 100% |
| **✅ Killed (Good)** | 699 | 52.6% |
| **❌ Survived (Bad)** | 456 | 34.3% |
| **🚫 No Coverage** | 142 | 10.7% |
| **⏱️ Timeout** | 20 | 1.5% |
| **💥 Error** | 0 | 0.0% |

### Quality Assessment
- **Mutation Score:** 58.8% (Needs Improvement)
- **Test Coverage:** 89.3% (Good)

---

## 🎯 Priority Actions

### Immediate Actions Required:

#### 🔴 HIGH PRIORITY (Immediate attention needed)

**src/app.js**
- Issues: ❌ Poor mutation score (49.0%), ❌ 120 survived mutants need test improvements
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 3/258 no coverage, 120 survived

**src/audio.js**
- Issues: ❌ Poor mutation score (54.9%), ❌ 40 survived mutants need test improvements
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 4/95 no coverage, 40 survived

**src/worklet.js**
- Issues: ❌ Poor mutation score (25.0%), ❌ 102 survived mutants need test improvements
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 24/164 no coverage, 102 survived

#### 🟡 MEDIUM PRIORITY (Address soon)

**src/llm.js**
- Issues: ⚠️ Low mutation score (75.3%), ❌ 34 survived mutants need test improvements
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 30/180 no coverage, 34 survived

**src/tts.js**
- Issues: ⚠️ Low mutation score (60.2%), ❌ 134 survived mutants need test improvements
- Recommended actions: Strengthen test assertions, Add edge case tests
- Stats: 81/455 no coverage, 134 survived

#### 🟢 LOW PRIORITY (Improve when possible)

- 3 files have good test coverage and mutation scores

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
| ConditionalExpression | 332 | 170 | 130 | 28 | 🔴 51.2% |
| StringLiteral | 277 | 140 | 100 | 27 | 🔴 50.5% |
| BlockStatement | 297 | 189 | 64 | 35 | 🟡 63.6% |
| EqualityOperator | 104 | 48 | 41 | 13 | 🔴 46.2% |
| BooleanLiteral | 92 | 44 | 38 | 7 | 🔴 47.8% |
| LogicalOperator | 61 | 34 | 20 | 6 | 🔴 55.7% |
| ObjectLiteral | 39 | 16 | 16 | 7 | 🔴 41.0% |
| ArithmeticOperator | 32 | 11 | 16 | 5 | 🔴 34.4% |
| OptionalChaining | 21 | 9 | 5 | 7 | 🔴 42.9% |
| MethodExpression | 17 | 9 | 5 | 3 | 🔴 52.9% |

### Mutator-Specific Analysis

#### ConditionalExpression
- **Total Mutations**: 332
- **Success Rate**: 51.2%
- **Impact**: High (130 survived, 28 uncovered)
- **Recommendation**: Add test cases for both true/false conditions and edge cases in conditional logic.

#### StringLiteral
- **Total Mutations**: 277
- **Success Rate**: 50.5%
- **Impact**: High (100 survived, 27 uncovered)
- **Recommendation**: Test with different string values including empty strings, whitespace, and special characters.

#### BlockStatement
- **Total Mutations**: 297
- **Success Rate**: 63.6%
- **Impact**: High (64 survived, 35 uncovered)
- **Recommendation**: Ensure all code blocks are executed in tests and cover different execution paths.

#### EqualityOperator
- **Total Mutations**: 104
- **Success Rate**: 46.2%
- **Impact**: High (41 survived, 13 uncovered)
- **Recommendation**: Test boundary conditions, null/undefined values, and different data types.

#### BooleanLiteral
- **Total Mutations**: 92
- **Success Rate**: 47.8%
- **Impact**: High (38 survived, 7 uncovered)
- **Recommendation**: Verify behavior with both true and false values, including truthy/falsy conversions.


### Test Effectiveness Analysis

#### Overall Test Coverage Insights
- **Total Mutants Analyzed**: 1330
- **Average Test Coverage per Mutant**: 6.0 tests
- **Most Tested Mutant**: #584 (covered by 45 tests)
- **Least Tested Areas**: OptionalChaining, ObjectLiteral

#### Test Quality Metrics
- **Mutation Detection Rate**: 52.6%
- **Test Efficiency**: 59.1% (killed/covered ratio)
- **Coverage Gaps**: 21 lines not covered by any tests

#### Top Performing Tests
1. **Test #40**: Killed 37 mutants, covered 67
2. **Test #121**: Killed 29 mutants, covered 95
3. **Test #41**: Killed 24 mutants, covered 135
4. **Test #115**: Killed 24 mutants, covered 122
5. **Test #34**: Killed 22 mutants, covered 118


---

## 📁 File-by-File Breakdown

### 🔴 src/app.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 49.0% | **Coverage**: 98.8%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 125 | 48.4% |
| ❌ Survived | 120 | 46.5% |
| 🚫 No Coverage | 3 | 1.2% |
| **Total** | **258** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| import { LLMModule } from './llm.js';
  2| import { TTSModule } from './tts.js';
  3| import { AudioModule } from './audio.js';
  4| 
  5| class AppController {
  6|   constructor() {
   ✅ #0: BlockStatement → "{}" [21 tests]
  7|     this.llm = new LLMModule();
  8|     this.tts = new TTSModule();
  9|     this.audio = new AudioModule();
 10|     
 11|     this.currentTab = 'llm-stream';
   ❌ #1: StringLiteral → """" [21 tests]
 12|     this.isGenerating = false;
   ✅ #2: BooleanLiteral → "true" [21 tests]
 13|     this.isSpeaking = false;
   ✅ #3: BooleanLiteral → "true" [21 tests]
 14|     
 15|     this.initializeUI();
 16|     this.setupEventListeners();
 17|     this.detectDevice();
 18|   }
 19| 
 20|   async detectDevice() {
   ✅ #4: BlockStatement → "{}" [21 tests]
 21|     const deviceStatus = document.getElementById('device-status');
   ⚠️ #5: StringLiteral → """" [21 tests]
 22|     const hasWebGPU = navigator.gpu !== undefined;
   ❌ #6: ConditionalExpression → "true" [21 tests]
   ✅ #7: ConditionalExpression → "false" [21 tests]
   ✅ #8: EqualityOperator → "navigator.gpu === undefined" [21 tests]
 23|     
 24|     if (hasWebGPU) {
   ❌ #9: ConditionalExpression → "true" [21 tests]
   ✅ #10: ConditionalExpression → "false" [21 tests]
   ✅ #11: BlockStatement → "{}" [13 tests]
 25|       try {
   ✅ #12: BlockStatement → "{}" [13 tests]
 26|         const adapter = await navigator.gpu.requestAdapter();
 27|         if (adapter) {
   ✅ #13: ConditionalExpression → "true" [6 tests]
   ✅ #14: ConditionalExpression → "false" [6 tests]
   ✅ #15: BlockStatement → "{}" [6 tests]
 28|           deviceStatus.textContent = 'webgpu';
   ✅ #16: StringLiteral → """" [6 tests]
 29|           deviceStatus.className = 'text-green-600';
   ❌ #17: StringLiteral → """" [6 tests]
 30|         } else {
   ✅ #18: BlockStatement → "{}" [1 tests]
 31|           deviceStatus.textContent = 'wasm (webgpu unavailable)';
   ✅ #19: StringLiteral → """" [1 tests]
 32|           deviceStatus.className = 'text-orange-600';
   ❌ #20: StringLiteral → """" [1 tests]
 33|         }
 34|       } catch {
   ✅ #21: BlockStatement → "{}" [8 tests]
 35|         deviceStatus.textContent = 'wasm (webgpu error)';
   ✅ #22: StringLiteral → """" [8 tests]
 36|         deviceStatus.className = 'text-orange-600';
   ❌ #23: StringLiteral → """" [8 tests]
 37|       }
 38|     } else {
   ✅ #24: BlockStatement → "{}" [9 tests]
 39|       deviceStatus.textContent = 'wasm (webgpu unsupported)';
   ✅ #25: StringLiteral → """" [9 tests]
 40|       deviceStatus.className = 'text-orange-600';
   ❌ #26: StringLiteral → """" [9 tests]
 41|     }
 42|   }
 43| 
 44|   initializeUI() {
   ❌ #27: BlockStatement → "{}" [21 tests]
 45|     // Initialize tab switching
 46|     this.switchTab('llm-stream');
   ✅ #28: StringLiteral → """" [21 tests]
 47|     
 48|     // Initialize TTS controls
 49|     this.updateTTSControls();
 50|     
 51|     // Hide loading progress initially
 52|     document.getElementById('loading-progress').classList.add('hidden');
   ✅ #29: StringLiteral → """" [21 tests]
   ✅ #30: StringLiteral → """" [21 tests]
 53|   }
 54| 
 55|   setupEventListeners() {
   ✅ #31: BlockStatement → "{}" [21 tests]
 56|     // Tab switching
 57|     document.querySelectorAll('.tab-btn').forEach(btn => {
   ❌ #33: BlockStatement → "{}" [21 tests]
   ✅ #32: StringLiteral → """" [21 tests]
 58|       btn.addEventListener('click', (e) => {
   ❌ #35: BlockStatement → "{}" [1 tests]
   ❌ #34: StringLiteral → """" [21 tests]
 59|         this.switchTab(e.target.dataset.tab);
 60|       });
 61|     });
 62| 
 63|     // LLM Stream tab
 64|     document.getElementById('generate-btn').addEventListener('click', () => {
   ❌ #37: StringLiteral → """" [21 tests]
   ❌ #38: BlockStatement → "{}" [1 tests]
   ✅ #36: StringLiteral → """" [21 tests]
 65|       this.generateText();
 66|     });
 67| 
 68|     // TTS Only tab
 69|     document.getElementById('tts-play').addEventListener('click', () => {
   ❌ #40: StringLiteral → """" [21 tests]
   ❌ #41: BlockStatement → "{}" [1 tests]
   ✅ #39: StringLiteral → """" [21 tests]
 70|       this.playTTS();
 71|     });
 72|     document.getElementById('tts-pause').addEventListener('click', () => {
   ❌ #43: StringLiteral → """" [21 tests]
   ❌ #44: BlockStatement → "{}" [1 tests]
   ✅ #42: StringLiteral → """" [21 tests]
 73|       this.pauseTTS();
 74|     });
 75|     document.getElementById('tts-resume').addEventListener('click', () => {
   ❌ #46: StringLiteral → """" [21 tests]
   ❌ #47: BlockStatement → "{}" [1 tests]
   ✅ #45: StringLiteral → """" [21 tests]
 76|       this.resumeTTS();
 77|     });
 78|     document.getElementById('tts-stop').addEventListener('click', () => {
   ❌ #49: StringLiteral → """" [21 tests]
   ✅ #48: StringLiteral → """" [21 tests]
   ❌ #50: BlockStatement → "{}" [1 tests]
 79|       this.stopTTS();
 80|     });
 81| 
 82|     // TTS controls
 83|     document.getElementById('tts-rate').addEventListener('input', (e) => {
   ✅ #52: StringLiteral → """" [21 tests]
   ✅ #53: BlockStatement → "{}" [1 tests]
   ✅ #51: StringLiteral → """" [21 tests]
 84|       document.getElementById('rate-value').textContent = e.target.value;
   ✅ #54: StringLiteral → """" [1 tests]
 85|       this.tts.setRate(parseFloat(e.target.value));
 86|     });
 87|     document.getElementById('tts-pitch').addEventListener('input', (e) => {
   ✅ #56: StringLiteral → """" [21 tests]
   ✅ #57: BlockStatement → "{}" [1 tests]
   ✅ #55: StringLiteral → """" [21 tests]
 88|       document.getElementById('pitch-value').textContent = e.target.value;
   ✅ #58: StringLiteral → """" [1 tests]
 89|       this.tts.setPitch(parseFloat(e.target.value));
 90|     });
 91|     document.getElementById('tts-voice').addEventListener('change', (e) => {
   ✅ #60: StringLiteral → """" [21 tests]
   ✅ #61: BlockStatement → "{}" [1 tests]
   ✅ #59: StringLiteral → """" [21 tests]
 92|       this.tts.setVoice(e.target.value);
 93|     });
 94| 
 95|     // LLM → TTS tab
 96|     document.getElementById('generate-speak-btn').addEventListener('click', () => {
   ❌ #63: StringLiteral → """" [21 tests]
   ❌ #64: BlockStatement → "{}" [1 tests]
   ✅ #62: StringLiteral → """" [21 tests]
 97|       this.generateAndSpeak();
 98|     });
 99|     document.getElementById('combined-pause').addEventListener('click', () => {
   ❌ #66: StringLiteral → """" [21 tests]
   ❌ #67: BlockStatement → "{}" [1 tests]
   ✅ #65: StringLiteral → """" [21 tests]
100|       this.pauseTTS();
101|     });
102|     document.getElementById('combined-stop').addEventListener('click', () => {
   ❌ #69: StringLiteral → """" [21 tests]
   ❌ #70: BlockStatement → "{}" [1 tests]
   ✅ #68: StringLiteral → """" [21 tests]
103|       this.stopTTS();
104|     });
105| 
106|     // Audio module events
107|     this.audio.addEventListener('chunk-complete', (data) => {
   🚫 #72: BlockStatement → "{}" [0 tests]
   ❌ #71: StringLiteral → """" [21 tests]
108|       this.tts.markSentenceSpoken(data.sentenceIndex);
109|     });
110|     this.audio.addEventListener('playback-ended', () => {
   🚫 #74: BlockStatement → "{}" [0 tests]
   ❌ #73: StringLiteral → """" [21 tests]
111|       this.isSpeaking = false;
   🚫 #75: BooleanLiteral → "true" [0 tests]
112|       this.updateTTSControls();
113|     });
114|   }
115| 
116|   switchTab(tabName) {
   ❌ #76: BlockStatement → "{}" [21 tests]
117|     // Update tab buttons
118|     document.querySelectorAll('.tab-btn').forEach(btn => {
   ❌ #78: BlockStatement → "{}" [21 tests]
   ✅ #77: StringLiteral → """" [21 tests]
119|       btn.classList.remove('active', 'bg-indigo-600', 'text-white');
   ✅ #79: StringLiteral → """" [21 tests]
   ✅ #80: StringLiteral → """" [21 tests]
   ✅ #81: StringLiteral → """" [21 tests]
120|       btn.classList.add('bg-gray-200', 'text-gray-700');
   ✅ #82: StringLiteral → """" [21 tests]
   ✅ #83: StringLiteral → """" [21 tests]
121|     });
122|     document.querySelector(`[data-tab="${tabName}"]`).classList.add('active', 'bg-indigo-600', 'text-white');
   ✅ #85: StringLiteral → """" [21 tests]
   ✅ #86: StringLiteral → """" [21 tests]
   ✅ #84: StringLiteral → "``" [21 tests]
   ✅ #87: StringLiteral → """" [21 tests]
123|     document.querySelector(`[data-tab="${tabName}"]`).classList.remove('bg-gray-200', 'text-gray-700');
   ✅ #89: StringLiteral → """" [21 tests]
   ✅ #90: StringLiteral → """" [21 tests]
   ✅ #88: StringLiteral → "``" [21 tests]
124| 
125|     // Update tab content
126|     document.querySelectorAll('.tab-content').forEach(content => {
   ❌ #92: BlockStatement → "{}" [21 tests]
   ✅ #91: StringLiteral → """" [21 tests]
127|       content.classList.remove('active');
   ✅ #93: StringLiteral → """" [21 tests]
128|     });
129|     document.getElementById(tabName).classList.add('active');
   ✅ #94: StringLiteral → """" [21 tests]
130| 
131|     this.currentTab = tabName;
132|   }
133| 
134|   showProgress(show, text = 'Loading models...') {
   ❌ #95: StringLiteral → """" [9 tests]
   ✅ #96: BlockStatement → "{}" [9 tests]
135|     const progressContainer = document.getElementById('loading-progress');
   ⚠️ #97: StringLiteral → """" [9 tests]
136|     const progressText = document.getElementById('loading-text');
   ✅ #98: StringLiteral → """" [9 tests]
137|     
138|     if (show) {
   ✅ #99: ConditionalExpression → "true" [9 tests]
   ✅ #100: ConditionalExpression → "false" [9 tests]
   ✅ #101: BlockStatement → "{}" [9 tests]
139|       progressContainer.classList.remove('hidden');
   ✅ #102: StringLiteral → """" [9 tests]
140|       progressText.textContent = text;
141|     } else {
   ✅ #103: BlockStatement → "{}" [9 tests]
142|       progressContainer.classList.add('hidden');
   ⚠️ #104: StringLiteral → """" [9 tests]
143|     }
144|   }
145| 
146|   updateProgress(percentage, text) {
   ✅ #105: BlockStatement → "{}" [6 tests]
147|     const progressBar = document.getElementById('progress-bar');
   ✅ #106: StringLiteral → """" [6 tests]
148|     const progressText = document.getElementById('loading-text');
   ✅ #107: StringLiteral → """" [6 tests]
149|     
150|     progressBar.style.width = `${percentage}%`;
   ✅ #108: StringLiteral → "``" [6 tests]
151|     if (text) progressText.textContent = text;
   ❌ #109: ConditionalExpression → "true" [6 tests]
   ❌ #110: ConditionalExpression → "false" [6 tests]
152|   }
153| 
154|   async generateText() {
   ✅ #111: BlockStatement → "{}" [5 tests]
155|     if (this.isGenerating) return;
   ✅ #112: ConditionalExpression → "true" [5 tests]
   ❌ #113: ConditionalExpression → "false" [5 tests]
156| 
157|     const prompt = document.getElementById('llm-prompt').value.trim();
   ❌ #114: MethodExpression → "document.getElementById('llm-prompt').value" [4 tests]
   ⚠️ #115: StringLiteral → """" [4 tests]
158|     if (!prompt) {
   ✅ #116: BooleanLiteral → "prompt" [4 tests]
   ✅ #117: ConditionalExpression → "true" [4 tests]
   ✅ #118: ConditionalExpression → "false" [4 tests]
   ✅ #119: BlockStatement → "{}" [1 tests]
159|       this.showError('Please enter a prompt');
   ❌ #120: StringLiteral → """" [1 tests]
160|       return;
161|     }
162| 
163|     this.isGenerating = true;
   ❌ #121: BooleanLiteral → "false" [3 tests]
164|     const generateBtn = document.getElementById('generate-btn');
   ⚠️ #122: StringLiteral → """" [3 tests]
165|     const output = document.getElementById('llm-output');
   ⚠️ #123: StringLiteral → """" [3 tests]
166|     const statsEl = {
   ✅ #124: ObjectLiteral → "{}" [3 tests]
167|       ttfb: document.getElementById('ttfb'),
   ✅ #125: StringLiteral → """" [3 tests]
168|       tokensPerSec: document.getElementById('tokens-per-sec')
   ✅ #126: StringLiteral → """" [3 tests]
169|     };
170| 
171|     generateBtn.textContent = 'Generating...';
   ❌ #127: StringLiteral → """" [3 tests]
172|     generateBtn.disabled = true;
   ❌ #128: BooleanLiteral → "false" [3 tests]
173|     output.textContent = '';
   ✅ #129: StringLiteral → ""Stryker was here!"" [3 tests]
174| 
175|     try {
   ✅ #130: BlockStatement → "{}" [3 tests]
176|       this.showProgress(true, 'Loading LLM model...');
   ❌ #131: BooleanLiteral → "false" [3 tests]
   ❌ #132: StringLiteral → """" [3 tests]
177|       
178|       let startTime = Date.now();
179|       let firstTokenTime = null;
180|       let tokenCount = 0;
181| 
182|       await this.llm.generate(prompt, {
   ✅ #133: ObjectLiteral → "{}" [3 tests]
183|         onToken: (token) => {
   ✅ #134: BlockStatement → "{}" [2 tests]
184|           if (!firstTokenTime) {
   ✅ #135: BooleanLiteral → "firstTokenTime" [2 tests]
   ❌ #136: ConditionalExpression → "true" [2 tests]
   ✅ #137: ConditionalExpression → "false" [2 tests]
   ✅ #138: BlockStatement → "{}" [2 tests]
185|             firstTokenTime = Date.now();
186|             const ttfb = firstTokenTime - startTime;
   ❌ #139: ArithmeticOperator → "firstTokenTime + startTime" [2 tests]
187|             statsEl.ttfb.textContent = `TTFB: ${ttfb}ms`;
   ✅ #140: StringLiteral → "``" [2 tests]
188|           }
189|           
190|           tokenCount++;
   ❌ #141: UpdateOperator → "tokenCount--" [2 tests]
191|           output.textContent += token;
   ✅ #142: AssignmentOperator → "output.textContent -= token" [2 tests]
192|           output.scrollTop = output.scrollHeight;
193|           
194|           // Update tokens per second
195|           if (firstTokenTime) {
   ❌ #143: ConditionalExpression → "true" [2 tests]
   ✅ #144: ConditionalExpression → "false" [2 tests]
   ✅ #145: BlockStatement → "{}" [2 tests]
196|             const elapsed = (Date.now() - firstTokenTime) / 1000;
   ❌ #146: ArithmeticOperator → "(Date.now() - firstTokenTime) * 1000" [2 tests]
   ❌ #147: ArithmeticOperator → "Date.now() + firstTokenTime" [2 tests]
197|             const tokensPerSec = elapsed > 0 ? (tokenCount / elapsed).toFixed(1) : '0';
   ❌ #148: ConditionalExpression → "true" [2 tests]
   ❌ #149: ConditionalExpression → "false" [2 tests]
   ❌ #150: EqualityOperator → "elapsed >= 0" [2 tests]
   ❌ #151: EqualityOperator → "elapsed <= 0" [2 tests]
   ❌ #152: ArithmeticOperator → "tokenCount * elapsed" [1 tests]
   ❌ #153: StringLiteral → """" [2 tests]
198|             statsEl.tokensPerSec.textContent = `Tokens/s: ${tokensPerSec}`;
   ✅ #154: StringLiteral → "``" [2 tests]
199|           }
200|         },
201|         onProgress: (progress) => {
   ❌ #155: BlockStatement → "{}" [2 tests]
202|           this.updateProgress(progress.percentage, progress.text);
203|         }
204|       });
205| 
206|       document.getElementById('llm-status').textContent = 'loaded';
   ❌ #156: StringLiteral → """" [2 tests]
   ❌ #157: StringLiteral → """" [2 tests]
207|       document.getElementById('llm-status').className = 'text-green-600';
   ❌ #158: StringLiteral → """" [2 tests]
   ❌ #159: StringLiteral → """" [2 tests]
208|       
209|     } catch (error) {
   ✅ #160: BlockStatement → "{}" [1 tests]
210|       this.showError(`Generation failed: ${error.message}`);
   ❌ #161: StringLiteral → "``" [1 tests]
211|       console.error('Generation error:', error);
   ❌ #162: StringLiteral → """" [1 tests]
212|     } finally {
   ❌ #163: BlockStatement → "{}" [3 tests]
213|       this.isGenerating = false;
   ❌ #164: BooleanLiteral → "true" [3 tests]
214|       generateBtn.textContent = 'Generate';
   ❌ #165: StringLiteral → """" [3 tests]
215|       generateBtn.disabled = false;
   ❌ #166: BooleanLiteral → "true" [3 tests]
216|       this.showProgress(false);
   ❌ #167: BooleanLiteral → "true" [3 tests]
217|     }
218|   }
219| 
220|   async playTTS() {
   ✅ #168: BlockStatement → "{}" [5 tests]
221|     const text = document.getElementById('tts-text').value.trim();
   ❌ #169: MethodExpression → "document.getElementById('tts-text').value" [5 tests]
   ⚠️ #170: StringLiteral → """" [5 tests]
222|     if (!text) {
   ✅ #171: BooleanLiteral → "text" [5 tests]
   ✅ #172: ConditionalExpression → "true" [5 tests]
   ✅ #173: ConditionalExpression → "false" [5 tests]
   ✅ #174: BlockStatement → "{}" [1 tests]
223|       this.showError('Please enter text to speak');
   ❌ #175: StringLiteral → """" [1 tests]
224|       return;
225|     }
226| 
227|     if (this.isSpeaking) {
   ❌ #176: ConditionalExpression → "true" [4 tests]
   ✅ #177: ConditionalExpression → "false" [4 tests]
   ✅ #178: BlockStatement → "{}" [1 tests]
228|       this.stopTTS();
229|     }
230| 
231|     try {
   ✅ #179: BlockStatement → "{}" [4 tests]
232|       this.showProgress(true, 'Loading TTS model...');
   ❌ #180: BooleanLiteral → "false" [4 tests]
   ❌ #181: StringLiteral → """" [4 tests]
233|       this.isSpeaking = true;
   ❌ #182: BooleanLiteral → "false" [4 tests]
234|       this.updateTTSControls();
235| 
236|       const outputEl = document.getElementById('tts-output');
   ✅ #183: StringLiteral → """" [4 tests]
237|       outputEl.innerHTML = '';
   ❌ #184: StringLiteral → ""Stryker was here!"" [4 tests]
238| 
239|       await this.tts.speak(text, {
   ✅ #185: ObjectLiteral → "{}" [4 tests]
240|         outputElement: outputEl,
241|         audioModule: this.audio,
242|         onProgress: (progress) => {
   ❌ #186: BlockStatement → "{}" [3 tests]
243|           this.updateProgress(progress.percentage, progress.text);
244|         }
245|       });
246| 
247|       document.getElementById('tts-status').textContent = 'loaded';
   ❌ #187: StringLiteral → """" [3 tests]
   ❌ #188: StringLiteral → """" [3 tests]
248|       document.getElementById('tts-status').className = 'text-blue-600';
   ❌ #189: StringLiteral → """" [3 tests]
   ❌ #190: StringLiteral → """" [3 tests]
249| 
250|     } catch (error) {
   ✅ #191: BlockStatement → "{}" [1 tests]
251|       this.showError(`TTS failed: ${error.message}`);
   ❌ #192: StringLiteral → "``" [1 tests]
252|       console.error('TTS error:', error);
   ❌ #193: StringLiteral → """" [1 tests]
253|       this.isSpeaking = false;
   ❌ #194: BooleanLiteral → "true" [1 tests]
254|       this.updateTTSControls();
255|     } finally {
   ❌ #195: BlockStatement → "{}" [4 tests]
256|       this.showProgress(false);
   ❌ #196: BooleanLiteral → "true" [4 tests]
257|     }
258|   }
259| 
260|   pauseTTS() {
   ✅ #197: BlockStatement → "{}" [3 tests]
261|     this.tts.pause();
262|     this.audio.pause();
263|   }
264| 
265|   resumeTTS() {
   ✅ #198: BlockStatement → "{}" [3 tests]
266|     this.tts.resume();
267|     this.audio.resume();
268|   }
269| 
270|   stopTTS() {
   ✅ #199: BlockStatement → "{}" [4 tests]
271|     this.tts.stop();
272|     this.audio.stop();
273|     this.isSpeaking = false;
   ✅ #200: BooleanLiteral → "true" [4 tests]
274|     this.updateTTSControls();
275|   }
276| 
277|   async generateAndSpeak() {
   ✅ #201: BlockStatement → "{}" [4 tests]
278|     const prompt = document.getElementById('combined-prompt').value.trim();
   ❌ #202: MethodExpression → "document.getElementById('combined-prompt').value" [4 tests]
   ⚠️ #203: StringLiteral → """" [4 tests]
279|     if (!prompt) {
   ✅ #204: BooleanLiteral → "prompt" [4 tests]
   ✅ #205: ConditionalExpression → "true" [4 tests]
   ❌ #206: ConditionalExpression → "false" [4 tests]
   ❌ #207: BlockStatement → "{}" [1 tests]
280|       this.showError('Please enter a prompt');
   ❌ #208: StringLiteral → """" [1 tests]
281|       return;
282|     }
283| 
284|     if (this.isGenerating || this.isSpeaking) return;
   ✅ #209: ConditionalExpression → "true" [3 tests]
   ❌ #210: ConditionalExpression → "false" [3 tests]
   ❌ #211: LogicalOperator → "this.isGenerating && this.isSpeaking" [3 tests]
285| 
286|     this.isGenerating = true;
   ❌ #212: BooleanLiteral → "false" [3 tests]
287|     const generateBtn = document.getElementById('generate-speak-btn');
   ⚠️ #213: StringLiteral → """" [3 tests]
288|     const output = document.getElementById('combined-output');
   ⚠️ #214: StringLiteral → """" [3 tests]
289| 
290|     generateBtn.textContent = 'Generating...';
   ❌ #215: StringLiteral → """" [3 tests]
291|     generateBtn.disabled = true;
   ❌ #216: BooleanLiteral → "false" [3 tests]
292|     output.innerHTML = '';
   ❌ #217: StringLiteral → ""Stryker was here!"" [3 tests]
293| 
294|     try {
   ✅ #218: BlockStatement → "{}" [3 tests]
295|       this.showProgress(true, 'Loading models...');
   ❌ #219: BooleanLiteral → "false" [3 tests]
   ❌ #220: StringLiteral → """" [3 tests]
296|       
297|       // Generate text first
298|       let generatedText = '';
   ❌ #221: StringLiteral → ""Stryker was here!"" [3 tests]
299|       await this.llm.generate(prompt, {
   ✅ #222: ObjectLiteral → "{}" [3 tests]
300|         onToken: (token) => {
   ✅ #223: BlockStatement → "{}" [2 tests]
301|           generatedText += token;
   ✅ #224: AssignmentOperator → "generatedText -= token" [2 tests]
302|           output.textContent = generatedText;
303|           output.scrollTop = output.scrollHeight;
304|         },
305|         onProgress: (progress) => {
   ❌ #225: BlockStatement → "{}" [2 tests]
306|           this.updateProgress(progress.percentage * 0.7, `Loading LLM: ${progress.text}`);
   ❌ #226: ArithmeticOperator → "progress.percentage / 0.7" [2 tests]
   ❌ #227: StringLiteral → "``" [2 tests]
307|         }
308|       });
309| 
310|       // Then speak it
311|       this.isGenerating = false;
   ❌ #228: BooleanLiteral → "true" [2 tests]
312|       this.isSpeaking = true;
   ❌ #229: BooleanLiteral → "false" [2 tests]
313|       generateBtn.textContent = 'Speaking...';
   ❌ #230: StringLiteral → """" [2 tests]
314|       
315|       output.innerHTML = '';
   ❌ #231: StringLiteral → ""Stryker was here!"" [2 tests]
316|       await this.tts.speak(generatedText, {
   ✅ #232: ObjectLiteral → "{}" [2 tests]
317|         outputElement: output,
318|         audioModule: this.audio,
319|         onProgress: (progress) => {
   ❌ #233: BlockStatement → "{}" [2 tests]
320|           this.updateProgress(70 + progress.percentage * 0.3, `Loading TTS: ${progress.text}`);
   ❌ #234: ArithmeticOperator → "70 - progress.percentage * 0.3" [2 tests]
   ❌ #236: StringLiteral → "``" [2 tests]
   ❌ #235: ArithmeticOperator → "progress.percentage / 0.3" [2 tests]
321|         }
322|       });
323| 
324|       document.getElementById('llm-status').textContent = 'loaded';
   ❌ #237: StringLiteral → """" [2 tests]
   ❌ #238: StringLiteral → """" [2 tests]
325|       document.getElementById('tts-status').textContent = 'loaded';
   ❌ #239: StringLiteral → """" [2 tests]
   ❌ #240: StringLiteral → """" [2 tests]
326| 
327|     } catch (error) {
   ✅ #241: BlockStatement → "{}" [1 tests]
328|       this.showError(`Generation/Speech failed: ${error.message}`);
   ❌ #242: StringLiteral → "``" [1 tests]
329|       console.error('Combined error:', error);
   ❌ #243: StringLiteral → """" [1 tests]
330|     } finally {
   ❌ #244: BlockStatement → "{}" [3 tests]
331|       this.isGenerating = false;
   ❌ #245: BooleanLiteral → "true" [3 tests]
332|       this.isSpeaking = false;
   ❌ #246: BooleanLiteral → "true" [3 tests]
333|       generateBtn.textContent = 'Generate & Speak';
   ❌ #247: StringLiteral → """" [3 tests]
334|       generateBtn.disabled = false;
   ❌ #248: BooleanLiteral → "true" [3 tests]
335|       this.showProgress(false);
   ❌ #249: BooleanLiteral → "true" [3 tests]
336|     }
337|   }
338| 
339|   updateTTSControls() {
340|     // Update button states based on speaking status
341|     // This would be more complex in a real implementation
342|   }
343| 
344|   showError(message) {
   ✅ #250: BlockStatement → "{}" [7 tests]
345|     const errorContainer = document.getElementById('error-container');
   ✅ #251: StringLiteral → """" [7 tests]
346|     const errorMessage = document.getElementById('error-message');
   ✅ #252: StringLiteral → """" [7 tests]
347|     
348|     errorMessage.textContent = message;
349|     errorContainer.classList.remove('hidden');
   ✅ #253: StringLiteral → """" [7 tests]
350|     
351|     setTimeout(() => {
   ✅ #254: BlockStatement → "{}" [1 tests]
352|       errorContainer.classList.add('hidden');
   ✅ #255: StringLiteral → """" [1 tests]
353|     }, 5000);
354|   }
355| }
356| 
357| // Initialize app when DOM is loaded
358| document.addEventListener('DOMContentLoaded', () => {
   ✅ #256: StringLiteral → """" [21 tests]
   ✅ #257: BlockStatement → "{}" [21 tests]
359|   window.app = new AppController();
360| });
361| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #1** - Line 11:23-35
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60

2. **Mutant #6** - Line 22:23-50
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60

3. **Mutant #9** - Line 24:9-18
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60

4. **Mutant #17** - Line 29:36-52
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 48, 49, 50, 51, 52, 53

5. **Mutant #20** - Line 32:36-53
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 48

6. **Mutant #23** - Line 36:34-51
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 53, 54, 55, 56, 57, 58, 59, 60

7. **Mutant #26** - Line 40:32-49
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 40, 41, 42, 43, 44, 45, 46, 47, 48

8. **Mutant #27** - Line 44:18-4
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60

9. **Mutant #33** - Line 57:58-6
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60

10. **Mutant #35** - Line 58:44-8
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 60

#### 🚫 Coverage Gaps Summary

- **3 uncovered mutants** across 3 lines
- **Most affected lines**: 107, 110, 111
- **Common uncovered operations**: BlockStatement, BooleanLiteral

##### Detailed No Coverage Mutants:
1. **Mutant #72** - Line 107:61-6: `BlockStatement` → `{}`
2. **Mutant #74** - Line 110:57-6: `BlockStatement` → `{}`
3. **Mutant #75** - Line 111:25-30: `BooleanLiteral` → `true`

#### ✅ Successfully Killed Mutants Summary

- **125 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 40 (killed 37 mutants)
- **Top mutator types killed**: StringLiteral, BlockStatement, ConditionalExpression

---

### 🔴 src/audio.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 54.9% | **Coverage**: 95.8%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 50 | 52.6% |
| ❌ Survived | 40 | 42.1% |
| 🚫 No Coverage | 4 | 4.2% |
| **Total** | **95** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| export class AudioModule extends EventTarget {
  2|   constructor() {
   ✅ #258: BlockStatement → "{}" [10 tests]
  3|     super();
  4|     this.audioContext = null;
  5|     this.workletNode = null;
  6|     this.isInitialized = false;
   ✅ #259: BooleanLiteral → "true" [10 tests]
  7|     this.isPaused = false;
   ✅ #260: BooleanLiteral → "true" [10 tests]
  8|     this.queue = [];
   ❌ #261: ArrayDeclaration → "["Stryker was here"]" [10 tests]
  9|   }
 10| 
 11|   async initialize() {
   ✅ #262: BlockStatement → "{}" [8 tests]
 12|     if (this.isInitialized) return;
   ✅ #263: ConditionalExpression → "true" [8 tests]
   ❌ #264: ConditionalExpression → "false" [8 tests]
 13| 
 14|     try {
   ✅ #265: BlockStatement → "{}" [8 tests]
 15|       // Create AudioContext with appropriate sample rate for TTS
 16|       this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
   ✅ #267: ConditionalExpression → "false" [8 tests]
   ✅ #266: ConditionalExpression → "true" [8 tests]
   ❌ #269: ObjectLiteral → "{}" [8 tests]
   ✅ #268: LogicalOperator → "window.AudioContext && window.webkitAudioContext" [8 tests]
 17|         sampleRate: 24000
 18|       });
 19| 
 20|       // Load and register the AudioWorklet processor
 21|       await this.audioContext.audioWorklet.addModule('./src/worklet.js');
   ❌ #270: StringLiteral → """" [8 tests]
 22| 
 23|       // Create the worklet node
 24|       this.workletNode = new AudioWorkletNode(this.audioContext, 'pcm-queue-processor');
   ❌ #271: StringLiteral → """" [7 tests]
 25| 
 26|       // Connect to speakers
 27|       this.workletNode.connect(this.audioContext.destination);
 28| 
 29|       // Set up message handling
 30|       this.workletNode.port.onmessage = (event) => {
   ✅ #272: BlockStatement → "{}" [1 tests]
 31|         const { type, data } = event.data;
 32|         
 33|         switch (type) {
 34|           case 'next_chunk':
   ✅ #273: ConditionalExpression → "case 'next_chunk':" [1 tests]
   ✅ #274: StringLiteral → """" [1 tests]
 35|             this.dispatchEvent(new CustomEvent('next_chunk', { detail: data }));
   ✅ #275: StringLiteral → """" [1 tests]
   ❌ #276: ObjectLiteral → "{}" [1 tests]
 36|             break;
 37|           case 'chunk-complete':
   ✅ #277: ConditionalExpression → "case 'chunk-complete':" [1 tests]
   ✅ #278: StringLiteral → """" [1 tests]
 38|             this.dispatchEvent(new CustomEvent('chunk-complete', { detail: data }));
   ✅ #279: StringLiteral → """" [1 tests]
   ❌ #280: ObjectLiteral → "{}" [1 tests]
 39|             break;
 40|           case 'playback_ended':
   ✅ #281: ConditionalExpression → "case 'playback_ended':" [1 tests]
   ✅ #282: StringLiteral → """" [1 tests]
 41|             this.dispatchEvent(new CustomEvent('playback_ended'));
   ✅ #283: StringLiteral → """" [1 tests]
 42|             break;
 43|           case 'buffer-underrun':
   ✅ #284: ConditionalExpression → "case 'buffer-underrun':" [1 tests]
   ✅ #285: StringLiteral → """" [1 tests]
 44|             this.dispatchEvent(new CustomEvent('buffer-underrun'));
   ✅ #286: StringLiteral → """" [1 tests]
 45|             break;
 46|         }
 47|       };
 48| 
 49|       this.isInitialized = true;
   ✅ #287: BooleanLiteral → "false" [7 tests]
 50| 
 51|     } catch (error) {
   ✅ #288: BlockStatement → "{}" [1 tests]
 52|       console.error('Failed to initialize AudioModule:', error);
   ❌ #289: StringLiteral → """" [1 tests]
 53|       throw new Error(`Audio initialization failed: ${error.message}`);
   ✅ #290: StringLiteral → "``" [1 tests]
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
   ❌ #293: BlockStatement → "{}" [3 tests]
 62|     if (this.audioContext && this.audioContext.state === 'suspended') {
   🚫 #300: BlockStatement → "{}" [0 tests]
   ❌ #294: ConditionalExpression → "true" [3 tests]
   ❌ #295: ConditionalExpression → "false" [3 tests]
   ❌ #296: LogicalOperator → "this.audioContext || this.audioContext.state === 'suspended'" [3 tests]
   ❌ #297: ConditionalExpression → "true" [3 tests]
   ❌ #298: EqualityOperator → "this.audioContext.state !== 'suspended'" [3 tests]
   ❌ #299: StringLiteral → """" [3 tests]
 63|       await this.audioContext.resume();
 64|     }
 65|   }
 66| 
 67|   async queueAudio(audioData, metadata = {}) {
   ✅ #301: BlockStatement → "{}" [2 tests]
 68|     await this.initialize();
 69|     await this.resumeAudioContext();
 70| 
 71|     if (this.isPaused) {
   ✅ #302: ConditionalExpression → "true" [2 tests]
   ✅ #303: ConditionalExpression → "false" [2 tests]
   ✅ #304: BlockStatement → "{}" [1 tests]
 72|       // Queue for later playback
 73|       this.queue.push({ audioData, metadata });
   ❌ #305: ObjectLiteral → "{}" [1 tests]
 74|       return;
 75|     }
 76| 
 77|     this.workletNode.port.postMessage({
   ✅ #306: ObjectLiteral → "{}" [1 tests]
 78|       type: 'queue-audio',
   ✅ #307: StringLiteral → """" [1 tests]
 79|       audioData: audioData,
 80|       metadata: metadata
 81|     });
 82|   }
 83| 
 84|   async pause() {
   ✅ #308: BlockStatement → "{}" [2 tests]
 85|     this.isPaused = true;
   ✅ #309: BooleanLiteral → "false" [2 tests]
 86|     
 87|     if (this.workletNode) {
   ❌ #310: ConditionalExpression → "true" [2 tests]
   ❌ #311: ConditionalExpression → "false" [2 tests]
   ❌ #312: BlockStatement → "{}" [2 tests]
 88|       this.workletNode.port.postMessage({
   ❌ #313: ObjectLiteral → "{}" [2 tests]
 89|         type: 'pause'
   ❌ #314: StringLiteral → """" [2 tests]
 90|       });
 91|     }
 92|   }
 93| 
 94|   async resume() {
   ✅ #315: BlockStatement → "{}" [3 tests]
 95|     if (!this.isPaused) return;
   ✅ #316: BooleanLiteral → "this.isPaused" [3 tests]
   ❌ #318: ConditionalExpression → "false" [3 tests]
   ✅ #317: ConditionalExpression → "true" [3 tests]
 96|     
 97|     this.isPaused = false;
   ✅ #319: BooleanLiteral → "true" [2 tests]
 98|     await this.resumeAudioContext();
 99| 
100|     // Process any queued audio
101|     while (this.queue.length > 0) {
   ✅ #320: ConditionalExpression → "false" [2 tests]
   ✅ #322: EqualityOperator → "this.queue.length <= 0" [2 tests]
   ✅ #321: EqualityOperator → "this.queue.length >= 0" [2 tests]
   ⚠️ #323: BlockStatement → "{}" [1 tests]
102|       const { audioData, metadata } = this.queue.shift();
103|       this.workletNode.port.postMessage({
   ❌ #324: ObjectLiteral → "{}" [1 tests]
104|         type: 'queue-audio',
   ❌ #325: StringLiteral → """" [1 tests]
105|         audioData: audioData,
106|         metadata: metadata
107|       });
108|     }
109| 
110|     if (this.workletNode) {
   ❌ #326: ConditionalExpression → "true" [2 tests]
   ❌ #327: ConditionalExpression → "false" [2 tests]
   ❌ #328: BlockStatement → "{}" [2 tests]
111|       this.workletNode.port.postMessage({
   ❌ #329: ObjectLiteral → "{}" [2 tests]
112|         type: 'resume'
   ❌ #330: StringLiteral → """" [2 tests]
113|       });
114|     }
115|   }
116| 
117|   stop() {
   ❌ #331: BlockStatement → "{}" [3 tests]
118|     this.isPaused = false;
   ✅ #332: BooleanLiteral → "true" [3 tests]
119|     this.queue = [];
   ❌ #333: ArrayDeclaration → "["Stryker was here"]" [3 tests]
120|     
121|     if (this.workletNode) {
   ✅ #334: ConditionalExpression → "true" [3 tests]
   ❌ #335: ConditionalExpression → "false" [3 tests]
   ❌ #336: BlockStatement → "{}" [2 tests]
122|       this.workletNode.port.postMessage({
   ❌ #337: ObjectLiteral → "{}" [2 tests]
123|         type: 'stop'
   ❌ #338: StringLiteral → """" [2 tests]
124|       });
125|     }
126|   }
127| 
128|   getBufferStatus() {
   ✅ #339: BlockStatement → "{}" [1 tests]
129|     if (!this.workletNode) return { length: 0, duration: 0 };
   ❌ #340: BooleanLiteral → "this.workletNode" [1 tests]
   ❌ #341: ConditionalExpression → "true" [1 tests]
   ❌ #342: ConditionalExpression → "false" [1 tests]
   ✅ #343: ObjectLiteral → "{}" [1 tests]
130|     
131|     // This would require the worklet to report back buffer status
132|     // For now, return a placeholder
133|     return { length: 0, duration: 0 };
   🚫 #344: ObjectLiteral → "{}" [0 tests]
134|   }
135| 
136|   destroy() {
   ✅ #345: BlockStatement → "{}" [1 tests]
137|     this.stop();
138|     
139|     if (this.workletNode) {
   ❌ #346: ConditionalExpression → "true" [1 tests]
   ✅ #347: ConditionalExpression → "false" [1 tests]
   ✅ #348: BlockStatement → "{}" [1 tests]
140|       this.workletNode.disconnect();
141|       this.workletNode = null;
142|     }
143|     
144|     if (this.audioContext) {
   ❌ #349: ConditionalExpression → "true" [1 tests]
   ✅ #350: ConditionalExpression → "false" [1 tests]
   ✅ #351: BlockStatement → "{}" [1 tests]
145|       this.audioContext.close();
146|       this.audioContext = null;
147|     }
148|     
149|     this.isInitialized = false;
   ✅ #352: BooleanLiteral → "true" [1 tests]
150|   }
151| }
152| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #261** - Line 8:18-20
   - **Mutator**: `ArrayDeclaration` → `["Stryker was here"]`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 98, 99, 100, 101, 102, 103, 104, 105, 106, 107

2. **Mutant #264** - Line 12:9-27
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 98, 99, 100, 101, 102, 103, 104, 106

3. **Mutant #269** - Line 16:82-8
   - **Mutator**: `ObjectLiteral` → `{}`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 98, 99, 100, 101, 102, 103, 104, 106

4. **Mutant #270** - Line 21:54-72
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 98, 99, 100, 101, 102, 103, 104, 106

5. **Mutant #271** - Line 24:66-87
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 98, 99, 100, 101, 102, 104, 106

6. **Mutant #276** - Line 35:62-78
   - **Mutator**: `ObjectLiteral` → `{}`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 102

7. **Mutant #280** - Line 38:66-82
   - **Mutator**: `ObjectLiteral` → `{}`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 102

8. **Mutant #289** - Line 52:21-56
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 103

9. **Mutant #293** - Line 61:30-4
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 99, 100, 101

10. **Mutant #294** - Line 62:9-69
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 99, 100, 101

#### 🚫 Coverage Gaps Summary

- **4 uncovered mutants** across 4 lines
- **Most affected lines**: 57, 58, 62, 133
- **Common uncovered operations**: BlockStatement, OptionalChaining, ObjectLiteral

##### Detailed No Coverage Mutants:
1. **Mutant #291** - Line 57:14-4: `BlockStatement` → `{}`
2. **Mutant #292** - Line 58:12-34: `OptionalChaining` → `this.workletNode.port`
3. **Mutant #300** - Line 62:71-6: `BlockStatement` → `{}`
4. **Mutant #344** - Line 133:12-38: `ObjectLiteral` → `{}`

#### ✅ Successfully Killed Mutants Summary

- **50 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 102 (killed 13 mutants)
- **Top mutator types killed**: ConditionalExpression, BlockStatement, StringLiteral

---

### 🟡 src/llm.js

**Overall Health**: 🟡 Good | **Mutation Score**: 75.3% | **Coverage**: 83.3%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 113 | 62.8% |
| ❌ Survived | 34 | 18.9% |
| 🚫 No Coverage | 30 | 16.7% |
| **Total** | **180** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Configuration
  2| // Primary model (ONNX format) – file set contains onnx/model*.onnx
  3| // Using the v3 transformers.js package already declared in package.json.
  4| const LLM_MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX';
   ✅ #402: StringLiteral → """" [0 tests]
  5| 
  6| // Local model base is read dynamically during environment configuration so tests
  7| // (or host pages) can set window.LOCAL_LLM_MODELS_BASE before first generate().
  8| 
  9| export class LLMModule {
 10|   constructor() {
   ✅ #403: BlockStatement → "{}" [19 tests]
 11|     this.pipeline = null;
 12|     this.device = null;
 13|     this.isLoading = false;
   ⚠️ #404: BooleanLiteral → "true" [19 tests]
 14|     this.setupEnvironment();
 15|   }
 16| 
 17|   setupEnvironment() {
   ✅ #405: BlockStatement → "{}" [19 tests]
 18|     // env config applied after dynamic import if not already available.
 19|     if (typeof window !== 'undefined' && window.transformers) {
   ✅ #406: ConditionalExpression → "true" [19 tests]
   ✅ #407: ConditionalExpression → "false" [19 tests]
   ✅ #408: LogicalOperator → "typeof window !== 'undefined' || window.transformers" [19 tests]
   ❌ #409: ConditionalExpression → "true" [19 tests]
   ✅ #410: EqualityOperator → "typeof window === 'undefined'" [19 tests]
   ❌ #411: StringLiteral → """" [19 tests]
   ✅ #412: BlockStatement → "{}" [1 tests]
 20|       this._configureEnv(window.transformers.env);
 21|     }
 22|   }
 23| 
 24|   _configureEnv(env) {
   ✅ #413: BlockStatement → "{}" [12 tests]
 25|     // Enable browser cache between sessions
 26|     env.useBrowserCache = true;
   ✅ #414: BooleanLiteral → "false" [12 tests]
 27|     env.allowLocalModels = true;
   ✅ #415: BooleanLiteral → "false" [12 tests]
 28|     // Allow remote models unless user explicitly sets local-only flag
 29|     const forceLocalOnly = (typeof window !== 'undefined' && window.LOCAL_LLM_LOCAL_ONLY) || false;
   ✅ #417: ConditionalExpression → "false" [12 tests]
   ❌ #416: ConditionalExpression → "true" [12 tests]
   ✅ #418: LogicalOperator → "typeof window !== 'undefined' && window.LOCAL_LLM_LOCAL_ONLY && false" [12 tests]
   ✅ #419: ConditionalExpression → "false" [12 tests]
   ❌ #420: LogicalOperator → "typeof window !== 'undefined' || window.LOCAL_LLM_LOCAL_ONLY" [12 tests]
   ❌ #421: ConditionalExpression → "true" [12 tests]
   ✅ #422: EqualityOperator → "typeof window === 'undefined'" [12 tests]
   ❌ #423: StringLiteral → """" [12 tests]
   ❌ #424: BooleanLiteral → "true" [10 tests]
 30|     env.allowRemoteModels = !forceLocalOnly;
   ✅ #425: BooleanLiteral → "forceLocalOnly" [12 tests]
 31|     const base = (typeof window !== 'undefined' && window.LOCAL_LLM_MODELS_BASE) || null;
   ✅ #426: ConditionalExpression → "true" [12 tests]
   ✅ #427: ConditionalExpression → "false" [12 tests]
   ✅ #428: LogicalOperator → "typeof window !== 'undefined' && window.LOCAL_LLM_MODELS_BASE && null" [12 tests]
   ✅ #429: ConditionalExpression → "false" [12 tests]
   ✅ #430: LogicalOperator → "typeof window !== 'undefined' || window.LOCAL_LLM_MODELS_BASE" [12 tests]
   ❌ #431: ConditionalExpression → "true" [12 tests]
   ✅ #432: EqualityOperator → "typeof window === 'undefined'" [12 tests]
   ❌ #433: StringLiteral → """" [12 tests]
 32|     if (base) {
   ✅ #434: ConditionalExpression → "true" [12 tests]
   ✅ #436: BlockStatement → "{}" [1 tests]
   ✅ #435: ConditionalExpression → "false" [12 tests]
 33|       env.localModelPath = base.endsWith('/') ? base : `${base}/`;
   ✅ #437: MethodExpression → "base.startsWith('/')" [1 tests]
   ✅ #438: StringLiteral → """" [1 tests]
   ✅ #439: StringLiteral → "``" [1 tests]
 34|     }
 35|     // Optimize ONNX WASM threads (safe fallback 4)
 36|     if (env.backends?.onnx?.wasm) {
   ❌ #440: ConditionalExpression → "true" [12 tests]
   ✅ #441: ConditionalExpression → "false" [12 tests]
   ❌ #442: OptionalChaining → "env.backends?.onnx.wasm" [12 tests]
   ❌ #443: OptionalChaining → "env.backends.onnx" [12 tests]
   ✅ #444: BlockStatement → "{}" [12 tests]
 37|       env.backends.onnx.wasm.numThreads = navigator.hardwareConcurrency || 4;
   ✅ #445: ConditionalExpression → "true" [12 tests]
   ✅ #446: ConditionalExpression → "false" [12 tests]
   ✅ #447: LogicalOperator → "navigator.hardwareConcurrency && 4" [12 tests]
 38|     }
 39|   }
 40| 
 41|   async detectDevice() {
   ✅ #448: BlockStatement → "{}" [13 tests]
 42|     // Check WebGPU availability
 43|     if (navigator.gpu) {
   ❌ #449: ConditionalExpression → "true" [13 tests]
   ✅ #451: BlockStatement → "{}" [2 tests]
   ✅ #450: ConditionalExpression → "false" [13 tests]
 44|       try {
   ✅ #452: BlockStatement → "{}" [2 tests]
 45|         const adapter = await navigator.gpu.requestAdapter();
 46|         if (adapter) {
   ❌ #453: ConditionalExpression → "true" [1 tests]
   ✅ #454: ConditionalExpression → "false" [1 tests]
   ✅ #455: BlockStatement → "{}" [1 tests]
 47|           return 'webgpu';
   ✅ #456: StringLiteral → """" [1 tests]
 48|         }
 49|       } catch {
   ❌ #457: BlockStatement → "{}" [1 tests]
 50|         console.warn('WebGPU adapter request failed');
   ❌ #458: StringLiteral → """" [1 tests]
 51|       }
 52|     }
 53|     return 'wasm';
   ✅ #459: StringLiteral → """" [13 tests]
 54|   }
 55| 
 56|   async initializePipeline(onProgress) {
   ✅ #460: BlockStatement → "{}" [12 tests]
 57|     if (this.pipeline) return this.pipeline;
   ✅ #461: ConditionalExpression → "true" [12 tests]
   ✅ #462: ConditionalExpression → "false" [12 tests]
 58|     if (this.isLoading) {
   ✅ #463: ConditionalExpression → "true" [11 tests]
   ❌ #465: BlockStatement → "{}" [1 tests]
   ❌ #464: ConditionalExpression → "false" [11 tests]
 59|       // Wait for current loading to complete
 60|       while (this.isLoading) {
   ✅ #466: ConditionalExpression → "false" [1 tests]
   ⚠️ #467: BlockStatement → "{}" [1 tests]
 61|         await new Promise(resolve => setTimeout(resolve, 100));
   ✅ #468: ArrowFunction → "() => undefined" [1 tests]
 62|       }
 63|       return this.pipeline;
 64|     }
 65| 
 66|     this.isLoading = true;
   ❌ #469: BooleanLiteral → "false" [11 tests]
 67| 
 68|     try {
   ✅ #470: BlockStatement → "{}" [11 tests]
 69|       // Dynamically import the installed v3 transformers.js package (preferred)
 70|       // Fallback: if import fails (should not in normal build), raise clear error.
 71|       let transformers;
 72|       try {
   ✅ #471: BlockStatement → "{}" [11 tests]
 73|         transformers = await import('@huggingface/transformers');
   ✅ #472: StringLiteral → """" [11 tests]
 74|       } catch {
   🚫 #473: BlockStatement → "{}" [0 tests]
 75|         throw new Error('Failed to load @huggingface/transformers package – ensure dependency is installed.');
   🚫 #474: StringLiteral → """" [0 tests]
 76|       }
 77| 
 78|       const { pipeline, env } = transformers; // v3 API
 79|       this._configureEnv(env);
 80| 
 81|       // Detect device
 82|       this.device = await this.detectDevice();
 83|       
 84|       // Create pipeline with progress callback
 85|       onProgress?.({ percentage: 0, text: 'Initializing pipeline...' });
   ✅ #475: OptionalChaining → "onProgress({
  percentage: 0,
  text: 'Initializing pipeline...'
})" [11 tests]
   ❌ #476: ObjectLiteral → "{}" [2 tests]
   ❌ #477: StringLiteral → """" [2 tests]
 86|       
 87|       this.pipeline = await pipeline('text-generation', LLM_MODEL_ID, {
   ❌ #478: StringLiteral → """" [11 tests]
   ❌ #479: ObjectLiteral → "{}" [11 tests]
 88|         device: this.device,
 89|         // Let transformers.js choose correct model.onnx / model_quantized.onnx automatically.
 90|         progress_callback: (progress) => {
   🚫 #480: BlockStatement → "{}" [0 tests]
 91|           // Some progress events may lack total; guard to avoid NaN.
 92|             const total = progress.total || progress.loaded || 1;
   🚫 #481: ConditionalExpression → "true" [0 tests]
   🚫 #482: ConditionalExpression → "false" [0 tests]
   🚫 #483: LogicalOperator → "(progress.total || progress.loaded) && 1" [0 tests]
   🚫 #484: ConditionalExpression → "false" [0 tests]
   🚫 #485: LogicalOperator → "progress.total && progress.loaded" [0 tests]
 93|             const loaded = progress.loaded || 0;
   🚫 #486: ConditionalExpression → "true" [0 tests]
   🚫 #487: ConditionalExpression → "false" [0 tests]
   🚫 #488: LogicalOperator → "progress.loaded && 0" [0 tests]
 94|             const percentage = Math.min(100, Math.max(0, Math.round((loaded / total) * 100)));
   🚫 #489: MethodExpression → "Math.max(100, Math.max(0, Math.round(loaded / total * 100)))" [0 tests]
   🚫 #490: MethodExpression → "Math.min(0, Math.round(loaded / total * 100))" [0 tests]
   🚫 #491: ArithmeticOperator → "loaded / total / 100" [0 tests]
   🚫 #492: ArithmeticOperator → "loaded * total" [0 tests]
 95|             onProgress?.({
   🚫 #493: OptionalChaining → "onProgress({
  percentage,
  text: `Loading ${progress.file || 'model'}: ${percentage}%`
})" [0 tests]
   🚫 #494: ObjectLiteral → "{}" [0 tests]
 96|               percentage,
 97|               text: `Loading ${progress.file || 'model'}: ${percentage}%`
   🚫 #495: StringLiteral → "``" [0 tests]
   🚫 #496: ConditionalExpression → "true" [0 tests]
   🚫 #497: ConditionalExpression → "false" [0 tests]
   🚫 #498: LogicalOperator → "progress.file && 'model'" [0 tests]
   🚫 #499: StringLiteral → """" [0 tests]
 98|             });
 99|         }
100|       });
101| 
102|       onProgress?.({ percentage: 100, text: 'Model loaded successfully' });
   ✅ #501: ObjectLiteral → "{}" [2 tests]
   ✅ #500: OptionalChaining → "onProgress({
  percentage: 100,
  text: 'Model loaded successfully'
})" [11 tests]
   ❌ #502: StringLiteral → """" [2 tests]
103|       return this.pipeline;
104| 
105|     } catch (error) {
   🚫 #503: BlockStatement → "{}" [0 tests]
106|       console.error('Failed to initialize LLM pipeline:', error);
   🚫 #504: StringLiteral → """" [0 tests]
107|       throw new Error(`Failed to load LLM model: ${error.message}`);
   🚫 #505: StringLiteral → "``" [0 tests]
108|     } finally {
   ✅ #506: BlockStatement → "{}" [11 tests]
109|       this.isLoading = false;
   ✅ #507: BooleanLiteral → "true" [11 tests]
110|     }
111|   }
112| 
113|   async generate(prompt, options = {}) {
   ✅ #508: BlockStatement → "{}" [12 tests]
114|     const {
115|       onToken,
116|       onProgress,
117|       maxNewTokens = 256,
118|       temperature = 0.8,
119|       topP = 0.95,
120|       doSample = true
   ❌ #509: BooleanLiteral → "false" [12 tests]
121|     } = options;
122| 
123|     try {
   ✅ #510: BlockStatement → "{}" [12 tests]
124|       // Ensure pipeline is initialized
125|       const pipeline = await this.initializePipeline(onProgress);
126| 
127|       // Format prompt for instruction-tuned model
128|       const formattedPrompt = this.formatPrompt(prompt);
129| 
130|       // Generate with streaming-enabled pipeline
131|       const generator = await pipeline(formattedPrompt, {
   ❌ #511: ObjectLiteral → "{}" [12 tests]
132|         max_new_tokens: maxNewTokens,
133|         temperature: temperature,
134|         top_p: topP,
135|         do_sample: doSample,
136|         return_full_text: false,
   ❌ #512: BooleanLiteral → "true" [12 tests]
137|         streamer_callback: onToken
138|       });
139| 
140|       // Delegate handling to helpers for clarity (streaming vs non-streaming)
141|       if (generator && typeof generator[Symbol.asyncIterator] === 'function') {
   ✅ #513: ConditionalExpression → "true" [12 tests]
   ✅ #514: ConditionalExpression → "false" [12 tests]
   ✅ #515: LogicalOperator → "generator || typeof generator[Symbol.asyncIterator] === 'function'" [12 tests]
   ✅ #516: ConditionalExpression → "true" [12 tests]
   ✅ #517: EqualityOperator → "typeof generator[Symbol.asyncIterator] !== 'function'" [12 tests]
   ✅ #519: BlockStatement → "{}" [1 tests]
   ✅ #518: StringLiteral → """" [12 tests]
142|         return await this._handleStreamingGenerator(generator, onToken);
143|       }
144| 
145|       return await this._handleNonStreamingResult(generator, onToken);
146| 
147|     } catch (error) {
   🚫 #520: BlockStatement → "{}" [0 tests]
148|       console.error('Generation failed:', error);
   🚫 #521: StringLiteral → """" [0 tests]
149|       throw new Error(`Text generation failed: ${error.message}`);
   🚫 #522: StringLiteral → "``" [0 tests]
150|     }
151|   }
152| 
153|   async _handleStreamingGenerator(generator, onToken) {
   ✅ #523: BlockStatement → "{}" [1 tests]
154|     let fullText = '';
   ✅ #524: StringLiteral → ""Stryker was here!"" [1 tests]
155|     for await (const chunk of generator) {
   ✅ #525: BlockStatement → "{}" [1 tests]
156|       const token = this.extractToken(chunk);
157|       if (token) {
   ❌ #526: ConditionalExpression → "true" [1 tests]
   ✅ #527: ConditionalExpression → "false" [1 tests]
   ✅ #528: BlockStatement → "{}" [1 tests]
158|         fullText += token;
   ✅ #529: AssignmentOperator → "fullText -= token" [1 tests]
159|         onToken?.(token);
   ❌ #530: OptionalChaining → "onToken(token)" [1 tests]
160|       }
161|     }
162|     return fullText;
163|   }
164| 
165|   async _handleNonStreamingResult(generator, onToken) {
   ✅ #531: BlockStatement → "{}" [11 tests]
166|     const result = Array.isArray(generator) ? generator[0] : generator;
167|     const text = result?.generated_text || result?.text || '';
   🚫 #538: OptionalChaining → "result.text" [0 tests]
   🚫 #539: StringLiteral → ""Stryker was here!"" [0 tests]
   ✅ #532: ConditionalExpression → "true" [11 tests]
   ✅ #533: ConditionalExpression → "false" [11 tests]
   ✅ #534: LogicalOperator → "(result?.generated_text || result?.text) && ''" [11 tests]
   ✅ #535: ConditionalExpression → "false" [11 tests]
   ✅ #536: LogicalOperator → "result?.generated_text && result?.text" [11 tests]
   ❌ #537: OptionalChaining → "result.generated_text" [11 tests]
168| 
169|     // Simulate streaming for consistency
170|     if (onToken && text) {
   ✅ #540: ConditionalExpression → "true" [11 tests]
   ✅ #541: ConditionalExpression → "false" [11 tests]
   ✅ #542: LogicalOperator → "onToken || text" [11 tests]
   ✅ #543: BlockStatement → "{}" [3 tests]
171|       const tokens = this.tokenizeForDisplay(text);
172|       for (const token of tokens) {
   ✅ #544: BlockStatement → "{}" [3 tests]
173|         onToken(token);
174|         await new Promise(resolve => setTimeout(resolve, 50));
   ⚠️ #545: ArrowFunction → "() => undefined" [3 tests]
175|       }
176|     }
177| 
178|     return text;
179|   }
180| 
181|   formatPrompt(prompt) {
   ✅ #546: BlockStatement → "{}" [13 tests]
182|     // Format for instruction-tuned models (Qwen2.5 format)
183|     return `<|im_start|>system
   ✅ #547: StringLiteral → "``" [13 tests]
184| You are a helpful assistant.<|im_end|>
185| <|im_start|>user
186| ${prompt}<|im_end|>
187| <|im_start|>assistant
188| `;
189|   }
190| 
191|   extractToken(chunk) {
   ✅ #548: BlockStatement → "{}" [3 tests]
192|     // Extract token from different possible chunk formats
193|     if (typeof chunk === 'string') {
   ✅ #549: ConditionalExpression → "true" [3 tests]
   ✅ #550: ConditionalExpression → "false" [3 tests]
   ✅ #551: EqualityOperator → "typeof chunk !== 'string'" [3 tests]
   ✅ #552: StringLiteral → """" [3 tests]
   ✅ #553: BlockStatement → "{}" [1 tests]
194|       return chunk;
195|     }
196|     if (chunk && chunk.token) {
   ✅ #554: ConditionalExpression → "true" [3 tests]
   ✅ #555: ConditionalExpression → "false" [3 tests]
   ✅ #556: LogicalOperator → "chunk || chunk.token" [3 tests]
   ✅ #557: BlockStatement → "{}" [3 tests]
197|       return chunk.token.text || chunk.token;
   ✅ #558: ConditionalExpression → "true" [3 tests]
   ✅ #559: ConditionalExpression → "false" [3 tests]
   ✅ #560: LogicalOperator → "chunk.token.text && chunk.token" [3 tests]
198|     }
199|     if (chunk && chunk.generated_text) {
   ✅ #561: ConditionalExpression → "true" [2 tests]
   ✅ #562: ConditionalExpression → "false" [2 tests]
   ✅ #563: LogicalOperator → "chunk || chunk.generated_text" [2 tests]
   ✅ #564: BlockStatement → "{}" [2 tests]
200|       return chunk.generated_text;
201|     }
202|     return '';
   ✅ #565: StringLiteral → ""Stryker was here!"" [1 tests]
203|   }
204| 
205|   tokenizeForDisplay(text) {
   ✅ #566: BlockStatement → "{}" [4 tests]
206|     // Simple tokenization for display purposes
207|     // In a real implementation, this could use the model's actual tokenizer
208|     const words = text.split(/(\s+)/);
   ❌ #567: Regex → "/(\s)/" [4 tests]
   ❌ #568: Regex → "/(\S+)/" [4 tests]
209|     const tokens = [];
   ✅ #569: ArrayDeclaration → "["Stryker was here"]" [4 tests]
210|     
211|     for (const word of words) {
   ✅ #570: BlockStatement → "{}" [4 tests]
212|       if (word.length > 0) {
   ❌ #571: ConditionalExpression → "true" [4 tests]
   ❌ #573: EqualityOperator → "word.length >= 0" [4 tests]
   ✅ #572: ConditionalExpression → "false" [4 tests]
   ✅ #574: EqualityOperator → "word.length <= 0" [4 tests]
   ✅ #575: BlockStatement → "{}" [4 tests]
213|         tokens.push(word);
214|       }
215|     }
216|     
217|     return tokens;
218|   }
219| 
220|   getDevice() {
   ✅ #576: BlockStatement → "{}" [1 tests]
221|     return this.device;
222|   }
223| 
224|   getModelId() {
   ✅ #577: BlockStatement → "{}" [1 tests]
225|     return LLM_MODEL_ID;
226|   }
227| 
228|   isInitialized() {
   ✅ #578: BlockStatement → "{}" [1 tests]
229|     return this.pipeline !== null;
   ✅ #579: ConditionalExpression → "true" [1 tests]
   ✅ #580: ConditionalExpression → "false" [1 tests]
   ✅ #581: EqualityOperator → "this.pipeline === null" [1 tests]
230|   }
231| }
232| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #409** - Line 19:9-38
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 120, 121, 122, 141, 142

2. **Mutant #411** - Line 19:27-38
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 120, 121, 122, 141, 142

3. **Mutant #416** - Line 29:28-99
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

4. **Mutant #420** - Line 29:29-89
   - **Mutator**: `LogicalOperator` → `typeof window !== 'undefined' || window.LOCAL_LLM_LOCAL_ONLY`
   - **Issue**: Unknown
   - **Fix**: Test all logical combinations (&&, ||)
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

5. **Mutant #421** - Line 29:29-58
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

6. **Mutant #423** - Line 29:47-58
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

7. **Mutant #424** - Line 29:94-99
   - **Mutator**: `BooleanLiteral` → `true`
   - **Issue**: Unknown
   - **Fix**: Verify behavior with both true and false values
   - **Tests that should have caught this**: 64, 65, 66, 69, 71, 74, 120, 121, 122, 141

8. **Mutant #431** - Line 31:19-48
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

9. **Mutant #433** - Line 31:37-48
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

10. **Mutant #440** - Line 36:9-33
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 64, 65, 66, 69, 70, 71, 74, 120, 121, 122, 141, 142

#### 🚫 Coverage Gaps Summary

- **30 uncovered mutants** across 15 lines
- **Most affected lines**: 74, 75, 90, 92, 93
- **Common uncovered operations**: StringLiteral, ConditionalExpression, BlockStatement

##### Detailed No Coverage Mutants:
1. **Mutant #473** - Line 74:15-8: `BlockStatement` → `{}`
2. **Mutant #474** - Line 75:25-109: `StringLiteral` → `""`
3. **Mutant #480** - Line 90:42-10: `BlockStatement` → `{}`
4. **Mutant #481** - Line 92:27-65: `ConditionalExpression` → `true`
5. **Mutant #482** - Line 92:27-65: `ConditionalExpression` → `false`
6. **Mutant #483** - Line 92:27-65: `LogicalOperator` → `(progress.total || progress.loaded) && 1`
7. **Mutant #484** - Line 92:27-60: `ConditionalExpression` → `false`
8. **Mutant #485** - Line 92:27-60: `LogicalOperator` → `progress.total && progress.loaded`
9. **Mutant #486** - Line 93:28-48: `ConditionalExpression` → `true`
10. **Mutant #487** - Line 93:28-48: `ConditionalExpression` → `false`
11. **Mutant #488** - Line 93:28-48: `LogicalOperator` → `progress.loaded && 0`
12. **Mutant #489** - Line 94:32-94: `MethodExpression` → `Math.max(100, Math.max(0, Math.round(loaded / total * 100)))`
13. **Mutant #490** - Line 94:46-93: `MethodExpression` → `Math.min(0, Math.round(loaded / total * 100))`
14. **Mutant #491** - Line 94:69-91: `ArithmeticOperator` → `loaded / total / 100`
15. **Mutant #492** - Line 94:70-84: `ArithmeticOperator` → `loaded * total`
16. **Mutant #493** - Line 95:13-15: `OptionalChaining` → `onProgress({
  percentage,
  text: `Loading ${progress.file || 'model'}: ${percentage}%`
})`
17. **Mutant #494** - Line 95:26-14: `ObjectLiteral` → `{}`
18. **Mutant #495** - Line 97:21-74: `StringLiteral` → ````
19. **Mutant #496** - Line 97:32-56: `ConditionalExpression` → `true`
20. **Mutant #497** - Line 97:32-56: `ConditionalExpression` → `false`
21. **Mutant #498** - Line 97:32-56: `LogicalOperator` → `progress.file && 'model'`
22. **Mutant #499** - Line 97:49-56: `StringLiteral` → `""`
23. **Mutant #503** - Line 105:21-6: `BlockStatement` → `{}`
24. **Mutant #504** - Line 106:21-57: `StringLiteral` → `""`
25. **Mutant #505** - Line 107:23-67: `StringLiteral` → ````
26. **Mutant #520** - Line 147:21-6: `BlockStatement` → `{}`
27. **Mutant #521** - Line 148:21-41: `StringLiteral` → `""`
28. **Mutant #522** - Line 149:23-65: `StringLiteral` → ````
29. **Mutant #538** - Line 167:44-56: `OptionalChaining` → `result.text`
30. **Mutant #539** - Line 167:60-62: `StringLiteral` → `"Stryker was here!"`

#### ✅ Successfully Killed Mutants Summary

- **113 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 121 (killed 29 mutants)
- **Top mutator types killed**: ConditionalExpression, BlockStatement, LogicalOperator

---

### 🟡 src/tts.js

**Overall Health**: 🟡 Good | **Mutation Score**: 60.2% | **Coverage**: 82.2%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 225 | 49.5% |
| ❌ Survived | 134 | 29.5% |
| 🚫 No Coverage | 81 | 17.8% |
| **Total** | **455** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Configuration
  2| const FALLBACK_TO_WEB_SPEECH = true;
   ✅ #582: BooleanLiteral → "false" [0 tests]
  3| 
  4| export class TTSModule {
  5|   constructor() {
   ✅ #583: BlockStatement → "{}" [45 tests]
  6|     this.kokoroModel = null;
  7|     this.useWebSpeech = false;
   ✅ #584: BooleanLiteral → "true" [45 tests]
  8|     this.isLoading = false;
   ⚠️ #585: BooleanLiteral → "true" [45 tests]
  9|     this.currentUtterance = null;
 10|     this.currentSplitter = null;
 11|     this.sentences = [];
   ❌ #586: ArrayDeclaration → "["Stryker was here"]" [45 tests]
 12|     this.currentSentenceIndex = 0;
 13|     this.isPaused = false;
   ⚠️ #587: BooleanLiteral → "true" [45 tests]
 14|     this.isStopped = false;
   ✅ #588: BooleanLiteral → "true" [45 tests]
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
   ❌ #589: BlockStatement → "{}" [45 tests]
 25|     if ('speechSynthesis' in window && speechSynthesis) {
   ✅ #590: ConditionalExpression → "true" [45 tests]
   ❌ #591: ConditionalExpression → "false" [45 tests]
   ✅ #592: LogicalOperator → "'speechSynthesis' in window || speechSynthesis" [45 tests]
   ❌ #593: StringLiteral → """" [45 tests]
   ❌ #594: BlockStatement → "{}" [45 tests]
 26|       // Load voices
 27|       this.loadVoices();
 28|       
 29|       // Handle voice changes
 30|       speechSynthesis.addEventListener('voiceschanged', () => {
   🚫 #596: BlockStatement → "{}" [0 tests]
   ❌ #595: StringLiteral → """" [45 tests]
 31|         this.loadVoices();
 32|       });
 33|     }
 34|   }
 35| 
 36|   loadVoices() {
   ✅ #597: BlockStatement → "{}" [45 tests]
 37|     if (!('speechSynthesis' in window) || !speechSynthesis) return;
   ✅ #598: ConditionalExpression → "true" [45 tests]
   ✅ #599: ConditionalExpression → "false" [45 tests]
   ✅ #600: LogicalOperator → "!('speechSynthesis' in window) && !speechSynthesis" [45 tests]
   ✅ #601: BooleanLiteral → "'speechSynthesis' in window" [45 tests]
   ✅ #602: StringLiteral → """" [45 tests]
   ✅ #603: BooleanLiteral → "speechSynthesis" [45 tests]
 38|     
 39|     const voices = speechSynthesis.getVoices();
 40|     const voiceSelect = (typeof document !== 'undefined' && typeof document.getElementById === 'function')
   ❌ #604: ConditionalExpression → "true" [45 tests]
   ✅ #605: ConditionalExpression → "false" [45 tests]
   ❌ #606: LogicalOperator → "typeof document !== 'undefined' || typeof document.getElementById === 'function'" [45 tests]
   ❌ #607: ConditionalExpression → "true" [45 tests]
   ✅ #608: EqualityOperator → "typeof document === 'undefined'" [45 tests]
   ❌ #609: StringLiteral → """" [45 tests]
   ❌ #610: ConditionalExpression → "true" [45 tests]
   ✅ #611: EqualityOperator → "typeof document.getElementById !== 'function'" [45 tests]
   ✅ #612: StringLiteral → """" [45 tests]
 41|       ? document.getElementById('tts-voice')
   ❌ #613: StringLiteral → """" [45 tests]
 42|       : null;
 43| 
 44|     if (voiceSelect && voices.length > 0) {
   ✅ #614: ConditionalExpression → "true" [45 tests]
   ✅ #616: LogicalOperator → "voiceSelect || voices.length > 0" [45 tests]
   ✅ #615: ConditionalExpression → "false" [45 tests]
   ❌ #617: ConditionalExpression → "true" [36 tests]
   ❌ #618: EqualityOperator → "voices.length >= 0" [36 tests]
   ✅ #619: EqualityOperator → "voices.length <= 0" [36 tests]
   ✅ #620: BlockStatement → "{}" [36 tests]
 45|       // Best-effort: only set innerHTML if supported
 46|       if (typeof voiceSelect.innerHTML === 'string') {
   ❌ #621: ConditionalExpression → "true" [36 tests]
   ❌ #622: ConditionalExpression → "false" [36 tests]
   ❌ #623: EqualityOperator → "typeof voiceSelect.innerHTML !== 'string'" [36 tests]
   ❌ #624: StringLiteral → """" [36 tests]
   ❌ #625: BlockStatement → "{}" [35 tests]
 47|         voiceSelect.innerHTML = '';
   ❌ #626: StringLiteral → ""Stryker was here!"" [35 tests]
 48|       }
 49| 
 50|       voices.forEach((voice, index) => {
   ✅ #627: BlockStatement → "{}" [36 tests]
 51|         const option = (typeof document !== 'undefined' && typeof document.createElement === 'function')
   ❌ #628: ConditionalExpression → "true" [36 tests]
   ❌ #629: ConditionalExpression → "false" [36 tests]
   ❌ #630: LogicalOperator → "typeof document !== 'undefined' || typeof document.createElement === 'function'" [36 tests]
   ❌ #631: ConditionalExpression → "true" [36 tests]
   ❌ #632: EqualityOperator → "typeof document === 'undefined'" [36 tests]
   ❌ #633: StringLiteral → """" [36 tests]
   ❌ #634: ConditionalExpression → "true" [36 tests]
   ❌ #635: EqualityOperator → "typeof document.createElement !== 'function'" [36 tests]
   ❌ #636: StringLiteral → """" [36 tests]
 52|           ? document.createElement('option')
   ✅ #637: StringLiteral → """" [36 tests]
 53|           : { value: '', textContent: '', selected: false };
   🚫 #638: ObjectLiteral → "{}" [0 tests]
   🚫 #639: StringLiteral → ""Stryker was here!"" [0 tests]
   🚫 #640: StringLiteral → ""Stryker was here!"" [0 tests]
   🚫 #641: BooleanLiteral → "true" [0 tests]
 54| 
 55|         option.value = index;
 56|         option.textContent = `${voice.name} (${voice.lang})`;
   ❌ #642: StringLiteral → "``" [36 tests]
 57|         if (voice.default) {
   ✅ #643: ConditionalExpression → "true" [36 tests]
   ❌ #645: BlockStatement → "{}" [2 tests]
   ❌ #644: ConditionalExpression → "false" [36 tests]
 58|           option.selected = true;
   ❌ #646: BooleanLiteral → "false" [2 tests]
 59|           this.selectedVoice = voice;
 60|         }
 61| 
 62|         // Append option in a safe manner depending on what's available on the mocked element
 63|         if (typeof voiceSelect.appendChild === 'function') {
   ✅ #647: ConditionalExpression → "true" [36 tests]
   ✅ #648: ConditionalExpression → "false" [36 tests]
   ✅ #649: EqualityOperator → "typeof voiceSelect.appendChild !== 'function'" [36 tests]
   ✅ #651: BlockStatement → "{}" [27 tests]
   ✅ #650: StringLiteral → """" [36 tests]
 64|           voiceSelect.appendChild(option);
 65|         } else if (typeof voiceSelect.append === 'function') {
   🚫 #656: BlockStatement → "{}" [0 tests]
   ✅ #652: ConditionalExpression → "true" [9 tests]
   ✅ #653: ConditionalExpression → "false" [9 tests]
   ✅ #654: EqualityOperator → "typeof voiceSelect.append !== 'function'" [9 tests]
   ✅ #655: StringLiteral → """" [9 tests]
 66|           try { voiceSelect.append(option); } catch { /* ignore */ }
   🚫 #657: BlockStatement → "{}" [0 tests]
 67|         } else {
   ✅ #658: BlockStatement → "{}" [9 tests]
 68|           // If append isn't available, store options array so tests can inspect if needed
 69|           voiceSelect.options = voiceSelect.options || [];
   ✅ #659: ConditionalExpression → "true" [9 tests]
   ✅ #660: ConditionalExpression → "false" [9 tests]
   ✅ #661: LogicalOperator → "voiceSelect.options && []" [9 tests]
   ✅ #662: ArrayDeclaration → "["Stryker was here"]" [2 tests]
 70|           voiceSelect.options.push(option);
 71|         }
 72|       });
 73| 
 74|       if (!this.selectedVoice && voices.length > 0) {
   ❌ #663: ConditionalExpression → "true" [36 tests]
   ✅ #664: ConditionalExpression → "false" [36 tests]
   ❌ #665: LogicalOperator → "!this.selectedVoice || voices.length > 0" [36 tests]
   ✅ #666: BooleanLiteral → "this.selectedVoice" [36 tests]
   ❌ #667: ConditionalExpression → "true" [34 tests]
   ❌ #668: EqualityOperator → "voices.length >= 0" [34 tests]
   ✅ #669: EqualityOperator → "voices.length <= 0" [34 tests]
   ✅ #670: BlockStatement → "{}" [34 tests]
 75|         this.selectedVoice = voices[0];
 76|       }
 77|     }
 78|   }
 79| 
 80|   async initializeKokoro(onProgress) {
   ✅ #671: BlockStatement → "{}" [8 tests]
 81|     if (this.kokoroModel) return this.kokoroModel;
   ✅ #672: ConditionalExpression → "true" [8 tests]
   ✅ #673: ConditionalExpression → "false" [8 tests]
 82|     if (this.isLoading) {
   ✅ #674: ConditionalExpression → "true" [8 tests]
   ✅ #675: ConditionalExpression → "false" [8 tests]
   ✅ #676: BlockStatement → "{}" [1 tests]
 83|       return await this._waitForLoading();
 84|     }
 85| 
 86|     this.isLoading = true;
   ✅ #677: BooleanLiteral → "false" [7 tests]
 87| 
 88|     try {
   ✅ #678: BlockStatement → "{}" [7 tests]
 89|       return await this._loadKokoroModel(onProgress);
 90|     } catch (error) {
   ✅ #679: BlockStatement → "{}" [4 tests]
 91|       return this._handleKokoroLoadError(error, onProgress);
 92|     } finally {
   ✅ #680: BlockStatement → "{}" [7 tests]
 93|       this.isLoading = false;
   ✅ #681: BooleanLiteral → "true" [7 tests]
 94|     }
 95|   }
 96| 
 97|   async _waitForLoading() {
   ✅ #682: BlockStatement → "{}" [1 tests]
 98|     while (this.isLoading) {
   ✅ #683: ConditionalExpression → "false" [1 tests]
   ⚠️ #684: BlockStatement → "{}" [1 tests]
 99|       await new Promise(resolve => setTimeout(resolve, 100));
   ✅ #685: ArrowFunction → "() => undefined" [1 tests]
100|     }
101|     return this.kokoroModel;
102|   }
103| 
104|   async _loadKokoroModel(onProgress) {
   ✅ #686: BlockStatement → "{}" [7 tests]
105|     onProgress?.({ percentage: 0, text: 'Loading Kokoro TTS model...' });
   ✅ #687: OptionalChaining → "onProgress({
  percentage: 0,
  text: 'Loading Kokoro TTS model...'
})" [7 tests]
   ✅ #688: ObjectLiteral → "{}" [3 tests]
   ✅ #689: StringLiteral → """" [3 tests]
106|     
107|     // Check for WebGPU availability first
108|     if (!navigator.gpu) {
   ✅ #690: BooleanLiteral → "navigator.gpu" [7 tests]
   ✅ #691: ConditionalExpression → "true" [7 tests]
   ✅ #692: ConditionalExpression → "false" [7 tests]
   ✅ #693: BlockStatement → "{}" [3 tests]
109|       throw new Error('WebGPU not available');
   ✅ #694: StringLiteral → """" [3 tests]
110|     }
111| 
112|     // Try to load Kokoro model
113|     const { KokoroTTS } = await import('kokoro-js');
   ✅ #695: StringLiteral → """" [5 tests]
114|     
115|     this.kokoroModel = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
   ✅ #696: StringLiteral → """" [5 tests]
   ✅ #697: ObjectLiteral → "{}" [5 tests]
116|       dtype: "fp32",
   ✅ #698: StringLiteral → """" [5 tests]
117|       device: "webgpu",
   ✅ #699: StringLiteral → """" [5 tests]
118|       progress_callback: (item) => {
   ✅ #700: BlockStatement → "{}" [1 tests]
119|         if (item.status === "progress" && item.file?.endsWith?.("onnx")) {
   ✅ #701: ConditionalExpression → "true" [1 tests]
   ✅ #702: ConditionalExpression → "false" [1 tests]
   ✅ #703: LogicalOperator → "item.status === "progress" || item.file?.endsWith?.("onnx")" [1 tests]
   ✅ #704: ConditionalExpression → "true" [1 tests]
   ✅ #705: EqualityOperator → "item.status !== "progress"" [1 tests]
   ✅ #706: StringLiteral → """" [1 tests]
   ✅ #707: MethodExpression → "item.file?.startsWith?.("onnx")" [1 tests]
   ✅ #708: OptionalChaining → "item.file?.endsWith("onnx")" [1 tests]
   ✅ #709: OptionalChaining → "item.file.endsWith" [1 tests]
   ✅ #710: StringLiteral → """" [1 tests]
   ✅ #711: BlockStatement → "{}" [1 tests]
120|           const progress = Math.round(item.progress * 100);
   ✅ #712: ArithmeticOperator → "item.progress / 100" [1 tests]
121|           onProgress?.({ percentage: progress, text: `Loading Kokoro model: ${progress}%` });
   ✅ #713: OptionalChaining → "onProgress({
  percentage: progress,
  text: `Loading Kokoro model: ${progress}%`
})" [1 tests]
   ✅ #714: ObjectLiteral → "{}" [1 tests]
   ✅ #715: StringLiteral → "``" [1 tests]
122|         }
123|       },
124|     });
125| 
126|     onProgress?.({ percentage: 100, text: 'Kokoro TTS loaded successfully' });
   ✅ #716: OptionalChaining → "onProgress({
  percentage: 100,
  text: 'Kokoro TTS loaded successfully'
})" [4 tests]
   ✅ #717: ObjectLiteral → "{}" [2 tests]
   ✅ #718: StringLiteral → """" [2 tests]
127|     this.useWebSpeech = false;
   ✅ #719: BooleanLiteral → "true" [4 tests]
128|     return this.kokoroModel;
129|   }
130| 
131|   _handleKokoroLoadError(error, onProgress) {
   ✅ #720: BlockStatement → "{}" [4 tests]
132|     console.warn('Kokoro TTS not available, falling back to Web Speech API:', error);
   ✅ #721: StringLiteral → """" [4 tests]
133| 
134|     if (FALLBACK_TO_WEB_SPEECH && 'speechSynthesis' in window) {
   ✅ #722: ConditionalExpression → "true" [4 tests]
   ✅ #723: ConditionalExpression → "false" [4 tests]
   ✅ #724: LogicalOperator → "FALLBACK_TO_WEB_SPEECH || 'speechSynthesis' in window" [4 tests]
   ✅ #726: BlockStatement → "{}" [3 tests]
   ✅ #725: StringLiteral → """" [4 tests]
135|       this.useWebSpeech = true;
   ✅ #727: BooleanLiteral → "false" [3 tests]
136|       onProgress?.({ percentage: 100, text: 'Using Web Speech API' });
   ✅ #728: OptionalChaining → "onProgress({
  percentage: 100,
  text: 'Using Web Speech API'
})" [3 tests]
   ✅ #729: ObjectLiteral → "{}" [1 tests]
   ✅ #730: StringLiteral → """" [1 tests]
137|       return 'web-speech';
   ✅ #731: StringLiteral → """" [3 tests]
138|     } else {
   ✅ #732: BlockStatement → "{}" [1 tests]
139|       throw new Error('No TTS system available');
   ✅ #733: StringLiteral → """" [1 tests]
140|     }
141|   }
142| 
143|   async _simulateModelLoad(onProgress) {
   🚫 #734: BlockStatement → "{}" [0 tests]
144|     for (let i = 0; i <= 100; i += 10) {
   🚫 #735: ConditionalExpression → "false" [0 tests]
   🚫 #736: EqualityOperator → "i < 100" [0 tests]
   🚫 #737: EqualityOperator → "i > 100" [0 tests]
   🚫 #738: AssignmentOperator → "i -= 10" [0 tests]
   🚫 #739: BlockStatement → "{}" [0 tests]
145|       onProgress?.({ percentage: i, text: `Loading Kokoro model: ${i}%` });
   🚫 #740: OptionalChaining → "onProgress({
  percentage: i,
  text: `Loading Kokoro model: ${i}%`
})" [0 tests]
   🚫 #741: ObjectLiteral → "{}" [0 tests]
   🚫 #742: StringLiteral → "``" [0 tests]
146|       await new Promise(resolve => setTimeout(resolve, 100));
   🚫 #743: ArrowFunction → "() => undefined" [0 tests]
147|     }
148|   }
149| 
150|   splitIntoSentences(text) {
   ✅ #744: BlockStatement → "{}" [6 tests]
151|     // Simple sentence splitting
152|     return text
   ✅ #745: MethodExpression → "text.split(/[.!?]+/).map(s => s.trim())" [6 tests]
153|       .split(/[.!?]+/)
   ❌ #746: Regex → "/[.!?]/" [6 tests]
   ✅ #747: Regex → "/[^.!?]+/" [6 tests]
154|       .map(s => s.trim())
   ✅ #748: ArrowFunction → "() => undefined" [6 tests]
   ✅ #749: MethodExpression → "s" [6 tests]
155|       .filter(s => s.length > 0)
   ✅ #750: ArrowFunction → "() => undefined" [6 tests]
   ✅ #751: ConditionalExpression → "true" [6 tests]
   ✅ #752: ConditionalExpression → "false" [6 tests]
   ✅ #753: EqualityOperator → "s.length >= 0" [6 tests]
   ✅ #754: EqualityOperator → "s.length <= 0" [6 tests]
156|       .map(s => s + '.');
   ✅ #755: ArrowFunction → "() => undefined" [6 tests]
   ✅ #756: StringLiteral → """" [6 tests]
157|   }
158| 
159|   async speak(text, options = {}) {
   ✅ #757: BlockStatement → "{}" [2 tests]
160|     const { outputElement, onProgress, audioModule } = options;
161| 
162|     try {
   ✅ #758: BlockStatement → "{}" [2 tests]
163|       // Initialize TTS system
164|       await this.initializeKokoro(onProgress);
165|       
166|       // Split text into sentences
167|       this.sentences = this.splitIntoSentences(text);
168|       this.currentSentenceIndex = 0;
169|       this.isStopped = false;
   ❌ #759: BooleanLiteral → "true" [1 tests]
170|       this.isPaused = false;
   ❌ #760: BooleanLiteral → "true" [1 tests]
171| 
172|       // Display sentences in output element
173|       if (outputElement) {
   ❌ #761: ConditionalExpression → "true" [1 tests]
   ❌ #763: BlockStatement → "{}" [1 tests]
   ❌ #762: ConditionalExpression → "false" [1 tests]
174|         this.displaySentences(outputElement);
175|       }
176| 
177|       if (this.useWebSpeech) {
   ❌ #764: ConditionalExpression → "true" [1 tests]
   ✅ #765: ConditionalExpression → "false" [1 tests]
   ✅ #766: BlockStatement → "{}" [1 tests]
178|         await this.speakWithWebSpeech(outputElement);
179|       } else {
   🚫 #767: BlockStatement → "{}" [0 tests]
180|         await this.speakWithKokoro(audioModule, outputElement);
181|       }
182| 
183|     } catch (error) {
   ✅ #768: BlockStatement → "{}" [1 tests]
184|       console.error('TTS failed:', error);
   ❌ #769: StringLiteral → """" [1 tests]
185|       throw error;
186|     }
187|   }
188| 
189|   displaySentences(outputElement) {
   ✅ #770: BlockStatement → "{}" [4 tests]
190|     outputElement.innerHTML = '';
   ✅ #771: StringLiteral → ""Stryker was here!"" [4 tests]
191|     
192|     this.sentences.forEach((sentence, index) => {
   ✅ #772: BlockStatement → "{}" [4 tests]
193|       const span = document.createElement('span');
   ✅ #773: StringLiteral → """" [4 tests]
194|       span.textContent = sentence + ' ';
   ❌ #774: StringLiteral → """" [4 tests]
195|       span.id = `sentence-${index}`;
   ❌ #775: StringLiteral → "``" [4 tests]
196|       span.className = 'sentence';
   ❌ #776: StringLiteral → """" [4 tests]
197|       outputElement.appendChild(span);
198|     });
199|   }
200| 
201|   async speakWithWebSpeech(outputElement) {
   ⚠️ #777: BlockStatement → "{}" [7 tests]
202|     return new Promise((resolve, reject) => {
   ⚠️ #778: BlockStatement → "{}" [7 tests]
203|       let currentIndex = 0;
204| 
205|       const speakNext = () => {
   ⚠️ #779: BlockStatement → "{}" [7 tests]
206|         if (currentIndex >= this.sentences.length || this.isStopped) {
   ⚠️ #780: ConditionalExpression → "true" [7 tests]
   ✅ #782: LogicalOperator → "currentIndex >= this.sentences.length && this.isStopped" [7 tests]
   ⚠️ #781: ConditionalExpression → "false" [7 tests]
   ✅ #784: EqualityOperator → "currentIndex > this.sentences.length" [7 tests]
   ✅ #783: ConditionalExpression → "false" [7 tests]
   ⚠️ #785: EqualityOperator → "currentIndex < this.sentences.length" [7 tests]
   ⚠️ #786: BlockStatement → "{}" [4 tests]
207|           resolve();
208|           return;
209|         }
210| 
211|         if (this.isPaused) {
   ⚠️ #787: ConditionalExpression → "true" [6 tests]
   ✅ #788: ConditionalExpression → "false" [6 tests]
   ✅ #789: BlockStatement → "{}" [1 tests]
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
   ❌ #790: ConditionalExpression → "true" [6 tests]
   ❌ #791: ConditionalExpression → "false" [6 tests]
   ❌ #792: BlockStatement → "{}" [6 tests]
223|           utterance.voice = this.selectedVoice;
224|         }
225|         utterance.rate = this.rate;
226|         utterance.pitch = this.pitch;
227| 
228|         utterance.onstart = () => {
   ❌ #793: BlockStatement → "{}" [1 tests]
229|           if (outputElement) {
   ❌ #794: ConditionalExpression → "true" [1 tests]
   ❌ #795: ConditionalExpression → "false" [1 tests]
   ❌ #796: BlockStatement → "{}" [1 tests]
230|             this.markSentenceSpoken(currentIndex);
231|           }
232|         };
233| 
234|         // Small safety timer in case the environment (or test mocks) do not
235|         // invoke the utterance callbacks. This prevents the promise from
236|         // hanging in test environments where speechSynthesis is a no-op.
237|         let safetyTimer = null;
238|         const clearSafety = () => {
   ✅ #797: BlockStatement → "{}" [6 tests]
239|           if (safetyTimer) {
   ❌ #798: ConditionalExpression → "true" [6 tests]
   ✅ #799: ConditionalExpression → "false" [6 tests]
   ✅ #800: BlockStatement → "{}" [5 tests]
240|             clearTimeout(safetyTimer);
241|             safetyTimer = null;
242|           }
243|         };
244| 
245|         utterance.onend = () => {
   ✅ #801: BlockStatement → "{}" [3 tests]
246|           clearSafety();
247|           currentIndex++;
   ✅ #802: UpdateOperator → "currentIndex--" [3 tests]
248|           setTimeout(speakNext, 100); // Small delay between sentences
249|         };
250| 
251|         // If onerror is called, also clear safety timer
252|         const originalOnError = utterance.onerror;
253|         utterance.onerror = (event) => {
   ✅ #803: BlockStatement → "{}" [2 tests]
254|           clearSafety();
255|           if (typeof originalOnError === 'function') {
   ❌ #804: ConditionalExpression → "true" [2 tests]
   ✅ #805: ConditionalExpression → "false" [2 tests]
   ✅ #806: EqualityOperator → "typeof originalOnError !== 'function'" [2 tests]
   ✅ #808: BlockStatement → "{}" [1 tests]
   ✅ #807: StringLiteral → """" [2 tests]
256|             try { originalOnError.call(utterance, event); } catch { /* ignore */ }
   ✅ #809: BlockStatement → "{}" [1 tests]
257|           }
258|           console.error('Speech synthesis error:', event);
   ❌ #810: StringLiteral → """" [2 tests]
259|           reject(new Error('Speech synthesis failed'));
   ✅ #811: StringLiteral → """" [2 tests]
260|         };
261| 
262|         // Start a safety timer to auto-advance if no events fire.
263|         safetyTimer = setTimeout(() => {
   ✅ #812: BlockStatement → "{}" [2 tests]
264|           safetyTimer = null;
265|           // Try to simulate onend to keep behavior consistent
266|           try {
   ✅ #813: BlockStatement → "{}" [2 tests]
267|             if (typeof utterance.onend === 'function') utterance.onend();
   ❌ #814: ConditionalExpression → "true" [2 tests]
   ✅ #815: ConditionalExpression → "false" [2 tests]
   ✅ #816: EqualityOperator → "typeof utterance.onend !== 'function'" [2 tests]
   ✅ #817: StringLiteral → """" [2 tests]
268|           } catch {
   🚫 #818: BlockStatement → "{}" [0 tests]
269|             // ignore
270|             currentIndex++;
   🚫 #819: UpdateOperator → "currentIndex--" [0 tests]
271|             setTimeout(speakNext, 100);
272|           }
273|         }, 250);
274| 
275|         // Finally, request speech. If speak throws, clear safety and reject.
276|         try {
   ✅ #820: BlockStatement → "{}" [6 tests]
277|           speechSynthesis.speak(utterance);
278|         } catch (e) {
   ❌ #821: BlockStatement → "{}" [1 tests]
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
   ✅ #822: BlockStatement → "{}" [4 tests]
289|     // Import Kokoro TTS modules
290|     const { KokoroTTS, TextSplitterStream } = await import('kokoro-js');
   ✅ #823: StringLiteral → """" [4 tests]
291|     
292|     // 0) Guards
293|     if (!navigator.gpu) {
   🚫 #827: BlockStatement → "{}" [0 tests]
   ✅ #824: BooleanLiteral → "navigator.gpu" [4 tests]
   ✅ #825: ConditionalExpression → "true" [4 tests]
   ❌ #826: ConditionalExpression → "false" [4 tests]
294|       throw new Error("WebGPU is required for Kokoro TTS");
   🚫 #828: StringLiteral → """" [0 tests]
295|     }
296|     if (!audioModule?.port) {
   ✅ #829: BooleanLiteral → "audioModule?.port" [4 tests]
   ✅ #830: ConditionalExpression → "true" [4 tests]
   ✅ #831: ConditionalExpression → "false" [4 tests]
   ✅ #832: OptionalChaining → "audioModule.port" [4 tests]
   ✅ #833: BlockStatement → "{}" [1 tests]
297|       throw new Error("Audio worklet not initialized");
   ✅ #834: StringLiteral → """" [1 tests]
298|     }
299| 
300|     // 1) Load TTS model (cache instance in class to avoid reloading)
301|     if (!this.kokoroModel) {
   ❌ #835: BooleanLiteral → "this.kokoroModel" [3 tests]
   ❌ #836: ConditionalExpression → "true" [3 tests]
   ❌ #837: ConditionalExpression → "false" [3 tests]
   ❌ #838: BlockStatement → "{}" [1 tests]
302|       this.kokoroModel = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
   ❌ #839: StringLiteral → """" [1 tests]
   ❌ #840: ObjectLiteral → "{}" [1 tests]
303|         dtype: "fp32",
   ❌ #841: StringLiteral → """" [1 tests]
304|         device: "webgpu",
   ❌ #842: StringLiteral → """" [1 tests]
305|         progress_callback: (item) => {
   🚫 #843: BlockStatement → "{}" [0 tests]
306|           if (item.status === "progress" && item.file?.endsWith?.("onnx")) {
   🚫 #844: ConditionalExpression → "true" [0 tests]
   🚫 #845: ConditionalExpression → "false" [0 tests]
   🚫 #846: LogicalOperator → "item.status === "progress" || item.file?.endsWith?.("onnx")" [0 tests]
   🚫 #847: ConditionalExpression → "true" [0 tests]
   🚫 #848: EqualityOperator → "item.status !== "progress"" [0 tests]
   🚫 #849: StringLiteral → """" [0 tests]
   🚫 #850: MethodExpression → "item.file?.startsWith?.("onnx")" [0 tests]
   🚫 #851: OptionalChaining → "item.file?.endsWith("onnx")" [0 tests]
   🚫 #852: OptionalChaining → "item.file.endsWith" [0 tests]
   🚫 #853: StringLiteral → """" [0 tests]
   🚫 #854: BlockStatement → "{}" [0 tests]
307|             // Update progress for ONNX files only
308|             const progress = Math.round(item.progress * 100);
   🚫 #855: ArithmeticOperator → "item.progress / 100" [0 tests]
309|             console.log(`Loading Kokoro model: ${progress}%`);
   🚫 #856: StringLiteral → "``" [0 tests]
310|             // You can emit a progress event here if needed
311|           }
312|         },
313|       });
314|     }
315| 
316|     // 2) Get text content and prepare sentences
317|     const text = outputElement.textContent ?? "";
   🚫 #858: StringLiteral → ""Stryker was here!"" [0 tests]
   ✅ #857: LogicalOperator → "outputElement.textContent && """ [3 tests]
318|     if (!text.trim()) {
   ✅ #859: BooleanLiteral → "text.trim()" [3 tests]
   ✅ #860: ConditionalExpression → "true" [3 tests]
   ✅ #861: ConditionalExpression → "false" [3 tests]
   ✅ #863: BlockStatement → "{}" [1 tests]
   ✅ #862: MethodExpression → "text" [3 tests]
319|       throw new Error("No text content to speak");
   ✅ #864: StringLiteral → """" [1 tests]
320|     }
321| 
322|     // Split into sentences and render as spans for highlighting
323|     this.sentences = this.splitIntoSentences(text);
324|     this.displaySentences(outputElement);
325| 
326|     // 3) Initialize tracking variables
327|     this.pendingTexts = [];
   ❌ #865: ArrayDeclaration → "["Stryker was here"]" [2 tests]
328|     this.currentSentenceIndex = 0;
329|     this.isStopped = false;
   ✅ #866: BooleanLiteral → "true" [2 tests]
330|     this.isPaused = false;
   ❌ #867: BooleanLiteral → "true" [2 tests]
331| 
332|     // 4) Set up worklet message handler
333|     const originalHandler = audioModule.port.onmessage;
334|     const onWorkletMsg = (evt) => {
   🚫 #868: BlockStatement → "{}" [0 tests]
335|       const data = evt?.data;
   🚫 #869: OptionalChaining → "evt.data" [0 tests]
336|       if (!data || typeof data !== "object") return;
   🚫 #870: ConditionalExpression → "true" [0 tests]
   🚫 #871: ConditionalExpression → "false" [0 tests]
   🚫 #872: LogicalOperator → "!data && typeof data !== "object"" [0 tests]
   🚫 #873: BooleanLiteral → "data" [0 tests]
   🚫 #874: ConditionalExpression → "false" [0 tests]
   🚫 #875: EqualityOperator → "typeof data === "object"" [0 tests]
   🚫 #876: StringLiteral → """" [0 tests]
337|       
338|       if (data.type === "next_chunk") {
   🚫 #877: ConditionalExpression → "true" [0 tests]
   🚫 #878: ConditionalExpression → "false" [0 tests]
   🚫 #879: EqualityOperator → "data.type !== "next_chunk"" [0 tests]
   🚫 #880: StringLiteral → """" [0 tests]
   🚫 #881: BlockStatement → "{}" [0 tests]
339|         this.advanceHighlight();
340|       } else if (data.type === "playback_ended") {
   🚫 #882: ConditionalExpression → "true" [0 tests]
   🚫 #883: ConditionalExpression → "false" [0 tests]
   🚫 #884: EqualityOperator → "data.type !== "playback_ended"" [0 tests]
   🚫 #885: StringLiteral → """" [0 tests]
   🚫 #886: BlockStatement → "{}" [0 tests]
341|         this.finalizeUIState();
342|       }
343|       
344|       // Call original handler if it exists
345|       if (originalHandler) {
   🚫 #887: ConditionalExpression → "true" [0 tests]
   🚫 #888: ConditionalExpression → "false" [0 tests]
   🚫 #889: BlockStatement → "{}" [0 tests]
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
   ✅ #890: BlockStatement → "{}" [2 tests]
357|       try {
   ✅ #891: BlockStatement → "{}" [2 tests]
358|         for await (const chunk of stream) {
   ✅ #892: BlockStatement → "{}" [2 tests]
359|           if (this.isStopped) break;
   ✅ #893: ConditionalExpression → "true" [2 tests]
   ❌ #894: ConditionalExpression → "false" [2 tests]
360|           
361|           if (chunk.audio && chunk.audio.audio) {
   ❌ #895: ConditionalExpression → "true" [2 tests]
   ✅ #896: ConditionalExpression → "false" [2 tests]
   ❌ #897: LogicalOperator → "chunk.audio || chunk.audio.audio" [2 tests]
   ✅ #898: BlockStatement → "{}" [2 tests]
362|             // Send Float32Array PCM data to worklet
363|             audioModule.port.postMessage(chunk.audio.audio);
364|           }
365|           
366|           if (chunk.text) {
   ❌ #899: ConditionalExpression → "true" [2 tests]
   ❌ #900: ConditionalExpression → "false" [2 tests]
   ❌ #901: BlockStatement → "{}" [2 tests]
367|             this.pendingTexts.push(chunk.text);
368|             this.tryResolveHighlights();
369|           }
370|         }
371|       } catch (error) {
   🚫 #902: BlockStatement → "{}" [0 tests]
372|         console.error('TTS streaming error:', error);
   🚫 #903: StringLiteral → """" [0 tests]
373|         throw error;
374|       }
375|     })();
376| 
377|     // 7) Feed text to splitter
378|     try {
   ❌ #904: BlockStatement → "{}" [2 tests]
379|       for (const sentence of this.sentences) {
   ❌ #905: BlockStatement → "{}" [2 tests]
380|         if (this.isStopped) break;
   ❌ #906: ConditionalExpression → "true" [2 tests]
   ❌ #907: ConditionalExpression → "false" [2 tests]
381|         this.currentSplitter.push(sentence + " ");
   ❌ #908: StringLiteral → """" [2 tests]
382|       }
383|       this.currentSplitter.close();
384| 
385|       // Wait for stream to complete
386|       await consume;
387|       
388|     } catch (error) {
   🚫 #909: BlockStatement → "{}" [0 tests]
389|       console.error('Kokoro TTS failed:', error);
   🚫 #910: StringLiteral → """" [0 tests]
390|       throw error;
391|     } finally {
   ❌ #911: BlockStatement → "{}" [2 tests]
392|       // Restore original message handler
393|       audioModule.port.onmessage = originalHandler;
394|       this.currentSplitter = null;
395|     }
396|   }
397| 
398|   // Helper method to advance sentence highlighting
399|   advanceHighlight() {
   🚫 #912: BlockStatement → "{}" [0 tests]
400|     if (this.currentSentenceIndex < this.sentences.length) {
   🚫 #913: ConditionalExpression → "true" [0 tests]
   🚫 #914: ConditionalExpression → "false" [0 tests]
   🚫 #915: EqualityOperator → "this.currentSentenceIndex <= this.sentences.length" [0 tests]
   🚫 #916: EqualityOperator → "this.currentSentenceIndex >= this.sentences.length" [0 tests]
   🚫 #917: BlockStatement → "{}" [0 tests]
401|       this.markSentenceSpoken(this.currentSentenceIndex);
402|       this.currentSentenceIndex++;
   🚫 #918: UpdateOperator → "this.currentSentenceIndex--" [0 tests]
403|     }
404|   }
405| 
406|   // Helper method to finalize UI state when playback ends
407|   finalizeUIState() {
   🚫 #919: BlockStatement → "{}" [0 tests]
408|     this.isStopped = true;
   🚫 #920: BooleanLiteral → "false" [0 tests]
409|     this.isPaused = false;
   🚫 #921: BooleanLiteral → "true" [0 tests]
410|     this.currentSentenceIndex = 0;
411|     
412|     // Clear all highlights
413|     document.querySelectorAll('.sentence.spoken').forEach(el => {
   🚫 #922: StringLiteral → """" [0 tests]
   🚫 #923: BlockStatement → "{}" [0 tests]
414|       el.classList.remove('spoken');
   🚫 #924: StringLiteral → """" [0 tests]
415|     });
416|   }
417| 
418|   // Helper method to try resolving pending text snippets to highlights
419|   tryResolveHighlights() {
   ❌ #925: BlockStatement → "{}" [2 tests]
420|     // For simplicity, we'll assume the chunks align with sentences
421|     // In a more sophisticated implementation, you would normalize text
422|     // and map character ranges as described in the reference
423|     while (this.pendingTexts.length > 0 && this.currentSentenceIndex < this.sentences.length) {
   ❌ #926: ConditionalExpression → "false" [2 tests]
   ⚠️ #927: LogicalOperator → "this.pendingTexts.length > 0 || this.currentSentenceIndex < this.sentences.length" [2 tests]
   ⚠️ #928: ConditionalExpression → "true" [2 tests]
   ❌ #930: EqualityOperator → "this.pendingTexts.length <= 0" [2 tests]
   ⚠️ #929: EqualityOperator → "this.pendingTexts.length >= 0" [2 tests]
   ❌ #931: ConditionalExpression → "true" [2 tests]
   ❌ #932: EqualityOperator → "this.currentSentenceIndex <= this.sentences.length" [2 tests]
   ❌ #933: EqualityOperator → "this.currentSentenceIndex >= this.sentences.length" [2 tests]
   ⚠️ #934: BlockStatement → "{}" [2 tests]
424|       const pendingText = this.pendingTexts.shift();
425|       // Simple matching - in production you'd want more robust text alignment
426|       if (pendingText && pendingText.trim()) {
   ❌ #935: ConditionalExpression → "true" [2 tests]
   ❌ #936: ConditionalExpression → "false" [2 tests]
   ❌ #937: LogicalOperator → "pendingText || pendingText.trim()" [2 tests]
   ❌ #938: MethodExpression → "pendingText" [2 tests]
427|         // Text is available, highlight will be triggered by worklet next_chunk message
428|       }
429|     }
430|   }
431| 
432|   markSentenceSpoken(index) {
   ❌ #939: BlockStatement → "{}" [5 tests]
433|     const sentenceEl = (typeof document !== 'undefined' && typeof document.getElementById === 'function')
   ❌ #940: ConditionalExpression → "true" [5 tests]
   ❌ #941: ConditionalExpression → "false" [5 tests]
   ❌ #942: LogicalOperator → "typeof document !== 'undefined' || typeof document.getElementById === 'function'" [5 tests]
   ❌ #943: ConditionalExpression → "true" [5 tests]
   ❌ #944: EqualityOperator → "typeof document === 'undefined'" [5 tests]
   ❌ #945: StringLiteral → """" [5 tests]
   ❌ #946: ConditionalExpression → "true" [5 tests]
   ❌ #947: EqualityOperator → "typeof document.getElementById !== 'function'" [5 tests]
   ❌ #948: StringLiteral → """" [5 tests]
434|       ? document.getElementById(`sentence-${index}`)
   ❌ #949: StringLiteral → "``" [5 tests]
435|       : null;
436| 
437|     // Remove previous highlights (guarded)
438|     if (typeof document !== 'undefined' && typeof document.querySelectorAll === 'function') {
   ❌ #950: ConditionalExpression → "true" [5 tests]
   ❌ #951: ConditionalExpression → "false" [5 tests]
   ❌ #952: LogicalOperator → "typeof document !== 'undefined' || typeof document.querySelectorAll === 'function'" [5 tests]
   ❌ #953: ConditionalExpression → "true" [5 tests]
   ❌ #954: EqualityOperator → "typeof document === 'undefined'" [5 tests]
   ❌ #955: StringLiteral → """" [5 tests]
   ❌ #956: ConditionalExpression → "true" [5 tests]
   ❌ #957: EqualityOperator → "typeof document.querySelectorAll !== 'function'" [5 tests]
   ❌ #958: StringLiteral → """" [5 tests]
   ❌ #959: BlockStatement → "{}" [5 tests]
439|       const prev = document.querySelectorAll('.sentence.spoken') || [];
   ✅ #960: ConditionalExpression → "true" [5 tests]
   ✅ #961: ConditionalExpression → "false" [5 tests]
   ✅ #963: StringLiteral → """" [5 tests]
   ❌ #964: ArrayDeclaration → "["Stryker was here"]" [1 tests]
   ✅ #962: LogicalOperator → "document.querySelectorAll('.sentence.spoken') && []" [5 tests]
440|       prev.forEach(el => {
   ❌ #965: BlockStatement → "{}" [2 tests]
441|         if (el && el.classList && typeof el.classList.remove === 'function') {
   ✅ #966: ConditionalExpression → "true" [2 tests]
   ❌ #967: ConditionalExpression → "false" [2 tests]
   ✅ #968: LogicalOperator → "el && el.classList || typeof el.classList.remove === 'function'" [2 tests]
   ✅ #969: ConditionalExpression → "true" [2 tests]
   ✅ #970: LogicalOperator → "el || el.classList" [2 tests]
   ❌ #971: ConditionalExpression → "true" [2 tests]
   ❌ #972: EqualityOperator → "typeof el.classList.remove !== 'function'" [2 tests]
   ❌ #973: StringLiteral → """" [2 tests]
   ❌ #974: BlockStatement → "{}" [2 tests]
442|           el.classList.remove('spoken');
   ✅ #975: StringLiteral → """" [2 tests]
443|         }
444|       });
445|     }
446| 
447|     // Highlight current sentence if possible
448|     if (sentenceEl && sentenceEl.classList && typeof sentenceEl.classList.add === 'function') {
   🚫 #981: ConditionalExpression → "true" [0 tests]
   🚫 #982: EqualityOperator → "typeof sentenceEl.classList.add !== 'function'" [0 tests]
   🚫 #983: StringLiteral → """" [0 tests]
   🚫 #984: BlockStatement → "{}" [0 tests]
   ✅ #976: ConditionalExpression → "true" [5 tests]
   ✅ #978: LogicalOperator → "sentenceEl && sentenceEl.classList || typeof sentenceEl.classList.add === 'function'" [5 tests]
   ✅ #979: ConditionalExpression → "true" [5 tests]
   ❌ #977: ConditionalExpression → "false" [5 tests]
   ✅ #980: LogicalOperator → "sentenceEl || sentenceEl.classList" [5 tests]
449|       sentenceEl.classList.add('spoken');
   🚫 #985: StringLiteral → """" [0 tests]
450|     }
451| 
452|     this.currentSentenceIndex = index;
453|   }
454| 
455|   pause() {
   ✅ #986: BlockStatement → "{}" [1 tests]
456|     if (this.useWebSpeech) {
   ❌ #987: ConditionalExpression → "true" [1 tests]
   ✅ #988: ConditionalExpression → "false" [1 tests]
   ✅ #989: BlockStatement → "{}" [1 tests]
457|       speechSynthesis.pause();
458|     }
459|     this.isPaused = true;
   ✅ #990: BooleanLiteral → "false" [1 tests]
460|   }
461| 
462|   resume() {
   ✅ #991: BlockStatement → "{}" [1 tests]
463|     if (this.useWebSpeech) {
   ❌ #992: ConditionalExpression → "true" [1 tests]
   ✅ #993: ConditionalExpression → "false" [1 tests]
   ✅ #994: BlockStatement → "{}" [1 tests]
464|       speechSynthesis.resume();
465|     }
466|     this.isPaused = false;
   ✅ #995: BooleanLiteral → "true" [1 tests]
467|   }
468| 
469|   stop() {
   ✅ #996: BlockStatement → "{}" [4 tests]
470|     this.isStopped = true;
   ✅ #997: BooleanLiteral → "false" [4 tests]
471|     this.isPaused = false;
   ❌ #998: BooleanLiteral → "true" [4 tests]
472|     
473|     if (this.useWebSpeech) {
   ❌ #999: ConditionalExpression → "true" [4 tests]
   ✅ #1000: ConditionalExpression → "false" [4 tests]
   ✅ #1001: BlockStatement → "{}" [1 tests]
474|       speechSynthesis.cancel();
475|     }
476|     
477|     // For Kokoro, stop the stream and clear worklet queue
478|     if (this.currentSplitter) {
   ❌ #1002: ConditionalExpression → "true" [4 tests]
   ✅ #1003: ConditionalExpression → "false" [4 tests]
   ✅ #1004: BlockStatement → "{}" [3 tests]
479|       try {
   ✅ #1005: BlockStatement → "{}" [3 tests]
480|         this.currentSplitter.close?.();
   ❌ #1006: OptionalChaining → "this.currentSplitter.close()" [3 tests]
481|       } catch {
482|         // Ignore errors when closing splitter
483|       }
484|       this.currentSplitter = null;
485|     }
486|     
487|     // Clear highlights
488|     document.querySelectorAll('.sentence.spoken').forEach(el => {
   ✅ #1007: StringLiteral → """" [4 tests]
   ❌ #1008: BlockStatement → "{}" [1 tests]
489|       if (el && el.classList) {
   ❌ #1009: ConditionalExpression → "true" [1 tests]
   ❌ #1010: ConditionalExpression → "false" [1 tests]
   ❌ #1012: BlockStatement → "{}" [1 tests]
   ❌ #1011: LogicalOperator → "el || el.classList" [1 tests]
490|         el.classList.remove('spoken');
   ❌ #1013: StringLiteral → """" [1 tests]
491|       }
492|     });
493|     
494|     this.currentSentenceIndex = 0;
495|   }
496| 
497|   setRate(rate) {
   ✅ #1014: BlockStatement → "{}" [1 tests]
498|     this.rate = rate;
499|   }
500| 
501|   setPitch(pitch) {
   ✅ #1015: BlockStatement → "{}" [1 tests]
502|     this.pitch = pitch;
503|   }
504| 
505|   setVoice(voiceIndex) {
   ✅ #1016: BlockStatement → "{}" [2 tests]
506|     const voices = speechSynthesis.getVoices();
507|     if (voices[voiceIndex]) {
   ✅ #1017: ConditionalExpression → "true" [2 tests]
   ✅ #1018: ConditionalExpression → "false" [2 tests]
   ✅ #1019: BlockStatement → "{}" [1 tests]
508|       this.selectedVoice = voices[voiceIndex];
509|     }
510|   }
511| 
512|   getAvailableVoices() {
   ✅ #1020: BlockStatement → "{}" [1 tests]
513|     return speechSynthesis.getVoices();
514|   }
515| 
516|   isWebSpeechAvailable() {
   ✅ #1021: BlockStatement → "{}" [1 tests]
517|     return 'speechSynthesis' in window;
   ✅ #1022: StringLiteral → """" [1 tests]
518|   }
519| 
520|   isKokoroAvailable() {
   ✅ #1023: BlockStatement → "{}" [2 tests]
521|     return this.kokoroModel !== null;
   ✅ #1024: ConditionalExpression → "true" [2 tests]
   ✅ #1025: ConditionalExpression → "false" [2 tests]
   ✅ #1026: EqualityOperator → "this.kokoroModel === null" [2 tests]
522|   }
523| 
524|   getCurrentSystem() {
   ✅ #1027: BlockStatement → "{}" [1 tests]
525|     if (this.kokoroModel && !this.useWebSpeech) return 'kokoro';
   ✅ #1028: ConditionalExpression → "true" [1 tests]
   ✅ #1029: ConditionalExpression → "false" [1 tests]
   ✅ #1030: LogicalOperator → "this.kokoroModel || !this.useWebSpeech" [1 tests]
   ✅ #1031: BooleanLiteral → "this.useWebSpeech" [1 tests]
   ✅ #1032: StringLiteral → """" [1 tests]
526|     if (this.useWebSpeech) return 'web-speech';
   ✅ #1034: ConditionalExpression → "false" [1 tests]
   ✅ #1033: ConditionalExpression → "true" [1 tests]
   ✅ #1035: StringLiteral → """" [1 tests]
527|     return 'none';
   ✅ #1036: StringLiteral → """" [1 tests]
528|   }
529| }
530| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #586** - Line 11:22-24
   - **Mutator**: `ArrayDeclaration` → `["Stryker was here"]`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

2. **Mutant #589** - Line 24:25-4
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

3. **Mutant #591** - Line 25:9-55
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

4. **Mutant #593** - Line 25:9-26
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

5. **Mutant #594** - Line 25:57-6
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

6. **Mutant #595** - Line 30:40-55
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

7. **Mutant #604** - Line 40:26-106
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

8. **Mutant #606** - Line 40:26-106
   - **Mutator**: `LogicalOperator` → `typeof document !== 'undefined' || typeof document.getElementById === 'function'`
   - **Issue**: Unknown
   - **Fix**: Test all logical combinations (&&, ||)
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

9. **Mutant #607** - Line 40:26-57
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

10. **Mutant #609** - Line 40:46-57
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 75, 76, 77, 78, 79

#### 🚫 Coverage Gaps Summary

- **81 uncovered mutants** across 38 lines
- **Most affected lines**: 30, 53, 65, 66, 143
- **Common uncovered operations**: BlockStatement, StringLiteral, ConditionalExpression

##### Detailed No Coverage Mutants:
1. **Mutant #596** - Line 30:63-8: `BlockStatement` → `{}`
2. **Mutant #638** - Line 53:13-60: `ObjectLiteral` → `{}`
3. **Mutant #639** - Line 53:22-24: `StringLiteral` → `"Stryker was here!"`
4. **Mutant #640** - Line 53:39-41: `StringLiteral` → `"Stryker was here!"`
5. **Mutant #641** - Line 53:53-58: `BooleanLiteral` → `true`
6. **Mutant #656** - Line 65:62-10: `BlockStatement` → `{}`
7. **Mutant #657** - Line 66:15-46: `BlockStatement` → `{}`
8. **Mutant #734** - Line 143:40-4: `BlockStatement` → `{}`
9. **Mutant #735** - Line 144:21-29: `ConditionalExpression` → `false`
10. **Mutant #736** - Line 144:21-29: `EqualityOperator` → `i < 100`
11. **Mutant #737** - Line 144:21-29: `EqualityOperator` → `i > 100`
12. **Mutant #738** - Line 144:31-38: `AssignmentOperator` → `i -= 10`
13. **Mutant #739** - Line 144:40-6: `BlockStatement` → `{}`
14. **Mutant #740** - Line 145:7-75: `OptionalChaining` → `onProgress({
  percentage: i,
  text: `Loading Kokoro model: ${i}%`
})`
15. **Mutant #741** - Line 145:20-74: `ObjectLiteral` → `{}`
16. **Mutant #742** - Line 145:43-72: `StringLiteral` → ````
17. **Mutant #743** - Line 146:25-60: `ArrowFunction` → `() => undefined`
18. **Mutant #767** - Line 179:14-8: `BlockStatement` → `{}`
19. **Mutant #818** - Line 268:19-12: `BlockStatement` → `{}`
20. **Mutant #819** - Line 270:13-27: `UpdateOperator` → `currentIndex--`
21. **Mutant #827** - Line 293:25-6: `BlockStatement` → `{}`
22. **Mutant #828** - Line 294:23-58: `StringLiteral` → `""`
23. **Mutant #843** - Line 305:38-10: `BlockStatement` → `{}`
24. **Mutant #844** - Line 306:15-74: `ConditionalExpression` → `true`
25. **Mutant #845** - Line 306:15-74: `ConditionalExpression` → `false`
26. **Mutant #846** - Line 306:15-74: `LogicalOperator` → `item.status === "progress" || item.file?.endsWith?.("onnx")`
27. **Mutant #847** - Line 306:15-41: `ConditionalExpression` → `true`
28. **Mutant #848** - Line 306:15-41: `EqualityOperator` → `item.status !== "progress"`
29. **Mutant #849** - Line 306:31-41: `StringLiteral` → `""`
30. **Mutant #850** - Line 306:45-74: `MethodExpression` → `item.file?.startsWith?.("onnx")`
31. **Mutant #851** - Line 306:45-74: `OptionalChaining` → `item.file?.endsWith("onnx")`
32. **Mutant #852** - Line 306:45-64: `OptionalChaining` → `item.file.endsWith`
33. **Mutant #853** - Line 306:67-73: `StringLiteral` → `""`
34. **Mutant #854** - Line 306:76-12: `BlockStatement` → `{}`
35. **Mutant #855** - Line 308:41-60: `ArithmeticOperator` → `item.progress / 100`
36. **Mutant #856** - Line 309:25-61: `StringLiteral` → ````
37. **Mutant #858** - Line 317:47-49: `StringLiteral` → `"Stryker was here!"`
38. **Mutant #868** - Line 334:35-6: `BlockStatement` → `{}`
39. **Mutant #869** - Line 335:20-29: `OptionalChaining` → `evt.data`
40. **Mutant #870** - Line 336:11-44: `ConditionalExpression` → `true`
41. **Mutant #871** - Line 336:11-44: `ConditionalExpression` → `false`
42. **Mutant #872** - Line 336:11-44: `LogicalOperator` → `!data && typeof data !== "object"`
43. **Mutant #873** - Line 336:11-16: `BooleanLiteral` → `data`
44. **Mutant #874** - Line 336:20-44: `ConditionalExpression` → `false`
45. **Mutant #875** - Line 336:20-44: `EqualityOperator` → `typeof data === "object"`
46. **Mutant #876** - Line 336:36-44: `StringLiteral` → `""`
47. **Mutant #877** - Line 338:11-37: `ConditionalExpression` → `true`
48. **Mutant #878** - Line 338:11-37: `ConditionalExpression` → `false`
49. **Mutant #879** - Line 338:11-37: `EqualityOperator` → `data.type !== "next_chunk"`
50. **Mutant #880** - Line 338:25-37: `StringLiteral` → `""`
51. **Mutant #881** - Line 338:39-8: `BlockStatement` → `{}`
52. **Mutant #882** - Line 340:18-48: `ConditionalExpression` → `true`
53. **Mutant #883** - Line 340:18-48: `ConditionalExpression` → `false`
54. **Mutant #884** - Line 340:18-48: `EqualityOperator` → `data.type !== "playback_ended"`
55. **Mutant #885** - Line 340:32-48: `StringLiteral` → `""`
56. **Mutant #886** - Line 340:50-8: `BlockStatement` → `{}`
57. **Mutant #887** - Line 345:11-26: `ConditionalExpression` → `true`
58. **Mutant #888** - Line 345:11-26: `ConditionalExpression` → `false`
59. **Mutant #889** - Line 345:28-8: `BlockStatement` → `{}`
60. **Mutant #902** - Line 371:23-8: `BlockStatement` → `{}`
61. **Mutant #903** - Line 372:23-45: `StringLiteral` → `""`
62. **Mutant #909** - Line 388:21-6: `BlockStatement` → `{}`
63. **Mutant #910** - Line 389:21-41: `StringLiteral` → `""`
64. **Mutant #912** - Line 399:22-4: `BlockStatement` → `{}`
65. **Mutant #913** - Line 400:9-58: `ConditionalExpression` → `true`
66. **Mutant #914** - Line 400:9-58: `ConditionalExpression` → `false`
67. **Mutant #915** - Line 400:9-58: `EqualityOperator` → `this.currentSentenceIndex <= this.sentences.length`
68. **Mutant #916** - Line 400:9-58: `EqualityOperator` → `this.currentSentenceIndex >= this.sentences.length`
69. **Mutant #917** - Line 400:60-6: `BlockStatement` → `{}`
70. **Mutant #918** - Line 402:7-34: `UpdateOperator` → `this.currentSentenceIndex--`
71. **Mutant #919** - Line 407:21-4: `BlockStatement` → `{}`
72. **Mutant #920** - Line 408:22-26: `BooleanLiteral` → `false`
73. **Mutant #921** - Line 409:21-26: `BooleanLiteral` → `true`
74. **Mutant #922** - Line 413:31-49: `StringLiteral` → `""`
75. **Mutant #923** - Line 413:65-6: `BlockStatement` → `{}`
76. **Mutant #924** - Line 414:27-35: `StringLiteral` → `""`
77. **Mutant #981** - Line 448:47-93: `ConditionalExpression` → `true`
78. **Mutant #982** - Line 448:47-93: `EqualityOperator` → `typeof sentenceEl.classList.add !== 'function'`
79. **Mutant #983** - Line 448:83-93: `StringLiteral` → `""`
80. **Mutant #984** - Line 448:95-6: `BlockStatement` → `{}`
81. **Mutant #985** - Line 449:32-40: `StringLiteral` → `""`

#### ✅ Successfully Killed Mutants Summary

- **225 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 34 (killed 22 mutants)
- **Top mutator types killed**: BlockStatement, ConditionalExpression, StringLiteral

---

### 🔴 src/worklet.js

**Overall Health**: 🔴 Needs Improvement | **Mutation Score**: 25.0% | **Coverage**: 85.4%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 35 | 21.3% |
| ❌ Survived | 102 | 62.2% |
| 🚫 No Coverage | 24 | 14.6% |
| **Total** | **164** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // AudioWorklet processor for PCM audio playback
  2| class PCMQueueProcessor extends AudioWorkletProcessor {
  3|   constructor() {
   ✅ #1166: BlockStatement → "{}" [5 tests]
  4|     super();
  5|     
  6|     // Audio queue and playback state
  7|     this.audioQueue = [];
   ✅ #1167: ArrayDeclaration → "["Stryker was here"]" [5 tests]
  8|     this.currentBuffer = null;
  9|     this.bufferPosition = 0;
 10|     this.chunkIndex = 0;
 11|     this.isPaused = false;
   ❌ #1168: BooleanLiteral → "true" [5 tests]
 12|     this.isPlaying = false;
   ❌ #1169: BooleanLiteral → "true" [5 tests]
 13|     
 14|     // Ring buffer for smooth playback
 15|     this.ringBuffer = new Float32Array(sampleRate * 2); // 2 seconds buffer
   ❌ #1170: ArithmeticOperator → "sampleRate / 2" [5 tests]
 16|     this.writePosition = 0;
 17|     this.readPosition = 0;
 18|     this.availableSamples = 0;
 19|     
 20|     // Handle messages from main thread
 21|     this.port.onmessage = (event) => {
   🚫 #1171: BlockStatement → "{}" [0 tests]
 22|       this.handleMessage(event.data);
 23|     };
 24|   }
 25| 
 26|   handleMessage(data) {
   ✅ #1172: BlockStatement → "{}" [2 tests]
 27|     if (typeof data === 'object' && data !== null) {
   ❌ #1173: ConditionalExpression → "true" [2 tests]
   ✅ #1174: ConditionalExpression → "false" [2 tests]
   ❌ #1175: LogicalOperator → "typeof data === 'object' || data !== null" [2 tests]
   ❌ #1176: ConditionalExpression → "true" [2 tests]
   ✅ #1177: EqualityOperator → "typeof data !== 'object'" [2 tests]
   ✅ #1178: StringLiteral → """" [2 tests]
   ❌ #1179: ConditionalExpression → "true" [2 tests]
   ✅ #1180: EqualityOperator → "data === null" [2 tests]
   ✅ #1181: BlockStatement → "{}" [2 tests]
 28|       const { type } = data;
 29|       
 30|       switch (type) {
 31|         case 'queue-audio':
   ✅ #1182: ConditionalExpression → "case 'queue-audio':" [2 tests]
   ✅ #1183: StringLiteral → """" [2 tests]
 32|           this.queueAudio(data.audioData, data.metadata);
 33|           break;
 34|         case 'pause':
   ✅ #1184: ConditionalExpression → "case 'pause':" [1 tests]
   ✅ #1185: StringLiteral → """" [1 tests]
 35|           this.isPaused = true;
   ✅ #1186: BooleanLiteral → "false" [1 tests]
 36|           break;
 37|         case 'resume':
   ❌ #1187: ConditionalExpression → "case 'resume':" [1 tests]
   ✅ #1188: StringLiteral → """" [1 tests]
 38|           this.isPaused = false;
   ✅ #1189: BooleanLiteral → "true" [1 tests]
 39|           break;
 40|         case 'stop':
   ✅ #1190: ConditionalExpression → "case 'stop':" [1 tests]
   ✅ #1191: StringLiteral → """" [1 tests]
 41|           this.stop();
 42|           break;
 43|       }
 44|     } else if (data instanceof Float32Array) {
   🚫 #1192: ConditionalExpression → "true" [0 tests]
   🚫 #1193: ConditionalExpression → "false" [0 tests]
   🚫 #1194: BlockStatement → "{}" [0 tests]
 45|       // Direct Float32Array data from Kokoro
 46|       this.queueAudio(data);
 47|     }
 48|   }
 49| 
 50|   queueAudio(audioData, metadata = {}) {
   ✅ #1195: BlockStatement → "{}" [3 tests]
 51|     // Convert to Float32Array if needed
 52|     let float32Data;
 53|     if (audioData instanceof Float32Array) {
   ✅ #1197: ConditionalExpression → "false" [3 tests]
   ✅ #1196: ConditionalExpression → "true" [3 tests]
   ✅ #1198: BlockStatement → "{}" [2 tests]
 54|       float32Data = audioData;
 55|     } else if (audioData instanceof Array) {
   🚫 #1201: BlockStatement → "{}" [0 tests]
   ✅ #1199: ConditionalExpression → "true" [1 tests]
   ❌ #1200: ConditionalExpression → "false" [1 tests]
 56|       float32Data = new Float32Array(audioData);
 57|     } else {
   ✅ #1202: BlockStatement → "{}" [1 tests]
 58|       console.error('Invalid audio data type');
   ❌ #1203: StringLiteral → """" [1 tests]
 59|       return;
 60|     }
 61| 
 62|     this.audioQueue.push({
   ✅ #1204: ObjectLiteral → "{}" [2 tests]
 63|       data: float32Data,
 64|       metadata: {
   ❌ #1205: ObjectLiteral → "{}" [2 tests]
 65|         ...metadata,
 66|         chunkIndex: this.chunkIndex++
   ❌ #1206: UpdateOperator → "this.chunkIndex--" [2 tests]
 67|       }
 68|     });
 69| 
 70|     // Fill ring buffer
 71|     this.fillRingBuffer();
 72|   }
 73| 
 74|   fillRingBuffer() {
   ✅ #1207: BlockStatement → "{}" [3 tests]
 75|     while (this.audioQueue.length > 0 && this.availableSamples < this.ringBuffer.length * 0.8) {
   ✅ #1208: ConditionalExpression → "false" [3 tests]
   ✅ #1209: LogicalOperator → "this.audioQueue.length > 0 || this.availableSamples < this.ringBuffer.length * 0.8" [3 tests]
   ✅ #1210: ConditionalExpression → "true" [3 tests]
   ✅ #1211: EqualityOperator → "this.audioQueue.length >= 0" [3 tests]
   ❌ #1213: ConditionalExpression → "true" [2 tests]
   ✅ #1212: EqualityOperator → "this.audioQueue.length <= 0" [3 tests]
   ❌ #1214: EqualityOperator → "this.availableSamples <= this.ringBuffer.length * 0.8" [2 tests]
   ✅ #1215: EqualityOperator → "this.availableSamples >= this.ringBuffer.length * 0.8" [2 tests]
   ❌ #1216: ArithmeticOperator → "this.ringBuffer.length / 0.8" [2 tests]
   ⚠️ #1217: BlockStatement → "{}" [2 tests]
 76|       const chunk = this.audioQueue.shift();
 77|       const data = chunk.data;
 78|       
 79|       for (let i = 0; i < data.length; i++) {
   ❌ #1218: ConditionalExpression → "false" [2 tests]
   ❌ #1219: EqualityOperator → "i <= data.length" [2 tests]
   ❌ #1220: EqualityOperator → "i >= data.length" [2 tests]
   ❌ #1222: BlockStatement → "{}" [2 tests]
   ⚠️ #1221: UpdateOperator → "i--" [2 tests]
 80|         this.ringBuffer[this.writePosition] = data[i];
 81|         this.writePosition = (this.writePosition + 1) % this.ringBuffer.length;
   ❌ #1223: ArithmeticOperator → "(this.writePosition + 1) * this.ringBuffer.length" [2 tests]
   ❌ #1224: ArithmeticOperator → "this.writePosition - 1" [2 tests]
 82|         this.availableSamples++;
   ❌ #1225: UpdateOperator → "this.availableSamples--" [2 tests]
 83|         
 84|         // Prevent buffer overflow
 85|         if (this.availableSamples >= this.ringBuffer.length) {
   🚫 #1230: BlockStatement → "{}" [0 tests]
   ❌ #1226: ConditionalExpression → "true" [2 tests]
   ❌ #1227: ConditionalExpression → "false" [2 tests]
   ❌ #1228: EqualityOperator → "this.availableSamples > this.ringBuffer.length" [2 tests]
   ❌ #1229: EqualityOperator → "this.availableSamples < this.ringBuffer.length" [2 tests]
 86|           break;
 87|         }
 88|       }
 89|       
 90|       // Notify that chunk has been queued
 91|       this.port.postMessage({
   ✅ #1231: ObjectLiteral → "{}" [2 tests]
 92|         type: 'chunk-queued',
   ✅ #1232: StringLiteral → """" [2 tests]
 93|         data: chunk.metadata
 94|       });
 95|     }
 96|   }
 97| 
 98|   stop() {
   ✅ #1233: BlockStatement → "{}" [1 tests]
 99|     this.audioQueue = [];
   ❌ #1234: ArrayDeclaration → "["Stryker was here"]" [1 tests]
100|     this.currentBuffer = null;
101|     this.bufferPosition = 0;
102|     this.isPaused = false;
   ❌ #1235: BooleanLiteral → "true" [1 tests]
103|     this.isPlaying = false;
   ❌ #1236: BooleanLiteral → "true" [1 tests]
104|     this.availableSamples = 0;
105|     this.readPosition = 0;
106|     this.writePosition = 0;
107|     this.chunkIndex = 0;
108|   }
109| 
110|   process(inputs, outputs) {
   ❌ #1237: BlockStatement → "{}" [3 tests]
111|     const output = outputs[0];
112| 
113|     if (!this._validOutput(output)) return true;
   🚫 #1241: BooleanLiteral → "false" [0 tests]
   ❌ #1238: BooleanLiteral → "this._validOutput(output)" [3 tests]
   ❌ #1239: ConditionalExpression → "true" [3 tests]
   ❌ #1240: ConditionalExpression → "false" [3 tests]
114| 
115|     const outputChannel = output[0];
116|     const framesToProcess = outputChannel.length;
117| 
118|     if (this.isPaused || this.availableSamples === 0) {
   ❌ #1242: ConditionalExpression → "true" [3 tests]
   ❌ #1243: ConditionalExpression → "false" [3 tests]
   ❌ #1244: LogicalOperator → "this.isPaused && this.availableSamples === 0" [3 tests]
   ❌ #1245: ConditionalExpression → "false" [2 tests]
   ❌ #1246: EqualityOperator → "this.availableSamples !== 0" [2 tests]
   ❌ #1247: BlockStatement → "{}" [1 tests]
119|       outputChannel.fill(0);
120|       return true;
   ❌ #1248: BooleanLiteral → "false" [1 tests]
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
   ❌ #1249: BooleanLiteral → "false" [2 tests]
131|   }
132| 
133|   _validOutput(output) {
   ❌ #1250: BlockStatement → "{}" [3 tests]
134|     return output && output.length > 0;
   ❌ #1251: ConditionalExpression → "true" [3 tests]
   ❌ #1252: ConditionalExpression → "false" [3 tests]
   ❌ #1253: LogicalOperator → "output || output.length > 0" [3 tests]
   ❌ #1254: ConditionalExpression → "true" [3 tests]
   ❌ #1255: EqualityOperator → "output.length >= 0" [3 tests]
   ❌ #1256: EqualityOperator → "output.length <= 0" [3 tests]
135|   }
136| 
137|   _writeOutput(outputChannel, frames) {
   ✅ #1257: BlockStatement → "{}" [2 tests]
138|     let samplesWritten = 0;
139|     const wasPlaying = this.isPlaying;
140|     this.isPlaying = true;
   ❌ #1258: BooleanLiteral → "false" [2 tests]
141| 
142|     for (let i = 0; i < frames; i++) {
   ❌ #1260: EqualityOperator → "i <= frames" [2 tests]
   ❌ #1259: ConditionalExpression → "false" [2 tests]
   ❌ #1261: EqualityOperator → "i >= frames" [2 tests]
   ⚠️ #1262: UpdateOperator → "i--" [2 tests]
   ❌ #1263: BlockStatement → "{}" [2 tests]
143|       if (this.availableSamples > 0) {
   ❌ #1264: ConditionalExpression → "true" [2 tests]
   ❌ #1265: ConditionalExpression → "false" [2 tests]
   ❌ #1266: EqualityOperator → "this.availableSamples >= 0" [2 tests]
   ❌ #1267: EqualityOperator → "this.availableSamples <= 0" [2 tests]
   ❌ #1268: BlockStatement → "{}" [2 tests]
144|         outputChannel[i] = this.ringBuffer[this.readPosition];
145|         this.readPosition = (this.readPosition + 1) % this.ringBuffer.length;
   ❌ #1269: ArithmeticOperator → "(this.readPosition + 1) * this.ringBuffer.length" [2 tests]
   ❌ #1270: ArithmeticOperator → "this.readPosition - 1" [2 tests]
146|         this.availableSamples--;
   ❌ #1271: UpdateOperator → "this.availableSamples++" [2 tests]
147|         samplesWritten++;
   ❌ #1272: UpdateOperator → "samplesWritten--" [2 tests]
148|       } else {
   ❌ #1273: BlockStatement → "{}" [2 tests]
149|         outputChannel[i] = 0;
150|       }
151|     }
152| 
153|     return { samplesWritten, wasPlaying };
   ❌ #1274: ObjectLiteral → "{}" [2 tests]
154|   }
155| 
156|   _maybeRefillBuffer() {
   ❌ #1275: BlockStatement → "{}" [2 tests]
157|     if (this.availableSamples < this.ringBuffer.length * 0.3) {
   ❌ #1276: ConditionalExpression → "true" [2 tests]
   ❌ #1277: ConditionalExpression → "false" [2 tests]
   ❌ #1278: EqualityOperator → "this.availableSamples <= this.ringBuffer.length * 0.3" [2 tests]
   ❌ #1279: EqualityOperator → "this.availableSamples >= this.ringBuffer.length * 0.3" [2 tests]
   ❌ #1280: ArithmeticOperator → "this.ringBuffer.length / 0.3" [2 tests]
   ❌ #1281: BlockStatement → "{}" [2 tests]
158|       this.fillRingBuffer();
159|     }
160|   }
161| 
162|   _maybeReportChunkCompletion(samplesWritten) {
   ❌ #1282: BlockStatement → "{}" [2 tests]
163|     if (samplesWritten <= 0) return;
   ❌ #1283: ConditionalExpression → "true" [2 tests]
   ❌ #1284: ConditionalExpression → "false" [2 tests]
   ❌ #1285: EqualityOperator → "samplesWritten < 0" [2 tests]
   ❌ #1286: EqualityOperator → "samplesWritten > 0" [2 tests]
164| 
165|     const samplesPerChunk = sampleRate * 0.1; // Assuming 100ms chunks
   ❌ #1287: ArithmeticOperator → "sampleRate / 0.1" [2 tests]
166|     if (this.bufferPosition > 0 && this.bufferPosition % samplesPerChunk < samplesWritten) {
   🚫 #1294: ConditionalExpression → "true" [0 tests]
   🚫 #1295: EqualityOperator → "this.bufferPosition % samplesPerChunk <= samplesWritten" [0 tests]
   🚫 #1296: EqualityOperator → "this.bufferPosition % samplesPerChunk >= samplesWritten" [0 tests]
   🚫 #1297: ArithmeticOperator → "this.bufferPosition * samplesPerChunk" [0 tests]
   🚫 #1298: BlockStatement → "{}" [0 tests]
   ❌ #1288: ConditionalExpression → "true" [2 tests]
   ❌ #1289: ConditionalExpression → "false" [2 tests]
   ❌ #1290: LogicalOperator → "this.bufferPosition > 0 || this.bufferPosition % samplesPerChunk < samplesWritten" [2 tests]
   ❌ #1291: ConditionalExpression → "true" [2 tests]
   ❌ #1292: EqualityOperator → "this.bufferPosition >= 0" [2 tests]
   ❌ #1293: EqualityOperator → "this.bufferPosition <= 0" [2 tests]
167|       this.port.postMessage({
   🚫 #1299: ObjectLiteral → "{}" [0 tests]
168|         type: 'next_chunk',
   🚫 #1300: StringLiteral → """" [0 tests]
169|         data: {
   🚫 #1301: ObjectLiteral → "{}" [0 tests]
170|           chunkIndex: Math.floor(this.bufferPosition / samplesPerChunk),
   🚫 #1302: ArithmeticOperator → "this.bufferPosition * samplesPerChunk" [0 tests]
171|           timestamp: currentTime
172|         }
173|       });
174|     }
175| 
176|     this.bufferPosition += samplesWritten;
   ❌ #1303: AssignmentOperator → "this.bufferPosition -= samplesWritten" [2 tests]
177|   }
178| 
179|   _maybeReportPlaybackEnded(wasPlaying) {
   ❌ #1304: BlockStatement → "{}" [2 tests]
180|     if (wasPlaying && this.availableSamples === 0 && this.audioQueue.length === 0) {
   🚫 #1310: ConditionalExpression → "true" [0 tests]
   🚫 #1311: EqualityOperator → "this.availableSamples !== 0" [0 tests]
   🚫 #1312: ConditionalExpression → "true" [0 tests]
   🚫 #1313: EqualityOperator → "this.audioQueue.length !== 0" [0 tests]
   🚫 #1314: BlockStatement → "{}" [0 tests]
   ❌ #1305: ConditionalExpression → "true" [2 tests]
   ❌ #1306: ConditionalExpression → "false" [2 tests]
   ❌ #1307: LogicalOperator → "wasPlaying && this.availableSamples === 0 || this.audioQueue.length === 0" [2 tests]
   ❌ #1308: ConditionalExpression → "true" [2 tests]
   ❌ #1309: LogicalOperator → "wasPlaying || this.availableSamples === 0" [2 tests]
181|       this.isPlaying = false;
   🚫 #1315: BooleanLiteral → "true" [0 tests]
182|       this.port.postMessage({ type: 'playback_ended' });
   🚫 #1316: ObjectLiteral → "{}" [0 tests]
   🚫 #1317: StringLiteral → """" [0 tests]
183|     }
184|   }
185| 
186|   _maybeReportUnderrun(samplesWritten, framesToProcess) {
   ❌ #1318: BlockStatement → "{}" [2 tests]
187|     if (samplesWritten < framesToProcess && this.isPlaying) {
   ❌ #1319: ConditionalExpression → "true" [2 tests]
   ❌ #1320: ConditionalExpression → "false" [2 tests]
   ❌ #1321: LogicalOperator → "samplesWritten < framesToProcess || this.isPlaying" [2 tests]
   ❌ #1322: ConditionalExpression → "true" [2 tests]
   ❌ #1323: EqualityOperator → "samplesWritten <= framesToProcess" [2 tests]
   ❌ #1325: BlockStatement → "{}" [2 tests]
   ❌ #1324: EqualityOperator → "samplesWritten >= framesToProcess" [2 tests]
188|       this.port.postMessage({
   ❌ #1326: ObjectLiteral → "{}" [2 tests]
189|         type: 'buffer-underrun',
   ❌ #1327: StringLiteral → """" [2 tests]
190|         data: { requested: framesToProcess, available: samplesWritten }
   ❌ #1328: ObjectLiteral → "{}" [2 tests]
191|       });
192|     }
193|   }
194| }
195| 
196| // Register the processor
197| registerProcessor('pcm-queue-processor', PCMQueueProcessor);
   ❌ #1329: StringLiteral → """" [5 tests]
198| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #1168** - Line 11:21-26
   - **Mutator**: `BooleanLiteral` → `true`
   - **Issue**: Unknown
   - **Fix**: Verify behavior with both true and false values
   - **Tests that should have caught this**: 115, 116, 117, 118, 119

2. **Mutant #1169** - Line 12:22-27
   - **Mutator**: `BooleanLiteral` → `true`
   - **Issue**: Unknown
   - **Fix**: Verify behavior with both true and false values
   - **Tests that should have caught this**: 115, 116, 117, 118, 119

3. **Mutant #1170** - Line 15:40-54
   - **Mutator**: `ArithmeticOperator` → `sampleRate / 2`
   - **Issue**: Unknown
   - **Fix**: Test with different numeric values and operators
   - **Tests that should have caught this**: 115, 116, 117, 118, 119

4. **Mutant #1173** - Line 27:9-50
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 115, 119

5. **Mutant #1175** - Line 27:9-50
   - **Mutator**: `LogicalOperator` → `typeof data === 'object' || data !== null`
   - **Issue**: Unknown
   - **Fix**: Test all logical combinations (&&, ||)
   - **Tests that should have caught this**: 115, 119

6. **Mutant #1176** - Line 27:9-33
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 115, 119

7. **Mutant #1179** - Line 27:37-50
   - **Mutator**: `ConditionalExpression` → `true`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 115, 119

8. **Mutant #1187** - Line 37:9-17
   - **Mutator**: `ConditionalExpression` → `case 'resume':`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 119

9. **Mutant #1200** - Line 55:16-42
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 116

10. **Mutant #1203** - Line 58:21-46
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 116

#### 🚫 Coverage Gaps Summary

- **24 uncovered mutants** across 13 lines
- **Most affected lines**: 21, 44, 55, 85, 113
- **Common uncovered operations**: BlockStatement, ConditionalExpression, EqualityOperator

##### Detailed No Coverage Mutants:
1. **Mutant #1171** - Line 21:38-6: `BlockStatement` → `{}`
2. **Mutant #1192** - Line 44:16-44: `ConditionalExpression` → `true`
3. **Mutant #1193** - Line 44:16-44: `ConditionalExpression` → `false`
4. **Mutant #1194** - Line 44:46-6: `BlockStatement` → `{}`
5. **Mutant #1201** - Line 55:44-6: `BlockStatement` → `{}`
6. **Mutant #1230** - Line 85:62-10: `BlockStatement` → `{}`
7. **Mutant #1241** - Line 113:44-48: `BooleanLiteral` → `false`
8. **Mutant #1294** - Line 166:36-90: `ConditionalExpression` → `true`
9. **Mutant #1295** - Line 166:36-90: `EqualityOperator` → `this.bufferPosition % samplesPerChunk <= samplesWritten`
10. **Mutant #1296** - Line 166:36-90: `EqualityOperator` → `this.bufferPosition % samplesPerChunk >= samplesWritten`
11. **Mutant #1297** - Line 166:36-73: `ArithmeticOperator` → `this.bufferPosition * samplesPerChunk`
12. **Mutant #1298** - Line 166:92-6: `BlockStatement` → `{}`
13. **Mutant #1299** - Line 167:29-8: `ObjectLiteral` → `{}`
14. **Mutant #1300** - Line 168:15-27: `StringLiteral` → `""`
15. **Mutant #1301** - Line 169:15-10: `ObjectLiteral` → `{}`
16. **Mutant #1302** - Line 170:34-71: `ArithmeticOperator` → `this.bufferPosition * samplesPerChunk`
17. **Mutant #1310** - Line 180:23-50: `ConditionalExpression` → `true`
18. **Mutant #1311** - Line 180:23-50: `EqualityOperator` → `this.availableSamples !== 0`
19. **Mutant #1312** - Line 180:54-82: `ConditionalExpression` → `true`
20. **Mutant #1313** - Line 180:54-82: `EqualityOperator` → `this.audioQueue.length !== 0`
21. **Mutant #1314** - Line 180:84-6: `BlockStatement` → `{}`
22. **Mutant #1315** - Line 181:24-29: `BooleanLiteral` → `true`
23. **Mutant #1316** - Line 182:29-55: `ObjectLiteral` → `{}`
24. **Mutant #1317** - Line 182:37-53: `StringLiteral` → `""`

#### ✅ Successfully Killed Mutants Summary

- **35 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 115 (killed 24 mutants)
- **Top mutator types killed**: BlockStatement, ConditionalExpression, StringLiteral

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
   ✅ #358: LogicalOperator → "!audioData && audioData.length === 0" [11 tests]
   ✅ #359: BooleanLiteral → "audioData" [11 tests]
   ✅ #360: ConditionalExpression → "false" [11 tests]
   ✅ #361: EqualityOperator → "audioData.length !== 0" [11 tests]
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
   ❌ #379: ConditionalExpression → "false" [1 tests]
   ✅ #378: ConditionalExpression → "true" [1 tests]
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
   ❌ #385: EqualityOperator → "i <= newLength" [1 tests]
   ✅ #384: ConditionalExpression → "false" [1 tests]
   ⚠️ #387: UpdateOperator → "i--" [1 tests]
   ✅ #386: EqualityOperator → "i >= newLength" [1 tests]
   ✅ #388: BlockStatement → "{}" [1 tests]
 49|       const srcIndex = Math.floor(i * ratio);
   ✅ #389: ArithmeticOperator → "i / ratio" [1 tests]
 50|       resampled[i] = this.buffer[srcIndex] || 0;
   ✅ #391: ConditionalExpression → "false" [1 tests]
   ✅ #390: ConditionalExpression → "true" [1 tests]
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
   - **Tests that should have caught this**: 134

2. **Mutant #381** - Line 40:47-6
   - **Mutator**: `BlockStatement` → `{}`
   - **Issue**: Unknown
   - **Fix**: Ensure the code block is actually executed in tests
   - **Tests that should have caught this**: 134

3. **Mutant #385** - Line 48:21-34
   - **Mutator**: `EqualityOperator` → `i <= newLength`
   - **Issue**: Unknown
   - **Fix**: Test boundary conditions and edge cases
   - **Tests that should have caught this**: 134

#### ✅ Successfully Killed Mutants Summary

- **36 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 134 (killed 12 mutants)
- **Top mutator types killed**: BlockStatement, ConditionalExpression, ArithmeticOperator

---

### 🟡 src/index.js

**Overall Health**: 🟡 Good | **Mutation Score**: 66.7% | **Coverage**: 100.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 6 | 66.7% |
| ❌ Survived | 3 | 33.3% |
| 🚫 No Coverage | 0 | 0.0% |
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
   ✅ #396: BlockStatement → "{}" [4 tests]
 16|   return 'gpu' in navigator;
   ✅ #397: StringLiteral → """" [4 tests]
 17| }
 18| 
 19| export function getOptimalDevice() {
   ✅ #398: BlockStatement → "{}" [3 tests]
 20|   return detectWebGPUSupport() ? 'webgpu' : 'wasm';
   ✅ #399: StringLiteral → """" [1 tests]
   ✅ #400: StringLiteral → """" [2 tests]
 21| }
 22| 
 23| console.log("Local LLM Demo initialized");
   ❌ #401: StringLiteral → """" [0 tests]
 24| 
```

#### ❌ Critical Survived Mutants (First 3)

1. **Mutant #394** - Line 3:17-60
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 

2. **Mutant #395** - Line 4:17-54
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 

3. **Mutant #401** - Line 23:13-41
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 

#### ✅ Successfully Killed Mutants Summary

- **6 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 143 (killed 3 mutants)
- **Top mutator types killed**: StringLiteral, BlockStatement, ObjectLiteral

---

### 🟢 src/utils/text-processing.js

**Overall Health**: 🟢 Excellent | **Mutation Score**: 84.5% | **Coverage**: 100.0%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | 109 | 84.5% |
| ❌ Survived | 20 | 15.5% |
| 🚫 No Coverage | 0 | 0.0% |
| **Total** | **129** | **100%** |

#### 📄 Source Code with Mutation Analysis

```javascript
  1| // Text processing utilities for LLM and TTS
  2| export function splitTextIntoChunks(text, chunkSize = 100) {
   ✅ #1037: BlockStatement → "{}" [4 tests]
  3|   if (!text || typeof text !== 'string') {
   ✅ #1038: ConditionalExpression → "true" [4 tests]
   ✅ #1039: ConditionalExpression → "false" [4 tests]
   ✅ #1040: LogicalOperator → "!text && typeof text !== 'string'" [4 tests]
   ✅ #1041: BooleanLiteral → "text" [4 tests]
   ❌ #1042: ConditionalExpression → "false" [3 tests]
   ✅ #1043: EqualityOperator → "typeof text === 'string'" [3 tests]
   ✅ #1044: StringLiteral → """" [3 tests]
   ✅ #1045: BlockStatement → "{}" [1 tests]
  4|     return [];
   ✅ #1046: ArrayDeclaration → "["Stryker was here"]" [1 tests]
  5|   }
  6| 
  7|   const words = text.trim().split(/\s+/);
   ❌ #1047: MethodExpression → "text" [3 tests]
   ❌ #1048: Regex → "/\s/" [3 tests]
   ✅ #1049: Regex → "/\S+/" [3 tests]
  8|   const chunks = [];
   ✅ #1050: ArrayDeclaration → "["Stryker was here"]" [3 tests]
  9|   let currentChunk = [];
   ✅ #1051: ArrayDeclaration → "["Stryker was here"]" [3 tests]
 10| 
 11|   for (const word of words) {
   ✅ #1052: BlockStatement → "{}" [3 tests]
 12|     if (currentChunk.join(' ').length + word.length + 1 <= chunkSize) {
   ✅ #1053: ConditionalExpression → "true" [3 tests]
   ❌ #1054: ConditionalExpression → "false" [3 tests]
   ❌ #1055: EqualityOperator → "currentChunk.join(' ').length + word.length + 1 < chunkSize" [3 tests]
   ❌ #1056: EqualityOperator → "currentChunk.join(' ').length + word.length + 1 > chunkSize" [3 tests]
   ✅ #1057: ArithmeticOperator → "currentChunk.join(' ').length + word.length - 1" [3 tests]
   ✅ #1058: ArithmeticOperator → "currentChunk.join(' ').length - word.length" [3 tests]
   ✅ #1059: StringLiteral → """" [3 tests]
   ✅ #1060: BlockStatement → "{}" [2 tests]
 13|       currentChunk.push(word);
 14|     } else {
   ✅ #1061: BlockStatement → "{}" [3 tests]
 15|       if (currentChunk.length > 0) {
   ✅ #1062: ConditionalExpression → "true" [3 tests]
   ❌ #1063: ConditionalExpression → "false" [3 tests]
   ✅ #1064: EqualityOperator → "currentChunk.length >= 0" [3 tests]
   ✅ #1065: EqualityOperator → "currentChunk.length <= 0" [3 tests]
   ✅ #1066: BlockStatement → "{}" [1 tests]
 16|         chunks.push(currentChunk.join(' '));
   ❌ #1067: StringLiteral → """" [1 tests]
 17|         currentChunk = [word];
   ❌ #1068: ArrayDeclaration → "[]" [1 tests]
 18|       } else {
   ✅ #1069: BlockStatement → "{}" [2 tests]
 19|         // Word is longer than chunk size, add it anyway
 20|         chunks.push(word);
 21|       }
 22|     }
 23|   }
 24| 
 25|   if (currentChunk.length > 0) {
   ✅ #1070: ConditionalExpression → "true" [3 tests]
   ✅ #1071: ConditionalExpression → "false" [3 tests]
   ✅ #1072: EqualityOperator → "currentChunk.length >= 0" [3 tests]
   ✅ #1073: EqualityOperator → "currentChunk.length <= 0" [3 tests]
   ✅ #1074: BlockStatement → "{}" [2 tests]
 26|     chunks.push(currentChunk.join(' '));
   ✅ #1075: StringLiteral → """" [2 tests]
 27|   }
 28| 
 29|   return chunks;
 30| }
 31| 
 32| export function splitIntoSentences(text) {
   ✅ #1076: BlockStatement → "{}" [6 tests]
 33|   return text
   ✅ #1077: MethodExpression → "text.split(/[.!?]+/).map(s => s.trim())" [6 tests]
 34|     .split(/[.!?]+/)
   ❌ #1078: Regex → "/[.!?]/" [6 tests]
   ✅ #1079: Regex → "/[^.!?]+/" [6 tests]
 35|     .map(s => s.trim())
   ✅ #1080: ArrowFunction → "() => undefined" [6 tests]
   ✅ #1081: MethodExpression → "s" [6 tests]
 36|     .filter(s => s.length > 0)
   ✅ #1082: ArrowFunction → "() => undefined" [6 tests]
   ✅ #1083: ConditionalExpression → "true" [6 tests]
   ✅ #1084: ConditionalExpression → "false" [6 tests]
   ✅ #1085: EqualityOperator → "s.length >= 0" [6 tests]
   ✅ #1086: EqualityOperator → "s.length <= 0" [6 tests]
 37|     .map(s => s + '.');
   ✅ #1087: ArrowFunction → "() => undefined" [6 tests]
   ✅ #1088: StringLiteral → """" [5 tests]
 38| }
 39| 
 40| export function formatPromptForInstruction(prompt) {
   ✅ #1089: BlockStatement → "{}" [2 tests]
 41|   return `<|im_start|>system
   ✅ #1090: StringLiteral → "``" [2 tests]
 42| You are a helpful assistant.<|im_end|>
 43| <|im_start|>user
 44| ${prompt}<|im_end|>
 45| <|im_start|>assistant
 46| `;
 47| }
 48| 
 49| export function normalizeText(text) {
   ✅ #1091: BlockStatement → "{}" [2 tests]
 50|   if (!text || typeof text !== 'string') {
   ✅ #1092: ConditionalExpression → "true" [2 tests]
   ✅ #1093: ConditionalExpression → "false" [2 tests]
   ❌ #1094: LogicalOperator → "!text && typeof text !== 'string'" [2 tests]
   ✅ #1095: BooleanLiteral → "text" [2 tests]
   ❌ #1096: ConditionalExpression → "false" [1 tests]
   ✅ #1097: EqualityOperator → "typeof text === 'string'" [1 tests]
   ✅ #1098: StringLiteral → """" [1 tests]
   ✅ #1099: BlockStatement → "{}" [1 tests]
 51|     return '';
   ✅ #1100: StringLiteral → ""Stryker was here!"" [1 tests]
 52|   }
 53| 
 54|   return text
   ✅ #1101: MethodExpression → "text" [1 tests]
 55|     .trim()
 56|     .replace(/\s+/g, ' ')
   ✅ #1102: Regex → "/\s/g" [1 tests]
   ✅ #1104: StringLiteral → """" [1 tests]
   ✅ #1103: Regex → "/\S+/g" [1 tests]
 57|     .replace(/([.!?])\s*([A-Z])/g, '$1 $2');
   ✅ #1105: Regex → "/([^.!?])\s*([A-Z])/g" [1 tests]
   ✅ #1106: Regex → "/([.!?])\s([A-Z])/g" [1 tests]
   ❌ #1107: Regex → "/([.!?])\S*([A-Z])/g" [1 tests]
   ✅ #1108: Regex → "/([.!?])\s*([^A-Z])/g" [1 tests]
   ✅ #1109: StringLiteral → """" [1 tests]
 58| }
 59| 
 60| export function estimateTokenCount(text) {
   ✅ #1110: BlockStatement → "{}" [3 tests]
 61|   if (!text || typeof text !== 'string') {
   ✅ #1111: ConditionalExpression → "true" [3 tests]
   ✅ #1112: ConditionalExpression → "false" [3 tests]
   ❌ #1113: LogicalOperator → "!text && typeof text !== 'string'" [3 tests]
   ✅ #1114: BooleanLiteral → "text" [3 tests]
   ❌ #1115: ConditionalExpression → "false" [2 tests]
   ✅ #1116: EqualityOperator → "typeof text === 'string'" [2 tests]
   ✅ #1117: StringLiteral → """" [2 tests]
   ✅ #1118: BlockStatement → "{}" [1 tests]
 62|     return 0;
 63|   }
 64| 
 65|   // Rough estimation: ~4 characters per token for English text
 66|   return Math.ceil(text.length / 4);
   ❌ #1119: ArithmeticOperator → "text.length * 4" [2 tests]
 67| }
 68| 
 69| export function tokenizeForDisplay(text) {
   ✅ #1120: BlockStatement → "{}" [2 tests]
 70|   // Simple tokenization for display purposes
 71|   const words = text.split(/(\s+)/);
   ❌ #1121: Regex → "/(\s)/" [2 tests]
   ❌ #1122: Regex → "/(\S+)/" [2 tests]
 72|   return words.filter(word => word.length > 0);
   ✅ #1123: MethodExpression → "words" [2 tests]
   ✅ #1124: ArrowFunction → "() => undefined" [2 tests]
   ✅ #1125: ConditionalExpression → "true" [2 tests]
   ✅ #1126: ConditionalExpression → "false" [2 tests]
   ✅ #1127: EqualityOperator → "word.length >= 0" [2 tests]
   ✅ #1128: EqualityOperator → "word.length <= 0" [2 tests]
 73| }
 74| 
 75| export function formatDuration(seconds) {
   ✅ #1129: BlockStatement → "{}" [3 tests]
 76|   if (typeof seconds !== 'number' || seconds < 0) {
   ✅ #1130: ConditionalExpression → "true" [3 tests]
   ✅ #1131: ConditionalExpression → "false" [3 tests]
   ✅ #1132: LogicalOperator → "typeof seconds !== 'number' && seconds < 0" [3 tests]
   ✅ #1133: ConditionalExpression → "false" [3 tests]
   ✅ #1134: EqualityOperator → "typeof seconds === 'number'" [3 tests]
   ✅ #1135: StringLiteral → """" [3 tests]
   ✅ #1136: ConditionalExpression → "false" [3 tests]
   ❌ #1137: EqualityOperator → "seconds <= 0" [3 tests]
   ✅ #1138: EqualityOperator → "seconds >= 0" [3 tests]
   ✅ #1139: BlockStatement → "{}" [1 tests]
 77|     return '0:00';
   ✅ #1140: StringLiteral → """" [1 tests]
 78|   }
 79| 
 80|   const minutes = Math.floor(seconds / 60);
   ✅ #1141: ArithmeticOperator → "seconds * 60" [2 tests]
 81|   const remainingSeconds = Math.floor(seconds % 60);
   ✅ #1142: ArithmeticOperator → "seconds * 60" [2 tests]
 82|   return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
   ✅ #1143: StringLiteral → "``" [2 tests]
   ✅ #1144: StringLiteral → """" [2 tests]
 83| }
 84| 
 85| export function debounce(func, wait) {
   ✅ #1145: BlockStatement → "{}" [1 tests]
 86|   let timeout;
 87|   return function executedFunction(...args) {
   ✅ #1146: BlockStatement → "{}" [1 tests]
 88|     const later = () => {
   ✅ #1147: BlockStatement → "{}" [1 tests]
 89|       clearTimeout(timeout);
 90|       func(...args);
 91|     };
 92|     clearTimeout(timeout);
 93|     timeout = setTimeout(later, wait);
 94|   };
 95| }
 96| 
 97| export function calculateTokensPerSecond(tokenCount, durationMs) {
   ✅ #1148: BlockStatement → "{}" [3 tests]
 98|   if (typeof tokenCount !== 'number' || typeof durationMs !== 'number' || durationMs <= 0) {
   ✅ #1149: ConditionalExpression → "true" [3 tests]
   ✅ #1150: ConditionalExpression → "false" [3 tests]
   ✅ #1151: LogicalOperator → "(typeof tokenCount !== 'number' || typeof durationMs !== 'number') && durationMs <= 0" [3 tests]
   ✅ #1152: ConditionalExpression → "false" [3 tests]
   ✅ #1153: LogicalOperator → "typeof tokenCount !== 'number' && typeof durationMs !== 'number'" [3 tests]
   ✅ #1154: ConditionalExpression → "false" [3 tests]
   ✅ #1155: EqualityOperator → "typeof tokenCount === 'number'" [3 tests]
   ✅ #1156: StringLiteral → """" [3 tests]
   ❌ #1157: ConditionalExpression → "false" [3 tests]
   ✅ #1158: EqualityOperator → "typeof durationMs === 'number'" [3 tests]
   ✅ #1159: StringLiteral → """" [3 tests]
   ✅ #1160: ConditionalExpression → "false" [3 tests]
   ✅ #1161: EqualityOperator → "durationMs < 0" [3 tests]
   ✅ #1162: EqualityOperator → "durationMs > 0" [3 tests]
   ✅ #1163: BlockStatement → "{}" [1 tests]
 99|     return 0;
100|   }
101| 
102|   return (tokenCount / (durationMs / 1000)).toFixed(1);
   ✅ #1164: ArithmeticOperator → "tokenCount * (durationMs / 1000)" [2 tests]
   ✅ #1165: ArithmeticOperator → "durationMs * 1000" [2 tests]
103| }
104| 
```

#### ❌ Critical Survived Mutants (First 10)

1. **Mutant #1042** - Line 3:16-40
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 80, 82, 123

2. **Mutant #1047** - Line 7:17-28
   - **Mutator**: `MethodExpression` → `text`
   - **Issue**: Unknown
   - **Fix**: Mock and verify method calls with different inputs
   - **Tests that should have caught this**: 80, 82, 123

3. **Mutant #1048** - Line 7:35-40
   - **Mutator**: `Regex` → `/\s/`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 80, 82, 123

4. **Mutant #1054** - Line 12:9-69
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 80, 82, 123

5. **Mutant #1055** - Line 12:9-69
   - **Mutator**: `EqualityOperator` → `currentChunk.join(' ').length + word.length + 1 < chunkSize`
   - **Issue**: Unknown
   - **Fix**: Test boundary conditions and edge cases
   - **Tests that should have caught this**: 80, 82, 123

6. **Mutant #1056** - Line 12:9-69
   - **Mutator**: `EqualityOperator` → `currentChunk.join(' ').length + word.length + 1 > chunkSize`
   - **Issue**: Unknown
   - **Fix**: Test boundary conditions and edge cases
   - **Tests that should have caught this**: 80, 82, 123

7. **Mutant #1063** - Line 15:11-34
   - **Mutator**: `ConditionalExpression` → `false`
   - **Issue**: Unknown
   - **Fix**: Add test cases for both true/false conditions
   - **Tests that should have caught this**: 80, 82, 123

8. **Mutant #1067** - Line 16:39-42
   - **Mutator**: `StringLiteral` → `""`
   - **Issue**: Unknown
   - **Fix**: Test with different string values including empty strings
   - **Tests that should have caught this**: 80

9. **Mutant #1068** - Line 17:24-30
   - **Mutator**: `ArrayDeclaration` → `[]`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 80

10. **Mutant #1078** - Line 34:12-20
   - **Mutator**: `Regex` → `/[.!?]/`
   - **Issue**: Unknown
   - **Fix**: Add specific test cases to kill this mutant
   - **Tests that should have caught this**: 85, 86, 87, 124, 136, 137

#### ✅ Successfully Killed Mutants Summary

- **109 mutants killed** by tests
- **Average tests per mutant**: 1.0
- **Most effective test**: 83 (killed 13 mutants)
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
- Generated: 2025-08-17T14:36:26.473Z
- Stryker Version: Latest
- Analysis Includes: Source code, test coverage, mutant details, recommendations
- Interactive Version: Available at `html/index.html`
