/* eslint-disable no-unused-vars */
import ConditionalRenderingContainer from "./components/conditionalRendering/ConditionalRenderingContainer";
import ExportAndImportContainer from "./components/exportAndImport/ExportAndImportContainer";
import PropsContainer from "./components/props/PropsContainer";
import RenderingListContainer from "./components/renderingList/RenderingListContainer";


function App() {
  return (
    <div className="container">
      {/* <ExportAndImportContainer /> */}
      {/* <PropsContainer /> */}
      {/* <ConditionalRenderingContainer /> */}
      <RenderingListContainer/>
    </div>
  );
}

export default App;
