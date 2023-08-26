import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
} from "@syncfusion/ej2-react-grids";
import { by_sku } from '../assets/mock';

const BySkuTable = () => {
    const data = by_sku;
    console.log(data);

    return (
        <GridComponent dataSource={data}>
            <ColumnsDirective>
                <ColumnDirective field="item_id" />
                <ColumnDirective field="sku_name" />
                <ColumnDirective field="sku_parent_name" />
                <ColumnDirective field="sku_brand_name" />
                <ColumnDirective field="category" />
                <ColumnDirective field="suggested_amount_for_pos_that_ordered" />
                <ColumnDirective field="suggested_amount_total" />
                <ColumnDirective field="order_amount" />
                <ColumnDirective field="diff" />
                <ColumnDirective field="diff_perc" />
                <ColumnDirective field="total_suggested_perc_reached" />
            </ColumnsDirective>
        </GridComponent>
    );
};

export default BySkuTable;