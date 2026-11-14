const missions = [
  {
    id: "apollo-11",
    destination: "moon",
    destinationLabel: "THE MOON",
    name: "Eagle's descent stage",
    mission: "Apollo 11 · 1969",
    status: "Still on the Moon",
    statusDetail: "The descent stage stayed at the landing site after the astronauts departed.",
    recordTitle: "The landing stage that stayed behind",
    recordSummary: "Apollo 11's descent stage remained at Tranquility Base. The mission returned 21.6 kg of lunar samples for study on Earth.",
    summary: "A landing platform, a launchpad, and the part of Eagle that never came home.",
    story: "Imagine being the sturdy half of a spacecraft. I carried two astronauts down to the lunar surface, then gave the ascent stage a place to launch from. When they left the Moon, I stayed behind at Tranquility Base. I am a real piece of Apollo history—not a robot, but a working part of the machine that made the first crewed Moon landing possible.",
    science: "Apollo 11 returned 21.6 kg (47.5 lb) of lunar samples for study on Earth.",
    date: "Landed July 20, 1969",
    question: "Which part of the Apollo 11 lunar module remained at Tranquility Base?",
    answers: ["The ascent stage", "The descent stage", "The command module"],
    correctAnswer: 1,
    hint: "The ascent stage carried the astronauts back up to orbit. Which section was their landing platform?",
    success: "Exactly! The descent stage stayed on the Moon; the ascent stage carried the astronauts back to orbit.",
    sourceLabel: "NASA: Apollo 11",
    sourceUrl: "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
    art: "☾",
    coordinate: "0° 40′ 26.7″ N · 23° 28′ 22.6″ E"
  },
  {
    id: "sojourner",
    destination: "mars",
    destinationLabel: "MARS",
    name: "Sojourner",
    mission: "Mars Pathfinder · 1997",
    status: "Mission complete",
    statusDetail: "The rover's last communication was received September 27, 1997.",
    recordTitle: "A first drive on another world",
    recordSummary: "Sojourner demonstrated a mobile rover on Mars, examined rocks and soil, and worked for 83 days.",
    summary: "A rover about the size of a microwave that proved we could drive on Mars.",
    story: "Imagine being the little rover that got the wheels rolling on Mars. I was Sojourner, a six-wheeled explorer that rolled down from the Pathfinder lander in 1997. I inspected rocks with my instruments while cameras on the lander watched over me. My planned technology demonstration lasted a week; I kept working for 83 days. Together, we sent home thousands of images and measurements.",
    science: "Sojourner examined Martian rocks and soil; Pathfinder also studied the atmosphere and weather.",
    date: "Landed July 4, 1997",
    question: "What made Sojourner's mission a technology milestone?",
    answers: ["It was the first spacecraft to orbit Mars", "It demonstrated a mobile rover on Mars", "It brought Martian rocks back to Earth"],
    correctAnswer: 1,
    hint: "Sojourner had wheels—and it drove around the landing site.",
    success: "You got it! Sojourner demonstrated that a small, mobile rover could explore the Martian surface.",
    sourceLabel: "NASA: Mars Pathfinder",
    sourceUrl: "https://science.nasa.gov/mission/mars-pathfinder/",
    art: "✣",
    coordinate: "ARES VALLIS · MARS"
  },
  {
    id: "insight",
    destination: "mars",
    destinationLabel: "MARS",
    name: "InSight",
    mission: "Mars lander · 2018–2022",
    status: "Mission complete",
    statusDetail: "NASA ended the mission after the lander stopped communicating in December 2022.",
    recordTitle: "Listening beneath the Martian surface",
    recordSummary: "InSight detected more than 1,300 marsquakes, using seismic waves to help reveal Mars's interior.",
    summary: "A quiet seismologist that listened for marsquakes to reveal the planet's interior.",
    story: "Imagine being a robot that listens instead of roams. I stayed in one place on Mars and used a seismometer to feel marsquakes and meteorite impacts. Those vibrations helped scientists investigate the planet's crust, mantle, and core. Dust gradually covered my solar panels, leaving less power for my work. After I stopped communicating, mission controllers declared the mission over in December 2022.",
    science: "InSight detected more than 1,300 marsquakes, giving researchers clues about Mars's interior.",
    date: "Landed November 26, 2018",
    question: "What did InSight listen for to learn about Mars's interior?",
    answers: ["Marsquakes and other seismic waves", "Whistling winds from inside the planet", "Radio messages from ancient Martians"],
    correctAnswer: 0,
    hint: "A seismometer measures shaking and vibrations.",
    success: "Right! Seismic waves from marsquakes helped scientists study the layers inside Mars.",
    sourceLabel: "NASA: InSight",
    sourceUrl: "https://science.nasa.gov/mission/insight/",
    art: "⌁",
    coordinate: "ELYSIUM PLANITIA · MARS"
  },
  {
    id: "voyager-1",
    destination: "deep-space",
    destinationLabel: "DEEP SPACE",
    name: "Voyager 1",
    mission: "Voyager mission · launched 1977",
    status: "Still exploring",
    statusDetail: "Voyager 1 continues its journey through interstellar space; check NASA for current operations.",
    recordTitle: "A messenger crossing interstellar space",
    recordSummary: "After studying Jupiter and Saturn, Voyager 1 entered interstellar space in 2012 and continued outward.",
    summary: "A far-traveling probe carrying a message from Earth into the space between stars.",
    story: "Imagine traveling farther from Earth than any other spacecraft. I launched in 1977 to study the outer planets, then kept going. In 2012 I crossed into interstellar space—the region between stars—and continued sending information back across billions of miles. My power is limited, so engineers carefully manage which instruments can operate. I am not parked on a world: I am still traveling outward.",
    science: "Voyager 1 made close-up observations of Jupiter and Saturn before exploring interstellar space.",
    date: "Launched September 5, 1977",
    question: "What makes Voyager 1 different from the surface artifacts in this archive?",
    answers: ["It landed on a moon", "It is still traveling through space", "It was designed to drive on Mars"],
    correctAnswer: 1,
    hint: "Voyager 1 did not land—it kept moving outward from the Sun.",
    success: "That's it! Voyager 1 is still traveling through interstellar space, not resting on a surface.",
    sourceLabel: "NASA: Voyager",
    sourceUrl: "https://science.nasa.gov/mission/voyager/",
    art: "✦",
    coordinate: "INTERSTELLAR SPACE"
  }
];

