// 2022 개정 교육과정 보통교과 기준 데이터
// 학년(grade) > 과목(subjects) > 주제(topics)
// category: 공통과목 / 일반선택 / 진로선택 / 융합선택
// topics가 비어있는 과목은 "준비중"으로 표시됩니다. 추후 내용을 채워 넣으면 됩니다.
const DATA = {
  1: [
    {
      name: "공통국어1·2",
      category: "공통과목",
      topics: [
        { title: "우리 지역 방언과 표준어 비교 분석", desc: "지역 방언 자료를 수집해 표준어와 비교하고 언어의 다양성을 탐구한다.", tag: "탐구활동" },
        { title: "고전문학 속 인물의 현대적 재해석", desc: "고전 작품 속 인물을 현대 사회 이슈에 빗대어 발표문을 작성한다.", tag: "독서연계" },
        { title: "매체 언어를 활용한 광고 비평문 쓰기", desc: "광고 속 언어 표현 방식을 분석하고 설득 전략을 비평한다.", tag: "쓰기활동" }
      ]
    },
    {
      name: "공통수학1·2",
      category: "공통과목",
      topics: [
        { title: "실생활 함수 그래프 탐구", desc: "기온 변화, 인구 증가 등 실제 데이터를 함수로 모델링해 본다.", tag: "탐구활동" },
        { title: "도형과 방정식의 활용 탐구", desc: "실생활 속 도형 문제를 좌표와 방정식으로 표현해 해결한다.", tag: "탐구활동" },
        { title: "수학사 인물 탐구 발표", desc: "수학자의 업적과 시대적 배경을 조사해 발표한다.", tag: "발표활동" }
      ]
    },
    {
      name: "공통영어1·2",
      category: "공통과목",
      topics: [
        { title: "영자신문 기사 분석 및 요약 발표", desc: "관심 분야의 영어 기사를 골라 핵심 내용을 요약·발표한다.", tag: "독해활동" },
        { title: "TED 강연 스크립트 분석", desc: "진로와 관련된 TED 강연을 분석해 발표 자료를 만든다.", tag: "진로연계" },
        { title: "영어권 문화 비교 에세이", desc: "우리 문화와 영어권 문화를 비교하는 에세이를 작성한다.", tag: "쓰기활동" }
      ]
    },
    { name: "한국사1·2", category: "공통과목", topics: [] },
    {
      name: "통합사회1·2",
      category: "공통과목",
      topics: [
        { title: "지역사회 문제 탐구 및 해결방안 제안", desc: "우리 지역의 사회 문제를 조사하고 해결 방안을 제안한다.", tag: "프로젝트" },
        { title: "인권 이슈 시사자료 분석 및 토론", desc: "최근 인권 관련 이슈를 자료로 분석하고 토론 활동을 진행한다.", tag: "토론활동" },
        { title: "SDGs 연계 탐구활동", desc: "지속가능발전목표 중 하나를 선택해 관련 탐구를 진행한다.", tag: "융합탐구" }
      ]
    },
    {
      name: "통합과학1·2",
      category: "공통과목",
      topics: [
        { title: "일상 속 화학 반응 탐구 실험", desc: "세제, 발효 등 생활 속 화학 반응을 실험으로 탐구한다.", tag: "실험활동" },
        { title: "생태계와 환경 문제 탐구 보고서", desc: "생태계 파괴 사례를 조사하고 보고서를 작성한다.", tag: "탐구활동" },
        { title: "신재생에너지 조사 발표", desc: "에너지 전환 정책과 신재생에너지 기술을 조사해 발표한다.", tag: "발표활동" }
      ]
    },
    { name: "과학탐구실험1·2", category: "공통과목", topics: [] },
    { name: "정보", category: "일반선택", topics: [] },
    { name: "진로와 직업", category: "일반선택", topics: [] }
  ],
  2: [
    { name: "화법과 언어", category: "일반선택", topics: [] },
    { name: "독서와 작문", category: "일반선택", topics: [] },
    {
      name: "문학",
      category: "일반선택",
      topics: [
        { title: "특정 작가의 작품 세계 비교 분석", desc: "한 작가의 여러 작품을 골라 주제 의식과 문체를 비교한다.", tag: "독서연계" },
        { title: "고전소설과 현대소설의 서사구조 비교", desc: "시대별 소설의 서사 구조 변화를 비교·분석한다.", tag: "탐구활동" },
        { title: "문학 작품 속 사회 문제 재조명 에세이", desc: "작품에 드러난 사회 문제를 오늘날의 관점에서 재해석한다.", tag: "쓰기활동" }
      ]
    },
    {
      name: "대수",
      category: "일반선택",
      topics: [
        { title: "지수·로그함수로 보는 실생활 문제", desc: "인구 성장, 방사성 붕괴 등을 지수·로그함수로 모델링한다.", tag: "탐구활동" },
        { title: "삼각함수의 활용 탐구", desc: "파동, 음악, 건축 등에 활용되는 삼각함수 사례를 조사한다.", tag: "융합탐구" },
        { title: "수열과 복리를 이용한 금융상품 분석", desc: "등비수열 원리로 복리 상품의 수익 구조를 분석한다.", tag: "탐구활동" }
      ]
    },
    { name: "미적분Ⅰ", category: "일반선택", topics: [] },
    { name: "확률과 통계", category: "일반선택", topics: [] },
    {
      name: "영어Ⅰ",
      category: "일반선택",
      topics: [
        { title: "영미문학 원서 독후 발표", desc: "원서를 읽고 감상문 및 발표 자료를 작성한다.", tag: "독서연계" },
        { title: "국제 이슈 영어 뉴스 비교 분석", desc: "동일 이슈를 다룬 여러 매체의 영어 기사를 비교한다.", tag: "탐구활동" },
        { title: "진로 관련 해외 자료 요약 발표", desc: "관심 진로 분야의 영어 기사나 논문을 요약해 발표한다.", tag: "진로연계" }
      ]
    },
    { name: "영어Ⅱ", category: "일반선택", topics: [] },
    { name: "영어 독해와 작문", category: "일반선택", topics: [] },
    { name: "세계시민과 지리", category: "일반선택", topics: [] },
    { name: "세계사", category: "일반선택", topics: [] },
    { name: "사회와 문화", category: "일반선택", topics: [] },
    {
      name: "현대사회와 윤리",
      category: "일반선택",
      topics: [
        { title: "인공지능 윤리 딜레마 사례 탐구", desc: "AI 관련 윤리적 쟁점을 사례 중심으로 조사하고 토론한다.", tag: "토론활동" },
        { title: "환경윤리 관점의 기후위기 대응 방안", desc: "환경윤리 이론을 바탕으로 기후위기 대응책을 탐구한다.", tag: "탐구활동" },
        { title: "생명윤리 이슈 찬반 토론", desc: "안락사, 유전자 편집 등 생명윤리 쟁점을 찬반 토론한다.", tag: "토론활동" }
      ]
    },
    { name: "물리학", category: "일반선택", topics: [] },
    {
      name: "화학",
      category: "일반선택",
      topics: [
        { title: "산과 염기 원리로 보는 생활 속 화학", desc: "생활용품 속 산·염기 반응을 실험으로 탐구한다.", tag: "실험활동" },
        { title: "화학반응 속도 영향 요인 실험 설계", desc: "온도, 농도 등이 반응 속도에 미치는 영향을 실험으로 확인한다.", tag: "실험활동" },
        { title: "신소재 개발 사례 조사", desc: "최근 개발된 신소재의 원리와 활용 사례를 조사해 발표한다.", tag: "탐구활동" }
      ]
    },
    { name: "생명과학", category: "일반선택", topics: [] },
    { name: "지구과학", category: "일반선택", topics: [] }
  ],
  3: [
    { name: "주제 탐구 독서", category: "진로선택", topics: [] },
    { name: "문학과 영상", category: "진로선택", topics: [] },
    { name: "독서 토론과 글쓰기", category: "융합선택", topics: [] },
    {
      name: "미적분Ⅱ",
      category: "진로선택",
      topics: [
        { title: "미분을 활용한 최적화 문제 탐구", desc: "경제·공학 분야의 최적화 문제를 미분으로 풀어본다.", tag: "융합탐구" },
        { title: "적분으로 구하는 넓이·부피 프로젝트", desc: "복잡한 도형의 넓이와 부피를 적분으로 계산해 본다.", tag: "탐구활동" },
        { title: "물리 현상 속 미적분 원리 탐구", desc: "속도·가속도 등 물리 개념을 미적분으로 설명한다.", tag: "융합탐구" }
      ]
    },
    { name: "기하", category: "진로선택", topics: [] },
    { name: "경제 수학", category: "진로선택", topics: [] },
    { name: "심화 영어", category: "진로선택", topics: [] },
    { name: "영미 문학 읽기", category: "진로선택", topics: [] },
    { name: "실생활 영어 회화", category: "융합선택", topics: [] },
    {
      name: "정치",
      category: "진로선택",
      topics: [
        { title: "선거제도 비교 연구", desc: "여러 나라의 선거제도를 비교하고 개선 방안을 제안한다.", tag: "탐구활동" },
        { title: "청소년 참정권 확대 찬반 토론", desc: "참정권 연령 하향에 대한 찬반 근거를 조사해 토론한다.", tag: "토론활동" },
        { title: "국제 정치 이슈 심층 분석", desc: "최근 국제 정치 이슈를 선택해 원인과 전망을 탐구한다.", tag: "탐구활동" }
      ]
    },
    {
      name: "법과 사회",
      category: "진로선택",
      topics: [
        { title: "헌법 판례 분석을 통한 기본권 탐구", desc: "실제 헌법재판소 판례를 통해 기본권 보장을 탐구한다.", tag: "탐구활동" },
        { title: "생활 속 법률 분쟁 사례 탐구", desc: "일상에서 발생할 수 있는 법률 분쟁 사례를 조사하고 해결 절차를 정리한다.", tag: "탐구활동" },
        { title: "청소년 노동권 보호 제도 탐구", desc: "청소년 근로 관련 법과 제도를 조사해 개선점을 제안한다.", tag: "탐구활동" }
      ]
    },
    {
      name: "경제",
      category: "진로선택",
      topics: [
        { title: "수요·공급 원리로 보는 시사 경제", desc: "최근 경제 이슈를 수요·공급 곡선으로 분석한다.", tag: "탐구활동" },
        { title: "환율 변동이 경제에 미치는 영향", desc: "환율 변화가 수출입, 물가 등에 미치는 영향을 탐구한다.", tag: "탐구활동" },
        { title: "행동경제학으로 본 소비자 심리", desc: "행동경제학 개념으로 소비자의 비합리적 선택을 분석한다.", tag: "융합탐구" }
      ]
    },
    { name: "윤리와 사상", category: "진로선택", topics: [] },
    { name: "역학과 에너지", category: "진로선택", topics: [] },
    { name: "화학반응의 세계", category: "진로선택", topics: [] },
    {
      name: "세포와 물질대사",
      category: "진로선택",
      topics: [
        { title: "유전자 재조합 기술 원리와 활용", desc: "유전자 재조합 기술의 원리와 실제 활용 사례를 조사한다.", tag: "탐구활동" },
        { title: "면역 반응과 감염병 대응 연구", desc: "면역 원리를 바탕으로 감염병 대응 전략을 탐구한다.", tag: "탐구활동" },
        { title: "세포 호흡과 에너지 대사 탐구", desc: "세포 호흡 과정과 에너지 전환 원리를 실험·자료로 탐구한다.", tag: "탐구활동" }
      ]
    },
    { name: "지구시스템과학", category: "진로선택", topics: [] },
    { name: "사회문제 탐구", category: "융합선택", topics: [] }
  ]
};

