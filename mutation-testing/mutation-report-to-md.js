#!/usr/bin/env node

/**
 * Comprehensive Mutation Testing Report Generator
 * 
 * This script transforms Stryker's JSON mutation testing report into a comprehensive,
 * standalone markdown report that provides actionable insights for developers.
 * 
 * Key Improvements over the original:
 * - Executive summary with risk assessment
 * - Priority-based action items
 * - Detailed analysis with mutation operator insights
 * - Practical recommendations for fixing issues
 * - Educational content about mutation testing
 * - Professional formatting with emojis and tables
 * - Contextual explanations for all metrics
 * 
 * Usage: node mutation-report-to-md.js
 * Output: /mutation-testing/reports/mutation-report.md
 */
const fs = require('fs');
const path = require('path');

function generateMarkdownReport() {
  const jsonPath = path.join(__dirname, '/reports/mutation-report.json');
  
  if (!fs.existsSync(jsonPath)) {
    console.error('No mutation report found at:', jsonPath);
    return;
  }

  const report = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  // Calculate overall metrics
  const overallStats = calculateOverallStats(report);
  
  let markdown = generateHeader(report, overallStats);
  markdown += generateExecutiveSummary(overallStats);
  markdown += generatePriorityActions(report);
  markdown += generateDetailedAnalysis(report);
  markdown += generateFileBreakdown(report);
  markdown += generateAppendix(report);

  // Write markdown file
  const mdPath = path.join(__dirname, '/reports/mutation-report.md');
  fs.writeFileSync(mdPath, markdown);
  console.log('Comprehensive mutation report generated at:', mdPath);
}

function calculateOverallStats(report) {
  let totalMutants = 0;
  let killedMutants = 0;
  let survivedMutants = 0;
  let noCoverageMutants = 0;
  let timeoutMutants = 0;
  let errorMutants = 0;
  const mutatorStats = {};
  const survivalReasons = {};

  Object.entries(report.files).forEach(([filePath, fileData]) => {
    fileData.mutants.forEach(mutant => {
      totalMutants++;
      
      // Track mutator usage
      if (!mutatorStats[mutant.mutatorName]) {
        mutatorStats[mutant.mutatorName] = { total: 0, killed: 0, survived: 0, noCoverage: 0 };
      }
      mutatorStats[mutant.mutatorName].total++;
      
      switch (mutant.status) {
        case 'Killed':
          killedMutants++;
          mutatorStats[mutant.mutatorName].killed++;
          break;
        case 'Survived':
          survivedMutants++;
          mutatorStats[mutant.mutatorName].survived++;
          if (mutant.statusReason) {
            const key = extractTestFailureType(mutant.statusReason);
            survivalReasons[key] = (survivalReasons[key] || 0) + 1;
          }
          break;
        case 'NoCoverage':
          noCoverageMutants++;
          mutatorStats[mutant.mutatorName].noCoverage++;
          break;
        case 'Timeout':
          timeoutMutants++;
          break;
        case 'Error':
          errorMutants++;
          break;
      }
    });
  });

  const mutationScore = totalMutants > 0 ? ((killedMutants / (totalMutants - noCoverageMutants)) * 100) : 0;
  const coverageScore = totalMutants > 0 ? (((totalMutants - noCoverageMutants) / totalMutants) * 100) : 0;

  return {
    totalMutants,
    killedMutants,
    survivedMutants,
    noCoverageMutants,
    timeoutMutants,
    errorMutants,
    mutationScore,
    coverageScore,
    mutatorStats,
    survivalReasons
  };
}

function extractTestFailureType(statusReason) {
  if (!statusReason) return 'Unknown';
  if (statusReason.includes('TypeError')) return 'Type Error';
  if (statusReason.includes('ReferenceError')) return 'Reference Error';
  if (statusReason.includes('expect(received).toBe(expected)')) return 'Assertion Failure';
  if (statusReason.includes('timeout')) return 'Timeout';
  return 'Other Test Failure';
}

