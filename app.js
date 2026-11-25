// 의료 장비: 각 분야와 장비별 상세 설명
const equipmentGroups=['수술 · CT · 초음파 영상진단','정밀 임상 검사','치과 · 안과 · 특수 재활'];
const equipmentData=[
['TOSHIBA Activion16','초정밀 3D 전신 스캔','신체 내부의 단면 영상을 입체적으로 재구성해 병변의 위치와 범위를 확인합니다. 검사 결과는 질환 평가와 수술 계획 수립에 활용합니다.'],
['GE LOGIQ P9','고해상도 복부·심장 진단 초음파','복부 장기의 형태와 심장의 움직임을 실시간으로 살펴봅니다. 장기 내부의 변화와 혈류를 확인해 질환 평가와 치료 경과 관찰에 활용합니다.'],
['SAMSUNG V8','장기·혈류 정밀 영상 분석 초음파','다양한 영상 기능으로 복부 장기와 심혈관의 구조를 관찰합니다. 조직의 변화와 혈류 상태를 함께 확인해 진단에 필요한 정보를 제공합니다.'],
['Genoray ZEN-2090 Pro','실시간 수술용 영상 투시','수술 중 실시간 엑스레이 영상으로 뼈의 정렬과 고정물의 위치를 확인합니다. 수술 부위의 상태를 살피며 필요한 처치를 진행하도록 돕습니다.'],
['GE Avance - Dash 4000','흡입마취·생체신호 모니터링','흡입마취와 호흡을 관리하고 심박수·혈압·산소포화도 등 주요 생체신호를 확인합니다. 수술 중 환자의 상태 변화를 지속적으로 살피는 데 활용합니다.'],
['UNIUM','고정밀 정형외과 수술 정형 드릴','골절·관절 수술에서 뼈를 절삭하거나 고정에 필요한 구멍을 만드는 데 사용합니다. 수술 목적에 맞는 기구를 연결해 다양한 정형외과 수술에 활용합니다.'],
['Olympus GIF-Q260','소화기 정밀 관찰·이물 제거 내시경','소화기 내부의 점막 상태와 이물 여부를 영상으로 확인합니다. 필요에 따라 조직검사와 내시경으로 접근 가능한 이물 제거에 활용합니다.'],
['M-TECHNOLOGY MS-20','수술 시야 확보·분비물 흡인 석션기','수술 중 발생하는 혈액과 분비물을 흡인하는 장비입니다. 수술 부위가 잘 보이도록 시야를 확보해 원활한 처치를 돕습니다.'],
['LigaSure','혈관 밀봉·절단 시스템','혈관과 조직을 압박한 상태에서 에너지를 전달해 밀봉하고 절단합니다. 수술 중 혈관 처리와 출혈 관리에 활용합니다.'],
['Bipolar Forceps','미세 혈관 정밀 지혈','집게 끝으로 잡은 조직에 전류를 전달해 혈관을 응고시킵니다. 수술 중 출혈 부위를 선택적으로 지혈하는 데 사용합니다.'],
['Bovie','고주파 조직 절개·지혈 전기수술기','고주파 전류를 이용해 조직을 절개하거나 출혈 부위를 응고시킵니다. 수술 단계와 조직 상태에 맞춰 절개·지혈 기능을 활용합니다.'],
['Electric Pen Drive','척추 수술용 정밀 골절삭 기구','드릴과 절삭용 기구를 연결해 뼈를 다듬고 필요한 부위를 제거합니다. 척추·정형외과 수술에서 세밀한 골조직 처리를 돕습니다.'],
['Fujifilm NX700','혈액화학·장기 기능 분석기','간·신장 관련 수치와 혈당 등 혈액 속 여러 성분을 분석합니다. 장기 기능과 대사 상태를 평가하고 치료 전후의 변화를 확인합니다.'],
['Bionote Vcheck','염증·호르몬·심장사상충 분석기','췌장염(cPL/fPL), 호르몬 질환, 심장 사상충 등을 정량화된 수치로 정확하게 판독합니다.'],
['Microsemi LC-662','혈액 세포 정밀 분석','빈혈, 염증, 혈소판 상태를 정밀하게 측정하여 아이의 면역 체계와 기초 건강을 면밀히 체크합니다.'],
['ABL9','혈액가스·전해질 균형 분석기','혈액의 산도와 산소·이산화탄소 분압, 전해질 수치를 분석합니다. 호흡과 산·염기 균형을 평가해 응급 진료와 치료 방향 결정에 필요한 정보를 제공합니다.'],
['Nikon Eclipse Ei','고배율 세포·검체 관찰 현미경','분변과 세포 검체 등을 확대해 관찰합니다. 세포의 형태와 기생충 등 진단에 필요한 단서를 확인합니다.'],
['CF-10','혈액 성분 원심 분리기','혈액 및 요검사 시 성분을 안정적으로 분리하여 검사의 정확도를 높여주는 기초 필수 장비입니다.'],
['Topcon SL-D7','각막·수정체 정밀 검사 램프','가느다란 빛을 비추어 각막과 수정체 등 눈 앞부분을 확대 관찰합니다. 안구 구조의 변화를 살펴 각막 질환과 백내장 등의 평가에 활용합니다.'],
['Recende BL-610C','스케일링·치과 처치 덴탈 머신','스케일링과 치아 연마, 발치 과정 등에 필요한 기구를 연결해 사용합니다. 치아와 잇몸 상태에 맞춘 다양한 치과 처치를 돕습니다.'],
['KC Technology','외이도·고막 정밀 관찰 검이경','외이도와 고막을 확대해 관찰합니다. 귀 안의 염증·분비물·이물 등을 확인해 치료 계획 수립에 활용합니다.'],
['CLAROX','치근·치조골 정밀 엑스레이','겉으로 보이지 않는 치아 뿌리와 치조골을 영상으로 확인합니다. 치과 질환의 범위를 평가하고 치료·발치 계획을 세우는 데 활용합니다.'],
['CryoPen','피부 병변 국소 냉동치료','저온의 냉각제를 병변에 국소적으로 적용하는 장비입니다. 병변의 종류와 크기, 위치를 고려해 냉동치료에 활용합니다.'],
['Wuxi Jiajian JM-3A','자극·신경근육 재활 전침 치료기','침에 전기 자극을 전달하는 동물용 전침 장비입니다. 환자의 상태에 따라 통증 관리와 신경·근육 재활치료에 활용합니다.'],
['PIOON P1-G10','통증 관리·회복 보조 레이저 치료기','레이저 에너지를 이용해 통증·염증 완화와 연부조직 회복을 돕는 치료에 활용합니다. 환자의 상태와 치료 부위에 맞춰 적용합니다.']
];
const equipmentTabs=document.querySelector('.equipment-tabs'),equipmentGrid=document.querySelector('#equipment-grid'),equipmentMobile=matchMedia('(max-width:900px)');
let equipmentCurrent=0;
function showEquipment(index,focus=false){
 equipmentCurrent=index;const start=[0,12,18][index],end=[12,18,25][index];
 equipmentTabs.querySelectorAll('button').forEach((tab,i)=>{const active=i===index;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1});
 equipmentGrid.setAttribute('aria-labelledby',`equipment-tab-${index}`);equipmentGrid.replaceChildren();
 equipmentData.slice(start,end).forEach((item,i)=>{const n=start+i+1;const article=document.createElement('article');article.className='equipment-card';const mobileOpen=equipmentMobile.matches;article.classList.toggle('is-open',mobileOpen);const button=document.createElement('button');button.type='button';button.className='equipment-card-button';button.setAttribute('aria-expanded',String(mobileOpen));button.setAttribute('aria-label',`${item[0]} 상세 설명`);const image=document.createElement('img');image.src=`images/section14_${n}.jpg`;image.alt='';image.loading='lazy';const title=document.createElement('span');title.className='equipment-card-title';title.textContent=item[0];const subtitle=document.createElement('span');subtitle.className='equipment-card-subtitle';subtitle.textContent=item[1];const details=document.createElement('span');details.className='equipment-card-detail';details.textContent=item[2];button.append(image,title,subtitle,details);button.addEventListener('click',()=>{const open=article.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open))});article.append(button);equipmentGrid.append(article)});
 if(focus)equipmentTabs.querySelectorAll('button')[index].focus();
}
equipmentGroups.forEach((label,i)=>{const tab=document.createElement('button');tab.type='button';tab.id=`equipment-tab-${i}`;tab.setAttribute('role','tab');tab.setAttribute('aria-controls','equipment-grid');tab.textContent=label;tab.addEventListener('click',()=>showEquipment(i));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(equipmentCurrent+1)%equipmentGroups.length;else if(event.key==='ArrowLeft')next=(equipmentCurrent-1+equipmentGroups.length)%equipmentGroups.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=equipmentGroups.length-1;else return;event.preventDefault();showEquipment(next,true)});equipmentTabs.append(tab)});
showEquipment(0);
equipmentMobile.addEventListener('change',event=>equipmentGrid.querySelectorAll('.equipment-card').forEach(card=>{card.classList.toggle('is-open',event.matches);card.querySelector('button').setAttribute('aria-expanded',String(event.matches))}));
const menu=document.querySelector('.menu'),nav=document.querySelector('nav'),mobileNav=matchMedia('(max-width:900px)');
function clearNavSelection(){nav.querySelectorAll('a.is-selected').forEach(link=>link.classList.remove('is-selected'))}
function closeMobileNav(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');clearNavSelection()}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));if(!open)clearNavSelection()});
nav.addEventListener('click',event=>{const link=event.target.closest('a');if(!link||!nav.contains(link))return;if(mobileNav.matches&&nav.classList.contains('open')&&event.detail!==0&&!link.classList.contains('is-selected')){event.preventDefault();clearNavSelection();link.classList.add('is-selected');return}closeMobileNav()});
mobileNav.addEventListener('change',closeMobileNav);

// Main visual carousel: autoplay, pause/play and pointer swipes.
const hero=document.querySelector('.hero');
const heroSlides=[...hero.querySelectorAll('.hero-slide')];
const heroProgress=hero.querySelector('.hero-progress span'),heroCount=hero.querySelector('.hero-count');
const heroPause=hero.querySelector('.hero-pause'),heroPlay=hero.querySelector('.hero-play');
const heroReduce=matchMedia('(prefers-reduced-motion: reduce)');
let heroIndex=0,heroStart=null,heroPlaying=!heroReduce.matches,heroVisible=true,heroElapsed=0,heroLast=performance.now();
function updateHeroProgress(){heroProgress.style.width=`${Math.min(100,heroElapsed/50)}%`}
function updateHeroControls(){heroCount.textContent=`${heroIndex+1}/${heroSlides.length}`;heroPause.setAttribute('aria-pressed',String(!heroPlaying));heroPlay.setAttribute('aria-pressed',String(heroPlaying));updateHeroProgress()}
function setHeroPlaying(playing){heroPlaying=playing;heroLast=performance.now();updateHeroControls()}
heroPause.addEventListener('click',()=>setHeroPlaying(false));
heroPlay.addEventListener('click',()=>setHeroPlaying(true));
if('IntersectionObserver' in window)new IntersectionObserver(entries=>{heroVisible=entries.some(entry=>entry.isIntersecting);heroLast=performance.now()},{threshold:.1}).observe(hero);
document.addEventListener('visibilitychange',()=>{heroLast=performance.now()});
function showHero(index){heroElapsed=0;heroIndex=(index+heroSlides.length)%heroSlides.length;heroSlides.forEach((slide,i)=>{const active=i===heroIndex;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active))});updateHeroControls()}
showHero(0);
setInterval(()=>{const now=performance.now(),dt=Math.min(250,now-heroLast);heroLast=now;if(!heroPlaying||!heroVisible||document.hidden)return;heroElapsed+=dt;if(heroElapsed>=5000){heroProgress.style.transition='none';showHero(heroIndex+1);requestAnimationFrame(()=>heroProgress.style.removeProperty('transition'))}else updateHeroProgress()},100);
hero.addEventListener('pointerdown',event=>{if(event.button!==0||event.target.closest('button'))return;heroStart={x:event.clientX,y:event.clientY,id:event.pointerId};hero.classList.add('is-dragging');hero.setPointerCapture(event.pointerId)});
hero.addEventListener('pointerup',event=>{if(!heroStart||event.pointerId!==heroStart.id)return;const dx=event.clientX-heroStart.x,dy=event.clientY-heroStart.y;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))showHero(heroIndex+(dx<0?1:-1));heroStart=null;hero.classList.remove('is-dragging')});
hero.addEventListener('pointercancel',()=>{heroStart=null;hero.classList.remove('is-dragging')});
hero.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showHero(heroIndex+(event.key==='ArrowRight'?1:-1))}});

