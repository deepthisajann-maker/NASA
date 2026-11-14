const STORAGE_KEY = 'echoes-of-exploration-v1';
const DESTINATIONS = {
  moon: { name: 'THE SILENT MOON', subtitle: 'LUNAR FIELD SITE // 001', width: 960, height: 540, tint: '#939596', artifacts: ['apollo-descent', 'apollo-lrv', 'apollo-alsep'] },
  mars: { name: 'RED PLANET RELICS', subtitle: 'MARTIAN FIELD SITE // 002', width: 960, height: 540, tint: '#bd694b', artifacts: ['opportunity', 'spirit', 'sojourner'] },
  deep: { name: 'THE LONG JOURNEY', subtitle: 'DEEP SPACE FIELD SITE // 003', width: 960, height: 540, tint: '#5d8bb4', artifacts: ['voyager-1', 'voyager-2'] },
  instruments: { name: 'THE FORGOTTEN INSTRUMENTS', subtitle: 'SCIENCE PAYLOAD ARCHIVE // 004', width: 960, height: 540, tint: '#8799a6', artifacts: ['apollo-retroreflector', 'sojourner-apxs'] }
};
const ARTIFACTS = [
  { id: 'apollo-descent', missionKey: 'apollo11', location: 'Moon', name: 'Apollo 11 Lunar Module descent stage', mission: 'Apollo 11', era: '1969', status: 'Intentionally left on the Moon', story: 'The descent stage of Eagle remained at the Apollo 11 landing site after the astronauts lifted off in the ascent stage. It was part of the mission hardware, not a rover that stopped working.', discovery: 'Apollo 11 returned the first samples collected by humans on another world. The samples helped scientists study the Moon’s age, composition, and history.', question: 'What happened to the Apollo 11 Lunar Module descent stage?', options: ['It returned to Earth with the crew', 'It remained on the Moon after the ascent stage lifted off', 'It is still orbiting Mars'], answer: 1, icon: '◉' },
  { id: 'apollo-lrv', missionKey: 'apollo15', location: 'Moon', name: 'Apollo 15 Lunar Roving Vehicle', mission: 'Apollo 15', era: '1971', status: 'Left on the Moon', story: 'Apollo 15 astronauts drove the first Lunar Roving Vehicle across the Moon in 1971. The battery-powered rover carried two astronauts and their tools, letting them explore farther from the landing site and bring back more samples.', discovery: 'The rover expanded the area astronauts could explore on foot. Apollo 15 returned a rich collection of lunar rocks, including the sample nicknamed “Genesis Rock.”', question: 'What was the Lunar Roving Vehicle built to help Apollo 15 astronauts do?', options: ['Travel farther over the lunar surface', 'Fly back to Earth without the Lunar Module', 'Drill through the entire Moon'], answer: 0, icon: '✣' },
  { id: 'apollo-alsep', missionKey: 'apollo15', location: 'Moon', name: 'Apollo 15 lunar experiment package', mission: 'Apollo 15 / ALSEP', era: '1971–1977', status: 'Experiments ended; equipment remains on the Moon', story: 'After landing, Apollo 15 astronauts set up a package of experiments that kept working after they left. Instruments measured moonquakes, heat flowing from below the surface, and the Moon’s magnetic environment. The network sent data back to Earth until its experiments were switched off in 1977.', discovery: 'Long-running measurements let scientists study the Moon as a world, including its seismic activity and interior—not just the landing site seen by astronauts.', question: 'What did the Apollo 15 experiment package help scientists study?', options: ['Moonquakes, heat flow, and the lunar environment', 'The weather patterns on Jupiter', 'The sound of stars exploding'], answer: 0, icon: '⌁' },
  { id: 'apollo-retroreflector', missionKey: 'apollo11', location: 'Moon', name: 'Apollo 11 laser retroreflector', mission: 'Apollo 11 / EASEP', era: '1969', status: 'Left on the Moon; used for science', story: 'The Apollo 11 crew deployed a retroreflector array on the lunar surface. Scientists can bounce laser pulses off it to measure the distance between Earth and the Moon.', discovery: 'Lunar laser ranging precisely measures the Earth–Moon distance and provides tests of gravity and the Moon’s motion. The array is a scientific instrument, not an operating spacecraft.', question: 'What can scientists do with the Apollo 11 retroreflector?', options: ['Measure the Earth–Moon distance with laser pulses', 'Send messages to Mars', 'Generate power for a lunar rover'], answer: 0, icon: '⌁' },
  { id: 'opportunity', missionKey: 'merB', location: 'Mars', name: 'Opportunity rover', mission: 'Mars Exploration Rover-B', era: '2003–2019', status: 'Inactive; mission ended in 2019', story: 'Opportunity landed in Meridiani Planum on January 25, 2004 UTC. Designed for a 90-sol primary mission, it explored Mars for more than 14 years before contact was lost during a planet-wide dust storm in 2018.', discovery: 'Rocks examined by Opportunity provided evidence that liquid water altered parts of ancient Mars. Its findings transformed understanding of past Martian environments.', question: 'What evidence did Opportunity help uncover?', options: ['Ancient liquid water altered Martian rocks', 'A living forest on Mars', 'Active volcanoes on the Moon'], answer: 0, icon: '✣' },
  { id: 'spirit', missionKey: 'merA', location: 'Mars', name: 'Spirit rover', mission: 'Mars Exploration Rover-A', era: '2003–2010', status: 'Inactive; mission ended in 2011', story: 'Spirit landed in Gusev Crater on January 4, 2004 UTC. It worked far beyond its planned 90-sol mission. NASA last heard from the rover in 2010 and ended recovery efforts in 2011.', discovery: 'Spirit found evidence that water had affected rocks at its landing site and explored diverse Martian terrain, including ancient volcanic and hydrothermal environments.', question: 'Spirit and Opportunity were originally designed for about how long?', options: ['90 Martian days (sols)', 'One Earth day', 'Twenty years'], answer: 0, icon: '✣' },
  { id: 'sojourner', missionKey: 'pathfinder', location: 'Mars', name: 'Sojourner rover', mission: 'Mars Pathfinder', era: '1997', status: 'Inactive; contact lost in 1997', story: 'Sojourner was the first successful Mars rover. It explored around the Pathfinder lander, using cameras and an alpha proton X-ray spectrometer to investigate nearby rocks and soil.', discovery: 'Sojourner demonstrated that a small, remotely operated rover could explore the Martian surface and analyze rocks, paving the way for later rover missions.', question: 'Why was Sojourner an important milestone?', options: ['It demonstrated rover exploration on Mars', 'It brought astronauts to Mars', 'It was the first spacecraft to reach Jupiter'], answer: 0, icon: '✣' },
  { id: 'sojourner-apxs', missionKey: 'pathfinder', location: 'Mars', name: 'Sojourner Alpha Proton X-ray Spectrometer', mission: 'Mars Pathfinder / APXS', era: '1997', status: 'Instrument on the inactive Sojourner rover', story: 'Sojourner carried an Alpha Proton X-ray Spectrometer (APXS) that was placed against nearby rocks and soil. By measuring the elements in a target, the instrument let scientists compare Martian materials from millions of miles away.', discovery: 'APXS helped identify the chemical composition of rocks and soil, showing how a compact scientific instrument could turn a rover visit into on-the-spot geology.', question: 'What kind of clue did Sojourner’s APXS measure in Martian rocks?', options: ['The elements they contain', 'Their exact age in Earth years', 'The number of tiny organisms living inside'], answer: 0, icon: '⌁' },
  { id: 'voyager-1', missionKey: 'voyager', location: 'Deep Space', name: 'Voyager 1', mission: 'Voyager', era: 'Launched 1977', status: 'Still operating; mission operations continue', story: 'Launched on September 5, 1977, Voyager 1 flew past Jupiter and Saturn before continuing into interstellar space. It carries the Golden Record, a message from Earth, and communicates with Earth across enormous distances.', discovery: 'Voyager 1 returned landmark observations of Jupiter and Saturn and, in 2012, became the first spacecraft to enter interstellar space. Its instruments continue to send scientific data when power and spacecraft systems allow.', question: 'What distinction did Voyager 1 achieve in 2012?', options: ['First spacecraft to enter interstellar space', 'First spacecraft to land on Mars', 'First crewed flight around the Moon'], answer: 0, icon: '⌁' },
  { id: 'voyager-2', missionKey: 'voyager', location: 'Deep Space', name: 'Voyager 2', mission: 'Voyager', era: 'Launched 1977', status: 'Still operating; mission operations continue', story: 'Voyager 2 launched before its twin, Voyager 1, in August 1977. It became the only spacecraft to visit Uranus and Neptune, then crossed into interstellar space in 2018. It continues its outward journey, sending data across the vast distance to Earth.', discovery: 'Its close flybys transformed what scientists knew about Jupiter, Saturn, Uranus, and Neptune. Voyager 2 is the only spacecraft to have visited Uranus and Neptune.', question: 'Which two planets has Voyager 2 visited that no other spacecraft has explored up close?', options: ['Uranus and Neptune', 'Mercury and Venus', 'Mars and Earth'], answer: 0, icon: '⌁' }
];
const LEVELS = [
  { number: 1, title: 'The Silent Moon', difficulty: 'Beginner', destination: 'moon', artifacts: ['apollo-descent', 'apollo-lrv', 'apollo-alsep'] },
  { number: 2, title: "The Red Planet's Forgotten Explorers", difficulty: 'Beginner–Intermediate', destination: 'mars', artifacts: ['spirit', 'opportunity', 'sojourner'] },
  { number: 3, title: 'Beyond the Solar System', difficulty: 'Intermediate', destination: 'deep', artifacts: ['voyager-1', 'voyager-2'] },
  { number: 4, title: 'The Forgotten Instruments', difficulty: 'Intermediate', destination: 'instruments', artifacts: ['apollo-retroreflector', 'sojourner-apxs'] },
  { number: 5, title: 'The Final Archive', difficulty: 'Final mission', final: true }
];
const ARCHIVE_CLUES = {
  'apollo-descent': 'The lower half of Eagle that landed on the Moon and stayed behind when the ascent stage lifted off.',
  'apollo-lrv': 'The first battery-powered vehicle driven by astronauts across the lunar surface.',
  'apollo-alsep': 'A package that sent moonquake, heat-flow, and magnetic measurements back to Earth.',
  'apollo-retroreflector': 'A passive array that bounces laser pulses to measure the Earth–Moon distance.',
  opportunity: 'A rover that explored Meridiani Planum and found rocks altered by ancient water.',
  spirit: 'A rover sent to Gusev Crater that worked far beyond its planned 90 sols.',
  sojourner: 'The small first Mars rover that explored around the Pathfinder lander.',
  'sojourner-apxs': 'A rover instrument that measured the chemical elements in Martian rocks and soil.',
  'voyager-1': 'The probe that entered interstellar space in 2012.',
  'voyager-2': 'The twin spacecraft that visited Uranus and Neptune before entering interstellar space.'
};
const MISSION_CHOICES = [
  { id: 'apollo11', label: 'Apollo 11' },
  { id: 'apollo15', label: 'Apollo 15' },
  { id: 'pathfinder', label: 'Mars Pathfinder' },
  { id: 'merA', label: 'Mars Exploration Rover-A (Spirit)' },
  { id: 'merB', label: 'Mars Exploration Rover-B (Opportunity)' },
  { id: 'voyager', label: 'Voyager 1 and Voyager 2' }
];
const SCENE_POSITIONS = {
  moon: [{x:.25,y:.33},{x:.74,y:.68},{x:.62,y:.34}], mars:[{x:.22,y:.32},{x:.72,y:.35},{x:.62,y:.7}], deep:[{x:.34,y:.36},{x:.7,y:.35}], instruments:[{x:.25,y:.36},{x:.7,y:.66}]
};
const state = { screen:'home', destination:'moon', level:1, player:{x:.5,y:.53}, keys:new Set(), paused:false, modalArtifact:null, quizAnswered:false, discoveries:[], answeredArtifacts:[], points:0, finalComplete:false, wrongAnswers:0, sound:null };
const $ = (selector) => document.querySelector(selector);
const canvas = $('#game-canvas');
const ctx = canvas.getContext('2d');
let artifacts = ARTIFACTS;
let lastFrame = 0;
let toastTimer;

