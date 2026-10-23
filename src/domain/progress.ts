import type {Progress,Action,Attempt,Correction,Exercise,Category} from './types';
import {exerciseById,assessmentById,lessons,practiceExercises} from '../content';
export const categories:Category[]=['conceito','técnica','álgebra','domínio','modelagem','atenção'];
export const initialProgress=():Progress=>({schemaVersion:1,contentVersion:'1.0.0',revision:0,completedLessons:[],drafts:{},assistance:{},attempts:[],errors:[],reviews:{},examRuns:[],studySeconds:0,theme:'light'});
export const uid=()=>crypto.randomUUID();
export const weightedScore=(scores:number[],rubric:{weight:number}[])=>rubric.reduce((sum,r,i)=>sum+r.weight*(scores[i]??0),0);
export function applyAction(previous:Progress,action:Action):Progress{
 const s=structuredClone(previous);s.revision++;
 switch(action.type){
  case 'lesson':s.completedLessons=action.completed?[...new Set([...s.completedLessons,action.id])]:s.completedLessons.filter(i=>i!==action.id);break;
  case 'lastLesson':s.lastLessonId=action.id;break;
  case 'draft':s.drafts[action.id]=action.response;break;
  case 'help':{const h=s.assistance[action.id]??{hintCount:0,solutionViewed:false};s.assistance[action.id]={hintCount:Math.max(h.hintCount,action.hintCount??0),solutionViewed:h.solutionViewed||!!action.solution};break;}
  case 'attempt':s.attempts.push(action.attempt);s.assistance[action.attempt.exerciseId]={hintCount:0,solutionViewed:false};break;
  case 'grade':{
   const a=s.attempts.find(v=>v.id===action.attemptId);if(!a)throw Error('Tentativa inexistente.');
   if(action.correction.score<0||action.correction.score>1||!Number.isFinite(action.correction.score))throw Error('Pontuação inválida.');
   // Uma correção é imutável: alterar a avaliação exige nova tentativa, preservando histórico.
   if(a.correction)throw Error('Esta tentativa já foi corrigida.');a.correction=action.correction;
   const c=action.correction;const when=new Date(c.gradedAt).getTime();
   if(c.score<.9){s.errors.push({id:'error-'+a.id,attemptId:a.id,exerciseId:a.exerciseId,categories:c.categories,notes:c.notes,createdAt:c.gradedAt});}
   if(c.score>=.9&&!a.assisted){
    for(const e of s.errors)if(e.exerciseId===a.exerciseId&&!e.resolvedAt){e.resolvedAt=c.gradedAt;e.resolvedBy=a.id;}
   }
   const old=s.reviews[a.exerciseId];const stage=c.score>=.9&&!a.assisted?Math.min((old?.stage??0)+1,3):0;
   const days=[1,1,3,7][stage];s.reviews[a.exerciseId]={exerciseId:a.exerciseId,stage,lastAttemptId:a.id,dueAt:new Date(when+days*86400000).toISOString()};break;
  }
  case 'startExam':if(s.examRuns.some(r=>r.status==='running'))throw Error('Já existe avaliação em andamento.');s.examRuns.push(action.run);break;
  case 'examAnswer':{const r=s.examRuns.find(r=>r.id===action.runId);if(!r||r.status!=='running')throw Error('Avaliação encerrada.');if(!assessmentById[r.assessmentId].exercise_ids.includes(action.exerciseId))throw Error('Questão fora da avaliação.');r.responses[action.exerciseId]=action.response;break;}
  case 'finishExam':{
   const r=s.examRuns.find(r=>r.id===action.runId);if(!r||r.status==='submitted')break;
   r.status='submitted';r.submittedAt=action.now;r.timedOut=Date.parse(action.now)>=Date.parse(r.deadlineAt);
   for(const exerciseId of assessmentById[r.assessmentId].exercise_ids){const id=r.id+'-'+exerciseId;const a:Attempt={id,exerciseId,response:r.responses[exerciseId]??'',createdAt:action.now,assisted:false,hintCount:0,solutionViewed:false,kind:'assessment',examRunId:r.id};s.attempts.push(a);r.attemptIds.push(id);}break;
  }
  case 'study':s.studySeconds+=Math.max(0,Math.min(60,Math.floor(action.seconds)));break;
  case 'theme':s.theme=action.theme;break;
 }
 return s;
}
export function makeAttempt(p:Progress,id:string,response:string,now=new Date().toISOString()):Attempt{
 const h=p.assistance[id]??{hintCount:0,solutionViewed:false};return{id:uid(),exerciseId:id,response,createdAt:now,assisted:h.hintCount>0||h.solutionViewed,...h,kind:'practice'};
}
export function latestAttempts(p:Progress){const map=new Map<string,Attempt>();for(const a of p.attempts)map.set(a.exerciseId,a);return[...map.values()];}
export function moduleEvidence(p:Progress,moduleId:string){
 const a=latestAttempts(p).filter(a=>exerciseById[a.exerciseId]?.module_id===moduleId&&a.correction);
 return{graded:a.length,unassisted:a.filter(a=>!a.assisted&&a.correction!.score>=.9).length,assisted:a.filter(a=>a.assisted).length,pending:p.attempts.filter(a=>exerciseById[a.exerciseId]?.module_id===moduleId&&!a.correction).length};
}
export function dueReviews(p:Progress,now=Date.now()){return Object.values(p.reviews).filter(r=>Date.parse(r.dueAt)<=now).sort((a,b)=>a.stage-b.stage||Date.parse(a.dueAt)-Date.parse(b.dueAt));}
export function recommend(p:Progress):{title:string;reason:string;href:string}{
 const err=[...p.errors].reverse().find(e=>!e.resolvedAt);
 if(err){const e=exerciseById[err.exerciseId];return{title:'Revisar '+e.module_id+': '+(err.categories[0]??'resolução'),reason:err.notes||'Há um erro registrado que ainda não foi retomado.',href:'#/exercise/'+e.id};}
 const due=dueReviews(p)[0];if(due)return{title:'Retomar '+due.exerciseId,reason:'A revisão está no prazo de recuperação ativa.',href:'#/exercise/'+due.exerciseId};
 const next=lessons.find(l=>!p.completedLessons.includes(l.id));if(next)return{title:next.title,reason:'Próxima aula ainda não marcada como estudada.',href:'#/lesson/'+next.id};
 return{title:'Fazer um simulado',reason:'As aulas foram estudadas. Agora reúna evidências sem dicas.',href:'#/exams'};
}
export function variantFor(e:Exercise,p:Progress){return practiceExercises.find(v=>v.module_id===e.module_id&&v.origin==='authored_variant'&&v.id!==e.id&&!p.attempts.some(a=>a.exerciseId===v.id))??practiceExercises.find(v=>v.module_id===e.module_id&&v.id!==e.id);}
export function examScore(p:Progress,runId:string){const r=p.examRuns.find(r=>r.id===runId);if(!r)return null;const aa=r.attemptIds.map(id=>p.attempts.find(a=>a.id===id)!);if(aa.some(a=>!a?.correction))return null;return aa.reduce((n,a)=>n+a.correction!.score*assessmentById[r.assessmentId].points[a.exerciseId],0);}
export function correction(scores:number[],rubric:{weight:number}[],origin:Correction['origin'],notes:string,errorCategories:Category[]):Correction{return{score:weightedScore(scores,rubric),rubricScores:scores,origin,notes,categories:errorCategories,gradedAt:new Date().toISOString()};}
