import './Subbar.css'

const Subbar = ({setIsCreateFolderModelOpen}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-4">
       <p>Root</p> 

       <ul className='navbar-nav ms-auto'>
        <li className='nav-item '>
            <button className='btn btn-outline-dark btn-sm'>
            <i class="fa-regular fa-folder mx-2 "></i>
            Upload File
            </button>
        </li>
        <li className='nav-item mx-2'>
            <button className='btn btn-outline-dark btn-sm'>
            <i class="fa-regular fa-folder mx-2 "></i>
            Create File
            </button>
        </li>
        <li className='nav-item '>
            <button className='btn btn-outline-dark btn-sm'onClick={()=>setIsCreateFolderModelOpen(true)}>
            <i class="fa-regular fa-folder mx-2 "></i>
            Create Folder
            </button>
        </li>
       </ul>
    </nav>
  )
}

export default Subbar;