function loadProgress(){
  try { const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); state.discoveries=Array.isArray(saved.discoveries)?saved.discoveries.filter(id=>ARTIFACTS.some(a=>a.id===id)):[]; state.answeredArtifacts=Array.isArray(saved.answeredArtifacts)?saved.answeredArtifacts.filter(id=>ARTIFACTS.some(a=>a.id===id)):[]; state.points=Number.isFinite(saved.points)?saved.points:0; state.finalComplete=saved.finalComplete===true; }
  catch { state.discoveries=[]; state.answeredArtifacts=[]; state.points=0; state.finalComplete=false; }
}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify({discoveries:state.discoveries,answeredArtifacts:state.answeredArtifacts,points:state.points,finalComplete:state.finalComplete})); updateProgressUI();}
function updateProgressUI(){
  $('#nav-count').textContent=state.discoveries.length;
  $('#home-discoveries').textContent=state.discoveries.length;
  $('#home-level-count').textContent=LEVELS.filter(isLevelComplete).length;
  $('#score').textContent=String(state.points).padStart(3,'0');
  $('#archive-count').textContent=state.discoveries.length;
  $('#archive-score').textContent=String(state.points).padStart(3,'0');
  renderArchive(); renderLevelMap(); updateFieldProgress();
}
function isLevelComplete(level){
  return level.final?state.finalComplete:level.artifacts.every(id=>state.discoveries.includes(id)&&state.answeredArtifacts.includes(id));
}
function isLevelUnlocked(level){
  return level.number===1||isLevelComplete(LEVELS[level.number-2]);
}
function renderLevelMap(){
  $('#level-grid').querySelectorAll('[data-level]').forEach(button=>{
    const level=LEVELS[Number(button.dataset.level)-1];
    const unlocked=isLevelUnlocked(level),complete=isLevelComplete(level);
    button.disabled=!unlocked;
    button.classList.toggle('locked',!unlocked);
    button.classList.toggle('complete',complete);
    button.querySelector('[data-level-status]').textContent=complete?'COMPLETE':unlocked?'READY':'LOCKED';
    button.querySelector('[data-level-progress]').textContent=level.final
      ?complete?'NASA Lost Hardware Archive restored':unlocked?'Final mission ready':'Complete levels 1–4 to unlock'
      :`${level.artifacts.filter(id=>state.discoveries.includes(id)).length}/${level.artifacts.length} records · ${level.artifacts.filter(id=>state.answeredArtifacts.includes(id)).length}/${level.artifacts.length} checks`;
  });
}
function renderFinalMission(){
  $('#matching-grid').innerHTML=ARTIFACTS.map((artifact,index)=>`
    <div class="match-row">
      <span><small>FILE ${String(index+1).padStart(2,'0')} · IDENTIFY THE ARTIFACT</small><strong>${ARCHIVE_CLUES[artifact.id]}</strong></span>
      <div class="match-choices">
        <select data-identify="${artifact.id}" data-correct="${artifact.id}" aria-label="Identify the artifact from clue ${index+1}">
          <option value="">Select an artifact…</option>
          ${ARTIFACTS.map(option=>`<option value="${option.id}">${option.name}</option>`).join('')}
        </select>
        <select data-match="${artifact.id}" data-correct="${artifact.missionKey}" aria-label="Match the identified artifact to its mission">
          <option value="">Select a mission…</option>
          ${MISSION_CHOICES.map(choice=>`<option value="${choice.id}">${choice.label}</option>`).join('')}
        </select>
      </div>
    </div>`).join('');
  $('#final-mission').classList.toggle('hidden',state.finalComplete);
  $('#final-complete').classList.toggle('hidden',!state.finalComplete);
  $('#final-feedback').textContent='';
}
function showScreen(name){
  if(name==='final'&&!isLevelUnlocked(LEVELS[4])){showToast('Complete the first four levels to unlock the final archive.');return;}
  document.querySelectorAll('.screen').forEach(el=>el.classList.add('hidden'));
  const target=$(`#${name}-screen`); if(target) target.classList.remove('hidden');
  state.screen=name;
  if(name==='map') updateProgressUI();
  if(name==='explore'){state.paused=false;$('#paused-overlay').classList.add('hidden');startLoop();}
  if(name==='archive') updateProgressUI();
  if(name==='final') renderFinalMission();
  window.scrollTo({top:0,behavior:'smooth'});
}
function startLevel(number){
  const level=LEVELS[number-1];
  if(!level||!isLevelUnlocked(level))return;
  if(level.final){showScreen('final');return;}
  startDestination(level.destination,level.number);
}
function startDestination(destination,levelNumber){
  if(!DESTINATIONS[destination]) return;
  state.destination=destination;state.level=levelNumber;state.player={x:.5,y:.55};state.paused=false;
  const info=DESTINATIONS[destination]; $('#location-name').textContent=info.name; $('#scene-subtitle').textContent=info.subtitle;
  $('#objective-title').textContent=LEVELS[levelNumber-1].title;
  $('#objective-copy').textContent='Explore the field site, recover every artifact record, and answer each mission question.';
  updateFieldProgress();
  showScreen('explore');
}
function updateFieldProgress(){
  const level=LEVELS[state.level-1];if(!level||level.final)return;
  const ids=level.artifacts; const found=ids.filter(id=>state.discoveries.includes(id)).length;
  $('#field-progress').textContent=`${found} / ${ids.length}`; $('#progress-fill').style.width=`${found/ids.length*100}%`;
  if(isLevelComplete(level)){$('#objective-title').textContent=`Level ${level.number} complete`;$('#objective-copy').textContent=level.number===4?'You restored the instrument records. Return to the level map to unlock the final archive.':'You recovered every record at this site. Return to the level map to unlock the next level.';}
  else if(found===ids.length){$('#objective-title').textContent='Records recovered';$('#objective-copy').textContent='Answer each mission check to complete this level and unlock the next chapter.';}
}
function renderArchive(){
  const grid=$('#archive-grid'); if(!grid)return;
  grid.innerHTML=ARTIFACTS.map(a=>{
    const found=state.discoveries.includes(a.id);
    return `<button class="archive-card ${found?'unlocked':'locked'}" ${found?`data-artifact="${a.id}"`:'disabled'}><span class="archive-location">${found?a.location.toUpperCase():'SIGNAL NOT YET LOGGED'}</span><strong>${found?a.name:'Unknown artifact'}</strong><small>${found?`${a.mission} · ${a.status}`:'Explore its field site to reveal this archive entry.'}</small></button>`;
  }).join('');
}
function showToast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2300);}
function discoverNearby(){
  const near=nearestArtifact(); if(!near || near.distance>.095){showToast('Move closer to a glowing artifact marker.');return;}
  openArtifact(near.artifact);
}
function nearestArtifact(){
  const info=DESTINATIONS[state.destination]; let nearest=null;
  info.artifacts.forEach((id,index)=>{const a=ARTIFACTS.find(item=>item.id===id);const pos=SCENE_POSITIONS[state.destination][index];const d=Math.hypot(state.player.x-pos.x,state.player.y-pos.y);if(!nearest||d<nearest.distance)nearest={artifact:a,distance:d,pos};});
  return nearest;
}
function openArtifact(artifact){
  state.modalArtifact=artifact;state.quizAnswered=false;
  const fresh=!state.discoveries.includes(artifact.id);
  $('#modal-kicker').textContent=fresh?'ARCHIVE ENTRY / NEW DISCOVERY':'ARCHIVE ENTRY / FIELD NOTES';
  $('#artifact-title').textContent=artifact.name;$('#artifact-mission').textContent=`${artifact.mission} · ${artifact.location}`;
  $('#artifact-era').textContent=artifact.era;$('#artifact-status').textContent=artifact.status;
  $('#artifact-story').textContent=artifact.story;$('#artifact-discovery-text').textContent=artifact.discovery;
  $('#modal-art').textContent=artifact.icon;
  $('#quiz-question').textContent=artifact.question;
  $('#quiz-options').innerHTML=artifact.options.map((option,i)=>`<button class="quiz-option" data-answer="${i}">${String.fromCharCode(65+i)}. ${option}</button>`).join('');
  $('#quiz-feedback').textContent='Choose an answer to complete your field note.';
  $('#artifact-done').disabled=true;
  if(fresh){
    const level=LEVELS[state.level-1],wasComplete=isLevelComplete(level);
    state.discoveries.push(artifact.id);state.points+=100;saveProgress();
    showToast(!wasComplete&&isLevelComplete(level)?`Level ${level.number} complete · next chapter unlocked`:'Artifact logged · +100 archive points');
  }
  $('#artifact-modal').classList.remove('hidden');
  $('#quiz-options').querySelector('button')?.focus();
}
function answerQuiz(index){
  if(state.quizAnswered||!state.modalArtifact)return;
  const level=LEVELS[state.level-1],wasComplete=isLevelComplete(level);
  state.quizAnswered=true;const right=index===state.modalArtifact.answer;
  if(!state.answeredArtifacts.includes(state.modalArtifact.id))state.answeredArtifacts.push(state.modalArtifact.id);
  const options=[...$('#quiz-options').querySelectorAll('button')];
  options.forEach((button,i)=>{button.disabled=true;if(i===state.modalArtifact.answer)button.classList.add('correct');if(i===index&&!right)button.classList.add('incorrect');});
  if(right){state.points+=25;$('#quiz-feedback').textContent='Correct — field knowledge confirmed. +25 points.';$('#quiz-feedback').style.color='#9df0b6';}
  else{$('#quiz-feedback').textContent='Not quite. The highlighted answer is in your field notes.';$('#quiz-feedback').style.color='#ffad91';}
  $('#artifact-done').disabled=false;saveProgress();
  if(!wasComplete&&isLevelComplete(level))showToast(`Level ${level.number} complete · next chapter unlocked`);
}
function submitFinalArchive(){
  if(state.finalComplete)return;
  const identifications=[...$('#matching-grid').querySelectorAll('[data-identify]')];
  const matches=[...$('#matching-grid').querySelectorAll('[data-match]')];
  if([...identifications,...matches].some(select=>!select.value)){$('#final-feedback').textContent='Identify every artifact and match each one to a mission before submitting.';return;}
  const incorrectIdentifications=identifications.filter(select=>select.value!==select.dataset.correct).length;
  const incorrectMatches=matches.filter(select=>select.value!==select.dataset.correct).length;
  const timelineCorrect=$('#timeline-answer').value==='correct';
  if(incorrectIdentifications||incorrectMatches||!timelineCorrect){
    const details=[];
    if(incorrectIdentifications)details.push(`${incorrectIdentifications} artifact ${incorrectIdentifications===1?'identification is':'identifications are'} incorrect`);
    if(incorrectMatches)details.push(`${incorrectMatches} mission ${incorrectMatches===1?'match is':'matches are'} incorrect`);
    if(!timelineCorrect)details.push('the timeline needs another look');
    $('#final-feedback').textContent=`Not restored yet: ${details.join('; ')}. Revisit your field notes and try again.`;
    return;
  }
  state.finalComplete=true;state.points+=250;
  $('#final-mission').classList.add('hidden');
  $('#final-complete').classList.remove('hidden');
  $('#final-feedback').textContent='All mission records match. Archive restored.';
  saveProgress();showToast('NASA Lost Hardware Archive restored · +250 points');
}
function closeModal(){ $('#artifact-modal').classList.add('hidden');state.modalArtifact=null;updateFieldProgress(); }
function drawScene(){
  if(state.screen!=='explore')return;
  const w=canvas.width,h=canvas.height,dest=state.destination;
  const sky=ctx.createLinearGradient(0,0,0,h);sky.addColorStop(0,dest==='deep'?'#091627':dest==='mars'?'#442b35':dest==='instruments'?'#0c1a2a':'#111b29');sky.addColorStop(.58,dest==='deep'?'#111e31':dest==='mars'?'#b46c51':dest==='instruments'?'#183347':'#4a5058');sky.addColorStop(1,dest==='deep'?'#1a2940':dest==='mars'?'#694337':dest==='instruments'?'#101d2c':'#6d6c68');ctx.fillStyle=sky;ctx.fillRect(0,0,w,h);
  // Deterministic stars and distant terrain create a self-contained scene without external assets.
  for(let i=0;i<95;i++){const x=(i*173+31)%w,y=(i*97+11)%(h*.62);ctx.fillStyle=`rgba(225,241,255,${.16+(i%5)*.11})`;ctx.fillRect(x,y,(i%13===0)?2:1,(i%13===0)?2:1);}
  if(dest==='deep'){
    ctx.fillStyle='#d5efff';ctx.beginPath();ctx.arc(w*.24,h*.28,42,0,Math.PI*2);ctx.fill();ctx.fillStyle='#14263c';ctx.beginPath();ctx.arc(w*.27,h*.25,39,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#7ed6fa55';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(w*.5,h*.47,300,58,-.16,0,Math.PI*2);ctx.stroke();
  } else if(dest==='instruments'){
    ctx.fillStyle='#132b3a';ctx.fillRect(0,h*.43,w,h*.57);
    ctx.strokeStyle='#31546a';ctx.lineWidth=1;
    for(let x=0;x<w;x+=80){ctx.beginPath();ctx.moveTo(x,h*.43);ctx.lineTo(w*.5+(x-w*.5)*.62,h);ctx.stroke();}
    for(let y=h*.53;y<h;y+=34){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
    ctx.strokeStyle='#75c9e8';ctx.globalAlpha=.35;
    ctx.strokeRect(w*.12,h*.2,w*.2,h*.2);ctx.strokeRect(w*.68,h*.24,w*.18,h*.16);
    ctx.globalAlpha=1;
  } else {
    ctx.fillStyle=dest==='mars'?'#9a5845':'#303842';ctx.beginPath();ctx.moveTo(0,h*.54);for(let x=0;x<=w;x+=40){const peak=Math.sin(x*.014)*22+Math.cos(x*.037)*13;ctx.lineTo(x,h*.48+peak);}ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();
    ctx.fillStyle=dest==='mars'?'#b5684b':'#76746e';ctx.beginPath();ctx.moveTo(0,h*.68);for(let x=0;x<=w;x+=34){ctx.lineTo(x,h*.66+Math.sin(x*.021)*14+Math.cos(x*.043)*8);}ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();
    for(let i=0;i<15;i++){const x=(i*211+48)%w,y=h*.68+(i*37)%(h*.31),r=8+(i*19)%28;ctx.strokeStyle=dest==='mars'?'#6c3e35':'#4e5050';ctx.globalAlpha=.35;ctx.beginPath();ctx.ellipse(x,y,r,r*.35,0,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;}
  }
  // Ground plane
  if(dest!=='instruments'){ctx.fillStyle=dest==='mars'?'#985a43':dest==='deep'?'#111c2c':'#797772';ctx.beginPath();ctx.moveTo(0,h*.74);ctx.lineTo(w,h*.69);ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.fill();}
  const info=DESTINATIONS[dest];
  info.artifacts.forEach((id,index)=>{const pos=SCENE_POSITIONS[dest][index],x=pos.x*w,y=pos.y*h,found=state.discoveries.includes(id);ctx.save();ctx.globalAlpha=found?.4:1;ctx.strokeStyle=found?'#94a9b8':'#8de6ff';ctx.fillStyle=found?'#b7c8d1':'#a7f0ff';ctx.shadowColor=found?'transparent':'#63d9ff';ctx.shadowBlur=found?0:16;ctx.beginPath();ctx.arc(x,y,16+Math.sin(performance.now()/400+index)*3,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.font='10px monospace';ctx.textAlign='center';ctx.fillText(found?'LOGGED':'SIGNAL',x,y-26);ctx.restore();
    // Small field artifact silhouette
    if(dest==='instruments'){ctx.fillStyle='#7fa6b6';ctx.fillRect(x-3,y+17,6,24);ctx.fillRect(x-16,y+17,32,5);ctx.strokeStyle='#b8eaff';ctx.strokeRect(x-12,y+4,24,12);}
    else{ctx.fillStyle=dest==='mars'?'#263541':dest==='deep'?'#7391a8':'#303d48';ctx.fillRect(x-13,y+20,26,10);ctx.fillRect(x-8,y+12,16,10);ctx.fillStyle='#101a22';ctx.fillRect(x-12,y+28,7,5);ctx.fillRect(x+6,y+28,7,5);}
  });
  drawExplorer(state.player.x*w,state.player.y*h,dest);
}
function drawExplorer(x,y,dest){ctx.save();ctx.translate(x,y);ctx.fillStyle='#d9eef7';ctx.shadowColor='#7edcff';ctx.shadowBlur=14;ctx.beginPath();ctx.arc(0,-8,8,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle=dest==='mars'?'#ee8e68':'#74cee8';ctx.fillRect(-6,0,12,16);ctx.strokeStyle='#d4f4ff';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-3,15);ctx.lineTo(-5,21);ctx.moveTo(3,15);ctx.lineTo(5,21);ctx.stroke();ctx.restore();}
function updateNearby(){
  if(state.screen!=='explore')return;
  const near=nearestArtifact(),within=near&&near.distance<.095,known=near&&state.discoveries.includes(near.artifact.id);
  $('#investigate-button').disabled=!within||state.paused;
  if(within){$('#nearby-title').textContent=known?near.artifact.name:'Signal located';$('#nearby-copy').textContent=known?'Press E to revisit this field note.':'Artifact nearby — investigate to add it to your archive.';}
  else{$('#nearby-title').textContent='Scanning for signals…';$('#nearby-copy').textContent='Explore the site to find an artifact.';}
}
function startLoop(time=0){if(state.screen!=='explore')return;const delta=Math.min((time-lastFrame)/1000,.04);lastFrame=time;if(!state.paused){const speed=delta*.34;let dx=0,dy=0;if(state.keys.has('arrowleft')||state.keys.has('a'))dx-=1;if(state.keys.has('arrowright')||state.keys.has('d'))dx+=1;if(state.keys.has('arrowup')||state.keys.has('w'))dy-=1;if(state.keys.has('arrowdown')||state.keys.has('s'))dy+=1;if(dx||dy){const scale=Math.hypot(dx,dy);state.player.x=Math.max(.045,Math.min(.955,state.player.x+dx/scale*speed));state.player.y=Math.max(.19,Math.min(.83,state.player.y+dy/scale*speed));}}
 drawScene();updateNearby();requestAnimationFrame(startLoop);}
function setPaused(paused){state.paused=paused;$('#paused-overlay').classList.toggle('hidden',!paused);$('#pause-button').innerHTML=paused?'▶ <span>Resume</span>':'Ⅱ <span>Pause</span>';if(!paused&&state.screen==='explore')startLoop();}

loadProgress();updateProgressUI();
document.addEventListener('click',e=>{
  const screenBtn=e.target.closest('[data-screen]');if(screenBtn){showScreen(screenBtn.dataset.screen);return;}
  const levelBtn=e.target.closest('[data-level]');if(levelBtn){startLevel(Number(levelBtn.dataset.level));return;}
  const dest=e.target.closest('[data-destination]');if(dest){startDestination(dest.dataset.destination);return;}
  const answer=e.target.closest('[data-answer]');if(answer){answerQuiz(Number(answer.dataset.answer));return;}
  const archiveEntry=e.target.closest('[data-artifact]');if(archiveEntry){const a=ARTIFACTS.find(item=>item.id===archiveEntry.dataset.artifact);if(a)openArtifact(a);return;}
  if(e.target.closest('[data-close-modal]'))closeModal();
});
$('#start-button').addEventListener('click',()=>showScreen('map'));
$('#manual-start').addEventListener('click',()=>showScreen('map'));
$('#investigate-button').addEventListener('click',discoverNearby);
$('#pause-button').addEventListener('click',()=>setPaused(!state.paused));
$('#resume-button').addEventListener('click',()=>setPaused(false));
$('#artifact-done').addEventListener('click',closeModal);
$('#submit-final').addEventListener('click',submitFinalArchive);
document.addEventListener('keydown',e=>{
  const key=e.key.toLowerCase();if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(key)&&state.screen==='explore')e.preventDefault();
  if(key==='escape'&&state.screen==='explore'&&$('#artifact-modal').classList.contains('hidden'))setPaused(!state.paused);
  if(key==='e'&&state.screen==='explore'&&!state.paused&&$('#artifact-modal').classList.contains('hidden'))discoverNearby();
  if(['arrowup','arrowdown','arrowleft','arrowright','w','a','s','d'].includes(key))state.keys.add(key);
});
document.addEventListener('keyup',e=>state.keys.delete(e.key.toLowerCase()));
window.addEventListener('blur',()=>state.keys.clear());
canvas.addEventListener('pointerdown',e=>{
 const rect=canvas.getBoundingClientRect(),x=(e.clientX-rect.left)/rect.width,y=(e.clientY-rect.top)/rect.height;
 const info=DESTINATIONS[state.destination];let nearest=null;
 info.artifacts.forEach((id,i)=>{const pos=SCENE_POSITIONS[state.destination][i],d=Math.hypot(x-pos.x,y-pos.y);if(!nearest||d<nearest.distance)nearest={id,distance:d};});
 if(nearest&&nearest.distance<.06){const pos=SCENE_POSITIONS[state.destination][info.artifacts.indexOf(nearest.id)];if(Math.hypot(state.player.x-pos.x,state.player.y-pos.y)<.13)openArtifact(ARTIFACTS.find(a=>a.id===nearest.id));else showToast('Move closer to the signal, then investigate.');}
});
$('#artifact-modal').addEventListener('click',e=>{if(e.target.id==='artifact-modal')closeModal();});
