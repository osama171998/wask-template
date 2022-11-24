import classess from "../../styles/Navbar.module.css"

const Navbar = ({items}:NavbarProps) =>{
    return <div className={classess.mainContainer}>
        <div className={classess.logoPortion}>
            Logo
        </div>
        <div className={classess.itemPortionLargeScreen}>
                {
                    items.map((item,index)=>{
                        return <ul key={index} className={classess.listStyling}>
                            <li>{item}</li>
                        </ul>
                    })
                }
             
        </div>
    </div>
}
export default Navbar

interface NavbarProps{
    items:string []
  }