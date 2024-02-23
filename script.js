function updateTime() {
  //Kyoto
  let kyotoElement = document.querySelector("#kyoto");
  if (kyotoElement) {
    let kyotoDateElement = kyotoElement.querySelector(".date");
    let kyotoTimeElement = kyotoElement.querySelector(".time");
    let kyotoTime = moment().tz("Asia/Tokyo");
    kyotoDateElement.innerHTML = kyotoTime.format("MMMM Do");
    kyotoTimeElement.innerHTML = kyotoTime.format("h:mm:ss [<span>]A[</span>]");
  }
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");
    singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<span>]A[</span>]"
    );
  }
  //Bergen
  let bergenElement = document.querySelector("#bergen");
  if (singaporeElement) {
    let bergenDateElement = bergenElement.querySelector(".date");
    let bergenTimeElement = bergenElement.querySelector(".time");
    let bergenTime = moment().tz("Europe/Oslo");
    bergenDateElement.innerHTML = bergenTime.format("MMMM Do");
    bergenTimeElement.innerHTML = bergenTime.format(
      "h:mm:ss [<span>]A[</span>]"
    );
  }
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<span>]A[</span>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
