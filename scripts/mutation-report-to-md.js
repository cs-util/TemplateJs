#!/usr/bin/env node

// Simple script to convert Stryker JSON report to markdown format
const fs = require('fs');
const path = require('path');

function generateMarkdownReport() {
  const jsonPath = path.join(__dirname, '../reports/mutation/mutation-report.json');
  
  if (!fs.existsSync(jsonPath)) {
    console.error('No mutation report found at:', jsonPath);
    return;
  }

  const report = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  let markdown = `# Mutation Testing Report\n\n`;
  markdown += `**Generated:** ${new Date().toISOString()}\n`;
  markdown += `**Mutation Score:** ${((report.thresholds.high / 100) * 100).toFixed(2)}%\n\n`;

  markdown += `## Summary\n\n`;
  
  // File-by-file breakdown
  Object.entries(report.files).forEach(([filePath, fileData]) => {
    markdown += `### ${filePath}\n\n`;
    
    const totalMutants = fileData.mutants.length;
    const killedMutants = fileData.mutants.filter(m => m.status === 'Killed').length;
    const survivedMutants = fileData.mutants.filter(m => m.status === 'Survived').length;
    const noCoverageMutants = fileData.mutants.filter(m => m.status === 'NoCoverage').length;
    
    markdown += `- **Total Mutants:** ${totalMutants}\n`;
    markdown += `- **Killed:** ${killedMutants}\n`;
    markdown += `- **Survived:** ${survivedMutants}\n`;
    markdown += `- **No Coverage:** ${noCoverageMutants}\n`;
    
    if (survivedMutants > 0) {
      markdown += `\n**Survived Mutants (needs attention):**\n`;
      fileData.mutants
        .filter(m => m.status === 'Survived')
        .forEach(mutant => {
          markdown += `- Line ${mutant.location.start.line}: ${mutant.mutatorName} - \`${mutant.replacement}\`\n`;
        });
    }
    
    if (noCoverageMutants > 0) {
      markdown += `\n**No Coverage Mutants:**\n`;
      fileData.mutants
        .filter(m => m.status === 'NoCoverage')
        .forEach(mutant => {
          markdown += `- Line ${mutant.location.start.line}: ${mutant.mutatorName} - \`${mutant.replacement}\`\n`;
        });
    }
    
    markdown += `\n`;
  });

  // Write markdown file
  const mdPath = path.join(__dirname, '../reports/mutation/mutation-report.md');
  fs.writeFileSync(mdPath, markdown);
  console.log('Markdown report generated at:', mdPath);
}

if (require.main === module) {
  generateMarkdownReport();
}

module.exports = { generateMarkdownReport };
