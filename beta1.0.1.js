// holy boy

// Main Div
var devtools = document.createElement("div")
devtools.setAttribute("class", "avodevtools")
devtools.setAttribute("id", "avodevtools")
devtools.setAttribute("contenteditable", "false")
document.getElementsByTagName("body")[0].appendChild(devtools)

var devtools = document.getElementById("avodevtools")

// Nav Element
var navbar = document.createElement("div")
navbar.setAttribute("id", "avonavbar")
devtools.appendChild(navbar)

var navbar = document.getElementById("avonavbar")

// Edit Nav
var edit = document.createElement("button")
edit.innerText = "Edit"
edit.setAttribute("class", "avoedit")
edit.setAttribute("onclick", "if(document.body.contentEditable !== 'true') {    document.body.contentEditable = 'true'; document.designMode='on'; void 0} else {    document.body.contentEditable = 'false'; document.designMode='off'; void 0}")
navbar.appendChild(edit)

//X-Ray Nav
var xray = document.createElement("button")
xray.innerText = "X-Ray"
xray.setAttribute("class", "avoxray")
xray.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())")
navbar.appendChild(xray)

// Elements Nav
var elements = document.createElement("button")
elements.innerText = "Elements"
elements.setAttribute("class", "avoelements avoactive")
elements.setAttribute("onclick", "avogoelements()")
navbar.appendChild(elements)

// Console Nav
var console = document.createElement("button")
console.innerText = "Console"
console.setAttribute("class", "avoconsole")
console.setAttribute("onclick", "avogoconsole()")
navbar.appendChild(console)

//Other Features
var other = document.createElement("button")
other.innerText = "Other"
other.setAttribute("class", "avoother")
other.setAttribute("onclick", "othergo()")
navbar.appendChild(other)

// Close Nav
var closebtn = document.createElement("button")
closebtn.innerText = "X"
closebtn.setAttribute("class", "avoclosebtn")
closebtn.setAttribute("onclick", "avoclosedevtools()")
navbar.appendChild(closebtn)

async function fetchcode() {
// Fetch Code
var code;
var url = await fetch(window.location);
var res = await url.text();
code = res;

// Code Element
var thecode = document.createElement("div")
thecode.innerText = code
thecode.setAttribute("class", "avothecode")
devtools.appendChild(thecode)

}
fetchcode()

// Logs Element
var thelogs = document.createElement("div")
thelogs.setAttribute("id", "avologs")
devtools.appendChild(thelogs)

// Loginput2 Element
var theloginput2 = document.createElement("div")
theloginput2.setAttribute("class", "avologinput2")
devtools.appendChild(theloginput2)

// Loginputbefore Element
var theloginputbefore = document.createElement("div")
theloginputbefore.setAttribute("class", "avologinputbefore")
theloginputbefore.innerText = ">"
theloginput2.appendChild(theloginputbefore)

// Loginput Element
var theloginput = document.createElement("input")
theloginput.setAttribute("id", "avologinput")
theloginput.setAttribute("autofocus", "")
theloginput.setAttribute("autocomplete", "off")
theloginput2.appendChild(theloginput)

// Script Element
var thescript = document.createElement("script")
thescript.id = "avoscript"

// Other Element
var otherstuff = document.createElement("div")
var br = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var br4 = document.createElement("br")
var br5 = document.createElement("br")
var br6 = document.createElement("br")
var br7 = document.createElement("br")
var br8 = document.createElement("br")
var br9 = document.createElement("br")
var br10 = document.createElement("br")
var br11 = document.createElement("br")
var br12 = document.createElement("br")
var br13 = document.createElement("br")
var br14 = document.createElement("br")
var br15 = document.createElement("br")
var br16 = document.createElement("br")
var br17 = document.createElement("br")
var br18 = document.createElement("br")
var br19 = document.createElement("br")
var br20 = document.createElement("br")
var br21 = document.createElement("br")
var br22 = document.createElement("br")
var br23 = document.createElement("br")
var br24 = document.createElement("br")
var br25 = document.createElement("br")
var br26 = document.createElement("br")
var br27 = document.createElement("br")
var br28 = document.createElement("br")
var br30 = document.createElement("br")

