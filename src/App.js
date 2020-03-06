import React, {useEffect} from 'react';
import Header from './Components/header.js';
import GameSection from './Components/game-section.js';
import Sidebar from './Components/sidebar.js';
import { Controller, Scene } from 'react-scrollmagic';



const wowStreamers = [
  {
    name: "Asmongold",
    src: require("./images/asmongold-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/asmongold",
    youtube: "https://www.youtube.com/user/VertualExchange",
    avgViewers: "23,830",
    followers: "1,278,901",
    content: "Mostly WoW",
    twitter: "https://twitter.com/Asmongold",
    instagram: "https://www.instagram.com/asmongold/"
  },
  {
    name: "tipsoutbaby",
    src: require("./images/tipsoutbaby-image.jpg"),
    country: "English",
    twitch: "https://www.twitch.tv/tipsoutbaby",
    youtube: "https://www.youtube.com/tipsoutbaby",
    avgViewers: "8,056",
    followers: "89,675",
    content: "Only WoW Classic",
    twitter: "https://twitter.com/tipsoutbaby",
    instagram: "https://www.instagram.com/tipsoutbaby/"
  },
  {
    name: "Payo",
    src: require("./images/payo-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/payo",
    youtube: "https://www.youtube.com/channel/UCQ-czOmPo1JYi1wKFi7wY8w",
    avgViewers: "3,297",
    followers: "126,833",
    content: "Mostly WoW classic, rarely IRL/HS.",
    twitter: "https://twitter.com/payowow",
    facebook: "https://www.facebook.com/payowow"
  },
  {
    name: "EsfandTV",
    src: require("./images/EsfandTV-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/esfandtv",
    youtube: "https://www.youtube.com/channel/UChX76aZbAkJBdQQ2iAm-GQg",
    avgViewers: "3,223",
    followers: "347,124",
    content: "Mostly wow classic, sometimes variety.",
    twitter: "https://twitter.com/esfandtv",
    instagram: "https://www.instagram.com/esfandtv",
    facebook: "https://www.facebook.com/EsfandTV/"
  }
]

const lolStreamers = [
  {
    name: "loltyler1",
    src: require("./images/tyler1-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/loltyler1",
    youtube: "https://www.youtube.com/channel/UCwV_0HmQkRrTcrReaMxPeDw",
    avgViewers: "29,155",
    followers: "2,888,536",
    content: "Mostly LoL, sometimes variety.",
    twitter : "https://twitter.com/loltyler1",
    instagram: "https://www.instagram.com/tyler1_alpha/",
    facebook: "https://www.facebook.com/loltyler1/"
  },
  {
    name: "Faker",
    src: require("./images/faker-image.png"),
    country: "Korean",
    twitch: "https://www.twitch.tv/faker",
    youtube: "https://www.youtube.com/channel/UCpJw2H9KKqwCCGQKRh1Bf2w",
    avgViewers: "26,630",
    followers: "2,119,876",
    content: "Only LoL.",
    twitter : "https://twitter.com/faker",
    instagram: "https://www.instagram.com/t1lol/"
  },
  {
    name: "handongsuk",
    src: require("./images/handogsuk-image.png"),
    country: "Korean",
    twitch: "https://www.twitch.tv/handongsuk",
    youtube: "https://www.youtube.com/channel/UCVJT18d9wSCnDUdnJ9ycO7Q",
    avgViewers: "14,694",
    followers: "366,025",
    content: "Mostly LoL, sometimes variety.",
  },
  {
    name: "Doublelift",
    src: require("./images/dl-image.jpeg"),
    country: "English",
    twitch: "https://www.twitch.tv/doublelift",
    youtube: "https://www.youtube.com/Doublelift",
    avgViewers: "14,671",
    followers: "1,315,351",
    content: "Mostly LoL.",
    instagram: "https://www.instagram.com/yiliangpeng/",
    twitter: "https://twitter.com/TLDoublelift",
    facebook: "https://www.facebook.com/DoubleliftOfficial/"
  }
]

const fortniteStreamers = [
  {
    name: "Tfue",
    src: require("./images/tfue-image.jpg"),
    country: "English",
    twitch: "https://www.twitch.tv/Tfue",
    youtube: "https://www.youtube.com/channel/UC9lSZSYpDDE18hoFA7YlBpw",
    avgViewers: "27,922",
    followers: "7,319,943",
    content: "Only fortnite.",
    twitter : "https://twitter.com/TTfue",
    instagram: "https://www.instagram.com/Tfue/"
  },
  {
    name: "Mongraal",
    src: require("./images/mongraal-image.jpeg"),
    country: "English",
    twitch: "https://www.twitch.tv/mongraal",
    youtube: "https://www.youtube.com/channel/UCpWim4NdcGFkG8x8kPROCwA",
    avgViewers: "16,759",
    followers: "1,881,856",
    content: "Only fortnite.",
    twitter : "https://twitter.com/Mongraal",
    instagram: "https://www.instagram.com/mongraal/"
  },
  {
    name: "TSM_Hamlinz",
    src: require("./images/hamlinz-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/tsm_hamlinz/",
    youtube: "https://www.youtube.com/channel/UCPMdbETAILQw9KYfvj1y1HA",
    avgViewers: "16,759",
    followers: "2,106,581",
    content: "Mostly fortnite, sometimes variety.",
    twitter : "https://twitter.com/TSM_Hamlinz",
    instagram: "https://www.instagram.com/hamlinz/",
    facebook: "https://www.facebook.com/TSM_Hamlinz-546101605755318"
  },
  {
    name: "TheGrefg",
    src: require("./images/thegrefg.png"),
    country: "Spanish",
    twitch: "https://www.twitch.tv/thegrefg",
    youtube: "https://www.youtube.com/channel/UCCEmjNPpJYhGDgaEqeeA4HA",
    avgViewers: "14,964",
    followers: "1,224,231",
    content: "Only fortnite.",
    instagram: "https://www.instagram.com/grefg_official/",
    twitter: "https://twitter.com/TheGrefg",
    facebook: "https://www.facebook.com/TheGrefg/"
  }
]

const gtaVStreamers = [
  {
    name: "iklooode25",
    src: require("./images/iklo-image.png"),
    country: "Arabian",
    twitch: "https://www.twitch.tv/iklooode25",
    youtube: "https://www.youtube.com/channel/UCjtJWphpeoyCSwwyHNB8Dpg",
    avgViewers: "13,909",
    followers: "259,200",
    content: "Mostly GTA V.",
    twitter : "https://twitter.com/KLOoODE25",
    instagram: "https://www.instagram.com/klo/"
  },
  {
    name: "Lord_Kebun",
    src: require("./images/lordK-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/lord_kebun",
    youtube: "https://www.youtube.com/lordkebun",
    avgViewers: "13,697",
    followers: "349,013",
    content: "GTA V / Variety.",
    twitter : "https://twitter.com/LordKebun",
    instagram: "https://www.instagram.com/lordkebun/"
  },
  {
    name: "Shlorox",
    src: require("./images/shlorox-image.png"),
    country: "German",
    twitch: "https://www.twitch.tv/shlorox",
    youtube: "https://www.youtube.com/user/ShloRox",
    avgViewers: "6,473",
    followers: "299,421",
    content: "GTA V / Variety.",
    twitter : "https://twitter.com/Shlorox",
    instagram: "https://www.instagram.com/shlorox/",
    facebook: "https://www.facebook.com/shloroxTV"
  },
  {
    name: "RebirthzTV",
    src: require("./images/rebirthz-image.png"),
    country: "Thai",
    twitch: "https://www.twitch.tv/rebirthztv",
    youtube: "https://www.youtube.com/user/RebirthzTV",
    avgViewers: "6,038",
    followers: "231,886",
    content: "Mostly GTA V.",
    facebook: "https://www.facebook.com/RBZTV/"
  }
]

const hsStreamers = [
  {
    name: "SilverName",
    src: require("./images/silvername-image.png"),
    country: "Russian",
    twitch: "https://www.twitch.tv/silvername/",
    youtube: "https://www.youtube.com/channel/UCqQrewSyOB-64dnwnL3FuCQ",
    avgViewers: "13,986",
    followers: "536,226",
    content: "Only HS.",
    twitter : "https://twitter.com/SilverNameHS",
    instagram: "https://www.instagram.com/silvernamehs/",
    vk: "https://vk.com/silvernamehs"
  },
  {
    name: "nl_Kripp",
    src: require("./images/kripp-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/nl_kripp",
    youtube: "https://www.youtube.com/channel/UCeBMccz-PDZf6OB4aV6a3eA",
    avgViewers: "12,750",
    followers: "1,333,094",
    content: "Only HS.",
    twitter : "https://twitter.com/Kripparrian/",
    instagram: "https://www.instagram.com/casualkripp/",
    facebook: "https://www.facebook.com/krippofficial"
  },
  {
    name: "Thijs",
    src: require("./images/thijs-image.png"),
    country: "English",
    twitch: "https://www.twitch.tv/thijs",
    youtube: "https://www.youtube.com/thijshearthstone",
    avgViewers: "8,502",
    followers: "727,876",
    content: "Only HS.",
    twitter : "https://twitter.com/G2Thijs",
    instagram: "https://www.instagram.com/thijs_hs/",
    facebook: "https://www.facebook.com/ThijsHS"
  },
  {
    name: "dogdog",
    src: require("./images/dogdog-image.jpeg"),
    country: "English",
    twitch: "https://www.twitch.tv/dogdog",
    youtube: "https://www.youtube.com/channel/UCdKdlJV1DsRHtKMBPqEhJww",
    avgViewers: "7,385",
    followers: "582,299",
    content: "HS / Other card games.",
    twitter: "https://twitter.com/dogdog",
    instagram: "https://www.instagram.com/liquid_hsdog/"
  }
]

function App() {

  return (
    <div className="App">
      <Sidebar /> 
      <Header />
      <Controller>
        <Scene classToggle="onScreenF" triggerHook={0.2} triggerElement="#fortniteToggle" reverse={false}>
          <div id="fortniteToggle">
            <section id="fortnite">
              <img className="fortnite-title" src={require('./images/fortnite-title.svg')} />
              <GameSection streamers={fortniteStreamers} />
            </section>
          </div>
        </Scene>
        <Scene classToggle="onScreenL" triggerHook={0.2} triggerElement="#lolToggle" reverse={false}>
          <div id="lolToggle">
            <section id="lol">
              <img className="lol-title" src={require('./images/lol-title.svg')} />
              <GameSection streamers={lolStreamers} />
            </section>
          </div>
        </Scene>
        <Scene  classToggle="onScreenW" triggerHook={0.2} triggerElement="#wowToggle" reverse={false}>
          <div id="wowToggle">
            <section id="wow">
              <img className="wow-title" src={require('./images/wow-title.svg')} />
              <GameSection streamers={wowStreamers} />
            </section>
          </div>
        </Scene>
        <Scene classToggle="onScreenG" triggerHook={0.2} triggerElement="#gtaToggle" reverse={false}>
          <div id="gtaToggle">
            <section id="gta">
              <img className="gta-title" src={require('./images/gta-title.svg')} />
              <GameSection streamers={gtaVStreamers} />
            </section>
          </div>
        </Scene>
        <Scene classToggle="onScreenH" triggerHook={0.2} triggerElement="#hsToggle" reverse={false}>
          <div id="hsToggle">
            <section id="hs">
              <img className="hs-title" src={require('./images/hs-title.svg')} />
              <GameSection streamers={hsStreamers} />
            </section>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default App;
