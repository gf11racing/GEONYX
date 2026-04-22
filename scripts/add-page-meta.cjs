const fs = require('fs');
const path = require('path');

const PAGES = {
  'AboutUsPage.tsx': 'about',
  'AgroBiogasPage.tsx': 'agrobiogaz',
  'ArchitecturalZonePage.tsx': 'architecturalzone',
  'ArmorPage.tsx': 'armor',
  'CadBimPage.tsx': 'cadbim',
  'CareersPage.tsx': 'careers',
  'CertificatesPage.tsx': 'certificates',
  'ChemPage.tsx': 'chem',
  'ConstructionArchitecturePage.tsx': 'constructionarch',
  'ContactsPage.tsx': 'contacts',
  'EnergyDefensePage.tsx': 'energydefense',
  'FoodPharmaPage.tsx': 'foodpharma',
  'HeavyIndustryLogisticsPage.tsx': 'heavyindustry',
  'HseqPage.tsx': 'hseq',
  'HydroPage.tsx': 'hydro',
  'PilotProjectsPage.tsx': 'pilotprojects',
  'PrivacyPolicyPage.tsx': 'privacy',
  'RequestInspectionPage.tsx': 'requestinspection',
  'SectorsHubPage.tsx': 'sectorshub',
  'SystemsHubPage.tsx': 'systemshub',
  'TechnicalMapsPage.tsx': 'technicalmaps',
  'TechnologyPage.tsx': 'technology',
  'TermsConditionsPage.tsx': 'terms',
  'ThermPage.tsx': 'therm',
  'TransportParkingPage.tsx': 'transportparking',
  'UrbanHighTechPage.tsx': 'urbanhightech',
  'WaterMarinePage.tsx': 'watermarine',
};

const COMPONENTS_DIR = path.join(__dirname, '..', 'components');
const IMPORT_LINE = `import { usePageMeta } from '../hooks/usePageMeta';`;

for (const [file, ns] of Object.entries(PAGES)) {
  const filePath = path.join(COMPONENTS_DIR, file);
  if (!fs.existsSync(filePath)) { console.log(`MISSING: ${file}`); continue; }

  let src = fs.readFileSync(filePath, 'utf8');

  // Skip if already has usePageMeta
  if (src.includes('usePageMeta')) { console.log(`SKIP (already done): ${file}`); continue; }

  // 1. Add import after last import line
  const lines = src.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }
  if (lastImportIdx === -1) { console.log(`NO IMPORT FOUND: ${file}`); continue; }
  lines.splice(lastImportIdx + 1, 0, IMPORT_LINE);
  src = lines.join('\n');

  // 2. Insert hook call inside the exported component function body
  // Pattern: find "export const XxxPage" then find the next `= () => {` or `= (` block opening
  // Then insert usePageMeta after the first `{` of the function body
  const exportMatch = src.match(/export const \w+Page[^{]*\{/);
  if (!exportMatch) { console.log(`NO EXPORT MATCH: ${file}`); fs.writeFileSync(filePath, src); continue; }

  const insertPos = src.indexOf(exportMatch[0]) + exportMatch[0].length;
  const hookCall = `\n  usePageMeta('${ns}');`;
  src = src.slice(0, insertPos) + hookCall + src.slice(insertPos);

  fs.writeFileSync(filePath, src, 'utf8');
  console.log(`Updated: ${file} → '${ns}'`);
}

console.log('\nDone.');
