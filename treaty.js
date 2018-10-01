/**
 * BCLearningNetwork.com
 * Treaty Map
 * Parsa Rajabi & Colin Bernard
 * September 2018
 */

var STAGE_WIDTH, STAGE_HEIGHT;
var isChrome = !!window.chrome && !!window.chrome.webstore;

/*
 * Edit treaty information here. "title", "info", and "date" fields will be displayed to the user when a treaty is clicked.
 */
var treatyInfo = {
  "treaty_1": {
    title: "1",
    info: "The indigenous peoples were to hand over land. In return, the government was to provide each band with a reserve calculates at 160 acres of land for a family of 5. Each band was to be given a gratuity of $3. This annual payment could be provided in cash or items such as clothing, blankets, or hunting supplies based upon the desires of the family. Treaty 1 and 2 are the only treaties that do not specify that the First Nation signatories maintain an ongoing right to hunt and fish in the treaty area.",
    date: "1871"
  },
  "treaty_2": {
    title: "2",
    info: "Land was surrendered to the government. In return, each band would receive a reserve large enough to provide 160 acres for each family of five. The other written terms of Treaty 2 mirrored those of Treaty 1 with regards to gratuities and schools on reserves.",
    date: "1871"
  },
  "treaty_3": {
    title: "3",
    info: "The reserve land allocation was much larger with 640 acres of land per family of five, guaranteed rights to hunt and fish on unoccupied Crown lands and an annuity of $5. There was also a higher one-time gratuity of $12 per person, and a yearly allocation of $1,500 for the purchase of ammunition and twine.",
    date: "1873"
  },
  "treaty_4": {
    title: "4",
    info: "This treaty is very similar to Treaty 3 except four headmen were allowed instead of two. Chiefs and headmen would receive a larger gratuity. Trapping was included with hunting and fishing, and only $750 was allocated for the purchase of ammunition and twine.",
    date: "1874"
  },
  "treaty_5": {
    title: "5",
    info: "The Indigenous peoples surrendered title to their land in exchange for reserve lands, on which they could hunt, trap and fish. The government retained the right to use these lands for development and/or public works, providing they compensated the Indigenous signatories.  The government would distribute the following annual payments: $5 per person, $15 per headman and $25 per chief. Additional gifts, including flags, tools, clothing and medals, as well as monies for ammunition and twine were also provided. The Northern part was added to the treaty in 1907.",
    date: "1875 - 1907"
  },
  "treaty_6": {
    title: "6",
    info: "Treaty 6 comprised all of the usual terms, with 640 acres per family of five for reserve land. It also had three terms that are unique to it. It was agreed that a medicine chest would be maintained by the Indian Agent for use of the band, assistance would be provided in times of famine and pestilence, and the signatories would receive a supplement of $1000 per year to assist in the cultivation of the land for the first three years.",
    date: "1876"
  },
  "treaty_7": {
    title: "7",
    info: "The Treaty 7 signatories wished to concentrate their agricultural efforts on ranching. It was agreed to reduce the amount of the agricultural implements and seed stock in exchange for an increased number of cattle. Treaty 7 states that the Crown will pay for teachers' salaries instead of the maintenance of school buildings. Also, instead of promising schools on reserve, the only guarantee is that the government will pay the salary of teachers.",
    date: "1877"
  },
  "treaty_8": {
    title: "8",
    info: "The native populations in this  region were given entitlements to land, ongoing financial support, annual shipments of hunting supplies, and hunting rights on ceded lands, unless those ceded lands were used for forestry, mining, settlement or other purposes. Signatories were offered either reserves or “land in severalty” — territory for families or individuals who wanted to live off the reserves.",
    date: "1899"
  },
  "treaty_9": {
    title: "9 (James Bay Treaty)",
    info: "The Indigenous peoples received a one-time lump sum payment of $8; in addition, each chief received a Union Jack flag and a copy of the treaty. Treaty annuities were set at $4 for each person. Reserve lands were set aside as one square mile (2.6 km2) per family of five. The signatories promised not to sell reserve land. Traditional pursuits such as hunting, fishing and trapping could continue as before, subject to federal “regulations,” except on tracts of land required for settlement, mining, lumbering, trading or other purposes.",
    date: "1905"
  },
  "treaty_10": {
    title: "10",
    info: "As in Treaty 8, signatories were offered either reserves or “land in severalty” — territory for families or individuals who wanted to live off the reserves. Reserves were sized in proportion to one square mile per family of five.  Individuals or families who preferred to live apart were granted 160 acres per person. The rights of the signatories to hunt, fish and trap were protected, but subject to government regulation and the need to use certain areas for activities like mining or settlement. The government offered assistance with both education and agriculture, but in terms less clear than those in some of the other treaties.",
    date: "1906"
  },
  "treaty_11": {
    title: "11",
    info: "Treaty 11 provided money, supplies, reserves and other guarantees in exchange for the land. Reserves were to be allotted in proportion to one square mile per family of five. Signatories had the right to hunt, fish and trap, subject to government regulation and the need to use those lands for settlement or development. Once reserves were selected, each group was to receive 10 axes, 5 hand-saws, 5 augers, 1 grindstone and files and whetstones to keep the equipment sharp. Each group would also receive $50 per family worth of equipment for fishing, trapping and hunting. They would get $3 worth of twine, ammunition and other necessary supplies annually.",
    date: "1921"
  },
  "treaty_williams": {
    title: "Williams Treaties",
    info: "By signing the treaties, the Crown received three large tracts of land. In exchange, the Mississauga and Chippewa peoples received a one-time payment of $25 for each band member. The Mississauga also received $233,425, while the Chippewa received $233,375 (both were one-time payments). This money made up a fraction of their land’s estimated value.",
    date: "1923"
  },
  "treaty_peace": {
    title: "Peace and Friendship Treaties",
    info: "These agreements were designed to end hostilities and encourage cooperation. They contained no monetary or land transfer provisions, but they guaranteed hunting, fishing and land-use rights for the descendants of the Indigenous signatories.",
    date: "1775 - 1789"
  },
  "treaty_upper": {
    title: "Upper Canada Treaties",
    info: "These agreements also known as Upper Canada Land surrenders constitute an estimated number of 30 treaties covering much of what is now southwestern Ontario. They provided Loyalists with lands on which to settle after the American Revolution. The Indigenous signatories received cash payments and other goods in return for title to the land.",
    date: "1774 - 1789"
  },
  "treaty_robinson": {
    title: "Robinson Treaties",
    info: "First Nations Bands involved voluntarily surrendered their title, and interest in the territory except for the reservations set forth in the schedule.  The bands were given a one-time payment of ₤2,160 distributed amongst themselves, and an annual payment of ₤600 to each band.",
    date: "1850 - 1854"
  },
  "treaty_douglas": {
    title: "Douglas Treaties",
    info: "The Douglas Treaties cover approximately 930 square kilometres of land around Victoria, Saanich, Sooke, Nanaimo and Port Hardy  that were exchanged for cash, clothing and blankets. The terms of the treaties promised that the groups would be able to retain existing village lands and fields for their use, and also would be allowed to hunt and fish on the surrendered lands.",
    date: "1850 - 1854"
  },
};