otherstuff.innerText = "Other Features:"
var grey = document.createElement("button")
var clicked = false;
grey.setAttribute("onclick", "greyscale()")
grey.setAttribute("class", "obtn")
grey.innerText = "Toggle Greyscale"
var gh = document.createElement("button")
gh.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/gh.min.js';document.body.appendChild(script);avoclosedevtools()}())")
gh.setAttribute("class", "obtn")
gh.innerText = "Game Hub"
var tc = document.createElement("button")
tc.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/tc.min.js';document.body.appendChild(script)}())")
tc.setAttribute("class", "obtn")
tc.innerText = "Tab Cloak"
var ugly = document.createElement("button")
ugly.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/ugly.min.js';document.body.appendChild(script);avoclosedevtools()}())")
ugly.setAttribute("class", "obtn")
ugly.innerText = "Uglify"
var piano = document.createElement("button")
piano.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/piano.min.js';document.body.appendChild(script);avoclosedevtools()}())")
piano.setAttribute("class", "obtn")
piano.innerText = "Piano"
var tri = document.createElement("button")
tri.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/tri.min.js';document.body.appendChild(script);avoclosedevtools()}())")
tri.setAttribute("class", "obtn")
tri.innerText = "TriView"
var mlight = document.createElement("button")
mlight.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/mlight.min.js';document.body.appendChild(script);avoclosedevtools()}())")
mlight.setAttribute("class", "obtn")
mlight.innerText = "MouseLight"
var dark = document.createElement("button")
dark.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/dark.min.js';document.body.appendChild(script);avoclosedevtools()}())")
dark.setAttribute("class", "obtn")
dark.innerText = "Dark Mode"
var click = document.createElement("button")
click.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/newac.js';document.body.appendChild(script);avoclosedevtools()}())")
click.setAttribute("class", "obtn")
click.innerText = "Autoclicker"
var tic = document.createElement("button")
tic.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@2.0.0/other/tic.min.js';document.body.appendChild(script);avoclosedevtools()}())")
tic.setAttribute("class", "obtn")
tic.innerText = "Ultimate Tic-Tac-Toe"
var edpuzzle = document.createElement("button")
edpuzzle.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/edpuzzle.min.js';document.body.appendChild(script);avoclosedevtools()}())")
edpuzzle.setAttribute("class", "obtn")
edpuzzle.innerText = "EP Skipper"
var blooketaac = document.createElement("button")
blooketaac.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/blooketaac.min.js';document.body.appendChild(script);avoclosedevtools()}())")
blooketaac.setAttribute("class", "obtn")
blooketaac.innerText = "AAC (Blooket)"
var blooketab = document.createElement("button")
blooketab.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/blooketantiban.min.js';document.body.appendChild(script);avoclosedevtools()}())")
blooketab.setAttribute("class", "obtn")
blooketab.innerText = "Anti-Ban (Blooket)"
var edpanswers = document.createElement("button")
edpanswers.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js';document.body.appendChild(script);avoclosedevtools()}())")
edpanswers.setAttribute("class", "obtn")
edpanswers.innerText = "EP Answers"
var qiz = document.createElement("button")
qiz.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/quizizzpts.js';document.body.appendChild(script);avoclosedevtools()}())")
qiz.setAttribute("class", "obtn")
qiz.innerText = "Point Giver (Quizizz)"
var historyflood = document.createElement("button")
historyflood.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/historyflood.min.js';document.body.appendChild(script);avoclosedevtools()}())")
historyflood.setAttribute("class", "obtn")
historyflood.innerText = "Flood History"
var nukegame = document.createElement("button")
nukegame.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/nukegame.js';document.body.appendChild(script);avoclosedevtools()}())")
nukegame.setAttribute("class", "obtn")
nukegame.innerText = "Nuke (Game)"
var cell = document.createElement("button")
cell.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/cell.js';document.body.appendChild(script);avoclosedevtools()}())")
cell.setAttribute("class", "obtn")
cell.innerText = "Cell Cursor"
var snow = document.createElement("button")
snow.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/snow.js';document.body.appendChild(script);avoclosedevtools()}())")
snow.setAttribute("class", "obtn")
snow.innerText = "Snow"
var brkn = document.createElement("button")
brkn.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/crooked.js';document.body.appendChild(script);avoclosedevtools()}())")
brkn.setAttribute("class", "obtn")
brkn.innerText = "Crooked Page"
var upper = document.createElement("button")
upper.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/specialveng@main/upper.js';document.body.appendChild(script);avoclosedevtools()}())")
upper.setAttribute("class", "obtn")
upper.innerText = "Uppercase"
var blur = document.createElement("button")
blur.setAttribute("onclick", "javascript: (function () { document.body.style.filter = 'blur(5px)'; })();")
blur.setAttribute("class", "obtn")
blur.innerText = "Blur"
var crash = document.createElement("button")
crash.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/bkmrklt@main/chromebookcrasher.js';document.body.appendChild(script);avoclosedevtools()}())")
crash.setAttribute("class", "obtn")
crash.innerText = "Crash Chromebook (5 min+)"
var pause = document.createElement("button")
pause.setAttribute("onclick", "javascript:alert('Paused! Click OK to resume.');")
pause.setAttribute("class", "obtn")
pause.innerText = "Pause Webpage"
var cya = document.createElement("button")
cya.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/bkmrklt@main/slide.js';document.body.appendChild(script);avoclosedevtools()}())")
cya.setAttribute("class", "obtn")
cya.innerText = "Goodbye!"
var bsod = document.createElement("button")
bsod.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/bkmrklt@main/bsod.js';document.body.appendChild(script);avoclosedevtools()}())")
bsod.setAttribute("class", "obtn")
bsod.innerText = "BSOD"
var bwbs = document.createElement("button")
bwbs.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/bkmrklt@main/blockwebsite.min.js';document.body.appendChild(script);avoclosedevtools()}())")
bwbs.setAttribute("class", "obtn")
bwbs.innerText = "Block Website (not literally)"
var pxy = document.createElement("button")
pxy.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/bkmrklt@main/pxy.js';document.body.appendChild(script);avoclosedevtools()}())")
pxy.setAttribute("class", "obtn")
pxy.innerText = "Proxy"
var gimk = document.createElement("button")
gimk.setAttribute("onclick", "javascript:(function () {var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/cheeselicker100/bkmrklt@main/gimkit.js';document.body.appendChild(script);avoclosedevtools()}())")
gimk.setAttribute("class", "obtn")
gimk.innerText = "Gimkit (Spam answers!)"
var git = document.createElement("button")
git.setAttribute("class", "obtn")
git.innerHTML = "<a href='https://github.com/cheeselicker100/specialveng' target='_blank' style='text-decoration:none; color:#f7812d;'>Github <i class='fa fa-github'></i></a>"
otherstuff.setAttribute("class", "avotheother")
devtools.appendChild(otherstuff)
otherstuff.appendChild(br)
otherstuff.appendChild(gh)
otherstuff.appendChild(br2)
otherstuff.appendChild(tc)
otherstuff.appendChild(br3)
otherstuff.appendChild(click)
otherstuff.appendChild(br4)
otherstuff.appendChild(dark)
otherstuff.appendChild(br5)
otherstuff.appendChild(piano)
otherstuff.appendChild(br6)
otherstuff.appendChild(tri)  
otherstuff.appendChild(br7)
otherstuff.appendChild(mlight)
otherstuff.appendChild(br8)
otherstuff.appendChild(ugly)
otherstuff.appendChild(br9)
otherstuff.appendChild(grey)
otherstuff.appendChild(br10)
otherstuff.appendChild(tic)
otherstuff.appendChild(br11)
otherstuff.appendChild(edpuzzle)
otherstuff.appendChild(br12)
otherstuff.appendChild(blooketaac)
otherstuff.appendChild(br13)
otherstuff.appendChild(blooketab)
otherstuff.appendChild(br14)
otherstuff.appendChild(edpanswers)
otherstuff.appendChild(br15)
otherstuff.appendChild(qiz)
otherstuff.appendChild(br16)
otherstuff.appendChild(historyflood)
otherstuff.appendChild(br17)
otherstuff.appendChild(nukegame)
otherstuff.appendChild(br18)
otherstuff.appendChild(cell)
otherstuff.appendChild(br19)
otherstuff.appendChild(snow)
otherstuff.appendChild(br20)
otherstuff.appendChild(brkn)
otherstuff.appendChild(br21)
otherstuff.appendChild(upper)
otherstuff.appendChild(br22)
otherstuff.appendChild(blur)
otherstuff.appendChild(br23)
otherstuff.appendChild(unbl)
otherstuff.appendChild(br24)
otherstuff.appendChild(crash)
otherstuff.appendChild(br25)
otherstuff.appendChild(pause)
otherstuff.appendChild(br26)
otherstuff.appendChild(cya)
otherstuff.appendChild(br27)
otherstuff.appendChild(bsod)
otherstuff.appendChild(br28)
otherstuff.appendChild(bwbs)
otherstuff.appendChild(br29)
otherstuff.appendChild(pxy)
otherstuff.appendChild(br30)
otherstuff.appendChild(gimk)

