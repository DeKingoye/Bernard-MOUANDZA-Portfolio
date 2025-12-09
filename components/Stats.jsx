import CountUp from "react-countup"

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
        <div className="flex gap-4">
            <div className="text-5xl font-bold text-accent flex">
                <CountUp end={5} duration={4} delay={1} className="block w-[60px]"/>
                {/* <div>+</div> */}
            </div>
            <span>
                Ans <br/> d'Experience
            </span>
        </div>

        <div className="flex gap-4">
            <div className="text-5xl font-bold text-accent flex">
                {/* <CountUp end={3} duration={5} delay={0} className="block w-[60px]"/> */}
                {/* <div>+</div> */}
            </div>
            {/* <span>
                Clients <br/> dans le monde
            </span> */}
        </div>
    </div>
  )
}

export default Stats