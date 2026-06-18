
 export function BtnTopo(){

    return <button className="topo" onClick={()=> window.scrollTo({top:0,behavior:"smooth"})}>Ir ao topo</button>
}