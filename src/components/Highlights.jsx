import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"
import { animateWithGsap } from "../utils/animations"

const Highlights = () => {

  function exitSite(event, link) {
    const userConfirmed = window.confirm("You are about to leave my page and will be redirected to the official Apple Website. Do you want to continue?");
    if (!userConfirmed) {
        event.preventDefault(); 
    } else {
        window.location.href = link;
    }
  }

    useGSAP(() => {

      animateWithGsap(('#title'), {opacity: 1, y: 0})

      gsap.to(('.link'),{
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25
      })

    },[])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-wodth">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film 
              <img src={watchImg} alt="watch" className="ml-2"/>
            </p>
            <p className="link" onClick={(event) =>{exitSite(event, "https://www.apple.com/apple-events/")}}>
              Watch the event 
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel/>

      </div>
    </section>
  )
}

export default Highlights