// Style Element
var thestyle = document.createElement("style")
thestyle.id = "avostyle"

// Fonts
thestyle.innerText = "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');"

// Roboto
thestyle.innerText += ".avodevtools {font-family: Roboto;}"

// .devtools
thestyle.innerText += ".avodevtools {position: fixed; right: 8px; top: 8px; bottom: 8px; width: 500px; background: #140f26; color: white; border-radius: 10px; text-align: center; z-index: 9999999999;}"

// .elements
thestyle.innerText += ".avoelements {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; margin: 0; margin-top: 10px; border-right: none; border-left: none;}"

thestyle.innerText += ".avoelements:hover {background: #e36724;}"

// .thecode
thestyle.innerText += ".avothecode {border: 1px solid white; margin: 5px; margin-top: 10px; border-radius: 10px; padding: 5px; overflow: scroll; text-align: left; height: 90%;}"

//.avotheother
thestyle.innerText += ".avotheother {border: 1px solid white; margin: 5px; margin-top: 10px; border-radius: 10px; padding: 5px; overflow: scroll; text-align: left; height: 90%; display: none;}"

// .edit
thestyle.innerText += ".avoedit {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 10px 0 0 10px; margin: 0; margin-top: 10px; margin-left: 5px;}"

thestyle.innerText += ".avoedit:hover {background: #e36724;}"

