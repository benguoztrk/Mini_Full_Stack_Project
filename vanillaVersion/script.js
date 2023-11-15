
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];


//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a class="source" href="${fact.source}" target="_blank">(Source)</a>
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">
    ${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}


//Create Dom elements: Render facts in list
factsList.innerHTML = "";
//Load data from Subapase
async function loadFacts(){
  const res = await fetch("https://yqtyqijpubxliiyoadmd.supabase.co/rest/v1/fact", {
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdHlxaWpwdWJ4bGlpeW9hZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzIxNzAsImV4cCI6MjAxNTU0ODE3MH0.iwAZqG3Ju0Oga8XRdE5qKa_Pkj3t40-fyHLf38ZfrHs",
      authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdHlxaWpwdWJ4bGlpeW9hZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzIxNzAsImV4cCI6MjAxNTU0ODE3MH0.iwAZqG3Ju0Oga8XRdE5qKa_Pkj3t40-fyHLf38ZfrHs"
  },
});
const data = await res.json();
//console.log(data);
createFactsList(data);
}
loadFacts();



//Toggle form button
btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});
