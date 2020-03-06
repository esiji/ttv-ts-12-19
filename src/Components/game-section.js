import React, {useState, useEffect} from 'react';

function GameSection(props) {

  let [streamer, setStreamer] = useState(props.streamers[0])

  const changeStreamer = (e) => {
    const name = e.target.id
    let index = 0
    props.streamers.forEach(person => {
      if(person.name === name){
        index = props.streamers.indexOf(person)
      }
    })
    setStreamer(props.streamers[index])
  }

  useEffect(() => {
    document.getElementById(streamer.name).style.opacity = 1
  },[])

  useEffect(() => {
    props.streamers.forEach(person => {
      if(person.name === streamer.name) {
        document.getElementById(person.name).style.opacity = 1
      }else{
        document.getElementById(person.name).style.opacity = 0.6
      }
    })
  }, [streamer])

  return (
      <article className="game-section container-fluid">
          <div className="game-container shadow p-3 mb-5 bg-white rounded d-flex">
            <section className="streamers d-flex flex-wrap">
                <img onClick={changeStreamer} id={props.streamers[0].name} className="mx-1 shadow rounded" src={props.streamers[0].src} />
                <img onClick={changeStreamer} id={props.streamers[1].name} className="mx-1 shadow rounded" src={props.streamers[1].src} />
                <img onClick={changeStreamer} id={props.streamers[2].name} className="mx-1 shadow rounded" src={props.streamers[2].src} />
                <img onClick={changeStreamer} id={props.streamers[3].name} className="mx-1 shadow rounded" src={props.streamers[3].src} />
            </section>
            <section className="information shadow p-3 mb-5 bg-white rounded row">
                <h2 className="text-center col-12">{streamer.name}</h2>
                <p className="col-5">Language: </p>
                <p className="col-6">{streamer.country} </p>
                <p className="col-5">Avg viewers: </p>
                <p className="col-6">{streamer.avgViewers} </p>
                <p className="col-5">Followers: </p>
                <p className="col-6">{streamer.followers} </p>
                <p className="col-5 text-left">Content:</p>
                <p className="col-6">{streamer.content} </p>
                <p className="col-5 sm">Social media: </p>
                <div className="col-6">
                  <a className="social" href={streamer.twitch} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M9.97 18.492l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175zm8.433-9.179h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791z"/></svg>
                  </a>
                  <a className="ml-2" href={streamer.youtube} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"/></svg>
                  </a>
                  {streamer.twitter ?                   
                  <a className="ml-2" href={streamer.twitter} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
                  </a> : ""}
                  {streamer.instagram ?                   
                  <a className="ml-2" href={streamer.instagram} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
                  </a> : ""}
                  {streamer.facebook ? 
                  <a className="ml-2" href={streamer.facebook} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                  </a>: ""}
                  {streamer.vk ? 
                  <a className="ml-2" href={streamer.vk} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z"/></svg>
                  </a>: ""}
                </div>
            </section>
          </div>
      </article>
  );
}

export default GameSection;