// Pin the story window while its longer content moves through the mask.
const story=document.querySelector('#story');
const storyWindow=story.querySelector('.story-window');
const storyContent=story.querySelector('.story-content');
const storyReducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let storyDistance=0,storyFrame=0;
function updateStory(){storyFrame=0;if(!story.classList.contains('is-scroll-enabled'))return;const pinTop=parseFloat(getComputedStyle(storyWindow).top)||0;const elapsed=Math.max(0,Math.min(storyDistance,pinTop-story.getBoundingClientRect().top));story.style.setProperty('--story-offset',`${-elapsed}px`);const statsSection=document.querySelector('.stats');const covered=Math.max(0,Math.min(statsSection.offsetHeight,storyWindow.getBoundingClientRect().bottom-statsSection.getBoundingClientRect().top));statsSection.style.clipPath=`inset(${covered}px 0 0)`}
function measureStory(){if(storyReducedMotion.matches){story.classList.remove('is-scroll-enabled');story.style.removeProperty('--story-track-height');story.style.removeProperty('--story-offset');document.querySelector('.stats').style.removeProperty('clip-path');return}story.classList.add('is-scroll-enabled');storyDistance=Math.max(0,storyContent.offsetHeight-storyWindow.clientHeight);story.style.setProperty('--story-track-height',`${storyWindow.clientHeight+storyDistance}px`);updateStory()}
window.addEventListener('scroll',()=>{if(!storyFrame)storyFrame=requestAnimationFrame(updateStory)},{passive:true});
window.addEventListener('resize',measureStory);storyReducedMotion.addEventListener('change',measureStory);new ResizeObserver(measureStory).observe(storyContent);measureStory();

