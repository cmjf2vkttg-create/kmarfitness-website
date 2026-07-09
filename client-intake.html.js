// ─── DATA ──────────────────────────────────────────────────────────────────
const sections = [
  {
    id: "personal",
    title: "Personal Information",
    sub: "Basic contact and emergency details",
    content: `
      <div class="field-group">
        <div class="field-row three">
          <div>
            <label class="field-label">Full Name</label>
            <input class="field-input" placeholder="First and last name" data-key="name"/>
          </div>
          <div>
            <label class="field-label">Date of Birth</label>
            <input class="field-input" type="date" data-key="dob"/>
          </div>
          <div>
            <label class="field-label">Occupation</label>
            <input class="field-input" placeholder="Job title / role" data-key="occupation"/>
          </div>
        </div>
      </div>
      <div class="field-group">
        <div class="field-row">
          <div>
            <label class="field-label">Phone Number</label>
            <input class="field-input" type="tel" placeholder="07..." data-key="phone"/>
          </div>
          <div>
            <label class="field-label">Email Address</label>
            <input class="field-input" type="email" placeholder="email@example.com" data-key="email"/>
          </div>
        </div>
        <div style="margin-top:18px">
          <label class="field-label">Address</label>
          <input class="field-input" placeholder="Street, City, Postcode" data-key="address"/>
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Emergency Contact</div>
        <div class="field-row three">
          <div>
            <label class="field-label">Name</label>
            <input class="field-input" placeholder="Full name" data-key="ec_name"/>
          </div>
          <div>
            <label class="field-label">Phone</label>
            <input class="field-input" type="tel" placeholder="07..." data-key="ec_phone"/>
          </div>
          <div>
            <label class="field-label">Relationship</label>
            <input class="field-input" placeholder="e.g. Partner" data-key="ec_rel"/>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "service",
    title: "Service & Goals",
    sub: "What you're here for and what you'd like to achieve",
    content: `
      <div class="field-group">
        <div class="group-title">Service Requested <span style="font-weight:300;color:var(--soft)">(select all that apply)</span></div>
        <div class="checkbox-grid">
          ${cb(["Personal Training","Health & Lifestyle Coaching","Sports Massage","Relaxation Massage","Rehabilitation / Injury Support","Combination Package"])}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Primary Goals <span style="font-weight:300;color:var(--soft)">(select all that apply)</span></div>
        <div class="checkbox-grid">
          ${cb(["Weight Loss","Muscle Gain","Strength","Fitness","Mobility / Flexibility","Stress Reduction","Pain Relief","Sports Performance","Injury Recovery","Other"])}
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">Describe your goals in your own words</label>
        <textarea class="text-area" rows="3" placeholder="What are you hoping to achieve?" data-key="goals_text"></textarea>
        <label class="field-label" style="margin-top:16px">What would success look like for you?</label>
        <textarea class="text-area" rows="2" placeholder="e.g. Run a 5K, feel less stressed, move without pain..." data-key="success_text"></textarea>
      </div>
      <div class="field-group">
        <div class="group-title">Commitment level</div>
        <div class="rating-wrap">
          <div class="rating-labels"><span>Not very committed</span><span>Fully committed</span></div>
          <div class="rating-track">${ratingBtns("commitment",10)}</div>
        </div>
      </div>
    `
  },
  {
    id: "medical",
    title: "Medical History",
    sub: "Previous diagnoses — all information is confidential",
    content: `
      <div class="field-group">
        <div class="group-title">Have you ever been diagnosed with any of the following?</div>
        <div class="checkbox-grid">
          ${cb(["High Blood Pressure","Heart Disease","Stroke","Diabetes","Asthma","Epilepsy","Cancer","Arthritis","Osteoporosis","Anxiety","Depression","Other"])}
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">Please provide any details</label>
        <textarea class="text-area" rows="3" placeholder="Dates of diagnosis, current status, relevant notes..." data-key="medical_notes"></textarea>
      </div>
    `
  },
  {
    id: "health",
    title: "Current Health",
    sub: "How you're feeling right now",
    content: `
      <div class="field-group">
        <div class="group-title">Do you currently experience any of the following?</div>
        <div class="checkbox-grid">
          ${cb(["Chest Pain","Dizziness","Shortness of Breath","Severe Fatigue","Back Pain","Neck Pain","Joint Pain","Headaches","Swelling","None of the above"])}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Injuries, surgeries or accidents in the last 5 years?</div>
        <div class="checkbox-grid two-col" style="margin-bottom:14px">
          ${cb(["Yes","No"],"radio","injuries_yn")}
        </div>
        <label class="field-label">Details (if yes)</label>
        <textarea class="text-area" rows="2" placeholder="Please describe..." data-key="injuries_detail"></textarea>
        <label class="field-label" style="margin-top:14px">Areas NOT to be worked on during massage</label>
        <textarea class="text-area" rows="2" placeholder="e.g. left shoulder, lower back..." data-key="avoid_areas"></textarea>
      </div>
      <div class="field-group">
        <div class="group-title">Are you currently taking any medications?</div>
        <div class="checkbox-grid two-col" style="margin-bottom:14px">
          ${cb(["Yes","No"],"radio","meds_yn")}
        </div>
        <label class="field-label">If yes, please list</label>
        <textarea class="text-area" rows="2" placeholder="Medication name, dose, purpose..." data-key="meds_list"></textarea>
      </div>
    `
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    sub: "Exercise, sleep, and daily habits",
    content: `
      <div class="field-group">
        <div class="group-title">How many days per week do you exercise?</div>
        <div class="checkbox-grid four-col">
          ${cb(["0 days","1–2 days","3–4 days","5+ days"],"radio","exercise_freq")}
        </div>
        <label class="field-label" style="margin-top:16px">Current activities / sports</label>
        <input class="field-input" placeholder="e.g. Running, gym, swimming..." data-key="activities"/>
      </div>
      <div class="field-group">
        <div class="group-title">Current fitness level</div>
        <div class="checkbox-grid" style="grid-template-columns:repeat(3,1fr)">
          ${cb(["Beginner","Intermediate","Advanced"],"radio","fitness_level")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Average sleep per night</div>
        <div class="checkbox-grid four-col">
          ${cb(["Less than 5 hrs","5–6 hrs","7–8 hrs","9+ hrs"],"radio","sleep")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Daily stress level</div>
        <div class="rating-wrap">
          <div class="rating-labels"><span>Very low</span><span>Very high</span></div>
          <div class="rating-track">${ratingBtns("stress",10)}</div>
        </div>
      </div>
      <div class="field-group">
        <div class="field-row">
          <div>
            <div class="group-title" style="margin-bottom:10px">Do you smoke?</div>
            <div class="checkbox-grid two-col">
              ${cb(["Yes","No"],"radio","smoke")}
            </div>
          </div>
          <div>
            <div class="group-title" style="margin-bottom:10px">Alcohol consumption</div>
            <div class="checkbox-grid two-col">
              ${cb(["Never","Occasionally","Weekly","Daily"],"radio","alcohol")}
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "massage",
    title: "Massage Specific",
    sub: "Relevant information for massage therapy sessions",
    content: `
      <div class="field-group">
        <div class="group-title">Do you have any of the following? <span style="font-weight:300;color:var(--soft)">(select all that apply)</span></div>
        <div class="checkbox-grid">
          ${cb(["Varicose Veins","Skin Conditions","Open Wounds","Recent Fractures","Blood Clotting Disorders","Pregnancy","Recent Surgery","Recent Infection","None of the above"])}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Preferred massage pressure</div>
        <div class="checkbox-grid four-col">
          ${cb(["Light","Medium","Firm","Deep"],"radio","pressure")}
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">Areas requiring special attention</label>
        <textarea class="text-area" rows="2" placeholder="e.g. tight left shoulder, sore lower back..." data-key="massage_focus"></textarea>
      </div>
    `
  },
  {
    id: "coaching",
    title: "Coaching Readiness",
    sub: "For personal training and lifestyle coaching clients",
    content: `
      <div class="field-group">
        <div class="group-title">Have you worked with a coach or personal trainer before?</div>
        <div class="checkbox-grid two-col">
          ${cb(["Yes","No"],"radio","coach_before")}
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">What has prevented you from reaching your goals in the past?</label>
        <textarea class="text-area" rows="3" placeholder="e.g. motivation, time, injuries, knowledge..." data-key="barriers"></textarea>
        <label class="field-label" style="margin-top:16px">What support do you expect from your coach / trainer?</label>
        <textarea class="text-area" rows="3" placeholder="e.g. accountability, programming, nutrition advice..." data-key="expectations"></textarea>
      </div>
    `
  },
  {
    id: "consent",
    title: "Consent & Policies",
    sub: "Please read and tick each item to confirm",
    content: `
      <div class="field-group">
        <div class="group-title" style="margin-bottom:14px">Informed Consent</div>
        <div class="consent-list">
          ${consentItem("I understand that personal training and exercise carry inherent risks.")}
          ${consentItem("I understand that massage therapy is not a substitute for medical treatment.")}
          ${consentItem("I am responsible for informing my practitioner of any changes to my health.")}
          ${consentItem("I understand that results cannot be guaranteed.")}
          ${consentItem("I may stop any session at any time without consequence.")}
          ${consentItem("I have disclosed all known medical conditions honestly and completely.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title" style="margin-bottom:14px">Cancellation Policy</div>
        <div class="info-box">A minimum of <strong>24 hours' notice</strong> is required for cancellations or rescheduling. Late cancellations or missed appointments may be charged in full.</div>
        <div class="consent-list">
          ${consentItem("I understand and agree to the cancellation policy.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title" style="margin-bottom:14px">Media Consent <span style="font-weight:300;color:var(--soft)">(optional)</span></div>
        <div class="checkbox-grid two-col">
          ${cb(["Progress Tracking Only","Marketing & Social Media","Website Content","I Do Not Consent"])}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title" style="margin-bottom:10px">GDPR / Privacy Notice</div>
        <div class="info-box">Your personal and health data is collected for the purpose of delivering safe, effective services. It is stored securely and not shared with third parties without your consent. You may request access, correction, or deletion at any time.</div>
        <div class="consent-list">
          ${consentItem("I consent to my personal and health data being stored and processed as described above (UK GDPR).")}
        </div>
      </div>
    `
  },
  {
    id: "declaration",
    title: "Client Declaration",
    sub: "Sign to confirm all information is accurate",
    content: `
      <div class="field-group">
        <p style="font-size:0.9rem;color:var(--mid);line-height:1.7;margin-bottom:20px;font-style:italic">
          I certify that the information provided is accurate and complete to the best of my knowledge. I understand I am responsible for keeping my practitioner informed of any changes to my health or circumstances.
        </p>
        <div class="sig-row">
          <div class="sig-field">
            <label>Client Full Name</label>
            <input class="field-input" placeholder="Print full name" data-key="sig_name"/>
          </div>
          <div class="sig-field">
            <label>Signature</label>
            <input class="field-input" placeholder="Type name as signature" data-key="sig_sig"/>
          </div>
          <div class="sig-field">
            <label>Date</label>
            <input class="field-input" type="date" data-key="sig_date"/>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "practitioner",
    title: "Practitioner Notes",
    sub: "Internal use only — not visible to client",
    content: `
      <div class="practitioner-panel">
        <div class="group-title" style="margin-bottom:14px">⚕ Internal — Practitioner Only</div>
        <label class="field-label">Initial Assessment</label>
        <textarea class="text-area" rows="4" placeholder="Observations, first impressions, key concerns..." data-key="p_assessment"></textarea>
        <label class="field-label" style="margin-top:16px">Risk Level</label>
        <div class="checkbox-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:16px">
          ${cb(["Low","Medium","High"],"radio","risk_level")}
        </div>
        <label class="field-label">Recommendations</label>
        <textarea class="text-area" rows="3" placeholder="Next steps, referrals, session plan..." data-key="p_recs"></textarea>
        <div class="sig-row" style="margin-top:20px">
          <div class="sig-field">
            <label>Practitioner Name</label>
            <input class="field-input" placeholder="Full name" data-key="p_name"/>
          </div>
          <div class="sig-field">
            <label>Signature</label>
            <input class="field-input" placeholder="Type name" data-key="p_sig"/>
          </div>
          <div class="sig-field">
            <label>Date</label>
            <input class="field-input" type="date" data-key="p_date"/>
          </div>
        </div>
      </div>
    `
  }
];

// ─── HELPERS ───────────────────────────────────────────────────────────────
function cb(items, type = "checkbox", group = null) {
  return items.map(item => {
    const g = group ? `data-group="${group}"` : "";
    return `<div class="cb-item ${type === 'radio' ? 'radio' : ''}" data-type="${type}" ${g} onclick="toggleCb(this)">
      <div class="cb-box">
        <svg width="11" height="9" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 11 9"><polyline points="1 4.5 4 7.5 10 1"/></svg>
      </div>
      <span>${item}</span>
    </div>`;
  }).join("");
}

function ratingBtns(name, max) {
  let html = "";
  for (let i = 1; i <= max; i++) {
    html += `<button class="rating-btn" data-rating="${name}" data-val="${i}" onclick="selectRating(this)">${i}</button>`;
  }
  return html;
}

function consentItem(text) {
  return `<div class="consent-item" onclick="toggleConsent(this)">
    <div class="cb-box" style="margin-top:1px">
      <svg width="11" height="9" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 11 9"><polyline points="1 4.5 4 7.5 10 1"/></svg>
    </div>
    <span class="consent-text">${text}</span>
  </div>`;
}

// ─── STATE ─────────────────────────────────────────────────────────────────
let currentSection = 0;

// ─── INTERACTIONS ──────────────────────────────────────────────────────────
function toggleCb(el) {
  const type = el.dataset.type;
  const group = el.dataset.group;

  if (type === "radio" && group) {
    // Deselect siblings in same group
    document.querySelectorAll(`[data-group="${group}"]`).forEach(s => s.classList.remove("checked"));
    el.classList.add("checked");
  } else {
    el.classList.toggle("checked");
  }
  updateProgress();
}

function toggleConsent(el) {
  el.classList.toggle("checked");
  updateProgress();
}

function selectRating(btn) {
  const name = btn.dataset.rating;
  document.querySelectorAll(`[data-rating="${name}"]`).forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  updateProgress();
}

// ─── NAVIGATION ────────────────────────────────────────────────────────────
function goTo(idx) {
  currentSection = idx;
  document.querySelectorAll(".section-panel").forEach((p, i) => {
    p.classList.toggle("active", i === idx);
  });
  document.querySelectorAll(".tab-btn").forEach((t, i) => {
    t.classList.toggle("active", i === idx);
  });
  document.getElementById("step-label").textContent = `Section ${idx + 1} of ${sections.length}`;
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function next() {
  if (currentSection < sections.length - 1) goTo(currentSection + 1);
  else submitForm();
}

function prev() {
  if (currentSection > 0) goTo(currentSection - 1);
}

// ─── SUBMISSION ────────────────────────────────────────────────────────────
const FORM_ENDPOINT = "https://formspree.io/f/xbdvveya";

function cleanLabel(t) {
  return (t || "").replace(/\s+/g, " ").trim().replace(/[\s:*]+$/, "");
}

// Find the human label for a text input / textarea
function resolveFieldLabel(el) {
  const prev = el.previousElementSibling;
  if (prev && prev.tagName === "LABEL") return cleanLabel(prev.textContent);
  const sig = el.closest(".sig-field");
  if (sig) { const l = sig.querySelector("label"); if (l) return cleanLabel(l.textContent); }
  const wrap = el.parentElement;
  if (wrap) { const l = wrap.querySelector("label, .field-label"); if (l) return cleanLabel(l.textContent); }
  return cleanLabel(el.getAttribute("placeholder")) || el.dataset.key || "Field";
}

// Find the question (nearest preceding .group-title) for a checkbox / rating
function questionForItem(item) {
  const box = item.closest(".field-group, .practitioner-panel");
  if (!box) return "";
  let best = "";
  box.querySelectorAll(".group-title").forEach(t => {
    if (t.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_FOLLOWING) best = cleanLabel(t.textContent);
  });
  return best;
}

const BLANK = "Not provided";

// Walk every section (and every card within it) in document order and build a
// complete, readable payload. EVERY field is included even when empty/unselected.
function collectSubmission() {
  const payload = {};
  function put(section, label, value) {
    const base = section + " — " + label;
    let key = base, n = 2;
    while (key in payload) { key = base + " (" + n + ")"; n++; }
    payload[key] = value;
  }

  document.querySelectorAll(".section-panel").forEach(panel => {
    const section = cleanLabel(panel.querySelector(".section-title") && panel.querySelector(".section-title").textContent) || "Section";

    // Process each card in order so related fields stay together
    panel.querySelectorAll(".field-group, .practitioner-panel").forEach(box => {

      // 1. Text / date / tel / email inputs + textareas (incl. signatures, dates,
      //    practitioner notes) — always included; blank shows as "Not provided".
      box.querySelectorAll("input[data-key], textarea[data-key]").forEach(el => {
        const v = (el.value || "").trim();
        put(section, resolveFieldLabel(el), v || BLANK);
      });

      // 2. Checkbox / radio questions — enumerate every question, even if nothing
      //    is selected. Preserves question order within the card.
      const cbItems = box.querySelectorAll(".cb-item");
      if (cbItems.length) {
        const order = [], map = {};
        cbItems.forEach(it => {
          const q = questionForItem(it) || "Selection";
          if (!(q in map)) { map[q] = []; order.push(q); }
          if (it.classList.contains("checked")) map[q].push(cleanLabel(it.querySelector("span").textContent));
        });
        order.forEach(q => put(section, q, map[q].length ? map[q].join(", ") : BLANK));
      }

      // 3. Rating scales — enumerate every scale, even if nothing is chosen.
      const ratingBtns = box.querySelectorAll(".rating-btn");
      if (ratingBtns.length) {
        const order = [], sel = {}, lab = {};
        ratingBtns.forEach(btn => {
          const name = btn.dataset.rating;
          if (!(name in sel)) { sel[name] = null; lab[name] = questionForItem(btn) || name; order.push(name); }
          if (btn.classList.contains("selected")) sel[name] = btn.dataset.val;
        });
        order.forEach(name => put(section, lab[name], sel[name] ? sel[name] + " / 10" : BLANK));
      }

      // 4. Consent tick boxes — list each statement with its ticked / not-ticked
      //    status so it is always clear what was and was not agreed.
      const consentItems = box.querySelectorAll(".consent-item");
      if (consentItems.length) {
        const order = [], map = {};
        consentItems.forEach(it => {
          const q = questionForItem(it) || "Declaration";
          if (!(q in map)) { map[q] = []; order.push(q); }
          const ticked = it.classList.contains("checked");
          map[q].push((ticked ? "✓ AGREED — " : "✗ NOT ticked — ") + cleanLabel(it.querySelector(".consent-text").textContent));
        });
        order.forEach(q => put(section, q, map[q].join("  |  ")));
      }
    });
  });
  return payload;
}

function showError() {
  const b = document.getElementById("error-banner");
  b.style.display = "block";
  b.scrollIntoView({ behavior: "smooth", block: "center" });
}
function clearError() {
  document.getElementById("error-banner").style.display = "none";
}

async function submitForm() {
  const btn = document.querySelector(".section-panel.active .btn-primary");
  if (btn && btn.dataset.sending === "1") return;   // prevent duplicate submissions
  clearError();
  if (btn) { btn.dataset.sending = "1"; btn.disabled = true; btn.textContent = "Sending…"; }

  const payload = collectSubmission();
  const nameEl = document.querySelector('input[data-key="name"]');
  payload._subject = "New Client Intake — " + ((nameEl && nameEl.value.trim()) || "Unnamed client");

  // Reply-to: use the CLIENT's email address so replies go to the client.
  const emailEl = document.querySelector('input[data-key="email"]');
  if (emailEl && emailEl.value.trim()) payload._replyto = emailEl.value.trim();

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    showComplete();
  } catch (err) {
    if (btn) { btn.dataset.sending = "0"; btn.disabled = false; btn.textContent = "Submit Form ✓"; }
    showError();
  }
}

function showComplete() {
  document.getElementById("form-body").style.display = "none";
  document.getElementById("tab-nav").style.display = "none";
  document.getElementById("complete-screen").style.display = "block";
  document.getElementById("step-label").textContent = "Complete ✓";
  document.getElementById("progress-bar").style.width = "100%";
}

function resetForm() {
  if (!confirm("Clear all data and start a new form?")) return;
  clearError();
  document.querySelectorAll(".cb-item, .consent-item").forEach(el => el.classList.remove("checked"));
  document.querySelectorAll(".rating-btn").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
  document.querySelectorAll(".btn-primary").forEach(b => { b.dataset.sending = "0"; b.disabled = false; });
  document.getElementById("form-body").style.display = "block";
  document.getElementById("tab-nav").style.display = "flex";
  document.getElementById("complete-screen").style.display = "none";
  goTo(0);
}

function updateProgress() {
  const pct = ((currentSection) / (sections.length)) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";

  // Mark tab as "done" if any input within has been touched
  document.querySelectorAll(".section-panel").forEach((panel, i) => {
    const tab = document.querySelectorAll(".tab-btn")[i];
    if (!tab) return;
    const hasChecked = panel.querySelector(".checked, .selected");
    const hasText = Array.from(panel.querySelectorAll("input, textarea")).some(el => el.value.trim());
    if (hasChecked || hasText) tab.classList.add("done");
    else tab.classList.remove("done");
  });
}

// ─── BUILD UI ──────────────────────────────────────────────────────────────
function buildUI() {
  const tabNav = document.getElementById("tab-nav");
  const formBody = document.getElementById("form-body");

  sections.forEach((sec, i) => {
    // Tab button
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === 0 ? " active" : "");
    btn.innerHTML = `<span class="tab-dot"></span>${sec.title}`;
    btn.onclick = () => goTo(i);
    tabNav.appendChild(btn);

    // Section panel
    const panel = document.createElement("div");
    panel.className = "section-panel" + (i === 0 ? " active" : "");
    panel.innerHTML = `
      <div class="section-title">${sec.title}</div>
      <div class="section-sub">${sec.sub}</div>
      ${sec.content}
      <div class="nav-buttons">
        ${i > 0 ? `<button class="btn btn-secondary" onclick="prev()">← Back</button>` : `<button class="btn-reset" onclick="resetForm()">Reset form</button>`}
        <button class="btn btn-primary" onclick="next()">${i < sections.length - 1 ? "Continue →" : "Submit Form ✓"}</button>
      </div>
    `;
    formBody.appendChild(panel);
  });

  // Set today's date on date fields
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(el => {
    if (!el.value) el.value = today;
  });
}

buildUI();
updateProgress();
