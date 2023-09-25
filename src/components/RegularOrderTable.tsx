import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Resize
} from "@syncfusion/ej2-react-grids";
import { by_sku } from '../assets/mock';
import { TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RegularOrderTable = () => {

  const { t } = useTranslation();

  const data = by_sku;
  let grid: any;

  const customTemplate = (props) => {
    return <Box sx={{ height: 24 }}>
      <TextField variant="standard" type="number" size="small" />
    </Box>
  };

  const dataBound = () => {
    if (grid) {
      grid.autoFitColumns(['sku_name', 'sku_brand_name']);
    }
  };

  return (
    <GridComponent dataSource={data} dataBound={dataBound} ref={g => grid = g}>
      <Inject services={[Resize]} />
      <ColumnsDirective>
        <ColumnDirective field="sku_name" headerText={t('regularOrder.name')} />
        <ColumnDirective field="sku_parent_name" headerText={t('regularOrder.parent')} />
        <ColumnDirective field="sku_brand_name" headerText={t('catalogue.brand')} />
        <ColumnDirective field="sub_category" headerText={t('catalogue.subcategory')} />
        <ColumnDirective field="size" headerText={t('regularOrder.size')} />
        <ColumnDirective field="unit_of_measure_short" headerText={t('regularOrder.unit')} />
        <ColumnDirective field="price" headerText={t('regularOrder.price')} />
        <ColumnDirective field="suggested_quantity" headerText={t('regularOrder.suggestedQuantity')} />
        <ColumnDirective field="history" headerText={t('regularOrder.history')} />
        <ColumnDirective field="quantity" headerText={t('regularOrder.quantity')} template={customTemplate} />
        <ColumnDirective field="total" headerText={t('regularOrder.total')} />
      </ColumnsDirective>
    </GridComponent>
  );

};

export default RegularOrderTable;