// Hide navigation while scrolling down and bring it back on upward scroll.
const siteHeader=document.querySelector('header');
let navScrollPosition=Math.max(0,window.scrollY);
window.addEventListener('scroll',()=>{
  const current=Math.max(0,window.scrollY);
  const difference=current-navScrollPosition;
  if(current<=80){siteHeader.classList.remove('is-hidden');siteHeader.inert=false;navScrollPosition=current;return}
  if(Math.abs(difference)<5)return;
  const hide=difference>0;
  siteHeader.classList.toggle('is-hidden',hide);
  siteHeader.inert=hide;
  if(hide)closeMobileNav()
  navScrollPosition=current;
},{passive:true});

// Replay the statistics animation each time the section re-enters view.
const stats=document.querySelector('.stats');
if(stats && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  stats.classList.add('motion-ready');
  stats.querySelectorAll('.stat-value').forEach(value=>{
    const reels=document.createElement('span');reels.className='stat-reels';reels.setAttribute('aria-hidden','true');
    [...value.dataset.number].forEach((character,index)=>{
      if(character==='.') {const point=document.createElement('span');point.textContent='.';reels.append(point);return}
      const digit=document.createElement('span');digit.className='stat-digit';
      const strip=document.createElement('span');strip.className='stat-digit-strip';strip.style.setProperty('--digit-steps',String(20+Number(character)));strip.style.setProperty('--digit-delay',`${index*.09}s`);
      for(let i=0;i<30;i++){const numeral=document.createElement('span');numeral.textContent=String(i%10);strip.append(numeral)}
      digit.append(strip);reels.append(digit);
    });
    const unit=document.createElement('span');unit.className='stat-unit';unit.textContent=value.dataset.unit;reels.append(unit);value.replaceChildren(reels);
  });
  function revealStats(){
    const rect=stats.getBoundingClientRect();
    const storyBottom=storyWindow.getBoundingClientRect().bottom;
    const value=stats.querySelector('.stat-value').getBoundingClientRect();
    const valueIsVisible=value.top>=Math.max(0,storyBottom) && value.top<innerHeight*.82 && value.bottom>0;
    if(valueIsVisible && !stats.classList.contains('is-visible')){
      stats.classList.remove('is-resetting');
      void stats.offsetWidth;
      stats.classList.add('is-visible');
    }else if((rect.bottom<=0 || rect.top>=innerHeight) && stats.classList.contains('is-visible')){
      stats.classList.add('is-resetting');
      stats.classList.remove('is-visible');
    }
  }
  window.addEventListener('scroll',revealStats,{passive:true});window.addEventListener('resize',revealStats);revealStats();
}

// Draw the director section divider lines when they come into view.
const director=document.querySelector('.director');
if(director && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  director.classList.add('lines-ready');
  const directorObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){director.classList.add('lines-visible');directorObserver.disconnect()}},{threshold:.15});
  directorObserver.observe(director.querySelector('.credentials'));
}

// Switch medical staff by department, with keyboard navigation.
const teamTabs=[...document.querySelectorAll('#team [role="tab"]')];
function selectTeamTab(selected,focus=false){teamTabs.forEach(tab=>{const active=tab===selected;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;const panel=document.getElementById(tab.getAttribute('aria-controls'));panel.hidden=!active;if(active){panel.classList.remove('team-enter');void panel.offsetWidth;panel.classList.add('team-enter')}});if(focus)selected.focus()}
teamTabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTeamTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%teamTabs.length;else if(event.key==='ArrowLeft')next=(index-1+teamTabs.length)%teamTabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=teamTabs.length-1;else return;event.preventDefault();selectTeamTab(teamTabs[next],true)})});

