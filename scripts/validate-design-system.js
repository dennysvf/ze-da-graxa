import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPONENTS_DIR = join(__dirname, '../frontend/src/components');
const DOCS_DIR = join(__dirname, '../docs/components');

// Design tokens que devem ser usados
const REQUIRED_TOKENS = [
  '$primary-green',
  '$primary-text',
  '$white',
  '$background',
  '$border',
  '$text-primary',
  '$text-placeholder',
  '$hover-opacity',
  '$disabled-opacity',
  '$font-family-primary',
  '$font-size-h1',
  '$font-size-h2',
  '$font-size-button',
  '$font-size-body',
  '$font-size-small',
  '$font-weight-regular',
  '$font-weight-medium',
  '$font-weight-semibold',
  '$letter-spacing-default',
];

// Elementos de acessibilidade que devem estar presentes
const ACCESSIBILITY_PATTERNS = [
  'aria-label',
  'aria-describedby',
  'role=',
  'tabIndex',
];

function validateComponent(componentDir) {
  const componentName = basename(componentDir);
  const issues = [];

  // 1. Verificar se existe documentação
  const docPath = join(DOCS_DIR, `${componentName}.md`);
  if (!existsSync(docPath)) {
    issues.push(`❌ Falta documentação para ${componentName}`);
  }

  // 2. Verificar uso de tokens no SCSS
  const scssPath = join(componentDir, `${componentName}.module.scss`);
  if (existsSync(scssPath)) {
    const scssContent = readFileSync(scssPath, 'utf8');
    REQUIRED_TOKENS.forEach(token => {
      if (!scssContent.includes(token) && !scssContent.includes(token.replace('$', ''))) {
        issues.push(`⚠️ ${componentName}: Possível valor hardcoded ao invés do token ${token}`);
      }
    });
  }

  // 3. Verificar acessibilidade no TSX
  const tsxPath = join(componentDir, `${componentName}.tsx`);
  if (existsSync(tsxPath)) {
    const tsxContent = readFileSync(tsxPath, 'utf8');
    ACCESSIBILITY_PATTERNS.forEach(pattern => {
      if (!tsxContent.includes(pattern)) {
        issues.push(`⚠️ ${componentName}: Possível falta de atributo de acessibilidade ${pattern}`);
      }
    });
  }

  return issues;
}

function validateAllComponents() {
  console.log('🔍 Iniciando validação do Design System...\n');
  
  const components = readdirSync(COMPONENTS_DIR)
    .filter(name => statSync(join(COMPONENTS_DIR, name)).isDirectory());
  
  let totalIssues = 0;
  
  components.forEach(componentName => {
    const componentDir = join(COMPONENTS_DIR, componentName);
    const issues = validateComponent(componentDir);
    
    if (issues.length > 0) {
      console.log(`\n📦 ${componentName}:`);
      issues.forEach(issue => console.log(issue));
      totalIssues += issues.length;
    }
  });
  
  console.log(`\n✨ Validação concluída! ${totalIssues} problemas encontrados.`);
}

validateAllComponents();