// CreateJS text controls. To be populated later.
var treatyTitleText;
var treatyInfoText;
var treatyDateText;

/*
 * Initialize the stage and some createJS settings
 */
function init() {
    STAGE_WIDTH = parseInt(document.getElementById("gameCanvas").getAttribute("width"));
    STAGE_HEIGHT = parseInt(document.getElementById("gameCanvas").getAttribute("height"));

    // init state object
    stage = new createjs.Stage("gameCanvas"); // canvas id is gameCanvas
    stage.mouseEventsEnabled = true;
    stage.enableMouseOver(); // Default, checks the mouse 20 times/second for hovering cursor changes

    setupManifest(); // preloadJS
    startPreload();

    stage.update();
}


/*
 * Place graphics and add them to the stage.
 */
function initGraphics() {

  // Panel positioning
  panel.x = 530;
  panel.y = 100;

  // Treaty title text
  treatyTitleText = new createjs.Text("", "22px Comic Sans MS", "black");
  treatyTitleText.y = panel.y + ((isChrome)? 0:7);
  treatyTitleText.lineWidth = panel.image.width - 25;
  treatyTitleText.textAlign = 'center';

  // Treaty info text
  treatyInfoText = new createjs.Text("", "14px Comic Sans MS", "black");
  treatyInfoText.lineWidth = panel.image.width - 25;

  // Treaty date text
  treatyDateText = new createjs.Text("", "14px Comic Sans MS", "black");
  treatyDateText.lineWidth = panel.image.width - 25;

  // Add treaties, init treaty listeners
  for (var treaty of treatyImages) {
    treaty.on("mousedown", (evt) => { showTreaty(evt.currentTarget.id); });
    treaty.on("rollover", (evt) => { highlightTreaty(evt.currentTarget); });
    treaty.on("rollout", (evt) => { resetTreaty(evt.currentTarget); });
    treaty.cursor = "pointer";
    stage.addChild(treaty);
  }

  stage.update();
}

/*
 * Populate the scroll image with the treaty information.
 */