// Mobile card navigation for the medical team and equipment categories.
function setupMobileCardSlider(section,trackFor,tabs,label){
  const controls=document.createElement('div');controls.className='mobile-card-controls';
  controls.innerHTML=`<div class="mobile-card-progress" role="progressbar" aria-label="${label} 위치" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div><span class="mobile-card-count" aria-live="polite"></span><button class="mobile-card-prev" type="button" aria-label="이전 ${label}"></button><button class="mobile-card-next" type="button" aria-label="다음 ${label}"></button>`;
  section.append(controls);
  const bar=controls.querySelector('.mobile-card-progress'),fill=bar.firstElementChild,count=controls.querySelector('.mobile-card-count'),prev=controls.querySelector('.mobile-card-prev'),next=controls.querySelector('.mobile-card-next');
  function state(){const track=trackFor(),items=[...track.children],step=items.length>1?items[1].offsetLeft-items[0].offsetLeft:track.clientWidth;const index=Math.max(0,Math.min(items.length-1,Math.round(track.scrollLeft/(step||1))));return {track,items,step,index}}
  function update(){const {items,index}=state(),total=items.length;const fraction=total?(label==='장비'&&total>1?1/6+(5/6)*index/(total-1):(index+1)/total):0;const value=Math.round(fraction*10000)/100;fill.style.width=`${value}%`;bar.setAttribute('aria-valuenow',String(Math.round(value)));count.textContent=total?`${index+1}/${total}`:'0/0';prev.disabled=index===0;next.disabled=index>=total-1}
  function move(direction){const {track,items,step,index}=state(),target=Math.max(0,Math.min(items.length-1,index+direction));track.scrollTo({left:target*step,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  section.querySelectorAll('.team-grid,.equipment-grid').forEach(track=>track.addEventListener('scroll',update,{passive:true}));
  const reset=()=>requestAnimationFrame(()=>{trackFor().scrollLeft=0;update()});
  tabs.forEach(tab=>{tab.addEventListener('click',reset);tab.addEventListener('keydown',event=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(event.key))reset()})});
  window.addEventListener('resize',update);update();
}
const teamSection=document.querySelector('#team'),teamCarousel=document.createElement('div');
teamCarousel.className='team-carousel';
teamSection.querySelectorAll('.team-grid').forEach(panel=>teamCarousel.append(panel));
teamSection.append(teamCarousel);
setupMobileCardSlider(teamCarousel,()=>document.querySelector('#team .team-grid:not([hidden])'),teamTabs,'의료진');
const equipmentCarousel=document.createElement('div');equipmentCarousel.className='equipment-carousel';equipmentGrid.before(equipmentCarousel);equipmentCarousel.append(equipmentGrid);
setupMobileCardSlider(equipmentCarousel,()=>equipmentGrid,[...equipmentTabs.querySelectorAll('button')],'장비');

// Internal medicine tabs and their supplied descriptions.
const internalData=[
{tab:'심장 내과',title:'심장내과',headline:'기침이나 쉽게 지치는 모습이 반복된다면',description:'운동 후 피로, 기침, 호흡 변화, 실신 등 심장과 혈액순환에 관련된 증상을 살펴봅니다.',diseases:'판막 질환 · 심근 질환 · 부정맥 · 심부전'},
{tab:'소화기 내과',title:'소화기·간담도',headline:'구토와 설사, 식욕 변화를 살핍니다',description:'구토·설사가 반복되거나 식욕과 체중에 변화가 있을 때 위장관과 간·담도·췌장 상태를 확인합니다.',diseases:'위장염 · 만성 장 질환 · 췌장염 · 간·담도 질환'},
{tab:'호흡기 내과',title:'호흡기',headline:'기침과 호흡 변화의 원인을 확인합니다',description:'기침·재채기·콧물이나 호흡 소리의 변화가 이어지면 기도와 폐, 비강 상태를 살펴봅니다.',diseases:'기관지염 · 폐렴 · 고양이 천식 · 비강 질환'},
{tab:'내분비 내과',title:'내분비·대사',headline:'물을 마시는 양과 체중 변화도 살펴봅니다',description:'음수량과 소변량, 식욕·체중 변화 등을 확인해 호르몬과 대사 이상 여부를 살펴봅니다.',diseases:'당뇨병 · 쿠싱증후군 · 갑상선 질환'},
{tab:'비뇨기 내과',title:'신장·비뇨기',headline:'소변 습관과 신장 기능을 함께 확인합니다',description:'물을 마시는 양이나 소변 횟수가 달라지고, 배뇨할 때 불편해 보이는 경우 신장과 비뇨기 상태를 살펴봅니다.',diseases:'만성 신장 질환 · 급성 신장 손상 · 방광염 · 요로결석'},
{tab:'혈액·면역 내과',title:'혈액·면역',headline:'혈액검사 결과와 몸의 변화를 함께 봅니다',description:'잇몸이 창백하거나 멍·출혈이 생기고 기운이 떨어지는 경우 혈액과 면역계 상태를 확인합니다.',diseases:'빈혈 · 혈소판 질환 · 혈액응고 이상 · 면역매개 질환'},
{tab:'신경 내과',title:'신경계',headline:'보행과 균형, 반응의 변화를 살핍니다',description:'발작이나 고개 기울임, 균형 저하, 보행 이상이 나타나면 신경계 이상 여부를 확인합니다.',diseases:'발작 질환 · 전정계 질환 · 척수 질환 · 신경근육 질환'}
];
const internalTabs=document.querySelector('.internal-tabs'),internalPanel=document.querySelector('#internal-panel'),internalImage=internalPanel.querySelector('img'),internalPlaceholder=internalPanel.querySelector('.internal-image-placeholder');
let internalCurrent=0,internalImageVersion=0;
function selectInternal(index,focus=false){
  internalCurrent=index;const item=internalData[index];
  internalTabs.querySelectorAll('button').forEach((button,i)=>{const selected=i===index;button.classList.toggle('active',selected);button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1});
  internalPanel.setAttribute('aria-labelledby',`internal-tab-${index}`);
  internalPanel.querySelector('h3').textContent=item.title;internalPanel.querySelector('.internal-intro strong').textContent=item.headline;internalPanel.querySelector('.internal-intro p').textContent=item.description;internalPanel.querySelector('.internal-diseases p').textContent=item.diseases;
  const version=++internalImageVersion,source=`images/section6_${index+1}.jpg${index===0?'?v=revision-2':''}`,probe=new Image();
  internalImage.hidden=true;internalPlaceholder.hidden=false;
  probe.onload=()=>{if(version!==internalImageVersion)return;internalImage.src=source;internalImage.alt=`${item.title} 진료 이미지`;internalImage.hidden=false;internalPlaceholder.hidden=true};
  probe.onerror=()=>{if(version!==internalImageVersion)return;internalImage.hidden=true;internalPlaceholder.hidden=false};probe.src=source;
  if(focus)internalTabs.querySelectorAll('button')[index].focus();
}
internalData.forEach((item,index)=>{const button=document.createElement('button');button.type='button';button.id=`internal-tab-${index}`;button.setAttribute('role','tab');button.setAttribute('aria-controls','internal-panel');button.textContent=item.tab;button.addEventListener('click',()=>selectInternal(index));button.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(internalCurrent+1)%internalData.length;else if(event.key==='ArrowLeft')target=(internalCurrent-1+internalData.length)%internalData.length;else if(event.key==='Home')target=0;else if(event.key==='End')target=internalData.length-1;else return;event.preventDefault();selectInternal(target,true)});internalTabs.append(button)});
selectInternal(0);

