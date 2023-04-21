import React, {useEffect} from 'react';

function Menu({menuObject}) {

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
            <ul className='w-full p-0'>

                {/* Render MenuList */}
                { menuObject && menuObject.map((menu,ind)=>{
                    return <li className='relative md:my-2 my-6 w-full py-2' key={ind}>
                            <a href="#" className='text-[#848484] flex items-center flex-col justify-center text-sm md:ml-0 ml-2 hover:text-white'>
                                <i className='text-2xl'>{menu.icon}</i>
                                <span className='inline mt-1'>{menu.name}</span>
                            </a>
                        </li>
                    })
                }
            </ul>
        </section>
  )
}

export {Menu}; 