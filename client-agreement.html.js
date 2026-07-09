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

function consentItem(text) {
  return `<div class="consent-item" onclick="toggleConsent(this)">
    <div class="cb-box">
      <svg width="11" height="9" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 11 9"><polyline points="1 4.5 4 7.5 10 1"/></svg>
    </div>
    <span class="consent-text">${text}</span>
  </div>`;
}

function checklistItem(text) {
  return `<div class="checklist-item" onclick="toggleConsent(this)">
    <div class="cb-box">
      <svg width="11" height="9" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 11 9"><polyline points="1 4.5 4 7.5 10 1"/></svg>
    </div>
    <span class="cl-label">${text}</span>
  </div>`;
}

function clause(title, bullets) {
  const items = bullets.map(b => `<li>${b}</li>`).join("");
  return `<div class="clause-box"><strong>${title}</strong><ul>${items}</ul></div>`;
}

// ─── SECTIONS ──────────────────────────────────────────────────────────────
const sections = [
  {
    id: "business",
    title: "Business Details",
    sub: "Practitioner and business information",
    content: `
      <div class="field-group">
        <div class="group-title">Practitioner / Business Information</div>
        <div class="field-row" style="margin-bottom:18px">
          <div>
            <label class="field-label">Business Name</label>
            <input class="field-input" placeholder="Trading name" data-key="business_name"/>
          </div>
          <div>
            <label class="field-label">Practitioner Name</label>
            <input class="field-input" placeholder="Full legal name" data-key="practitioner_name"/>
          </div>
        </div>
        <div style="margin-bottom:18px">
          <label class="field-label">Address</label>
          <input class="field-input" placeholder="Business address" data-key="business_address"/>
        </div>
        <div class="field-row">
          <div>
            <label class="field-label">Email</label>
            <input class="field-input" type="email" placeholder="hello@yourbusiness.com" data-key="business_email"/>
          </div>
          <div>
            <label class="field-label">Phone</label>
            <input class="field-input" type="tel" placeholder="07..." data-key="business_phone"/>
          </div>
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Client Information</div>
        <div class="field-row">
          <div>
            <label class="field-label">Client Full Name</label>
            <input class="field-input" placeholder="First and last name" data-key="client_name"/>
          </div>
          <div>
            <label class="field-label">Date</label>
            <input class="field-input" type="date" data-key="agreement_date"/>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "services",
    title: "Services & Health",
    sub: "What is covered and your health responsibilities",
    content: `
      <div class="field-group">
        <div class="group-title">Services Covered by This Agreement</div>
        <div class="info-box">The practitioner may provide one or more of the following services. Services not listed here are not included under this agreement.</div>
        <div class="checkbox-grid">
          ${cb(["Online Fitness Coaching","Exercise Programming","Lifestyle Coaching","Accountability & Support","Massage Therapy","Mobility & Recovery Guidance"])}
        </div>
        <div class="clause-box" style="margin-top:14px">
          <strong>Not included:</strong> This agreement does not cover medical diagnosis, physiotherapy, psychological counselling, or any other regulated healthcare service unless separately qualified and agreed in writing.
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Health Declaration</div>
        <div class="consent-list">
          ${consentItem("I have completed the required health screening questionnaire (PAR-Q).")}
          ${consentItem("The health information I have provided is accurate and complete.")}
          ${consentItem("I will inform the Practitioner immediately of any changes to my health status.")}
          ${consentItem("I understand that participation may involve physical exertion and inherent risks.")}
        </div>
        <div class="info-box" style="margin-top:14px">The Practitioner reserves the right to request written medical clearance from a GP before commencing or continuing services.</div>
      </div>
    `
  },
  {
    id: "responsibilities",
    title: "Responsibilities",
    sub: "What is expected from both parties",
    content: `
      <div class="field-group">
        <div class="group-title">Client Responsibilities</div>
        <div class="consent-list">
          ${consentItem("I will follow instructions within my own physical capabilities.")}
          ${consentItem("I will stop any exercise that causes unusual pain, dizziness, or discomfort and inform the Practitioner.")}
          ${consentItem("I will communicate honestly about injuries, symptoms, and limitations.")}
          ${consentItem("I will attend scheduled appointments punctually.")}
          ${consentItem("I will behave respectfully and professionally at all times.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">No Guarantee of Results</div>
        <div class="clause-box">
          The Practitioner cannot and does not guarantee specific outcomes, including:
          <ul>
            <li>Weight loss or muscle gain</li>
            <li>Strength increases or pain reduction</li>
            <li>Athletic performance improvements</li>
          </ul>
          Individual results will vary based on effort, adherence, lifestyle, and individual circumstances.
        </div>
        <div class="consent-list" style="margin-top:12px">
          ${consentItem("I understand that results are not guaranteed and depend on my own effort and circumstances.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Massage Therapy Consent</div>
        <div class="clause-box">
          Massage therapy is intended to promote relaxation, recovery, and general wellbeing. It is <strong>not a substitute for medical care</strong>. The Practitioner does not diagnose illness or injury.
        </div>
        <div class="consent-list" style="margin-top:12px">
          ${consentItem("I may withdraw consent or request modification of treatment at any time.")}
          ${consentItem("I will report any discomfort during treatment immediately.")}
          ${consentItem("I understand the Practitioner may refuse or discontinue treatment if deemed unsafe.")}
        </div>
      </div>
    `
  },
  {
    id: "fees",
    title: "Fees & Cancellations",
    sub: "Payment terms and appointment policies",
    content: `
      <div class="field-group">
        <div class="group-title">Fees &amp; Payment</div>
        ${clause("Payment Terms", [
          "Payment is due in advance unless otherwise agreed in writing.",
          "Sessions, packages, and memberships are non-transferable.",
          "Outstanding balances must be paid before future services are provided.",
          "The Practitioner reserves the right to suspend services for non-payment."
        ])}
        <div class="consent-list" style="margin-top:12px">
          ${consentItem("I agree to pay all fees as outlined in my selected service package and understand the payment terms above.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Cancellation &amp; Missed Appointments</div>
        <div class="info-box">
          <strong>Coaching &amp; Massage appointments:</strong> Appointments cancelled with less than <strong>24 hours' notice</strong> may be charged in full.<br/><br/>
          <strong>No-shows:</strong> Failure to attend without notice may result in the full session fee being charged. Exceptions may be made at the Practitioner's discretion in cases of genuine emergency.
        </div>
        <div class="consent-list">
          ${consentItem("I understand that less than 24 hours' notice for cancellations may result in a full charge.")}
          ${consentItem("I understand that missed appointments without notice may be charged in full.")}
        </div>
      </div>
    `
  },
  {
    id: "liability",
    title: "Liability & Privacy",
    sub: "Your rights and how your data is protected",
    content: `
      <div class="field-group">
        <div class="group-title">Liability</div>
        <div class="clause-box">
          The Client acknowledges that participation in exercise and massage therapy involves inherent risks including:
          <ul>
            <li>Muscle soreness, strains and sprains</li>
            <li>Falls or accidents</li>
            <li>Aggravation of existing conditions</li>
            <li>Other unforeseen injuries</li>
          </ul>
          To the fullest extent permitted by law, the Practitioner shall not be liable for any injury, loss, or damage arising from participation in services <strong>except where caused by negligence</strong>. Nothing in this Agreement excludes liability for death or personal injury caused by negligence or fraud.
        </div>
        <div class="consent-list" style="margin-top:12px">
          ${consentItem("I understand and accept the inherent risks associated with exercise and massage therapy.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Confidentiality</div>
        <div class="clause-box">
          The Practitioner will treat all Client information as strictly confidential and will only disclose information where:
          <ul>
            <li>Required by law</li>
            <li>Necessary to protect the safety of the Client or others</li>
            <li>The Client has provided written consent</li>
          </ul>
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Data Protection &amp; Privacy (UK GDPR)</div>
        <div class="clause-box">
          Personal data is processed in accordance with the UK GDPR and Data Protection Act 2018. Information may be collected for:
          <ul>
            <li>Service delivery and health screening</li>
            <li>Appointment management</li>
            <li>Legal and insurance requirements</li>
          </ul>
          You may request access to, correction of, or deletion of your personal data at any time.
        </div>
        <div class="consent-list" style="margin-top:12px">
          ${consentItem("I consent to my personal data being processed as described above in accordance with UK GDPR.")}
        </div>
      </div>
    `
  },
  {
    id: "media",
    title: "Media & Termination",
    sub: "Photography consent and ending the agreement",
    content: `
      <div class="field-group">
        <div class="group-title">Photography &amp; Testimonials <span style="font-weight:300;color:var(--soft)">(choose one)</span></div>
        <div class="info-box">Please select your preference below. You may withdraw this consent at any time in writing.</div>
        <div class="checkbox-grid two-col">
          ${cb(["✓  I consent to photographs, videos, testimonials, or progress updates being used for marketing purposes","✗  I do not consent to photographs, videos, or testimonials being used for marketing purposes"],"radio","media_consent")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Termination of Agreement</div>
        ${clause("Either party may end this agreement by:", [
          "Providing written notice to the other party.",
          "Any outstanding fees remain payable upon termination.",
          "Unused sessions or refunds will be handled in accordance with the Practitioner's refund policy."
        ])}
        <div class="consent-list" style="margin-top:12px">
          ${consentItem("I understand the terms under which this agreement may be terminated.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Governing Law</div>
        <div class="clause-box">
          This Agreement is governed by the laws of <strong>England and Wales</strong>. Any disputes shall be subject to the jurisdiction of the courts of England and Wales.
        </div>
      </div>
    `
  },
  {
    id: "declaration",
    title: "Client Declaration",
    sub: "Read, confirm, and sign the agreement",
    content: `
      <div class="field-group">
        <div class="group-title" style="margin-bottom:14px">I confirm that:</div>
        <div class="consent-list">
          ${consentItem("I have read and understood this Agreement in full.")}
          ${consentItem("I have had the opportunity to ask questions before signing.")}
          ${consentItem("I voluntarily agree to participate in coaching and/or massage therapy services.")}
          ${consentItem("I understand the risks involved and accept responsibility for my participation.")}
        </div>
      </div>
      <div class="field-group">
        <div class="group-title">Client Signature</div>
        <div class="sig-row">
          <div class="sig-field">
            <label>Full Name</label>
            <input class="field-input" placeholder="Print full name" data-key="client_sig_name"/>
          </div>
          <div class="sig-field">
            <label>Signature</label>
            <input class="field-input" placeholder="Type name as signature" data-key="client_sig"/>
          </div>
          <div class="sig-field">
            <label>Date</label>
            <input class="field-input" type="date" data-key="client_sig_date"/>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "practitioner",
    title: "Practitioner Sign-off",
    sub: "Internal use — practitioner countersignature and checklist",
    content: `
      <div class="practitioner-panel">
        <div class="group-title" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--soft);margin-bottom:16px">⚕ Internal — Practitioner Only</div>
        <div class="group-title" style="margin-bottom:10px">Practitioner Countersignature</div>
        <div class="sig-row" style="margin-bottom:24px">
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
        <div class="group-title" style="margin-bottom:12px">Attachment Checklist</div>
        ${checklistItem("PAR-Q & Health Screening Form")}
        ${checklistItem("Privacy Notice")}
        ${checklistItem("Client Agreement (this document)")}
        ${checklistItem("Medical Clearance (if applicable)")}
      </div>
    `
  }
];

// ─── STATE & INTERACTIONS ──────────────────────────────────────────────────
let currentSection = 0;

function toggleCb(el) {
  const type = el.dataset.type;
  const group = el.dataset.group;
  if (type === "radio" && group) {
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

function goTo(idx) {
  currentSection = idx;
  document.querySelectorAll(".section-panel").forEach((p, i) => p.classList.toggle("active", i === idx));
  document.querySelectorAll(".tab-btn").forEach((t, i) => t.classList.toggle("active", i === idx));
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

const FORM_ENDPOINT = "https://formspree.io/f/mykqqanq";

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

// Find the question (nearest preceding .group-title) for a checkbox item
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
      //    practitioner fields) — always included; blank shows as "Not provided".
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

      // 3. Consent tick boxes — list each statement with its ticked / not-ticked
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

      // 4. Attachment checklist (practitioner) — every item with its status.
      const clItems = box.querySelectorAll(".checklist-item");
      if (clItems.length) {
        const order = [], map = {};
        clItems.forEach(it => {
          const q = questionForItem(it) || "Attachment Checklist";
          if (!(q in map)) { map[q] = []; order.push(q); }
          const ticked = it.classList.contains("checked");
          map[q].push((ticked ? "✓ " : "✗ ") + cleanLabel(it.querySelector(".cl-label").textContent));
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
  const clientNameEl = document.querySelector('input[data-key="client_name"]');
  const clientName = clientNameEl && clientNameEl.value.trim();
  payload._subject = "New Client Agreement — " + (clientName || "Unnamed client");

  // Reply-to: only use a CLIENT email address, never the business email.
  // The agreement form has no client email field, so no reply-to is set here.
  // (If a client email field with data-key="client_email" is ever added, it
  //  will be picked up automatically below.)
  const clientEmailEl = document.querySelector('input[data-key="client_email"]');
  if (clientEmailEl && clientEmailEl.value.trim()) payload._replyto = clientEmailEl.value.trim();

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    // Success
    document.getElementById("form-body").style.display = "none";
    document.getElementById("tab-nav").style.display = "none";
    document.getElementById("complete-screen").style.display = "block";
    document.getElementById("step-label").textContent = "Complete ✓";
    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("complete-title").textContent = "Agreement signed — thank you!";
    document.getElementById("complete-msg").textContent = "The signed agreement has been sent to your practitioner's inbox. Save a PDF copy below for your own records.";
  } catch (err) {
    // Failure — keep the form visible, re-enable the button, show error
    if (btn) { btn.dataset.sending = "0"; btn.disabled = false; btn.textContent = "Sign & Submit ✓"; }
    showError();
  }
}

function resetForm() {
  if (!confirm("Clear all data and start a new agreement?")) return;
  clearError();
  document.querySelectorAll(".cb-item, .consent-item, .checklist-item").forEach(el => el.classList.remove("checked"));
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
  document.querySelectorAll(".btn-primary").forEach(b => { b.dataset.sending = "0"; b.disabled = false; });
  document.getElementById("form-body").style.display = "block";
  document.getElementById("tab-nav").style.display = "flex";
  document.getElementById("complete-screen").style.display = "none";
  goTo(0);
}

function updateProgress() {
  const pct = (currentSection / sections.length) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
  document.querySelectorAll(".section-panel").forEach((panel, i) => {
    const tab = document.querySelectorAll(".tab-btn")[i];
    if (!tab) return;
    const hasChecked = panel.querySelector(".checked");
    const hasText = Array.from(panel.querySelectorAll("input, textarea")).some(el => el.value.trim());
    tab.classList.toggle("done", !!(hasChecked || hasText));
  });
}

// ─── BUILD UI ──────────────────────────────────────────────────────────────
function buildUI() {
  const tabNav = document.getElementById("tab-nav");
  const formBody = document.getElementById("form-body");

  sections.forEach((sec, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === 0 ? " active" : "");
    btn.innerHTML = `<span class="tab-dot"></span>${sec.title}`;
    btn.onclick = () => goTo(i);
    tabNav.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "section-panel" + (i === 0 ? " active" : "");
    panel.innerHTML = `
      <div class="section-title">${sec.title}</div>
      <div class="section-sub">${sec.sub}</div>
      ${sec.content}
      <div class="nav-buttons">
        ${i > 0
          ? `<button class="btn btn-secondary" onclick="prev()">← Back</button>`
          : `<button class="btn-reset" onclick="resetForm()">Reset form</button>`}
        <button class="btn btn-primary" onclick="next()">${i < sections.length - 1 ? "Continue →" : "Sign & Submit ✓"}</button>
      </div>
    `;
    formBody.appendChild(panel);
  });

  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(el => { if (!el.value) el.value = today; });
}

buildUI();
updateProgress();
