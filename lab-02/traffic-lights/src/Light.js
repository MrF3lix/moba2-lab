import './Light.css'

export default function Light({color, active}) {
  return (
    <div 
        className={`light ${active ? 'active' : 'inactive'}`}
        style={{
            backgroundColor: color
        }}
    />
  );
}