// 자동으로 순환하는 진단 과정: 사용자가 조작할 때는 자동 이동을 잠시 쉽니다.
const diagnosticTrack=document.querySelector('.diagnostic-track');
const diagnosticProgress=document.querySelector('.diagnostic-progress');
const diagnosticThumb=diagnosticProgress.querySelector('span');
const diagnosticItems=[...diagnosticTrack.querySelectorAll('article')];
const diagnosticClones=diagnosticItems.map(item=>{const clone=item.cloneNode(true);clone.setAttribute('aria-hidden','true');diagnosticTrack.append(clone);return clone});
const diagnosticMotion=matchMedia('(prefers-reduced-motion: reduce)');
let diagnosticPointer=null,diagnosticMomentum=0,diagnosticTimer=0,diagnosticVisible=false,diagnosticHover=false,diagnosticLastInteraction=0;
function diagnosticCycle(){return diagnosticClones[0].offsetLeft-diagnosticItems[0].offsetLeft}
function updateDiagnostic(){
  const cycle=diagnosticCycle();if(!cycle)return;
  if(diagnosticTrack.scrollLeft>=cycle-.5){diagnosticTrack.scrollLeft-=cycle;return}
  const fraction=Math.max(0,Math.min(1,diagnosticTrack.scrollLeft/cycle));
  const width=Math.min(1,Math.max(.15,diagnosticTrack.clientWidth/cycle));
  diagnosticThumb.style.setProperty('--thumb-width',`${width*100}%`);
  diagnosticThumb.style.setProperty('--thumb-offset',`${fraction*(diagnosticProgress.clientWidth*(1-width))}px`);
  diagnosticProgress.setAttribute('aria-valuenow',String(Math.round(fraction*100)));
}
function diagnosticStep(){const a=diagnosticItems[0],b=diagnosticItems[1];return b.offsetLeft-a.offsetLeft}
function diagnosticMove(direction){cancelAnimationFrame(diagnosticMomentum);diagnosticLastInteraction=performance.now();diagnosticTrack.scrollBy({left:direction*diagnosticStep(),behavior:diagnosticMotion.matches?'instant':'smooth'})}
function scheduleDiagnostic(delay=3200){clearTimeout(diagnosticTimer);diagnosticTimer=setTimeout(()=>{if(diagnosticVisible&&!document.hidden&&!diagnosticMotion.matches&&!diagnosticPointer&&!diagnosticHover&&performance.now()-diagnosticLastInteraction>4000){diagnosticTrack.scrollBy({left:diagnosticStep(),behavior:'smooth'})}scheduleDiagnostic(3200)},delay)}
diagnosticTrack.addEventListener('scroll',updateDiagnostic,{passive:true});window.addEventListener('resize',updateDiagnostic);
diagnosticTrack.addEventListener('mouseenter',()=>{diagnosticHover=true});diagnosticTrack.addEventListener('mouseleave',()=>{diagnosticHover=false;diagnosticLastInteraction=performance.now()});
diagnosticTrack.addEventListener('focusin',()=>{diagnosticHover=true});diagnosticTrack.addEventListener('focusout',()=>{diagnosticHover=false;diagnosticLastInteraction=performance.now()});
diagnosticTrack.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;cancelAnimationFrame(diagnosticMomentum);diagnosticLastInteraction=performance.now();const now=performance.now();diagnosticPointer={id:event.pointerId,x:event.clientX,left:diagnosticTrack.scrollLeft,lastX:event.clientX,lastTime:now,velocity:0};diagnosticTrack.classList.add('is-dragging');diagnosticTrack.setPointerCapture(event.pointerId)});
diagnosticTrack.addEventListener('pointermove',event=>{if(!diagnosticPointer||event.pointerId!==diagnosticPointer.id)return;const now=performance.now(),elapsed=Math.max(1,now-diagnosticPointer.lastTime),velocity=(diagnosticPointer.lastX-event.clientX)/elapsed;diagnosticPointer.velocity=diagnosticPointer.velocity*.55+Math.max(-2,Math.min(2,velocity))*.45;diagnosticPointer.lastX=event.clientX;diagnosticPointer.lastTime=now;diagnosticTrack.scrollLeft=diagnosticPointer.left-(event.clientX-diagnosticPointer.x)});
function endDiagnosticDrag(event){if(!diagnosticPointer||event.pointerId!==diagnosticPointer.id)return;let velocity=performance.now()-diagnosticPointer.lastTime<90?diagnosticPointer.velocity:0;diagnosticPointer=null;diagnosticLastInteraction=performance.now();diagnosticTrack.classList.remove('is-dragging');if(event.type==='pointercancel'||diagnosticMotion.matches||Math.abs(velocity)<.08)return;let previous=null;function glide(time){if(previous===null){previous=time;diagnosticMomentum=requestAnimationFrame(glide);return}const elapsed=Math.min(32,time-previous);previous=time;const before=diagnosticTrack.scrollLeft;diagnosticTrack.scrollLeft+=velocity*elapsed;velocity*=Math.exp(-elapsed/220);if(Math.abs(velocity)>.03&&Math.abs(diagnosticTrack.scrollLeft-before)>.01)diagnosticMomentum=requestAnimationFrame(glide)}diagnosticMomentum=requestAnimationFrame(glide)}
diagnosticTrack.addEventListener('pointerup',endDiagnosticDrag);diagnosticTrack.addEventListener('pointercancel',endDiagnosticDrag);
diagnosticTrack.addEventListener('wheel',()=>{diagnosticLastInteraction=performance.now()},{passive:true});
diagnosticTrack.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();diagnosticMove(event.key==='ArrowRight'?1:-1)}});
if('IntersectionObserver' in window)new IntersectionObserver(entries=>{diagnosticVisible=entries.some(entry=>entry.isIntersecting);if(diagnosticVisible)scheduleDiagnostic(1800)},{threshold:.25}).observe(diagnosticTrack);else{diagnosticVisible=true;scheduleDiagnostic()}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)scheduleDiagnostic()});
diagnosticMotion.addEventListener('change',()=>scheduleDiagnostic());
updateDiagnostic();

// Surgical department tabs.
const surgeryData=[
{tab:'일반외과',title:'일반외과',headline:'피부와 복부 장기의 수술 질환을 다룹니다',description:'종양 제거, 위장관 이물 제거와 장 수술, 방광·자궁 수술 등을 시행할 수 있습니다.',diseases:'피부·연부조직 종양 · 위장관 이물 및 장폐색 · 방광결석 · 자궁축농증'},
{tab:'정형외과',title:'정형외과',headline:'뼈와 관절, 인대의 손상과 변형을 치료합니다',description:'골절 고정, 슬개골 탈구 교정, 십자인대 손상에 대한 TPLO 등 환자 상태에 맞는 수술을 고려합니다.',diseases:'골절 · 슬개골 탈구 · 전십자인대 파열 · 고관절 질환'},
{tab:'신경외과',title:'신경외과',headline:'척수·신경 압박을 섬세하게 진료합니다',description:'디스크로 인한 신경 압박을 해소하는 감압술이나 척추를 안정시키는 수술 등을 고려합니다.',diseases:'추간판 질환(디스크) · 척수 압박 · 척추 불안정성 · 척추 손상'},
{tab:'최소침습외과',title:'최소침습외과',headline:'절개 부담을 줄이는 최소침습 수술',description:'복강경·흉강경으로 내부를 확인하며 수술합니다. 환자 상태에 맞춰 절개 범위와 조직 손상을 줄이는 수술을 계획합니다.',diseases:'복강경 중성화 · 복강경 복부 장기 수술 · 흉강경 수술'},
{tab:'응급외과',title:'응급외과',headline:'급성 질환과 외상에 신속히 대응합니다',description:'먼저 환자 상태를 안정화하고, 검사 결과에 따라 응급 수술 여부와 시기를 결정합니다.',diseases:'위확장·염전(GDV) · 장폐색 및 장 천공 · 자궁축농증 · 외상에 따른 내부 출혈'}
];
const surgeryTabs=document.querySelector('.surgery-tabs'),surgeryPanel=document.querySelector('#surgery-panel'),surgeryImage=surgeryPanel.querySelector('img'),surgeryPlaceholder=surgeryPanel.querySelector('.surgery-image-placeholder');
let surgeryCurrent=0,surgeryImageVersion=0;
function selectSurgery(index,focus=false){
  surgeryCurrent=index;const item=surgeryData[index];
  surgeryTabs.querySelectorAll('button').forEach((button,i)=>{const selected=i===index;button.classList.toggle('active',selected);button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1});
  surgeryPanel.setAttribute('aria-labelledby',`surgery-tab-${index}`);
  surgeryPanel.querySelector('h3').textContent=item.title;surgeryPanel.querySelector('.surgery-intro strong').textContent=item.headline;surgeryPanel.querySelector('.surgery-intro p').textContent=item.description;surgeryPanel.querySelector('.surgery-diseases p').textContent=item.diseases;
  const version=++surgeryImageVersion,source=`images/section8_${index+1}.jpg${index===0?'?v=revision-2':''}`,probe=new Image();
  surgeryImage.hidden=true;surgeryPlaceholder.hidden=false;
  probe.onload=()=>{if(version!==surgeryImageVersion)return;surgeryImage.src=source;surgeryImage.alt=`${item.title} 진료 이미지`;surgeryImage.hidden=false;surgeryPlaceholder.hidden=true};
  probe.onerror=()=>{if(version!==surgeryImageVersion)return;surgeryImage.hidden=true;surgeryPlaceholder.hidden=false};probe.src=source;
  if(focus)surgeryTabs.querySelectorAll('button')[index].focus();
}
surgeryData.forEach((item,index)=>{const button=document.createElement('button');button.type='button';button.id=`surgery-tab-${index}`;button.setAttribute('role','tab');button.setAttribute('aria-controls','surgery-panel');button.textContent=item.tab;button.addEventListener('click',()=>selectSurgery(index));button.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(surgeryCurrent+1)%surgeryData.length;else if(event.key==='ArrowLeft')target=(surgeryCurrent-1+surgeryData.length)%surgeryData.length;else if(event.key==='Home')target=0;else if(event.key==='End')target=surgeryData.length-1;else return;event.preventDefault();selectSurgery(target,true)});surgeryTabs.append(button)});
selectSurgery(0);