function generateHeader(report, stats) {
  const timestamp = new Date().toISOString();
  const scoreColor = stats.mutationScore >= 80 ? '🟢' : stats.mutationScore >= 60 ? '🟡' : '🔴';
  
  return `# 🧬 Mutation Testing Report

> **Generated:** ${timestamp}  
> **Mutation Score:** ${scoreColor} **${stats.mutationScore.toFixed(1)}%**  
> **Coverage Score:** ${stats.coverageScore.toFixed(1)}%  
> **Total Files Analyzed:** ${Object.keys(report.files).length}

---

`;
}

function generateExecutiveSummary(stats) {
  const riskLevel = stats.mutationScore >= 80 ? 'LOW' : stats.mutationScore >= 60 ? 'MEDIUM' : 'HIGH';
  const riskEmoji = stats.mutationScore >= 80 ? '✅' : stats.mutationScore >= 60 ? '⚠️' : '❌';
  
  return `## 📊 Executive Summary

${riskEmoji} **Risk Level: ${riskLevel}**

| Metric | Count | Percentage |
|--------|-------|------------|
| **Total Mutants** | ${stats.totalMutants} | 100% |
| **✅ Killed (Good)** | ${stats.killedMutants} | ${((stats.killedMutants / stats.totalMutants) * 100).toFixed(1)}% |
| **❌ Survived (Bad)** | ${stats.survivedMutants} | ${((stats.survivedMutants / stats.totalMutants) * 100).toFixed(1)}% |
| **🚫 No Coverage** | ${stats.noCoverageMutants} | ${((stats.noCoverageMutants / stats.totalMutants) * 100).toFixed(1)}% |
| **⏱️ Timeout** | ${stats.timeoutMutants} | ${((stats.timeoutMutants / stats.totalMutants) * 100).toFixed(1)}% |
| **💥 Error** | ${stats.errorMutants} | ${((stats.errorMutants / stats.totalMutants) * 100).toFixed(1)}% |

### Quality Assessment
- **Mutation Score:** ${stats.mutationScore.toFixed(1)}% ${stats.mutationScore >= 80 ? '(Excellent)' : stats.mutationScore >= 60 ? '(Good)' : '(Needs Improvement)'}
- **Test Coverage:** ${stats.coverageScore.toFixed(1)}% ${stats.coverageScore >= 90 ? '(Excellent)' : stats.coverageScore >= 70 ? '(Good)' : '(Poor)'}

---

`;
}

function generatePriorityActions(report) {
  const actions = [];
  const fileIssues = [];
  
  Object.entries(report.files).forEach(([filePath, fileData]) => {
    const totalMutants = fileData.mutants.length;
    const noCoverageMutants = fileData.mutants.filter(m => m.status === 'NoCoverage').length;
    const survivedMutants = fileData.mutants.filter(m => m.status === 'Survived').length;
    const killedMutants = fileData.mutants.filter(m => m.status === 'Killed').length;
    
    const coverage = totalMutants > 0 ? ((totalMutants - noCoverageMutants) / totalMutants) * 100 : 0;
    const mutationScore = (totalMutants - noCoverageMutants) > 0 ? (killedMutants / (totalMutants - noCoverageMutants)) * 100 : 0;
    
    fileIssues.push({
      filePath,
      coverage,
      mutationScore,
      survivedMutants,
      noCoverageMutants,
      totalMutants,
      priority: calculatePriority(coverage, mutationScore, survivedMutants)
    });
  });
  
  // Sort by priority (higher is more urgent)
  fileIssues.sort((a, b) => b.priority - a.priority);
  
  let markdown = `## 🎯 Priority Actions

### Immediate Actions Required:

`;

  const highPriorityFiles = fileIssues.filter(f => f.priority >= 8);
  const mediumPriorityFiles = fileIssues.filter(f => f.priority >= 5 && f.priority < 8);
  const lowPriorityFiles = fileIssues.filter(f => f.priority < 5);

  if (highPriorityFiles.length > 0) {
    markdown += `#### 🔴 HIGH PRIORITY (Immediate attention needed)\n\n`;
    highPriorityFiles.slice(0, 5).forEach(file => {
      markdown += generateFileActionItem(file, 'HIGH');
    });
  }

  if (mediumPriorityFiles.length > 0) {
    markdown += `#### 🟡 MEDIUM PRIORITY (Address soon)\n\n`;
    mediumPriorityFiles.slice(0, 5).forEach(file => {
      markdown += generateFileActionItem(file, 'MEDIUM');
    });
  }

  if (lowPriorityFiles.length > 0) {
    markdown += `#### 🟢 LOW PRIORITY (Improve when possible)\n\n`;
    markdown += `- ${lowPriorityFiles.length} files have good test coverage and mutation scores\n`;
  }

  markdown += `\n---\n\n`;
  return markdown;
}

