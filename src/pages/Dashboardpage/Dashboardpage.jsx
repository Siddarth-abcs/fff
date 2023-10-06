import { useEffect, useState } from 'react'
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Dashboard Component/Navbar/Navbar';
import Subbar from '../../components/Dashboard Component/Subbar/Subbar';
import HomeComponent from '../../components/Dashboard Component/HomeComponent/HomeComponent';
import CreateFolder from '../../components/Dashboard Component/CreateFolder/CreateFolder';


const DashboardPage = () => {

  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) {
      navigate("/")
    }
  },[]);

  return (
    <>
    {
      isCreateFolderModelOpen && (
      <CreateFolder setIsCreateFolderModelOpen={setIsCreateFolderModelOpen}
       />
    )}
    <Navbar />
    <Subbar 
    setIsCreateFolderModelOpen={setIsCreateFolderModelOpen}
    />
    <HomeComponent />
    </>
  )

}

export default DashboardPage;