// 수술 단계가 보이는 동안 강조 테두리를 순서대로 이동합니다.
document.querySelectorAll('#surgery-prep, #checkup').forEach(surgeryPrep=>{
  const prepCards=[...surgeryPrep.querySelectorAll('.steps article')];
  const prepMotion=matchMedia('(prefers-reduced-motion: reduce)');
  let prepIndex=0,prepTimer=0,prepVisible=false;
  function showPrepStep(index){prepIndex=index;prepCards.forEach((card,i)=>card.classList.toggle('is-active',i===index))}
  function updatePrepTimer(){clearInterval(prepTimer);prepTimer=0;if(prepVisible&&!document.hidden&&!prepMotion.matches&&prepCards.length>1)prepTimer=setInterval(()=>showPrepStep((prepIndex+1)%prepCards.length),2500)}
  if('IntersectionObserver' in window){new IntersectionObserver(entries=>{prepVisible=entries.some(entry=>entry.isIntersecting);if(prepVisible)showPrepStep(0);updatePrepTimer()},{threshold:.1}).observe(surgeryPrep.querySelector('.steps'))}else{prepVisible=true;updatePrepTimer()}
  document.addEventListener('visibilitychange',updatePrepTimer);
  prepMotion.addEventListener('change',()=>{if(prepMotion.matches)showPrepStep(0);updatePrepTimer()});
});

// 구강 질환별 사진과 설명
const oralData=[
{tab:'치은염',title:'치은염',headline:'잇몸이 붉게 붓고 쉽게 피가 난다면',description:'치태와 치석으로 잇몸에 염증이 생긴 상태입니다. 잇몸이 붉어지거나 붓고, 식사 중 출혈이나 입 냄새가 나타날 수 있습니다.',symptoms:'잇몸 붉어짐·부종 · 잇몸 출혈 · 입 냄새'},
{tab:'치주염',title:'치주염',headline:'치아를 지지하는 조직까지 염증이 진행됐다면',description:'치아 주변의 잇몸과 뼈가 손상되는 질환입니다. 잇몸 출혈이나 구취, 치아 흔들림이 나타날 수 있습니다.',symptoms:'잇몸 출혈·후퇴 · 입 냄새 · 치아 흔들림'},
{tab:'치아 파절',title:'치아 파절',headline:'치아가 깨지거나 금이 갔다면',description:'치아 손상은 겉으로 보이는 크기만으로 깊이를 판단하기 어렵습니다. 치아 내부까지 손상됐는지 진료를 통해 확인합니다.',symptoms:'한쪽으로 씹기 · 음식 흘리기 · 침 흘림 · 입 주변 만지기 싫어함'},
{tab:'잔존 유치',title:'잔존유치',headline:'영구치가 났는데 유치가 빠지지 않았다면',description:'유치와 영구치가 함께 남으면 치아가 겹쳐 나거나 음식물과 치태가 쌓일 수 있습니다. 치아 배열과 잇몸 상태를 확인합니다.',symptoms:'유치와 영구치가 함께 보임 · 치아 겹침 · 잇몸 자극'},
{tab:'고양이 만성 치은 구내염',title:'고양이 만성 치은구내염',headline:'입안 통증으로 먹기 힘들어한다면',description:'잇몸과 구강 점막에 만성 염증이 생기는 질환입니다. 통증과 염증 범위를 살펴 필요한 관리 방향을 확인합니다.',symptoms:'식욕 저하 · 침 흘림 · 입 냄새 · 입 주변 긁기'},
{tab:'고양이 치아 흡수 병변',title:'고양이 치아흡수병변',headline:'한쪽으로 씹거나 부드러운 음식만 찾는다면',description:'치아 조직이 흡수되며 손상되는 질환으로, 겉으로 잘 드러나지 않을 수 있습니다. 씹는 행동과 치아 상태를 확인합니다.',symptoms:'한쪽으로 씹기 · 음식 흘리기 · 침 흘림 · 부드러운 음식 선호'}
];
const oralTabs=document.querySelector('.oral-tabs'),oralPanel=document.querySelector('#oral-panel'),oralImage=oralPanel.querySelector('img');
let oralCurrent=0;
function selectOral(index,focus=false){
 oralCurrent=index;const item=oralData[index];
 oralTabs.querySelectorAll('button').forEach((button,i)=>{const active=i===index;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1});
 oralPanel.setAttribute('aria-labelledby',`oral-tab-${index}`);oralPanel.querySelector('h3').textContent=item.title;oralPanel.querySelector('.oral-intro strong').textContent=item.headline;oralPanel.querySelector('.oral-intro p').textContent=item.description;oralPanel.querySelector('.oral-symptoms p').textContent=item.symptoms;
 oralImage.src=`images/section11_${index+1}.jpg`;oralImage.alt=`${item.title} 구강 질환 이미지`;
 if(focus){const button=oralTabs.querySelectorAll('button')[index];button.focus();button.scrollIntoView({block:'nearest',inline:'nearest'})}
}
oralData.forEach((item,index)=>{const button=document.createElement('button');button.type='button';button.id=`oral-tab-${index}`;button.setAttribute('role','tab');button.setAttribute('aria-controls','oral-panel');button.textContent=item.tab;button.addEventListener('click',()=>selectOral(index));button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(oralCurrent+1)%oralData.length;else if(event.key==='ArrowLeft')next=(oralCurrent-1+oralData.length)%oralData.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=oralData.length-1;else return;event.preventDefault();selectOral(next,true)});oralTabs.append(button)});
selectOral(0);

