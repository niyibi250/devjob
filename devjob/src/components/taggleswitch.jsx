
import sun from '../../assets/desktop/icon-sun.svg' 
import moon from '../../assets/desktop/icon-moon.svg'       


function Taggleswitch()
{
    return(
        <div className=' flex flex-row justify-center items-center'>
            <img src={sun} alt="sun" className='w-[15px] h-[15px]'/>
            <label class="inline-flex items-center cursor-pointer m-2">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <img src={moon} alt="moon"  className='w-[15px] h-[15px]' />
            
        </div>

    )
}

export default Taggleswitch