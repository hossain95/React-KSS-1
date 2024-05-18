/* eslint-disable no-unused-vars */
import DefaultAndNamedExport from "./3_defaultAndNamed/DefaultAndNamedExport";
import DefaultExport from "./1_defaultExport/DefaultExport";
import NamedExport from "./2_namedExport/NamedExport";
const ExportAndImportContainer = () => {
  return (
    <div>
      {/* default export */}
      <DefaultExport />
      {/* named export */}
      {/* <NamedExport /> */}
      {/* default and named export */}
      {/* <DefaultAndNamedExport /> */}
    </div>
  );
};

export default ExportAndImportContainer;