// 시설 사진: 중앙 사진 확장, 주변 사진 클릭과 드래그 관성
const facilityCarousel=document.querySelector('.facility-carousel');
const facilityStage=facilityCarousel.querySelector('.facility-stage');
const facilityStatus=facilityCarousel.querySelector('.facility-status');
const facilityMotion=matchMedia('(prefers-reduced-motion: reduce)');
const facilityPhotos=Array.from({length:11},(_,i)=>{const button=document.createElement('button');button.type='button';button.className='facility-photo';button.setAttribute('aria-label',`시설 사진 ${i+1} 보기`);const image=document.createElement('img');image.src=`images/section15_${i+1}.jpg`;image.alt='';image.draggable=false;button.append(image);facilityStage.append(button);return button});
let facilityPosition=0,facilityPointer=null,facilityFrame=0,facilityDragged=false,facilityActive=0;
const facilityWrap=n=>((n%facilityPhotos.length)+facilityPhotos.length)%facilityPhotos.length;
function renderFacility(pos){
 const width=facilityStage.clientWidth;const center=Math.min(710,Math.max(210,width-64));const side=Math.min(223,Math.max(72,width*.2));const gap=width<=600?12:20;const extra=(center-side)/2;const ratio=Math.min(1,center/710);
 facilityCarousel.style.setProperty('--facility-center',`${center}px`);facilityCarousel.style.setProperty('--facility-height',`${477*ratio}px`);
 facilityPhotos.forEach((photo,i)=>{let slot=((i-pos+facilityPhotos.length*100+facilityPhotos.length/2)%facilityPhotos.length)-facilityPhotos.length/2;const distance=Math.abs(slot),near=Math.max(0,1-distance),cardWidth=side+(center-side)*near;const x=Math.sign(slot)*((side+gap)*distance+extra*Math.min(distance,1));let top=distance<=1?36*distance:distance<=2?36+55*(distance-1):Math.max(36,91-55*Math.min(1,distance-2));top*=ratio;photo.style.width=`${cardWidth}px`;photo.style.height=`${477*ratio}px`;photo.style.left=`calc(50% + ${x}px)`;photo.style.top=`${top}px`;photo.style.setProperty('--facility-wash',String(.6*Math.min(1,distance)));photo.style.zIndex=String(20-Math.round(distance*3));photo.style.visibility=distance<3.8?'visible':'hidden';photo.tabIndex=distance<3.8?0:-1;photo.style.pointerEvents=distance<3.8?'auto':'none'});
}
function finishFacility(index){facilityActive=facilityWrap(index);facilityPhotos.forEach((photo,i)=>{if(i===facilityActive)photo.setAttribute('aria-current','true');else photo.removeAttribute('aria-current')});facilityStatus.textContent=`시설 사진 ${facilityActive+1} / ${facilityPhotos.length}`}
function moveFacility(target){cancelAnimationFrame(facilityFrame);const start=facilityPosition,delta=target-start;if(facilityMotion.matches||Math.abs(delta)<.001){facilityPosition=target;renderFacility(target);finishFacility(Math.round(target));return}const duration=Math.min(1100,580+Math.abs(delta)*110);let begin=null;function frame(time){if(begin===null)begin=time;const t=Math.min(1,(time-begin)/duration);facilityPosition=start+delta*(1-Math.pow(1-t,3));renderFacility(facilityPosition);if(t<1)facilityFrame=requestAnimationFrame(frame);else finishFacility(Math.round(target))}facilityFrame=requestAnimationFrame(frame)}
function chooseFacility(index){const current=Math.round(facilityPosition),n=facilityPhotos.length,relative=((index-facilityWrap(current)+n+n/2)%n)-n/2;moveFacility(current+Math.round(relative))}
facilityPhotos.forEach((photo,i)=>photo.addEventListener('click',()=>{if(facilityDragged)return;chooseFacility(i)}));
facilityCarousel.querySelector('.facility-prev').addEventListener('click',()=>moveFacility(Math.round(facilityPosition)-1));
facilityCarousel.querySelector('.facility-next').addEventListener('click',()=>moveFacility(Math.round(facilityPosition)+1));
facilityCarousel.addEventListener('pointerdown',event=>{if(event.button!==0||event.target.closest('.facility-controls'))return;cancelAnimationFrame(facilityFrame);facilityDragged=false;facilityPointer={id:event.pointerId,x:event.clientX,y:event.clientY,position:facilityPosition,moved:false,samples:[{x:event.clientX,time:performance.now()}]};facilityCarousel.classList.add('is-dragging');(event.target.closest('.facility-photo')||facilityCarousel).setPointerCapture(event.pointerId)});
facilityCarousel.addEventListener('pointermove',event=>{if(!facilityPointer||event.pointerId!==facilityPointer.id)return;const dx=event.clientX-facilityPointer.x,dy=event.clientY-facilityPointer.y;if(!facilityPointer.moved&&Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy))facilityPointer.moved=true;if(facilityPointer.moved){const width=facilityStage.clientWidth,side=Math.min(223,Math.max(72,width*.2)),center=Math.min(710,Math.max(210,width-64)),step=(center+side)/2+(width<=600?12:20);facilityPosition=facilityPointer.position-dx/step;renderFacility(facilityPosition);const now=performance.now();facilityPointer.samples.push({x:event.clientX,time:now});facilityPointer.samples=facilityPointer.samples.filter(s=>now-s.time<120)}});
facilityCarousel.addEventListener('pointerup',event=>{if(!facilityPointer||event.pointerId!==facilityPointer.id)return;const pointer=facilityPointer;facilityPointer=null;facilityCarousel.classList.remove('is-dragging');if(pointer.moved){facilityDragged=true;const now=performance.now(),samples=pointer.samples.filter(s=>now-s.time<120);let velocity=0;if(samples.length>1){const first=samples[0],last=samples[samples.length-1];velocity=(last.x-first.x)/Math.max(1,last.time-first.time)}const width=facilityStage.clientWidth,side=Math.min(223,Math.max(72,width*.2)),center=Math.min(710,Math.max(210,width-64)),step=(center+side)/2+(width<=600?12:20);const drift=facilityMotion.matches?0:Math.max(-2,Math.min(2,-velocity*350/step));moveFacility(Math.round(facilityPosition+drift));setTimeout(()=>{facilityDragged=false},350)}else if(Math.abs(facilityPosition-Math.round(facilityPosition))>.001)moveFacility(Math.round(facilityPosition))});
facilityCarousel.addEventListener('pointercancel',()=>{if(!facilityPointer)return;facilityPointer=null;facilityCarousel.classList.remove('is-dragging');moveFacility(Math.round(facilityPosition))});
facilityCarousel.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveFacility(Math.round(facilityPosition)+(event.key==='ArrowRight'?1:-1))}});
window.addEventListener('resize',()=>renderFacility(facilityPosition));renderFacility(0);finishFacility(0);


