import lessonData from './aulas.json';import moduleData from './modulos.json';import exerciseData from './exercicios.json';import assessmentData from './avaliacoes.json';import preData from './pre-requisitos.json';import noteData from './notas-de-referencia.json';
import type {Lesson,Module,Exercise,Solution,Assessment,ReferenceNote} from '../domain/types';
export const lessons=lessonData as Lesson[];export const modules=moduleData as Module[];export const exercises=exerciseData as Exercise[];export const assessments=assessmentData as unknown as Assessment[];
export const prerequisites=preData as ReferenceNote[];export const referenceNotes=noteData as ReferenceNote[];
export const lessonById=Object.fromEntries(lessons.map(l=>[l.id,l]));export const exerciseById=Object.fromEntries(exercises.map(e=>[e.id,e]));export const assessmentById=Object.fromEntries(assessments.map(a=>[a.id,a]));
export const practiceExercises=exercises.filter(e=>e.role!=='exam'&&e.role!=='diagnostic');
let solutionPromise:Promise<Solution[]>|undefined;
export function loadSolutions(){return solutionPromise??=(import('./solucoes.json').then(m=>m.default as Solution[]));}
export const CONTENT_VERSION='1.0.0' as const;
