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
import { useQuery } from "@tanstack/react-query"
import { regularOrderAction } from '../api/ManageApi'

const RegularOrderTable = () => {

  const { t } = useTranslation();

  const { isLoading, error, data } = useQuery({
    queryKey: ['regularOrder'],
    queryFn: regularOrderAction,
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  let grid: any;

  const quantityTemplate = ({ quantity } = props) => {
    return <Box sx={{ height: 24 }}>
      <TextField defaultValue={quantity} variant="standard" type="number" size="small" />
    </Box>
  };

  const totalTemplate = (props) => {
    return <Box sx={{ height: 24 }}>
      {parseInt(props.size) * parseInt(props.quantity)}
    </Box>
  };

  const dataBound = () => {
    if (grid) {
      grid.autoFitColumns(['sku_name', 'sku_brand_name', 'sku_parent_name', 'price']);
    }
  };

  return (
    <GridComponent dataSource={data?.suggested_order_items} dataBound={dataBound} ref={g => grid = g}>
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
        <ColumnDirective field="order_history_quantity" headerText={t('regularOrder.history')} />
        <ColumnDirective field="quantity" headerText={t('regularOrder.quantity')} template={quantityTemplate} />
        <ColumnDirective field="total" headerText={t('regularOrder.total')} template={totalTemplate}/>
      </ColumnsDirective>
    </GridComponent>
  );

};

export default RegularOrderTable;