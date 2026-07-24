async function loadData() {
  const response = await fetch("./data/generated-project.json");
  if (!response.ok) throw new Error("Project data could not be loaded.");
  return response.json();
}
function baselineCard(title, text) {
  return `<article class="card"><small>Engineering baseline</small><h3>${title}</h3><p>${text}</p></article>`;
}
function domainCard(item) {
  return `<article class="card"><small>Application domain</small><h3>${item.title}</h3><dl>
    <dt>Candidate</dt><dd>${item.candidate}</dd>
    <dt>Constraints</dt><dd>${item.constraints}</dd>
    <dt>Service</dt><dd>${item.service}</dd>
    <dt>Everyday change</dt><dd>${item.change}</dd>
    <dt>Open question</dt><dd>${item.question}</dd>
  </dl></article>`;
}
async function main() {
  const data = await loadData();
  document.querySelector("#baseline-grid").innerHTML =
    baselineCard(String(data.scenarioYear), data.scenarioStatus) +
    data.modes.map(mode => baselineCard(mode.title, mode.description)).join("");
  document.querySelector("#domain-grid").innerHTML = data.domains.map(domainCard).join("");
}
main().catch(console.error);