// .obtn
thestyle.innerText += ".obtn {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 10px; margin: 0; margin-top: 10px; margin-left: 5px;} .obtn:hover {background: #630932;}"

thestyle.innerText += "#greybtn:hover {background: #e36724;}"

// .xray
thestyle.innerText += ".avoxray {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; margin: 0; margin-top: 10px; border-left: none;}"

thestyle.innerText += ".avoxray:hover {background: #e36724;}"

// .console
thestyle.innerText += ".avoconsole {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-right: none; margin: 0; margin-top: 10px;}"

thestyle.innerText += ".avoconsole:hover {background: #e36724;}"

// .other
thestyle.innerText += ".avoother {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 0 10px 10px 0; margin: 0; margin-top: 10px;}"

thestyle.innerText += ".avoother:hover {background: #e36724;}"

// .closebtn
thestyle.innerText += ".avoclosebtn {cursor: pointer; outline: none; background: transparent; color: #aaa; font-size: 20px; border: 2px solid #f7812d; border-radius: 10px; margin-right: 10px; margin-top: 10px; float: right;}"

thestyle.innerText += ".avoclosebtn:hover {background: #e36724;}"

// .active
thestyle.innerText += ".avoactive {background: #ff9369; color: purple;}"

thestyle.innerText += ".avoactive:hover {background: #e36724;}"

// #loginput
thestyle.innerText += "#avologinput {outline: none; border: none; width: 100%; font-size: 15px;background:#f7812d;color:orange;}"

// .loginput2
thestyle.innerText += ".avologinput2 {display: flex; font-size: 15px;margin: 10px; display: none;}"

// .log
thestyle.innerText += ".avolog {padding: 2.5px; border-radius: 10px; font-size: 15px;margin: 10px; text-align: left;}"

// #logs
thestyle.innerText += "#avologs {max-height: 89%; overflow: scroll;display: none;}"

// .error
thestyle.innerText += ".avoerror {color: red; background: lightpink; padding: 2.5px; border-radius: 10px; font-size: 15px;margin: 10px; text-align: left;}"

// .warn
thestyle.innerText += ".avowarn {color: #ff9369; background: orange; padding: 2.5px; border-radius: 5px; font-size: 15px;margin: 10px; text-align: left;}"

