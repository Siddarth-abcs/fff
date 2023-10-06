import ShowItems from "../ShowItems/ShowItems"


const HomeComponent = () => {


  const folders = ["New folder", "new folder 2"];
  const files = ["New file", "new file 2"];

  return (
    <div>
      <ShowItems title={"Created Folder"} items={folders} />
      <ShowItems title={"Created Files"} items={files} />
    </div>
  )
}

export default HomeComponent