function calculatePriority(coverage, mutationScore, survivedMutants) {
  let priority = 0;
  
  // No coverage is highest priority
  if (coverage < 10) priority += 10;
  else if (coverage < 50) priority += 7;
  else if (coverage < 80) priority += 4;
  
  // Poor mutation score
  if (mutationScore < 60) priority += 5;
  else if (mutationScore < 80) priority += 2;
  
  // Many survived mutants
  if (survivedMutants > 10) priority += 3;
  else if (survivedMutants > 5) priority += 1;
  
  return priority;
}

function generateFileActionItem(file, priorityLevel) {
  const issues = [];
  
  if (file.coverage < 50) {
    issues.push(`❌ Very low test coverage (${file.coverage.toFixed(1)}%)`);
  } else if (file.coverage < 80) {
    issues.push(`⚠️ Low test coverage (${file.coverage.toFixed(1)}%)`);
  }
  
  if (file.mutationScore < 60) {
    issues.push(`❌ Poor mutation score (${file.mutationScore.toFixed(1)}%)`);
  } else if (file.mutationScore < 80) {
    issues.push(`⚠️ Low mutation score (${file.mutationScore.toFixed(1)}%)`);
  }
  
  if (file.survivedMutants > 5) {
    issues.push(`❌ ${file.survivedMutants} survived mutants need test improvements`);
  }
  
  const actions = generateRecommendedActions(file);
  
  return `**${file.filePath}**
- Issues: ${issues.join(', ')}
- Recommended actions: ${actions}
- Stats: ${file.noCoverageMutants}/${file.totalMutants} no coverage, ${file.survivedMutants} survived

`;
}

function generateRecommendedActions(file) {
  const actions = [];
  
  if (file.coverage < 50) {
    actions.push('Add comprehensive unit tests');
  }
  
  if (file.survivedMutants > 0) {
    actions.push('Strengthen test assertions');
    actions.push('Add edge case tests');
  }
  
  if (file.noCoverageMutants > file.totalMutants * 0.5) {
    actions.push('Improve code coverage');
  }
  
  return actions.length > 0 ? actions.join(', ') : 'Monitor for regressions';
}

