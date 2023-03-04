import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { LowInventoryData, lowInventoryLevelsGrid } from '../data/dummy';
const LowInventoryLevels = () => {
  return (
    <GridComponent
      // className='border rounded-xl'
      id='overviewgrid'
      dataSource={LowInventoryData}
    >
      <ColumnsDirective>
        {lowInventoryLevelsGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Resize, Sort]} />
    </GridComponent>
  );
};

export default LowInventoryLevels;