// ::-webkit-scrollbar
thestyle.innerText += "::-webkit-scrollbar {display: none;}"

document.getElementsByTagName("body")[0].appendChild(thestyle)

// console.log
thescript.innerText += 'console.log = function(text) {var log = document.createElement("p");log.innerText = text;log.className = "avolog";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};'

// console.warn
thescript.innerText += 'console.warn = function(text) {var log = document.createElement("p");log.innerText = text;log.className = "avowarn";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};'

// console.error
thescript.innerText += 'console.error = function(text) {var log = document.createElement("p");log.innerText = text;log.className = "avoerror";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};'

// console.clear
thescript.innerText += 'console.clear = function() {document.getElementById("avologs").innerText = "";console.log("Console was cleared");};'

// Error
thescript.innerText += 'window.onerror = function (err, url, line) {var log = document.createElement("p");if (url == "") {url = "<anonymous>"};log.innerText = err + " at " + url + ":" + line;log.className = "avoerror";document.getElementById("avologs").appendChild(log);var logs = document.getElementById("avologs");logs.scrollTop = logs.scrollHeight;};'

// Function runcode
thescript.innerText += 'function runcode(code) {var res = eval(code);console.log(res);};'

// Console Enter
thescript.innerText += 'loginput = document.getElementById("avologinput");loginput.addEventListener("keyup", function onEvent(e) {;if (e.keyCode === 13) {;if (this.value !== "") {;if (!this.value.startsWith("console.log") && !this.value.startsWith("console.warn") && !this.value.startsWith("console.error")) {console.log(this.value)};var code = this.value;this.value = "";runcode(code);};};});'

// Function Go console
thescript.innerText += 'function avogoconsole() {var logs = document.getElementById("avologs"); var loginput2 = document.getElementsByClassName("avologinput2")[0]; var thecode = document.getElementsByClassName("avothecode")[0]; logs.style.display = "inherit"; loginput2.style.display = "flex"; thecode.style.display = "none"; document.getElementById("avologinput").focus(); var elements = document.getElementsByClassName("avoelements")[0]; var console = document.getElementsByClassName("avoconsole")[0];var otherstuff = document.getElementsByClassName("avotheother")[0];otherstuff.style.display = "none";elements.classList.remove("avoactive");other.classList.remove("avoactive");console.classList.add("avoactive");}'

// Function Go Other
thescript.innerText += 'function othergo() {var logs = document.getElementById("avologs"); var loginput2 = document.getElementsByClassName("avologinput2")[0]; var thecode = document.getElementsByClassName("avothecode")[0]; var otherstuff = document.getElementsByClassName("avotheother")[0];logs.style.display = "none"; loginput2.style.display = "none";thecode.style.display = "none";otherstuff.style.display = "inherit";document.getElementById("avologinput").focus(); var elements = document.getElementsByClassName("avoelements")[0]; var console = document.getElementsByClassName("avoconsole")[0];other.classList.add("avoactive");elements.classList.remove("avoactive");console.classList.remove("avoactive");}'

// Function Go Elements
thescript.innerText += 'function avogoelements() {var logs = document.getElementById("avologs"); var loginput2 = document.getElementsByClassName("avologinput2")[0]; var thecode = document.getElementsByClassName("avothecode")[0]; var otherstuff = document.getElementsByClassName("avotheother")[0];  logs.style.display = "none"; otherstuff.style.display = "none"; loginput2.style.display = "none"; thecode.style.display = "inherit"; document.getElementById("avologinput").focus(); var elements = document.getElementsByClassName("avoelements")[0]; var console = document.getElementsByClassName("avoconsole")[0]; elements.classList.add("avoactive");other.classList.remove("avoactive");console.classList.remove("avoactive");}'

// Function closedevtools
thescript.innerText += 'function avoclosedevtools() {var devtools = document.getElementById("avodevtools"); document.body.removeChild(devtools);var devtools = document.getElementById("avostyle"); document.body.removeChild(devtools);var devtools = document.getElementById("avoscript"); document.body.removeChild(devtools)}'

// Greyscale
thescript.innerText += 'function greyscale(){if (clicked) {clicked = false;document.body.style.filter = "grayscale(0%)";} else {clicked = true;document.body.style.filter = "grayscale(100%)";}}'

document.getElementsByTagName("body")[0].appendChild(thescript)