function generateDetailedAnalysis(report) {
  const stats = calculateOverallStats(report);
  
  let markdown = `## 🔍 Detailed Analysis

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

`;

  // Sort mutators by impact (survived + no coverage)
  const sortedMutators = Object.entries(stats.mutatorStats)
    .map(([name, stats]) => ({
      name,
      ...stats,
      impact: stats.survived + stats.noCoverage,
      killRate: stats.total > 0 ? ((stats.killed / stats.total) * 100) : 0
    }))
    .sort((a, b) => b.impact - a.impact)
    .slice(0, 10);

  markdown += `| Mutator | Total | Killed | Survived | No Coverage | Kill Rate |
|---------|-------|--------|----------|-------------|-----------|
`;

  sortedMutators.forEach(mutator => {
    const emoji = mutator.killRate >= 80 ? '🟢' : mutator.killRate >= 60 ? '🟡' : '🔴';
    markdown += `| ${mutator.name} | ${mutator.total} | ${mutator.killed} | ${mutator.survived} | ${mutator.noCoverage} | ${emoji} ${mutator.killRate.toFixed(1)}% |\n`;
  });

  // Survival reasons analysis
  if (Object.keys(stats.survivalReasons).length > 0) {
    markdown += `\n### Test Failure Patterns\n\n`;
    Object.entries(stats.survivalReasons)
      .sort(([,a], [,b]) => b - a)
      .forEach(([reason, count]) => {
        markdown += `- **${reason}**: ${count} failures\n`;
      });
  }

  markdown += `\n---\n\n`;
  return markdown;
}

function generateFileBreakdown(report) {
  let markdown = `## 📁 File-by-File Breakdown

`;

  Object.entries(report.files).forEach(([filePath, fileData]) => {
    const stats = calculateFileStats(fileData);
    const emoji = getFileStatusEmoji(stats);
    
    markdown += `### ${emoji} ${filePath}

**Overall Health**: ${getHealthStatus(stats)} | **Mutation Score**: ${stats.mutationScore.toFixed(1)}% | **Coverage**: ${stats.coverage.toFixed(1)}%

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Killed | ${stats.killedMutants} | ${stats.killedPercentage.toFixed(1)}% |
| ❌ Survived | ${stats.survivedMutants} | ${stats.survivedPercentage.toFixed(1)}% |
| 🚫 No Coverage | ${stats.noCoverageMutants} | ${stats.noCoveragePercentage.toFixed(1)}% |
| **Total** | **${stats.totalMutants}** | **100%** |

`;

    // Show critical survived mutants (limit to most important ones)
    if (stats.survivedMutants > 0) {
      const criticalMutants = fileData.mutants
        .filter(m => m.status === 'Survived')
        .slice(0, 10); // Limit to top 10 most critical

      markdown += `#### ❌ Critical Survived Mutants (First ${Math.min(criticalMutants.length, 10)})

`;
      criticalMutants.forEach((mutant, index) => {
        const errorType = extractTestFailureType(mutant.statusReason);
        markdown += `${index + 1}. **Line ${mutant.location.start.line}**: \`${mutant.mutatorName}\` → \`${mutant.replacement}\`
   - **Issue**: ${errorType}
   - **Fix**: ${suggestFix(mutant)}

`;
      });
    }

    // Show coverage gaps (but limit the output)
    if (stats.noCoverageMutants > 0) {
      const coverageGaps = analyzeCoverageGaps(fileData.mutants.filter(m => m.status === 'NoCoverage'));
      markdown += `#### 🚫 Coverage Gaps Summary

- **${stats.noCoverageMutants} uncovered mutants** across ${coverageGaps.lineCount} lines
- **Most affected lines**: ${coverageGaps.topLines.join(', ')}
- **Common uncovered operations**: ${coverageGaps.topMutators.join(', ')}

`;
    }

    markdown += `---

`;
  });

  return markdown;
}

function calculateFileStats(fileData) {
  const totalMutants = fileData.mutants.length;
  const killedMutants = fileData.mutants.filter(m => m.status === 'Killed').length;
  const survivedMutants = fileData.mutants.filter(m => m.status === 'Survived').length;
  const noCoverageMutants = fileData.mutants.filter(m => m.status === 'NoCoverage').length;
  
  const coverage = totalMutants > 0 ? ((totalMutants - noCoverageMutants) / totalMutants) * 100 : 0;
  const mutationScore = (totalMutants - noCoverageMutants) > 0 ? (killedMutants / (totalMutants - noCoverageMutants)) * 100 : 0;
  
  return {
    totalMutants,
    killedMutants,
    survivedMutants,
    noCoverageMutants,
    coverage,
    mutationScore,
    killedPercentage: totalMutants > 0 ? (killedMutants / totalMutants) * 100 : 0,
    survivedPercentage: totalMutants > 0 ? (survivedMutants / totalMutants) * 100 : 0,
    noCoveragePercentage: totalMutants > 0 ? (noCoverageMutants / totalMutants) * 100 : 0
  };
}

