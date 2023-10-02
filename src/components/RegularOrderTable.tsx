import { useEffect, useState } from 'react'
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Resize
} from "@syncfusion/ej2-react-grids";
import { useQueryClient  } from '@tanstack/react-query'
import { by_sku } from '../assets/mock';
import { TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useQuery } from "@tanstack/react-query"
import { regularOrderAction } from '../api/ManageApi'

const RegularOrderTable = () => {

  const { t } = useTranslation();

  const { isLoading, error, data } = useQuery({
    queryKey: ['regularOrder'],
    queryFn: fillQuantities,
  })

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!data) return
    // Create a function to compare two objects by a specific field
    const hasFieldChanged = (prev, current, field) => prev[field] !== current[field];

    // Check if the 'customQuantity' field of any object has changed
    const hasNameChanged = data?.suggested_order_items?.some((item, index) =>
      hasFieldChanged(item, data.suggested_order_items[index], 'customQuantity')
    );

    if (hasNameChanged) {
      console.log('Name field has changed in one of the objects.');
    }
  }, [data]);

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  let grid: any;

  async function fillQuantities() {
    try {
      const result = await regularOrderAction()
      result.suggested_order_items = result.suggested_order_items.map(item => {
        return { ...item, customQuantity: item.quantity || 0 }
      })
      return result
    } catch (e) {
      console.log(e)
    }
  }

  // Update the data on input change
  const handleInputChange = (e, id) => {
    const newValue = e.target.value;

    // Update the data in React Query cache
    // You might need to replace 'getData' with the actual query key used in your app
    // This updates the 'value' field of the specific item in the cache
    // without triggering a re-fetch
    queryClient.setQueryData('regularOrder', (prevData) =>
      prevData.suggested_order_items.map((item) =>
        item.item_id === item_id ? { ...item, value: newValue } : item
      )
    );
  };

  const quantityTemplate = ({ customQuantity, item_id } = props) => {
    return <Box sx={{ height: 24, width: 40 }}>
      <TextField defaultValue={customQuantity} onChange={(e) => handleInputChange(e, item_id)} variant="standard" type="number" size="small" />
    </Box>
  };

  const totalTemplate = (props) => {
    return <Box sx={{ height: 24 }}>
      {parseInt(props.size) * parseInt(props.customQuantity)}
    </Box>
  };

  const dataBound = () => {
    if (grid) {
      grid.autoFitColumns(['sku_name', 'sku_brand_name', 'sku_parent_name', 'price', 'quantity']);
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
        <ColumnDirective field="total" headerText={t('regularOrder.total')} template={totalTemplate} />
      </ColumnsDirective>
    </GridComponent>
  );

};

export default RegularOrderTable;