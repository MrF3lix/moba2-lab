import { useEffect, useState } from "react"

const INITIAL_STATE = 0

const State = {
    GO_1: 0,        // Light 1: Green  | Light 2: Red
    WAIT_1: 1,      // Light 1: Yellow | Light 2: Red
    GO_2: 2,        // Light 1: Red    | Light 2: Green
    WAIT_2: 3,      // Light 1: Red    | Light 2: Yellow
}

const Color = {
    RED: 'red',
    YELLOW: 'yellow',
    GREEN: 'green'
}

const LightState = {
    RED: 0,
    YELLOW: 1,
    GREEN: 2,
}

export const TrafficLightSystem = () => {
    const [state, setState] = useState(INITIAL_STATE)
    const [light1, setLight1] = useState()
    const [light2, setLight2] = useState()

    const nextState = () => setState((state + 1) % 4)

    useEffect(() => {
        switch (state) {
            case State.GO_1:
                setLight1(LightState.GREEN)
                setLight2(LightState.RED)
                break
            case State.WAIT_1:
                setLight1(LightState.YELLOW)
                setLight2(LightState.RED)
                break
            case State.GO_2:
                setLight1(LightState.RED)
                setLight2(LightState.GREEN)
                break
            case State.WAIT_2:
                setLight1(LightState.RED)
                setLight2(LightState.YELLOW)
                break
            default:
                console.error('STATE NOT SUPPORTED')
                break
        }
    }, [state])

    return (
        <>
            <div className="traffic__light__container">
                <TrafficLight state={light1} />
                <TrafficLight state={light2} />
            </div>
            <button onClick={nextState}>Next</button>
        </>
    )
}

export const TrafficLight = ({ state }) => {
    return (
        <div className="traffic__light">
            <Light color={Color.RED} active={state === 0} />
            <Light color={Color.YELLOW} active={state === 1} />
            <Light color={Color.GREEN} active={state === 2} />
        </div>
    )
}

const Light = ({ color, active }) => {
    return (
        <div
            className="light"
            style={{ backgroundColor: color, opacity: active ? 1 : 0.3 }}
        />
    )
}