const missionGrid = document.querySelector("#mission-grid");
const notesCount = document.querySelector("#notes-count");
const saveStatus = document.querySelector("#save-status");
const progressBar = document.querySelector(".progress-track");
const progressFill = document.querySelector(".progress-fill");
const archiveComplete = document.querySelector("#archive-complete");
const filterButtons = document.querySelectorAll("[data-filter]");
const storageKey = "ghosts-of-exploration-field-notes";

function loadProgress() {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return new Set();

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new TypeError("Saved field notes are not a list.");
    return new Set(parsed.filter((id) => missions.some((mission) => mission.id === id)));
  } catch (error) {
    console.error("Could not load saved field notes:", error);
    saveStatus.textContent = "Saved notes could not be loaded. You can still play this visit.";
    return new Set();
  }
}

const completedMissions = loadProgress();

function saveProgress() {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify([...completedMissions]));
    saveStatus.textContent = "Field notes saved in this browser.";
  } catch (error) {
    console.error("Could not save field notes:", error);
    saveStatus.textContent = "Progress could not be saved, but you can keep playing.";
  }
}

function missionCard(mission, index) {
  const isComplete = completedMissions.has(mission.id);
  const card = document.createElement("article");
  card.className = "mission-card";
  card.dataset.destination = mission.destination;
  card.dataset.mission = mission.id;
  card.innerHTML = `
    <div class="card-topline">
      <span class="card-index">EXPLORER ${String(index + 1).padStart(2, "0")}</span>
      <span class="card-index ${isComplete ? "found-tag" : ""}" data-found>${isComplete ? "✦ FILE RESTORED" : mission.destinationLabel}</span>
    </div>
    <div class="card-art art-${mission.destination}" aria-hidden="true">
      <span class="art-object">${mission.art}</span>
      <span class="art-coordinate">${mission.coordinate}</span>
    </div>
    <div class="card-copy">
      <p class="mission-meta">${mission.mission}</p>
      <h3>${mission.name}</h3>
      <p class="card-summary">${mission.summary}</p>
      <div class="card-actions">
        <button class="story-toggle" type="button" aria-expanded="false" aria-controls="story-${mission.id}" data-action="toggle">
          Open field log <span class="toggle-icon" aria-hidden="true">＋</span>
        </button>
        <a class="source-link" href="${mission.sourceUrl}" target="_blank" rel="noopener noreferrer">NASA source ↗</a>
      </div>
    </div>
    <div class="story-panel" id="story-${mission.id}" hidden>
      <p class="story-label">RECOVERED STORY FRAGMENT <span aria-hidden="true">/</span> IMAGINED VOICE</p>
      <p class="story-text">${mission.story}</p>
      <div class="fact-strip">
        <span><strong>Status:</strong> ${mission.status}. ${mission.statusDetail}</span>
        <span><strong>Science:</strong> ${mission.science}</span>
        <span><strong>Milestone:</strong> ${mission.date}</span>
      </div>
      <div class="record-unlocked" data-record hidden>
        <p class="story-label">MISSION FILE RESTORED</p>
        <h4>${mission.recordTitle}</h4>
        <p>${mission.recordSummary}</p>
      </div>
      <p class="quiz-label">RECONSTRUCT THE MISSION</p>
      <p class="quiz-question">${mission.question}</p>
      <div class="quiz-answers" role="group" aria-label="Answer choices for ${mission.name}">
        ${mission.answers.map((answer, answerIndex) => `<button class="answer-button" type="button" data-action="answer" data-answer="${answerIndex}">${answer}</button>`).join("")}
      </div>
      <p class="quiz-feedback" role="status" aria-live="polite"></p>
    </div>
  `;
  card.querySelector("[data-record]").hidden = !isComplete;
  return card;
}

