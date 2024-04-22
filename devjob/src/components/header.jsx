import Headercontent from "./headercontent"

function Header()
{
    return(
        <div className=" bg-header-image bg-cover bg-no-repeat bg-right  w-full h-[100px] flex justify-center items-center fixed top-0 z-[1]">
            <Headercontent></Headercontent>
        </div>
    )
}

export default Header