function getFileStatusEmoji(stats) {
  if (stats.coverage < 50 || stats.mutationScore < 60) return '🔴';
  if (stats.coverage < 80 || stats.mutationScore < 80) return '🟡';
  return '🟢';
}

function getHealthStatus(stats) {
  if (stats.coverage >= 80 && stats.mutationScore >= 80) return '🟢 Excellent';
  if (stats.coverage >= 60 && stats.mutationScore >= 60) return '🟡 Good';
  return '🔴 Needs Improvement';
}

function suggestFix(mutant) {
  const mutatorName = mutant.mutatorName;
  const replacement = mutant.replacement;
  
  switch (mutatorName) {
    case 'ConditionalExpression':
      return 'Add test cases for both true/false conditions';
    case 'EqualityOperator':
      return 'Test boundary conditions and edge cases';
    case 'StringLiteral':
      return 'Test with different string values including empty strings';
    case 'BooleanLiteral':
      return 'Verify behavior with both true and false values';
    case 'ArithmeticOperator':
      return 'Test with different numeric values and operators';
    case 'LogicalOperator':
      return 'Test all logical combinations (&&, ||)';
    case 'BlockStatement':
      return 'Ensure the code block is actually executed in tests';
    case 'MethodExpression':
      return 'Mock and verify method calls with different inputs';
    default:
      return 'Add specific test cases to kill this mutant';
  }
}

function analyzeCoverageGaps(noCoverageMutants) {
  const lines = new Set();
  const mutatorCounts = {};
  
  noCoverageMutants.forEach(mutant => {
    lines.add(mutant.location.start.line);
    mutatorCounts[mutant.mutatorName] = (mutatorCounts[mutant.mutatorName] || 0) + 1;
  });
  
  const topLines = Array.from(lines).sort((a, b) => a - b).slice(0, 5);
  const topMutators = Object.entries(mutatorCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([name]) => name);
  
  return {
    lineCount: lines.size,
    topLines,
    topMutators
  };
}

function generateAppendix(report) {
  return `## 📚 Appendix

### Understanding Mutation Testing

Mutation testing validates test quality by introducing small bugs (mutations) into your code:

1. **🟢 Killed Mutants**: Tests detected the bug ✅ Good!
2. **❌ Survived Mutants**: Tests missed the bug ❌ Need better tests  
3. **🚫 No Coverage**: Code isn't tested ❌ Need more tests

### Recommended Next Steps

1. **Address High Priority Files**: Focus on files with low coverage or poor mutation scores
2. **Improve Test Assertions**: Strengthen tests to catch survived mutants
3. **Increase Coverage**: Add tests for uncovered code paths
4. **Regular Monitoring**: Run mutation testing in CI/CD pipeline

### Mutation Testing Best Practices

- Target 80%+ mutation score for critical code
- Focus on business logic and edge cases
- Use mutation testing to guide test improvements
- Don't aim for 100% - some mutants are equivalent

### Additional Resources

- [Mutation Testing Guide](https://stryker-mutator.io/docs/)
- [Best Practices](https://blog.stryker-mutator.io/blog/)
- [Interpreting Results](https://github.com/stryker-mutator/stryker/blob/master/docs/mutation-testing-elements/supported-mutators.md)

---

*Report generated by Stryker Mutation Testing Framework*  
*For questions or issues, consult your development team or the Stryker documentation.*
`;
}

if (require.main === module) {
  generateMarkdownReport();
}

module.exports = { generateMarkdownReport };
