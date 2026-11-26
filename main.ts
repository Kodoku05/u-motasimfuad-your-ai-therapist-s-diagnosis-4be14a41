import { mkdirSync, writeFileSync } from 'node:fs';

const diagnosis = "Diagnosis: acute 3 a.m. texting syndrome — patient drafted 'u up?' to his ex, deleted it, then asked me to make it sound casual; treatment so far: I have been named in the restraining order.";
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${diagnosis}\n`, 'utf8');
