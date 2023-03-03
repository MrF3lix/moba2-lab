import TrafficLight from "./TrafficLight";
import './TrafficLights.css'

export default function TrafficLights() {
    return (
        <div className="traffic-lights">
            <TrafficLight timeout={1000} />
            <TrafficLight timeout={4000} />
        </div>
    );
  }
  