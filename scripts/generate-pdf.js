import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catalogueDir = path.join(__dirname, '../public/catalogue');
if (!fs.existsSync(catalogueDir)) {
  fs.mkdirSync(catalogueDir, { recursive: true });
}

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

// Page background
doc.setFillColor(8, 16, 25); // Deep navy background
doc.rect(0, 0, 210, 297, 'F');

// Top Banner Accent
doc.setFillColor(0, 217, 255);
doc.rect(0, 0, 210, 8, 'F');

// Header Text
doc.setTextColor(0, 217, 255);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(22);
doc.text('AGM ADVANCED ELECTRO-OPTICS', 20, 30);

doc.setTextColor(255, 255, 255);
doc.setFontSize(16);
doc.text('AGM VOYAGE', 20, 42);

doc.setTextColor(156, 163, 175);
doc.setFontSize(11);
doc.setFont('Helvetica', 'normal');
doc.text('Thermal & Digital Day/Night Vision Binocular — Product Specification Brochure', 20, 50);

// Divider line
doc.setDrawColor(0, 217, 255);
doc.setLineWidth(0.5);
doc.line(20, 56, 190, 56);

// Executive Overview Box
doc.setFillColor(13, 23, 34);
doc.roundedRect(20, 64, 170, 45, 3, 3, 'F');

doc.setTextColor(0, 217, 255);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(12);
doc.text('EXECUTIVE PRODUCT OVERVIEW', 28, 74);

doc.setTextColor(229, 231, 235);
doc.setFont('Helvetica', 'normal');
doc.setFontSize(9.5);
const overviewText = [
  'The AGM Voyage combines thermal imaging and digital low-light vision in a single advanced',
  'fusion binocular platform. Designed for high-performance day and night observation across demanding',
  'environmental conditions, the AGM Voyage provides enhanced situational awareness, target detection,',
  'and target recognition capability for professional field operations.'
];
let yPos = 82;
overviewText.forEach(line => {
  doc.text(line, 28, yPos);
  yPos += 5.5;
});

// Core Technologies Section
doc.setTextColor(0, 217, 255);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(13);
doc.text('KEY CAPABILITIES & TECHNOLOGIES', 20, 122);

const techItems = [
  { title: 'Thermal Imaging Integration', desc: 'Detect heat signatures across smoke, darkness, fog, and light foliage.' },
  { title: 'Digital Day/Night Vision', desc: 'High-sensitivity digital sensor provides optical clarity in low ambient light.' },
  { title: 'Image Fusion Technology', desc: 'Combines thermal signature overlay with visible-light optical detail.' },
  { title: 'Multiple Viewing Modes', desc: 'Switch seamlessly between thermal, optical, and fused image configurations.' },
  { title: 'Distance Measurement', desc: 'Integrated field distance estimation for enhanced spatial awareness.' },
  { title: 'Target Positioning', desc: 'Target positioning data integration for rapid field orientation.' },
  { title: 'Image & Video Recording', desc: 'Capture high-resolution imagery and video logs for documentation.' },
  { title: 'Field-Ruggedized Design', desc: 'Ergonomic controls engineered for operation in harsh outdoor conditions.' }
];

let itemY = 132;
techItems.forEach((item, index) => {
  doc.setFillColor(0, 217, 255);
  doc.circle(24, itemY - 1, 1.2, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(item.title, 28, itemY);
  
  doc.setTextColor(156, 163, 175);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(item.desc, 85, itemY);
  
  itemY += 8.5;
});

// Product Specs Table Header
doc.setTextColor(0, 217, 255);
doc.setFont('Helvetica', 'bold');
doc.setFontSize(13);
doc.text('PRODUCT AT A GLANCE', 20, 212);

const specs = [
  ['Product Platform', 'AGM Voyage Thermal & Digital Day/Night Vision Binocular'],
  ['Imaging Sensors', 'Dual Thermal + Digital Low-Light Vision'],
  ['Operational Spectrum', 'Day / Night Multi-Spectrum Observation'],
  ['Viewing Modes', 'Multiple Viewing & Fused Display Modes'],
  ['Measurement & Location', 'Distance Measurement & Target Positioning'],
  ['Media Capture', 'Integrated Image & Video Recording'],
  ['Controls & Design', 'Field-Engineered Ergonomic Interface'],
  ['Applications', 'Professional, Defense & Outdoor Field Operations']
];

let tableY = 220;
specs.forEach(([label, val], idx) => {
  doc.setFillColor(idx % 2 === 0 ? 13 : 8, idx % 2 === 0 ? 23 : 16, idx % 2 === 0 ? 34 : 25);
  doc.rect(20, tableY, 170, 7, 'F');
  
  doc.setTextColor(156, 163, 175);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(label, 24, tableY + 4.8);
  
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'normal');
  doc.text(val, 85, tableY + 4.8);
  
  tableY += 7;
});

// Footer
doc.setDrawColor(0, 217, 255);
doc.setLineWidth(0.3);
doc.line(20, 280, 190, 280);

doc.setTextColor(107, 114, 128);
doc.setFontSize(8);
doc.text('Confidential Product Overview — AGM Electro-Optics — All Rights Reserved', 20, 286);
doc.text('Price on Request — Contact AGM Commercial Operations', 135, 286);

const pdfPath = path.join(catalogueDir, 'agm-voyage.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(pdfPath, pdfBuffer);

console.log(`Catalogue PDF generated successfully at ${pdfPath}`);
