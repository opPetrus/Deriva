import {createContext,useContext,useEffect,useRef,useState,type ReactNode} from 'react';
import type {Progress,Action} from '../domain/types';import {applyAction,initialProgress} from '../domain/progress';import {loadProgress,saveProgress} from './database';import {validateProgress} from './backup';
interface Context {state:Progress;dispatch:(a:Action)=>void;replace:(p:Progress)=>void;saveStatus:'saved'|'saving'|'error';error:string;retry:()=>void}
const C=createContext<Context|null>(null);
export function ProgressProvider({children}:{children:ReactNode}){
 const [state,setState]=useState<Progress>(initialProgress);const current=useRef(state);const [ready,setReady]=useState(false);const [error,setError]=useState('');const [saveStatus,setStatus]=useState<Context['saveStatus']>('saved');
 const queue=useRef(Promise.resolve());const persisted=useRef(0);const failed=useRef(false);const serial=useRef(0);
 useEffect(()=>{let alive=true;loadProgress().then(data=>{if(!alive)return;const p=data?validateProgress(data):initialProgress();persisted.current=p.revision;current.current=p;setState(p);setReady(true);}).catch(e=>{if(alive){setError('Não foi possível abrir os dados: '+String(e.message??e));setStatus('error');}});return()=>{alive=false;};},[]);
 function persist(next:Progress){const n=++serial.current;setStatus('saving');queue.current=queue.current.then(async()=>{if(failed.current)return;try{await saveProgress(next,persisted.current);persisted.current=next.revision;if(n===serial.current)setStatus('saved');}catch(e){failed.current=true;setError(String((e as Error).message));setStatus('error');}});}
 function dispatch(a:Action){if(failed.current)return;const next=applyAction(current.current,a);current.current=next;setState(next);persist(next);}
 function replace(p:Progress){if(failed.current)return;const next={...p,revision:current.current.revision+1};current.current=next;setState(next);persist(next);}
 function retry(){if(!ready){location.reload();return;}failed.current=false;setError('');const next={...current.current,revision:persisted.current+1};current.current=next;setState(next);persist(next);}
 useEffect(()=>{const onBefore=(e:BeforeUnloadEvent)=>{if(saveStatus!=='saved'){e.preventDefault();}};window.addEventListener('beforeunload',onBefore);return()=>window.removeEventListener('beforeunload',onBefore);},[saveStatus]);
 if(!ready)return <div className="startup" role="status"><strong>Deriva</strong><p>{error||'Abrindo seu espaço de estudo…'}</p>{error&&<button onClick={retry}>Tentar novamente</button>}</div>;
 return <C.Provider value={{state,dispatch,replace,saveStatus,error,retry}}>{children}</C.Provider>;
}
export function useProgress(){const c=useContext(C);if(!c)throw Error('Progresso indisponível.');return c;}
