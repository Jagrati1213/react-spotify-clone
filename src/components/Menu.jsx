import React, {useEffect} from 'react';

function Menu({title,menuObject}) {

    // add active class in menu
    useEffect(()=>{
      const allList = document.querySelector('.menuContainer ul').querySelectorAll('li');

    function changeMenuActive(){
        allList.forEach(n=>n.classList.remove('active'));
        this.classList.add('active')
    }
    allList.forEach((n)=>{
        n.addEventListener('click', changeMenuActive);
    })
    },[]);
  return (
        // Menu container
        <section className='menuContainer my-4'>
            <p className='text-[#848484] md:text-base  text-sm font-bold mb-3 uppercase md:text-left text-center'>{title}</p>

            <ul className='w-full p-0'>

                {/* Render MenuList */}
                { menuObject && menuObject.map((menu,ind)=>{
                    return <li className='relative md:my-2 my-6 w-full py-2' key={ind}>
                            <a href="#" className='text-[#848484] flex items-center text-base md:ml-0 ml-2 hover:text-white'>
                                <i className='text-2xl md:text-lg md:mr-4'>{menu.icon}</i>
                                <span className='hidden md:inline'>{menu.name}</span>
                            </a>
                        </li>
                    })
                }
            </ul>
        </section>
  )
}

export {Menu}; 