function showTreaty(treatyId) {

  // Retrieve the current treaty from the treaty information object.
  var currentTreaty = treatyInfo[treatyId];

  // Ensure sidebar scroll is added to the stage.
  stage.addChild(panel);

  // Set the text to be displayed on the scroll.
  treatyTitleText.text = currentTreaty.title;
  treatyInfoText.text = currentTreaty.info;
  treatyDateText.text = "Date: " + currentTreaty.date;

  // Position the text to be displayed on the scroll.
  treatyTitleText.x = panel.x + panel.image.width/2;
  treatyInfoText.x = panel.x + panel.image.width/2 - treatyInfoText.lineWidth/2;
  treatyInfoText.y = treatyTitleText.y + treatyTitleText.getMeasuredHeight() + 20;
  treatyDateText.x = panel.x + panel.image.width/2 - treatyDateText.getMeasuredWidth()/2;
  treatyDateText.y = treatyInfoText.y + treatyInfoText.getMeasuredHeight() + 20;

  // Add the text to the stage.
  stage.addChild(treatyTitleText);
  stage.addChild(treatyInfoText);
  stage.addChild(treatyDateText);

  // Update the stage.
  stage.update();
}

/*
 * Called when users mouse hovers over a treaty area on the map.
 */
function highlightTreaty(treaty) {
  treaty.y += 2;
  var matrix = new createjs.ColorMatrix().adjustSaturation(45);
  treaty.filters = [new createjs.ColorMatrixFilter(matrix)];
  treaty.cache(0, 0, treaty.image.width * treaty.scaleX, treaty.image.height * treaty.scaleY);
  treaty.alpha = 0.7;
  stage.update();
}

/*
 * Does the opposite of the highlightTreaty function above.
 */
function resetTreaty(treaty) {
  treaty.y -= 2;
  var matrix = new createjs.ColorMatrix().adjustSaturation(0);
  treaty.filters = [new createjs.ColorMatrixFilter(matrix)];
  treaty.cache(0, 0, treaty.image.width, treaty.image.height);
  treaty.alpha = 1.0;
  stage.update();
}



//////////////////////// PRELOADJS FUNCTIONS

// bitmap variables
var muteButton, unmuteButton;
var background;
var treatyImages = [];
var panel;

/*
 * Add files to be loaded here.
 */
function setupManifest() {
  manifest = [
    {
      src: "images/background.png",
      id: "background"
    },
    {
      src: "images/treaties/1.png",
      id: "treaty_1"
    },
    {
      src: "images/treaties/2.png",
      id: "treaty_2"
    },
    {
      src: "images/treaties/3.png",
      id: "treaty_3"
    },
    {
      src: "images/treaties/4.png",
      id: "treaty_4"
    },
    {
      src: "images/treaties/5.png",
      id: "treaty_5"
    },
    {
      src: "images/treaties/6.png",
      id: "treaty_6"
    },
    {
      src: "images/treaties/7.png",
      id: "treaty_7"
    },
    {
      src: "images/treaties/8.png",
      id: "treaty_8"
    },
    {
      src: "images/treaties/9.png",
      id: "treaty_9"
    },
    {
      src: "images/treaties/10.png",
      id: "treaty_10"
    },
    {
      src: "images/treaties/11.png",
      id: "treaty_11"
    },
    {
      src: "images/treaties/douglas.png",
      id: "treaty_douglas"
    },
    {
      src: "images/treaties/peace.png",
      id: "treaty_peace"
    },
    {
      src: "images/treaties/robinson.png",
      id: "treaty_robinson"
    },
    {
      src: "images/treaties/upper.png",
      id: "treaty_upper"
    },
    {
      src: "images/treaties/williams.png",
      id: "treaty_williams"
    },
    {
      src: "images/panel.png",
      id: "panel"
    }
  ];
}


function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.installPlugin(createjs.Sound);
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
}

/*
 * Specify how to load each file.
 */
function handleFileLoad(event) {
    console.log("A file has loaded of type: " + event.item.type);
    // create bitmaps of images
    if (event.item.id == "background") {
      background = new createjs.Bitmap(event.result);
    } else if (event.item.id.includes("treaty_")) {
      var tempTreaty = new createjs.Bitmap(event.result);
      tempTreaty.id = event.item.id;
      treatyImages.push(tempTreaty);
    } else if (event.item.id == "panel") {
      panel = new createjs.Bitmap(event.result);
    }
}

function loadError(evt) {
    console.log("Error!", evt.text);
}

// not currently used as load time is short
function handleFileProgress(event) {

}

/*
 * Displays the start screen.
 */
function loadComplete(event) {
    console.log("Finished Loading Assets");

    stage.addChild(background);
    stage.update();
    initGraphics();
}

///////////////////////////////////// END PRELOADJS FUNCTIONS