const gradeTabs = document.getElementById("gradeTabs");
const subjectGrid = document.getElementById("subjectGrid");
const topicPanel = document.getElementById("topicPanel");
const topicSubjectName = document.getElementById("topicSubjectName");
const topicList = document.getElementById("topicList");
const closePanel = document.getElementById("closePanel");

let currentGrade = 1;

function renderSubjects(grade) {
  subjectGrid.innerHTML = "";
  DATA[grade].forEach((subject) => {
    const btn = document.createElement("button");
    btn.className = "subject-card" + (subject.topics.length ? " ready" : "");
    btn.innerHTML = `
      <span class="subject-category">${subject.category}</span>
      <span class="subject-name">${subject.name}</span>
      <span class="subject-meta">${subject.topics.length ? subject.topics.length + "개 주제" : "준비중"}</span>
    `;
    btn.addEventListener("click", () => openTopics(subject));
    subjectGrid.appendChild(btn);
  });
}

function openTopics(subject) {
  topicSubjectName.textContent = `${subject.name} (${subject.category})`;
  topicList.innerHTML = "";

  if (!subject.topics.length) {
    topicList.innerHTML = `<p class="empty-state">이 과목의 주제 자료는 곧 추가될 예정입니다.</p>`;
  } else {
    subject.topics.forEach((topic) => {
      const card = document.createElement("div");
      card.className = "topic-card";
      card.innerHTML = `
        <p class="topic-title">${topic.title}</p>
        <p class="topic-desc">${topic.desc}</p>
        <span class="tag">${topic.tag}</span>
      `;
      topicList.appendChild(card);
    });
  }

  topicPanel.hidden = false;
  topicPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

gradeTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".grade-tab");
  if (!tab) return;
  currentGrade = Number(tab.dataset.grade);
  document.querySelectorAll(".grade-tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  topicPanel.hidden = true;
  renderSubjects(currentGrade);
});

closePanel.addEventListener("click", () => {
  topicPanel.hidden = true;
});

renderSubjects(currentGrade);