// 개별 진료 사진이 중앙의 시점을 기준으로 움직이는 파노라마
(()=>{
  const stage=document.querySelector('.panorama-stage');
  if(!stage)return;
  const originals=[...stage.querySelectorAll('.panorama-card')];
  const next=stage.querySelector('.panorama-next'),prev=stage.querySelector('.panorama-prev');
  for(let copy=0;copy<2;copy++)originals.forEach(card=>stage.insertBefore(card.cloneNode(true),prev));
  const cards=[...stage.querySelectorAll('.panorama-card')],ns='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(ns,'svg');svg.setAttribute('width','0');svg.setAttribute('height','0');svg.setAttribute('aria-hidden','true');svg.style.position='absolute';
  const defs=document.createElementNS(ns,'defs');svg.append(defs);stage.append(svg);
  const masks=cards.map((card,i)=>{const clip=document.createElementNS(ns,'clipPath'),path=document.createElementNS(ns,'path');clip.id=`panorama-mask-${i}`;clip.setAttribute('clipPathUnits','objectBoundingBox');clip.append(path);defs.append(clip);card.style.clipPath=`url(#${clip.id})`;return path});
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let position=originals.length,frame=0,pointer=null,dragged=false,wheelTimer=0,lastInteraction=performance.now();
  const cardWidth=()=>parseFloat(getComputedStyle(cards[0]).width);
  const step=()=>cardWidth()*(402.86/386.282);
  const slotFor=(index,pos)=>{const n=cards.length;return ((index-pos+n*10+n/2)%n)-n/2};
  function render(pos){
    const w=cardWidth(),scale=w/386.282,s=step(),mid=stage.clientHeight/2-11.5*scale;
    const extend=x=>Math.max(0,Math.abs(x)-w/2);
    const upper=x=>{const d=extend(x),outer=Math.max(0,d-403*scale);return -247.436*scale-.076*d-(x<0?.07:.02)*outer},lower=x=>{const d=extend(x),outer=Math.max(0,d-403*scale);return 247.436*scale+.096*d+(x>0?.07:0)*outer};
    cards.forEach((card,i)=>{
      const slot=slotFor(i,pos),distance=Math.abs(slot),center=slot*s,x0=center-w/2,x1=center+w/2;
      const t0=upper(x0),t1=upper(x1),b0=lower(x0),b1=lower(x1),top=Math.min(t0,t1),bottom=Math.max(b0,b1),height=bottom-top;
      const a=(t0-top)/height,b=(t1-top)/height,c=(b0-top)/height,d=(b1-top)/height;
      card.style.setProperty('--panorama-copy-tilt',`${Math.atan2(b1-b0,w)*180/Math.PI}deg`);
      const rx=Math.min(.08,20*scale/w),ry=Math.min(.12,20*scale/height);
      const interp=(a,b,t)=>a+(b-a)*t;
      masks[i].setAttribute('d',`M 0 ${a+ry} Q 0 ${a} ${rx} ${interp(a,b,rx)} L ${1-rx} ${interp(a,b,1-rx)} Q 1 ${b} 1 ${b+ry} L 1 ${d-ry} Q 1 ${d} ${1-rx} ${interp(c,d,1-rx)} L ${rx} ${interp(c,d,rx)} Q 0 ${c} 0 ${c-ry} Z`);
      card.style.left=`calc(50% + ${center}px)`;card.style.top=`${mid+top}px`;card.style.height=`${height}px`;
      const visible=distance<Math.max(4.5,(stage.clientWidth/2+w)/s);card.style.setProperty('--panorama-visible',visible?'1':'0');card.style.setProperty('--panorama-layer',String(20-Math.min(19,Math.round(distance*3))));
      card.tabIndex=visible?0:-1;card.style.pointerEvents=visible?'auto':'none';card.setAttribute('aria-hidden',String(!visible));
    });
  }
  function finish(){const current=((Math.round(position)%cards.length)+cards.length)%cards.length;cards.forEach((card,i)=>{card.classList.toggle('is-active',i===current);if(i===current)card.setAttribute('aria-current','true');else card.removeAttribute('aria-current')})}
  function hide(){cards.forEach(card=>card.classList.remove('is-active'))}
  function animate(target){cancelAnimationFrame(frame);hide();const from=position,difference=target-from;if(reduced.matches||Math.abs(difference)<.001){position=target;render(position);finish();return}const duration=Math.min(900,500+Math.abs(difference)*100);let started=null;function tick(time){if(started===null)started=time;const progress=Math.min(1,(time-started)/duration);position=from+difference*(1-Math.pow(1-progress,3));render(position);if(progress<1)frame=requestAnimationFrame(tick);else{position=target;render(position);finish()}}frame=requestAnimationFrame(tick)}
  function move(direction){clearTimeout(wheelTimer);lastInteraction=performance.now();animate(Math.round(position)+direction)}
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  cards.forEach((card,i)=>card.addEventListener('click',()=>{if(dragged){dragged=false;return}const current=Math.round(position);animate(current+Math.round(slotFor(i,current)))}));
  stage.addEventListener('pointerdown',event=>{if(event.button!==0||event.target.closest('.panorama-prev,.panorama-next'))return;lastInteraction=performance.now();clearTimeout(wheelTimer);cancelAnimationFrame(frame);dragged=false;pointer={id:event.pointerId,x:event.clientX,y:event.clientY,position,moved:false,samples:[{x:event.clientX,time:performance.now()}]};(event.target.closest('.panorama-card')||stage).setPointerCapture(event.pointerId)});
  stage.addEventListener('pointermove',event=>{if(!pointer||event.pointerId!==pointer.id)return;const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;if(!pointer.moved&&Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)){pointer.moved=true;hide();stage.classList.add('is-dragging')}if(pointer.moved){position=pointer.position-dx/step();render(position);const now=performance.now();pointer.samples.push({x:event.clientX,time:now});pointer.samples=pointer.samples.filter(sample=>now-sample.time<120)}});
  function release(event){if(!pointer||event.pointerId!==pointer.id)return;const state=pointer;pointer=null;stage.classList.remove('is-dragging');if(event.type==='pointercancel'){animate(Math.round(position));return}if(state.moved){dragged=true;const now=performance.now(),samples=state.samples.filter(sample=>now-sample.time<120);let velocity=0;if(samples.length>1){const first=samples[0],last=samples[samples.length-1];velocity=(last.x-first.x)/Math.max(1,last.time-first.time)}const drift=reduced.matches?0:Math.max(-2,Math.min(2,-velocity*320/step()));animate(Math.round(position+drift));setTimeout(()=>{dragged=false},350)}else if(Math.abs(position-Math.round(position))>.001)animate(Math.round(position));}
  stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);
  stage.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});
  stage.addEventListener('wheel',event=>{if(Math.abs(event.deltaX)<=Math.abs(event.deltaY))return;event.preventDefault();lastInteraction=performance.now();cancelAnimationFrame(frame);hide();position+=event.deltaX/step();render(position);clearTimeout(wheelTimer);wheelTimer=setTimeout(()=>animate(Math.round(position)),120)},{passive:false});
  setInterval(()=>{const rect=stage.getBoundingClientRect();if(reduced.matches||document.hidden||pointer||stage.contains(document.activeElement)||(matchMedia('(hover:hover)').matches&&stage.matches(':hover'))||rect.bottom<=0||rect.top>=innerHeight||performance.now()-lastInteraction<5000)return;move(1)},1000);
  window.addEventListener('resize',()=>render(position));render(position);finish();
})();
// Reveal headings and cards as each section enters the viewport.
(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('is-revealed');
    observer.unobserve(entry.target);
  }),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
  function reveal(selector,className,stagger=0){
    document.querySelectorAll(selector).forEach((element,index)=>{
      element.classList.add(className);
      if(stagger)element.style.setProperty('--reveal-delay',`${index*stagger}ms`);
      observer.observe(element);
    });
  }
  reveal('.heading h2,.heading p,.care-panorama-heading h2,.care-panorama-heading p,.diagnostic-intro h2,.vaccination-intro h2,.vaccination-intro p,.story .eyebrow,.story h2,.story-copy p,.director blockquote p','reveal-lift');
  reveal('#care-environment .care-grid article','reveal-card',120);
  reveal('#checkup .steps article','reveal-card',120);
  reveal('#dental .dental-list article','reveal-right',120);
  const team=document.querySelector('#team');
  if(team){const teamObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){team.querySelector('.team-grid:not([hidden])')?.classList.add('team-enter');teamObserver.disconnect()}},{threshold:.1});teamObserver.observe(team)}
})();