function renderMissions() {
  missionGrid.replaceChildren(...missions.map(missionCard));
  updateProgress();
}

function updateProgress() {
  notesCount.textContent = String(completedMissions.size);
  progressBar.setAttribute("aria-valuenow", String(completedMissions.size));
  progressFill.style.width = `${(completedMissions.size / missions.length) * 100}%`;
  archiveComplete.hidden = completedMissions.size !== missions.length;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    missionGrid.querySelectorAll(".mission-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.destination !== filter;
    });
  });
});

missionGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".mission-card");
  const mission = missions.find((item) => item.id === card.dataset.mission);
  if (button.dataset.action === "toggle") {
    const panel = card.querySelector(".story-panel");
    const isOpening = panel.hidden;
    panel.hidden = !isOpening;
    button.setAttribute("aria-expanded", String(isOpening));
    button.firstChild.textContent = isOpening ? "Close field log " : "Open field log ";
    card.classList.toggle("is-expanded", isOpening);
    return;
  }

  const feedback = card.querySelector(".quiz-feedback");
  const selectedAnswer = Number(button.dataset.answer);
  if (selectedAnswer === mission.correctAnswer) {
    feedback.textContent = mission.success;
    feedback.classList.add("is-correct");
    if (!completedMissions.has(mission.id)) {
      completedMissions.add(mission.id);
      card.querySelector("[data-found]").textContent = "✦ FILE RESTORED";
      card.querySelector("[data-found]").classList.add("found-tag");
      card.querySelector("[data-record]").hidden = false;
      updateProgress();
      saveProgress();
    }
  } else {
    feedback.textContent = mission.hint;
    feedback.classList.remove("is-correct");
  }
});

renderMissions();
